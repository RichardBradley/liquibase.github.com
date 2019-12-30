---
layout: side-search
title: How Liquibase Works | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# How Liquibase Works {#HowlbWorks}
<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/5AnCHzVa_7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<br>

In this tutorial, we will cover a few simple mechanisms Liquibase uses to track, version, and deploy changes to get an understanding of how Liquibase works.

<div class="tile-container">
    <div class="tile-item">
        <img src="/images/quickstart/changelog-icon.png" width="125px" align="center" alt="Changelog Icon">
    </div>

<div class="tile-item" markdown="1">

### Changelogs
Liquibase uses a *changelog* to explicitly list database changes in order. The *changelog* acts as a ledger of changes and contains changesets (units of change) that Liquibase can execute on a database.

View our [Database Changelog File](/documentation/databasechangelog.html) and [Changeset Tag](/documentation/changeset.html) topics for more information.
</div>
</div>
<!-- >**Note:** It is a best practice to ensure that each changeSet is as atomic a change as possible to avoid failed statements from leaving the database in an unknown state; however, it is possible to treat a large SQL script as a single changeSet. -->

<div class="tile-container">
    <div class="tile-item" markdown="1">

### Tracking Tables
Liquibase tracks which changeSets have or have not been deployed in a tracking table called a `DATABASECHANGELOG`. If your database does not already contain a tracking table, Liquibase will create it for you. 

Liquibase also prevents conflicts from different callers updates on a secondary table called `DATABASECHANGELOGLOCK`.

View our [DATABASECHANGELOG Table](/documentation/databasechangelog_table.html) and [DATABASECHANGELOCK Table](/documentation/databasechangeloglock_table.html) topics for more information.
</div>
<div class="tile-item">
    <img src="/images/quickstart/tables-icon.png" width="125px" align="center" alt="Changelog Icon">
</div>
</div>

<!--
>**Note:** It is possible to specify where (which catalog/schema) the tables should be created. -->
    
Changelogs and tracking tables allow liquibase to:
- **Track and version database changes** – Users know what changes have been deployed to the database and what changes have not yet been deployed.
- **Deploy changes** – Liquibase compares the *changelog* against the tracking table, and only deploys changes that have not been deployed to the database. 

Liquibase also has advanced features such as contexts, labels, and preconditions to precisely control when and where changeSets are deployed.

>**Note:** To assist with projects where you are not starting with a blank database, Liquibase has a feature to [generate a changelog](/documentation/generating_changelogs.html) to represent the current state of the database schema.

### Summary
In this tutorial we covered:
-   Basic Liquibase mechanisms: changelogs & tracking tables.
-   How these mechanisms work to track, version, and deploy changes.

## **Next Up:** 
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/lb-first-steps.html">Liquibase First Steps ►</a></div></div>
