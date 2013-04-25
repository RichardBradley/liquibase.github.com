---
layout: default
title: Dropalldatabaseobjects ant task
subnav: subnav_documentation.md
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

<table>
<tr><td>driver</td><td>The name of the database driver to connect with **required**  </td></tr>
<tr><td>url</td><td>The database URL **required**  </td></tr>
<tr><td>username</td><td>The database username to connect with **required**  </td></tr>
<tr><td>password</td><td>The password to use when connecting to the database **required**  </td></tr>
<tr><td>defaultSchemaName</td><td>Schema to drop objects in  </td></tr>
<tr><td>outputFile</td><td>Save SQL to given file rather than executing  </td></tr>
<tr><td>promptOnNonLocalDatabase</td><td>If set to true (default is false) a dialog box with warn you if you attempt to run the Liquibase against a database that is not on localhost  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **required**  </td></tr>
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