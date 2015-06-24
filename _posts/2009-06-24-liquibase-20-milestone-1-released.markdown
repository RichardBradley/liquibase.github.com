---
layout: post
status: publish
published: true
title: Liquibase 2.0 Milestone 1 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 105
wordpress_url: http://blog.liquibase.org/?p=105
date: '2009-06-24 14:07:58 -0500'
date_gmt: '2009-06-24 19:07:58 -0500'
categories:
- Announcement
tags: []
---


The first public release of Liquibase 2.0 is now available. *This release is a milestone release, and therefore not for general consumption, it is not even at beta stage yet. *


The focus of milestone 1 was a major refactoring and standardization of the external-facing APIs to give 3rd party extension contributors a stable platform to build on. We have not yet begun to address bugs found in 1.9 or implement new functionality. Additionally, the checkum generation logic has changed and is currently incompatible with checksums generated in liqubase 1.x. Liquibase 2.0 final will handle upgrades graceful.


Because it is just a milestone release, the download packages are not on sourceforge, but are linked from the <a href="http://www.liquibase.org/download">download page</a>.


Please <a href="http://www.liquibase.org/community">let us know</a> of any feedback, questions, or bugs you find.  Although we have focused on stabilizing the API, parts may change during the milestone phase based on feedback from the community.


The roadmap for 2.0 is to have several milestone releases, followed by a beta period. 2.0 final is scheduled for a September release, although that may change.


*Note: Don't forget the <a href="http://blog.liquibase.org/2009/06/liquibase-online-meetup-thurs-june-25-2009-1200-pm-us-central-time.html">Liquibase online meetup tomorrow</a>!*
