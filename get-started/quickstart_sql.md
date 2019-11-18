---
layout: default
title: Using SQL Scripts Tutorial | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Using SQL Scripts Tutorial

## Overview ##
This tutorial builds on the setup that is described in the [Liquibase Setup Tutorial](/get_started/lb-setup-tutorial.html).

## Step 1: Create a sql Folder ##

In the liquibase project folder that you created, create a `sql` folder. This is the folder in which you will place SQL scripts that Liquibase will track, version, and deploy.

## Step 2: Setup the Change Log ##

This is a one-time step to configure a change log to point to the `sql` folder that will contain SQL scripts. Create and save a file in the liquibase project directory you created. The file should be named `myChangeLog.xml`. The contents of `myChangeLog.xml` should be as follows:
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

## Step 2: Add a SQL Script to the sql Folder ##
With a `liquibase.properties` file from the [tutorial setup](/get_started/lb-setup-tutorial.html) and the newly created `myChangeLog.xml`, 
we are now ready to start adding SQL scripts to the `sql` folder. Liquibase will order the scripts in the folder alphanumerically. 
Create a file named `001_create_person_table.sql` with the following and save it in the `sql` folder:
{% highlight sql %}
create table PERSON (
    ID int not null,
    FNAME varchar(100) not null
);
{% endhighlight %}

## Step 3: Deploy Your First Change! ##

We are now ready to deploy our first script! Open a terminal and run `LB_HOME/liquibase update` if on a UNIX system or `LB_HOME\liquibase.bat update` if on Windows.

## Step 4: Check Your Database ##

You will see that your database now contains a table called "PERSON". To inpsect the H2 database that is a part of the tutorial, open a terminal, navigate to the 
LB_HOME folder where you extracted the Liquibase `*.zip` or the `*.tar.gz` to and then to the lib subdirectory where the h2 driver jar is located. 
Run `java -jar h2-1.4.199.jar`.

>Note: enter the specific version of the h2*.jar that you downloaded!

Enter the JDBC URL, User Name, and Password from the `liquibase.properties` file you created per the [tutorial setup](/get_started/lb-setup-tutorial.html). 
You will notice two other tables are created as well: "databasechangelog" and "databasechangeloglock". The databasechangelog table contains a list of all the 
changes that have been run against the database. The databasechangeloglock table is used to make sure two machines don't attempt to modify the database at the same time.

## Next Steps ##

* This quick-start guide is designed to quickly introduce you to Liquibase. For a full description of all its capabilities, see 
  the [Liquibase Manual](/documentation/index.html), read [the best practices](/bestpractices.html) and visit the [forums](/community/index.html). 
* If you have an existing project you are looking to add Liquibase to, visit the [Existing Project](/documentation/existing_project.html) page.
* If you are interested in commercial support, training, or consulting, consider 
<a href="https://support.liquibase.org" target="_blank" onClick="trackOutboundLink(this, 'Datical', 'Liquibase RFI'); return false">Liquibase Pro</a>.
