---
layout: default
title: Rollbackdatabase ant task
---

## rollbackDatabase Ant Task ##

Rolls back database changes.  See [rollback](rollback.html) page for more information.

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

^ changeLogFile  | The change log file to run  | 
^ driver  | The name of the database driver to connect with  | 
^ url  | The database URL  | 
^ username  | The database username to connect with  | 
^ password  | The password to use when connecting to the database  | 
^ defaultSchemaName  | Schema to use as a default for managed database objects and for Liquibase control tables  |
^ outputFile  | Outputs SQL to file rather than execute it directly  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml files  | 
^ rollbackTag  | Tag to roll back to  | 
^ rollbackDate  | Date to roll back to  | 
^ rollbackCount  | Number of changeSets to roll back  | 
^ contexts  | A comma separated list of [contexts](contexts.html) to roll back. If not specified, all contexts are rolled back.  |
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use //Since Liquibase 1.9// |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use //Since Liquibase 1.9// |

### Available Sub Tags ###
^ changeLogProperty  | Sets a [changelog_parameters](changelog_parameters.html) set //Since Liquibase 1.7// |

#### Available &lt;changeLogProperty&gt; Parameters ####
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 