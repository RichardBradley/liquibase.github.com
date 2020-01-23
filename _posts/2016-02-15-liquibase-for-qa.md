---
layout: default
subnav: subnav_blog.md
title: Liquibase for QA Test Teams
---
# Liquibase for QA Test Teams

As a QA team member, you always make sure you are testing the current version of an application. However, it is just as important that the testing schema is correct and that there are no unexpected changes that the developers have applied to their environment that you do not know about.

Beyond the simple structure of the database, it is important that QA teams ensure the data migration from one version to the next is correct. This allows test team members to verify there is no lost or corrupted data.

By introducing Liquibase into your organization, QA test team members are able to know that what you are testing is what will be released--from the UI to database.

### Know you have the correct database schema

Liquibase [tracks which changelog statements](/documentation/databasechangelog.html) have run against each database, so you can be certain that the schema you are using for test matches what the developers expect. Even better, QA teams will know that the schema will match what goes to production so you there will be no unexpected "why wasn't this tested?" surprises.

### Easier test data management

Normally, test data is stored in something like CSV files which are loaded into the database after it is built. The problem with this strategy is that schema changes usually can and will break something in the data load process. Typically this leads to QA teams spending hours trying to figure out what the test data was trying to expose and then adjusting the files to match the new schema.

Instead of loading the data into the final schema, build up the test data within your changelog file. Use [loadData](/documentation/changes/load_data.html) or [standard sql](/documentation/changes/sql.html) to load data into the schema as it is now, then as new schema changes are appended to the changelog the test data will be migrated just like production data. This not only QA team members from having to continually update CSV files, but also helps verify that existing data is handled correctly.

Another best practice is to use [contexts](/documentation/contexts.html) and labels to mark which changeSets contain test data so they are not deployed to production.

### Sanity checks

Liquibase ships with several tools QA teams can use to: check current database state, make sure changes are being applied correctly and ensure that no one is sneaking-in changes out of process.

- The status and validate commands report on what changeSets have not yet been run and checks the changelog for errors.
- The [diff](/documentation/diff.html) command reports on differences between databases to ensure that two fully updated databases are truly identical
- The [dbdoc](/documentation/dbdoc.html) command generates documentation on the current database structure and its changes over time

### Enterprise features with Datical

If your QA team finds their requirements extend beyond all these great capabilities check out Datical. Datical builds upon Liquibase and lets test teams:

- Simulate or rehearse database deployments to [forecast potential errors](http://www.datical.com/product/packaging-intelligence/)
- [Know the development status](http://www.datical.com/product/management-intelligence/) of every schema in the database
- Automate database [change validation](http://www.datical.com/product/validation-intelligence/)

More information on Datical DB can be [found here](http://www.datical.com/product-information/).


