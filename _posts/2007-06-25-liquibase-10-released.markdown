---
layout: post
status: publish
published: true
title: Liquibase 1.0 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 17
wordpress_url: http://nvoxland.wordpress.com/2007/06/25/liquibase-10-released/
date: '2007-06-25 14:37:00 -0500'
date_gmt: '2007-06-25 14:37:00 -0500'
categories:
- Announcement
tags: []
---
The Liquibase team is proud to announce version 1.0.  <a href="http://www.liquibase.org/">Liquibase</a> is an open source (LGPL) java-based tool for managing database changes and refactorings. It has been under active development for over a year and supports many features including:


- Change tracking format that supports multiple developers and code branches
- Thirty built-in refactorings including "Merge Columns" and "Add Lookup Table"
- Can execute updates directly, or save SQL for review by DBAs
- Can roll back databases to earlier versions based on dates, tags, or number of changes
- Database independent. Currently supports MySQL, PostgreSQL, Oracle, and MSSQL with additional databases planned for version 1.1.
- Can be executed as an Ant task, a Maven Plug-in, as a Servlet Listener, or though a command-line program
- Changes can be tagged with "contexts" so not all changes need to be applied to all environments
- Uses a distributed locking system to protect against machines upgrading the same database at the same time
- Extensive documentation including a quick-start guide and manual

As a database change tracking tool, Liquibase is useful for any project with a database, but is especially useful in an agile environment due to the large number of changes that are generated throughout the project's lifecycle.

There are many post-1.0 features planned, including support for additional databases (DB2, Sybase, Derby and HSQL are already implemented in the 1.1 branch), a database-refactoring IDE plug-ins, additional refactorings, a database diff tool, and more.

We would like to thank everyone who helped us get to the point we are at today.

