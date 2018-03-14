---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.5.5 Released
---

For those of you not watching the download page every day, Liquibase 3.5.5 was released on Feb 15th. 

The 3.5.5 release is a bugfix release, pulling in a few high-prioritly/low impact changes in preparation for a larger 3.6.0 release in a few weeks. 

### Highlights include:

- Fixed handling Java 9+ version numbers
- Spring fixes
- includeAll fixes

I’m currently in final testing of the 3.6.0 release which includes over 1000 commits covering the last year of development so stay tuned for that.

As promised, the new versions will continue to be released on a far more regular basis than over the last year so look forward to great things!

### Download

As always, the release is now available from [liquibase.org/download](/download) and through the Maven repositories.

### 2018 Community Survey

The 2018 Liquibase Community Survey is also now open. Please take 5 minutes to let us know [how you are using Liquibase and how we can improve it](https://goo.gl/forms/Atzmtw7XZatOehuP2). Thanks! 

### Full changelog:

- [CORE-2851] - includeAll tag with a relative path duplicates the database changes with an absolute and with a relative changelog
- [CORE-2863] - Issue with Spring boot 1.4.0 - 1.4.3
- [CORE-2898] - includeAll broken in 3.5.1
- [CORE-2948] - Changelog with includeAll will not find child changelogs in Spring Boot's executable JAR
- [CORE-2978] - AddAutoIncrement on Postgres does not work when no schema is specified
- [CORE-3123] - ResourceComparator is not applied for includeAll
- [CORE-3139] - ClassLoaderResourceAccessor cannot read jar path resources from SpringLiquibase
- [CORE-3015] - Oracle: diffChangeLog TIMESTAMP WITH LOCAL TIME ZONE correctly

[Issue Tracker](https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&version=13400)

