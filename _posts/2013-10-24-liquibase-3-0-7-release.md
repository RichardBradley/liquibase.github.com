---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0.7 Release
---
# Liquibase 3.0.7 Improves Memory Usage

Lots of good bugfixes in 3.0.7, but major improvements are:

- Significantly decreased memory usage, especially with large sql files
- Improved checksum performance
- Fixed SQLite support
- Improvements to data type handling, especially in MS SqlServer


### Discovered Checksum Issue:

It was recently discovered that a change in the 3.0.5 release caused changeSets with `update` and `delete` changeSets with `where` clauses to compute a different checksum version than the 3.0.0-3.0.4 release. I decided to leave the 3.0.5 fix in because at this point, people would be affected by either leaving or reverting the change and keeping it in will preserve the bugfix. If you are upgrading from 2.x or 3.0.5+, this will not affect you. If you are upgrading from 3.0.0 through 3.0.4 and have no `<update>` or `<delete>` changeSets, this will not affect you. If you do run into this, you simply have to null out the md5sum column in databasechangelog for the affected changesets. This can be done either through an "update databasechangelog set md5sum=null" call or a more targeted "update databasechangelog set md5sum=null where id='AFFECTED_ID' and author='AFFECTED AUTHOR'". There is also a "liquibase clearCheckSums" command that runs the update query.

### Download

Download Liquibase from <a href="https://liquibase.org/download">http://liquibase.org/download</a> or from the Maven repository as it winds its way through the mirror process. Visit the <a href="https://liquibase.org/community">user forums</a> if you have any questions.


### All Closed Issues

- <a href="https://liquibase.jira.com/browse/CORE-1247">CORE-1247</a> - (Sqlite) bad syntax in create table statements with single autoincrement primary key
- <a href="https://liquibase.jira.com/browse/CORE-1275">CORE-1275</a> - LoadData insert statements do not escape column names containing an open paren
- <a href="https://liquibase.jira.com/browse/CORE-1312">CORE-1312</a> - Error when creating changelog tables
- <a href="https://liquibase.jira.com/browse/CORE-1399">CORE-1399</a> - IncludeAll Failing when running in WAR files
- <a href="https://liquibase.jira.com/browse/CORE-1440">CORE-1440</a> - Invalid Reorg table statement gets generated on DB2
- <a href="https://liquibase.jira.com/browse/CORE-1504">CORE-1504</a> - dbDoc should html-encode author names
- <a href="https://liquibase.jira.com/browse/CORE-1506">CORE-1506</a> - updateSQL generates invalid SQL for oracle
- <a href="https://liquibase.jira.com/browse/CORE-1507">CORE-1507</a> - dropAll fails with NullPointerException
- <a href="https://liquibase.jira.com/browse/CORE-1509">CORE-1509</a> - Memory improvements for large sqlFile files
- <a href="https://liquibase.jira.com/browse/CORE-1510">CORE-1510</a> - Maven plugin fails to configure parameters within property file with trailing spaces, error message misleading
- <a href="https://liquibase.jira.com/browse/CORE-1511">CORE-1511</a> - modifyDataType truncates enum values
- <a href="https://liquibase.jira.com/browse/CORE-1512">CORE-1512</a> - Insert with valueClobFile fails with unicode encoding.
- <a href="https://liquibase.jira.com/browse/CORE-1515">CORE-1515</a> - Liquibase MSSQL: Snapshot incorrectly injecting size for some datatypes
- <a href="https://liquibase.jira.com/browse/CORE-1516">CORE-1516</a> - Liquibase MSSQL: Snapshot recording incorrect size for VARBINARY
- <a href="https://liquibase.jira.com/browse/CORE-1517">CORE-1517</a> - Liquibase MSSQL: Autoincrement property of decimal datatype not supported
- <a href="https://liquibase.jira.com/browse/CORE-1518">CORE-1518</a> - Liquibase MSSQL: Incorrect datatypes captured in the snapshot
- <a href="https://liquibase.jira.com/browse/CORE-1520">CORE-1520</a> - Liquibase Snapshot: Default datetime is wrong
- <a href="https://liquibase.jira.com/browse/CORE-1521">CORE-1521</a> - When generateChangeLog is run, objects do not always come back in a consistent order
- <a href="https://liquibase.jira.com/browse/CORE-1522">CORE-1522</a> - PreparedStatement.setCharacterStream() not supported by Postgres JDBC driver.
- <a href="https://liquibase.jira.com/browse/CORE-1524">CORE-1524</a> - Ant diff command running diffChangeLog
- <a href="https://liquibase.jira.com/browse/CORE-1525">CORE-1525</a> - Liquibase MSSQL: Snapshot not capturing alter statements that add default values
- <a href="https://liquibase.jira.com/browse/CORE-1526">CORE-1526</a> - Unicode string escaping in MSSQL
- <a href="https://liquibase.jira.com/browse/CORE-1530">CORE-1530</a> - Column called VERSION is quoted in PostgreSQL
- <a href="https://liquibase.jira.com/browse/CORE-1531">CORE-1531</a> - includeAll with relativeToChangeLogFile fails under certain conditions
- <a href="https://liquibase.jira.com/browse/CORE-1532">CORE-1532</a> - NPE in ChangedIndexChangeGenerator
- <a href="https://liquibase.jira.com/browse/CORE-1534">CORE-1534</a> - Single quotes in liquibase.bat causing issues
- <a href="https://liquibase.jira.com/browse/CORE-1519">CORE-1519</a> - Allow relative file paths for valueClobFile and valueBlobFile inserts/updates.
- <a href="https://liquibase.jira.com/browse/CORE-1533">CORE-1533</a> - Performance improvements in dropAll
