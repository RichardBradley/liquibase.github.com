---
layout: default
subnav: subnav_blog.md
title: Group of Liquibase Extensions Updated
---


There has been a lot of activity the last couple weeks on the Liquibase extensions I manage and/or have source access to. There were a few running up against the Oct 15th jira-svn-shutdown deadline and also several that had not been updated to support Liquibase 3.0 yet.


For all of the extensions, I have moved their source repository out of the shared liquibase.jira.com subversion repository and into their own repositories at <a href="https://github.com/liquibase">https://github.com/liquibase</a>. They all now have their own issue tracking, wiki, and releases tab in their Github projects, which is the pattern I will be using for all the Liquibase-managed extensions.


I also released the new builds into Maven under the <a title="org.liquibase.ext" href="http://mvnrepository.com/artifact/org.liquibase.ext">org.liquibase.ext</a> group (some may still be propagating through the mirrors).





### The recently updated extensions are


**<a href="https://github.com/liquibase/liquibase-oracle">Oracle Database Support (https://github.com/liquibase/liquibase-oracle)</a>**


Improved support for Oracle database. Adds additional refactoring tags and snapshot support for Oracle-specific object types

**<a href="https://github.com/liquibase/liquibase-hanadb">Hana Database Support (https://github.com/liquibase/liquibase-hanadb)</a>**

Support for SAP's Hana Database


**<a href="https://github.com/liquibase/liquibase-teradata">Teradata Database Support (https://github.com/liquibase/liquibase-teradata)</a>**

Adds support for Teradata database. *Still in beta because I am looking for Teradata users to test it*


**<a href="https://github.com/liquibase/liquibase-nochangelogupdate">No Change Log Update (https://github.com/liquibase/liquibase-nochangelogupdate)</a>**


Makes Liquibase run without updating the DATABASECHANGELOG table. Not what you normally want, but there are times it is handy


**<a href="https://github.com/liquibase/liquibase-javalogger">java.util.Logger Support (https://github.com/liquibase/liquibase-javalogger)</a>**

Log through java.util.Logger rather than STDERR

**<a href="https://github.com/liquibase/liquibase-sequencetable">Sequence Table (https://github.com/liquibase/liquibase-sequencetable)</a>**

Support "sequence tables" like Hibernate can use for databases that do not support native schemas


**<a href="https://github.com/liquibase/liquibase-modify-column">Modify Column (https://github.com/liquibase/liquibase-modify-column)</a>**

Support for the deprecated `<modifyColumn>` change from Liquibase 1.x



The main "Liquibase Extension Portal" is still at <a href="http://liquibase.org/extensions">liquibase.org/extensions</a>, the above extensions are simply the subset of extensions that I tend to manage. In the upcoming weeks, I will be working to improve the extension portal and the extension writing process in general (including better documentation)
