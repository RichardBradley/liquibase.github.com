---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.8.0 Released
---


Liquibase 1.8.0 has been released and can be downloaded from [http://download.liquibase.org/](http://download.liquibase.org/).


Major changes include:
#### Improvements to [preconditions](/documentation/preconditions.html)

- onFail and onError controls
- Several new precondition checks
- Custom preconditions can be passed parameters

#### SQLite Support

- [Context](/documentation/contexts.html) checking is now case insensitive
- Specifying a column as autoincrement for a non-autoincrement table does not cause an error
- End delimiter can be specified with [sql changes](/documentation/changes/sql.html)
- [Indexes](/documentation/changes/create_index.html) can be created as unique
- Required attributes for all changes are checked before execution
- [Command line migrator](/documentation/command_line.html) return codes are better
- Many more bug fixes

The Maven repository will be updated over the next couple days. The Grails and IntelliJ plug-ins are available immediately.


I would also like to thank everyone who has helped with this release by submitting bug reports, feature requests, and patches.  They are all greatly appreciated, so please keep them coming.
