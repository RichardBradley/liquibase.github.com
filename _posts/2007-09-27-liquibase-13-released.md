---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.3 Released
---
# Liquibase 1.3 Released

Liquibase 1.3 has been released. Major features include:

- Added <a href="https://www.liquibase.org/documentation/changes/custom_change.html">`custom` change</a>
- Added <a href="https://www.liquibase.org/documentation/changes/execute_command.html">`executeCommand` change</a>
- Added <a href="https://www.liquibase.org/documentation/changes/create_procedure.html">`createProcedure` change</a>
- Added <a href="https://www.liquibase.org/documentation/preconditions.html">sqlCheck precondition</a>
- Added <a href="https://www.liquibase.org/documentation/dbdoc.html">dbdoc documentation generator</a>
- Added Spring migrator
- Added tablespace support to createTable, createIndex, addPrimaryKey, and addUniqueConstraint
- Added defaultCascade attribute to addForeignKeyConstraint
- Can have multiple comma-separated <a href="https://www.liquibase.org/documentation/contexts.html">contexts</a> per change set
- Database Diff checks column types and nullability
- DiffChangeLog will write to a file specified with the `--changeLog` flag
- Database Diff checks views
- Added ability to control strippig of comments and splitting of lines in  tag
- Added Postgres support to auto-increment related refactorings

Many bugs have been fixed as well, including:

- Restored Java 6 Support
- Absolute path changelogs are handled correctly on Windows
- Other bug fixes

Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage of newer change log features, change your XSD declaration to:

    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.3";
        xsi="http://www.w3.org/2001/XMLSchema-instance";
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.3
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.3.xsd">

Download Liquibase 1.3 from: <a href="https://download.liquibase.org/download-community/">https://download.liquibase.org/download-community/</a>

