---
layout: default
title: Dropalldatabaseobjects ant task
---

## dropAllDatabaseObjects Ant Task ##

Drops all database objects owned by the user. Note that functions, procedures and packages are not dropped (limitation in 1.8.1). 

### Sample ###

{% highlight xml %}
<target name="dropAll" depends="prepare">
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <dropAllDatabaseObjects 
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            classpathref="classpath"
            >
    </dropAllDatabaseObjects >
</target>
{% endhighlight %}


### Available Parameters ###

^ driver  | The name of the database driver to connect with **required**  |
^ url  | The database URL **required**  |
^ username  | The database username to connect with **required**  |
^ password  | The password to use when connecting to the database **required**  |
^ defaultSchemaName  | Schema to drop objects in  |
^ outputFile  | Save SQL to given file rather than executing  |
^ promptOnNonLocalDatabase  | If set to true (default is false) a dialog box with warn you if you attempt to run the Liquibase against a database that is not on localhost  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **required**  |

### Available Sub Tags ###
^ changeLogProperty  | Sets a [changelog_parameters](../changelog_parameters.html) set //Since Liquibase 1.7// |

#### Available &lt;changeLogProperty&gt; Parameters ####
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
