---
layout: default
subnav: subnav_blog.md
title: Martin Fowler on Incremental Data Migration
---

Martin Fowler makes good points in his <a href="http://martinfowler.com/bliki/IncrementalMigration.html" target="_blank">Incremental Migration</a> Bliki post. Data migration is easy to push off or forget, and can often kill an otherwise great release--especially when valuable historical data gets lost due to a bad script.

I think reason many people put off data migration scripts is because they mistakenly think that they are for release day only. In reality, however, data migration is needed throughout the development process including updating developer databases and migrating integration test data.

Doing your data migrations incrementally and appending to your database change log on every refactoring will help you catch migration logic errors early and keep everyone's databases in sync.

To keep up with your database migration scripts, you need to use the update your test/code/test cycle to:

1. Write Test
1. Run Test
1. Code Change
1. *Append database changes to <a href="http://www.liquibase.org/manual/databasechangelog" target="_blank">change log</a>*
1. *Run Liquibase to update database*
1. Run Test, See Green

Making no database changes outside of your change log script and dev cycle will ensure that no changes get forgotten and that there are no differences between what happened on the developer's database and what happens on other developer's and production databases.

To integrate Liquibase into your build process, there are <a href="http://www.liquibase.org/manual/ant" target="_blank">Ant</a>, and <a href="http://www.liquibase.org/manual/maven" target="_blank">Maven</a> front-ends available. This will allow you to migrate your integration tests data sets before executing them and allow you to find errors in your database update logic with each run.<img src="http://feeds.feedburner.com/%7Er/liquibase/%7E4/329863436" alt="" width="1" height="1" />
