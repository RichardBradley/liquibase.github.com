---
layout: post
status: publish
published: true
title: Liquibase 3.0.2 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 319
wordpress_url: http://blog.liquibase.org/?p=319
date: '2013-07-12 17:13:41 -0500'
date_gmt: '2013-07-12 22:13:41 -0500'
categories:
- Announcement
tags: []
---


Liquibase 3.0.2 has been officially released. It is a purely bugfix release. The major issues fixed are:


- Indexes and foreign keys were not being correctly handled in the snapshot/diff/generateChangeLog process
- Exporting data in generateChangeLog did not work



The full list of resolved issues:



- <a href="https://liquibase.jira.com/browse/CORE-1301">CORE-1301</a> - Oracle TIMESTAMPS not exported correctly
- <a href="https://liquibase.jira.com/browse/CORE-1301">CORE-1301</a> - defaultschemaName not used
- <a href="https://liquibase.jira.com/browse/CORE-1315">CORE-1315</a> - Database Objects do not get dropped on DB2
- <a href="https://liquibase.jira.com/browse/CORE-1317">CORE-1317</a> - Not all FK Constraints get dropped on Oracle
- <a href="https://liquibase.jira.com/browse/CORE-1318">CORE-1318</a> - Not all FK Constraints get dropped on SQL Server
- <a href="https://liquibase.jira.com/browse/CORE-1328">CORE-1328</a> - includeAll trying to process invalid file types, should only process valid change log types
- <a href="https://liquibase.jira.com/browse/CORE-1331">CORE-1331</a> - If logicalFilePath attribute is set on databaseChangeLog, I am unable to use relativeToChangelogFile="true" on
- <a href="https://liquibase.jira.com/browse/CORE-1332">CORE-1332</a> - includeAll of changelog files throws duplicate identifiers error
- <a href="https://liquibase.jira.com/browse/CORE-1335">CORE-1335</a> - Data export support broken in 3.0
- <a href="https://liquibase.jira.com/browse/CORE-1336">CORE-1336</a> - AutoIncrement not working with some types
- <a href="https://liquibase.jira.com/browse/CORE-1337">CORE-1337</a> - Problem with changeset defined as runAlways="true"
- <a href="https://liquibase.jira.com/browse/CORE-1339">CORE-1339</a> - NPE on update if default ServiceLocator.packagesToScan is used
- <a href="https://liquibase.jira.com/browse/CORE-1340">CORE-1340</a> - indexExists Changesets throwing PreconditionErrorException instead of PreconditionFailedException
- <a href="https://liquibase.jira.com/browse/CORE-1341">CORE-1341</a> - foreignKeyConstraintExists precondition broken
- <a href="https://liquibase.jira.com/browse/CORE-1344">CORE-1344</a> - addForeignKeyConstraint rejects referencesUniqueColumn
- <a href="https://liquibase.jira.com/browse/CORE-1347">CORE-1347</a> - dropAll function work incorrectly when table has 2 foreign keys
- <a href="https://liquibase.jira.com/browse/CORE-628">CORE-628</a> - Specify the output encoding that liquibase should use to output data in Maven



If you were watching closely, you will notice that I forgot to announce 3.0.1 despite the fact that it was released on June 25th. That release included the following bugfixes compared to 3.0.0:



- <a href="https://liquibase.jira.com/browse/CORE-898">CORE-898</a> - Custom precondition xsd failing
- <a href="https://liquibase.jira.com/browse/CORE-1171">CORE-1171</a> - Maven plugin displaying password in plain text
- <a href="https://liquibase.jira.com/browse/CORE-1320">CORE-1320</a> - Cannot include YAML file
- <a href="https://liquibase.jira.com/browse/CORE-1323">CORE-1323</a> - Conversion from char to SMALLINT is unsupported
- <a href="https://liquibase.jira.com/browse/CORE-1324">CORE-1324</a> - Formatted SQL does not support contexts such as "some-context" or "some/context"



As always, you can download from <a href="http://liquibase.org/download">http://liquibase.org/download</a> and the new version should be working its way through the maven repository system. If you have questions or comments you can visit the forums at <a href="http://forum.liquibase.org/">http://forum.liquibase.org</a>.




