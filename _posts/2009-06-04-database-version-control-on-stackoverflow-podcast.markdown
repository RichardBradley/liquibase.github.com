---
layout: post
status: publish
published: true
title: Database Version Control on StackOverFlow Podcast
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 93
wordpress_url: http://blog.liquibase.org/?p=93
date: '2009-06-04 01:15:10 -0500'
date_gmt: '2009-06-04 06:15:10 -0500'
categories:
- Training
tags: []
---


One of the questions that was discussed on a recent <a href="http://blog.stackoverflow.com/2009/05/podcast-54/">StackOverFlow podcast</a> was "<a href="http://stackoverflow.com/questions/115369/do-you-source-control-your-databases">Do you source control your database</a>".


It is, obviously, a question near to my heart and I very much agree with the answer of "YES".  I also like that "use liquibase" has a few up votes and isn't too far down the page...


It is great to see the concept getting some attention. I know that managing your database changes is just as vital as managing your code changes, yet the discussion, tool support, and interest is significantly higher for code version control than it is for database version control.  There are endless articles and podcasts on SVN vs. Git, source control best practices, and mocking of people still using CVS and VSS, but basically no mention of Liquibase vs. ActiveMigrations, database changeset best practices, or mocking of people manually managing their database changes or using <a href="http://blog.liquibase.org/2007/06/the-problem-with-database-diffs.html">database diff tools</a>.


I know Liquibase has saved my butt as many times as SVN has, and I want it to be able to help as many other developers as possible.  The first step, however, is learning that there are tools out there that will help them.
