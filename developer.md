---
layout: default
title: Liquibase for Developers
---

# Liquibase for Developers #

### Store your database changes with your code

Your database schema is an integral part of your application, so store your changelog files along side your application code. That will allow your existing version control system to ensure everything is kept in sync--whenever you commit your code your database changes will go with it and whenever anyone updates their code they will get the new database schema.

### Supports branches

Branches are an integral part of developing code and your database changes need to flow along with them. Because Liquibase tracks each changeSet independently rather than relying on a single incrementing "database version", when you merge in a branch all the new changeSets will execute as expected, even if there were "later" changeSets already executed.

When you do run into merge issues, the simple text formats used for the changelog files can be easily merged with your favorite tools.

### Author changeSets in your favorate markup

Liquibase supports changelogs written in XML, YAML, JSON and SQL. Use whatever is most readable to you

### Know that your changes will not get forgotten down the line

Liquibase [tracks which changelog statements](documentation/databasechangelog.html) have ran against each database, so once you create a changeSet you can be confident that it will be deployed through QA and production.

For best results, append a new changeSets as needed then run liquibase update to apply it to your local database. This works better than making changes to your database directly and then re-writing it as a changeSet because you are truly running the same update as everyone else will.

### Like SQL? Use SQL

XML-formatted changelogs have their advantages, but many DBAs still prefer good, old fashioned SQL. If that is what you are most comfortable working with, [Liquibase-formatted SQL](documentation/sql_format.html) gives you the standard changeSet tracking used in any changelog format, but lets you specify the exact SQL you want.
### Easier test data management

Normally, test data is stored in something like CSV files which are loaded into the database after it is built. The problem with this strategy is that any schema changes will usually break in your data load process, leading to hours of time spent figuring out what the test data was trying to expose and then adjusting the files to match the new schema.

Instead of loading the data into the final schema, build up your test data within your changelog file. Use [loadData](/documentation/changes/load_data.html) or standard [sql](/documentation/changes/sql.html) to load data into the schema as it is now, then as new schema changes are appended to the changelog your test data will be migrated just like production data would be. This not only keeps you from having to continually update your CSV files, but also helps verify that existing data is handled correctly.

Use [contexts](/documentation/contexts.html) and labels to mark which changeSets contain test data so they are not deployed to production.

### Sanity checks

Liquibase ships with several tools you can use to make sure changes are being applied correctly, check current database state, and that nobody is sneaking in changes out of process.

* The status and validate commands report on what changeSets have not yet been ran and checks the changelog for errors.
* The [diff](/documentation/diff.html) command reports on differences between databases to ensure that two fully updated databases are truly identical
* The [dbdoc](/documentation/dbdoc.html) command generates documentation on the current database structure and its changes over time

### Enterprise features with Datical

Beyond all the standard Liquibase functionality, Datical lets you

* [Package database schema changes](http://www.datical.com/product/packaging-intelligence/) alongside application code
* Simulate deployments to [forecast potential errors](http://www.datical.com/product/validation-intelligence/)
* [Know the deployment status](http://www.datical.com/product/management-intelligence/) of every schema in the database
* Integrate with popular [DevOps tools](http://www.datical.com/integrations/)


---

Liquibase for [DBAs](/dba.html) \| [QA](/qa.html) \| [Release Managers](/release_manager.html)