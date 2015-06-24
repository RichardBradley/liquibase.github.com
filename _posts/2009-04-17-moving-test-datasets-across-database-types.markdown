---
layout: post
status: publish
published: true
title: Moving Test Datasets Across Database Types
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 72
wordpress_url: http://blog.liquibase.org/?p=72
date: '2009-04-17 01:27:47 -0500'
date_gmt: '2009-04-17 06:27:47 -0500'
categories:
- Unit Testing
tags: []
---


While the main goal of <a href="http://www.liquibase.org">Liquibase </a>is database change tracking, I found a very different use for it lately: moving test datasets.


I have an application that has been traditionally developed on MySQL, but am in the process adding MS SQL support as well. The application uses Hibernate so it *should* work in theory, but does it *really* work on SqlServer?


Since I have unit tests already set up that actually execute the data access layer against the database, I can run them against MS SQL instead, but the tests require data (and often specific data).


I wasn't looking forward to duplicating my test data management effort, and so I started looking for a way to move the data from MySQL to SqlServer. I tried mysqldump (even with the "mssql compatability mode") but it was still too MySQL specific. There are MS SQL migration tools, but I wanted it to be automated and be flexible enough to move the app to Oracle, DB2, etc. in the future. In particular, I was also wondering if running the DAO tests against H2 would be faster, but that is another blog post...


What I ended up doing was using Liquibase's <a href="http://www.liquibase.org/manual/generating_changelogs">generateChangeLog</a> functionality to output the database schema and data. The steps I run are:

1. Call generateChangeLog telling liquibase to export data as well. I used the <a href="http://www.liquibase.org/api/index.html">Liquibase API</a> to integrate it into my script easier.
1. Load the changelog into a DOM and update any mysql specific or SqlServer unsupported functionality using xpath. For example, convert BIGINT(20) to BIGINT.
1. Run the changeLog against the target database. This may take a bit of trial and error to find all your particular database incompatabilities.
1. Delete all rows from the target database's databasechangelog table
1. Select all rows from the base database's databasechangelog table and insert the values into the new database's databasechangelog table. This will make sure that the database history liquibase sees in future attempts at updating is correct.

Now, I can continue to manage my dataset in MySQL like I always have but still magically have my test database and dataset available for testing against using MS SQL.



While I would not recommend using this for a production backup/restore scenario (the Liquibase diff tool does not export everything), it has been working great for managing and migrating the test dataset.
