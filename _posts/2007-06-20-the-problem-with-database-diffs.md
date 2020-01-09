---
layout: default
subnav: subnav_blog.md
title: The Problem with Database Diffs
---
# The Problem with Database Diffs

When talking about how Liquibase works, I'm often asked "Why not just do a database diff to know what changes need to be applied to a new database?"

There are advantages to the database diff technique compared to Liquibase's method of tracking changes, mainly related to not relying on developers to remember to document the changes they made.  You simply have everyone make whatever changes they want to the dev database and let the diff tool sort it out.

There are two fundamental flaw with diff tools, however.  The first is is that while they do a good job of showing what the differences are *syntactically*, they don't understand the *semantics* of the changes.  For example, if you rename a column from "fname" to "firstname", a diff will show you that there is a "fname" column that needs to be dropped and a "firstname" column that needs to be be added.  If you follow these suggestions, you will end up with a database that is structured correctly, but you will lose your valuable data when the changes are applied to an existing production system.  You need to not just understand *what* the structural differences are, you also need to understand *why* they are.

The second flaw is that it is impossible to diff the data so you find inserts, updates, and deletes that must be applied for the system to work correctly.  These data changes can range from additional lookup table values to copying data in a de-normalizing process and can be just as important as the structural changes.  Theoretically, a diff tool could also check for new, updated, and missing data between database, but in practice this cannot work for two reasons:

1. Performance.  As your data set grows, the amount of information to compare grows until it is unmanageable.
1. Changing Data.  During development, test data is often added to the development database that shouldn't be copied into other databases.   Also, new data may be added to testing and production databases that should not be deleted just because it doesn't exist in the development database.

If you track your data changes along with your structural changes during development, however, you can be certain that they will be applied correctly down the road.

In the end, I feel that the problems associated with a diff tool outweighs the convenience and simplicity they offer.  While they can have great value as a "did all the changes get stored in the change log correctly" safeguard, it should not be relied upon as your primary means of tracking database changes.
