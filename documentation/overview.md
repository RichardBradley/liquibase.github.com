---
layout: default
title: Overview
---

# Liquibase Overview #

With Liquibase, developers store database changes in XML-based files on their local development machines and apply them to their local databases. As those changes get committed to the source control system and are distributed to other developers, changes are applied to those local developer databases, to the integration databases, staging databases, and even to live production databases. Changes may be applied through several methods, either via an Ant or Maven task, a command line program, or automatically during application or application server startup.

The Liquibase Migrator is the core system that enables easy development of database applications using an agile methodology. As changes are applied to the local database during development, those revisions are stored in an XML change log file. Each entry in the change log contains an "id" and an "author" attribute. Those two attributes plus the name and location of the change file itself form a unique identifier for a particular change. When the migrator executes, it compares entries in a DatabaseChangeHistory table defined in the database. This table contains the "id", "author", and "file" identifier of all previous changes. If a change in the log file is not in the DatabaseChangeHistory table, the Migrator executes and records the change which will be skipped during future runs.

The change log files can be nested together via an INCLUDE tag. This is useful for breaking up changes by component, project, iteration, or whatever method works best for your project.

The motivation for creating the tool was further fueled after reading the book [Refactoring Databases: Evolutionary Database Design](http://www.jdoqocy.com/click-2238089-10387773?url=http%3A%2F%2Fwww.buy.com%2Fretail%2FProduct.asp%3Fsku%3D31259803%26SearchEngine%3DCJaffiliate%26Type%3DCJ%26Keyword%3D31259803%26Category%3DBook&cjsku=31259803) and finding that there were no tools available that really solved the problem of refactoring databases in development, and being able to apply those same changes through the live production environment deployment. While there are many attempts, most break down when working with a group of developers, using code branches, or needing to support multiple different DBMS systems.
