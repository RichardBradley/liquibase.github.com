---
layout: side-search
title: Liquibase Setup | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Liquibase Setup
Before attempting any of the step-by-step tutorials, please prepare your environment with the setup instructions.
- [Windows Installation Instructions](/documentation/installation-windows.html)
- [Linux/Unix/Mac Installation Instructions](/documentation/installation-linux-unix-mac.html)
- [Liquibase Installation with Maven on Linux/Unix/Mac](/documentation/installation-linux-unix-mac-with-maven.html)

## Track, Version, and Deploy Database Changes with Liquibase

When working with Liquibase, changes can either be defined with [Liquibase functions](/get-started/quickstart_lb.html) or 
with [SQL](/get-started/quickstart_sql.html). Importantly, these modes are not mutually exclusive, and can be used in conjunction, 
providing considerable flexibility in how database changes are defined and deployed. For changes defined with Liquibase functions, Liquibase 
generates SQL appropriate for the target database. This can be helpful when:
- Supporting multiple different database backends. This is a common use case if you are a software vendor looking to avoid writing the same database migrations simply to support different database platforms.
- Enabling developers who are not proficient or experienced with SQL to define database changes. Instead of SQL, the database migrations can be defined in XML, JSON, or YAML.
- Standardizing database changes. Liquibase will generate syntactically and stylistically consistent SQL, ensuring, as an example, that all ‘CREATE TABLE’ migrations have the same style and pattern.

Alternatively, Liquibase works directly with user provided database migrations. This can be helpful when:
- Making changes that are not Liquibase functions. Changes that are custom or specific to a database – for example, Oracle Nested Tables – are not typically Liquibase functions.
- Enabling developers highly proficient in SQL who strongly prefer working directly with SQL. It’s a common misconception that Liquibase only supports “XML database migrations”. The 
  reality is that Liquibase can absolutely support plain SQL scripts!

> **Note:** Liquibase Pro adds change types for defining procedural database code to Liquibase functions. However, unlike other changes that are Liquibase functions, 
these procedural database code changes, such as `CREATE FUNCTION`, require database platform specific SQL (for example, on Oracle, the change would require PL/SQL). 
These new change types can be helpful in providing better visibility into database-specific changes from directly inspecting the change log.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get-started/lb-setup-tutorial.html">Get Started Tutorial: Setting up Liquibase ►</a></div></div>
