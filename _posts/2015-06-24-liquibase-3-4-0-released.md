---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.4.0 Released
---

Liquibase 3.4.0 has been released and is working it's way through the Maven mirrors.

Downloads are available at [http://liquibase.org/download](/download). Question or comments can be directed [here](http://liquibase.org/community)


Lots of good things in 3.4.0, but some highlights include:

### You can now save snapshots and later reuse them for diff, generateChangeLog, and more

We previously added the ability to use "offline" databases which allows you to specify a url of "offline:mysql" for updateSql.
With 3.4.0, there is a new `--snapshotFormat=json` attribute you can pass to the snapshot command which will output the snapshot in machine-readable JSON.

{% highlight console %}
liquibase --url=jdbc:mysql://localhost/lbcat snapshot --snapshotFormat=json > snapshot.json
{% endhighlight %}

You can then use that snapshot with offline mode and any snapshot operations will use what is in the snapshot file as the database state.

- **liquibase --url=jdbc:mysql://localhost/lbcat --referenceUrl=offline:mysql?snapshot=path/to/snapshot.json diff** will compare the stored snapshot with the current database state
- **liquibase --url=offline:mysql?snapshot=path/to/snapshot.json diff --referenceUrl=offline:mysql?snapshot=path/to/older-snapshot.json diff** will compare two snapshots
- **liquibase --url=offline:mysql?snapshot=path/to/snapshot.json generateChangeLog** will generate a changelog based on what is in the snapshot
- **liquibase --url=jdbc:mysql://localhost/lbcat --referenceUrl=offline:mysql?snapshot=path/to/snapshot.json diffChangeLog** will generate a changelog based on what is new in the real database compared to what is in the snapshot.

### Changelog properties can be defined as local to the changelog, not global

Previously, changelog properties were "write once" and global. Meaning that once you define a property, it cannot be overridden and is applicable to all changelogs.

You can now use the `global="false"` flag in properties defined in a changeSet and the property will only apply to that changeLog.

{% highlight xml %}
<databaseChangeLog>
    <property name="varchar_type" value="NVARCHAR"/>
    <property name="boolean_type" value="BIT" global="false"/>
</databaseChangeLog>
{% endhighlight %}

The type varchar_type will be set to NVARCHAR across all changelog files, but the boolean_type value will only be BIT within this file and will be undefined elsewhere.

### Index descending can be more easily defined

Previously, if you wanted to control if an index is ASC or DESC you needed to use modifySql or just list the column name as "name DESC". There is now a "descending" boolean flag that can be specified in createTable and createIndex changes.

{% highlight xml %}
<createIndex tableName="my_table" indexName="my_index">
    <column name="registration_time"/>
    <column name="id" descending="true" />
</createIndex>
{% endhighlight %}

### Performance improvements

There was significant work done to improve snapshot time as well as loaddata. The metadata queries were improved and the amount of metadata that needs to be read for some operations was greatly decreased.

The larger your databases are, the more of an improvement you should see.

### New tagExists command

Are you wondering if you have already used a given tag? Use `liquibase tagExists tagName` to find out.

### Full Release Notes

Thanks to everyone who helped with [all these issues](https://liquibase.jira.com/jira/secure/ReleaseNote.jspa?projectId=10020&version=11960)

- [CORE-14] - Dropping default values with MS-SQL
- [CORE-822] - Add a tag to add/update table/column remarks
- [CORE-864] - loaddata performance enhancement
- [CORE-1411] - MariaDB support
- [CORE-2254] - Ability to save snapshot for later comparison
- [CORE-2257] - Ability to use a previously saved database snapshot in diff and generateChangeLog
- [CORE-2302] - Add ability to load nested object/collection properties and BigDecimal properties automatically
- [CORE-2306] - Support passing in a script for rollback to override rollback logic included in the changelog
- [CORE-2308] - Track changeSet contexts and labels in databasechangelog table
- [CORE-2345] - Add XML Type
- [CORE-419] - Allowing ASC and DESC in index definitions
- [CORE-562] - Allow naming of not null constraints
- [CORE-715] - indexExists does a full snapshot
- [CORE-1731] - Support autoincrement in oracle 12c
- [CORE-2124] - Ability to pass properties to a JDBC driver required
- [CORE-2132] - Error message for missing sqlFile reference should be more descriptive
- [CORE-2147] - HsqlDatabase should emit uppercase names when quoting reserved words to preserve case insensitivity
- [CORE-2171] - New ChangeExecListener.runFailed method
- [CORE-2177] - Support NOT(X) syntax for labels
- [CORE-2185] - Few fields needs to be changed as protected and need additional field in RanChangeSet
- [CORE-2217] - Add DataTypeFactory support for delimited data type names, improve resolution of MSSQL data types
- [CORE-2228] - New usingIndexName attribute on addPrimaryKey
- [CORE-2236] - Support .yml extension in YamlChangeLogSerializer
- [CORE-2244] - Handle generating SQL Server DDL where ANSI NULL Default is false
- [CORE-2249] - Index and UniqueConstraint equivalence check should take name into account
- [CORE-2288] - Do not check/updatedatabasechangelog table on status
- [CORE-2292] - New tagExists command for command line
- [CORE-2298] - Allow HSQL to use defaultValueComputed for certain allowed functions on datetime type columns
- [CORE-2299] - Add capability to ignore missing or empty folder with includeAll
- [CORE-2307] - ChangeLog table name option in command line tool
- [CORE-2309] - global/local properties on changesets
- [CORE-2320] - MinGW (Git Bash) support for shell
- [CORE-2334] - Disable CREATE TABLE DATABASECHANGELOG generation when running on OfflineConnection
- [CORE-2336] - Use a grammer for parsing SQL rather than regexps
- [CORE-2358] - Improve data types for Liquibase tables in MSSQL
- [CORE-2359] - Consistently read dataTypeId for all databases
- [CORE-2363] - Improve robustness of MSSQL database case-insensitivity check
- [CORE-2371] - Improve Oracle snapshot performance
- [CORE-2386] - Set the connection default catalog/schema if defaultCatalogName or defaultSchemaName is set
- [CORE-2397] - MSSQL View Snapshot should not use sp_helptext
- [CORE-2399] - DBDoc improvements
- [CORE-2404] - Ability to preserve TEXT type in mssql snapshot and update
- [CORE-842] - Tag database not taking orderexecuted into account
- [CORE-1296] - drop column on ms sql server
- [CORE-1424] - SQL Generation ignores DATETIME parameters
- [CORE-1542] - Sequence is dropped not until a second run of dropAllDatabaseObjects on PostgreSQL
- [CORE-1738] - loadData from csv fails for boolean column (if another column present)
- [CORE-1749] - Update change command does not respect whereParams
- [CORE-1803] - DropAll doesn’t delete sequences if they are used as default value in postgres
- [CORE-1904] - Slow indexExists performance in Oracle
- [CORE-1924] - SQLServer diff - DATETIME2 not being handled correctly
- [CORE-2005] - /usr/bin/liquibase: Syntax error: "else" unexpected
- [CORE-2018] - Quotes stripped from index filter_conditions on snapshot
- [CORE-2019] - Comments in empty rollback prevent execution
- [CORE-2041] - Escaping of reserved keywords in HSQLDB
- [CORE-2096] - DiffChangeLog with changed indexes generates drop/add in the wrong order
- [CORE-2109] - dropAll fails for statements the database requires to run non-transactionally
- [CORE-2113] - Informix text datatype fixes
- [CORE-2133] - Oracle: GenerateChangeLog of a table with DEFAULT VALUE NULL creates defaultValueComputed="NULL"
- [CORE-2167] - Issues with generateChangeLog of unique constraints on DB2
- [CORE-2169] - offline mode seems non-deterministic
- [CORE-2178] - Fatal exception acquiring lock in SQL Server databases with case-sensitive collation
- [CORE-2196] - Ant: "Unable to update database." without explanation
- [CORE-2209] - Oracle snapshot sometimes creates "GENERATED ALWAYS AS (null)"
- [CORE-2211] - Liquibase tries to execute commented lines in custom SQL file
- [CORE-2219] - DB2 for zOs - adding primary key always emits REORG but REORG does not exist on Db2 for zOs
- [CORE-2222] - TIMESTAMP parameters dropped for PostgreSQL
- [CORE-2224] - Index uniqueness is not always recognized correctly
- [CORE-2227] - CLONE - UpdateSQL needs to append a "/" to the end of createProcedure for Oracle
- [CORE-2232] - Support schema other than public on PostgreSQL
- [CORE-2233] - Oracle Timestamp precision lost in generateChangeLog
- [CORE-2234] - columnExists precondition could be much faster (Oracle, mssql)
- [CORE-2237] - YamlChangeLogSerializer does not correctly serialize a changeset
- [CORE-2251] - Adding column with type DATETIME doesn't work for PostgreSQL
- [CORE-2252] - XMLChangeLogSerializer writes array object for rollback tag content
- [CORE-2253] - Handle oracle varchar <-> clob conversions in diffChangeLog
- [CORE-2256] - Drop Sequences before Tables
- [CORE-2266] - DiffChangeLog: Invalid changelog when a primary key backing index is changed
- [CORE-2267] - Rollback fails for mixed-case objects created with QUOTE_ALL_OBJECTS
- [CORE-2270] - Doubledash inside quoted text causes parsing error
- [CORE-2271] - CLONE - DiffChangeLog: Invalid changelog when a unique constraint backing index is changed
- [CORE-2272] - DiffChangeLog must drop foreign keys before primary keys
- [CORE-2273] - Oracle char column snapshot not differentiating between a default value of 0 and '0'
- [CORE-2275] - YAML update fails with Unexpected error running Liquibase: java.util.LinkedHashMap cannot be cast to java.util.List
- [CORE-2281] - Oracle snapshot performance issue with many multiple views
- [CORE-2291] - ObjectQuotingStrategy not reset correctly after changeSet
- [CORE-2295] - includeAll tries to load all files instead only *.xml
- [CORE-2300] - Unsigned Int / Bigint cannot be created
- [CORE-2305] - Snapshot output too verbose
- [CORE-2316] - Data type registry occasionally returns wrong data type implementation
- [CORE-2321] - Liquibase tag command tags too much
- [CORE-2324] - diffChangeLog does not handle changes in sequence incrementBy, maxValue or ordered
- [CORE-2331] - Support for MSSQL collation in data type description broken
- [CORE-2340] - Add support for extensions to override the built-in change log, snapshot serializers
- [CORE-2355] - Improve updateSQL performance
- [CORE-2361] - preConditions, rollback, property, include, includeAll cannot be serialized
- [CORE-2373] - Local DTD files not found in subdirectory
- [CORE-2378] - Adding a new "CustomChange" triggers ClassNotFoundException
- [CORE-2380] - Support reading of gzip files
- [CORE-2381] - Fix unique constraint generator for informix
- [CORE-2383] - Change formatted SQL stripComments default from "true" to "false"
- [CORE-2385] - IncludeAll does not work when runing liquibase from inside a jar
- [CORE-2387] - dropPrimaryKey without constraint name on sql server doesn't query schema correctly
- [CORE-2388] - Views not equal in different schemas
- [CORE-2390] - NullPointerException when generating changelog
- [CORE-2391] - column type doesn't respect unsigned
- [CORE-2393] - changeSet contexts created with maven generateChangeLog are in parentheses
- [CORE-2401] - MSSQL handling timestamp according to sql standard, not sqlserver usage
- [CORE-2402] - Oracle NCLOB defaultValues not read correctly

