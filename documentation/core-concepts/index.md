---
layout: default
title: Docs | Core Concepts Home 
subnav: subnav_documentation.md
includeDaticalBox: true
---
# Liquibase Core Concepts
Performing database schema migrations is an essential task for nearly every software project. Learn some basic concepts of Liquibase, like changesets, how to use different formats for your changelog, and how different tables work. You can also learn more about intermediate-level concepts like parameters and how to use preconditions.

## Liquibase Basics
- <a href="/documentation/running.html">Overview of how to run Liquibase</a>
    - <a href="/documentation/command_line.html">Running Liquibase from the Command Line</a>
    - <a href="/documentation/ant/index.html">Running Liquibase from Ant</a>
    - <a href="/documentation/maven/index.html">Running Liquibase from Maven</a>
- <a href="/documentation/databasechangelog.html">The changelog - master list of all the changes to your database</a>
    - <a href="/documentation/xml_format.html">XML Format</a>
    - <a href="/documentation/yaml_format.html">YAML Format</a>
    - <a href="/documentation/json_format.html">JSON Format</a>
    - <a href="/documentation/sql_format.html">SQL Format</a>
    - <a href="/documentation/other_formats.html">Other Formats</a>
- <a href="/documentation/changeset.html">Change Sets - how changes are organized in the changelog</a>
- <a href="/documentation/databasechangelog_table.html">DATABASECHANGELOG table - how changes are tracked in each database</a>
- <a href="/documentation/databasechangeloglock_table.html">DATABASECHANGELOGLOCK table - how Liquibase prevents duplicate executions</a>

## Liquibase Intermediate
- <a href="/documentation/changelog_parameters.html">Changelog Parameters - customizing the changelog at update time.</a>
- <a href="/documentation/changes/index.html">Making changes to your schema - Refactoring Commands</a>
- <a href="/documentation/include.html">Using the include tag to break up your changelog</a>
- <a href="/documentation/includeall.html">Using the includeAll tag to use directories full of XML or SQL</a>
- <a href="/documentation/contexts.html">Contexts - limiting which changesets are deployed</a>
- <a href="/documentation/labels.html">Labels - limiting which changesets are deployed</a>

- <a href="/documentation/preconditions.html">Preconditions</a>

