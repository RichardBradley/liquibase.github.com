---
layout: post
status: publish
published: true
title: Extensibility Roadmap for 1.10
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 76
wordpress_url: http://blog.liquibase.org/?p=76
date: '2009-04-22 11:11:44 -0500'
date_gmt: '2009-04-22 16:11:44 -0500'
categories:
- Roadmap
tags: []
---


My plan for 1.10 is to focus on extensibility. I wanted to make sure I have good goals for that in mind, and that what we are planning to do will match up with those goals.
*2.   Create 3rd party community.*

a.   Ability to override what SQL is sent to the database for standard databases and refactorings (Add engine innodb to all create table statements, LoadData on MSSQL should call "set identity insert on/off", etc)

b.   Ability to add custom Change classes and use them from the changeset

c.   Ability to create a custom changelog parser as an alternative to the standard XML

d.   Better documentation of how the liquibase API can be used within an application

e.   Ensure that all liquibase APIs will remain stable for the foreseeable future

*2.   Create 3rd party community.* There are many refactorings that we do not want to support in the core because they are database specific or limited in scope (vacuum database, set identity_insert on, etc).

a.   Create a "contrib" area on the site that people can upload useful extensions that are not in the core

b.   Developer documentation on extending liquibase

c.   Better issue/feature tracker that supports extensions?

d.   Better mailing list/newsgroup setup

e.   Ensure that all documented extension points will remain stable for the foreseeable future

*3.   Make core codebase more approachable to submissions:*

a.   Better developer documentation

b.   Document migration path from 3rd party extension to core functionality

c.   Refactoring of codebase to make it easier to add new Database, Change, and Statement classes without touching as much other code

d.   Better unit test coverage to stop regression errors



Is there any particular use cases related to extensibility you want to make sure are addressed? What am I missing?


I plan to follow up with requests for in-depth comments on each of these steps as we get to them and can say exactly what we are implementing.
