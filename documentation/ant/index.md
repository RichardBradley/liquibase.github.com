---
layout: default
title: Docs | Ant 
subnav: subnav_documentation.md
---

# Liquibase Ant Tasks #

Liquibase has a set of Ant tasks that provides 

## Installation ##

The Ant tasks require Ant 1.7.1 or higher. To include the tasks in your build, make sure Liquibase is on your Ant classpath and load it via the `<taskdef>` task:

{% highlight xml %}
<project name="Example" xmlns:liquibase="antlib:liquibase.integration.ant">
	<taskdef resource="liquibase/integration/ant/antlib.xml" uri="antlib:liquibase.integration.ant">
		<classpath path="path/to/liquibase/libs"/>
	</taskdef>
</project>
{% endhighlight %}

You can also place the Liquibase jar in your `ANT_HOME/lib` folder.

## Concepts and Types ##

### Database ###

All of the Liquibase Ant tasks are designed around the `<database>` type. This element configures the database connection and corresponding settings that Liquibase will use when accessing and updating the database. It is a required in all Liquibase Ant tasks.

<table>
    <tr>
        <th>Attribute</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>id</td>
        <td>Unique identifier for this type instance, can be used to reference this type in tasks.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>driver</td>
        <td>The fully qualified class name of the JDBC driver.</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>url</td>
        <td>The JDBC connection URL.</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>user</td>
        <td>The username to the JDBC connection.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>password</td>
        <td>The password to the JDBC connection.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>defaultSchemaName</td>
        <td>The schema to use by default for managed database objects and Liquibase control tables.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>defaultCatalogName</td>
        <td>The catalog to use by default for managed database objects and Liquibase control tables.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>outputDefaultSchema</td>
        <td>Output the default schema name.</td>
        <td>No; Default is true</td>
    </tr>
    <tr>
        <td>outputDefaultCatalog</td>
        <td>Output the default catalog name.</td>
        <td>No; Default is true</td>
    </tr>
    <tr>
        <td>liquibaseSchemaName</td>
        <td>The schema name where the Liquibase tables will be located.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>liquibaseCatalogName</td>
        <td>The catalog name where the Liquibase tables will be located.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseClass</td>
        <td>A fully qualified class name of a class that implements the <code>Database</code> interface. Used to add database types that are not officially supported by Liquibase.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseChangeLogTableName</td>
        <td>Overrides the name of the DATABASECHANGELOG table.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>databaseChangeLogLockTableName</td>
        <td>Overrides the name of the DATABASECHANGELOGLOCK table.</td>
        <td>No</td>
    </tr>
    <tr>
        <td>liquibaseTablespaceName</td>
        <td>The name of the tablespace where Liquibase tables are located.</td>
        <td>No</td>
    </tr>
</table>

{% highlight xml %}
	<liquibase:database id="my-database" driver="${db.driver}" url="${db.url}" user="${db.user}" password="${db.password}"/>
{% endhighlight %}

If you use more than one Liquibase task in your Ant build, you can create the `<database`> anywhere in your build, give it an id, and reference it using the `databaseref` attribute:

{% highlight xml %}
	<liquibase:database id="my-database" driver="${db.driver}" url="${db.url}" user="${db.user}" password="${db.pass}"/>
	
	<liquibase:update databaseref="my-database" changelogfile="path/to/changelog.xml"/>
	<liquibase:tag databaseref="my-database" tag="new-tag"/>
{% endhighlight %}

The `<database>` type also supports a nested element `<connectionProperties>` which allows users to specify custom JDBC connection properties to Liquibase:

{% highlight xml %}
<liquibase:database id="my-database" driver="${db.driver}" url="${db.url}" user="${db.user}" password="${db.pass}">
	<liquibase:connectionproperties>
		<liquibase:connectionproperty name="prop1" value="value1"/>
		<liquibase:connectionproperty name="prop2" value="value2"/>
		<propertyset>
			<propertyref prefix="liquibase"/>
		</propertyset>
	</liquibase:connectionproperties>
</liquibase:database>
{% endhighlight %}

### Change Log Parameters ###

Liquibase change log files can have parameters that are dynamically substituted at runtime. All Liquibase Ant tasks support these parameters by way of the `<changeLogParameters>` element.

{% highlight xml %}
<liquibase:updateDatabase databaseref="my-database" changelogfile="/path/to/changelog.xml">
	<liquibase:changeLogParameters>
		<liquibase:changeLogParameter name="name1" value="value1"/>
		<liquibase:changeLogParameter name="name2" value="value2"/>
		<propertyset>
			<propertyref prefix="params"/>
		</propertyset>
	</liquibase:changeLogParameters>
</liquibase:updateDatabase>
{% endhighlight %}

## Tasks ##

The following tasks are available in Ant:

* [updateDatabase](updatedatabase_ant_task.html)
* [rollbackDatabase](rollbackdatabase_ant_task.html)
* [rollbackFutureDatabase](rollbackfuturedatabase_ant_task.html)
* [tagDatabase](tagdatabase_ant_task.html)
* [generateChangeLog](generatechangelog_ant_task.html)
* [diffDatabase](diffdatabase_ant_task.html)
* [diffDatabaseToChangeLog](diffdatabasetochangelog_ant_task.html)
* [dbDoc](dbdoc_ant_task.html)
* [changeLogSync](changelogsync_ant_task.html)
* [dropAllDatabaseObjects](dropalldatabaseobjects_ant_task.html)
* [markNextChangeSetRan](marknextchangesetran_ant_task.html)

Additional Liquibase commands are supported by the [command line](../command_line.html) that are not supported by the Ant tasks.

## Migrating From Legacy Tasks ##

Starting in Liquibase 3.3 the ant tasks were refactored, moving all of the database attributes out of the task and into its own type. The deprecated attributes will now log a warning message instructing callers of the deprecation. While backward compatibility exists, it is advised that users migrate their ant builds to use the new tasks.

In order to use the new Liquibase tasks, the `<taskdef>` needs to be redefined to use the `antlib.xml` file:

{% highlight xml %}
<project name="Example" xmlns:liquibase="antlib:liquibase.integration.ant">
	<taskdef resource="liquibase/integration/ant/antlib.xml" uri="antlib:liquibase.integration.ant">
		<classpath path="path/to/liquibase/libs"/>
	</taskdef>
</project>
{% endhighlight %}

Here is an example of a legacy update task:

{% highlight xml %}
<updateDatabase changeLogFile="${db.changelog.file}" 
				driver="${db.driver}"
				url="${db.url}"
				username="${db.username}"
				password="${db.password}"
				promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
				dropFirst="false"
				classpathref="classpath"/>
{% endhighlight %}

Here is what it looks like migrated to the new task structure:

{% highlight xml %}
<liquibase:updateDatabase changeLogFile="/path/to/changelog.xml" 
						  dropFirst="false" 
						  classpathref="classpath"
						  promptOnNonLocalDatabase="${prompt.user.if.not.local.database}">
	<liquibase:database driver="${db.driver}" 
						url="${db.url}" 
						user="${db.user}" 
						password="${db.password}"/>
</liquibase:updateDatabase>
{% endhighlight %}
