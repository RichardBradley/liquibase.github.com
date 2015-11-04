---
layout: default
title: Liquibase for QA
redirect_from:
  - /qa
---

# Liquibase for QA #

### Know you have the correct database schema

Liquibase [tracks which changelog statements](documentation/databasechangelog.html) have ran against each database, so you can be certain that the schema you are using matches what the developers expect. Even better, you know that your schema will match what goes to production so you there will be no unexpected "why wasn't this tested?" surprises.

### Easier test data management

Normally, test data is stored in something like CSV files which are loaded into the database after it is built. The problem with this strategy is that any schema changes will break at least something in your data load process, leading to hours of time spent figuring out what the test data was trying to expose and then adjusting the files to match the new schema.

Instead of loading the data into the final schema, build up your test data within your changelog file. Use [loadData](/documentation/changes/load_data.html) or standard [sql](/documentation/changes/sql.html) to load data into the schema as it is now, then as new schema changes are appended to the changelog your test data will be migrated just like production data would be. This not only keeps you from having to continually update your CSV files, but also helps verify that existing data is handled correctly.

Use [contexts](/documentation/contexts.html) and labels to mark which changeSets contain test data so they are not deployed to production.

### Sanity checks

Liquibase ships with several tools you can use to make sure changes are being applied correctly, current database state, and that nobody is sneaking in changes out of process.

* The status and validate commands report on what changeSets have not yet been ran and checks the changelog for errors.
* The [diff](/documentation/diff.html) command reports on differences between databases to ensure that two fully updated databases are truly identical
* The [dbdoc](/documentation/dbdoc.html) command generates documentation on the current database structure and its changes over time

### Enterprise features with Datical

Beyond all the standard Liquibase functionality, Datical lets you

* Simulate deployments to [forecast potential errors](http://datical.com)
* [Know the development status](http://datical.com) of every schema in the database
* Automate database change validation


---

Liquibase for [DBAs](/dba.html) \| [Developers](/developer.html) \| [Release Managers](/release_manager.html)