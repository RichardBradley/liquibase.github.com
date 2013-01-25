---
layout: default
title: Updatedatabase ant task
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

^ changeLogFile  | The change log file to run  | 
^ driver  | The name of the database driver to connect with  | 
^ url  | The database URL  | 
^ username  | The database username to connect with  | 
^ password  | The password to use when connecting to the database  | 
^ defaultSchemaName  | Schema to use by default for managed database objects and LiquiBase control tables  |
^ outputFile  | Save SQL to given file rather than executing  |
^ promptOnNonLocalDatabase  | If set to true (default is false) a dialog box with warn you if you attempt to run the LiquiBase against a database that is not on localhost  | 
^ dropFirst  | If set to true, LiquiBase will first drop all database objects owned by the connected user \[defaults to FALSE\]  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file  | 
^ contexts  | A comma separated list of [contexts](contexts.html) to execute. If not specified, all contexts are run.  |
^ currentDateTimeFunction  | Overrides current date time function used in SQL. Useful for unsupported databases  | 
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use  |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use  |

### Available Sub Tags ###
^ changeLogProperty  | Sets a [changelog_parameters](changelog_parameters.html) set //Since LiquiBase 1.7// |

#### Available &lt;changeLogProperty&gt; Parameters ####
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
