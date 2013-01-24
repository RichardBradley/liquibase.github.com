---
layout: default
title: Formatted sql changelogs
---

# Formatted SQL Changelogs #

As of LiquiBase 2.0, LiquiBase includes support for "plain SQL" changelog files. These changelogs may be included from XML changelogs and may contain arbitrary SQL statements. The statements are converted to [custom_sql](custom_sql.html) refactorings.

Formatted SQL files use comments to provide LiquiBase with metadata. Each SQL file must begin with the following comment:

<code sql>
--liquibase formatted sql
</code>

## Changesets ##

Each changeset in a formatted SQL file begins with a comment of the form

<code sql>
--changeset author:id attribute1:value1 attribute2:value2 [...]
</code>

The changeset comment is followed by one or more SQL statements, separated by
semicolons (or the value of the <endDelimiter> attribute).

### Available Changeset Attributes ##

The following attributes may be provided on each changeset:

^ stripComments  | Set to true to remove any comments in the SQL before executing, otherwise false. Defaults to true if not set  | 
^ splitStatements  | Set to false to not have liquibase split statements on ;'s and GO's. Defaults to true if not set  | 
^ endDelimiter  | Delimiter to apply to the end of the statement.  Defaults to ";", may be set to "".  | 
^ runAlways  | Executes the change set on every run, even if it has been run before |
^ runOnChange  | Executes the change the first time it is seen and each time the change set has been changed |
^ context  | Executes the change if the particular context was passed at runtime. Any string can be used for the context name and they are checked case-insensitively. |
^ runInTransaction  | Should the changeSet be ran as a single transaction (if possible)?  Defaults to true.  **Warning: be careful with this attribute.  If set to false and an error occurs part way through running a changeSet containing multiple statements, the LiquiBase databasechangelog table will be left in an invalid state** |
^ failOnError | Should the migration fail if an error occurs while executing the changeSet? |
^ dbms  | The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this attribute. Valid database type names are listed on the [supported databases page](../databases) |

## Rollback Actions ##

Changesets may include statements to be applied when rolling back the changeset. Rollback statements are comments of the form
<code sql>
--rollback SQL STATEMENT
</code>

## Sample Change Log ##

<code sql>
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
</code>
