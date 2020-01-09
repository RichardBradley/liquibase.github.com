---
layout: default
subnav: subnav_blog.md
title: The Road to Liquibase 1.0 and Beyond
---

# The Road to Liquibase 1.0 and Beyond

There is a lot going on in Liquibase-land right now.

We are finishing up code and documentation clean-up of the Liquibase migrator and hope to have an initial release candidate available by the middle of June.

As long as no major bugs are found, we expect 1.0 to be released by the end of June.

Concurrent to the final code reviews and bug fixes leading up to 1.0, we have started on a <a href="http://squirrel-sql.sourceforge.net/">SQuirreL</a> plug-in for automatic creation of changelog files.  There is no target date yet for an initial release, but it will probably be post 1.0. If there is anyone interested in working on a plug-in for other IDEs, just <a href="http://www.liquibase.org/community.html">let us know.</a>

We are also already looking at features to include in a 1.1 release.  Items currently on the top of the list include an additional changeSet attribute for specifying the types of databases that it should be run against as well as support for additional databases (Sybase, DB2, Derby, perhaps more).
