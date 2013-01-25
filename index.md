---
layout: default
title: Liquibase
---

# Database Change Management #

{{ :sql-database.jpg}} **You never develop code without version control, why do you develop your database without it?**

Liquibase is an open source (Apache 2.0 Licensed), database-independent library for tracking, managing and applying database changes. It is built on a simple premise: **All database changes are stored in a human readable yet trackable form and checked into source control.**

Liquibase Supports:

    * [Extensibility](http://liquibase.org/extensions)
    * Merging changes from multiple developers
    * Code branches
    * [Multiple Databases](databases.html)
    * Managing production data as well as various test datasets
    * Cluster-safe database upgrades
    * Automated updates or generation of SQL scripts that can be approved and applied by a DBA
    * [Update rollbacks](manual/rollback.html)
    * Database "[diff](manual:diff)"s
    * Generating starting change logs from existing databases
    * Generating [database change documentation](manual:dbdoc)

# Getting Started #

[Download Liquibase](download.html) and read the [Quick-Start Guide](training.html).

For more information, you can read the [manual](manual/home.html),[FAQ](faq.html) watch the ["training videos"](training.html), and read 3rd party [articles](articles.html). If you have questions, visit the [forums](forums.html))


# .NET Port #

A .NET Port of Liquibase is in the very early stages of forming.  If you would like more information or to help out, visit the [.Net Port page](dotnetport.html)