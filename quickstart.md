---
layout: side-search
title: Getting Started
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Getting Started with Liquibase
This getting started guide provides a variety of topics which are intended to orient you to Liquibase. The getting started guide does not cover every feature available in Liquibase, and is focused on ensuring that you understand the core concepts and are able to address basic use cases.

## Table of Contents
- <a href="/get_started/database-migration-approaches.html">Database Migration Approaches</a>
- <a href="/get_started/how-lb-works.html">How Liquibase Works</a>
- <a href="/get_started/version_control_info.html">Using Version Control Systems with Liquibase</a>
- <a href="/documentation/lb-core-usage-concepts.html">Liquibase Core Usage Concepts</a>
- <a href="/get_started/lb-setup.html">Liquibase Setup</a>
- <a href="/get_started/lb-setup-tutorial.html">Liquibase Setup Tutorials</a>
    - <a href="/get_started/quickstart_sql.html">Using SQL Scripts Tutorial</a>
    - <a href="/get_started/quickstart_lb.html">Using Liquibase Functions Tutorial</a>

If you haven't installed Liquibase yet, please visit our [Liquibase Download Page](https://download.liquibase.org/)

## What is Liquibase?
Liquibase is an open-source database schema change management solution that enables you to manage revisions of your database changes easily. Liquibase makes it easy for anyone involved in the application release process to:
- Eliminate errors and delays when releasing databases.
- Deploys and Rollback changes for specific versions without needing to know what has already been deployed.
- Deploy database and application changes together so they always stay in sync.

### How does Liquibase do this?
In Liquibase, database changes are managed and organized as “changesets.” A master file lists all your changesets (directly as scripts) to keep track of where they are located, which changesets have already run, and which ones need to be run, so your database structure revision gets deployed.

### What is the difference between Liquibase Community and Liquibase Pro?
Liquibase Pro uses the same open-source code base as Liquibase Community but enhances and extends it with additional functionality and fantastic customer support. Liquibase Pro features give you the ability to:
- Reverse engineer database changes including support for procedural code objects (such as triggers, functions, & procedures) using generateChangeLog, snapshot, diff, and diffChangeLog commands.
- Visualize database change deployments through a centralized web server for each environment.

Liquibase Pro also provides you with expert help from our Liquibase Support Engineers. With Liquibase Pro Support, you will receive:
- Installation support so you can get up and running quickly.
- Technical support to help with fixes when things break.
- Consulting support for special use cases

For more information about the differences between Liquibase Community and Liquibase Pro, visit: [Liquibase.org](https://www.liquibase.org/)

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/database-migration-approaches.html">Get Started: Database Migration Approaches ►</a></div></div>

{% include tracking-codes/hotjar.tracking-code.html %}
