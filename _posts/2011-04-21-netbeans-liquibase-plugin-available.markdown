---
layout: post
status: publish
published: true
title: NetBeans Liquibase Plugin Available
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 236
wordpress_url: http://blog.liquibase.org/?p=236
date: '2011-04-21 00:15:39 -0500'
date_gmt: '2011-04-21 05:15:39 -0500'
categories:
- Announcement
- IDE
- Extension
tags: []
---


For NetBeans users, there is a Liquibase plugin now available.


The current, 0.2 version implements rudimentary support and concentrates on the most needed functionality.


Features:


- Database connections stored in the Database Explorer plugin, so the developer doesn't have to separately maintain the registry of connections.
- Executing a changeset by simply selecting it in the File or Project explorer windows and call the execution from a context menu action. The database connection can be selected during the execution
- A formatted log is displayed in the Output Window about the execution of the changeset, so the developer is properly informed if the changeset execution has failed.
- Custom icon for the Liquibase changeset files, so they can better distinguished from the ordinary files.






More information: <a href="http://plugins.netbeans.org/plugin/38564/liquorice-core">http://plugins.netbeans.org/plugin/38564/liquorice-core</a>
