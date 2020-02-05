---
layout: default
title: Docs | Migrations with Liquibase Functions
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Your First Migration with Liquibase Functions

<div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/lbZxAvftCX0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Prerequisites
Before performing any of these steps, you must be able to connect to a local or remote database, accessible via command line or IDE/GUI.

**For this example, we are going to use an H2 database.  Please review this [H2 Tutorial]({{site.baseurl}}{% link documentation/tutorials/h2.md %}) to get started.**

View the [Supported Databases]({{site.baseurl}}{% link databases.md %}) topic for more information on which databases we support.
You can also view the [Database Tutorials]({{site.baseurl}}{% link documentation/tutorials/index.md %}) topic for more information on running each database with Liquibase.

## Step 1: Create or Generate a Changelog File

To complete your first migration, you must have a [database changelog file]({{site.baseurl}}{% link documentation/databasechangelog.md %}). The Changelog file is where all your database changes are defined. Using Liquibase Functions allows you to define these changes with XML, JSON, or YAML. For this walkthrough, we will use XML examples.

**<u>Creating Changelog Files Manually</u>**

1. Create a file in your liquibase project directory called `myChangeLog.xml`
2. For this example, enter the following information into the `myChangeLog.xml` file, then save your file:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:pro="http://www.liquibase.org/xml/ns/pro"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd
         http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-3.8.xsd">

</databaseChangeLog>
{% endhighlight %}
<br>

**<u>Generating Changelog Files</u>**

If you have an existing database, you can generate a changelog file that reflects the current state of your database. For more information on how to
generate a changelog, visit the [Liquibase Commands: generateChangelog]({{site.baseurl}}{% link documentation/generating_changelogs.md %}) topic, and read the article on
[adding Liquibase on an existing project.]({{site.baseurl}}{% link documentation/existing_project.md %})

## Step 2: Add a Change Set
ChangeSets are (units of change) that Liquibase can execute on a database. When adding a changeSet, your change must be defined by both an "id" attribute and an "author" attribute. Using only an "id" attribute can cause accidental duplications when dealing with multiple developers and code branches. It is best practice to only include one change in each changeset.

View the [changeSet tag]({{site.baseurl}}{% link documentation/changeset.md %}) topic for more information.

**<u>To add a changeSet:</u>**
1. Locate and open the `myChangeLog.xml` file.
2. For this example, enter the following information into the `myChangeLog.xml` file, then save your file:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

    <changeSet id="1" author="bob">
        <createTable tableName="department">
            <column name="id" type="int">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="name" type="varchar(50)">
                <constraints nullable="false"/>
            </column>
            <column name="active" type="boolean" defaultValueBoolean="true"/>
        </createTable>
    </changeSet>

</databaseChangeLog>
{% endhighlight %}

## Step 3: Run the Change Set
When you add a changeSet, Liquibase reads your list of changeSets in order, then checks the `DATABASECHANGELOG` table for anything that was previously run.

**<u>To run the changeset:</u>**
1. Open your terminal.
2. Run one of the following commands:
- **Linux/Unix/Mac:** `LB_HOME/liquibase update`
- **Windows:** `LB_HOME\liquibase.bat update`

> **Note:** In place of *LB_HOME* use the folder name where you extracted liquibase.

Your database now contains a table called **department**.

## Step 4: Check Your Database

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

View [DATABASECHANGELOG Table]({{site.baseurl}}{% link documentation/databasechangelog_table.md %}) and [DATABASECHANGELOGLOCK Table]({{site.baseurl}}{% link documentation/databasechangeloglock_table.md %}) topics for more information.

You can also learn how to create your [First Migrations with SQL]({{site.baseurl}}{% link get_started/quickstart_sql.md %}).

### Summary
In this tutorial we covered:
- Creating/Generating Changelogs
- Adding Changesets to your Changelog
- Running your Changelog
- Checking your Database

## **Next Up:**

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link documentation/index.md %}">Liquibase Documentation ►</a></div>
<br>
<div class="cta cta--block"><a href="{{site.baseurl}}{% link quickstart.html %}">Return to Getting Started ►</a></div>
</div>
