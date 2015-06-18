---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.7.0 Released
---
It is Liquibase 1.0's first birthday, but you get the gift: Liquibase 1.7.0 is now available.

Major changes include:



- Added <a href="http://www.liquibase.org/manual/load_data">loadData change</a> which allows importing of data from CSV files

- Added support for <a href="http://www.liquibase.org/manual/changelog_parameters">changelog parameters</a> for more dynamic and flexible change logs
- Allow <a href="http://www.liquibase.org/manual/preconditions">preconditions</a> in changeSet tags to act as sanity checks during a database update

- Can export data with <a href="http://www.liquibase.org/manual/generating_changelogs">generateChangeLog</a>
- Added markNextChangeSetRan command

- Added validCheckSum tag to <a href="http://www.liquibase.org/manual/changeset">changeSet</a>

- Can use any refactoring tags or reference previous changeSets inside a <a href="http://www.liquibase.org/manual/changeset#rollback_tag">rollback tag</a>

- Allow <a href="http://www.liquibase.org/manual/preconditions">custom preconditions</a>
- RowMapper interface is now public
- Misc bug fixes

The core library can be downloaded from <a href="http://www.liquibase.org/download">http://www.liquibase.org/download</a> while the Maven, Grails, and IntelliJ plug-ins can be installed from their respective plug-in managers.


