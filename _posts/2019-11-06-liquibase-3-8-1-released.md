---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.8.1 Released
---

Liquibase 3.8.1 is now available here through [Liquibase.org](https://download.liquibase.org/download-community/) and through the [Maven repositories](https://mvnrepository.com/artifact/org.liquibase/liquibase-maven-plugin). The [3.8.1 release is also available on GitHub](https://github.com/liquibase/liquibase/releases/tag/v3.8.1).

Here’s a closer look at what’s included in the latest release.

## Liquibase Bug Fixes & Doc Updates

Both Liquibase Community and Liquibase Pro users will enjoy several bug fixes and updates to documentation. [View 3.8.1 release notes](https://download.liquibase.org/release-notes/liquibase-3-8-1/) for details on these updates.

## New Liquibase Pro Features

### Snapshots and Reverse Engineering for Stored Logic
In this 3.8.1 release, Liquibase Pro users with workloads on Oracle and SQL Server are able to capture information on their **Stored Logic**.

The ability to snapshot Stored Logic allows you to get a static view of your database at a particular point in time and is useful for reporting and safeguarding your data by comparing databases (performing diffs) to find differences. 

Liquibase Pro users will also now include Stored Logic changeSets in changelogs generated through the **diffChangeLog** and **generateChangeLog** command.

**Stored Logic** objects include: 

 - Check Constraint 
 - Procedures 
 - Package 
 - Package Body
 - Function 
 - Trigger
 - Synonyms

Learn more about [Liquibase Snapshot](https://www.liquibase.org/documentation/snapshot.html) and [Diff commands](https://www.liquibase.org/documentation/diff.html) in our recently updated Docs.

### A Much More User-Friendly Changelog
If stored logic code gets written directly into the Liquibase **changelog**, the file will get cluttered. Additionally, **Stored Logic** code is often formatted and that formatting can be lost when it’s written to the **changelog**. 

With the 3.8.1 release, Liquibase Pro now eliminates the clutter by making the **changelog** more concise and readable, allowing users to maintain formatting by outputting the Stored Logic code via external files that can be referenced by the changelog. SQL files are organized in directories by object type, making them easy to find. 

### Avoid Oracle Slowdowns
Liquibase Pro users have access to a new, Oracle-specific option, `markUnusedNotDrop`, that helps users avoid database slowdowns caused by dropping a populated column.  `markUnusedNotDrop` tells Oracle to mark unused columns and allows DBAs to decide the best time to drop these columns for their particular application. The default is `markUnusedNotDrop=false`.

## Summing it up
Take advantage of all of these new features with a [free 14-day trial of Liquibase Pro](https://download.liquibase.org/liquibase-pro-trial-request-form/). In addition to enhanced features, Liquibase Pro users also receive experienced guidance and fast troubleshooting from our excellent Liquibase support team. With their help, you’ll save countless hours of scouring Stack Overflow forums if you get stuck. They’re also great at getting your team up and running with Liquibase in a way that works best for your use case. [Give it a try](https://download.liquibase.org/liquibase-pro-trial-request-form/). No credit card is required so you don’t have to worry about forgetting to cancel. 

### Giving Back to the Community
We’ve added some Liquibase Pro features in this latest release, but we’re also continuing to fix bugs and improve documentation for everyone in the Liquibase community. Our community has built a lot. From extensions to integrations, you’ve helped make Liquibase the amazing open source project that it is today. We want to help make it stronger. Here are some ways to contribute:
- [Contribute code](https://www.liquibase.org/development/contribute.html) 
- [Make doc updates](https://github.com/liquibase/liquibase.github.com/tree/master/documentation)
- Participate in our upcoming community survey (look for an update on this soon)

Stay tuned for more website improvements, tutorials, videos, and demos. Check out the latest on our [Liquibase Expert Exchange](https://download.liquibase.org/expert-exchange/).   
