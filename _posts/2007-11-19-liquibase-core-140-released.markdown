---
layout: post
status: publish
published: true
title: Liquibase Core 1.4.0 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 33
wordpress_url: http://nvoxland.wordpress.com/2007/11/19/liquibase-core-140-released/
date: '2007-11-19 20:24:00 -0600'
date_gmt: '2007-11-19 20:24:00 -0600'
categories:
- Announcement
tags: []
---
Liquibase 1.4.0 has been released. Major features include:

- IntelliJ Plug-in Support
- Added support for specifying schemas in change log
- MaxDB/SAPDB Support
- Refactored Code
- Can specify data types as `java.sql.Types.*`
- Support for composite foreign keys
- Improved Maven support
- Bug Fixes

Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage of newer change log features, change your XSD declaration to:

    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.4"
        xsi="http://www.w3.org/2001/XMLSchema-instance"
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.4
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.4.xsd">

Download Liquibase 1.4 from: <a href="http://www.liquibase.org/download.html">http://www.liquibase.org/download.html</a>

