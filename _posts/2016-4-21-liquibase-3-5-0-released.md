---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.5.0 Released
---

Liquibase 3.5.0 is now available from [liquibase.org/download](http://liquibase.org/download) and through the Maven repositories. Question or comments can be directed [to liquibase.org/community](http://liquibase.org/community)

There has been a lot of work put into 3.5.0, including:

### Multi-schema snapshot and diff improvements

We have fixed up various bugs with how Liquibase handles snapshotting and comparing multiple schemas.

Beyond just bugfixes, you can also now specify mappings between source and target database schemas by using a new --referenceSchemas flag. I'll write more about this feature in a future blog post.

### OSGi support in liquibase-core

You no longer need to use the liquibase-osgi jar when running in an OSGi container. The standard liquibase.jar / liquibase-core module is all you need.

### New "context" attribute on include and includeAll to control when changelogs are included

If you specify the "context" attribute on include or includeAll, the referenced changelog files will only be executed if you are running under a matching context.

### Formatted SQL changelog improvements

We brought in some features from XML and YAML style changelogs to [formatted sql](http://liquibase.org/documentation/sql_format.html) including support for AND/OR context expressions and [changelog parameters](http://liquibase.org/documentation/changelog_parameters.html).

### New runOrder="first|last" attribute on changeSet to override where in the changelog it is ran

Sometimes you want a changeSet to always execute after everything else but don't want to keep moving it to the end of the changelog. Setting the runOrder will automatically move it in the final changeSet order.

### Improved SQL Parsing

Instead of using regular expressions to try to parse SQL, we now tokenize it using a grammer. This will make SQL parsing much less buggy and fixes a large set of bugs.

### Performance improvements and bug fixes

Always performance improvements and bug fixes

### Full Release Notes

Thanks to everyone who helped with [all these issues](https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&version=12560)


- [CORE-155] - Default-context attribute in databaseChangeLog tag
- [CORE-575] - foreign key constraint is generated with onUpdate and onDelete restrict
- [CORE-910] - Lock is not released if nocount is on for sql server 2008
- [CORE-1166] - Diff doesn't detect 'on delete cascade' statements
- [CORE-1447] - Inconsistent line endings in updateSQL produced files
- [CORE-1468] - Number / Numeric handling must differ between different database systems
- [CORE-1679] - Changelog SQL routines are partially aware of Database quoting strategy
- [CORE-1690] - OSGiPackageScanClassResolver does not search extensions in Fragment bundles
- [CORE-1836] - Oracle Integer mapping
- [CORE-1839] - H2 multicolumn unique constraints
- [CORE-1883] - Performance issue with large datamodels
- [CORE-1887] - Including the same ChangeSet twice causes ValidationFailedException
- [CORE-1897] - stripComments from SQL is trimming quoted string
- [CORE-1935] - Formatted SQL generateChangeLog failed
- [CORE-1966] - Invalid object name 'INFORMATION_SCHEMA.SEQUENCES' when running generateChangeLog with SQL Azure
- [CORE-1985] - constraints tag is missing referencedTableSchemaName
- [CORE-2024] - Move SDK to its own module
- [CORE-2056] - generateChangeLog generates too many 'constraints'
- [CORE-2059] - escapeObjectName has no respect for quotingStrategy QUOTE_ONLY_RESERVED_WORDS on Postgres
- [CORE-2184] - diff doesn't write correct Changesets for foreign key constraints with ON DELETE CASCADE
- [CORE-2211] - Liquibase tries to execute commented lines in custom SQL file
- [CORE-2213] - Liquibase does not support comments in a line after the semicolon
- [CORE-2333] - loadData fails with quoted string containing a comma
- [CORE-2376] - LiquibaseCatalogName in commandLine not working correctly
- [CORE-2438] - DeleteGenerator does not handle parameter names and values with $ or \ properly
- [CORE-2456] - includeObjects/excludeObjects not work for UniqueConstraint
- [CORE-2474] - dropFirst does not drop objects in not default schemas on Postgres 9+ using sql format with multiple schemas
- [CORE-2483] - Liquibase does not delete unzip directories from temporary directory
- [CORE-2501] - Derby sequenceCurrentValue Incorrect SQL
- [CORE-2502] - Handle single-tag databaseChangeLog tag on diffChangeLog
- [CORE-2504] - NumberFormatException while checking precondition
- [CORE-2508] - GlobalConfiguration liquibase.should.run alias is incorrect
- [CORE-2512] - Both defautValueComputed and defaultValue included in addColumn diffChangeLog outputs if value is a computed value
- [CORE-2513] - DiffChangeLog fixing changed indexes misses "unique" attribute
- [CORE-2514] - bad Maven documentation for outputDefaultCatalog and outputDefaultSchema
- [CORE-2517] - Foreign key snapshot improvements for DB2
- [CORE-2518] - DB2: snapshot sees DATE types as TIMESTAMP
- [CORE-2520] - Spurious warning with includeAll: file is not a recognized file type
- [CORE-2521] - addAutoIncrement on Postgres generates invalid SQL when specific schema is used
- [CORE-2522] - Derby: support for findForeignKeyConstraints
- [CORE-2523] - H2: use "REAL" as datatype for "FLOAT"
- [CORE-2524] - MSSQL: need to escape default value constraint names
- [CORE-2525] - Error on dropping sequence
- [CORE-2526] - Oracle 12: TIMESTAMP(3) not handled
- [CORE-2528] - Oracle: improve unique constraint snapshot query performance
- [CORE-2529] - MSSQL auto_increment numeric is 1 smaller in generateChangeLog
- [CORE-2531] - Wrong type mapping of BINARY type in MySQL, H2, HSQLDB and Postgresql
- [CORE-2533] - Poor runtime performance
- [CORE-2538] - regenerate maven documentation for liqubase on website
- [CORE-2545] - MSSQL: createProcedure fails if replaceIfExists=true and body uses "create proc" rather than "create procedure"
- [CORE-2547] - liquibase.database.core.DB2Database - Improper Resource Shutdown or Release
- [CORE-2548] - primaryKeyTablespace is ignored in PostgreSQL
- [CORE-2550] - Proper handling BINARY type in MySQL and H2
- [CORE-2552] - Oracle performance: fetch view definition along with original view to reduce the number of needed queries
- [CORE-2553] - DB2: add ability to disable automatic reorg statements
- [CORE-2556] - Cannot execute update code including quoted strings containing semicolons
- [CORE-2558] - includeAll incorrectly sorting by including WEB-INF/classes when running in an ear
- [CORE-2561] - Add "cycle" attribute to alterSequence
- [CORE-2562] - MSSQL: Snapshot errors if table names have single quote marks in them
- [CORE-2563] - DiffChangeLog that adds columns does not preserve column order
- [CORE-2565] - Escaping of the sequence names with schema generates invalid statements for Oracle DB
- [CORE-2581] - mysql update emits incorrect sql for BIT(1) when default specified
- [CORE-2587] - Validation not performed before rollback
- [CORE-2591] - autoincrement problem with ORA 12c + COMPATIBLE param to 11
- [CORE-2595] - DefaultPackageScanClassResolver fails if "fat" jar has dirs and files with same name
- [CORE-2599] - generateChangelog produces incorrect values for binary type
- [CORE-2601] - ORDER keyword isn't escaped for Oracle
- [CORE-2602] - StackOverflowError generating snapshot
- [CORE-2604] - PostgreSQL datatype bit(n) column gives BOOLEAN(n) type for CreateTableChange genearated sql statement
- [CORE-2605] - addColumn with multiple columns, does not create the constraints
- [CORE-2606] - PostgreSQL : Table creation with datatype smallserial fails.
- [CORE-2609] - Liquibase command line fails when using JTDS driver with SSO
- [CORE-2611] - Sybase ASE generated table name is wrong. Roll back CORE-2447
- [CORE-2615] - Multi-schema snapshot bugfixes
- [CORE-2623] - Oracle: primary keys on tables recovered from recyclebin are not properly snapshotted
- [CORE-2624] - MSSQL: better support for user defined types
- [CORE-2625] - Diff: should not be case sensitive in column default value functions
- [CORE-2629] - SQL syntax doesn't allow commenting indepenrent parts.
- [CORE-2632] - Postgres index drop needs schema
- [CORE-2635] - Applied changeset not detected
- [CORE-2636] - includeAll uses full file path
- [CORE-2637] - Creating column with tinyint(1) instead created as default tinyint
- [CORE-2641] - runOnChange change set runs every time even if there wasn't changed
- [CORE-2642] - Xsd files are not resolved from classpath when resolving from resourceAccessor fails.
- [CORE-2643] - loadData
- [CORE-2645] - Rollback referencing a change set in current child file cannot be parsed
- [CORE-2653] - Liquibase show difference for some UniqueConstraint and Views in SQL SERVER databases but Actually there is NO difference when i compare the SQL scripts manually
- [CORE-2660] - Multiple contexts not recognized in formatted SQL when using AND
- [CORE-2662] - NumberFormatException with default values of type 'real' in postgresql
- [CORE-2663] - New MySQL 5.7.x reserved keywords are not being escaped
- [CORE-2664] - createChangeLog has incorrect nesting of constraints in YAML format
- [CORE-2666] - InsertSetGenerator hard-codes the InsertGenerator
- [CORE-2669] - Impossible to extend BaseLiquibaseTask in a non-deprecated way
- [CORE-2670] - Impossible to create table on mssql with remarks containing apostrophes
- [CORE-2671] - oracle timestamps with time zone
- [CORE-2672] - createSequence with order produces invalid statement on postgresql
- [CORE-2673] - includeAll relativeToChangelogFile doesn't work for FileSystemResourceAccessor
- [CORE-2674] - LoadUpdateData with onlyUpdate="true" generates invalid statements for Oracle DB
- [CORE-2677] - Dropping a postgres index fails
- [CORE-2679] - Hibernate diffChangeLog NullPointerException @ MissingPrimaryKeyChangeGenerator.fixMissing(MissingPrimaryKeyChangeGenerator.java:76)
- [CORE-2680] - Generating a futureRollbackSql when using "classpath:" prefix doesn't recognise any of the ran change sets.
- [CORE-2681] - H2 (automatic mixed mode): createTable: columns remarks ignored
- [CORE-2683] - dropAll dropping sequences that have been dropped via earlier cascade
- [CORE-2684] - Context is ignored with runOnChange and including file (sqlFile/loadUpdateData)
- [CORE-2686] - StandardChangeLogHistoryService.hasDatabaseChangeLogTable value is cached too aggressively
- [CORE-2687] - sqlFile endDelimiter="go" if endDelimiter has whitespace in my sql it is not spliting
- [CORE-2688] - Loading data from csv with number of rows dividable by 51
- [CORE-2689] - TIMESTAMP parameters dropped for DB2
- [CORE-2690] - SetTableRemarksGenerator double escapes remark
- [CORE-2693] - Postgresql dropAll with serial columns fails because tables are dropped then sequences which no longer exist
- [CORE-2694] - "national character varying" type is not recognized
- [CORE-2698] - sqlFile Oracle scripts with ending / are not actually getting executed even with splitStatements="false"
- [CORE-2699] - concurrency causes NullPointerException in DatabaseObjectComparatorFactory.getInstance()
- [CORE-2705] - diffChangeLog generates dropColumn when dropping an index with a computed column
- [CORE-2706] - Two sides of equal are the same
- [CORE-2709] - endDelimiter regexp problem
- [CORE-2711] - Cannot load CSV via loadData
- [CORE-2713] - CreateView disregards replaceIfExists=true when fullDefinition=true
- [CORE-2715] - tableExists and columnExists preconditions fail on MySQL
- [CORE-2718] - H2 Database should query for default schema instead always use PUBLIC
- [CORE-2719] - Oracle: Cannot snapshot primary keys on lower-case tables
- [CORE-2720] - DB2: Capture full view definition in snapshot/generateChangeLog to support column options
- [CORE-2721] - endDelimiter regex does not work in SQL changelogs/changesets
- [CORE-2725] - DB2: Don't include system-generated indexes
- [CORE-521] - Handle Timestamp with Time Zone types where supported
- [CORE-2448] - New "created" attribute on changeSet
- [CORE-2478] - Liquibase dropAll command line does not allow dropping multiple schemas
- [CORE-2540] - Allow vendor independent SEQUENCE definition
- [CORE-2541] - Add support for registering a Change Exec Listener on command line
- [CORE-2560] - Add new runOrder="first\|last" attribute to control when a changeSet is ran
- [CORE-2577] - Add resourceComparator attribute to includeAll to override sorting
- [CORE-2578] - Added addUniqueConstraint deferrable"support for Postgresql
- [CORE-449] - Same changeLog can be included multiple times
- [CORE-1969] - Support for AND/OR context expressions in formatted sql
- [CORE-2100] - formatted sql validCheckSum
- [CORE-2115] - Really slow when using fat jars
- [CORE-2225] - please add the OLD check sum to the validation error message
- [CORE-2336] - Use a grammer for parsing SQL rather than regexps
- [CORE-2419] - Support fluent/builder-style change properties
- [CORE-2455] - Improve messages in databasechangelog.description column
- [CORE-2463] - Don't include liquibase tables in dbdoc
- [CORE-2493] - ExecuteShellCommand improvements
- [CORE-2497] - Support setColumnRemarks and setTableRemarks on MSSQL
- [CORE-2499] - Support for commenting lines in csv files
- [CORE-2539] - Ensure each data row in CSV has same # cols as header
- [CORE-2584] - ValidCheckSum is valid for both stored database values and current changeSet checksum
- [CORE-2589] - Output xml changelogs as xml version="1.1"
- [CORE-2612] - Oracle: include BYTE in CHAR and VARCHAR types from snapshot/generateChangeLog
- [CORE-2619] - Make changeLogFile optional for changeSetExecuted
- [CORE-2622] - Maven: Support ISO date syntax for rollback
- [CORE-2626] - Use schemaName in createProcedure
- [CORE-2638] - GenerateChangeLog should include replaceIfExists=true for changed views
- [CORE-2640] - Better handling of replaceIfExists in createProcedure
- [CORE-2651] - Derby: Default unknown version to 10.6 to support sequences
- [CORE-2652] - Formatted sql precondition not expanding changelog parameters
- [CORE-2657] - Add new DATABASECHANGELOG.DEPLOYMENT_ID column to track changeSets deployed together
- [CORE-2658] - Move the liquibase-debian module to a separate profile
- [CORE-2703] - MySQL NCLOB should conver to LONGTEXT CHARACTER SET utf8
- [CORE-2724] - Support offline databases in ant-tasks

