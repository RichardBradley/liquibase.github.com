---
layout: default
title: Tutorials | Liquibase Docs
subnav: subnav_tutorials.md
---
## Deploying Changes to DB2 on z/OS using SQL Scripts
<hr>

### Step 1: Create an SQL Folder
In the liquibase project folder that you created, create an `sql_files` folder. This is the folder in which you will place SQL scripts that Liquibase will track, version, and deploy.  

The directory structure should look like this:

`$LB_HOME/db2_zos/sql_files`

### Step 2: Setup the Changelog
This is a one-time step to configure a change log to point to the `sql` folder that will contain SQL scripts. Create and save a file in the liquibase project directory you created (`$LB_HOME/db2_zos`). The file should be named `db2zosChangeLog.xml`. 

The contents of `db2zosChangeLog.xml` should be as follows:

{% highlight xml %}

<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

  <includeAll path="sql_files"/>
</databaseChangeLog>

{% endhighlight %}

<br>

### Step 3: Add an SQL Script to the SQL Folder
With a `liquibase.properties` file from the [tutorial setup](\documentation\tutorials\db2onz.html) and the newly created `db2zosChangeLog.xml`, we are now ready to start adding SQL scripts to the `sql_files` folder. Liquibase will order the scripts in the folder alphanumerically. 

Create a file named `001_create_person_table.sql` with the following and save it in the `sql_files` folder:

{% highlight sql %}

create table PERSON (
    ID int not null,
    FNAME varchar(100) not null
);

{% endhighlight %}

<br>

### Step 4: Deploy your Change
We are now ready to deploy the script!  Open a terminal and navigate to `$LB_HOME/db2_zos`.  Run `$LB_HOME/liquibase update` if on a UNIX system or `$LB_HOME\liquibase.bat update` if on Windows.

<div align="center">
<img src="\images\documentation\Workflows\db2onz-change-deploy.png" width="700px" alt="Output Image">
</div>

You will see that your database now contains a table called **PERSON**.

### Step 5: Check your Database
You will notice two other tables are created as well:
- **DATABASECHANGELOG**
- **DATABASECHANGELOGLOCK**

The DATABASECHANGELOG table contains a list of all the changes that have been run against the database. The DATABASECHANGELOGLOCK table is used to make sure two machines don’t attempt to modify the database at the same time.

#### Common Command Line Arguments
Use can use command line arguments to over-ride the default options at runtime. The following are common command line arguments:

Command Line Argument | Action
----- | -----
`--changeLogFile=<path and filename>` |  Specify the XML changelog
`--url=<value>`  |  Specify a database URL
`--defaultsFile=<path to file.properties>`  |  Specify the properties file (default:  ./liquibase.properties)

