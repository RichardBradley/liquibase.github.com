---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.4.1 Released
---
# Liquibase 3.4.1 Released

Bugfix release Liquibase 3.4.1 is now available from [liquibase.org/download](/download) and through the Maven repositories.

### Fixes include:

- improvements to includeAll logic
- better handling of older-version DATABASECHANGELOG table structures with updateSQL and status
- improved data type handling
- extensions containing custom loggers should work again
- Correctly detect "Sybase IQ"

### Full changelog:

- [CORE-998] - Changing index columns leads to wrong output order in the change log xml file.
- [CORE-2104] - ConcurrentModificationException iterating over System.getProperties().entrySet()
- [CORE-2385] - IncludeAll does not work when runing liquibase from inside a jar
- [CORE-2405] - Collation not preserved, depending on configuration
- [CORE-2406] - Escaped built-in data types should be lower case
- [CORE-2408] - Unknown column 'LABELS' in 'field list'
- [CORE-2410] - Snapshot should not include paramaters for MSSQL geometry, geography or sql_variant types
- [CORE-2411] - BLOB string default values not quoted
- [CORE-2412] - Handle Oracle BFILE types
- [CORE-2414] - CLONE - generateChangeLog creates DOUBLE(22) instead of double in MySql
- [CORE-2415] - Custom Logger configuration does not work anymore
- [CORE-2416] - Diff drops and creates primary keys for all tables
- [CORE-2418] - Liquibase 3.4.0 tries to do INSERT instead of UPDATE-Statements with Postgres
- [CORE-2421] - MySQL column sizes are off by 1 in BIGINT and INT for diffChangeLog
- [CORE-2422] - Liquibase intialisation failed
- [CORE-2423] - Sybase IQ : strange procedure called
- [CORE-2426] - Default schema name missing quotes.
- [CORE-2427] - Better handle MSSQL stored procedures with a different defaultSchema and replaceOnExists=true
- [CORE-2428] - liquibase 2.0.3 to 3.3.3
- [CORE-2435] - includeSystemClasspath switch actually includes SystemClassLoader if false
- [CORE-2436] - Logging in ClassLoaderResourceAccessor prevents installation of custom Logger
- [CORE-2437] - Index.toString() contains "unique" if and only if index is NOT unique
- [CORE-2438] - DeleteGenerator does not handle parameter names and values with $ or \ properly
- [CORE-2440] - Not possible to override DefaultLogger using a Logger in a non-liquibase package.
- [CORE-2441] - Creation of foreign key fails in MySQL if database name contains dashes
- [CORE-2442] - Creating MD5 checksum fails if changeSet id contains the character "?"
- [CORE-2443] - Liquibase 3.4.0 ignores third party loggers in certain situations
- [CORE-2446] - endDelimiter splitting does not work in plain SQL files (regression)
- [CORE-2452] - Index names should be quoted on SQL Server
- [CORE-2458] - loadUpdateData will not update
- [CORE-2460] - Postgres index names cannot include schema name
- [CORE-2433] - quoting error in table creation
- [CORE-2359] - Consistently read dataTypeId for all databases
- [CORE-2419] - Support fluent/builder-style change properties
- [CORE-2449] - Correctly detect "Sybase IQ"
- [CORE-2450] - Non-bash /bin/sh gives "[[ not found" error
- [CORE-2451] - SQL scripts should have "USE database" in the header on SQL Server
- [CORE-2453] - Informix: Return null for connection schema name
- [CORE-2459] - Un-change Formatted SQL stripComments default back to true
- [CORE-2461] - Don't do DATABASECHANGELOG ALTER statements if column types are different