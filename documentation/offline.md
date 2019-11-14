---
layout: default
title: Offline Database Support | Liquibase Docs
---

# Offline Database Support #

If you cannot run Liquibase directly against a database, there are two major options to ensure your database is kept up to date

## updateSql

The most common way to manage "offline" databases is to use the <a href="sql_output.html">updateSql</a> functionality.

The updateSql command reads a database's DATABASECHANGELOG table and outputs the SQL that would run as part of the upgrade.
This SQL includes inserts into the DATABASECHANGELOG table and can be ran against any database to both upgrade it and keep its history correct.

It is important that the database you generate the SQL from is the same as the database(s) you plan to run the SQL against.

Unless you have preconditions in your changelog file, the updateSql process only reads the DATABASECHANGELOG table to determine what changeSets to run.
Therefore if, for example, you have a production database that you cannot run Liquibase against directly and it may be different than your test databases,
you can copy/restore just the DATABASECHANGELOG table from the production database into a database you can run updateSql against. Then run the generated SQL against the actual production database.

## Offline Database

_Since 3.1.0_

If your environment does not lend itself to using updateSql with test and backup databases, you can run Liquibase using an "offline" database.

Running in offline mode only supports "updateSql", "rollbackSQL", "tag", and "tagExists". It does not support direct update, diff, or preconditions as there is nothing to actually update or state to check.

An offline database is "connected" to using a url syntax of `offline:DATABASE_TYPE?param1=value1&aparam2=value2`.

### Available parameters:

| **changeLogFile** |  Specify the file acting as the DATABASECHANGELOG table. Defaults to "databasechangelog.csv" in the working directory.  |
| **version** |  Specify the database version to ensure generated SQL matches target database version. Example: 5.4.2 or 12.1.0.3 |
| **productName** | Specify "product name" seen by the JDBC driver. |
| **catalog** | Specify the connection catalog |
| **caseSensitive** | Specify if the database is case sensitive or not |
| **outputLiquibaseSql** | If set to "true", output from updateSQL will include create/insert statements for the DatabaseChangeLog table. Defaults to "false" |

### Examples:

- `offline:oracle`
- `offline:mssql?changeLogFile=/src/changelog.csv`
- `offline:mysql?version=5.4.21&changeLogFile=/src/changelog.csv`
