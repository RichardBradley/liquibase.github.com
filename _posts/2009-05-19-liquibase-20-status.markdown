---
layout: post
status: publish
published: true
title: Liquibase 2.0 Status
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 90
wordpress_url: http://blog.liquibase.org/2009/05/liquibase-20-status.html
date: '2009-05-19 20:50:37 -0500'
date_gmt: '2009-05-20 01:50:37 -0500'
categories:
- Roadmap
tags: []
---


I have been working hard on Liquibase 2.0 lately, and it feels very, very good to be updating and cleaning up the codebase.  I am putting the SOLID principals to work, increasing test coverage, and building in integration hooks.


So you do not worry, The changelog XML format will stay the same and be completely backwards compatible with the 1.x series so the vast majority of users will see little to no changes. It is only the underlying java classes that will change significantly.  If you are using any liquibase classes directly, this will be a large change for you, but the number of people using the API is small enough that it is worth simplifying and standardizing now, before really opening up the library for extension like the plan is.  We will provide a migration guide for anyone needing it.


Curently I feel I am about 1/2 done with the main code update, which means that in about 1 month we should have a beta 1 release. The plan is to have a series of beta releases before the final release.


With beta 1, I am hoping to open up a plug-in contest.  There will be many new integration points around modifying what SQL gets ran for a change, new database support, new changes, new changelog parsers, and more.  There are many tools and enhancements that would be very helpful to some, but not general purpose enough to make it into the core application that would make great plugins, so get thinking.  Despite having no budget, I would like to kick off the extensibility support with a bang, hopefully I can find a company willing to throw in a prize for some PR.  Wost case, the grand prize will be a copy of mysql community server and sqlserver desktop edition :)


Despite not being finished with the refactoring, feel free to review the code and give me any feedback (or patches) you have.  There are many use cases i have heard over the years that I plan on supporting, but there the best ones are often the ones I never thought of.
