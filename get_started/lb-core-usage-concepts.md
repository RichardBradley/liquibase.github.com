---
layout: side-search
title: Docs | Liquibase Core Usage 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase Core Usage
## Major Concepts
### Changelog File
Developers store database changes in text-based files on their local development machines and apply them to their local databases. These
changelog files are stored in source control to enable collaboration. The changelog can be used to update all the different database
environments that a team uses - from local development databases, to test, staging, and production. 
Changelog files can be arbitrarily nested for better management. The [changeLog page]({{site.baseurl}}{% link documentation/databasechangelog.md %}) has more details.

### Change Set
Change Sets are the *units of change* that Liquibase tracks execution of. Each changeSet is uniquely identified by the "author", "id", and "filename" attributes.
When Liquibase runs, it queries the `DATABASECHANGELOG` table for the changeSets that are marked as executed and then executes all changeSets in the changelog file 
that have not yet been executed. The [changeSet page]({{site.baseurl}}{% link documentation/changeset.md %}) has more details.


### Changes
Each changeSet contains one or more changes that describe a change/refactoring to apply to the database. Liquibase supports both descriptive changes 
that generate SQL for supported databases and raw SQL. Generally there should be just one change per changeSet to avoid failed autocommit statements 
that can leave the database in an unexpected state. The [changes section]({{site.baseurl}}{% link documentation/changes/index.md %}) has details on the many different change 
types available.


### Preconditions
Preconditions can be applied to either the changelog as a whole or individual changeSets. Preconditions control the execution of an update based on the 
state of the database, and can halt the update, skip a changeset, mark a changeset as run, or show a warning. See [the preconditions page]({{site.baseurl}}{% link documentation/preconditions.md %}) 
for more information.

### Contexts
Contexts can be applied to changeSets to control whether they are run in different environments. For example, some changeSets can be tagged as "production" and others as "test".
If no context is specified, the changeSet will run regardless of the execution context. Contexts can be specified as logical expressions in the changeSet to
more precisely control execution. Refer to [the contexts page]({{site.baseurl}}{% link documentation/contexts.md %}) for more details.

### Labels
Similar to contexts, labels can also be applied to changeSets to control which changesets are executed. In contrast to contexts that can be complex expressions, labels are a simple 
list on each changeSet. For labels though, complex expressions can be supplied at runtime. The combination of contexts and labels gives fine grained control over which changeSets
are executed. Refer to [the labels page]({{site.baseurl}}{% link documentation/labels.md %}) for more details.

See [this blog post](/2014/11/contexts-vs-labels.html) for more details on the differences, similarities, and use cases for contexts and labels.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/index.md %}">Return to Get Started Home ►</a></div></div>
