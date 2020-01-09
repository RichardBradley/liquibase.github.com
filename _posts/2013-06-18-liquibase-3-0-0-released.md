---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0.0 Released
---
# Liquibase 3.0.0 Released

At long last, I'm happy to announce that Liquibase 3.0.0 is finally out!


There has been a lot of changes and a lot of work put into 3.0, but the major highlights are:


### Additional extension support


Starting with Liquibase 2.0, moving to a plugin/extension model has been a major focus of development. With 3.0 we focused on adding extension support for the database snapshot and comparison logic as well as for the DatabaseChangeLogLock code. The new extension support gives the ability to dynamically add snapshot support for additional database object types, control how those types are compared across databases, modify the logic used for comparing standard liquibase types, manage how fixes for differences in new and existing types are represented in generated changelogs, and much much more.


The general strategy for Liquibase is to have the core library easily support the 80% of functionality that is common across databases and across users, with built in features like <a href="https://www.liquibase.org/documentation/contexts.html">contexts</a>, <a href="https://www.liquibase.org/documentation/changelog_parameters.html">changelog parameters</a>, and <a href="https://www.liquibase.org/documentation/modify_sql.html">modifySql </a>that will cover up to 95% of use cases. Extensions will address the final 5% of use cases that are always very company specific and often contradictory to what other users expect.


The release timelines for 2.0 and 3.0 were much longer than I would have liked in large part because I was trying to build up the architecture to support the extension points people need. Now that 3.0 is out, the plan is to go back to a much smaller release cycle with more manageable feature changes and bug fixes while also better seeding and managing the community extensions.


For more information on extension support in Liquibase, visit the <a href="https://liquibase.org/extensions">extension portal</a>. Documentation is still lighter than I would like, but more will be coming.


### Additional integration support


For those integrating with the Liquibase Java API, there is now more metadata available from Change classes as well as separated and better organized "diff" and "snapshot" logic.


### End user improvements


For the normal user, Liquibase 3.0.0 adds:


- Support for preconditions in <a href="https://www.liquibase.org/documentation/sql_format.html">formatted SQL</a> changelogs
- <a href="https://www.liquibase.org/documentation/yaml_format.html">YAML</a> and <a href="https://www.liquibase.org/documentation/json_format.html">JSON</a> changelog support
- Support for "catalog" attributes in all applicable change commands  in addition to the existing "schema" attribute
- Better support for case sensitive databases
- Maven now supports the generateChangeLog command
- Ability to specify sequences to read values from on `<insert>`
- Performance improvements
- Support ${} params in formatted SQL
- Improved Informix support
- Improved OSGi support
- Improved UTF8 support
- Can now use JDBC escape syntax in SQL
- "dbms" attribute supports NOT syntax (using '!')
- Added futureRollbackCountSQL command
- Tablespace can be defined for liquibase tables
- Added ability to SKIP columns in a CSV file
- Many bug fixes


### Upgrading to 3.0



For the normal Liquibase user, version 3.0.0 is a drop in replacement for any of the 2.x releases. For extension developers and integrators, there has been some changes to the Java APIs that may impact your code. Those changes will be documented. Liquibase 3.0 now requires Java 1.6+.


### Downloading 3.0

As always, you can download Liquibase from the <a href="https://download.liquibase.org/download-community/">Liquibase download page</a> and direct any comments or questions to <a href="http://web.archive.org/web/20130316021822/http://forum.liquibase.org/">https://forum.liquibase.org</a>.


The raw Jira release notes are available at <a href="https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&amp;version=10020">https://liquibase.jira.com/secure/ReleaseNote.jspa?projectId=10020&amp;version=10020</a>
