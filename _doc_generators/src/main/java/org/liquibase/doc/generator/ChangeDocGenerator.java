package org.liquibase.doc.generator;


import liquibase.change.*;
import liquibase.change.core.*;
import liquibase.changelog.ChangeSet;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.core.HsqlDatabase;
import liquibase.database.core.MSSQLDatabase;
import liquibase.database.core.MySQLDatabase;
import liquibase.database.core.OracleDatabase;
import liquibase.resource.AbstractResourceAccessor;
import liquibase.resource.ClassLoaderResourceAccessor;
import liquibase.resource.CompositeResourceAccessor;
import liquibase.serializer.LiquibaseSerializable;
import liquibase.serializer.LiquibaseSerializable.SerializationType;
import liquibase.serializer.core.json.JsonChangeLogSerializer;
import liquibase.serializer.core.xml.XMLChangeLogSerializer;
import liquibase.serializer.core.yaml.YamlChangeLogSerializer;
import liquibase.sql.Sql;
import liquibase.sqlgenerator.SqlGeneratorFactory;
import liquibase.statement.SqlStatement;
import liquibase.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.*;
import java.util.stream.Stream;

public class ChangeDocGenerator {

    private static final Logger logger = LoggerFactory.getLogger(ChangeDocGenerator.class);

    public static void main(String[] args) throws Exception {
        logger.info("Generating documentation for all changes in included jar");
        Map<String, SortedSet<Class<? extends Change>>> definedChanges = ChangeFactory.getInstance().getRegistry();
        TreeMap<String, SortedSet<Class<? extends Change>>> sortedChanges = new TreeMap<>(definedChanges);

        List<Database> databases = DatabaseFactory.getInstance().getImplementedDatabases();
        Collections.sort(databases, new Comparator<Database>() {
            @Override
            public int compare(Database o1, Database o2) {
                return o1.getDatabaseProductName().compareTo(o2.getDatabaseProductName());
            }
        });

        writeChangeNav(sortedChanges);
        writeChangePages(sortedChanges, databases);
    }

    private static void writeChangeNav(Map<String, SortedSet<Class<? extends Change>>> definedChanges) throws Exception {
        // Ensure the directory exists so we know we are running in the right place.
        File includesDir = new File("_includes");
        if (!includesDir.exists() || !includesDir.isDirectory()) {
            logger.error("The directory '" + includesDir.getAbsolutePath() + "' was not found. Copy the jar file to the root directory of the project and re-run.");
            System.exit(1);
        }

        String content = "";
        content = addGeneratedHeader(content);
        content += "<li><a href=\"/documentation/index.html\"><span>Documentation Home</span></a></li>\n\n<hr>\n";

        // Write out the Pro changes
        content += "<h3 style='color: #fd8c00'>Liquibase Pro Changes</h3>\n";
        content += addChangesToContent(definedChanges, true);

        // Write out the Core changes
        content += "\n<hr>\n";
        content += "<h3 style='color: #747373'>Liquibase Changes</h3>\n\n";
        content += addChangesToContent(definedChanges, false);

        // Write out the file
        File file = new File("_includes/subnav_documentation_changes.md");
        new FileOutputStream(file).write(content.getBytes());
    }

    private static String addChangesToContent(Map<String, SortedSet<Class<? extends Change>>> definedChanges, boolean onlyProClasses) {
        StringBuilder content = new StringBuilder();
        for (Map.Entry mapEntry : definedChanges.entrySet()) {
            String changeName = (String) mapEntry.getKey();
            SortedSet<Class<? extends Change>> changeClasses = (SortedSet<Class<? extends Change>>) mapEntry.getValue();
            for (Class change : changeClasses) {
                String packageName = change.getName();
                String navEntry = "<li><a href='" + getChangeDocFileName(changeName) + ".html'><span>" + changeName.replaceAll("([A-Z])", " $1") + "</span></a></li>\n";
                if (onlyProClasses) {
                    if (isProClass(packageName)) {
                        logger.info("adding Pro subnav entry for {}", change.getSimpleName());
                        content.append(navEntry);
                    }
                } else {
                    if (!isProClass(packageName)) {
                        logger.info("adding Core subnav entry for {}", change.getSimpleName());
                        content.append(navEntry);
                    }
                }
            }
        }
        return content.toString();
    }

    // return true if the change is in one of the "pro" packages, false if part of core.
    private static boolean isProClass(String packageName) {
        return packageName.startsWith("com.datical");
    }

    private static void writeChangePages(Map<String, SortedSet<Class<? extends Change>>> definedChanges, List<Database> databases) throws Exception {
        List<Database> exampleDatabases = new ArrayList<Database>(databases);
        exampleDatabases.add(0, new HsqlDatabase());
        exampleDatabases.add(0, new OracleDatabase());
        exampleDatabases.add(0, new MSSQLDatabase());
        MySQLDatabase defaultExampleDatabase = new MySQLDatabase();
        exampleDatabases.add(0, defaultExampleDatabase);

        for (String changeName : definedChanges.keySet()) {
            Change exampleChange = ChangeFactory.getInstance().create(changeName);
            ChangeMetaData changeMetaData = ChangeFactory.getInstance().getChangeMetaData(exampleChange);
            for (ChangeParameterMetaData param : changeMetaData.getParameters().values()) {
                if (param.getParameterName().equals("encoding")) {
                    param.setValue(exampleChange, "UTF-8");
                } else if (param.getParameterName().equals("replaceIfExists")) {
                    param.setValue(exampleChange, false);
                } else if (param.getParameterName().equals("defaultOnNull")) {
                    param.setValue(exampleChange, false);
                } else if (Collection.class.isAssignableFrom(param.getDataTypeClass())) {
                    Collection exampleValue = (Collection)param.getExampleValue(defaultExampleDatabase);
                    if (param.getDataType().endsWith(" of columnConfig")) {
                        ColumnConfig columnConfig = new ColumnConfig().setName("address");
                        if( exampleChange instanceof InsertDataChange ||
                            exampleChange instanceof UpdateDataChange ) {
                            columnConfig.setValue("address value");
                        }
                        exampleValue = Arrays.asList(columnConfig);
                    } else if (param.getDataType().endsWith(" of addColumnConfig")) {
                        AddColumnConfig columnConfig = new AddColumnConfig();
                        columnConfig.setName("address");
                        if(exampleChange instanceof CreateIndexChange) {
                            columnConfig.setDescending(true);
                            exampleValue = Arrays.asList(columnConfig);
                        }else {
                            columnConfig.setType("varchar(255)");
                            columnConfig.setPosition(2);
                            AddColumnConfig cfg2 = new AddColumnConfig();
                            cfg2.setName("name");
                            cfg2.setType("varchar(50)");
                            cfg2.setAfterColumn("id");
                            ConstraintsConfig constraint = new ConstraintsConfig().setNullable(false);
                            exampleValue = Arrays.asList(columnConfig, cfg2.setConstraints(constraint));
                        }
                    }

                    if (null == exampleValue) {
                        logger.warn("No example values for: " + param.getParameterName() + ": " + param.getDataType());
                    } else {
                        ((Collection)param.getCurrentValue(exampleChange)).addAll(exampleValue);
                    }
                } else {
                    Object exampleValue = param.getExampleValue(defaultExampleDatabase);
                    if (exampleValue != null && exampleValue.equals("A String")) {
                        if (param.getParameterName().toLowerCase().contains("schema") || param.getParameterName().toLowerCase().contains("catalog")) {
                            exampleValue = null;
                        }
                    }
                    param.setValue(exampleChange, exampleValue);
                }
            }

            String content = "---\n" +
                    "layout: default\n" +
                    "title: Docs | Change '" + changeMetaData.getName() + "'\n" +
                    "---\n\n";

            content = addGeneratedHeader(content);

            content += "  <script>\n" +
                    "  $(function() {\n" +
                    "    $( \"#changelog-tabs\" ).tabs();\n" +
                    "  });\n" +
                    "</script>\n\n";

            ChangeSet exampleChangeSet = new ChangeSet(exampleChange.getSerializedObjectName() + "-example", "liquibase-docs", false, false,
                    "changelog.xml", null, null, null, null);
            exampleChangeSet.addChange(exampleChange);

            content += "# Change: '" + changeMetaData.getName() + "'\n\n";
            content += changeMetaData.getDescription().replace("<", "&lt;").replace(">", "&gt;").replace("\\", "\\\\").replace("*", "\\*") + "\n\n";

            content += "## Available Attributes ##\n\n";
            content += "<table>\n";
            content += "<tr><th>Name</th><th>Description</th><th>Required&nbsp;For</th><th>Supports</th><th>Since</th></tr>\n";
            List<ChangeParameterMetaData> params = new ArrayList<>(changeMetaData.getParameters().values());
            Collections.sort(params, new Comparator<ChangeParameterMetaData>() {
                @Override
                public int compare(ChangeParameterMetaData o1, ChangeParameterMetaData o2) {
                    return o1.getParameterName().compareTo(o2.getParameterName());
                }
            });

            List<ChangeParameterMetaData> nestedParams = new ArrayList<>();
            for (ChangeParameterMetaData param : params) {
                if (param.getDataType().matches(".* of .*")
                   || param.getSerializationType() == SerializationType.NESTED_OBJECT) {
                    nestedParams.add(param);
                    continue;
                }

                TreeSet<String> requiredForDatabase = new TreeSet<>(param.getRequiredForDatabase());
                String required = StringUtils.trimToEmpty(StringUtils.join(requiredForDatabase, ", "));

                TreeSet<String> supportsDatabase = new TreeSet<>(param.getSupportedDatabases());
                String supports = StringUtils.trimToEmpty(StringUtils.join(supportsDatabase, ", "));

                content += "<tr><td style='vertical-align: top'>" + param.getParameterName() +
                            "</td><td style='vertical-align: top'>" + getParamDescription(changeMetaData, param) +
                            "</td><td style='vertical-align: top'>" + required +
                            "</td><td style='vertical-align:top'>" + supports +
                            "</td><td style='vertical-align: top'>" + StringUtils.trimToEmpty(param.getSince())
                        + "</td></tr>\n";
            }
            content += "</table>\n\n";

            if (nestedParams.size() > 0) {
                content += "## Nested Properties ##\n\n";
                content += "<table>\n";
                content += "<tr><th>Name</th><th>Description</th><th>Required&nbsp;For</th><th>Supports</th><th>Multiple&nbsp;Allowed</th></tr>\n";

                for (ChangeParameterMetaData param : nestedParams) {
                    boolean list = param.getDataType().startsWith("list of")
                            && param.getSerializationType() != SerializationType.NESTED_OBJECT;

                    Set<String> requiredForDatabase = param.getRequiredForDatabase();
                    String required = StringUtils.trimToEmpty(StringUtils.join(requiredForDatabase, ", "));

                    Set<String> supportsDatabase = param.getSupportedDatabases();
                    String supports = StringUtils.trimToEmpty(StringUtils.join(supportsDatabase, ", "));

                    String description = getParamDescription(changeMetaData, param);
                    String createIndex = "createIndex";
                    String name = param.getParameterName() ;
                    if(param.getDataType().matches(".* of .*")) {
                        Class collectionType = (Class)param.getDataTypeClassParameters()[0];
                        if (collectionType.getSimpleName().equals("ColumnConfig") ||
                                (collectionType.getSimpleName().equals("AddColumnConfig") && !changeName.equals(createIndex))
                        ) {
                            description += "<br><br>See the <a href='../column.html'>column tag</a> documentation for more information";
                        }else if (LiquibaseSerializable.class.isAssignableFrom(collectionType)) {
                            LiquibaseSerializable child = (LiquibaseSerializable) collectionType.getConstructor().newInstance();
                            String childName = child.getSerializedObjectName();
                            // Not nested element -> inner children are described only
                            if (param.getSerializationType() != SerializationType.NESTED_OBJECT) {
                                name += "? / " + childName;
                            } else {
                                description += "<p></p><h3>Nested element(s): " + childName + "</h3>";
                            }
                            description += "<h4> Attributes</h4>" +
                                    "<table>{%include " + (changeName.equals(createIndex) ? "IndexColumnConfig":
                                    collectionType.getSimpleName()) + ".md%}</table>";
                        }
                    }

                    content += "<tr><td style='vertical-align: top'>" + name + "</td><td style='vertical-align: top'>" + description + "</td><td style='vertical-align: top'>" + required + "</td><td style='vertical-align: top'>" + supports + "</td><td style='vertical-align: top'>" + (list ? "yes" : "no") + "</td></tr>\n";
                }
                content += "</table>\n";
            }

            content += "<div id='changelog-tabs'>\n" +
                    "<ul>\n" +
                    "    <li><a href=\"#tab-xml\">XML Sample</a></li>\n" +
                    "    <li><a href=\"#tab-yaml\">YAML Sample</a></li>\n" +
                    "    <li><a href=\"#tab-json\">JSON Sample</a></li>\n" +
                    "  </ul>\n";
            content += "<div id='tab-xml'>\n";
            content += "{% highlight xml %}\n";
            content += new XMLChangeLogSerializer().serialize(exampleChangeSet, true);
            content += "\n{% endhighlight %}\n";
            content += "</div>\n";

            content += "<div id='tab-yaml'>\n";
            content += "{% highlight yaml %}\n";
            content += new YamlChangeLogSerializer().serialize(exampleChangeSet, true);
            content += "\n{% endhighlight %}\n";
            content += "</div>\n";

            content += "<div id='tab-json'>\n";
            content += "{% highlight json %}\n";
            content += new JsonChangeLogSerializer().serialize(exampleChangeSet, true);
            content += "\n{% endhighlight %}\n";
            content += "</div>\n";

            content += "</div>\n\n\n";

            exampleChange.setResourceAccessor(new CompositeResourceAccessor(new ClassLoaderResourceAccessor(ChangeDocGenerator.class.getClassLoader()), new FakeDataResourceAccessor()));
            if (exampleChange instanceof CreateProcedureChange) {
                ((CreateProcedureChange) exampleChange).setPath(null); // use procedureText.
            } else if (exampleChange instanceof CreateViewChange) {
                ((CreateViewChange) exampleChange).setPath(null); // use selectQuery
                ((CreateViewChange) exampleChange).setFullDefinition(false); // fix to match example selectQuery
            } else if (exampleChange instanceof LoadDataChange) {
                ((LoadDataChange) exampleChange).setFile("org/liquibase/doc/generator/example.csv");
            } else if (exampleChange instanceof SQLFileChange) {
                ((SQLFileChange) exampleChange).setPath("org/liquibase/doc/generator/sqlfile.sql");
            }

            Database exampleDatabase = null;
            for (Database db : exampleDatabases) {
                if (exampleChange.supports(db)) {
                    exampleDatabase = db;
                    break;
                }
            }

            if (exampleChange instanceof LoadDataChange) {
                ((LoadDataChange) exampleChange).setFile("org/liquibase/doc/generator/example.csv");
            }

            if (canGeneratePage(exampleChange, exampleDatabase)) {
                if (exampleDatabase != null) {
                    String sql = "";
                    try {
                        for (SqlStatement statement : exampleChange.generateStatements(exampleDatabase)) {
                            Sql[] sqls = SqlGeneratorFactory.getInstance().generateSql(statement, exampleDatabase);
                            if (sqls != null) {
                                for (Sql out : sqls) {
                                    sql += out.toSql() + out.getEndDelimiter() + "\n\n";
                                }
                            }
                        }
                    } catch (Throwable e) {
                        throw e;
                    }
                    sql = sql.replace(",", ",\n");
                    content += "## SQL Generated From Above Sample (" + exampleDatabase.getDatabaseProductName() + ")\n\n";
                    content += "{% highlight sql %}\n";
                    content += sql;
                    content += "\n{% endhighlight %}\n\n";
                }
            }

            content += "## Database Support\n\n";
            content += "<table style='border:1;'>\n";
            content += "<tr><th>Database</th><th>Notes</th><th>Auto Rollback</th></tr>\n";
            for (Database database : databases) {
                if (database.getShortName().equals("unsupported")) {
                    continue;
                }

                String supported;
                if (exampleChange.supports(database)) {
                    supported = "<b>Supported</b>";
                } else {
                    supported = "Not Supported";
                }
                String notes = StringUtils.trimToNull(changeMetaData.getNotes(database.getShortName()));
                if (notes != null) {
                    supported += ": " + notes;
                }

                String rollback;
                if (exampleChange.supportsRollback(database)) {
                    rollback = "<b>Yes</b>";
                } else {
                    rollback = "No";
                }

                content += "<tr><td>" + database.getDatabaseProductName() + "</td><td>" + supported + "</td><td>" + rollback + "</td></tr>\n";
            }
            content += "</table>\n";

            if (exampleChange instanceof CreateProcedureChange) {
                // Fix deprecated attribute name
                content = content.replaceAll("procedureBody", "procedureText");
            }

            String changename = changeMetaData.getName();

            File documentationDir = new File("documentation");
            if (! documentationDir.exists() || ! documentationDir.isDirectory()) {
                logger.error("The directory '" + documentationDir.getAbsolutePath() + "' was not found. Copy the jar file to the root directory of the project and re-run.");
                System.exit(1);
            }

            String pathname = "documentation/changes/" + getChangeDocFileName(changename) + ".md";
            File file = new File(pathname);
            logger.info("Writing content to '" + pathname + "'");
            new FileOutputStream(file).write(content.getBytes());
        }
    }

	 /** Get param description. Return generic if not set */
    private static String getParamDescription(ChangeMetaData changeMetaData, ChangeParameterMetaData param) {
        String description = param.getDescription();
        if (StringUtils.isEmpty(description)) {
            Optional<String> fileOrPath = Stream.of("file", "path")
                    .filter((String p) -> changeMetaData.getParameters().get(p) != null).findFirst();
            switch (param.getParameterName()) {
                case "encoding":
                    if (fileOrPath.isPresent()) {
                        description = "Encoding used in the file defined in the `" + fileOrPath.get() + "` attribute";
                    }
                    break;
                case "relativeToChangelogFile":
                    description = "Whether the file path relative to the root changelog file rather than to the " +
                            "classpath.";
                    break;
                case "dbms":
                    description = "Logical expression of database type(s) on which the change must be applied. " +
                            "Valid database type names are listed on the <a href='../../databases.html'>supported " +
                            "databases page</a>\n" +
                            "It can be a comma separated list of multiple databases.\n" +
                            "Or You can also specify that a change is <b>NOT</b> applicable to a " +
                            "particular database type by prefixing with <code>!</code>. " +
                            "The keywords <code>all</code> and <code>none</code> are also available.";
                    break;
            }
        }
        return description;
    }

    private static boolean canGeneratePage(Change exampleChange, Database exampleDatabase) {
        return !(exampleChange instanceof CreateProcedureChange)
                && !(exampleChange instanceof SQLFileChange)
                && !exampleChange.generateStatementsVolatile(exampleDatabase);
    }

    private static String addGeneratedHeader(String content) {
        content += "<!-- ====================================================== -->\n";
        content += "<!-- GENERATED BY ChangeDocGenerator DO NOT MODIFY MANUALLY -->\n";
        content += "<!-- ====================================================== -->\n\n";
        return content;
    }

    private static String getChangeDocFileName(String changename) {
        return changename.replaceAll("([A-Z])", "_$1").toLowerCase();
    }

    private static class FakeDataResourceAccessor extends AbstractResourceAccessor {
        @Override
        public Set<InputStream> getResourcesAsStream(String path) throws IOException {
//            if (path.endsWith("sql")) {
            return Collections.singleton(new ByteArrayInputStream("RANDOM SQL HERE".getBytes()));
//            }
//            throw new RuntimeException("Unknown path "+path);
        }

        @Override
        public Set<String> list(String s, String s1, boolean b, boolean b1, boolean b2) throws IOException {
            return Collections.emptySet();
        }

        @Override
        public ClassLoader toClassLoader() {
            return null;
        }
    }
}
