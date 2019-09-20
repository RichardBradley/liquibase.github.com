---
layout: default
title: Liquibase Tutorial: Get Started Using SQL Scripts
includeDaticalBox: true
---
# Liquibase Tutorial: Getting Started Using SQL Scripts #

## Overview ##
This tutorial builds on the setup that is described in the [Quick Start](../quickstart.html).

## Step 1: Create a sql Folder ##

In the folder that you extracted the Liquibase <code class="explicit">*.zip</code> or the <code class="explicit">*.tar.gz</code>, create a <code class="explicit">sql</code> folder. This is the folder in which you will place SQL scripts that Liquibase will track, version, and deploy.

## Step 2: Setup the Change Log ##

This is a one-time step to configure a change log to point to the <code class="explicit">sql</code> folder that will contain SQL scripts. Create and save a file in the same directory that you extracted the Liquibase <code class="explicit">*.zip</code> or the <code class="explicit">*.tar.gz</code> named <code class="explicit">myChangeLog.xml</code>. The contents of <code class="explicit">myChangeLog.xml</code> should be as follows:
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

  <includeAll path="sql"/>
</databaseChangeLog>
{% endhighlight %}

## Step 2: Add a SQL Script to the sql Folder ##
With a <code class="explicit">liquibase.properties</code> file from the [tutorial setup](../quickstart.html) and the newly created <code class="explicit">myChangeLog.xml</code>, we are now ready to start adding SQL scripts to the <code class="explicit">sql</code> folder. Liquibase will order the scripts in the folder alphanumerically. Create a <code class="explicit">001_create_person_table.sql</code> with the following and save it in the <code class="explicit">sql</code> folder:
{% highlight sql %}
create table PERSON (
    ID int not null,
    FNAME varchar(100) not null
);
{% endhighlight %}

## Step 3: Deploy Your First Change! ##

We are now ready to deploy our first script! Open a terminal and run <code class="explicit">./liquibase update</code> if on a UNIX system or <code class="explicit">liquibase.bat update</code> if on Windows.

## Step 4: Check Your Database ##

You will see that your database now contains a table called "PERSON". To inpsect the H2 database that is a part of the tutorial, open a terminal, navigate to the folder that you extracted the Liquibase <code class="explicit">*.zip</code> or the <code class="explicit">*.tar.gz</code> to and run <code class="explicit">java -jar h2-1.4.199.jar</code>.<strong>Note: enter the specific version of the h2*.jar that you downloaded!</strong> Enter the JDBC URL, User Name, and Password from the <code class="explicit">liquibase.properties</code> file you created per the [tutorial setup](../quickstart.html). You will notice two other tables are created as well: "databasechangelog" and "databasechangeloglock". The databasechangelog table contains a list of all the changes that have been run against the database. The databasechangeloglock table is used to make sure two machines don't attempt to modify the database at the same time.

## Next Steps ##

* This quick-start guide is designed to quickly introduce you to Liquibase. For a full description of all its capabilities, see the [Liquibase Manual](http://www.liquibase.org/documentation/index.html), read [the best practices](https://www.liquibase.org/bestpractices.html) and visit the [forums](http://www.liquibase.org/community/index.html). 
* If you have an existing project you are looking to add Liquibase to, visit the [Existing Project](https://www.liquibase.org/documentation/existing_project.html) page.
* If you are interested in commercial support, training, or consulting, consider <a href="https://support.liquibase.org" target="_blank" onClick="trackOutboundLink(this, 'Datical', 'Liquibase RFI'); return false">Liquibase Pro</a>.
