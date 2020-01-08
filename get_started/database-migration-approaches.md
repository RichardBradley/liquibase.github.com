---
layout: side-search
title: Docs | Database Change Management Approaches 
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Database Change Management: State and Migration Approaches
When it comes to managing databases, there are two types of deployment approaches:
- State-based (Declarative) deployment
- Migration-based (Imperative) deployment
Both approaches, at their root, are about the source of truth: the definition of how you want the database to look at the end or the scripts you produce to handle database change. 

## State-based Database Deployment
In a state-based database deployment, the ideal state of the database is defined and a tool is used to compare that ideal state 
against the current actual state of the database. Some tools, like Liquibase, can analyze the difference between the two and generates all the scripts to change the database. 

<div align="center">
      <img src="/images/quickstart/state-based-deploy.jpg" width="500px" alt="Diagram of state-based deployment">
</div>

## Migration-based Database Deployment
In a migration-based database deployment, specific migrations for altering the state of a database are described by the user. It's all about capturing individual change scripts during development. This approach helps teams more closely align with Agile and DevOps best practices:
- Small, incremental changes
- Use the same process for all code delivery
- Enables fast feedback loops
- Granular control of features
- Enables better testing
- Eliminates drift


<div align="center">
      <img src="/images/quickstart/migration-based-deploy.jpg" alt="Diagram of Migration-based deployment">
</div>

This approach allows you to iteratively modify the structure of your database over time, just as you do with your application code.

## Can both approaches be used?
**Yes!** While Liquibase does include comparative [(diff) capabilities](/documentation/diff.html), Liquibase is primarily a migration-based tool. The diff capabilities are mostly intended to assist with onboarding new projects or ensuring that your database migrations are applied correctly.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/index.html">Return to Get Started Home ►</a></div></div>
