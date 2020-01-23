---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.6.0 Released
---
# Liquibase 3.6.0 Released

Liquibase 3.6.0 (actually 3.6.1 as well) is now available from [liquibase.org/download](http://liquibase.org/download) and through the Maven repositories. Question or comments can be directed [to liquibase.org/community](http://liquibase.org/community)

Version 3.6.0 is primarily a bugfix release, but there have been over new 1000 commits since the 3.5.x series, so TONS of good new things.   

### Highlights include

- Improved database support for MS SqlServer, Oracle, Sybase, DB2 on Z/OS and others
- Improvements to spring and includeAll handling
- UTF-8/Non-ASCII fixes
- And much more 

### Checksum logic change

The 3.6.0 release should be a drop-in replacement for anyone using Liquibase, but some of the bugfixes required an update to the checksum logic. 

This means that when you first run an update command, Liquibase will transparently replace the old version with the new version BUT it will not be able to detect whether they actually changed or not, so any "runOnChange" triggers will NOT execute on the first run of the upgrade.     

### Looking Forward: API Changes

The main goal of 3.6.0 was to collect all the outstanding bugfixes and minor features into a base release to build on for future changes. 

Part of the reason for the gap between 3.5 and 3.6 is that I have been busily working on an extensive code cleanup/re-organization task in Liquibase concurrently and it has proved too difficult to keep the two branches in sync.
I had been making the changes in a separate branch because I've always tried to keep API-compatibility between releases to avoid breaking extensions, and the clean-up work is the point where I'm needing to break some of those APIs in order to support future functionality.

Unfortunately, it has gotten too difficult to manage both branches in parallel and the progress in both has suffered, so I am going to take a new approach: starting with the 3.7.0 release, I am going to be making API-breaking changes from release to release until they finished, at which point we will release 4.0.0 and resume the normal no-API-breaking-changes rule.
This change only affects users of Liquibase extensions--*changelogs will ALWAYS backwards compatible.* 

With each 3.x release, I will document any code migration changes needed as part of the release notes, but for those who prefer to wait for the final 4.0 stable release to update your extensions I will continue to provide bugfixes for 3.6.x even as newer versions come out.

As an example of changes I'm planning on making, I have already started pulling out the custom ServiceLocator logic that causes so much pain with the standard java.util.ServiceLoader classes. 

### Looking Forward: Project Infrastructure Changes

To simplify issue management, I'm going to migrate our issue tracking from Jira to Github. I'll post an announcement as that is finished.

I am finishing up re-introduction of a public build server and snapshot builds. I'll post an announcement as that is finished.

### REMINDER: Community Survey Ends Saturday April 14th. 

It should only take a few minutes to fill out and is a huge help in understanding how Liquibase is used and how we can improve. 

[Liquibase Survey 2018 Form](https://goo.gl/forms/Atzmtw7XZatOehuP2)
          

### Full Release Notes

Thanks to everyone who helped with [all these issues](https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&version=13060)

- [CORE-1609] - Command Prompt: Can't connect to database with a special character in pwd
- [CORE-1852] - checksums depend on environment
- [CORE-1888] - Sybase error for TINYINT, INT, BIGINT: Can’t specify a length, scale or storage property on type ‘int/tinyint/bigint’.
- [CORE-2008] - H2 Supports minValue and maxValue in Sequences since Version 1.3.175, but Liquibase does not
- [CORE-2033] - NPE during Diff when case sensitive table missing
- [CORE-2135] - liquibase corrupting UTF-8 changesets
- [CORE-2162] - MSSQL: Multiple inserts in sqlFile do not fail as expected
- [CORE-2191] - Update on SQL Azure database fails due to unavailable sys.extended_properties
- [CORE-2527] - Sybase create table fails because column name is too long
- [CORE-2631] - dbdoc does not specify content type
- [CORE-2739] - --delimiter parameter in liquibase --help
- [CORE-2747] - CreateView / Oracle: Keyword REPLACE in view definition prohibits "or replace" in DDL statement
- [CORE-2772] - primaryKeyExists check fails on Turkish locale for some chars
- [CORE-2773] - DB2 AS/400 - generateChangeLog throwing Exception
- [CORE-2796] - Handle TimeStamps with nano second precision correctly
- [CORE-2797] - Determine the DB2 data server type correctly
- [CORE-2820] - Unsupported ReorganizeTable for DB2 z/OS causes changelog validation to fail
- [CORE-2821] - AddForeignKey statement generates incorrect SQL for DB2 z/OS
- [CORE-2826] - indexExists precondition fails on AS400 + JDBCDatabaseSnapshot/Snapshot generator code is not coded generically?
- [CORE-2843] - Sql wrong lexical analysis for string literals - escaped single quotes are misparsed
- [CORE-2875] - UTF-8 character not understood
- [CORE-2894] - Oracle snapshot not detecting custom datatypes in different schemas
- [CORE-2909] - column remarks for mysql should be escaped
- [CORE-2911] - Oracle: generateChangeLog on RAW types not including the size param
- [CORE-2928] - Invalid snapshot of "duplicate" foreign keys
- [CORE-2929] - Views with definitions that start with a comment are not captured correctly in generateChangeLog
- [CORE-2940] - Do not print warning when DBA_RECYCLEBIN is not available
- [CORE-2944] - outputDefaultSchema and outputDefaultCatalog command line parameters not respected
- [CORE-2953] - update with valueSequenceNext and schema produces wrong SQL on oracle
- [CORE-2965] - Custom Properties XML Changelog
- [CORE-2992] - liquibase.util.grammar.TokenMgrError: Lexical error at line 1, column 71. Encountered: "\u00b4" (180), after : ""
- [CORE-2993] - createSequence with order denied on DB2
- [CORE-3002] - SQLAnywhere: Revert Unique Index failed
- [CORE-3006] - Oracle CSV-Import: "String index out of range: -1"
- [CORE-3009] - SQLAnywhere: Drop Default Value failed
- [CORE-3020] - No warning when included file doesn't exist (missing extension)
- [CORE-3033] - typo in postgresql reserverd word
- [CORE-3040] - onlyUpdate="true" flag generates empty statements for MySQL DB
- [CORE-3046] - Fix faulty snakeyaml class-path entry after upgrade to 1.17
- [CORE-3051] - SQLAnywhere: Drop Table does not support CASCADE
- [CORE-3054] - SQLAnywhere: java-coredump on changeSet-SQL
- [CORE-3055] - SQLAnywhere: supports Sequences
- [CORE-3063] - Integration tests failing on master
- [CORE-3069] - Checksum: line endings not standardized on windows if multiple lines
- [CORE-3072] - Add usePreparedStatements="true|false" flag to loadData
- [CORE-3076] - SUM is not reserved word for HsqlDB
- [CORE-3099] - Non English environment; invalid tablename and column name can be generated because of toUpperCase toLowerCase method which is dependent to locale in java
- [CORE-3101] - dropPrimaryKey TABLE_SCHEMA = 'null'
- [CORE-3106] - SQLAnywhere: DROP INDEX should use tablename
- [CORE-3115] - Prefix space in column type causing the Unknown LiquibaseDataType with the latest release
- [CORE-3117] - TIMESTAMP WITH TIME ZONE datatype is changed to TIMESTAMP in H2
- [CORE-3119] - Maven failing to use driverPropertiesFile from Liquibase Properties File
- [CORE-3135] - Column t1.tgconstrname does not exist
- [CORE-3138] - SQLAnywhere: AddAutoIncrement-Statement is wrong
- [CORE-3140] - MSSQL2005 doesn't support built-in function original_db_name()
- [CORE-3155] - CSV line content behind inline comment character doesn't contribute to checksum
- [CORE-3162] - Diff problem with MSSQL case sensitive database
- [CORE-3171] - LoadUpdateData doesn't work on SAP SQLAnywhere
- [CORE-3180] - A DBMS-specific change set referencing a DBMS-specific rollback can't be parsed on a different DBMS
- [CORE-2735] - Add possibility to test rollback with SpringLiquibase
- [CORE-1225] - Add support for tablespace assigned to liquibase metadata tables
- [CORE-2628] - defaultSchema parameter doesn't do Connection.setCatalog() for SpringLiquibase
- [CORE-2842] - MSSQL: Support creating clustered unique constraints
- [CORE-2891] - Liquibase "Command" objects can be extended and overridden
- [CORE-2919] - Make all variants of Liquibase.listUnrunChangeSets public
- [CORE-2952] - Use the clustered index if duplicate indexes are defined
- [CORE-2955] - MSSQL: Capture explicit null default values on snapshot and generate/diffChangeLog
- [CORE-2970] - MSSQL: Support default value constraint names
- [CORE-2977] - Generated primary key constraint name doesn't match Postgres default
- [CORE-2985] - MSSQL Snapshot performance improvements
- [CORE-3000] - Oracle JDBC batch for load_data
- [CORE-3005] - Consideration of DB2/400 system views
- [CORE-3017] - Add path attribute to createView
- [CORE-3018] - Oracle: support remarks on createView
- [CORE-3045] - Support indexes on views
- [CORE-3079] - Make includeObjects and excludeObjects affect which objects are snapshotted
- [CORE-3094] - HSQLDB UUID support
- [CORE-2920] - Using "//" as an endDelimiter stopped working 3.5.0