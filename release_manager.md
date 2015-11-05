---
layout: default
title: Liquibase for Release Managers
redirect_from:
  - /release_manager
---

# Liquibase for Relase Managers #

### Prepare for deployment problems

Releases don't always go as planned, and Liquibase helps you ensure contingency plans are correct before each release. As you near a release, besides checking the updateSql output, you can also run [futureRollbackSql](documentation/rollback.html) which will output the SQL needed to bring a fully updated database back to the current state.

### No change is forgotten

Liquibase [tracks which changelog statements](documentation/databasechangelog.html) have run against each database, so you no longer have to manually track what statements have been ran against each database and which have not.

### Sanity checks

Liquibase ships with several tools you can use to make sure changes are being applied correctly, check current database state, and that nobody is sneaking in changes out of process.

* The status and validate commands report on what changeSets have not yet been ran and checks the changelog for errors.
* The [diff](/documentation/diff.html) command reports on differences between databases to ensure that two fully updated databases are truly identical
* The [dbdoc](/documentation/dbdoc.html) command generates documentation on the current database structure and its changes over time

### Enterprise features with Datical

Beyond all the standard Liquibase functionality, Datical lets you

* [Automate SQL reviews](http://www.datical.com/product/validation-intelligence/) against business rules
* Simulate deployments to [forecast potential errors](http://www.datical.com/product/validation-intelligence/)
* [Know the deployment status](http://www.datical.com/product/management-intelligence/) of every schema in the database

---

Liquibase for [DBAs](/dba.html) \| [QA](/qa.html) \| [Developers](/developer.html)