---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.4.2 Released
---
# Liquibase 3.4.2 Released

Bugfix release Liquibase 3.4.2 is now available from [liquibase.org/download](/download) and through the Maven repositories.

### Fixes include:

- Maven &lt;skip&gt; configuration now available
- Improved startup performance
- Don't fall back to the internet if multiple liquibase XSDs are found
- improved data type handling
- extensions containing custom loggers should work again

### Full changelog:

- [CORE-2328] - AbstractExecutor should implement execute(Change)
- [CORE-2475] - Informix: Insert valueComputed not used correctly
- [CORE-2543] - Improved support for time stamps in oracle insert change data types
- [CORE-1778] - createSequence doesn't work on MSSQL
- [CORE-1840] - Liquibase fails when run on a computer that can't connect to the internet
- [CORE-2273] - Oracle char column snapshot not differentiating between a default value of 0 and '0'
- [CORE-2285] - Code in Liquibase class inconsistent
- [CORE-2317] - Custom ConfigurationValueProvider not working
- [CORE-2349] - loadUpdateData does not escape column names in "ON DUPLICATE" clause
- [CORE-2407] - Derby keywords not escaped when used as column/table names
- [CORE-2447] - In sybase, schema is bad preixed
- [CORE-2466] - Rollback referencing a change set in another file cannot be parsed
- [CORE-2467] - SSO with jtds MSSQL doesn't work after 3.3.5 for update - null user error
- [CORE-2469] - Error in method ColumnConfig.setValueNumeric(String)
- [CORE-2470] - MSSQL: FindForeignKeyConstraintsGeneratorMSSQL doesn't honor specified schema
- [CORE-2480] - Primary key exist works fine with 3.3.3 not with 3.4.0 in SQL SERVER
- [CORE-2481] - Primary key creation issue with informix
- [CORE-2482] - Number type issue with informix
- [CORE-2484] - dropAll command crashes because it drops sequences before tables
- [CORE-2487] - updateSql does not output anything for prepared statements
- [CORE-2490] - If you have more than one :name token in the where clause of a delete change, you get an Exception
- [CORE-2491] - Shouldn't a custom change produce a warning if run in updateSql mode
- [CORE-2492] - Logger extension liquibase-slf4j no longer usable with 3.4.1
- [CORE-2494] - Pgsql: Exporting/generating badly formatted SQL
- [CORE-2498] - Generation of TIMESTAMP(29) causing error in PSQL log TIMESTAMP(6) WITHOUT TIME ZONE
- [CORE-2500] - Fast check of ColumnExistsPrecondition causing transaction abort on PostgreSQL database
- [CORE-2505] - Missing keywords for H2 database
- [CORE-2510] - loadData on MySQL with > 50 rows fails
- [CORE-2544] - LogFactory does not get reset
- [CORE-2549] - Performance regression in resolving local host
- [CORE-2554] - updateSql command fails on validation when upgrading (2.0.5 ->3.4.1)
- [CORE-2566] - Maven - setting skip= true does not work
- [CORE-2571] - primaryKeyExists precondition generating wrong query
- [CORE-2576] - The 'dbms' attribute on createProcedure is not not taken into account when parsing changes
- [CORE-2579] - dropAll failed for Oracle 12c
- [CORE-2580] - Escape column, table and schema on ColumnExistsPrecondition
- [CORE-2588] - Bad cast
- [CORE-2590] - Default constraint names are not quoted
- [CORE-2596] - DatabaseChangeLogLock race condition exists if two nodes both try to create the table
- [CORE-2598] - Postgres generateChangeLog: "length for type varchar cannot exceed 10485760"
