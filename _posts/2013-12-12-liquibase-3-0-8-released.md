---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0.8 Released
---
# Liquibase 3.0.8 Released

Liquibase 3.0.8 is officially released. It is purely a bugfix release that covers improvements to data type handing, performance improvements, and much more.

### Download

Download Liquibase from <a href="http://liquibase.org/download">http://liquibase.org/download</a> or from the Maven repository as it winds its way through the mirror process. Visit the <a href="http://liquibase.org/community">user forums</a> if you have any questions.

### All Closed Issues


- <a href="https://liquibase.jira.com/browse/CORE-1224">CORE-1224</a> - Enum column types are not appropriately represented in the change log created by generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1299">CORE-1299</a> - modifyDataType does not auto reorg on DB2
- <a href="https://liquibase.jira.com/browse/CORE-1302">CORE-1302</a> - MySQL syntax for autoincrement column with start value
- <a href="https://liquibase.jira.com/browse/CORE-1357">CORE-1357</a> - Postgresql sequences create error in log files
- <a href="https://liquibase.jira.com/browse/CORE-1368">CORE-1368</a> - Unable to recreate DB from generated change logs
- <a href="https://liquibase.jira.com/browse/CORE-1427">CORE-1427</a> - Not generateChangeLog properly for INT2 type for Postgres
- <a href="https://liquibase.jira.com/browse/CORE-1430">CORE-1430</a> - When I was in sybase database using liquibase create the index, reported "information_schema.constraints" not found error
- <a href="https://liquibase.jira.com/browse/CORE-1432">CORE-1432</a> - Liquibase H2 InsertOrUpdateGeneratorH2 fails if primary key column name contains $ character
- <a href="https://liquibase.jira.com/browse/CORE-1446">CORE-1446</a> - Liquibase changelog generation can add linefeed to defaultValueComputed if last column
- <a href="https://liquibase.jira.com/browse/CORE-1454">CORE-1454</a> - Precondition negation does not seem to work
- <a href="https://liquibase.jira.com/browse/CORE-1455">CORE-1455</a> - Value not taken into account when inserting data with YAML
- <a href="https://liquibase.jira.com/browse/CORE-1484">CORE-1484</a> - very poor performance of dropAll on Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1496">CORE-1496</a> - Custom Change validation happening before being fully initialized
- <a href="https://liquibase.jira.com/browse/CORE-1531">CORE-1531</a> - includeAll with relativeToChangeLogFile fails under certain conditions
- <a href="https://liquibase.jira.com/browse/CORE-1537">CORE-1537</a> - Liquibase: diffChangeLog on DB2 performing out of order steps
- <a href="https://liquibase.jira.com/browse/CORE-1538">CORE-1538</a> - diffChangeLog for DB2 injects invalid characters in xml
- <a href="https://liquibase.jira.com/browse/CORE-1540">CORE-1540</a> - Call 'Reorg table' after modifyDataType on DB2
- <a href="https://liquibase.jira.com/browse/CORE-1541">CORE-1541</a> - Column type="LONGVARCHAR" fails
- <a href="https://liquibase.jira.com/browse/CORE-1545">CORE-1545</a> - Oracle wrong LONG datatype declaration
- <a href="https://liquibase.jira.com/browse/CORE-1547">CORE-1547</a> - CLONE - H2 (and other) support for BLOB and CLOB is incorrect
- <a href="https://liquibase.jira.com/browse/CORE-1548">CORE-1548</a> - Oracle Data Type: DATE - defaultValueComputed should be defaultValue
- <a href="https://liquibase.jira.com/browse/CORE-1549">CORE-1549</a> - Oracle Data Type: INTERVAL YEAR TO MONTH - returned at "INTERNAL(2) YEAR"
- <a href="https://liquibase.jira.com/browse/CORE-1550">CORE-1550</a> - Oracle Data Type: NCLOB - Receive SQL error when specifying NCLOB size
- <a href="https://liquibase.jira.com/browse/CORE-1551">CORE-1551</a> - Oracle Data Type: NCHAR
- <a href="https://liquibase.jira.com/browse/CORE-1552">CORE-1552</a> - Oracle Data Type: NVARCHAR2 - Column sizing is wrong
- <a href="https://liquibase.jira.com/browse/CORE-1553">CORE-1553</a> - dropDefaultValue does not work on SQL Server
- <a href="https://liquibase.jira.com/browse/CORE-1554">CORE-1554</a> - dbDoc for Informix IDS
- <a href="https://liquibase.jira.com/browse/CORE-1555">CORE-1555</a> - Oracle UID reserved word not detected
- <a href="https://liquibase.jira.com/browse/CORE-1557">CORE-1557</a> - Mysql: BLOB type changes to LONGBLOB
- <a href="https://liquibase.jira.com/browse/CORE-1559">CORE-1559</a> - Columns defined as "serial" are created as "int" without autoincrement in Postgres
- <a href="https://liquibase.jira.com/browse/CORE-1562">CORE-1562</a> - update throws Recoverable Exception
- <a href="https://liquibase.jira.com/browse/CORE-1564">CORE-1564</a> - Broken links in dbDoc
- <a href="https://liquibase.jira.com/browse/CORE-1566">CORE-1566</a> - DB2 Datatype - DBCLOB, GRAPHIC, VARGRAPHIC doubling datatype size
- <a href="https://liquibase.jira.com/browse/CORE-1567">CORE-1567</a> - DB2 Datatype - defaultValueComputed being used instead of defaultValue for DBCLOB, TIME, TIMESTAMP, DATE
- <a href="https://liquibase.jira.com/browse/CORE-1568">CORE-1568</a> - DB2 Datatype - REAL and XML should not have datatype sizes
- <a href="https://liquibase.jira.com/browse/CORE-1571">CORE-1571</a> - updateDatabase can't find a changelog
- <a href="https://liquibase.jira.com/browse/CORE-1572">CORE-1572</a> - Regression: diff generates full schema instead of changes when using liquibase-hibernate4
- <a href="https://liquibase.jira.com/browse/CORE-1580">CORE-1580</a> - Mysql SET type not handled correctly
- <a href="https://liquibase.jira.com/browse/CORE-1581">CORE-1581</a> - modifyDataType ignores additional info of newDataType
- <a href="https://liquibase.jira.com/browse/CORE-1582">CORE-1582</a> - SQLServer datatype for TIMESTAMP
- <a href="https://liquibase.jira.com/browse/CORE-1583">CORE-1583</a> - Wrong datatype with renameColumn
- <a href="https://liquibase.jira.com/browse/CORE-1584">CORE-1584</a> - Unable do rollback not in transaction block
- <a href="https://liquibase.jira.com/browse/CORE-1586">CORE-1586</a> - MySQL DataType - defaultValueComputed being injected into TIMESTAMP, VARBINARY, BINARY, YEAR
- <a href="https://liquibase.jira.com/browse/CORE-1587">CORE-1587</a> - MySQL Datatype - VARBINARY vs LONGBLOB confusion
- <a href="https://liquibase.jira.com/browse/CORE-1588">CORE-1588</a> - MySQL DataType - BIT size and default not captured on Snapshot
- <a href="https://liquibase.jira.com/browse/CORE-1589">CORE-1589</a> - MySQL DataType - BLOB becomes LONGBLOB
- <a href="https://liquibase.jira.com/browse/CORE-1590">CORE-1590</a> - MySQL DataType - DOUBLE sizing not persisted on snapshot
- <a href="https://liquibase.jira.com/browse/CORE-1591">CORE-1591</a> - MySQL DataType - TIME not persisting seconds (getting hours and minutes..so I've got that going for me.)
- <a href="https://liquibase.jira.com/browse/CORE-1592">CORE-1592</a> - MySQL DataType - TEXT converted to LONGTEXT
- <a href="https://liquibase.jira.com/browse/CORE-1594">CORE-1594</a> - PostgreSQL 'bigserial' type is automatically converted to 'bigint'
- <a href="https://liquibase.jira.com/browse/CORE-1595">CORE-1595</a> - Schema version incompatibility is logged as INFO instead of WARN
- <a href="https://liquibase.jira.com/browse/CORE-1596">CORE-1596</a> - Liquibase 3.0.5 will not create tables in dbo schema in SQL Server
- <a href="https://liquibase.jira.com/browse/CORE-1597">CORE-1597</a> - ORA-01000: maximum open cursors exceeded
- <a href="https://liquibase.jira.com/browse/CORE-1600">CORE-1600</a> - "Collation" and "Lateral" are not escaped in Postgres (new reserved words in v9.3)
- <a href="https://liquibase.jira.com/browse/CORE-1602">CORE-1602</a> - DatabaseException in changesets that include date fields with default values
- <a href="https://liquibase.jira.com/browse/CORE-1603">CORE-1603</a> - MySQL Datatype - BIGINT, INT, MEDIUMINT, SMALLINT, TINYINT all "shaving" off sizes
- <a href="https://liquibase.jira.com/browse/CORE-1606">CORE-1606</a> - MySQL - TEXT vs. LONGTEXT for diffChangeLog presents CLOB
- <a href="https://liquibase.jira.com/browse/CORE-1607">CORE-1607</a> - MSSQL java.sql.Types.TIMESTAMP should map to DateTime
- <a href="https://liquibase.jira.com/browse/CORE-1610">CORE-1610</a> - MSSQL - NTEXT type being snapshot with MSSQL driver default size parameter.
- <a href="https://liquibase.jira.com/browse/CORE-1611">CORE-1611</a> - Avoid reverse DNS lookup with getLocalHost().getHostName();
- <a href="https://liquibase.jira.com/browse/CORE-1612">CORE-1612</a> - YAML/JSON changelogs not picking up "value" attribute on column configs
- <a href="https://liquibase.jira.com/browse/CORE-1614">CORE-1614</a> - mysql case insensitive affects databasechangelog creation
- <a href="https://liquibase.jira.com/browse/CORE-1615">CORE-1615</a> - Failed to drop default value in MSSQL
- <a href="https://liquibase.jira.com/browse/CORE-1616">CORE-1616</a> - SQLFileChange uses too many file descriptors
- <a href="https://liquibase.jira.com/browse/CORE-1619">CORE-1619</a> - MSSQL: preconditions treat object names in a case-sensitive way
- <a href="https://liquibase.jira.com/browse/CORE-1622">CORE-1622</a> - Ant not respecting diffTypes=data
- <a href="https://liquibase.jira.com/browse/CORE-1623">CORE-1623</a> - MSSQL: precondition primaryKeyExists doesn't work
- <a href="https://liquibase.jira.com/browse/CORE-1625">CORE-1625</a> - H2 Blob Type support is incorrect
- <a href="https://liquibase.jira.com/browse/CORE-1626">CORE-1626</a> - createIndex does not work for function based indexes anymore
- <a href="https://liquibase.jira.com/browse/CORE-1627">CORE-1627</a> - Option 'diffTypes' does not accept type 'indexes'
- <a href="https://liquibase.jira.com/browse/CORE-1632">CORE-1632</a> - It's impossible to setup Logger's log level with system property 'liquibase.defaultlogger.level'
- <a href="https://liquibase.jira.com/browse/CORE-1636">CORE-1636</a> - Case sensitivity issue with tableExists precondition
- <a href="https://liquibase.jira.com/browse/CORE-1640">CORE-1640</a> - foreignKeyExists precondition always failing
- <a href="https://liquibase.jira.com/browse/CORE-1641">CORE-1641</a> - Add column with foreign key throws NPE
- <a href="https://liquibase.jira.com/browse/CORE-1644">CORE-1644</a> - ValidationFailedException after update to 3.0.7
- <a href="https://liquibase.jira.com/browse/CORE-1646">CORE-1646</a> - Exception when comparing two schemas
- <a href="https://liquibase.jira.com/browse/CORE-1647">CORE-1647</a> - Mysql enum default values not quoted
- <a href="https://liquibase.jira.com/browse/CORE-1648">CORE-1648</a> - Mysql columns with colons and other special chars are not quoted
- <a href="https://liquibase.jira.com/browse/CORE-1664">CORE-1664</a> - MSSQL. "DATE" type doesn't exist for MSSQL 2005 and 2000.
- <a href="https://liquibase.jira.com/browse/CORE-1382">CORE-1382</a> - Allow to create DATABASECHANGELOG* tables in another schema
- <a href="https://liquibase.jira.com/browse/CORE-1546">CORE-1546</a> - Schema-Support on Informix
- <a href="https://liquibase.jira.com/browse/CORE-1577">CORE-1577</a> - Oracle tinyint, smallint, int being created as number(38,0)
- <a href="https://liquibase.jira.com/browse/CORE-1604">CORE-1604</a> - Minor maven pom cleanups
- <a href="https://liquibase.jira.com/browse/CORE-1635">CORE-1635</a> - Generated changelog missing unique constraints should be output before foreign keys




