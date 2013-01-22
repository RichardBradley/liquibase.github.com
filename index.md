---
layout: default
title: FAQ
---

====== Database Change Management ======

{{ :sql-database.jpg}} **You never develop code without version control, why do you develop your database without it?**

Liquibase is an open source (Apache 2.0 Licensed), database-independent library for tracking, managing and applying database changes. It is built on a simple premise: **All database changes are stored in a human readable yet trackable form and checked into source control.**

Liquibase Supports:

    * [[http://liquibase.org/extensions|Extensibility]]
    * Merging changes from multiple developers
    * Code branches
    * [[databases|Multiple Databases]]
    * Managing production data as well as various test datasets
    * Cluster-safe database upgrades
    * Automated updates or generation of SQL scripts that can be approved and applied by a DBA
    * [[manual/rollback|Update rollbacks]]
    * Database "[[manual:diff|diff]]"s
    * Generating starting change logs from existing databases
    * Generating [[manual:dbdoc|database change documentation]]

====== Getting Started ======

[[download|Download Liquibase]] and read the [[quickstart|Quick-Start Guide]].  

For more information, you can read the [[manual/home]], [[FAQ]], watch the [[training|training videos]], and read 3rd party [[articles]]. If you have questions, visit the [[community|forums]] 


====== .NET Port ======

A .NET Port of Liquibase is in the very early stages of forming.  If you would like more information or to help out, visit the [[dotnetport|.Net Port page]]

~~NOTOC~~