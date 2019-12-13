---
layout: default
title: Using SQL Scripts Tutorial | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Your First Migration with SQL

## Step 1: Create a Formatted SQL Changelog

To complete your first migration, you must create a formatted `SQL` changelog in your Liquibase project directory so Liquibase can track, version, and deploy changes to your database.

**<u>To Create your Changelog</u>**
1. Create a file in your Liquibase project directory called `changelog.sql`.
2. For this example, enter the following information into the `changelog.sql` file.

{% highlight sql %}
--liquibase formatted sql
{% endhighlight %}

## Step 2: Add a Change Set
Change sets are units of change that Liquibase can execute on a database. When adding a changeSet, your change must be defined by both and "id" attribute and an "author" attibute. Using only and "id" attribute can cause accidental duplications when dealing with multiple developers and code branches. It is best practice to only include on change in each changeset.

**<u>To Create your Changelog</u>**
1. Locate and open the `changelog.sql` file.
2. For this example, enter the following information into the `changelog.sql` file, then save it.

{% highlight sql %}
--liquibase formatted sql

--changeset userbob:1
create table test1 (
id int primary key,
name varchar(255)
);

{% endhighlight %}

## Step 3: Run the Change Set

When you add a change set, Liquibase reads your list of change sets in order, then checks the DATABASECHANGELOG table for anything that was previously run.

**<u>To Run the Change Set</u>**
1. Open your command prompt or terminal.
2. Run the following command: `liquibase --changeLog=changelog.sql update`

Your database now contains a table called **Test1**.

## Step 4: Check Your Database
To check your database, open your database IDE to find the change that you made.

Notice that two tables were created along with Test1: 
- DATABASECHANGELOG
- DATABASECHANGELOGLOCK

The DATABASECHANGELOG table contains a list of all the changes that 
have been run against the database. The DATABASECHANGELOGLOCK table is used to make sure two machines don't attempt to modify the database at the same time.

View [DATABASECHANGELOG Table](/documentation/databasechangelog_table.html) and [DATABASECHANGELOGLOCK Table](/documentation/databasechangeloglock_table.html) topics for more information.

### Summary
In this tutorial we covered:
- Creating/Generating Changelogs
- Adding Changesets to your Changelog
- Running your Changelog
- Checking your Database

## **Next Up:** 

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/documentation/index.html">Liquibase Documentation ►</a></div>
<br>
<div class="cta cta--block"><a href="/quickstart.html">Return to Getting Started ►</a></div>
</div>
