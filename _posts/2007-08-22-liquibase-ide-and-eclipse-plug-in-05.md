---
layout: default
subnav: subnav_blog.md
title: Liquibase IDE and Eclipse Plug-in 0.5
---
I have released the initial version of a Liquibase IDE.  The idea behind it is to do for database refactoring what refactoring tools like IntelliJ and Eclipse have done for code refactoring.

The initial release is intended primarily to look for feedback from users and from people with experience writing Eclipse plug-ins and RCP applications.

Current functionality includes:



- Applying refactorings to a database and having them stored in a change log file
- Executing a change log file against a database
- Tagging a database

While the functionality may be a bit rough around the edges (not a lot of validation, will probably get an error message or two) it is functionally complete for creating and applying changes.

Plans for the final 1.0 release include interfaces for rollbacks and rollback-management, database diffs, and more.

If you would like to help out with the development of the IDE/plug-in or would like to create a similar plug-in for your favorite IDE, please let me know.  It is a very large undertaking and I could use some help :)

