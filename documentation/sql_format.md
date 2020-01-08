---
layout: default
title: Docs | Formatted SQL Changelogs 
---

# Formatted SQL Changelogs #

As of Liquibase 2.0, Liquibase includes support for "plain SQL" changelog files. These changelogs may be included from XML changelogs and may contain arbitrary SQL statements. The statements are converted to [custom_sql](changes/sql.html) refactorings.

Formatted SQL files use comments to provide Liquibase with metadata. Each SQL file must begin with the following comment:

{% highlight sql %}
--liquibase formatted sql
{% endhighlight %}

## Changesets ##

Each changeset in a formatted SQL file begins with a comment of the form

{% highlight sql %}
--changeset author:id attribute1:value1 attribute2:value2 [...]
{% endhighlight %}

The changeset comment is followed by one or more SQL statements, separated by
semicolons (or the value of the `<endDelimiter>` attribute).

### Available Changeset Attributes ##

The following attributes may be provided on each changeset:

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>stripComments</td><td>Set to true to remove any comments in the SQL before executing, otherwise false. Defaults to true if not set</td></tr>
<tr><td>splitStatements</td><td>Set to false to not have liquibase split statements on ;'s and GO's. Defaults to true if not set</td></tr>
<tr><td>rollbackSplitStatements</td><td>Same as splitStatements but for rollback SQL</td></tr>
<tr><td>endDelimiter</td><td>Delimiter to apply to the end of the statement.  Defaults to ";", may be set to "".</td></tr>
<tr><td>rollbackEndDelimiter</td><td>Same as endDelimiter but for rollback SQL</td></tr>
<tr><td>runAlways</td><td>Executes the change set on every run, even if it has been run before </td></tr>
<tr><td>runOnChange</td><td>Executes the change the first time it is seen and each time the change set has been changed </td></tr>
<tr><td>context</td><td>Executes the change if the particular context was passed at runtime. Any string can be used for the context name and they are checked case-insensitively. </td></tr>
<tr><td>logicalFilePath</td><td>Use to override the file name and path when creating the unique identifier of change sets. Required when moving or renaming change logs. </td></tr>
<tr><td>labels</td><td>Labels are general purpose way to categorize changeSets like contexts, but working in the opposite way. Instead of defining a set of contexts at runtime and then a match expression in the changeSet, you define a set of labels in the context and a match expression at runtime. </td></tr>
<tr><td>runInTransaction</td><td>Should the changeSet be ran as a single transaction (if possible)?  Defaults to true.  <b>Warning: be careful with this attribute.  If set to false and an error occurs part way through running a changeSet containing multiple statements, the Liquibase databasechangelog table will be left in an invalid state</b> </td></tr>
<tr><td>failOnError</td><td>Should the migration fail if an error occurs while executing the changeSet? </td></tr>
<tr><td>dbms</td><td>The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this 
  attribute. Valid database type names are listed on the <a href="../databases.html">supported databases page</a>. It is possible to list multiple databases separated by commas. 
  You can also specify that a changeset is <b>NOT</b> applicable to a particular database type by prefixing with <code>!</code>. The keywords <code>all</code> and <code>none</code> are 
  also available.</td></tr>
<tr><td>logicalFilePath</td><td>Sets a logical file path in databasechangelog table instead of physical file location of sql where the liquibase executed.</td></tr>
</table>

## Preconditions ##
Preconditions can be specified for each changeset. Currently, only the SQL Check precondition is supported.

{% highlight sql %}
--preconditions onFail:HALT onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM my_table
{% endhighlight %}

## Rollback Actions ##

Changesets may include statements to be applied when rolling back the changeset. Rollback statements are comments of the form
{% highlight sql %}
--rollback SQL STATEMENT
{% endhighlight %}

## Comment ##
A description of the change set.  Future releases of Liquibase may be able to make use of comments to generate documentation.
{% highlight sql %}
--comment: Some comment
{% endhighlight %}

## Valid CheckSum ##
Checksum which are considered valid for this changeSet, regardless of what is stored in the database. Used primarily when you need to change a changeSet and don't want errors thrown on databases on which it has already run (not a recommended procedure).<b>Since 3.5</b>

{% highlight sql %}
--validCheckSum: 3:098f6bcd4621d373cade4e832627b4f6
--validCheckSum: 7:ad0234829205b9033196ba818f7a872b
{% endhighlight %}

## Ignore lines ##
Allow to ignore some lines. Useful when using same script with other SQL tool.
<b>Since 3.7</b>

Mark two lines to be ignored:
{% highlight sql %}
--changeset author:id1
CREATE OR REPLACE PACKAGE ...
--ignoreLines:2
/
show errors;
--changeset author:id2
CREATE OR REPLACE PACKAGE BODY ...
{% endhighlight %}

Same effect using start-end syntax:
{% highlight sql %}
--changeset author:id1
CREATE OR REPLACE PACKAGE ...
--ignoreLines:start
/
show errors;
--ignoreLines:end
--changeset author:id2
CREATE OR REPLACE PACKAGE BODY ...
{% endhighlight %}

## Sample Change Log ##

{% highlight sql %}
--liquibase formatted sql

--changeset nvoxland:1
create table test1 (
    id int primary key,
    name varchar(255)
);
--rollback drop table test1;

--changeset nvoxland:2
insert into test1 (id, name) values (1, ‘name 1′);
insert into test1 (id, name) values (2, ‘name 2′);

--changeset nvoxland:3 dbms:oracle
create sequence seq_test;
{% endhighlight %}
