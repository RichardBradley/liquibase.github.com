---
layout: default
subnav: subnav_blog.md
title: Liquibase 2.0 RC1 Released
---
# Liquibase 2.0 RC1 Released

Liquibase 2.0 Release Candidate 1 is now available from the <a href="https://download.liquibase.org/download-community/">Liquibase download page</a>


The primary focus of the 2.0 release is extensibility and building community. In particular, this means infrastructure changes such as:


- Major re-architecting of codebase to expose a flexible, extensible, stable API
- Replacing the old mailing lists with a <a href="https://www.liquibase.org/forum">message system</a>
- Extension/plug-in portal and <a href="https://www.liquibase.org/2009/06/liquibase-extension-contest-2009-now-underway.html">Extension Contest</a> (closed for judging)
- <a href="https://liquibase.jira.com/browse/CORE">New Feature/Issue tracker</a>
- <a href="https://liquibase.jira.com/source/browse/CORE">New source repository and browser</a>
- Publicly available build server
- Scheduled online meetups
- Maven as build script
- Improved documentation including developer documentation (still to do)
- Improved test coverage

### As well as new functionality including:

- Ability to specify databases and contexts in which to specify <a href="https://www.liquibase.org/documentation/changelog_parameters.html">changelog parameters</a>
- Ability to specify contexts on <a href="https://www.liquibase.org/documentation/modify_sql.html">modifySql</a>
- ChangeLogPropertyDefined precondition
- Performance improvements
- Lots of bug fixes


### Current state of Liquibase 2.0:

As of the RC1 release, all scheduled features are implemented and our unit and integration tests have passed. For the next few weeks as we work through the RC cycle, I will be updating documentation and fixing reported bugs.


### Upgrade Nodes:

- The format of the changeset checksums stored in the databasechangelog table has changed. All checksums will automatically be upgraded to the new format, but will not be backwards compatible with 1.x. We cannot determine changed changesets so any invalid checksums or runOnChange features are disabled for the first 2.0 run
- The modifyColumn tag has been deprecated and moved to the extension portal. If you are using modifyColumn, consider the new `<modifyDataType>` or other more specific comands (addPrimaryKeyConstraint, etc.) and/or include the<a href="https://liquibase.jira.com/wiki/display/CONTRIB/ModifyColumn+Change"> modifyColumn library</a> in your classpath.
- The format of the XSD definition has changed.

The new format looks like:

    <databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd">

Please give Liquibase 2.0 a try and report any <a href="https://www.liquibase.org/forum">issues or questions you have.</a>

