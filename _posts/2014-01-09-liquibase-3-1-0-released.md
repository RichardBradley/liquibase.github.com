---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.1.0 Released
---
# Liquibase 3.1.0 Released

Liquibase 3.1.0 has been released.  For most people 3.1 is a drop in replacement for 3.0.


If you use `<includeAll>` with relative paths or are running against MaxDB, DB2 for iSeries, or InterSystems Cache make sure you read the  <a href="http://liquibase.org/v3_1_upgrade.html">upgrade guide</a>.

Besides bugfixes, 3.1 adds the following major features:

### Offline Database Support!

One of the most requested features is the ability to use Liquibase when you do not have direct access to the database. We have always had updateSql support, but it still required a database connection to know what has been ran and what type of database to generate SQL for.

With the new "offline" support, you can now define a database connection URL like "*offline:mysql*" or "*offline:oracle?version=11.1*" when you run updateSql.

In offline mode, the change history is tracked in a local csv file which can be controlled with the "changeLogFile" URL parameter. For example: *offline:mysql?changeLogFile:/home/db/changelog.csv*

For more information, see the <a href="www.liquibase.org/documentation/offline.html">offline database documentation</a>


### Alternate Changelog History Tracking

With 3.1, you can now create extensions that manage changelog history tracking differently than the standard "DATABASECHANGELOG" table. For example, <a href="https://github.com/liquibase/liquibase-filechangelog">https://github.com/liquibase/liquibase-filechangelog</a> allows you to manage your changelog history using a local file rather than a table in the database.


### New and Improved Change tags:

- <a href="http://www.liquibase.org/documentation/changes/create_procedure.html">createProcedure</a>now supports referencing an external file containing the procedure definition with a new "path" attribute
- createProcedure now supports a dbms attribute to target the database(s) the procedure is compatible with. This allows you to have a single changeSet with a procedure definition for each supported database
- New <a href="http://www.liquibase.org/documentation/changes/drop_procedure.html">dropProcedure</a> change
- <a href="http://www.liquibase.org/documentation/changes/add_column.html">addColumn</a> supports new "beforeColumn", "afterColumn" and "position" attributes to control column ordering
- <a href="http://www.liquibase.org/documentation/changes/sql_file.html">sqlFile</a> files support ${} parameters

#### New and Improved Precondition tags:

- `<foreignKeyConstraintExists>` now supports checking based on table and column definition. Not just constraint name
- New `<tableIsEmpty>` precondition

- New `<rowCount>` precondition

#### Database Support Improvements

- MySQL ENUM and SET type support improvements
- MySQL support for date/time/timestamp size parameter
- MySQL support for column remarks
- MS SqlServer support for sequences (2012+)
- Sybase general support improvements
- DB2 general support improvements

#### Extension/API Improvements

- liquibase.changelog.visitor.ChangeExecListener implementations are notified of precondition and change-level interactions
- SnapshotGenerator extensions can block incorrect functionality from other SnapshotGenerators
- Extensions can define custom XSDs and namespaces

#### Other Features and Improvements

- Formatted SQL now supports a comma-separated list in "dbms" targeted changeSets
- Maven support for futureRollbackSql command

#### Links

- <a href="http://liquibase.org/download">Download 3.1.0</a>
- <a href="https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&amp;version=10561">Full Jira Release Notes</a>
- <a href="http://forum.liquibase.org">User Forum</a>
