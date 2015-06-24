---
layout: post
status: publish
published: true
title: Liquibase 1.6.0 Released with Hiberate Support
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 43
wordpress_url: http://nvoxland.wordpress.com/2008/03/27/liquibase-160-released-with-hiberate-support/
date: '2008-03-27 21:18:00 -0500'
date_gmt: '2008-03-27 21:18:00 -0500'
categories:
- Announcement
tags: []
---
The Liquibase team is proud to announce the 1.6.0 Liquibase Core release.

This release focuses primarily on Hibernate integration which allows you to use the <a href="http://www.liquibase.org/manual/diff">diffChangeLog</a> functionality available with the command line and Ant to automatically generate Liquibase change sets based on new Hibernate mapping information.

This functionality is similar to what is offered with hbm2ddl, but with the added ability to control and modify the changes before they are applied. For more information, see <a href="http://www.liquibase.org/manual/hibernate">http://www.liquibase.org/manual/hibernate</a>

Additional functionality includes a new "<a href="http://www.liquibase.org/manual/tag_database">tagDatabase</a>" tag, a "primaryKeyName" attribute on the column tag, as well as many bug fixes.

NOTE: Due to a bug in the change set md5 checksum generation in pre-1.6 releases, existing md5sum information needs to be cleared out of the databasechagelog table before running 1.6 for the first time. This can be done by running "<a href="http://www.liquibase.org/manual/command_line">liquibase clearCheckSums</a>" or by running "UPDATE DATABASECHANGELOG SET MD5SUM=NULL"

Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage of newer change log features, change your XSD declaration to:


    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.6"
        xsi="http://www.w3.org/2001/XMLSchema-instance"
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.6
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.6.xsd">

Liquibase 1.6 can be downloaded from <a href="http://www.liquibase.org/download">http://www.liquibase.org/download</a> and, as always, let us know if you have any questions or issues.

The <a href="http://www.liquibase.org/manual/maven">Maven</a> and <a href="http://www.liquibase.org/manual/grails">Grails</a> plug-ins will be updated over the next week.

