---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0.3 Released
---


Liquibase 3.0.3 has been officially released. As always, you can download from <a href="http://liquibase.org/download">http://liquibase.org/download</a> and the new version should be working its way through the maven repository system. If you have questions or comments you can visit the forums at <a href="http://forum.liquibase.org/">http://forum.liquibase.org</a>.


The 3.0.3 release is primarily a bug fix release, major categories of bugs fixed include:


- updateSQL output goes to STDOUT rather than STDERR. *NOTE: This is what people expect, but if you are working around this bug you will have to update your scripts*
- Fixes around data type parsing and handling
- Issues with the diff/generateChangeLog logic
- Informix-specific bugfixes



There is a new feature in 3.0.3 to control whether schema names are included in the SQL. This is particularly helpful in updateSQL mode to create schema-independent scripts. The new flag is called "outputDefaultSchema" and "outputDefaultCatalog"



Full Release Notes: <a href="https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&amp;version=10660">https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&amp;version=10660</a>


- <a href="https://liquibase.jira.com/browse/CORE-844">CORE-844</a> - Integer with range limitations handled incorrectly on Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1313">CORE-1313</a> - Unique constraint name is ignored when adding a column
- <a href="https://liquibase.jira.com/browse/CORE-1316">CORE-1316</a> - Column Type COMPUTED in loadData is not implemented correctly (shoud pass a DB Function instead of String to DB).
- <a href="https://liquibase.jira.com/browse/CORE-1327">CORE-1327</a> - renameColumn and renameTable with Sybase
- <a href="https://liquibase.jira.com/browse/CORE-1329">CORE-1329</a> - GenerateChangeLog on MSSQL exports a SMALLINT(5) - smallint does not allow precision
- <a href="https://liquibase.jira.com/browse/CORE-1336">CORE-1336</a> - AutoIncrement not working with some types
- <a href="https://liquibase.jira.com/browse/CORE-1351">CORE-1351</a> - PostgreSql 9 doesnt have datetime data type
- <a href="https://liquibase.jira.com/browse/CORE-1353">CORE-1353</a> - AutoIncrement not working for numeric types
- <a href="https://liquibase.jira.com/browse/CORE-1354">CORE-1354</a> - Sequences get dropped too early
- <a href="https://liquibase.jira.com/browse/CORE-1356">CORE-1356</a> - Unnecessary size specifications on MEDIUMTEXT, TINYTEXT, MEDIUMBLOB, TINYBLOB from generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1358">CORE-1358</a> - Liquibase 3.0.2 writes '3.0.0-SNP' (Snapshot) to 'LIQUIBASE' column instead of '3.0.2'
- <a href="https://liquibase.jira.com/browse/CORE-1362">CORE-1362</a> - Informix fails when schema is not equal catalog
- <a href="https://liquibase.jira.com/browse/CORE-1363">CORE-1363</a> - ForeignKey NPE during dbDoc generation
- <a href="https://liquibase.jira.com/browse/CORE-1364">CORE-1364</a> - SQL Server incorrect INFORMATION_SCHEMA table case in native query
- <a href="https://liquibase.jira.com/browse/CORE-1366">CORE-1366</a> - Oracle database dbDoc generation performance issues
- <a href="https://liquibase.jira.com/browse/CORE-1367">CORE-1367</a> - updateSQL generates an empty file using standard output in 3 version
- <a href="https://liquibase.jira.com/browse/CORE-1369">CORE-1369</a> - Whitespace in author in SQL formatted changelog causes that migration to be silently skipped
- <a href="https://liquibase.jira.com/browse/CORE-1370">CORE-1370</a> - Oracle doesnt have DATETIME datatype
- <a href="https://liquibase.jira.com/browse/CORE-1371">CORE-1371</a> - MySQL syntax error is thrown if schema name contains hyphens
- <a href="https://liquibase.jira.com/browse/CORE-1372">CORE-1372</a> - Version Command Line Argument Incorrect
- <a href="https://liquibase.jira.com/browse/CORE-1373">CORE-1373</a> - dropAll attempts to drop objects in other schemas under Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1375">CORE-1375</a> - "group" is not included as a reserved word
- <a href="https://liquibase.jira.com/browse/CORE-1377">CORE-1377</a> - liquibase version says 3.0.0-SNP
- <a href="https://liquibase.jira.com/browse/CORE-1380">CORE-1380</a> - ^M present in liquibase unix running file (from jar on maven repo)
- <a href="https://liquibase.jira.com/browse/CORE-1381">CORE-1381</a> - DropAll: Not working with MsSql
- <a href="https://liquibase.jira.com/browse/CORE-1383">CORE-1383</a> - Error attempting to re-create databasechangeloglock on second liquibase run if running in Oracle under SYSTEM user
- <a href="https://liquibase.jira.com/browse/CORE-1387">CORE-1387</a> - dropAll fails with oracle since version 3.0.2
- <a href="https://liquibase.jira.com/browse/CORE-1388">CORE-1388</a> - MSSQLServer: 'REAL' dataype is returned with unnecessary size modifier during generateChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1389">CORE-1389</a> - AddLookupTable fails when using QUOTE_ALL_OBJECTS
- <a href="https://liquibase.jira.com/browse/CORE-1394">CORE-1394</a> - additionalInformation lost in DataTypeFactory.fromDescription()
- <a href="https://liquibase.jira.com/browse/CORE-1395">CORE-1395</a> - Bug in MSSQLDatabase.getViewDefinition()
- <a href="https://liquibase.jira.com/browse/CORE-1396">CORE-1396</a> - Liquibase is loosing indices on foreign key columns
- <a href="https://liquibase.jira.com/browse/CORE-1397">CORE-1397</a> - Informix DB: Size of VARCHAR more than 255
- <a href="https://liquibase.jira.com/browse/CORE-1398">CORE-1398</a> - Missing or unexpected unique constraint not found on Postgres
- <a href="https://liquibase.jira.com/browse/CORE-1402">CORE-1402</a> - Custom preconditions not passing XML validation
- <a href="https://liquibase.jira.com/browse/CORE-1403">CORE-1403</a> - Default schema not correct when using `<tableExists>`
- <a href="https://liquibase.jira.com/browse/CORE-1405">CORE-1405</a> - SpringLiquibase not closing connection if rollback exception
- <a href="https://liquibase.jira.com/browse/CORE-1406">CORE-1406</a> - MySQL loadUpdateData using literal values for update
- <a href="https://liquibase.jira.com/browse/CORE-1408">CORE-1408</a> - NVarcharType on Derby Fails
- <a href="https://liquibase.jira.com/browse/CORE-1413">CORE-1413</a> - NPE in changeSetExecuted precondition in changelog-level preconditions
- <a href="https://liquibase.jira.com/browse/CORE-1414">CORE-1414</a> - Improve error handling in empty databasechangeloglock tables
- <a href="https://liquibase.jira.com/browse/CORE-1417">CORE-1417</a> - generateChangeLog failed
- <a href="https://liquibase.jira.com/browse/CORE-1418">CORE-1418</a> - Foreign Key changes not detected in snapshot process
- <a href="https://liquibase.jira.com/browse/CORE-1241">CORE-1241</a> - Remove schema name from SQL generated when running updateSQL
- <a href="https://liquibase.jira.com/browse/CORE-1412">CORE-1412</a> - UpdateSQL should write to stdout not stderr




