---
layout: default
title: Tagdatabase ant task
subnav: subnav_documentation.md
---

## tagDatabase Ant Task ##

"Tags" the database for possible future rollback.  See [rollback](../rollback.html) for more information.

### Sample ###

{% highlight xml %}
<target name="tag" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.file not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <tagDatabase
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            tag="version 1.2"
            >
    </tagDatabase>
</target>
{% endhighlight %}



### Available Parameters ###

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>tag</td><td>Tag to apply to the database  </td></tr>
<tr><td>driver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>url</td><td>The database URL <b>required</b>  </td></tr>
<tr><td>username</td><td>The database username to connect with <b>required</b>  </td></tr>
<tr><td>password</td><td>The password to use when connecting to the database <b>required</b>  </td></tr>
<tr><td>defaultSchemaName</td><td>Schema to use for Liquibase control tables  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file <b>required</b>  </td></tr>
<tr><td>currentDateTimeFunction</td><td>Overrides current date time function used in SQL. Useful for unsupported databases</td></tr>
<tr><td>databaseChangeLogTableName</td><td>Overrides the name of the databasechangelog table to use <b>Since Liquibase 1.9</b> </td></tr>
<tr><td>databaseChangeLogLockTableName</td><td>Overrides the name of the databasechangeloglock table to use <b>Since Liquibase 1.9</b> </td></tr>
<tr><td>logLevel</td><td>Specifies one of the following logging levels: debug, info, warning, severe, off. The default level is info.</td></tr>
</table>

### Available Sub Tags ###
<table>
<tr><th>Tag</th><th>Description</th></tr>
<tr><td>changeLogProperty</td><td>Sets a [changelog_parameters](../changelog_parameters.html) set <b>Since Liquibase 1.7</b> </td></tr>
</table>

#### Available &lt;changeLogProperty&gt; Parameters ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>name</td><td>The name of the property to set</td></tr>
<tr><td>value</td><td>The value of the property to set</td></tr>
</table>
