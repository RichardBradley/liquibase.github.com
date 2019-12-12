---
layout: default
title: Using SQL Scripts Tutorial | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Your First Migration with SQL Scripts

## Step 1: Create an SQL Folder

To complete your first migration, you must create an `SQL` folder in your Liquibase project folder.  The `SQL` folder is where you will place all your SQL scripts that Liquibase will use to track, version, and deploy changes to your database.

## Step 2: Create or Generate a Changelog

You must also have a [database changelog file](/documentation/databasechangelog.html). The Changelog file is where all your database changes are defined. Using Liquibase Functions allows you to define these changes with XML, JSON, or YAML. For this walkthrough, we will use XML examples.

**<u>Creating Changelog Files Manually</u>**

1. Create a file in your liquibase project directory called `myChangeLog.xml` 
2. For this example, enter the following information into the `myChangeLog.xml` file: 

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

</databaseChangeLog>
{% endhighlight %}
When you have completed your work, save your file.

<br>

**<u>Generating Changelog Files</u>**

If you have an existing database, you can generate a changelog file that reflects the current state of your database. For more information on how to generate a changelog, visit the [Liquibase Commands: generateChangelog](/documentation/generating_changelogs.html) topic.

## Step 3: Configure your Changelog

To run SQL scripts, you must tell Liquibase where your SQL files are located. To configure your changelog, use the `includeAll` tag to point Liquibase to the correct folder.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

  <includeAll path="sql"/>
</databaseChangeLog>
{% endhighlight %}

## Step 4: Add an SQL Script to the SQL Folder
To add SQL scripts to your SQL folder:

1. In your SQL folder, create a `.sql` file
2. For this example, enter the following information:
{% highlight sql %}
create table PERSON (
    ID int not null,
    FNAME varchar(100) not null
);
{% endhighlight %}

When you have completed your work, save your file.

## Step 5: Deploy Your Script

Once your changelog is created and configured, and your SQL scripts are added, you are ready to deploy your script.

**<u>To Deploy your Script:</u>**
1. Open your terminal.
2. Run one of the following commands:
- **Linux/Unix/Mac:** `LB_HOME/liquibase update`
- **Windows:** `LB_HOME\liquibase.bat update`

> **Note:** In place of *LB_HOME* use the folder name where you extracted liquibase.

Your database now contains a table called **PERSON**.

## Step 6: Check Your Database
To check your database:
1. Open your terminal.
2. Navigate to the folder where you placed your driver jar.
3. Run: `java -jar (driver-version.jar)

> **Note:** Where (driver-version.jar) is listed, enter your driver name and version number. Example: <br> `java -jar h2-1.4.199.jar`.

If you used a `liquibase.properties` file, enter the JDBC URL, User Name, and Password. Notice that two tables were created: 
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
