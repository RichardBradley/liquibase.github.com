---
layout: default
title: Maven rollback | Liquibase Docs
subnav: subnav_maven.md
---
<div markdown="1">
<iframe class="maven" src="generated/rollback-mojo.html"></iframe>
</div>
<br>

## Differences in Controlling Rollback Behavior

Behavior | CLI Command | Maven 
 ------ | ------ | ------ 
rollback by count | rollbackCount 3 | rollback goal, liquibase.rollbackCount=3 property 
rollback by tag | rollback <tag> | rollback goal, liquibase.rollbackTag and liquibase.tag properties 
rollback to date | rollbackToDate <date/time> | rollback goal, liquibase.rollbackDate property 

