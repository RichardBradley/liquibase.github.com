---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.3.4 Released
---

Bugfix release Liquibase 3.3.4 is now available from <a title="liquibase.org/download" href="http://liquibase.org/download">liquibase.org/download</a> and through the Maven repositories.

The most notable fix was to make the Maven plugin "liquibase.should.run" flag default back to true like it should have vs. "false" in 3.3.3.

### Full changelog:

- <a href="https://liquibase.jira.com/browse/CORE-2360">CORE-2360</a> - Maven - Skip is active by default
- <a href="https://liquibase.jira.com/browse/CORE-2199">CORE-2199</a> - Liquibase adds a semicolon after a stored proc definition making the stored proc unusable
- <a href="https://liquibase.jira.com/browse/CORE-2344">CORE-2344</a> - Unknown host exception on OS RHEL 6.5
- <a href="https://liquibase.jira.com/browse/CORE-2346">CORE-2346</a> - IncludeAll does not work when runing liquibase from inside a jar
- <a href="https://liquibase.jira.com/browse/CORE-2357">CORE-2357</a> - alterSequence does not work as expected when you need to change the cache size
- <a href="https://liquibase.jira.com/browse/CORE-2366">CORE-2366</a> - Derby Network server works with command line but not with maven "Liquibase skipped due to maven configuration"
- <a href="https://liquibase.jira.com/browse/CORE-2368">CORE-2368</a> - No SQL outputted for `<update>` change




