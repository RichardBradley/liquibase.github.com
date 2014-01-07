---
layout: default
title: Rollbackfuturedatabase ant task
subnav: subnav_documentation.md
---

## rollbackFutureDatabase Ant Task ##

Outputs SQL to un-run changes that have not yet been executed.  See [rollback](../rollback.html) for more information.

### Sample ###

{% highlight xml %}
<target name="rollbackFuture" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.file not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <rollbackFutureDatabase
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            classpathref="classpath"
            >
    </rollbackFutureDatabase>
</target>
{% endhighlight %}



### Available Parameters ###

<table>
<tr><td>changeLogFile</td><td>The change log file to run **required**  </td></tr>
<tr><td>driver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>url</td><td>The database URL **required**  </td></tr>
<tr><td>username</td><td>The database username to connect with **required**  </td></tr>
<tr><td>password</td><td>The password to use when connecting to the database **required**  </td></tr>
<tr><td>defaultSchemaName</td><td>Schema to use by default for managed database objects and Liquibase control tables  </td></tr>
<tr><td>outputFile</td><td>Save SQL to given file rather than executing  **required**  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file</td></tr>
<tr><td>contexts</td><td>A comma separated list of [contexts](../contexts.html) to execute. If not specified, all contexts are run.  </td></tr>
<tr><td>currentDateTimeFunction</td><td>Overrides current date time function used in SQL. Useful for unsupported databases</td></tr>
<tr><td>databaseChangeLogTableName</td><td>Overrides the name of the databasechangelog table to use **Since Liquibase 1.9** </td></tr>
<tr><td>databaseChangeLogLockTableName</td><td>Overrides the name of the databasechangeloglock table to use **Since Liquibase 1.9** </td></tr>
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
