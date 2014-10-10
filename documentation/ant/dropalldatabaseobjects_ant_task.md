---
layout: default
title: Dropalldatabaseobjects ant task
subnav: subnav_documentation.md
---

## dropAllDatabaseObjects Ant Task ##

Drops all database objects owned by the user. Note that functions, procedures and packages are not dropped (limitation in 1.8.1). 

### Parameters ###

<table>
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>promptOnNonLocalDatabase</td>
        <td>If set to true a dialog box with warn you if you attempt to run the Liquibase against a database that is not on localhost
        </td>
        <td>No; default is false.</td>
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
        <td>logLevel</td>
        <td><b>Deprecated:</b> Specifies one of the following logging levels: debug, info, warning, severe, off. The default level is info.</td>
        <td>No</td>
    </tr>
</table>

#### classpath ####

The classpath used to run the task with. Optional.

#### Database ####

Required unless a `databaseref` attribute is given. See [database data type](./index.html).

#### ChangeLogParameters ####

Optional. See [change log parameters](./index.html)

### Examples ###

{% highlight xml %}
<liquibase:dropAllDatabaseObjects>
    <liquibase:database driver="${db.driver}" url="${db.url}" user="${db.user}" password="${db.password}"/>
</liquibase:dropAllDatabaseObjects>
{% endhighlight %}
