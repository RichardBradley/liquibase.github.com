---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.1 Released
---
Liquibase 1.1 has been released.  Major new features include:



- Support for additional databases: DB2, Derby, Sybase (not fully tested), and HSQL

- Support for "unsupported" databases

- <a href="http://www.liquibase.org/manual/latest/diff.html">Database Diff Tool</a>

- <a href="http://www.liquibase.org/manual/latest/generate_changelog.html">Database Creation Script Generator</a>

- new DBMS attribute on change set tag that allows you to specify what databases to run the change set against

- "verify" command that checks for change log problems without attempting to execute any

- "status" command that shows information on unrun change sets

- Handle date/time and numeric values better on inserts and setting default values

- Bug Fixes

Upgrading is simply a matter of replacing the liquibase.jar file.  To take advantage of newer change log features, change your XSD declaration to:

    <databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.1
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.1.xsd">

<a href="http://www.liquibase.org/download.html">Download Liquibase 1.1</a>

