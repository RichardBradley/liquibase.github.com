---
layout: post
status: publish
published: true
title: Liquibase 3.0.4 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 329
wordpress_url: http://blog.liquibase.org/?p=329
date: '2013-09-06 14:24:33 -0500'
date_gmt: '2013-09-06 19:24:33 -0500'
categories:
- Announcement
tags: []
---


There was a null pointer issue that was tripping up enough people with 3.0.3 that I created a small 3.0.4 release to address the issue.


The issues fixed are:


- <a href="https://liquibase.jira.com/browse/CORE-1423">CORE-1423</a> - NPE in ForeignKeyComparator
- <a href="https://liquibase.jira.com/browse/CORE-548">CORE-548</a> - GenerateChangeLog generates invalid XML/SQL for mysql tables with autoincrement and compound PKs



with CORE-1423 being the one most people were running into.



You can download 3.0.4 from <a href="http://liquibase.org/download">http://liquibase.org/download</a> and through the maven repository system once it gets mirrored through.
