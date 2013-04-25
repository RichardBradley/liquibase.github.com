---
layout: default
title: Generatechangelog ant task
subnav: subnav_documentation.md
---

## generateChangeLog Ant Task ##

[Generates changelog](../generating_changelogs.html) to re-create an existing database.


### Sample ###

{% highlight xml %}
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
{% endhighlight %}



### Available Parameters ###

<table>
<tr><td>outputFile</td><td>Where to save the generated change log file **required**  </td></tr>
<tr><td>driver</td><td>The name of the database driver to connect with</td></tr>
<tr><td>url</td><td>The database URL **required**  </td></tr>
<tr><td>username</td><td>The database username to connect with **required**  </td></tr>
<tr><td>password</td><td>The password to use when connecting to the database **required**  </td></tr>
<tr><td>defaultSchemaName</td><td>Schema read objects from  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **required**  </td></tr>
<tr><td>currentDateTimeFunction</td><td>Overrides current date time function used in SQL. Useful for unsupported databases</td></tr>
<tr><td>databaseChangeLogTableName</td><td>Overrides the name of the databasechangelog table to use **Since Liquibase 1.9** </td></tr>
<tr><td>databaseChangeLogLockTableName</td><td>Overrides the name of the databasechangeloglock table to use **Since Liquibase 1.9** </td></tr>
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