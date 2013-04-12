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
            db.changelog*1.1.xml
            db.changelog-2.0.xml
          DatabasePool.java
          AbstractDAO.java

### db.changelog-master.xml ###

The master.xml includes the changelog for the releases in the correct order. In the example above it could look like this:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?> 
<databaseChangeLog 
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
                      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"> 

  <include file="com/example/db/changelog/db.changelog-1.0.xml"/> 
  <include file="com/example/db/changelog/db.changelog-1.1.xml"/> 
  <include file="com/example/db/changelog/db.changelog-2.0.xml"/> 
</databaseChangeLog> 
{% endhighlight %}

The db.changelog-master.xml is the changelog you pass to all Liquibase calls.

## ChangeSet Ids ##
Choose what works for you.  Some use a sequence number starting from 1 and unique within the changelog, some choose a descriptive name (e.g. 'new-address-table').

## Procedure for the developer ##
* Using your favorite IDE or editor, create a new local changeSet containing the change;
* Run Liquibase to execute the new changeSet (this tests the SQL code);
* Perform the corresponding changes in the application code (e.g., Java code);
* Test the new application code together with the database change;
* Commit both the changeSet and the application code.



