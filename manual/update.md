---
layout: default
title: Update
---

# Updating the Database #

LiquiBase allows you to apply database changes you and other developers have added to the change log file.  


## How Change Set Statuses are Tracked ##

Each [[changeset.html|change set]] has an "id" and "author" attribute which, along with the directory and file name of the the change log file, uniquely identifies it.

LiquiBase reads the change sets in the change log file sequentially and compares the identifier to the values stored in the //DatabaseChangeLog// table.  If the identifier does not exist in the table, the change set is run and a new row is added to the //DatabaseChangeLog// table containing the identifier and an MD5Sum hash of the change set.  

If the identifier already exists in the //DatabaseChangeLog// table, the MD5Sum of the change set as it currently exists is compared to the one in the database.  If they are different, LiquiBase will either throw an error alerting you that someone has changed it unexpectedly, or re-executes it depending on the status of the //runOnChange// [[changeSet.html]] attribute.

## Controlling Updates ##

There are two modes for applying unrun change sets:
  - "update" which applies all unrun changes
  - "updateCount" which applies just a given number of unrun changes.

## SQL Update Mode ##

Rather than applying change sets directly to the database, the required [[sql_output.html|SQL can be stored]] for review and later application.


