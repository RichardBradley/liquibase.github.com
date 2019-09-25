---
layout: default
title: Workspace
---

# Liquibase SDK Workspace

The Liquibase SDK ships with a LIQUIBASE_HOME/sdk/workspace directory that is pre-configured as an easy starting point for testing Liquibase and Liquibase extensions.

Normal usage of the workspace directory is to change to the workspace directory, then run `..\..\liquibase ARGS` and `..\liquibase-sdk ARGS` commands.

__Liquibase SDK is available in Liquibase 3.2.0+__

## Standard Workspace Contents

### liquibase.properties

The workspace directory ships with liquibase.h2.properties, liquibase.hsql.properties and liquibase.derby.properties files in the workspace directory which can be used for testing
embedded databases. All three are configured to use database files in LIQUIBASE_HOME/tmp/DB_NAME.


### changelog

LIQUIBASE_HOME/sdk/changelog contains a starting `com/example/changelog.xml` file that can be used as a starting point for testing. 


The com/example/changelog.xml uses a variety of features including:

* multiple authors
* runAlways
* dbms filtering
* include
* includeAll
* relativeToChangelogFile
* formatted SQL changelog format
* YAML changelog format
* rollback logic

The created database structure includes:

* A debug_info table for easy message logging
* An employee table with an address table that references it
* A simple shopping cart structure with item, account and cart_item tables
* A simple newspaper structure with article and page tables

## Tips

* Zip or tar the the workspace directory for future reference and recovery
* Add the workspace directory to your IDE project for easy access
* Use the standard changelog structure as a starting point for reproducing and submitting Liquibase bugs