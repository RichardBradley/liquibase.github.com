---
layout: default
title: Best Practices | Liquibase Docs
includeDaticalBox: true
---

# Liquibase Best Practices #
This page describes a number of best practices that you can apply on your project.

## Organizing your changeLogs ##
The most common way to organize your changelogs is by major release.  Choose a package in your classpath to store the changelogs, preferably near your database access classes.  In this example, we will use com/example/db/changelog

### Directory Structure ###

{% highlight text %}
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
{% endhighlight %}
        

### db.changelog-master.xml ###

The master.xml includes the changelog for the releases in the correct order. In the example above it could look like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?> 
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
                      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

  <include file="com/example/db/changelog/db.changelog-1.0.xml"/> 
  <include file="com/example/db/changelog/db.changelog-1.1.xml"/> 
  <include file="com/example/db/changelog/db.changelog-2.0.xml"/> 
</databaseChangeLog> 
{% endhighlight %}

Each of the included XML files needs to be in the same format as a standard XML database change log, something like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?> 
<databaseChangeLog 
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
                      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd"> 
  <changeSet author="authorName" id="changelog-1.0">
    <createTable tableName="TablesAndTables">
      <column name="COLUMN1" type="TEXT">
        <constraints nullable="true" primaryKey="false" unique="false"/>
      </column>
    </createTable>
  </changeSet>
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

## Consider Liquibase Pro or Datical ##

### Liquibase Pro ###
<a href="https://download.liquibase.org/" target="_blank">Liquibase Pro</a> offers an extra layer of support so you don't have to go it alone. While Liquibase is a great starting point, teams that want best practices on how to make the most of Liquibase may find Liquibase Pro better suited to their needs. Liquibase Pro also adds functions for procedural database code.

### Datical ###
Datical is a commercial product which builds on the core Liquibase functionality. Beyond versioning and managing database changes, Datical bridges the gap between development and operations with capabilities that enable a fully unified and automated path for database code. 

* Datical has a web interface, command line interface, and REST API. All interfaces are secure and require authentication.
* Datical automatically verifies database code against organizational standards to eliminate manual review
* Datical automatically generates changesets from validated DDL code, eliminating manual effort in crafting changesets and manually updating the changelog
* Datical generates an immutable artifact for database code for consistent, repeatable, and automation-ready downstream deployments
* Datical forecasts the impact of database changes with an object-based model of the target database to ensure that there are no errors or issues when deploying database changes
* Datical integrates with ticketing systems such as JIRA to make it easy to trace database changes back to source code and initial requirements. This same capability also makes it easy to hold or accelerate feature sets.
* Datical can snapshot and compare database schemas to help identify and address drift

For more information on Datical, visit <a href="https://www.datical.com/liquibase/" target="_blank" onClick="trackOutboundLink(this, 'Datical', 'Liquibase RFI'); return false">https://www.datical.com/Liquibase</a>


