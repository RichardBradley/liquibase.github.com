---
layout: default
title: Preconditions
---

Preconditions can be attached to [change logs](databasechangelog.html) or [changesets](changeset.html) to control the execution of an update based on the state of the database.

There are several reasons to use preconditions, including:

* Document what assumptions the writers of the changelog had when creating it.
* Enforce that those assumptions are not violated by users running the changelog
* Perform data checks before performing an unrecoverable change such as [drop_Table](changes/drop_table.html)
* Control what changesets are run and not run based on the state of the database

If desired, a precondition can be the only tag in a `<changeSet>`.

Preconditions at the changelog level apply to **all** changesets, not just those listed in the current changelog or its child changelogs.

## Sample With Preconditions ##

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.8"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.8
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.8.xsd">
    <preConditions>
        <dbms type="oracle" />
        <runningAs username="SYSTEM" />
    </preConditions>

    <changeSet id="1" author="bob">
        <preConditions onFail="WARN">
            <sqlCheck expectedResult="0">select count(*) from oldtable</sqlCheck>
        </preConditions>
        <comment>Comments should go after preCondition. If they are before then liquibase usually gives error.</comment>
        <dropTable tableName="oldtable"/>
    </changeSet>
</databaseChangeLog>
{% endhighlight %}

The above changelog will only run if the database executed against is Oracle and the database user executing the script is "SYSTEM".  It will also only run the [drop_Table](changes/drop_table.html) command if there are no values in the "oldtable".

## Handling Failures and Errors ##

Liquibase distinguishes between precondition "failures" (check failed) and "errors" (exception thrown in execution of check) and the reaction to both can be controlled via the "onFail" and "onError" attributes on the `<preConditions>` tag.  **Since 1.8**

#### Available attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>onFail</td><td>What to do when preconditions fail (see below).</td></tr>
<tr><td>onError</td><td>What to do when preconditions error (see below).</td></tr>
<tr><td>onUpdateSQL</td><td>What to do in updateSQL mode (see below). <b>Since 1.9.5</b> </td></tr>
<tr><td>onFailMessage</td><td>Custom message to output when preconditions fail. <b>Since 2.0</b> </td></tr>
<tr><td>onErrorMessage</td><td>Custom message to output when preconditions fail. <b>Since 2.0</b>  </td></tr>
</table>

#### Possible onFail/onError values ####

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>HALT</td><td>Immediately halt execution of entire change log. <b>[DEFAULT]</b>  </td></tr>
<tr><td>CONTINUE</td><td>Skip over change set.  Execution of change set will be attempted again on the next update.  Continue with change log.</td></tr>
<tr><td>MARK_RAN</td><td>Skip over change set, but mark it as ran.  Continue with change log.</td></tr>
<tr><td>WARN</td><td>Output warning and continue executing change set/change log as normal.</td></tr>
</table>

Outside a changeset (e.g. at the beginning of the change log), only HALT and WARN are possible values.

#### Possible onUpdateSQL values ####

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>RUN</td><td>Run the changeSet in updateSQL mode.</td></tr>
<tr><td>FAIL</td><td>Fail the preCondition in updateSQL mode.</td></tr>
<tr><td>IGNORE</td><td>Ignore the preCondition in updateSQL mode.</td></tr>
</table>

## AND/OR/NOT Logic ##

Conditional logic can be applied to preconditions using nestable `<and>`, `<or>` and `<not>` tags. **If no conditional tags are specified, it defaults to AND**.

Examples:

{% highlight xml %}
    <preConditions onFail="WARN">
        <dbms type="oracle" />
        <runningAs username="SYSTEM" />
    </preConditions>
{% endhighlight %}

Will check that the update is running on Oracle AND with the SYSTEM user, but will only generate a warning if the precondition fails.

{% highlight xml %}
 <preConditions>
     <dbms type="oracle" />
     <dbms type="mysql" />
 </preConditions>
{% endhighlight %}

Will require running on Oracle AND MySQL, which will always be false, unless a huge and unexpected merger takes place.

{% highlight xml %}
 <preConditions>
     <or>
         <dbms type="oracle" />
         <dbms type="mysql" />
     </or>
 </preConditions>
{% endhighlight %}

Will require running on Oracle OR MySQL which makes more sense than the above example.

{% highlight xml %}
 <preConditions>
     <or>
         <and>
            <dbms type="oracle" />
            <runningAs username="SYSTEM" />
         </and>
         <and>
            <dbms type="mssql" />
            <runningAs username="sa" />
         </and>
     </or>
 </preConditions>
{% endhighlight %}

Will require running as SYSTEM if executing against an Oracle database or running as SA if running against a MS-SQL database.


## Available Preconditions ##


### &lt;dbms&gt; ###

Passes if the database executed against matches the type specified.

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>type</td><td>Type of <a href="../databases.html">database</a> expected. Multiple dbms values can be specified using comma separated values. <b>required</b>  </td></tr>
</table>

### &lt;runningAs&gt; ###

Passes if the database user executed under matches the username specified.

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>username</td><td>Database user script is expected to run as. <b>required</b></td></tr>
</table>

### &lt;changeSetExecuted&gt; ###

Passes if the specified change set has already been executed. **Since 1.8**

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>id</td><td>Change set "id". <b>required</b>  </td></tr>
<tr><td>author</td><td>Change set "author". <b>required</b>  </td></tr>
<tr><td>changeLogFile</td><td>File name (including classpath relative path) of change set. <b>required</b></td></tr>
</table>

### &lt;columnExists&gt; ###

Passes if the specified column exists in the database. **Since 1.8**

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the table's schema. <b>required</b></td></tr>
<tr><td>tableName</td><td>Name of the column's table. <b>required</b></td></tr>
<tr><td>columnName</td><td>Name of column. <b>required</b></td></tr>
</table>

### &lt;tableExists&gt; ###

Passes if the specified table exists in the database. **Since 1.8**

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the table's schema. <b>required*</b></td></tr>
<tr><td>tableName</td><td>Name of the table. <b>required</b></td></tr>
</table>

### &lt;viewExists&gt; ###

Passes if the specified view exists in the database. **Since 1.8**

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the view's schema. <b>required</b></td></tr>
<tr><td>viewName</td><td>Name of the view. <b>required</b></td></tr>
</table>

### &lt;foreignKeyConstraintExists&gt; ###

Passes if the specified foreign key exists in the database. **Since 1.8**

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the foreign key's schema. <b>required</b></td></tr>
<tr><td>foreignKeyName</td><td>Name of the foreign key. <b>required</b></td></tr>
</table>

### &lt;indexExists&gt; ###

Passes if the specified index exists in the database. **Since 1.8**

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the index's schema. <b>required</b></td></tr>
<tr><td>indexName</td><td>Name of the index. <b>required</b></td></tr>
</table>

### &lt;sequenceExists&gt; ###

Passes if the specified sequence exists in the database. **Since 1.8**

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the sequences's schema. <b>required</b </td></tr>
<tr><td>sequenceName</td><td>Name of the sequence. <b>required</b></td></tr>
</table>

### &lt;primaryKeyExists&gt; ###

Passes if the specified primary key exists in the database. **Since 1.8**

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>schemaName</td><td>Name of the primary key's schema.</td></tr>
<tr><td>primaryKeyName</td><td>Name of the primary key. <b>tableName OR primaryKeyName required</b></td></tr>
<tr><td>tableName</td><td>Name of the table containing primary key. <b>tableName OR primaryKeyName required</b> <b>Since 1.9</b></td></tr>
</table>

### &lt;sqlCheck&gt; ###

Executes an SQL string and checks the returned value.  The SQL must return a single row with a single value.  To check numbers of rows, use the "count" SQL function.  To check for ranges of values, perform the check in the SQL and return a value that can be easily compared against.

{% highlight xml %}
<sqlCheck expectedResult="1">SELECT COUNT(1) FROM pg_tables WHERE TABLENAME = 'myRequiredTable'</sqlCheck>
{% endhighlight %}

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>expectedResult</td><td>Value to compare the SQL result to. <b>required</b></td></tr>
</table>

### &lt;changeLogPropertyDefined&gt; ###

Checks whether given [changelog parameter](http://www.liquibase.org/documentation/changelog_parameters#property) is present. If a value is also given, it only fails, if the value is not the same as given. **Since 2.0**

{% highlight xml %}
<changeLogPropertyDefined property="myproperty"/>
<changeLogPropertyDefined property="myproperty" value="requiredvalue"/>
{% endhighlight %}

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>property</td><td>Name of the property to check for. <b>required</b></td></tr>
<tr><td>value</td><td>Required value for given property.</td></tr>
</table>

### &lt;customPrecondition&gt; ###

Custom preconditions can be created by creating a class that implements the [liquibase.precondition.CustomPrecondition](http://www.liquibase.org/documentation/latest/api/liquibase/precondition/CustomPrecondition.html) interface.  Parameters on custom classes are set through reflection based on the &lt;param&gt; sub-tags.  Parameters are passed as strings to the custom precondition.

{% highlight xml %}
<customPrecondition className="com.example.CustomTableCheck">
    <param name="tableName" value="our_table"/>
    <param name="count" value="42"/>
</customPrecondition>
{% endhighlight %}

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>className</td><td>Name of custom precondition class. <b>required</b></td></tr>
</table>

#### Available Sub-Tags ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>param</td><td>Parameter to pass to the custom precondition.</td></tr>
</table>

##### Available "param" sub-tag Attributes #####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>name</td><td>Name of the parameter to set. <b>required</b></td></tr>
<tr><td>value</td><td>String value to set parameter to. <b>required</b></td></tr>
</table>

## Implementation Notes ##

Preconditions are checked at the beginning of the execution of a particular changelog. If you use the "include" tag and only have preconditions on the child changelog, those preconditions will not be checked until the migrator reaches that file. This behavior may change in future releases, so don't rely on this behavior.
