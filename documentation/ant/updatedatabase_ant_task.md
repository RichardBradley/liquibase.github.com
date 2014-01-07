---
layout: default
title: Updatedatabase ant task
subnav: subnav_documentation.md
---

## updateDatabase Ant Task ##

Applies un-run changes to the database.  



### Sample ###

{% highlight xml %}
<target name="update-database" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.file not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <updateDatabase
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            dropFirst="false"
            classpathref="classpath"
    />
    
</target>
{% endhighlight %}




### Available Parameters ###
FIXME: Annotate which is required.

<table>
<tr><td>changeLogFile</td><td>The change log file to run</td></tr>
<tr><td>driver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>url</td><td>The database URL</td></tr>
<tr><td>username</td><td>The database username to connect with</td></tr>
<tr><td>password</td><td>The password to use when connecting to the database</td></tr>
<tr><td>defaultSchemaName</td><td>Schema to use by default for managed database objects and Liquibase control tables  </td></tr>
<tr><td>outputFile</td><td>Save SQL to given file rather than executing  </td></tr>
<tr><td>promptOnNonLocalDatabase</td><td>If set to true (default is false) a dialog box with warn you if you attempt to run the Liquibase against a database that is not on localhost  </td></tr>
<tr><td>dropFirst</td><td>If set to true, Liquibase will first drop all database objects owned by the connected user \[defaults to FALSE\]  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file</td></tr>
<tr><td>contexts</td><td>A comma separated list of [contexts](../contexts.html) to execute. If not specified, all contexts are run.  </td></tr>
<tr><td>currentDateTimeFunction</td><td>Overrides current date time function used in SQL. Useful for unsupported databases</td></tr>
<tr><td>databaseChangeLogTableName</td><td>Overrides the name of the databasechangelog table to use  </td></tr>
<tr><td>databaseChangeLogLockTableName</td><td>Overrides the name of the databasechangeloglock table to use  </td></tr>
<tr><td>logLevel</td><td>Specifies one of the following logging levels: debug, info, warning, severe, off. The default level is info.</td></tr>
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
