---
layout: post
status: publish
published: true
title: Liquibase 3.0.6 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 346
wordpress_url: http://blog.liquibase.org/?p=346
date: '2013-10-09 10:01:06 -0500'
date_gmt: '2013-10-09 15:01:06 -0500'
categories:
- Announcement
tags: []
---


I'm happy to announce Liquibase 3.0.6 has been released. While the previous release focused on performance, this release was focused on catching up with pull requests and resolving some of the higher value bugs.


Some highlights and important notes:


- *IMPORTANT:* CDI support has been pulled into a separate liquibase-cdi module. If you are using the CDI integration you need to download the additional jar from <a href="http://search.maven.org/#search%7Cga%7C1%7Cliquibase-cdi">http://search.maven.org/#search%7Cga%7C1%7Cliquibase-cdi</a>
- *IMPORTANT:* The DatabaseChangeLog table no longer contains a primary key which allows us to increase the column sizes without running into index limitations. Author, Id, and Path can all be 255 characters now. This just applies to new changelog tables, though. Liquibase will not adjust an existing changelog table to increase the size.
- New <a href="https://liquibase.jira.com/browse/CORE-1472">liquibase.integration.spring.MultiTenantSpringLiquibase integration</a> that runs Liquibase against all database instances in a JNDI subtree
- Command line supports prompting for command line variables by using PROMPT as a value in the passed arguments. For example "liquibase --username=test --password=PROMPT"
- Added support for Sybase IQ
- Fixed Firebird support
- Fixed include relativeToChangeLog
- Improvements to Fixes in case (in)sensitive comparison logic
- Corrections in the Oracle data type snapshot process
- Better handling of Mysql keywords



Download Liquibase from <a href="http://liquibase.org/download">http://liquibase.org/download</a> or from the Maven repository as it winds its way through the mirror process. Visit the <a href="http://liquibase.org/community">user forums</a> if you have any questions.



*All Closed Issues:*


- <a href="https://liquibase.jira.com/browse/CORE-1088">CORE-1088</a> - Derby fails to create databasechangelog tables
- <a href="https://liquibase.jira.com/browse/CORE-1093">CORE-1093</a> - generateChangeLog fails on MSSQL with coalation CS on views named in lowerCase
- <a href="https://liquibase.jira.com/browse/CORE-1158">CORE-1158</a> - Escaping of reserved keywords in HSQLDB
- <a href="https://liquibase.jira.com/browse/CORE-1170">CORE-1170</a> - loadUpdateData sometimes needs / and sometimes not
- <a href="https://liquibase.jira.com/browse/CORE-1177">CORE-1177</a> - Failure to write a change set to the DATABASECHANGELOG table still applies the change set
- <a href="https://liquibase.jira.com/browse/CORE-1325">CORE-1325</a> - CDI injection does not work with openwebbeans
- <a href="https://liquibase.jira.com/browse/CORE-1343">CORE-1343</a> - Include SQL file with relativeToChangelogFile doesn't work
- <a href="https://liquibase.jira.com/browse/CORE-1378">CORE-1378</a> - Deploy fails on Glassfish
- <a href="https://liquibase.jira.com/browse/CORE-1409">CORE-1409</a> - Package CDI support as a separate module
- <a href="https://liquibase.jira.com/browse/CORE-1436">CORE-1436</a> - loadUpdateData does not escape apostrophes
- <a href="https://liquibase.jira.com/browse/CORE-1437">CORE-1437</a> - Diff is case-sensitive on column names
- <a href="https://liquibase.jira.com/browse/CORE-1440">CORE-1440</a> - Reorg Table gets called before table is created on DB2
- <a href="https://liquibase.jira.com/browse/CORE-1441">CORE-1441</a> - Drop table with cascade does not work on MS SQL Server
- <a href="https://liquibase.jira.com/browse/CORE-1443">CORE-1443</a> - Documentation for liquibase maven logging configuration needs update
- <a href="https://liquibase.jira.com/browse/CORE-1445">CORE-1445</a> - Mysql Reserved Words Not quoted
- <a href="https://liquibase.jira.com/browse/CORE-1449">CORE-1449</a> - Liquibase throws null pointer if included file does not exist
- <a href="https://liquibase.jira.com/browse/CORE-1464">CORE-1464</a> - SQL changelog are not correctly handled (NPE)
- <a href="https://liquibase.jira.com/browse/CORE-1465">CORE-1465</a> - GetViewDefinitionGeneratorMSSQL generates UPPER case view name
- <a href="https://liquibase.jira.com/browse/CORE-1469">CORE-1469</a> - GenerateChangelog not working on Firebird
- <a href="https://liquibase.jira.com/browse/CORE-1470">CORE-1470</a> - Use NUMERIC instead of NUMBER for Sybase ASE
- <a href="https://liquibase.jira.com/browse/CORE-1478">CORE-1478</a> - MySQL keywords 'key' not quoted as a column name
- <a href="https://liquibase.jira.com/browse/CORE-1479">CORE-1479</a> - MySQL 5.5.27 fails to create DATABASECHANGELOG table (Liquibase support fully broken)
- <a href="https://liquibase.jira.com/browse/CORE-1480">CORE-1480</a> - ChangedPrimaryKeyChangeGenerator missing name
- <a href="https://liquibase.jira.com/browse/CORE-1481">CORE-1481</a> - Schema.toString NPE
- <a href="https://liquibase.jira.com/browse/CORE-1482">CORE-1482</a> - Update fails with "Table DATABASECHANGELOGLOCK already exists"
- <a href="https://liquibase.jira.com/browse/CORE-1483">CORE-1483</a> - Boolean values of "false" being incorrectly handled
- <a href="https://liquibase.jira.com/browse/CORE-1488">CORE-1488</a> - Encoding issue with UpdateSQL
- <a href="https://liquibase.jira.com/browse/CORE-1490">CORE-1490</a> - Oracle 10g: Changelog generation changes type NUMBER(\*,0) to NUMBER(22)
- <a href="https://liquibase.jira.com/browse/CORE-1491">CORE-1491</a> - Oracle 10g: changelog generation converts VARCHAR2(n CHAR) to VARCHAR2(n BYTE)
- <a href="https://liquibase.jira.com/browse/CORE-1497">CORE-1497</a> - SQL SERVER: sysdiagram table is captured during generateChangeLog if system diagrams are enabled.
- <a href="https://liquibase.jira.com/browse/CORE-1499">CORE-1499</a> - null appearing in liquibase maven output
- <a href="https://liquibase.jira.com/browse/CORE-1500">CORE-1500</a> - Snapshots do not order objects alphabetically
- <a href="https://liquibase.jira.com/browse/CORE-1501">CORE-1501</a> - Incorrect SQL generated for default column value in PostgreSQL for text columns
- <a href="https://liquibase.jira.com/browse/CORE-602">CORE-602</a> - Increase the default size of the FILENAME column
- <a href="https://liquibase.jira.com/browse/CORE-1475">CORE-1475</a> - Support entering password(s) interactively on the command line
- <a href="https://liquibase.jira.com/browse/CORE-1477">CORE-1477</a> - Support overriding LockService changeLogWaitTime
- <a href="https://liquibase.jira.com/browse/CORE-1485">CORE-1485</a> - Extract CDI support into a separate module
- <a href="https://liquibase.jira.com/browse/CORE-1492">CORE-1492</a> - DatabaseChangelog Description useless
- <a href="https://liquibase.jira.com/browse/CORE-1502">CORE-1502</a> - CLONE - UpdateSQL needs to append a "/" to the end of createProcedure for Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1448">CORE-1448</a> - Throw a more helpful error message and continue on if snakeyaml isn't in the classpath
- <a href="https://liquibase.jira.com/browse/CORE-1471">CORE-1471</a> - Add support for Sybase IQ
- <a href="https://liquibase.jira.com/browse/CORE-1472">CORE-1472</a> - Support multi-tenant spring applications




