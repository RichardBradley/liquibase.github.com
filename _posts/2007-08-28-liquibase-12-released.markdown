---
layout: post
status: publish
published: true
title: Liquibase 1.2 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 26
wordpress_url: http://nvoxland.wordpress.com/2007/08/28/liquibase-12-released/
date: '2007-08-28 19:49:00 -0500'
date_gmt: '2007-08-28 19:49:00 -0500'
categories:
- Announcement
tags: []
---
Liquibase 1.2 has been released.  Major features include:



- Support for H2 database
- Support for InterSystems Cache database
- Support for `<sqlfile>` change
- Improved error messages
- `<sql>` tag can contain a `<comment>` tag
- Change log file references can be absolute
- SQL in `<sql>` tag can be ; or 'go' delimited
- New clearCheckSums command in command line migrator

- Support for version 0.5 of the <a href="http://www.liquibase.org/refactoring_ide/index.html">Liquibase IDE and Eclipse Plugin</a>

Many bugs have been fixed as well, including:



- Sybase support fixes
- Handle --defaultsFile correctly
- Handle command line parameters correctly on Windows systems
- Other bug fixes


Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage of newer change log features, change your XSD declaration to:

    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.2"
         xsi="http://www.w3.org/2001/XMLSchema-instance"
         schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.2
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.2.xsd">

<a href="http://www.liquibase.org/download.html">Download Liquibase 1.2</a>

