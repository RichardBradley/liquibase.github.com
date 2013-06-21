---
layout: default
title: Architecture
---

# Liquibase Code Organization

## Repository Structure

All Liquibase code is accessible from [github.com/liquibase](http://github.com/liquibase).

The [github.com/liquibase/liquibase](http://github.com/liquibase/liquibase) repository contains the core Liquibase library. This includes
* Code for supported Databases
* Standard Change/Refactoring code
* Code for running Liquibase through the command prompt, Ant, Maven, a servlet container, and Spring.
* Code for parsing and writing XML, YAML, JSON, and SQL changelog formats

From [github.com/liquibase](http://github.com/liquibase) you can also access the code for Liquibase-managed extensions such as [github.com/liquibase-mssql](http://github.com/liquibase/liquibase-mssql)

### Liquibase Core vs. Liquibase Extensions

Liquibase is designed to be a small core of functionality that will work in a standard way across all database types, but with the ability to extend, enhance and even replace that functionality as needed.
More information about writing extensions can be found at the [extension portal](../extensions/index.html).

We take advantage of that design even with our code by keeping database-specific functionality and non-common logic in extensions rather than continuing to add additional modes and flags to the base library.
For example, there is not support for managing packages and triggers across all database types, but if we want to introduce that support for Oracle we can create a liquibase-oracle extension that supports that.
Similarly, if want to provide a way to ignore all checksums, rather than build that potentially bad practice into the main codebase we will create an extension.

There is a fine line sometimes between what should go in core and what should be an extension, and features do migrate in and out of core as well. If you have questions on where functionality is or should go,
you can always [use the developer forums](../community/index.html).

## Top level Directory Structure

The main Liquibase repository contains 4 top level directories to divide the codebase

1. **liquibase-core** contains all code for the standard Liquibase functionality
1. **liquibase-integration-tests** contains only tests that actually run against databases.
1. **liquibase-maven-plugin** contains code for Maven support.
1. **liquibase-osgi** contains an osgi compatible BundleActivator for Liquibase

## Project configurations(s)

Liquibase uses Maven as its build system, with pom files corresponding to each of the top level directories, plus a "parent" pom in the root directory.
Dependencies between top-level directories and 3rd party jar files can be found within the maven pom.xml files.

For those using IntelliJ IDEA, there there is a project configuration in .idea directory format as part of the repository.
The intellij config is built directly from the maven projects.

For those using Eclipse, you can automatically create your project config from the Maven pom.xml files.

## General Module Code Structure

Each of the top-level directories/modules follows the standard maven source layout with a "src" dir containing both a "main" and a "test" directory.
Within both main and test, there is a "java" directory which contains the java code and a "resources" directory for non-source code files.

## Liquibase-Core Code Structure

In the liquibase-core module, all code exists under the "liquibase" package.
There is a second-level package for each of the major code units withing Liquibase such as "liquibase.change" and "liquibase.parser".

Because most packages support extensions, you will normally find a \*Factory class which loads the available classes. Each package will normally have a "core" 3rd level package that contains the built-in standard functionality.
Interfaces and other classes needed for given feature are generally within the second level package.

For example:
* The liquibase-core/src/main/java/liquibase/change directory contains all "change" related logic
* liquibase/change contains ChangeFactory.java which will find all available Change implementations.
* liquibase/change contains Change.java, AbstractChange.java, CheckSum.java and other classes used by core and extension Change classes.
* There is a liquibase-core/src/main/java/liquibase/change/core directory which contains all the built-in Change implementations such as CreateTableChange.java and DropViewChange.java

For more information, see the [javadoc](../javadoc/index.html) or [check out the code](http://github.com/liquibase/liquibase).
