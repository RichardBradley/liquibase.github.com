---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.3.0 and 3.2.3 Released
---


Liquibase 3.2.3 and 3.3.0 have been released. As usual, they can be downloaded from the <a href="http://liquibase.org/download">Liquibase download page</a> and are available in the Maven repository as org.liquibase/liquibase-core.


Both 3.2.3 and 3.3.0 should be drop-in replacements for 3.2.2. A new batch of Liquibase extensions will be released over the next few days.


### New "label" attribute on changeSet


Labels are general purpose way to categorize changeSets like contexts, but working in the opposite way. Instead of defining a set of contexts at runtime and then a match expression in the changeSet, you define a set of labels in the context and a match expression at runtime.


The most common time you would use labels instead of contexts is when the person doing the liquibase update has the knowledge of the types of changeSets to run, not the person writing the changeSet.


Labels can also be applied to modifySql


### New change log commands and attributes


- New "empty" tag for explicitly marking a changeSet as unused
- New "output" tag for outputting a message during Liquibase update.
- New relativeToChangeLogFile attribute for loadData and loadUpdateDate
- New fullDefinition=true\|false attribute on createView to support defining an entire view definition (including "column" names)

### Support for clustered/nonclustered indexes and primary keys

A new "clustered='true\|false'" attribute is now avaiable on createIndex and createPrimaryKey to control whether they should be created as clustered or not.

### And More

- Saving of "remarks" in MySQL and MSSQL
- Improved data type handling
- Performance improvements
- Official RPM and DEB packages built with release
- Major refactoring and updating of Ant integration
- Full release notes below

### 3.2.3 Change Log

3.2.3 is a patch release with smaller bug fixes. Even if not explicitly listed in the changelogs below, anything in 3.2.3 will be in 3.3.0.


- <a href="https://liquibase.jira.com/browse/CORE-1919">CORE-1919</a> - SpringLiquibase fails when dropFirst is true
- <a href="https://liquibase.jira.com/browse/CORE-1987">CORE-1987</a> - "mvn liquibase:diff" does not find any differences between databases
- <a href="https://liquibase.jira.com/browse/CORE-1988">CORE-1988</a> - Reported size for Oracle NVARCHAR2 columns is wrong
- <a href="https://liquibase.jira.com/browse/CORE-1989">CORE-1989</a> - Cannot set objectQuotingStrategy on root databaseChangeLog node
- <a href="https://liquibase.jira.com/browse/CORE-2002">CORE-2002</a> - AbstractResourceAccessor generates path in a unpredictable way
- <a href="https://liquibase.jira.com/browse/CORE-2003">CORE-2003</a> - Could not find implementation of liquibase.logging.Logger
- <a href="https://liquibase.jira.com/browse/CORE-2042">CORE-2042</a> - If liquibase.jar is nested in another jar/war/ear, it fails to start with a "cannot find implementation of liquibase.logging.Logger" error
- <a href="https://liquibase.jira.com/browse/CORE-2058">CORE-2058</a> - Load/Update tags should use "is null" not "= null" for null comparisons
- <a href="https://liquibase.jira.com/browse/CORE-2070">CORE-2070</a> - dropAllForeignKeyConstraints does not work on Firebird databases
- <a href="https://liquibase.jira.com/browse/CORE-2075">CORE-2075</a> - generateChangelog generates bad definition for TIME type
- <a href="https://liquibase.jira.com/browse/CORE-2080">CORE-2080</a> - Liquibase "empty" change not present in XSD version 3.2
- <a href="https://liquibase.jira.com/browse/CORE-2065">CORE-2065</a> - Use DOUBLE PRECISION for DOUBLE with Firebird
- <a href="https://liquibase.jira.com/browse/CORE-54">CORE-54</a> - Support System Properties in Maven Plugin


### 3.3.0 Change Log

- <a href="https://liquibase.jira.com/browse/CORE-16">CORE-16</a> - Support for "nonclustered" primary keys in mssql
- <a href="https://liquibase.jira.com/browse/CORE-54">CORE-54</a> - Support System Properties in Maven Plugin
- <a href="https://liquibase.jira.com/browse/CORE-1528">CORE-1528</a> - Installer for Liquibase
- <a href="https://liquibase.jira.com/browse/CORE-1598">CORE-1598</a> - support for rename sequence
- <a href="https://liquibase.jira.com/browse/CORE-1914">CORE-1914</a> - New Change function: output
- <a href="https://liquibase.jira.com/browse/CORE-1942">CORE-1942</a> - Support for changeSet "labels"
- <a href="https://liquibase.jira.com/browse/CORE-549">CORE-549</a> - relativeToChangelogFile for loadData, loadUpdateData, sqlFile
- <a href="https://liquibase.jira.com/browse/CORE-1438">CORE-1438</a> - createView should support having the entire view definition in the change body
- <a href="https://liquibase.jira.com/browse/CORE-1502">CORE-1502</a> - CLONE - UpdateSQL needs to append a "/" to the end of createProcedure for Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1654">CORE-1654</a> - logicalFilePath support in formatted sql
- <a href="https://liquibase.jira.com/browse/CORE-1660">CORE-1660</a> - "remarks" attribute is ignored in MSSQL
- <a href="https://liquibase.jira.com/browse/CORE-1932">CORE-1932</a> - support for encrypted passwords / custom properties
- <a href="https://liquibase.jira.com/browse/CORE-1946">CORE-1946</a> - Have a rpm package for liquibase (built with maven)
- <a href="https://liquibase.jira.com/browse/CORE-1963">CORE-1963</a> - Ability to define full CREATE VIEW statement in `<createView>` change.
- <a href="https://liquibase.jira.com/browse/CORE-1990">CORE-1990</a> - Preserve inline comments in view snapshots in mssql
- <a href="https://liquibase.jira.com/browse/CORE-2060">CORE-2060</a> - Support liquibase.properties files with unknown properties
- <a href="https://liquibase.jira.com/browse/CORE-2061">CORE-2061</a> - Improvements to Informix support
- <a href="https://liquibase.jira.com/browse/CORE-2062">CORE-2062</a> - Add onlyUpdate flag to loadUpdateData
- <a href="https://liquibase.jira.com/browse/CORE-2064">CORE-2064</a> - Use ignoreClassPathPrefix for rollback as well
- <a href="https://liquibase.jira.com/browse/CORE-2065">CORE-2065</a> - Use DOUBLE PRECISION for DOUBLE with Firebird
- <a href="https://liquibase.jira.com/browse/CORE-2066">CORE-2066</a> - Support for --outputFile in command line
- <a href="https://liquibase.jira.com/browse/CORE-2067">CORE-2067</a> - Refactor Ant Task codebase
- <a href="https://liquibase.jira.com/browse/CORE-2068">CORE-2068</a> - New liquibase.hostDescription property for additional details in the DATABASECHANGELOGLOCK table
- <a href="https://liquibase.jira.com/browse/CORE-2069">CORE-2069</a> - Use prepared statement in `<update>` change whenever a clob type is used
- <a href="https://liquibase.jira.com/browse/CORE-2072">CORE-2072</a> - Do not include Oracle internal tables in snapshot/diff
- <a href="https://liquibase.jira.com/browse/CORE-870">CORE-870</a> - Postgres, in an ALTER TABLE ALTER COLUMN statement, sometimes needs USING clause
- <a href="https://liquibase.jira.com/browse/CORE-945">CORE-945</a> - Oracle : Temporary tables are created as regular tables
- <a href="https://liquibase.jira.com/browse/CORE-1463">CORE-1463</a> - Views not generated correctly with generateChangelog
- <a href="https://liquibase.jira.com/browse/CORE-1556">CORE-1556</a> - remarks attribute ignored for mysql
- <a href="https://liquibase.jira.com/browse/CORE-1723">CORE-1723</a> - unable to update on DB2/400, version V6R1, on jt400-6.7.jar
- <a href="https://liquibase.jira.com/browse/CORE-1745">CORE-1745</a> - afterColumn not working in MySQL
- <a href="https://liquibase.jira.com/browse/CORE-1774">CORE-1774</a> - Autocommit not restored on close in SpringLiquibase
- <a href="https://liquibase.jira.com/browse/CORE-1882">CORE-1882</a> - NullPointerException when MySQL foreign key points to an invalid table
- <a href="https://liquibase.jira.com/browse/CORE-1919">CORE-1919</a> - SpringLiquibase fails when dropFirst is true
- <a href="https://liquibase.jira.com/browse/CORE-1922">CORE-1922</a> - Sequence is not a reserved object name in HSQLDB
- <a href="https://liquibase.jira.com/browse/CORE-1925">CORE-1925</a> - liquibase scripts can not represent clustered indexes
- <a href="https://liquibase.jira.com/browse/CORE-1937">CORE-1937</a> - Oracle Float and VARCHAR precisions in changelog generated by generateChangeLog are incorrect
- <a href="https://liquibase.jira.com/browse/CORE-1952">CORE-1952</a> - liquibase loadData does not properly load numeric field in boolean always as false
- <a href="https://liquibase.jira.com/browse/CORE-1956">CORE-1956</a> - Double and float converted to FLOAT8(*, 17) and FLOAT4(*, 8) in PostgreSQL
- <a href="https://liquibase.jira.com/browse/CORE-1958">CORE-1958</a> - Column type of "TIMESTAMP(6)" under MySql converted to TIMESTAMP dropping fractional seconds
- <a href="https://liquibase.jira.com/browse/CORE-1974">CORE-1974</a> - dbchangelog-3.1.xsd missing `<empty>`
- <a href="https://liquibase.jira.com/browse/CORE-1977">CORE-1977</a> - CreateSequence with cacheSize=0 failing on Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1979">CORE-1979</a> - MSSQL should not include parameters in SYSNAME data types
- <a href="https://liquibase.jira.com/browse/CORE-1981">CORE-1981</a> - Parameters set in included file are no longer set in 3.2.0
- <a href="https://liquibase.jira.com/browse/CORE-1982">CORE-1982</a> - Snapshot outputs defautlValueDate as defaultValueComputed on MSSQL for dates not in ISO format with a T in the middle
- <a href="https://liquibase.jira.com/browse/CORE-1986">CORE-1986</a> - includeAll from changeLogs within a jar is not working
- <a href="https://liquibase.jira.com/browse/CORE-1988">CORE-1988</a> - Reported size for Oracle NVARCHAR2 columns is wrong
- <a href="https://liquibase.jira.com/browse/CORE-1993">CORE-1993</a> - Drop table with cascade is not supported by Sybase
- <a href="https://liquibase.jira.com/browse/CORE-1996">CORE-1996</a> - addNotNullConstraint on h2 database has unexpected side effects
- <a href="https://liquibase.jira.com/browse/CORE-1997">CORE-1997</a> - Bit changelog default value of 1 executed as 0
- <a href="https://liquibase.jira.com/browse/CORE-2002">CORE-2002</a> - AbstractResourceAccessor generates path in a unpredictable way
- <a href="https://liquibase.jira.com/browse/CORE-2010">CORE-2010</a> - Oracle data type SDO_GEOMETRY snapshotted as SDO_GEOMETRY(1)
- <a href="https://liquibase.jira.com/browse/CORE-2014">CORE-2014</a> - applyToRollback property ignored when rollback changes are specified
- <a href="https://liquibase.jira.com/browse/CORE-2015">CORE-2015</a> - DiffChangeLog writes to the wrong point in the file on windows if file uses \n not \r\n
- <a href="https://liquibase.jira.com/browse/CORE-2020">CORE-2020</a> - Oracle default value current_timestamp converted to systimestamp
- <a href="https://liquibase.jira.com/browse/CORE-2021">CORE-2021</a> - Column remarks not snapshotted in mssql
- <a href="https://liquibase.jira.com/browse/CORE-2026">CORE-2026</a> - Oracle columns of type ANYDATA are snapshotted with a size
- <a href="https://liquibase.jira.com/browse/CORE-2028">CORE-2028</a> - generateChangeLog on SQL Anywhere 11.0.1 throws DatabaseException Driver Not Capable
- <a href="https://liquibase.jira.com/browse/CORE-2032">CORE-2032</a> - Snapshot incorrectly including clob/blob sizes on diff
- <a href="https://liquibase.jira.com/browse/CORE-2051">CORE-2051</a> - Not quoting VIEW params with spaces when snapshotting
- <a href="https://liquibase.jira.com/browse/CORE-2054">CORE-2054</a> - Add new "computed" column attribute to differentiate between an actual column name and a function as a column
- <a href="https://liquibase.jira.com/browse/CORE-2063">CORE-2063</a> - Fix for H2 autoincrement "start with" and "increment by" syntax
- <a href="https://liquibase.jira.com/browse/CORE-2070">CORE-2070</a> - dropAllForeignKeyConstraints does not work on Firebird databases
- <a href="https://liquibase.jira.com/browse/CORE-2075">CORE-2075</a> - generateChangelog generates bad definition for TIME type
- <a href="https://liquibase.jira.com/browse/CORE-2080">CORE-2080</a> - Liquibase "empty" change not present in XSD version 3.2
- <a href="https://liquibase.jira.com/browse/CORE-2081">CORE-2081</a> - PrimaryKeyExists precondition without tableName is broken
- <a href="https://liquibase.jira.com/browse/CORE-2082">CORE-2082</a> - Column snapshot on PostgreSQL does not include precision information for numeric data type
- <a href="https://liquibase.jira.com/browse/CORE-2087">CORE-2087</a> - Executing against Oracle doesn't respect liquibaseSchemaName or liquibaseCatalogName
- <a href="https://liquibase.jira.com/browse/CORE-2088">CORE-2088</a> - outputDefaultSchema and outputDefaultCatalog command line parameters not respected
- <a href="https://liquibase.jira.com/browse/CORE-2093">CORE-2093</a> - Error: Property 'relativeToChangelogFile' not found on object type liquibase.change.core.LoadDataChange
- <a href="https://liquibase.jira.com/browse/CORE-2094">CORE-2094</a> - Liquibase.dropAll() should reset the lock service
- <a href="https://liquibase.jira.com/browse/CORE-2095">CORE-2095</a> - Invalid generated changeset for mysql bit with defaultValue 0




