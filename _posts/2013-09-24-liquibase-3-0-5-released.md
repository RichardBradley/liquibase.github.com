---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0.5 Released
---


### Performance


The major focus of this release is performance improvements:


- Startup time is significantly improved for larger databases
- Preconditions now snapshot far less of the database
- Running generateChangeLog on a test MySQL database with over 4000 tables went from crashing after an hour to completing in 30 seconds. Even an Oracle database with the same structure finished in a couple minutes.



If you are still seeing any unexpected performance problems, <a href="https://liquibase.jira.com/browse/CORE">file a bug report</a>



You can download 3.0.5 from <a href="http://liquibase.org/download">http://liquibase.org/download</a> and through the maven repository system once it gets mirrored through. If you have any questions or problems, visit the <a href="http://liquibase.org/community">forums or bug tracker</a>


### Notable Bugs


- Multi-column foreign keys are snapshotted correctly now
- Improved case-sensitive/insensitive handling



### Potential Gotchas



Three bug fixes related to data type translations went into 3.0.5 which may cause issues for people that had been relying on incorrect behavior


- MS  SQLServer "DATE" columns are now translated to "DATE" rather than SMALLDATETIME
- MySQL TIMESTAMP columns are now nullable if you do not specify that they should be not null
- H2 and HSQL CLOB columns are now translated as CLOB rather than LONGVARCHAR



### Full Change Log



- <a href="https://liquibase.jira.com/browse/CORE-845">CORE-845</a> - "DATE" data type is deployed as "SMALLDATETIME" in SQL 2008
- <a href="https://liquibase.jira.com/browse/CORE-859">CORE-859</a> - Nullable TIMESTAMP columns in MySQL are not nullable.
- <a href="https://liquibase.jira.com/browse/CORE-1257">CORE-1257</a> - Oracle: generateChangeLog exports a column of type "NUMBER" as "NUMBER(0,-127)"
- <a href="https://liquibase.jira.com/browse/CORE-1288">CORE-1288</a> - H2 (and other) support for BLOB and CLOB is incorrect
- <a href="https://liquibase.jira.com/browse/CORE-1338">CORE-1338</a> - Using apostrophe in changeset's ID causes SQL error
- <a href="https://liquibase.jira.com/browse/CORE-1360">CORE-1360</a> - Confirmation message of a custom change change is only printed if loglevel is debug
- <a href="https://liquibase.jira.com/browse/CORE-1364">CORE-1364</a> - SQL Server incorrect INFORMATION_SCHEMA table case in native query
- <a href="https://liquibase.jira.com/browse/CORE-1365">CORE-1365</a> - SQL Server: "Database 'dbo' does not exist" error
- <a href="https://liquibase.jira.com/browse/CORE-1401">CORE-1401</a> - Unnecessary snapshot on liquibase update
- <a href="https://liquibase.jira.com/browse/CORE-1415">CORE-1415</a> - Liquibase tables are not detected in oracle running in the SYSTEM schema
- <a href="https://liquibase.jira.com/browse/CORE-1426">CORE-1426</a> - ORACLE: Check for existing tables is case sensitive
- <a href="https://liquibase.jira.com/browse/CORE-1429">CORE-1429</a> - Random order of UniqueConstraint and ForeignKey drop statements
- <a href="https://liquibase.jira.com/browse/CORE-1459">CORE-1459</a> - Maven updateSQL creates databasechangelog table, should only output SQL to do it
- <a href="https://liquibase.jira.com/browse/CORE-1462">CORE-1462</a> - renameColumn with 'text' data type improperly trying to use 'clob' against MySql
- <a href="https://liquibase.jira.com/browse/CORE-1433">CORE-1433</a> - Handle changes in column datatypes in diffChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1434">CORE-1434</a> - Formatted Changelog format not parsing UTF8 .sql files with BOM
- <a href="https://liquibase.jira.com/browse/CORE-1453">CORE-1453</a> - Multi-column foreign keys not snapshotted correctly





