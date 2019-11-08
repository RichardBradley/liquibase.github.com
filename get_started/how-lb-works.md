---
layout: side-search
title: How Liquibase Works
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# How Liquibase Works {#HowlbWorks}
At its core, Liquibase relies on a simple mechanism to track, version, and deploy changes:
- Liquibase uses a change log (which is a ledger of changes) to explicitly list database changes in a specific order. Each change in the change log is a “change set”. Change logs can be arbitrarily nested to aid in organization and management of database migrations.
    >**Note:** It is a best practice to ensure that each change set is as atomic a change as possible to avoid failed statements from leaving the database in an unknown state; however, it is possible to treat a large SQL script as a single change set.
- Liquibase uses a tracking table (specifically called ‘DATABASECHANGELOG’) which resides on each database and which tracks which change sets in the change log have been deployed.
    >**Note:** If there is no tracking table on a database that Liquibase is acting upon, Liquibase will create a tracking table.
    >**Note:** To assist with projects where you are not starting with a blank database, Liquibase has a feature to generate a change log to represent the current state of the database schema.

With the ledger and the tracking table, Liquibase is able to:
- Track and version database changes – Users know exactly what changes have been deployed to the database and what changes have not yet been deployed.
- Deploy changes – specifically, by comparing what is in the ledger against what is in the tracking table, Liquibase is able to deploy only the changes that have not yet been deployed previously to the database.
    >**Note:** Liquibase has advanced features such as contexts, labels, and preconditions to precisely control when and where changeSets are deployed.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/version_control_info.html">Get Started: Using Source Control ►</a></div></div>