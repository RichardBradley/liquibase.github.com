---
layout: default
title: Bestpractices
---

# Liquibase Best Practices #
This page describes a number of best practices that you can apply on your project.

## Organizing your changeLogs ##
The most common way to organize your changelogs is by major release.  Choose a package in your classpath to store the changelogs, preferably near your database access classes.  In this example, we will use com/example/db/changelog

### Directory Structure ###
    com
      example
        db
          changelog
            db.changelog-master.xml
            db.changelog-1.0.xml
            db.changelog-1.1.xml
            db.changelog-2.0.xml
          DatabasePool.java
          AbstractDAO.java

### db.changelog-master.xml ###

The master.xml includes the changelog for the releases in the correct order. In the example above it could look like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?> 
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
                      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

  <include file="com/example/db/changelog/db.changelog-1.0.xml"/> 
  <include file="com/example/db/changelog/db.changelog-1.1.xml"/> 
  <include file="com/example/db/changelog/db.changelog-2.0.xml"/> 
</databaseChangeLog> 
{% endhighlight %}

The db.changelog-master.xml is the changelog you pass to all Liquibase calls.

### Managing Stored Procedures ###

Try to maintain separate changelog for Stored Procedures and use runOnChange="true". This flag forces LiquiBase to check if the changeset was modified. If so, liquibase executes the change again.

### One Change per ChangeSet ###

As far as possible, Avoid multiple changes per changeset to avoid failed autocommit statements that can leave the database in an unexpected state.

## ChangeSet Ids ##

Choose what works for you.  Some use a sequence number starting from 1 and unique within the changelog, some choose a descriptive name (e.g. 'new-address-table').

## Document ChangeSets ##

Use `<comments>` in the change sets. They say "A stitch in time saves nine!"

## Always think about rollback ##

Try to write changesets in a way that they can be rolled back. e.g. use relevant change clause instead of using custom `<sql>` tag.
Include a `<rollback>` clause whenever a change doesn't support out of box rollback. (e.g. `<sql>`, `<insert>`, etc)

## Reference Data Management ##

Leverage Liquibase to manage your Reference Data. Environment separation (DEV, QA, PROD) can be achieved using "context".

## Procedure for the developer ##

* Using your favorite IDE or editor, create a new local changeSet containing the change;
* Run Liquibase to execute the new changeSet (this tests the SQL code);
* Perform the corresponding changes in the application code (e.g., Java code);
* Test the new application code together with the database change;
* Commit both the changeSet and the application code.

## Consider Datical DB ##

Datical DB is a commercial product which provides the core Liquibase functionality plus additional features to remove complexity, simplify deployment and bridge the gap between development and operations.

* Easy to Use and Flexible. Datical DB provides a simple but powerful Graphical UI and Command Line interface.
* Change Set Wizard to easily define and capture database changes in a database neutral manner.
* Deployment Plan Wizard for modeling and managing your logical deployment workflow
* Compare Databases enables you to compare two database schemas to identify change and easily move it to your Change Log.
* Change Forecasting: Forecast upcoming changes to be executed before they are ran to determine how those changes will impact your data.

For more information on Datical DB, visit [www.datical.com/Liquibase](http://www.datical.com/Liquibase)


