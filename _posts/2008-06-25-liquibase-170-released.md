---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.7.0 Released
---
# Liquibase 1.7.0 Released

It is Liquibase 1.0's first birthday, but you get the gift: Liquibase 1.7.0 is now available.

Major changes include:

- Added [loadData change](/documentation/changes/load_data.html) which allows importing of data from CSV files

- Added support for [changelog parameters](/documentation/changelog_parameters.html) for more dynamic and flexible change logs
- Allow [preconditions](/documentation/preconditions.html) in changeSet tags to act as sanity checks during a database update

- Can export data with [generateChangeLog](/documentation/generating_changelogs.html)
- Added markNextChangeSetRan command

- Added validCheckSum tag to [changeSet](/documentation/changeset.html)

- Can use any refactoring tags or reference previous changeSets inside a [rollback tag](/documentation/changeset.html#rollback_tag)

- Allow [custom preconditions](/documentation/preconditions.html)
- RowMapper interface is now public
- Misc bug fixes

The core library can be downloaded from <a href="https://download.liquibase.org/download-community/">https://download.liquibase.org/download-community//</a> while the Maven, Grails, and IntelliJ plug-ins can be installed from their respective plug-in managers.


