---
layout: post
status: publish
published: true
title: 'New Standard Liquibase Plugin: Grails Database Migration'
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 212
wordpress_url: http://blog.liquibase.org/?p=212
date: '2011-01-13 02:54:09 -0600'
date_gmt: '2011-01-13 07:54:09 -0600'
categories:
- Announcement
- Grails
- Extension
tags: []
---


Now that the <a href="http://grails-plugins.github.com/grails-database-migration/">Grails Database Migration</a> plugin has had its first release, I will no longer continue maintaining a the Liquibase Grails plugin past the current 1.9.x series.


Although the Database Migration plugin is still at version 0.1, it is based on Liquibase 2.0 and will get the attention and expertise that I was not able to give my version.  For those of you using Liquibase 1.9, the old plugin will still be available and updated, but I will not release a new version of it built on Liquibase 2.0+.


The Database Migration plugin includes all the functionality in the old plugin, plus support for Groovy DSL changelogs rather than XML,  GORM, and more.
