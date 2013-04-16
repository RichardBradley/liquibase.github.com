---
layout: default
title: Diffdatabase ant task
---

## diffDatabase Ant Task ##

Outputs a [diff](../diff.html) report of the difference between two databases.

### Sample ###

{% highlight xml %}
<target name="diff-database" depends="prepare">

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <diffDatabase
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"

            referenceUrl="${database.url}"
            referenceUsername="${database.username}"
            referencePassword="${database.password}"

            outputFile="path/to/outputfile.txt"
            classpathref="classpath"
            >
    </diffDatabase>
</target>
{% endhighlight %}




### Available Parameters ###

<table>
<tr><td>driver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>url</td><td>The target database URL **required**  </td></tr>
<tr><td>username</td><td>The target database username to connect with **required**  </td></tr>
<tr><td>password</td><td>The target database password **required**  </td></tr>
<tr><td>defaultSchemaName</td><td>Schema to use by default for managed database objects and Liquibase control tables  </td></tr>
<tr><td>referenceDriver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>referenceUrl</td><td>The base database URL **required**  </td></tr>
<tr><td>referenceUsername</td><td>The base database username to connect with **required**  </td></tr>
<tr><td>referencePassword</td><td>The base database password **required**  </td></tr>
<tr><td>baseDefaultSchemaName</td><td>Schema to use by default for managed database objects and Liquibase control tables  </td></tr>
<tr><td>outputFile</td><td>Location of file to save report to **required**  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **required**  </td></tr>
<tr><td>databaseChangeLogTableName</td><td>Overrides the name of the databasechangelog table to use **Since Liquibase 1.9** </td></tr>
<tr><td>databaseChangeLogLockTableName</td><td>Overrides the name of the databasechangeloglock table to use **Since Liquibase 1.9** </td></tr>
</table>

### Available Sub Tags ###
<table>
<tr><td>changeLogProperty</td><td>Sets a [changelog_parameters](../changelog_parameters.html) set **Since Liquibase 1.7** </td></tr>
</table>

#### Available &lt;changeLogProperty&gt; Parameters ####
<table>
<tr><td>name</td><td>The name of the property to set</td></tr>
<tr><td>value</td><td>The value of the property to set</td></tr>
</table>