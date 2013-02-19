package org.liquibase.doc.generator;


import liquibase.change.Change;
import liquibase.change.ChangeFactory;
import liquibase.change.ChangeMetaData;
import liquibase.change.ChangeParameterMetaData;
import liquibase.serializer.core.xml.XMLChangeLogSerializer;
import liquibase.util.StringUtils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;

public class ChangeDocGenerator {

    public static void main(String[] args) throws IOException {
        Map<String, SortedSet<Class<? extends Change>>> definedChanges = ChangeFactory.getInstance().getRegistry();


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

            content += "# " + changeMetaData.getName() + " #\n\n";
            content += changeMetaData.getDescription() + "\n\n";

            content += "* Hi\n";
            content += "* there\n\n";

            content += "## Sample ##\n\n";
            content += "{% highlight xml %}\n";
            content += new XMLChangeLogSerializer().serialize(exampleChange);
            content += "\n{% endhighlight %}\n\n";

            content += "## Available Attributes ##\n\n";
            content += "<table>\n";
            content += "<tr><th>Name</th><th>Description</th><th>Required For</th></tr>\n";
            for (ChangeParameterMetaData param : changeMetaData.getParameters().values()) {
                Set<String> requiredForDatabase = param.getRequiredForDatabase();
                String required = StringUtils.trimToEmpty(StringUtils.join(requiredForDatabase, ", "));

                content += "<tr><td>"+param.getParameterName() + "</td><td>" + param.getDescription() + "</td><td>" + required+"</td></tr>\n";
            }
            content += "</table>\n";


            System.out.println(content);

            File file = new File("documentation/changes/" + changeMetaData.getName().replaceAll("([A-Z])", "_$1").toLowerCase() + ".md");
            new FileOutputStream(file).write(content.getBytes());



        }
    }
}
