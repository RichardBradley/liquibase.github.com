---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.8.2 Released
---
# Liquibase 3.8.2 Released

Liquibase 3.8.2 is now available here through [Liquibase.org](https://download.liquibase.org/download-community/). 
The [3.8.2 release is also available on GitHub](https://github.com/liquibase/liquibase/releases/). Here’s a closer look at what's included in the latest release.

## Liquibase 3.8.2 Overview

### Snapshots and Reverse Engineering Expands to Postgres and DB2
TL;DR: With the release of Liquibase 3.8.2, Liquibase Pro users with workloads on PostgreSQL and DB2 are now able to capture and export Stored Logic objects. These Stored Logic objects will now export into local directories and files, making them easier to organize and manage.
This release also includes several bug fixes for Liquibase Community and Pro.

## What's New in Version 3.8.2
### Snapshots and Reverse Engineering for PostgreSQL and DB2
The ability to snapshot Stored Logic for Postgres and DB2 allows users to get a static view of the database at a particular point in time and is useful for reporting and safeguarding data by comparing databases (performing diffs) to find differences.
Liquibase Pro users will also now be able to include Stored Logic changeSets in changelogs generated through the **diffChangeLog** and **generateChangeLog** command. Users can reverse engineer Stored Logic changes using generateChangeLog, snapshot, diff, and diffChangeLog commands.

**Stored Logic** objects include: 

 - Check Constraint 
 - Procedures 
 - Package 
 - Package Body
 - Function 
 - Trigger
 - Synonyms

### A Much More User-Friendly Changelog for PostgreSQL and DB2 Stored Logic Users
If Stored Logic code gets written directly into the Liquibase changelog, the file can get very cluttered. Additionally, Stored Logic code is often formatted and this formatting can be lost when it’s written to the changelog.
Liquibase Pro eliminates the clutter by making the changelog more concise and readable, allowing users to maintain formatting by outputting the Stored Logic code via external files that can be referenced by the changelog. SQL files are organized in directories by object type, making them easy to find.

**Try Liquibase Pro**

Take advantage of all of these new Liquibase Pro features with a [free 14-day trial](https://download.liquibase.org/liquibase-pro-trial-request-form/). In addition to enhanced features, Liquibase Pro users also receive experienced guidance and fast troubleshooting from our excellent Liquibase support team. 

### Bug Fixes
For both Liquibase Community and Liquibase Pro users, the following bugs were fixed in version 3.8.2:
 - Using generateChangeLog/diffChangeLog to generate formatted SQL changelogs now works with Liquibase Pro's stored logic support
 - CDI-related classes moved back out of the main Liquibase jar into an optional jar
 - Fixed issue with indexes backing foreign keys not always being captured in diffChangeLog/generateChangeLog
 - Fixed issue with diffChangeLog/generateChangeLog generating primary keys when column order doesn't match the table's column order

## Take the Liquibase Community Survey
We have opened our Liquibase Community Survey! This is your opportunity to help us concentrate on the features and functionality that you want to see added to Liquibase.

It only takes about 5 minutes and the first 1000 responses receive a gift card. Handy for the holidays!

[Take the Liquibase Survey](https://www.surveymonkey.com/r/Liquibase-Survey-B)
