---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0.4 Released
---
# Liquibase 3.0.4 Released

There was a null pointer issue that was tripping up enough people with 3.0.3 that I created a small 3.0.4 release to address the issue.


The issues fixed are:


- <a href="https://liquibase.jira.com/browse/CORE-1423">CORE-1423</a> - NPE in ForeignKeyComparator
- <a href="https://liquibase.jira.com/browse/CORE-548">CORE-548</a> - GenerateChangeLog generates invalid XML/SQL for mysql tables with autoincrement and compound PKs



with CORE-1423 being the one most people were running into.



You can download 3.0.4 from the <a href="https://download.liquibase.org/download-community/">Liquibase download page</a> and through the maven repository system once it gets mirrored through.
