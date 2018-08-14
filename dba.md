---
layout: default
title: Liquibase for DBAs
redirect_from:
  - /dba
---

# Liquibase for DBAs #

### No change is forgotten

Liquibase [tracks which changelog statements](documentation/databasechangelog.html) have run against each database, so you no longer have to manually track what statements have been run against each database and which have not.

### Like SQL? Use SQL

XML-formatted changelogs have their advantages, but many DBAs still prefer good, old fashioned SQL. If that is what you are most comfortable working with, [Liquibase-formatted SQL](documentation/sql_format.html) gives you the standard changeSet tracking used in any changelog format, but lets you specify the exact SQL you want.

### Manually verify the database changes with each release

Liquibase supports an ["updateSql"](documentation/sql_output.html) command which will not actually update the database, but instead output the SQL that will run. That script can be read through and verified to ensure everything is correct and doing what it is supposed to.

After you know everything is correct, you can either run liquibase update, or run your script through your favorite tools. The script will include the [DATABASECHANGELOG](documentation/databasechangelog_table.html) inserts so everything will still be correctly tracked.

### Prepare for deployment problems

Releases don't always go as planned, and so Liquibase lets you ensure your contingency plans are correct before each release. As you near a release, besides checking the updateSql output, you can also run [futureRollbackSql](documentation/rollback.html) which will output the SQL needed to bring a fully updated database back to the current state. It will be much less stressful verifying the rollback logic BEFORE the release.

### A unified changelog for all your databases

You try to keep all your databases the same, but there are always differences. QA needs test data, production gets a couple extra tables, and the hot-backup server needs extra configuration. Liquibase supports contexts, labels, parameters, and preconditions that let you address minor differences in your scripts to adjust things as needed.

* [Contexts](/documentation/contexts.html) and labels let you target certain changeSets to run in only some environments.
* [Parameters](/documentation/changelog_parameters.html) let you do simple text substitutions when things like schema names vary from database to database.
* [Preconditions](/documentation/preconditions.html) let you check the state of the database to dynamically determine if a changeSet should be executed or not.

Thanks to Liquibase's [cross-database support](/databases.html, you can even use a single changelog that supports Oracle, MS SqlServer, Postgresql, and more.

### Enterprise features with Datical

Beyond all the standard Liquibase functionality, Datical lets you

* [Package database schema changes](http://www.datical.com/product/packaging-intelligence/) alongside application code
* Simulate deployments to [forecast potential errors](http://www.datical.com/product/validation-intelligence/)
* [Know the deployment status](http://www.datical.com/product/management-intelligence/) of every schema in the database
* Integrate with popular [DevOps tools](http://www.datical.com/integrations/)


---

Liquibase for [QA](/qa.html) \| [Developers](/developer.html) \| [Release Managers](/release_manager.html)