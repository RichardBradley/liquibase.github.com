---
layout: side-search
title: Liquibase Core Usage | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase Core Usage
## Major Concepts
### Changelog File
Developers store database changes in text-based files on their local development machines and apply them to their local databases. 
Changelog files can be arbitrarily nested for better management. The [changeLog page](/documentation/databasechangelog.html) has more details.

### Change Set
Change Sets are the *units of change* that Liquibase tracks execution of. Each changeSet is uniquely identified by the "author", "id", and "filename" attributes.
When Liquibase runs, it queries the `DATABASECHANGELOG` table for the changeSets that are marked as executed and then executes all changeSets in the changelog file 
that have not yet been executed. The [changeSet page](/documentation/changeset.html) has more details.


### Changes
Each changeSet contains one or more changes that describe a change/refactoring to apply to the database. Liquibase supports both descriptive changes 
that generate SQL for supported databases and raw SQL. Generally there should be just one change per changeSet to avoid failed autocommit statements 
that can leave the database in an unexpected state. The [changes section](/documentation/changes/index.html) has details on the many different change 
types available.


### Preconditions
Preconditions can be applied to either the changelog as a whole or individual changeSets. Preconditions control the execution of an update based on the 
state of the database, and can halt the update, skip a changeset, mark a changeset as run, or show a warning. See [the preconditions page](/documentation/preconditions.html) 
for more information.

### Contexts
Contexts can be applied to changeSets to control whether they are run in different environments. For example, some changeSets can be tagged as "production" and others as "test".
If no context is specified, the changeSet will run regardless of the execution context. Contexts can be specified as logical expressions in the changeSet to
more precisely control execution. Refer to [the contexts page](/documentation/contexts.html) for more details.

### Labels
Similar to contexts, labels can also be applied to changeSets to control which changesets are executed. In contrast to contexts that can be complex expressions, labels are a simple 
list on each changeSet. For labels though, complex expressions can be supplied at runtime. The combination of contexts and labels gives fine grained control over which changeSets
are executed. <Refer to [the labels page](/documentation/labels.html) for more details.

See [this blog post](/2014/11/contexts-vs-labels.html) for more details on the differences, similarities, and use cases for contexts and labels.


<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 350px; height: 50px">
<div class="cta cta--block"><a href="/get-started/lb-setup.html">Get Started: Setting Up Liquibase Tutorial ►</a></div></div>
