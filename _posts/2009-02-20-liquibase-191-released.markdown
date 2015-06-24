---
layout: post
status: publish
published: true
title: Liquibase 1.9.1 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 63
wordpress_url: http://blog.liquibase.org/?p=63
date: '2009-02-20 13:54:22 -0600'
date_gmt: '2009-02-20 18:54:22 -0600'
categories:
- Announcement
tags: []
---


Liquibase 1.9.1 has been released which addresses several bugs. Most bugs were relatively minor, but it is recommended you upgrade.


Some of the bugs fixed include:


- H2 schema capitalization issues
- Improved "local database" detection
- Improved database snapshot generation for Oracle and MSSQL
- Bug fixes in Sybase AS Anywhere support
- Handle urls with an authority component when using includeAll
- Fixed bug with "runInTransaction" attribute
- Support for Grails 1.1-SNAPSHOT
- Escape hsql tables/columns that are keywords



As usual, visit <a href="http://www.liquibase.org/download">http://www.liquibase.org/download</a> to download the update.

