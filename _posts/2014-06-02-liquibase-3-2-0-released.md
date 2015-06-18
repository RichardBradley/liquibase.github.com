---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.2.0 Released
---


Liquibase 3.2.0 has been released. As usual, it can be downloaded from the <a href="http://liquibase.org/download">Liquibase download page</a> and is available in the Maven repository as org.liquibase/liquibase-core.


For most users, upgrading will be seamless but if you have written Liquibase extensions there have been some API changes. See <a href="http://www.liquibase.org/v3_2_upgrade.html">http://www.liquibase.org/v3_2_upgrade.html</a> for details.

## Updated Extensions

The following extensions have been updated to work with 3.2.0 and/or include bugfixes:



- <a href="https://github.com/liquibase/liquibase-hibernate">liquibase-hibernate</a>
- <a href="https://github.com/liquibase/liquibase-oracle">liquibase-oracle</a>
- <a href="https://github.com/liquibase/liquibase-sqlfire">liquibase-sqlfire</a>
- <a href="https://github.com/liquibase/liquibase-modify-column">liquibase-modify-column</a>
- <a href="https://github.com/liquibase/liquibase-db2i">liquibase-db2i</a>
- <a href="https://github.com/liquibase/liquibase-cache">liquibase-cache</a>
- <a href="https://github.com/liquibase/liquibase-postgresql">liquibase-postgresql</a>
- <a href="https://github.com/liquibase/liquibase-teradata">liquibase-teradata</a>
- <a href="https://github.com/liquibase/liquibase-nochangeloglock">liquibase-nochangeloglock</a>





## Major new features and changes in 3.2.0 include:

### And/Or/Not logic in context expressions



Context attributes can now include complex expressions such as "qa or (production and master)". See <a href="http://www.liquibase.org/documentation/contexts.html">the context documentation</a> for more information


### Improved JSON and YAML changelog parsing


The changelog parsing logic has been greatly refactored to provide full feature parity between the XML, JSON, and YAML parsers.


### New Command: Snapshot


The command line interface supports a new "snapshot" command that will output a report of the objects Liquibase sees in a database. This is the model that would be fed into diff/diffChangeLog operations but doesn't perform any comparison logic, is simply reports on what it sees.


### Liquibase SDK


The Liquibase SDK will provide utilities and features not needed for standard Liquibase usage such as testing tools and extension writing help. The 3.2.0 release provides the first pieces of the SDK:


- Offline Javadoc
- A starter/example workspace
- Ability to generate vagrant configurations for various databases
- "Watch" command to provide a simple real-time view of the database schema



For more information on the SDK, see the <a href="http://www.liquibase.org/documentation/sdk/index.html">SDK Documentation.</a>



### Improved Performance


Various improvements in memory usage and optimizations in database interactions


### DatabaseChangeLog SQL available with Offline Database


New "outputLiquibaseSql" flag allows inclusion of DatabaseChangeLog table create/insert statements with updateSql command


### And Much More:


- <a href="https://liquibase.jira.com/browse/CORE-209">CORE-209</a> - Double Create Database Lock Table using updateSQL
- <a href="https://liquibase.jira.com/browse/CORE-421">CORE-421</a> - NPE in MySqlDatabaseSnapshot during diff operation when "enum" or "timestamp" column was removed from table
- <a href="https://liquibase.jira.com/browse/CORE-461">CORE-461</a> - Wrong datatypes for timestamps generated with generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-871">CORE-871</a> - Unable to use changeSetPath in rollback tag to refer to another change log file
- <a href="https://liquibase.jira.com/browse/CORE-877">CORE-877</a> - Bug with column type "TIMESTAMP WITHOUT TIME ZONE"
- <a href="https://liquibase.jira.com/browse/CORE-976">CORE-976</a> - GenerateChangeLog with data: java heap space error
- <a href="https://liquibase.jira.com/browse/CORE-1097">CORE-1097</a> - Liquibase adds a semicolon after a stored proc definition making the stored proc unusable
- <a href="https://liquibase.jira.com/browse/CORE-1108">CORE-1108</a> - Oracle : Unable to create complex primary key for loadUpdateData
- <a href="https://liquibase.jira.com/browse/CORE-1284">CORE-1284</a> - Memory leak in ExecutorService
- <a href="https://liquibase.jira.com/browse/CORE-1563">CORE-1563</a> - dropAll does not delete Sequences on Derby
- <a href="https://liquibase.jira.com/browse/CORE-1572">CORE-1572</a> - Regression: diff generates full schema instead of changes when using liquibase-hibernate4
- <a href="https://liquibase.jira.com/browse/CORE-1578">CORE-1578</a> - changeset checksum calculates differently on linux and windows
- <a href="https://liquibase.jira.com/browse/CORE-1601">CORE-1601</a> - updateSql generates SQL with unexpected linefeeds, breaks SQLPlus
- <a href="https://liquibase.jira.com/browse/CORE-1642">CORE-1642</a> - Special character issue after upgrade
- <a href="https://liquibase.jira.com/browse/CORE-1643">CORE-1643</a> - DB2: defaultSchemaName and changelogSchemaName are not respected
- <a href="https://liquibase.jira.com/browse/CORE-1650">CORE-1650</a> - dropAll doesn't work on Informix
- <a href="https://liquibase.jira.com/browse/CORE-1668">CORE-1668</a> - defaultSchemaName ignored on createTable in H2
- <a href="https://liquibase.jira.com/browse/CORE-1673">CORE-1673</a> - Empty default value is not recorded for MySQL
- <a href="https://liquibase.jira.com/browse/CORE-1676">CORE-1676</a> - Colons in changeSet IDs no longer supported
- <a href="https://liquibase.jira.com/browse/CORE-1688">CORE-1688</a> - The 'valuum' extension seems not to be working under version 3.0.8 of liquibase
- <a href="https://liquibase.jira.com/browse/CORE-1701">CORE-1701</a> - Oracle: snapshot of default date/time values come back as to_date functions
- <a href="https://liquibase.jira.com/browse/CORE-1714">CORE-1714</a> - 2->3.1 migration error
- <a href="https://liquibase.jira.com/browse/CORE-1715">CORE-1715</a> - 2 -> 3.1 migration, 3.1 errors if there are single quotes in comments
- <a href="https://liquibase.jira.com/browse/CORE-1718">CORE-1718</a> - foreignKeyConstraintExists precondition fails with constraints on unique keys
- <a href="https://liquibase.jira.com/browse/CORE-1721">CORE-1721</a> - HsqlDatabase.escapeObjectName(...) ignores QUOTE_ALL_OBJECTS
- <a href="https://liquibase.jira.com/browse/CORE-1727">CORE-1727</a> - Drop default constraint syntax for DB2 not correct
- <a href="https://liquibase.jira.com/browse/CORE-1728">CORE-1728</a> - Only sequence name is captured by snapshot process and used in generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1733">CORE-1733</a> - Data in diffChangeLog coming through as one row per changeSet
- <a href="https://liquibase.jira.com/browse/CORE-1734">CORE-1734</a> - updateSQL is not including content from sqlFile (at least not when ran from Linux)
- <a href="https://liquibase.jira.com/browse/CORE-1739">CORE-1739</a> - Liquibase ignores Oracle varchar precision
- <a href="https://liquibase.jira.com/browse/CORE-1743">CORE-1743</a> - Snapshot VARCHAR(MAX) correctly on sqlserver
- <a href="https://liquibase.jira.com/browse/CORE-1744">CORE-1744</a> - Derby: UpdateSQL not including creating databasechangeloglock table if needed
- <a href="https://liquibase.jira.com/browse/CORE-1748">CORE-1748</a> - Maven Plugin does not use outputDefaultCatalog property
- <a href="https://liquibase.jira.com/browse/CORE-1750">CORE-1750</a> - liquibase-modify-column 3.0 broken with liquibase-core 3.1.1
- <a href="https://liquibase.jira.com/browse/CORE-1752">CORE-1752</a> - Oracle XML Datatype snapshot containing size
- <a href="https://liquibase.jira.com/browse/CORE-1753">CORE-1753</a> - HSQLDB 1.8 does not support catalogs
- <a href="https://liquibase.jira.com/browse/CORE-1754">CORE-1754</a> - Default value functions on Oracle snapshoted as "defaultValue"
- <a href="https://liquibase.jira.com/browse/CORE-1755">CORE-1755</a> - DefaultValueComputed is quoted for Char, Varchar, Clob, MediumInt and SmallInt types
- <a href="https://liquibase.jira.com/browse/CORE-1756">CORE-1756</a> - Oracle indexes with functions not returned correctly in generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1765">CORE-1765</a> - Failed to drop a VIEW pointing on not existing table from another schema
- <a href="https://liquibase.jira.com/browse/CORE-1767">CORE-1767</a> - Oracle snapshot not capturing all indexes
- <a href="https://liquibase.jira.com/browse/CORE-1772">CORE-1772</a> - Informix cannot drop constraints
- <a href="https://liquibase.jira.com/browse/CORE-1774">CORE-1774</a> - Autocommit not restored on close in SpringLiquibase
- <a href="https://liquibase.jira.com/browse/CORE-1775">CORE-1775</a> - Informix error when creating primary key
- <a href="https://liquibase.jira.com/browse/CORE-1779">CORE-1779</a> - User Defined Types Come back with Unnecessary Size specifier in diff
- <a href="https://liquibase.jira.com/browse/CORE-1782">CORE-1782</a> - dropALL fails when tables are referenced by other tables in another schema
- <a href="https://liquibase.jira.com/browse/CORE-1784">CORE-1784</a> - GenerateChangeLog with objects in multiple schemas returns objects from multiple schemas and empty createTable statements
- <a href="https://liquibase.jira.com/browse/CORE-1788">CORE-1788</a> - dropAll does not work in not default schemas using postgresql
- <a href="https://liquibase.jira.com/browse/CORE-1794">CORE-1794</a> - Drop index failing for sybase
- <a href="https://liquibase.jira.com/browse/CORE-1797">CORE-1797</a> - Autoincrement on type Serial8 fails
- <a href="https://liquibase.jira.com/browse/CORE-1798">CORE-1798</a> - Invalid type syntax in Informix for Int(10) and SMALLINT(5) and FRACTION(3)
- <a href="https://liquibase.jira.com/browse/CORE-1799">CORE-1799</a> - Attempted recreation of DATABASECHANGELOG in informix
- <a href="https://liquibase.jira.com/browse/CORE-1817">CORE-1817</a> - Foreign Key Constraints Built on Unique Constraints are not captured in generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1818">CORE-1818</a> - SQL Server "smalldatetime" converted to "datetime" on update
- <a href="https://liquibase.jira.com/browse/CORE-1824">CORE-1824</a> - GUID Default values not quoted correctly in MSSQL
- <a href="https://liquibase.jira.com/browse/CORE-1828">CORE-1828</a> - sqlFile should fail when file does not exists
- <a href="https://liquibase.jira.com/browse/CORE-1831">CORE-1831</a> - CREATE/DROP INDEX issue: Sybase ASE 15.7.0
- <a href="https://liquibase.jira.com/browse/CORE-1834">CORE-1834</a> - generateChangeLog creates DOUBLE(22) instead of double in MySql
- <a href="https://liquibase.jira.com/browse/CORE-1840">CORE-1840</a> - Liquibase fails when run on a computer that can't connect to the internet
- <a href="https://liquibase.jira.com/browse/CORE-1843">CORE-1843</a> - includeAll does not alphabetize classpath loaded files
- <a href="https://liquibase.jira.com/browse/CORE-1853">CORE-1853</a> - Liquibase generates invalid SQL for 'character varying' type
- <a href="https://liquibase.jira.com/browse/CORE-1856">CORE-1856</a> - Ability for Change classes to verify update and rollback succeeded
- <a href="https://liquibase.jira.com/browse/CORE-1859">CORE-1859</a> - DataTypeFactory doesn't take database into account
- <a href="https://liquibase.jira.com/browse/CORE-1861">CORE-1861</a> - MSSQLDatabase.isCaseSensitive() provides a wrong information
- <a href="https://liquibase.jira.com/browse/CORE-1878">CORE-1878</a> - Maven plugin behaviour different than command line with the same parameters
- <a href="https://liquibase.jira.com/browse/CORE-1881">CORE-1881</a> - Case sensitivity issue with tableExists precondition
- <a href="https://liquibase.jira.com/browse/CORE-1893">CORE-1893</a> - type="DATETIME" in changelog is converted to TIMESTAMP in MySql
- <a href="https://liquibase.jira.com/browse/CORE-1899">CORE-1899</a> - Non-existing referenced sql files doesn't report error
- <a href="https://liquibase.jira.com/browse/CORE-1901">CORE-1901</a> - DropPrimaryKey - Fails in Postgres
- <a href="https://liquibase.jira.com/browse/CORE-1906">CORE-1906</a> - Diff between objects in different named default schemas doesn't see them as the same object
- <a href="https://liquibase.jira.com/browse/CORE-1912">CORE-1912</a> - Unit tests fail due to dependency on system time zone
- <a href="https://liquibase.jira.com/browse/CORE-1116">CORE-1116</a> - Allow for both "AND" and "OR" specifications of which contexts to run
- <a href="https://liquibase.jira.com/browse/CORE-1422">CORE-1422</a> - Support changeset comments in formatted SQL
- <a href="https://liquibase.jira.com/browse/CORE-1536">CORE-1536</a> - Support specifying the referenceDefaultSchemaName for diff operations
- <a href="https://liquibase.jira.com/browse/CORE-1635">CORE-1635</a> - Generated changelog missing unique constraints should be output before foreign keys
- <a href="https://liquibase.jira.com/browse/CORE-1682">CORE-1682</a> - More machine-independent handling of filesystem-located resources
- <a href="https://liquibase.jira.com/browse/CORE-1695">CORE-1695</a> - Better handling of Postgres timestamp with/without time zone
- <a href="https://liquibase.jira.com/browse/CORE-1706">CORE-1706</a> - Excessive reading from databasechangelog table
- <a href="https://liquibase.jira.com/browse/CORE-1726">CORE-1726</a> - Added offline parameter to generate insert databasechangelog statements
- <a href="https://liquibase.jira.com/browse/CORE-1758">CORE-1758</a> - Add outputDefaultSchema flags to ant
- <a href="https://liquibase.jira.com/browse/CORE-1776">CORE-1776</a> - System-independent checksums
- <a href="https://liquibase.jira.com/browse/CORE-1823">CORE-1823</a> - Search for liquibase.properties in classpath in additional to local filesystem
- <a href="https://liquibase.jira.com/browse/CORE-1874">CORE-1874</a> - Improve XML and other parsers for better extensiblity
- <a href="https://liquibase.jira.com/browse/CORE-1905">CORE-1905</a> - Yaml parser supports .yml extension as well as .yaml
- <a href="https://liquibase.jira.com/browse/CORE-1686">CORE-1686</a> - Add Support for Pivotal's SqlFire database to Liquibase
- <a href="https://liquibase.jira.com/browse/CORE-1742">CORE-1742</a> - Standardized system for managing configuration options in core and extensions
- <a href="https://liquibase.jira.com/browse/CORE-1751">CORE-1751</a> - More detailed API for returning changeSet statuses
- <a href="https://liquibase.jira.com/browse/CORE-1783">CORE-1783</a> - Command line option: snapshot
- <a href="https://liquibase.jira.com/browse/CORE-1815">CORE-1815</a> - Liquibase SDK command to easily watch database
- <a href="https://liquibase.jira.com/browse/CORE-1821">CORE-1821</a> - Snapshot listener interface




