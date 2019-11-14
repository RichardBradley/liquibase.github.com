---
layout: side-search
title: Getting Started | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Getting Started with Liquibase
This getting started guide provides a variety of topics which are intended to orient you to Liquibase. The getting started guide does not cover every feature available in Liquibase, and is focused on ensuring that you understand the core concepts and are able to address basic use cases.

## Database Migration Approaches
When it comes to managing databases, there are two types of deployment approaches:
- State-based (Declarative) deployment
- Migration-based (Imperative) deployment

View our [Database Migration Approaches](/get_started/database-migration-approaches.html) topic for more information.

## How Liquibase Works
At its core, Liquibase relies on a simple mechanism to track, version, and deploy changes. View our topic on [How Liquibase Works](/get_started/how-lb-works.html) for more information.

## Using Version Control Systems with Liquibase
Liquibase utilizes a variety of text-based, human-readable, auto-mergeable formats which allows you to use any version control system of your choice. View our [Using Version Control Systems with Liquibase](/get_started/version_control_info.html) topic for more information.

## Liquibase Core Usage Concepts 
There are are several major concepts you need to familiarize yourself with prior to getting started with your set up. View our [Liquibase Core Usage](/get_started/lb-core-usage-concepts.html) topic for more information.

## Liquibase Setup
When working with Liquibase, changes can either be defined with Liquibase functions or with SQL. These modes are not mutually exclusive and can be used in conjuction with one another to track, version, and deploy database changes. 

View our [Liquibase Setup](/get_started/lb-setup.html) topic for more information about setup, tracking, versioning, and deploying database changes.

## Liquibase Tutorials
Check out the following Liquibase tutorials and walkthroughs to help you get started!
- [Liquibase Setup Tutorials](/get_started/lb-setup-tutorial.html)
- [Using Liquibase Functions Tutorial](/get_started/quickstart_lb.html)
- [Using SQL Scripts Tutorial](/get_started/quickstart_sql.html)

If you haven't installed Liquibase yet, please visit our [Liquibase Download Page](https://download.liquibase.org/).

## What is Liquibase?
Liquibase is an open-source database schema change management solution that enables you to manage revisions of your database changes easily. Liquibase makes it easy for anyone involved in the application release process to:
- Eliminate errors and delays when releasing databases.
- Deploys and Rollback changes for specific versions without needing to know what has already been deployed.
- Deploy database and application changes together so they always stay in sync.

### How does Liquibase do this?
In Liquibase, database changes are managed and organized as “changesets.” A master file lists all your changesets (directly as scripts) to keep track of where they are located, which changesets have already run, and which ones need to be run, so your database structure revision gets deployed.

### What is the difference between Liquibase Community and Liquibase Pro?
Liquibase Pro uses the same open-source code base as Liquibase Community but enhances and extends it with additional functionality and fantastic customer support. Liquibase Pro features give you the ability to:
- Use additional change types not available in the community edition.
- Reverse engineer database changes including support for procedural code objects (such as triggers, functions, & procedures) using generateChangeLog, snapshot, diff, and diffChangeLog commands.

Liquibase Pro also provides you with expert help from our Liquibase Support Engineers. With Liquibase Pro Support, you will receive:
- Installation support so you can get up and running quickly.
- Technical support to help with fixes when things break.
- Consulting support for special use cases.

For more information about the differences between Liquibase Community and Liquibase Pro, visit [the download page.](https://download.liquibase.org/)

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/database-migration-approaches.html">Get Started: Database Migration Approaches ►</a></div></div>

{% include tracking-codes/hotjar.tracking-code.html %}
