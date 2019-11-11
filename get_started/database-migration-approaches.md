---
layout: side-search
title: Database Migration Approaches
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Database Change Management: State and Migration Approaches
When it comes to managing databases, there are two types of deployment approaches:
- State-based (Declarative) deployment
- Migration-based (Imperative) deployment

## State-based Database Deployment
In a state-based database deployment, the ideal state of the database is defined, and a tool is used to compare that ideal state 
against the current actual state of the database. Liquibase then analyzes the difference between the two and generates all the migration scripts to change the database.

<div align="center">
      <img src="/images/quickstart/state-based-deploy.jpg" width="500px" alt="Diagram of state-based deployment">
</div>

## Migration-based Database Deployment
In a migration-based database deployment, specific migrations for altering the state of a database are described by the user.

<div align="center">
      <img src="/images/quickstart/migration-based-deploy.jpg" alt="Diagram of Migration-based deployment">
</div>

This approach allows you to iteratively modify the structure of your database over time, just as you do with your application code.

## Can both approaches be used?
**Yes!** While Liquibase does include comparative (diff) capabilities, Liquibase is primarily a migration-based tool. The diff capabilities are 
mostly intended to assist with onboarding new projects or checking that your database migrations were applied correctly.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/how-lb-works.html">Get Started: How Liquibase Works ►</a></div></div>
