---
layout: post
status: publish
published: true
title: A Note on Version Numbering
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 61
wordpress_url: http://blog.liquibase.org/?p=61
date: '2009-01-12 15:11:01 -0600'
date_gmt: '2009-01-12 20:11:01 -0600'
categories:
- Uncategorized
tags: []
---


There are times when I have seen projects with a version 1.9 that means "the last 1.x release before 2.0". In our case, "1.9" simply means "the release after 1.8"


After a bit of discussion on the liquibase-user mailing list, we decided that we didn't want to go to a 2.0 release at this point because there has not been any major changes and we have kept backwords compatibility.


Therefore, we are going to continue our current 1.x numbering strategy and continue to provide evolutionary improvements for the foreseeable future. 1.10, 1.11 etc. do look a bit confusing and like 1.1.0, 1.1.1 etc, but I think most Liquibase users will be smart enough to figure it out :)
