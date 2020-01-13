---
layout: default
title: Docs | Diffdatabase ant task 
subnav: subnav_documentation.md
---

# diffDatabase Ant Task

Outputs a [diff](../diff.html) report of the difference between two databases.

## Parameters

<table>
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>outputFile</td>
        <td>Location of file to save report to.</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>outputEncoding</td>
        <td>The character encoding to use when writing to output file.</td>
        <td>No; defaults to system encoding.</td>
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
        <td>referencedatabaseref</td>
        <td>A reference to the reference database that Liquibase will connect to.</td>
        <td>Yes, unless a nested <code>&lt;referencedatabase&gt;</code> element is present.</td>
    </tr>
    <tr>
        <td>difftypes</td>
        <td>A comma separated list of diff types to use.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>promptOnNonLocalDatabase</td>
        <td>If set to true a dialog box with warn you if you attempt to run the Liquibase against a database that is not on localhost.</td>
        <td>No; default is false.</td>
    </tr>
    <tr>
        <td>driver</td>
        <td><b>Deprecated:</b> Name of the database driver to connect with.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>url</td>
        <td><b>Deprecated:</b> Use <code>&lt;database&gt;</code>'s url attribute instead. The database URL</td>
        <td>No</td>
    </tr>
    <tr>
        <td>username</td>
        <td><b>Deprecated:</b>The database username to connect with</td>
        <td>No</td>
    </tr>
    <tr>
        <td>password</td>
        <td><b>Deprecated:</b>The password to use when connecting to the database</td>
        <td>No</td>
    </tr>
    <tr>
        <td>defaultSchemaName</td>
        <td><b>Deprecated:</b>Schema to use by default for managed database objects and Liquibase control tables</td>
        <td>No</td>
    </tr>
    <tr>
        <td>currentDateTimeFunction</td>
        <td><b>Deprecated:</b> Overrides current date time function used in SQL. Useful for unsupported databases</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseChangeLogTableName</td>
        <td><b>Deprecated:</b> Overrides the name of the databasechangelog table to use</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseChangeLogLockTableName</td>
        <td><b>Deprecated:</b> Overrides the name of the databasechangeloglock table to use</td>
        <td>No</td>
    </tr>
    <tr>
        <td>referenceDriver</td>
        <td><b>Deprecated:</b> The name of the database driver to connect with.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>referenceUrl</td>
        <td><b>Deprecated:</b> The base database URL.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>referenceUsername</td>
        <td><b>Deprecated:</b> The base database username to connect with.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>referencePassword</td>
        <td><b>Deprecated:</b> The base database password.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>logLevel</td>
        <td><b>Deprecated:</b> Specifies one of the following logging levels: debug, info, warning, severe, off. The default level is info.</td>
        <td>No</td>
    </tr>
</table>

## Parameters Specified as Nested Elements

### classpath

The classpath used to run the task with. Optional. 

### database

Required unless a `databaseref` attribute is given. See [database data type](./index.html).

### referencedatabase

Required unless a `referencedatabaseref` attribute is given. See [database data type](./index.html).

### changelogparameters

Optional. See [change log parameters](./index.html)

## Examples

{% highlight xml %}
<liquibase:diffDatabase outputfile="/path/to/diff.txt">
    <liquibase:database driver="${db1.driver}" url="${db1.url}" user="${db1.user}" password="${db1.password}"/>
    <liquibase:referenceDatabase driver="${db2.driver}" url="${db2.jdbc.url}" user="${db2.user}" password="${db2.password}"/>
</liquibase:diffDatabase>
{% endhighlight %}

A basic implementation fo the diffDatabase task.
