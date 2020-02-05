---
layout: default
title: Docs | Using SQL Scripts Tutorial 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Your First Migration with SQL

<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/HdXcf9E8ZVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Prerequisites
Before performing any of these steps, you must be able to connect to a local or remote database, accessible via command line or IDE/GUI. View the [Supported Databases]({{site.baseurl}}{% link databases.md %}) topic for more information on which databases we support. 

You can also view the [Database Tutorials]({{site.baseurl}}{% link documentation/tutorials/index.md %}) topic for more information on running each database with Liquibase.

## Step 1: Create a Formatted SQL Changelog

To complete your first migration, you must create a formatted `SQL` changelog in your Liquibase project directory so Liquibase can track, version, and deploy changes to your database.

**<u>To Create your Changelog</u>**
1. Create a file in your Liquibase project directory called `changelog.sql`.
2. For this example, enter the following information into the `changelog.sql` file.

{% highlight sql %}

--liquibase formatted sql

{% endhighlight %}

## Step 2: Add a Change Set
Change sets are units of change that Liquibase can execute on a database. When adding a change set, your change must be defined by both an "id" attribute and an "author" attibute. It is best practice to only include one change in each changeset.

**<u>To Add your Changeset</u>**
1. Locate and open the `changelog.sql` file.
2. For this example, enter the following information into the `changelog.sql` file, then save it. 

See the [Formatted SQL Changelogs]({{site.baseurl}}{% link documentation/sql_format.md %}) topic for more information about SQL Syntax.

{% highlight sql %}
--liquibase formatted sql

--changeset bob:1
create table test1 (
id int primary key,
name varchar(255)
);

{% endhighlight %}

## Step 3: Deploy your Changelog

To deploy the changelog and your new changeset, you run the `update` command. When running this command, Liquibase reads your list of change sets in order and checks the DATABASECHANGELOG table for anything that was previously run. Any changsets that have *not* already been applied to the database will get applied, and Liquibase will track that information.

**<u>To Apply the Change Set</u>**
1. Open your command prompt or terminal.
2. Run the following command: `liquibase --changeLogFile=changelog.sql update`

Your database now contains a table called **test1**.

## Step 4: Check Your Database
To check your database, open your database IDE to find the change that you made.

Notice that two tables were created along with test1: 
- DATABASECHANGELOG
- DATABASECHANGELOGLOCK

The DATABASECHANGELOG table contains a list of all the changes that 
have been run against the database. The DATABASECHANGELOGLOCK table is used to make sure two machines don't attempt to modify the database at the same time.

View [DATABASECHANGELOG Table]({{site.baseurl}}{% link documentation/databasechangelog_table.md %}) and [DATABASECHANGELOGLOCK Table]({{site.baseurl}}{% link documentation/databasechangeloglock_table.md %}) topics for more information.

### Additional Information
This topic is great when you only have a handful of SQL scripts. However, if your list of scripts becomes too large to maintain in a formatted SQL changelog, you may want to break up your scripts into smaller more manageable chunks. 

See the [Database Migrations with Multiple SQL Files]({{site.baseurl}}{% link documentation/multiple-sql-migration.md %}) topic for more information on how to Migrate with Multiple SQL files.

You can also learn how to create your [First Migrations with Liquibase Functions]({{site.baseurl}}{% link get_started/quickstart_lb.md %}).

### Summary
In this tutorial we covered:
- Creating Formatted SQL Changelogs
- Adding Changesets to your Changelog
- Running your Changelog
- Checking your Database

## **Next Up:** 

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link documentation/index.md %}">Liquibase Documentation ►</a></div>
<br>
<div class="cta cta--block"><a href="{{site.baseurl}}{% link quickstart.html %}">Return to Getting Started ►</a></div>
</div>
