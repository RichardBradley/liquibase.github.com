---
layout: default
subnav: subnav_blog.md
title: The Problem With Rails Active Migrations
---
Rails Active Migration is nice for its simplicity, but in non-trivial projects, it quickly falls apart due to limitations it has regarding multiple developers and/or branches.  It's a <a href="http://www.google.com/search?q=rails+migration+branches">well known problem</a>

The fundamental problem is that Rails tracks the "database version" as a single incrementing integer.  That works fine when only one developer is adding migrations and when there is only one branch.  When you add developers and branches, however, you quickly run into problems with duplicated version numbers, and missed migrations because the production "database version" is higher than a newly merged in migration.

The reason this is a problem is because there the reliance on a the "database version" concept.  While there may be a logical database version that you can think about, really the state of the database is simply the set of all the applied migrations.  Think of a file in source control.  The source control system may generate "version" numbers for reference, but it doesn't use them to decide what should be merged in.  When you say "merge the "1_1" branch into trunk, it simply takes all the changes in the "1_1" branch and applies the same changes to trunk, regardless of whether the file in trunk has a higher "version number" or not.  The same logic needs to be applied to database updates.

There are <a href="http://dev.rubyonrails.org/ticket/6799">attempts</a> to solve the situation in the Ruby community.  The work-around solution works by naming each change by a timestamp and storing all the executed changes in the schema_migrations table.  While it is a step in the right direction, if you need to re-order the execution of changes after a commit by multiple developers or after a merge it can be difficult.   Hopefully a good solution to the problem is created soon, or we will have to develop a port of Liquibase for Ruby :)

