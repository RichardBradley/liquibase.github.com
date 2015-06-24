---
layout: post
status: publish
published: true
title: Liquibase 2.0 Officially Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 220
wordpress_url: http://blog.liquibase.org/?p=220
date: '2011-01-27 13:55:34 -0600'
date_gmt: '2011-01-27 18:55:34 -0600'
categories:
- Announcement
tags: []
---


At long last, Liquibase 2.0 has been released.  For those of you watching closely, you know that 2.0.0 was actually released December 19th, but I wanted to give it a couple weeks (and a 2.0.1 release) before making the official announcement.  Liquibase 2.0 has been a long time coming, but I am very proud of it.  The most recent version (now 2.0.1) is available from the <a href="http://liquibase.org/download">download</a> page along with the <a href="http://liquibase.org/v2_upgrade">v2.0 upgrade guide</a>.


With version 1.9, Liquibase had hit the point where it had a growing user base and 90% of the functionality that developers needed to manage their databases.  As I was looking at what to add for version 1.10, it was becoming clear that everyone wants a different (and often contradicting) final 10%.  One team wants CLOBS to match to a UTF-8 compliant datatype, another wants them to be full text indexable.  One team wants logging using slf4j, another wants log4j.  And don't forget the biggest war of all:  XML changesets vs. the XML-haters.  Add to this a tool with complex (and sometimes confusing) functionality and there were two obvious requirements for the future of Liquibase: Extensibility and Community.


*Extensibility*


Feature-wise, the biggest change with Liquibase 2.0 is the new extension system.  The goal of the Liquibase extension system is to allow end users to modify and mold Liquibase to suite their particular development needs.  While 1.9 and before included features like custom change classes, `<modifySql>` and changelog parameters, it wasn't a true plugin system.  With 2.0, we introduced the ability to create custom java classes that will replace or augment virtually all areas of Liquibase's execution including changelog parsing, database support, available refactorings, generated SQL, logging and more.


Now, if you don't like that the generated CREATE TABLE SQL does not include "ENGINE=INNODB", you can create a subclass of CreateTableGenerator to modify it.  If you would rather use a different logger you can create a subclass of AbstractLogger.  If you don't like XML, you can write a new changelog parser (there are now groovy, scala, and clojure versions underway).


The general pattern for all extensions is to create a subclass for an existing Liquibase class or interface and override the *public void getPriority()* method.  At runtime, Liquibase will find all classes that implement a given class/interface and choose the one with the highest value from getPriority().  Registering your extension only requires you to put your class in a sub-package of liquibase.ext.


*Community*


Although there is often conflicting requirements behind extensions, there is also many groups that need the same problems solved.  To help facilitate the sharing and development of Liquibase extensions, we have created the <a href="http://liquibase.org/extensions">Liquibase Extension Portal</a> where anyone can post and share extensions they have created, including using our subversion and/or bug tracking if needed.


Beyond the extension portal, there have been several other "improve the Liquibase community" changes since 1.9 was released, including:


- Replacing the mailing lists with a <a href="http://liquibase.org/forum">forum system</a>
- Changed from LGPL license to the more permissive Apache 2.0 license
- <a href="http://liquibase.jira.com">Switched to Jira</a> for bug and feature tracking
- Introduced an <a href="http://liquibase.com">official Liquibase training and support</a> channel
- <a href="http://liquibase.jira.com/source/browse/CORE">Moved SVN</a> for better source browsing and Jira integration
- Created an announcement mailing list/newsletter (see http://liquibase.org sidebar to subscribe)
- Major code refactoring/simplification effort to make a smaller learning curve to contributing code






*But Wait, There's More!*


Beyond the big goals of extensibility and community (and the bug fixes), there is also important new functionality in the core Liquibase library including:


- <a href="http://blog.liquibase.org/2010/05/liquibase-formatted-sql.html">SQL-based Changelogs</a>
- Informix support
- Ability to specify target changelog parameters to particular databases and/or context
- Ability to specify target modifySql to particular contexts
- Expanded use of changelog properties, including in preconditions and SQL text
- Performance improvements






*The Future*


With the official release of Liquibase 2.0, the plan is to go back to a more standard release schedule.  That means that 2.1 will not take 2 years...  The jump from 1.9 to 2.0 had a lot of pieces to move around but the primary reason for the long release schedule was ensuring that the internal Liquibase API will be stable going forward for end users to code extensions against without fear of breaking changes.


Going forward, Liquibase development will be broken into two areas: work on the core library and work on extensions.  While the extension system is great for end users, it will also help us to build deeper support for particular databases without trying to force database-specific functionality into the main library, iterate new and experimental features independently of the main library, and add take advantage of 3rd party libraries without adding a required dependency for everyone.  This will allow the core Liquibase library to be better focused on providing a solid feature-set that is common to all databases and users.


I have already began some work on 2.1 which is primarily targeted at improving the database diff support which will allow the hibernate integration to improve as well as changelog generation for existing databases.  Work beyond 2.1 will, like usual, be driven by user request.  I would like to get back to the .net and Liquibase IDE proof-of-concepts I had began as well.  There is also additional community improvements I would like to investigate including a less <a href="http://liquibase.org/forum/index.php?topic=962.0">spam-attracting forum</a> and possibly moving from SVN to github.


As always, <a href="http://liquibase.org/community">let us know</a> if you have any questions or suggestions, and thanks to everyone that contributed code, bug reports, and help during the 2.0 development.
