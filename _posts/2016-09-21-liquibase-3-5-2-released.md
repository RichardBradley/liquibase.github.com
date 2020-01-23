---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.5.2 Released
---
# Liquibase 3.5.2 Released

Bugfix release Liquibase 3.5.2 is now available from [liquibase.org/download](/download) and through the Maven repositories.

### Highlights include:

- Formatted SQL added rollbackSplitStatements and rollbackEndDelimiter changeSet attributes
- Fixes for running in Spring boot 1.4.0
- Performance improvements
- More consistent use of the character encoding set with the liquibase.file.encoding system property
- Improvements in support for clustered primary keys
- Improved BINARY data type handling
- Upgraded to SnakeYAML 1.17

### Full changelog:

-  [CORE-1863] - PostgreSQL blob is mapped to bytea instead of oid
-  [CORE-2693] - Postgresql dropAll with serial columns fails because tables are dropped then sequences which no longer exist
-  [CORE-2698] - <sqlFile> Oracle scripts with ending / are not actually getting executed even with splitStatements="false"
-  [CORE-2752] - Jtds has silent exceptions in db.getConnectionSchemaName
-  [CORE-2753] - defaultValueSequenceNext forgets schema name
-  [CORE-2754] - update table columns are not quoted when requested
-  [CORE-2756] - Null pointer exception from FileSystemResourceAccessor
-  [CORE-2757] - Databasechangelog ORDEREXECUTED and DEPLOYMENT_ID not updated when a changeSet is reran
-  [CORE-2758] - Debian package shouldn't symlink liquibase binary to absolute path
-  [CORE-2761] - 3.5.1: includeAll from the command line uses the absolute path as the changeSet path
-  [CORE-2763] - Postgresql schemas should default to lower case
-  [CORE-2765] - dbms in preConditions yaml changelog causes parsing error
-  [CORE-2770] - Can't read remarks from mssql 2000
-  [CORE-2774] - Can't read all columns from mssql2000
-  [CORE-2775] - Oracle Sequences not Generated in generateChangeLog after 3.4.1
-  [CORE-2778] - Sybase ASE: Incorrect syntax near the keyword 'ALTER'
-  [CORE-2780] - java.sql.SQLException: PooledConnection has already been closed
-  [CORE-2781] - DB2: custom-generated indexes for primary keys are not preserved in diff/generateChangeLog
-  [CORE-2784] - REGRESSION: Column creation of type 'TIMESTAMP WITHOUT TIMEZONE' fails on PostgreSQL
-  [CORE-2785] - Status command inconsistent with databasechangelog table
-  [CORE-2786] - Incorrect xml scheme for changlog file
-  [CORE-2787] - YAML Snapshot parser not handling strings that get stored as binary
-  [CORE-2789] - Postgres does not have a type "BINARY"
-  [CORE-2791] - Strip off trailing end delimiter in createProcedure on update, include on updateSql
-  [CORE-2793] - using property as startWith attribute
-  [CORE-2794] - Make CSV files created by Liquibase readable by Liquibase
-  [CORE-2795] - Fix a NullPointerException in DiffToChangeLog.sortMissingObjects
-  [CORE-2804] - defaultValueSequenceNext forgets schema name H2/PG/etc
-  [CORE-2805] - Multiple calls to generateChecksum() impacting deploy performance
-  [CORE-2806] - JsonSnapshotParser does not close stream after parsing
-  [CORE-2807] - Column data type "real" incorrectly translated to "double precision" for PostgreSQL, should be "real"
-  [CORE-2810] - defaultValueBoolean="false" generates wrong SQL for MySQL
-  [CORE-2811] - FileSystemResourceAccessor basepath/includeAll
-  [CORE-2813] - java.lang.NullPointerException when creating new ClassLoaderResourceAccessor();
-  [CORE-2814] - DB2: Quoting strategy not respected, objects are always saved as upper case
-  [CORE-2815] - Rollback by tag doesn't roll back tagDatabase changeSet
-  [CORE-2816] - Snapshot error when snapshotting an index or primary key against a case-sensitive column
-  [CORE-2818] - DEPLOYMENT_ID not created for Sybase in DATABASECHANGELOG, liquibase 3.5.1
-  [CORE-2819] - AbstractJdbcData getConnectionSchemaName() methods fails for Sybase
-  [CORE-2823] - DROP PRIMARY KEY fails for Sybase database update
-  [CORE-2827] - MSSQL: misc default value fixes
-  [CORE-2828] - MSSQL not capturing that primary key are non-clustered in generateChangeLog
-  [CORE-2830] - GenerateChangeLog does not handle tables with compound primary keys
-  [CORE-2831] - MySql BIT(1) defaultValue not snapshotted as Boolean
-  [CORE-2835] - GenerateChangeLog doesn't correctly "numeric DEFAULT '" " columns
-  [CORE-2836] - addAutoIncrement generates inconsistent sequence name for mixed-case table
-  [CORE-2837] - addAutoIncrement doesn't apply default schema in nextval call (PostgreSQL)
-  [CORE-2838] - createProcedure schema in the changelog is overwritten by defaultSchemaName
-  [CORE-2840] - MSSQL createProcedure for CREATE MERGE AS procedures need a trailing semicolon
-  [CORE-2843] - Sql wrong lexical analysis for string literals - escaped single quotes are misparsed
-  [CORE-2846] - DATABASECHANGELOG table query failed on postgres on first run
-  [CORE-2849] - Fail to execute with sequences
-  [CORE-2853] - Diff comparisions reporting differences between '0.0' and '0' in decimals
-  [CORE-2863] - Issue with Spring boot 1.4.0
-  [CORE-2864] - Regression for defaultSchemaName on MSSQL
-  [CORE-2867] - liquibase with MySQL raises exception "Table 'DATABASECHANGELOG' already exists" when using separate liquibase schema
-  [CORE-2868] - <createProcedure> Adds schema/username to package and package body in oracle making them invalid
-  [CORE-2869] - Without a specified classpath, using includeAll with relativeToChangelogFile="true" fails
-  [CORE-2872] - "ON DELETE" not supported for FK constraints in Sybase
-  [CORE-2876] - Issue with Spring boot 1.4.0 Repackaged
-  [CORE-2878] - MSSQL setTableRemarks limited to 200 chars
-  [CORE-2881] - DiffChangeLog unnecessarily includes referenceTableCatalogName attribute if comparing Schema with different names
-  [CORE-2885] - AddColumn with defaultValueSequenceNext generated incorrect SQL for PostgreSQL
-  [CORE-2788] - handle VARBINARY type in Oracle and H2
-  [CORE-2800] - Add flag to diff command that suppresses reporting of column order difference in tables
-  [CORE-1984] - Support for non-split rollback statements in Formatted SQL
-  [CORE-2768] - Have the .deb and .rpm part of the release on github
-  [CORE-2782] - Update SnakeYAML version to 1.17
-  [CORE-2801] - Add method to Logger to allow closing of the output file stream
-  [CORE-2844] - Traverse parent changelogs for rollbacks
-  [CORE-2848] - Oracle: primary keys that use a pre-existing index drop the index along with the primary key on rollback
-  [CORE-2852] - Postgresql snapshots not correctly handling serial-backing sequences
-  [CORE-2857] - Support clustered primary keys in postgresql
-  [CORE-2873] - Postgresql custom types are snapshotted as having length 2147483647
-  [CORE-2874] - Ensure consistent charset encoding usage

[Issue Tracker](https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&version=13260)

