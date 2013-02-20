package org.liquibase.doc.generator;


import liquibase.change.Change;
import liquibase.change.ChangeFactory;
import liquibase.change.ChangeMetaData;
import liquibase.change.ChangeParameterMetaData;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.core.HsqlDatabase;
import liquibase.database.core.MSSQLDatabase;
import liquibase.database.core.MySQLDatabase;
import liquibase.database.core.OracleDatabase;
import liquibase.exception.UnsupportedChangeException;
import liquibase.serializer.core.xml.XMLChangeLogSerializer;
import liquibase.sql.Sql;
import liquibase.sqlgenerator.SqlGeneratorFactory;
import liquibase.statement.SqlStatement;
import liquibase.util.StringUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

public class ChangeDocGenerator {

    public static void main(String[] args) throws IOException, UnsupportedChangeException {
        Map<String, SortedSet<Class<? extends Change>>> definedChanges = ChangeFactory.getInstance().getRegistry();
        List<Database> databases = DatabaseFactory.getInstance().getImplementedDatabases();
        Collections.sort(databases, new Comparator<Database>() {
            @Override
            public int compare(Database o1, Database o2) {
                return o1.getDatabaseProductName().compareTo(o2.getDatabaseProductName());
            }
        });
        List<Database> exampleDatabases = new ArrayList<Database>(databases);
        exampleDatabases.add(0, new HsqlDatabase());
        exampleDatabases.add(0, new OracleDatabase());
        exampleDatabases.add(0, new MSSQLDatabase());
        exampleDatabases.add(0, new MySQLDatabase());


        for (String changeName : definedChanges.keySet()) {
            System.out.println("--------------------");

            Change exampleChange = ChangeFactory.getInstance().create(changeName);
            ChangeMetaData changeMetaData = exampleChange.getChangeMetaData();

            for (ChangeParameterMetaData param : changeMetaData.getParameters().values()) {
                param.setValue(exampleChange, param.getExampleValue());
            }

            String content = "---\n" +
                    "layout: default\n" +
                    "title: Change " + changeMetaData.getName() + "\n" +
                    "root: ../..\n"+
                    "---\n\n";

            content += "# Change: '" + changeMetaData.getName() + "'\n\n";
            content += changeMetaData.getDescription() + "\n\n";

            content += "## XML Sample ##\n\n";
            content += "{% highlight xml %}\n";
            content += new XMLChangeLogSerializer().serialize(exampleChange, true);
            content += "\n{% endhighlight %}\n\n";

            content += "## Available Attributes ##\n\n";
            content += "<table>\n";
            content += "<tr><th>Name</th><th>Description</th><th>Required For Database</th></tr>\n";
            List<ChangeParameterMetaData> params = new ArrayList<ChangeParameterMetaData>(changeMetaData.getParameters().values());
            Collections.sort(params, new Comparator<ChangeParameterMetaData>() {
                @Override
                public int compare(ChangeParameterMetaData o1, ChangeParameterMetaData o2) {
                    return o1.getParameterName().compareTo(o2.getParameterName());
                }
            });

            for (ChangeParameterMetaData param : params) {
                Set<String> requiredForDatabase = param.getRequiredForDatabase();
                String required = StringUtils.trimToEmpty(StringUtils.join(requiredForDatabase, ", "));

                content += "<tr><td>"+param.getParameterName() + "</td><td>" + param.getDescription() + "</td><td>" + required+"</td></tr>\n";
            }
            content += "</table>\n";

            Database exampleDatabase = null;
            for (Database db : exampleDatabases) {
                if (exampleChange.supports(db)) {
                    exampleDatabase = db;
                    break;
                }
            }

            if (exampleDatabase != null) {
                String sql = "";
                for (SqlStatement statement : exampleChange.generateStatements(exampleDatabase)) {
                    for (Sql out : SqlGeneratorFactory.getInstance().generateSql(statement, exampleDatabase)) {
                        sql += out.toSql()+out.getEndDelimiter()+"\n\n";
                    }
                }
                sql = sql.replace(",",",\n");
                content += "## SQL Generated From Above Sample ("+exampleDatabase.getDatabaseProductName()+")\n\n";
                content += "{% highlight sql %}\n";
                content +=  sql;
                content += "\n{% endhighlight %}\n\n";
            }

            content += "## Database Support\n\n";
            content += "<table style='border:1;'>\n";
            content += "<tr><th>Database</th><th>Notes</th><th>Easy Rollback</th></tr>\n";
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
                    supported += ": "+notes;
                }

                String rollback;
                if (exampleChange.supportsRollback(database)) {
                    rollback = "<b>Yes</b>";
                } else {
                    rollback = "No";
                }

                content += "<tr><td>"+database.getDatabaseProductName()+"</td><td>"+ supported +"</td><td>"+rollback+"</td></tr>\n";
            }
            content += "</table>\n";

            System.out.println(content);

            File file = new File("documentation/changes/" + changeMetaData.getName().replaceAll("([A-Z])", "_$1").toLowerCase() + ".md");
            new FileOutputStream(file).write(content.getBytes());



        }
    }
}
