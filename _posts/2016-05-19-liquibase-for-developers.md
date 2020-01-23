---
layout: default
subnav: subnav_blog.md
title: Liquibase for Application Developers
---
# Liquibase for Application Developers

Agile development practices and modern source control systems such as Git have transformed how application software is developed and managed.

But for many application developers the way the database is changed is the same as it was in 1995.
Well, maybe not exactly the same—now SQL files for each release are stored in a shared Windows drive instead of a shared Novell server – but you catch my drift.

### Store database changes along side application code

The database schema is an integral part of any application, so changelog files should be stored along side application code. That will allow an existing version control system to ensure everything is kept in sync--whenever application code is committed database changes will go along with it and whenever anyone updates application code they will get the new database schema.

### Supports branches

Branches are an integral part of developing application code and database changes need to flow along with them. Because Liquibase tracks each changeSet independently rather than relying on a single incrementing "database version", when application developers merge in a branch all the new changeSets will execute as expected, even if there were "later" changeSets already executed.

When developers do run into merge issues, the simple text formats used for the changelog files can be easily merged with their favorite tools.

### Author changeSets in your favorite markup

Liquibase supports changelogs written in XML, YAML, JSON and SQL. Use whatever is most readable to you.

### Know that changes will not get forgotten down the line

Liquibase [tracks which changelog statements](http://www.liquibase.org/documentation/databasechangelog.html) have run against each database, so once developers create a changeSet they can be confident that it will be deployed through QA and production.

For best results, whenever an application developer need a database change, they can simply append a new changeSet to the local database and then run a Liquibase update to apply it. This works better than making changes to a database directly and re-writing it as a changeSet because they are truly running the same update as everyone else.

### Like SQL? Use SQL.

XML-formatted changelogs have their advantages, but many DBAs still prefer good, old-fashioned SQL. If that is what you are most comfortable working with, [Liquibase-formatted SQL](http://www.liquibase.org/documentation/sql_format.html) provides the standard changeSet tracking used in any changelog format but lets the DBA specify the exact SQL they want.

### Easier test data management

Normally, test data is stored in something like CSV files which are loaded into the database after it is built. The problem with this strategy is that any schema changes can and will break something in the data load process. Typically this leads to application development teams spending hours of time trying to figure out what the test data was trying to expose and then adjusting the files to match the new schema.

Instead of loading the data into the final schema, build up the test data within a changelog file. Use [loadData](http://www.liquibase.org/documentation/changes/load_data.html) or standard [sql](http://www.liquibase.org/documentation/changes/sql.html) to load data into the schema as it is now, then as new schema changes are appended to the changelog the test data will be migrated just like production data would be. This not only keeps application developers from having to continually update your CSV files, but also helps verify that existing data is handled correctly.

Another best practice is to use [contexts](http://www.liquibase.org/documentation/contexts.html) and labels to mark which changeSets contain test data so they are not deployed to production.

### Sanity checks

Liquibase ships with several tools application development teams can use to: check current database state, make sure changes are being applied correctly and ensure that no one is sneaking in changes out of process.

- The status and validate commands report on what changeSets have not yet been run and checks the changelog for errors.
- The [diff](http://www.liquibase.org/documentation/diff.html) command reports on differences between databases to ensure that two fully updated databases are truly identical
- The [dbdoc](http://www.liquibase.org/documentation/dbdoc.html) command generates documentation on the current database structure and its changes over time

### Enterprise features with Datical

If your application development team determines their needs extend beyond all the great capabilities Liquibase offers check out Datical. Datical builds upon Liquibase and lets DBAs:

- [Package database schema changes](https://www.datical.com/solution/database-code-packager/) alongside application code
- Simulate or rehearse database deployments to [forecast potential errors](https://www.datical.com/solution/change-management-simulator/)
- [Know the deployment status](https://www.datical.com/solution/deployment-monitoring-console/) of every schema in the database
- Integrate with popular [DevOps tools](https://www.datical.com/integrations/)

More information on Datical DB can be [found here](https://www.datical.com/).

