---
layout: post
status: publish
published: true
title: Liquibase 3.1.1 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 396
wordpress_url: http://blog.liquibase.org/?p=396
date: '2014-01-16 16:21:06 -0600'
date_gmt: '2014-01-16 21:21:06 -0600'
categories:
- Announcement
tags: []
---


Liquibase 3.1.1 has been released with a few bug fixes.
The most important fixes reverts how `<createProcedure>` checksums are computed so they are compatible with 3.0 and fix the new `<rowCount>` and `<tableIsEmpty>` preconditions.


The newest version can be download from <a href="http://liquibase.org/download">liquibase.org/download</a>

### <a href="https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&amp;version=11460">Change log</a>

- <a href="https://liquibase.jira.com/browse/CORE-1704">CORE-1704</a> - Checksum errors for changeSets with createProcedure in 3.1.0 vs 3.0.x
- <a href="https://liquibase.jira.com/browse/CORE-1707">CORE-1707</a> - TableRowCountGenerator shouldn't pass tableName as catalogName
- <a href="https://liquibase.jira.com/browse/CORE-1710">CORE-1710</a> - Oracle: NUMBER data type size specification is deployed with a precision specifier even though precision isn't specified in the change log
- <a href="https://liquibase.jira.com/browse/CORE-1711">CORE-1711</a> - rowCount doesn't work if only the tableName is given
- <a href="https://liquibase.jira.com/browse/CORE-1713">CORE-1713</a> - liquibase.precondition.core.ForeignKeyExistsPrecondition exception
- <a href="https://liquibase.jira.com/browse/CORE-1715">CORE-1715</a> - 2 -> 3.1 migration, 3.1 errors if there are single quotes in comments
- <a href="https://liquibase.jira.com/browse/CORE-1709">CORE-1709</a> - generateChangeLog returns tables created by Materialized Views as standard tables





