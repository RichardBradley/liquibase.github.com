---
layout: default
title: Rollbackdatabase ant task
---

## rollbackDatabase Ant Task ##

Rolls back database changes.  See [rollback](../rollback.html) page for more information.

### Sample ###

{% highlight xml %}
<target name="rollback-database" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.files not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>

    <rollbackDatabase
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            rollbackTag="release1.2"
            >
    </rollbackDatabase>
</target>
{% endhighlight %}



### Available Parameters ###

<table>
<tr><td>changeLogFile</td><td>The change log file to run</td></tr>
<tr><td>driver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>url</td><td>The database URL</td></tr>
<tr><td>username</td><td>The database username to connect with</td></tr>
<tr><td>password</td><td>The password to use when connecting to the database</td></tr>
<tr><td>defaultSchemaName</td><td>Schema to use as a default for managed database objects and for Liquibase control tables  </td></tr>
<tr><td>outputFile</td><td>Outputs SQL to file rather than execute it directly  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml files</td></tr>
<tr><td>rollbackTag</td><td>Tag to roll back to</td></tr>
<tr><td>rollbackDate</td><td>Date to roll back to</td></tr>
<tr><td>rollbackCount</td><td>Number of changeSets to roll back</td></tr>
<tr><td>contexts</td><td>A comma separated list of [contexts](../contexts.html) to roll back. If not specified, all contexts are rolled back.  </td></tr>
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