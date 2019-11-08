---
layout: side-search
title: Liquibase Core Usage
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase Core Usage
## Major Concepts
### Changelog File
Developers store database changes in text-based files on their local development machines and apply them to their local databases. Changelog files can be arbitrarily nested for better management. See for more information.

### Change Set
Change Sets are uniquely identified by the "author" and "id" attribute along with with the location of the changelog file and are the units Liquibase tracks execution of. When Liquibase runs, it queries the DATABASECHANGELOG table for the changesets that are marked as executed and then executes all changesets in the changelog file that have not yet been executed. See for more information.

### Changes
Each changeset generally contains a change which describes the change/refactoring to apply to the database. Liquibase supports both descriptive changes that generate SQL for supported databases and raw SQL. Generally there should be just one change per changeset to avoid failed autocommit statements that can leave the database in an unexpected state. See for more information.

### Preconditions
Preconditions can be applied to either the changelog as a whole or individual change sets. If a precondition fails, Liquibase will stop execution. See for more information

### Contexts
Contexts can be applied to changesets to control which are ran in different environments. For example, some changesets can be tagged as "production" and others as "test". If no context is specified, the changeset will run regardless of the execution context. See for more information.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 350px; height: 50px">
<div class="cta cta--block"><a href="/get_started/lb-setup.html">Get Started: Setting Up Liquibase Tutorial ►</a></div></div>