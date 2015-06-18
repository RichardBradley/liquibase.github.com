---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.8.0 Released
---


Liquibase 1.8.0 has been released and can be downloaded from <a href="http://www.liquibase.org/download">http://www.liquibase.org/download</a>.


Major changes include:
#### Improvements to <a href="http://www.liquibase.org/manual/preconditions">preconditions</a>

- onFail and onError controls
- Several new precondition checks
- Custom preconditions can be passed parameters

#### SQLite Support

- <a href="http://www.liquibase.org/manual/contexts">Context</a> checking is now case insensitive
- Specifying a column as autoincrement for a non-autoincrement table does not cause an error
- End delimiter can be specified with <a href="http://www.liquibase.org/manual/custom_sql">sql changes</a>
- <a href="http://www.liquibase.org/manual/create_index">Indexes</a> can be created as unique
- Required attributes for all changes are checked before execution
- <a href="http://www.liquibase.org/manual/command_line">Command line migrator</a> return codes are better
- Many more bug fixes

The Maven repository will be updated over the next couple days. The Grails and IntelliJ plug-ins are available immediately.


I would also like to thank everyone who has helped with this release by submitting bug reports, feature requests, and patches.  They are all greatly appreciated, so please keep them coming.
