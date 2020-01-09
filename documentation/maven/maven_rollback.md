---
layout: default
title: Docs | Maven rollback 
subnav: subnav_maven.md
---

> *Note* that there are [differences in how rollback works with Maven vs. how it works from the CLI](/documentation/maven/maven_rollback.html#differences-in-controlling-rollback-behavior)

{% include_relative generated/rollback-mojo.html %}
<br>

## Differences in Controlling Rollback Behavior

Behavior | CLI Command | Maven 
 ------ | ------ | ------ 
rollback by count | rollbackCount 3 | rollback goal, liquibase.rollbackCount=3 property 
rollback by tag | rollback <tag> | rollback goal, liquibase.rollbackTag and liquibase.tag properties 
rollback to date | rollbackToDate <date/time> | rollback goal, liquibase.rollbackDate property 

