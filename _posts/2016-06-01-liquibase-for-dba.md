---
layout: default
subnav: subnav_blog.md
title: Liquibase for DBAs
---
# Liquibase for DBAs

The role of the Database Administrator is evolving and has never been more complex. DBA's are constantly juggling schema management, performance tuning, change control, plus database administration all within ever-shortening application development cycles. On top of all that, there are more database environments to manage than ever before, more distributed sources of database changes, and more stringent compliance requirements.

It is easy for database changes to get lost or misapplied along the way and far too often the place where problems are found is in production. Fortunately, Liquibase can bring a sense of control to the database deployment process while still giving DBAs the control they need. In addition Liquibase works alongside the database professionals preferred toolset.

### No change is forgotten

Liquibase [tracks which changelog statements](http://www.liquibase.org/documentation/databasechangelog.html) have run against each database, so DBAs no longer have to manually track which SQL statements have been run and which have not.

### Like SQL? Use SQL

XML-formatted changelogs have their advantages, but many DBAs still prefer good old fashioned SQL. If that is what the team is most comfortable working with, [Liquibase-formatted SQL](http://www.liquibase.org/documentation/sql_format.html) provides the standard changeSet tracking used in any changelog format, but lets the DBA specify the exact SQL you want.

### Manually verify the database changes with each release

Liquibase supports an "[updateSql](http://www.liquibase.org/documentation/sql_output.html)" command that will not actually update the database, but instead output the SQL that will run. That script can be read and verified to ensure everything is correct and performing as expected.

Once everything is correct, DBAs can either run a Liquibase update, or run the script through their favorite tools. The script will include the [DATABASECHANGELOG](http://www.liquibase.org/documentation/databasechangelog_table.html) inserts so everything will still be correctly tracked.

### Prepare for deployment problems

Releases don't always go as planned, so Liquibase ensures contingency plans are correct before each release. As teams get closer to releasing new application updates, besides checking the updateSql output, DBAs can also run [futureRollbackSql](http://www.liquibase.org/documentation/rollback.html) which will output the SQL needed to bring a fully updated database back to the current state. It will be much less stressful verifying the rollback logic BEFORE the release.

### A unified changelog for all your databases

DBAs try to keep all databases the same, but there are always differences. QA needs test data, production gets a couple extra tables, and the hot-backup server needs extra configuration. Liquibase supports contexts, labels, parameters, and preconditions that let database professionals address minor differences in scripts to adjust things as needed.

- [Contexts](http://www.liquibase.org/documentation/contexts.html) and labels target certain changeSets to run in only some environments.
- [Parameters](http://www.liquibase.org/documentation/changelog_parameters.html) perform simple text substitutions when things like schema names vary from database to database.
- [Preconditions](http://www.liquibase.org/documentation/preconditions.html) check the state of the database to dynamically determine if a changeSet should be executed or not.

Thanks to Liquibase's [cross-database support](http://www.liquibase.org/databases.html), DBAs can even use a single changelog that supports Oracle, MS SqlServer, Postgresql, and more.

### Enterprise features with Datical

If your DBAs determine their needs extend beyond all the great capabilities Liquibase offers check out Datical.  Datical builds upon Liquibase and lets DBAs:

- [Package database schema changes](http://www.datical.com/product/packaging-intelligence/) alongside application code
- Simulate or rehearse database deployments to [forecast potential errors](http://www.datical.com/product/validation-intelligence/)
- [Know the deployment status](http://www.datical.com/product/management-intelligence/) of every schema in the database
- Integrate with popular [DevOps tools](http://www.datical.com/integrations/)

More information on Datical DB can be [found here](http://www.datical.com/product-information/).


