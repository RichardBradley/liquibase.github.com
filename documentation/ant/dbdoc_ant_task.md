---
layout: default
title: Dbdoc ant task
root: ..
---

## dbDoc Ant Task ##

Generates [dbdoc](dbdoc.html) database documentation for a given database.

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

    <dbDoc
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            outputDirectory="/path/to/doc/root/directory"
            classpathref="classpath"
            >
    </dbDoc>
</target>
{% endhighlight %}



### Available Parameters ###

^ changeLogFile  | The change log file to run **required**  |
^ driver  | The name of the database driver to connect with  | 
^ url  | The database URL **required**  |
^ username  | The database username to connect with **required**  |
^ password  | The password to use when connecting to the database **required**  |
^ defaultSchemaName  | Schema to use by default for managed database objects and Liquibase control tables  |
^ outputDirectory  | Directory to save report in **required**  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **required**  |
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use //Since Liquibase 1.9// |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use //Since Liquibase 1.9// |

### Available Sub Tags ###
^ changeLogProperty  | Sets a [changelog_parameters](changelog_parameters.html) set //Since Liquibase 1.7// |

#### Available &lt;changeLogProperty&gt; Parameters ####
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
