---
layout: default
title: Architecture
---

# Liquibase Architecture #

The Liquibase migrator is designed to require no dependencies to run and be easy to integrate into various build and deployment processes.

The primary worker class for Liquibase is [liquibase.Liquibase](http://www.liquibase.org/api/liquibase/Liquibase.html). All the various ways of interacting with Liquibase ([command line](http://www.liquibase.org/api/liquibase/commandline/CommandLineFileOpener.html), [Ant](http://www.liquibase.org/api/liquibase/ant/DatabaseMigratorTask.html), etc.) are thin wrappers around the Liquibase class.

Each database refactoring/change is implemented by a class in the [liquibase.change](http://www.liquibase.org/api/liquibase/change/package-summary.html) package. As the Liquibase migrator runs, it uses a SAX XML parser to parse the change logs, instantiate the necessary change class, and run or save the corresponding SQL.

If you have additional questions about Liquibase's architecture, please contact us via the [mailing list](../community/index.html).
