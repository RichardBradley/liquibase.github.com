---
layout: default
title: Formatted sql changelogs
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
<tr><td>endDelimiter</td><td>Delimiter to apply to the end of the statement.  Defaults to ";", may be set to "".</td></tr>
<tr><td>runAlways</td><td>Executes the change set on every run, even if it has been run before </td></tr>
<tr><td>runOnChange</td><td>Executes the change the first time it is seen and each time the change set has been changed </td></tr>
<tr><td>context</td><td>Executes the change if the particular context was passed at runtime. Any string can be used for the context name and they are checked case-insensitively. </td></tr>
<tr><td>runInTransaction</td><td>Should the changeSet be ran as a single transaction (if possible)?  Defaults to true.  <b>Warning: be careful with this attribute.  If set to false and an error occurs part way through running a changeSet containing multiple statements, the Liquibase databasechangelog table will be left in an invalid state</b> </td></tr>
<tr><td>failOnError</td><td>Should the migration fail if an error occurs while executing the changeSet? </td></tr>
<tr><td>dbms</td><td>The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this attribute. Valid database type names are listed on the [supported databases page](../databases.html) </td></tr>
</table>

## Rollback Actions ##

Changesets may include statements to be applied when rolling back the changeset. Rollback statements are comments of the form
{% highlight sql %}
--rollback SQL STATEMENT
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
