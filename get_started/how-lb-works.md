---
layout: side-search
title: Docs | How Liquibase Works 
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# How Liquibase Works {#HowlbWorks}
<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/5AnCHzVa_7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<br>

In this tutorial, we will cover a few simple mechanisms Liquibase uses to track, version, and deploy changes to get an understanding of how Liquibase works.

<div class="tile-container">
    <div class="tile-item">
        <img src="{{site.baseurl}}{% link images/quickstart/changelog-icon.png %}" width="125px" align="center" alt="Changelog Icon">
    </div>

<div class="tile-item" markdown="1">

### Changelogs
Liquibase uses a *changelog* to explicitly list database changes in order. The *changelog* acts as a ledger of changes and contains a list of *changeSets* (units of change) that Liquibase can execute on a database.

View our [Database changelog File]({{site.baseurl}}{% link documentation/databasechangelog.md %}) and [changeSet Tag]({{site.baseurl}}{% link documentation/changeset.md %}) topics for more information.
</div>
</div>
<!-- >**Note:** It is a best practice to ensure that each changeSet is as atomic a change as possible to avoid failed statements from leaving the database in an unknown state; however, it is possible to treat a large SQL script as a single changeSet. -->

<div class="tile-container">
    <div class="tile-item" markdown="1">

### Tracking Tables
Liquibase tracks which *changeSets* have or have not been deployed in a tracking table called a `DATABASECHANGELOG`. If your database does not already contain a tracking table, Liquibase will create it for you. 

Liquibase also prevents conflicts from different callers' updates on a secondary table called `DATABASECHANGELOGLOCK`.

View our [DATABASECHANGELOG Table]({{site.baseurl}}{% link documentation/databasechangelog_table.md %}) and [DATABASECHANGELOCK Table]({{site.baseurl}}{% link documentation/databasechangeloglock_table.md %}) topics for more information.
</div>
<div class="tile-item">
    <img src="{{site.baseurl}}{% link images/quickstart/tables-icon.png %}" width="125px" align="center" alt="Changelog Icon">
</div>
</div>

<!--
>**Note:** It is possible to specify where (which catalog/schema) the tables should be created. -->
    
*changelogs* and tracking tables allow Liquibase to:
- **Track and version database changes** – Users know what changes have been deployed to the database and what changes have not yet been deployed.
- **Deploy changes** – Liquibase compares the *changelog* against the tracking table, and only deploys changes that have not been deployed to the database. 

Liquibase also has advanced features such as contexts, labels, and preconditions to precisely control when and where a *changeSet* is deployed.

>**Note:** To assist with projects where you are not starting with a blank database, Liquibase has a feature to [generate a changelog]({{site.baseurl}}{% link documentation/generating_changelogs.md %}) to represent the current state of the database schema.

### Summary
In this tutorial we covered:
-   Basic Liquibase mechanisms: *changelogs* & tracking tables.
-   How these mechanisms work to track, version, and deploy changes.

## **Next Up:** 
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/lb-first-steps.md %}">Liquibase First Steps ►</a></div></div>
