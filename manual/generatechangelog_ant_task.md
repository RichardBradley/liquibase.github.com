---
layout: default
title: Generatechangelog ant task
---

## generateChangeLog Ant Task ##

[Generates changelog](generating_changelogs.html) to re-create an existing database.


### Sample ###

<code xml>
<target name="generateChangelog" depends="prepare">
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>

    <generateChangeLog
            outputFile="path/to/output.xml"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            />
</target>
</code>



### Available Parameters ###

^ outputFile  | Where to save the generated change log file **[required]**  | 
^ driver  | The name of the database driver to connect with  | 
^ url  | The database URL **[required]**  | 
^ username  | The database username to connect with **[required]**  | 
^ password  | The password to use when connecting to the database **[required]**  | 
^ defaultSchemaName  | Schema read objects from  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **[required]**  | 
^ currentDateTimeFunction  | Overrides current date time function used in SQL. Useful for unsupported databases  | 
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use //Since LiquiBase 1.9// |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use //Since LiquiBase 1.9// |

### Available Sub Tags ###
^ changeLogProperty  | Sets a [changelog_parameters](changelog_parameters.html) set //Since LiquiBase 1.7// |

#### Available <changeLogProperty> Parameters ####
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
