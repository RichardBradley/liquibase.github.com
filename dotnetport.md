---
layout: default
title: Dotnetport
---

{{  :help-wanted.jpg|}}# LiquiBase .Net Port #

While there has been considerable interest in a .Net port of LiquiBase, there is not yet anything functional.  The goal of this page is to provide a general overview of the current state and roadmap for the port.  For more information, or to offer help, visit [[http://liquibase.org/forum/index.php?board=4.0|the LiquiBase .Net Port forum]].  

Our initial (and possibly long-term) goal, is to share as much code as possible between the .Net and the Java versions of LiquiBase.  There is a large amount of logic in LiquiBase that consists of "if creating a table of database type X, use this SQL" which is the same no matter what platform you are on.  In order to keep that logic as correct and complete as possible, we are writing as much of liquibase as possible in a cross-platform language.  After evaluating available options, we decided on using [[http://www.ikvm.net|IKVM.NET]] to compile Java bytecode to .Net.

There is enough work planned on the Java side of LiquiBase that the primary Java LiquiBase developers will not be able to dedicate much time beyond answering questions and general architecture and direction until the second half of 2010.

## Roadmap ##
  - Split LiquiBase into "Core", JVM-Specific, and CLR-Specific modules  **[DONE]**
  - Find core group of project leads //[TODO]//
  - Configure build environment to work well for .Net development  **[PARTIAL]**
  - Initialize ServiceLocator and other primary LiquiBase objects  **[PARTIAL]**
  - Rename ClrClasspathScanner to ClrServiceLocator and create unit tests around them to make sure that the ServiceLocator calls work correctly.  Once done, you should be able to look up liquibase.database.Database and liquibase.change.Change implementations.  ServiceLocation.java will need to modified based on your new class name.
  - Implement DatabaseConnection, ChangeLogParser, and Database Metadata reading using CLR native libraries  **[PARTIAL]**
  - Improve, rename, and fully implement the DatabaseConnection
  - Be able to call DatabaseFactory.getInstance().getDatabase(yourLiquibaseConnectionObject).checkDatabaseChangeLogTable() and have it create the databasechangelog table if it does not exists, and just return if it does not.
  - Run LiquiBase unit/integration tests in .Net
  - Iterate bug fixes and feature implementation until feature-complete with Java version.

## Getting Started ##

Note: Please improve this documentation as you can

### Git ###

Source for LiquiBase can be checked out from **https://github.com/liquibase/liquibase**


### Compiling the Java Library ###

Since IKVM compiles java bytecode (not source files) to .Net IL, you need to have enough of a java dev environment to make changes as necessary and recompile the core library.

You'll need to download and install :
  * [[http://java.sun.com/javase/downloads/widget/jdk6.jsp|Java Development Kit]]
  * [[http://maven.apache.org/|Maven]] which we use as our build script.
Just unzip the file to where you want it installed
  * [[http://ikvm.net|Ikvm]]Just unzip the file to where you want it installed.
  * [[http://eclipse.org|Eclipse]] or [[http://intellij.com|Intellij]]

As the .Net port matures, we will publish a pre-compiled, pre-IKVM-ed build which will remove the need for any Java environments for development.

## .Net Codebase ##

In the LiquiBase repository, there is a core-clr folder with the .net implementation code, including a is a visual studio solution file

### Naming Conventions ###

You will notice that all the core liqubase package and method names follow the
java conventions of lower case first letters.  Eventually we will want to have a .net facade to the library that will completely
hide the fact the underlying library for most uses.  I'm not sure how easy that will be to do, but it is something to keep in mind as you
are looking at return types and parameters etc.  We may want to eventually make a LiquiBase.LiquiBase C# class that works similar to the liquibase.LiquiBase Java class as the main entry point for integrating with LiquiBase
