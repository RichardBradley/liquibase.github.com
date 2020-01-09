---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0 Beta 1
---

# Liquibase 3.0 Beta 1

Although it has been far too long since the last liquibase release, that is not from a lack of work. I've been hard at work at a major update that has been stuck in the "I think I'll have it wrapped up next month" phase for over a year at this point. That is a topic for a future blog post, though&hellip;


I am, however, very pleased to announce Liquibase 3.0, beta 1. There is definitely a reason it is labeled as "beta" rather than "RC" as there is still a lot of work to do on documentation, API finalization, and bug fixes. In particular, my roadmap for 3.0 beta 1 -> 3.0.0 final is:


- Vet Liquibase API changes. The goal of the 2.0 release was to open Liquibase for integration and extensibiliy and I want a strong, stable API. Version 3.0 greatly expands the scope of how you can mold and shape liquibase, and I want to make sure that the APIs liquibase exposes are easy to use yet will support future features as well without breaking changes.
- Documentation update. The <a href="http://web.archive.org/web/20130316021822/http://liquibase.org/">liquibase.org</a> website is a bit dated and the there are many holes in the documentation. I am going to update that with a new github-based site and ensure it is up to date with what is new in 3.0 (and things missed from previous releases)
- Jira cleanup. <a href="http://web.archive.org/web/20130316021822/http://liquibase.jira.com/">http://liquibase.jira.com</a> has gotten to be a mess in 3.0 with many duplicated issues, issues that have already been resolved, simple things that can be fixed still in 3.0 mixed with larger changes that will have to go in 3.1+, etc. I need to go through the list to make sure simple and/or blocker bugs are resolved and things that can wait for 3.1 are pushed out.
- Testing. I've primarily tested against Mysql, Oracle, SqlServer, HSQL, and H2. I need to make sure the other supported databases are working as well.



My hope is that 3.0.0 beta represents a feature complete 3.0 version, but the final walk through of features, bugs and extension points will probably find some additional larger changes to make. My plan is to have a new beta roughly bi-weekly until the 3.0.0 release in early April. However, "it's software, so it can do anything except ship on time".

### High level changes in 3.0


- Dropped Java 1.5 support
- Major changes in diff and snapshot log
- Support for "catalogs" in addition to schemas
- Separated "diff" and "snapshot" logic for better modularity
- Extension support for LockService
- Extension support for defining new DataTypes
- Extension support for defining new snapshot DatabaseObjects
- Extension support for defining new Snapshot log
- Extension support for how to compare DatabaseObjects
- Better extension support for changelog generation
- More object types are snapshotted
- Changes can provide metadata helpful for IDE and other integrations
- Added ability for objects to control how they are serialized via the LiquibaseSerializable interface
- Can define tablespace for liquibase tables
- Performance improvements
- Ability to specify sequences to read values from on `<insert>`
- Improve OSGi support
- Support preconditions in formatted SQL
- Maven supports generateChangeLog
- Better support for case sensitive databases
- API cleanup
- Ability to SKIP columns in a CSV file
- Improved Informix support
- Support JDBC escape syntax in SQL
- Added futureRollbackCountSQL
- Support ${} params in formatted SQL
- Many bug fixes

### Download

As always, you can download the release from <a href="http://web.archive.org/web/20130316021822/http://liquibase.org/download">http://liquibase.org/download</a> and direct any comments or questions for <a href="http://web.archive.org/web/20130316021822/http://forum.liquibase.org/">https://forum.liquibase.org</a>
