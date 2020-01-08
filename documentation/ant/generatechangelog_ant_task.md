---
layout: default
title: Docs | Generatechangelog ant task 
subnav: subnav_documentation.md
---

## generateChangeLog Ant Task ##

[Generates changelog](../generating_changelogs.html) to re-create an existing database.

### Parameters ###

<table>
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>classpathref</td>
        <td>A reference to the classpath used to run the task with.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseref</td>
        <td>A reference to the database that Liquibase will connect to.</td>
        <td>Yes, unless a nested <code>&lt;database&gt;</code> element is present.</td>
    </tr>
    <tr>
        <td>promptOnNonLocalDatabase</td>
        <td>If set to true a dialog box with warn you if you attempt to run the Liquibase against a database that is not on localhost
        </td>
        <td>No; default is false.</td>
    </tr>
    <tr>
        <td>outputFile</td>
        <td><b>Deprecated:</b> Where to save the generated change log file.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>driver</td>
        <td><b>Deprecated:</b> The name of the database driver to connect with.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>url</td>
        <td><b>Deprecated:</b> The database URL.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>username</td>
        <td><b>Deprecated:</b> The database username to connect with.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>password</td>
        <td><b>Deprecated:</b> The password to use when connecting to the database.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>defaultSchemaName</td>
        <td><b>Deprecated:</b> Schema read objects from.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>currentDateTimeFunction</td>
        <td><b>Deprecated:</b> Overrides current date time function used in SQL. Useful for unsupported databases</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseChangeLogTableName</td>
        <td><b>Deprecated:</b> Overrides the name of the databasechangelog table to use <i>Since Liquibase 1.9</i></td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseChangeLogLockTableName</td>
        <td><b>Deprecated:</b> Overrides the name of the databasechangeloglock table to use <i>Since Liquibase 1.9</i></td>
        <td>No</td>
    </tr>
    <tr>
        <td>logLevel</td>
        <td><b>Deprecated:</b> Specifies one of the following logging levels: debug, info, warning, severe, off. The default level is info.
        </td>
        <td>No</td>
    </tr>
</table>

### Parameters Specified as Nested Elements ###

#### xml, yaml, json, or txt ####
 
This task is capable of generating change log files in multiple formats. At least one of these elements is required.

<table>
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>outputfile</td>
        <td>The location to write the changlog file to.</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>encoding</td>
        <td>The file encoding to use for the output file.</td>
        <td>No. Defaults to system encoding</td>
    </tr>
</table>

{% highlight xml %}
<liquibase:xml outputfile="/path/to/output/changelog.xml" encoding="UTF-8"/>
{% endhighlight %}

#### classpath ####

The classpath used to run the task with. Optional.

#### Database ####

Required unless a `databaseref` attribute is given. See [database data type](./index.html).

#### ChangeLogParameters ####

Optional. See [change log parameters](./index.html)

### Examples ###

{% highlight xml %}
<liquibase:generateChangeLog classpathref="classpath">
    <liquibase:database driver="${driver.class}" url="${jdbc.url}" user="${jdbc.user}" password="${jdbc.user}"/>
    <liquibase:xml outputfile="/path/to/output/changelog.xml" encoding="UTF-8"/>
</liquibase:generateChangeLog>
{% endhighlight %}

Generates a changelog file for the database in XML format.

{% highlight xml %}
<liquibase:generateChangeLog classpathref="classpath">
    <liquibase:database driver="${driver.class}" url="${jdbc.url}" user="${jdbc.user}" password="${jdbc.user}"/>
    <liquibase:xml outputfile="/path/to/output/changelog.xml" encoding="UTF-8"/>
    <liquibase:yaml outputfile="/path/to/output/changelog.yaml" encoding="UTF-8"/>
</liquibase:generateChangeLog>
{% endhighlight %}

Generates the change log in both XML and YAML format.
