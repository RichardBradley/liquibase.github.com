---
layout: default
title: Using Liquibase Functions Tutorial | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Using Liquibase Functions Tutorial #

## Overview ##
This tutorial builds on the setup that is described in the [Liquibase Setup Tutorial](/get_started/lb-setup-tutorial.html).

## Step 1: Create a Changelog File: ##

The [database changelog file](/documentation/databasechangelog.html) is where all database changes are listed. Create a file in your liquibase 
project directory called `myChangeLog.xml` that contains the following:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

</databaseChangeLog>
{% endhighlight %}

## Step 2: Add a Change Set ##

Each [change set](/documentation/changeset.html) is uniquely identified by an "id" attribute and an "author" attribute. These two tags, along with the name and package of the change log file uniquely identify the change. If only an "id" needed to be specified, it would be too easy to accidentally duplicate them, especially when dealing with multiple developers and code branches. Including an "author" attribute minimizes the chances of duplications.

Think of each change set as an atomic change that you want to apply to your database. It's usually best to include just one change in your change set, but more are allowed and can make sense if you are inserting multiple rows that should be added as a single transaction. Liquibase will attempt to run each change set as a single transaction, but many databases will silently commit and resume transactions for certain commands (create table, drop table, etc.)

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

## Step 3: Run the Change Set ##

We are now ready to deploy our first script! Open a terminal and run `LB_HOME/liquibase update` if on a UNIX system or `LB_HOME\liquibase.bat update` if on Windows.

## Step 4: Check Your Database ##

Your database now contains a table called "department". To inspect the H2 database that is a part of the tutorial, open a terminal, navigate to the LB_HOME folder 
where you extracted the Liquibase archive and then into the lib subdirectory where you placed the h2 driver jar. Run `java -jar h2-1.4.199.jar`. 
> Note: enter the specific version of the h2*.jar that you downloaded!

Enter the JDBC URL, User Name, and Password from the `liquibase.properties` file you created per the [tutorial setup](/get_started/lb-setup-tutorial.html). Notice 
that two other tables are created as well: "databasechangelog" and "databasechangeloglock". The databasechangelog table contains a list of all the changes that 
have been run against the database. The databasechangeloglock table is used to make sure two machines don't attempt to modify the database at the same time.

## Next Steps ##

* This quick-start guide is designed to quickly introduce you to Liquibase. For a full description of all its capabilities, see 
  the [Liquibase Manual](/documentation/index.html), read [the best practices](/bestpractices.html) and visit the [forums](/community/index.html). 
* If you have an existing project you are looking to add Liquibase to, visit the [Existing Project](/documentation/existing_project.html) page.
* If you are interested in commercial support, training, or consulting, consider 
<a href="https://support.liquibase.org" target="_blank" onClick="trackOutboundLink(this, 'Datical', 'Liquibase RFI'); return false">Liquibase Pro</a>.
