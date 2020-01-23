---
layout: default
subnav: subnav_blog.md
title: Liquibase for Application Release Managers
---
# Liquibase for Application Reelase Managers

In the modern agile development environment there is a lot that happens in a very short period of time. This means application release managers need to be efficient with their time while ensuring nothing falls through the cracks. The database updates that go along with each application release are just as important as the application code, both for deployment and for planning rollbacks.

By adopting Liquibase, application release managers are able to know that the database change scripts Developers write, QA teams test, and the DBAs sign-off on will be automatically and consistently checked and validated every time a new release is ready to push to production. In addition, Liquibase makes database rollback easy.

### Prepare for deployment problems

Releases don't always go as planned, and Liquibase helps application release managers ensure contingency plans are correct before each release. As teams get closer to releasing new application updates, besides checking the updateSql output, release managers can also run [futureRollbackSql](http://www.liquibase.org/documentation/rollback.html) which will output the SQL needed to bring a fully updated database back to the current state.

### No change is forgotten

Liquibase [tracks which changelog statements](http://www.liquibase.org/documentation/databasechangelog.html) have run against each database, so release managers no longer have to manually track what statements have been run against each database and which have not.

### Sanity checks
Liquibase ships with several tools application release managers can use to: check current database state, make sure database changes are being applied correctly and ensure that no one is sneaking in changes out of process.

- The status and validate commands report on what changeSets have not yet been executed and checks the changelog for errors.
- The [diff](http://www.liquibase.org/documentation/diff.html) command reports on differences between databases to ensure that two fully updated databases are truly identical
- The [dbdoc](http://www.liquibase.org/documentation/dbdoc.html) command generates documentation on the current database structure and its changes over time

### Enterprise features with Datical

If your application release teams determine their needs extend beyond all the great capabilities Liquibase offers check out Datical.  Datical builds upon Liquibase and lets release managers:

- Automate SQL reviews against business rules
- Simulate or rehearse deployments to forecast potential errors

Know the development status of every schema in the database

More information on Datical can be found [here](https://www.datical.com/).

