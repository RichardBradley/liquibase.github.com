---
layout: default
title: Rollbackfuturedatabase ant task
---

## rollbackFutureDatabase Ant Task ##

Outputs SQL to un-run changes that have not yet been executed.  See [rollback](rollback.html) for more information.

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

^ changeLogFile  | The change log file to run **required**  |
^ driver  | The name of the database driver to connect with  | 
^ url  | The database URL **required**  |
^ username  | The database username to connect with **required**  |
^ password  | The password to use when connecting to the database **required**  |
^ defaultSchemaName  | Schema to use by default for managed database objects and LiquiBase control tables  |
^ outputFile  | Save SQL to given file rather than executing  **required**  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file  | 
^ contexts  | A comma separated list of [contexts](contexts.html) to execute. If not specified, all contexts are run.  |
^ currentDateTimeFunction  | Overrides current date time function used in SQL. Useful for unsupported databases  | 
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use //Since LiquiBase 1.9// |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use //Since LiquiBase 1.9// |

### Available Sub Tags ###
^ changeLogProperty  | Sets a [changelog_parameters](changelog_parameters.html) set //Since LiquiBase 1.7// |

#### Available &lt;changeLogProperty&gt; Parameters ####
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
