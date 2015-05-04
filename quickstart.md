---
layout: default
title: Liquibase Quickstart
includeDaticalBox: true
---
## Step 1: Create a Changelog File: ##

The [database changelog file](documentation/databasechangelog.html) is where all database changes are listed. It is XML based, so start with an empty XML file:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

</databaseChangeLog>
{% endhighlight %}

## Step 2: Add a ChangeSet ##

Each [change set](documentation/changeset.html) is uniquely identified by an "id" attribute and an "author" attribute. These two tags, along with the name and package of the changelog file uniquely identify the change. If only an "id" needed to be specified, it would be too easy to accidentally duplicate them, especially when dealing with multiple developers and code branches. Including an "author" attribute minimizes the chances of duplications.

Think of each change set as an atomic change that you want to apply to your database. It's usually best to include just one change in your change set, but more are allowed and can make sense if you are inserting multiple rows that should be added as a single transaction.  Liquibase will attempt to run each change set as a single transaction, but many databases will silently commit and resume transactions for certain commands (create table, drop table, etc.)

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd">

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

## Step 3: Run the ChangeSet ##

There are many ways to execute your change log including via [command line](documentation/command_line.html), [Ant](documentation/ant/index.html), [Maven](documentation/maven/index.html), [Spring](documentation/spring.html), a [servlet listener](documentation/servlet_listener.html), and a [CDI Environment](documentation/cdi.html).

Here is an example for mysql via jdbc:

{% highlight bat %}
liquibase --driver=com.mysql.jdbc.Driver \
     --classpath=/path/to/classes \
     --changeLogFile=com/example/db.changelog.xml \
     --url="jdbc:mysql://localhost/example" \
     --username=user \
     --password=asdf \
     migrate
{% endhighlight %}

There are many more databases supported by liquibase. For a list of them and which jdbc driver, url, classpath etc. they need, please visit the [databases](databases.html) section.

## Step 4: Check Your Database ##

You will see that your database now contains a table called "department". Two other tables are created as well: "databasechangelog" and "databasechangeloglock". The databasechangelog table contains a list of all the statements that have been run against the database. The databasechangeloglock table is used to make sure two machines don't attempt to modify the database at the same time.

## Next Steps ##

* This quick-start guide is designed to get you started with Liquibase. For a full description of all its capabilities, see the [Liquibase Manual](documentation/index.html), read [the best practices](bestpractices.html) and visit the [forums](community/index.html). 
* If you have an existing project you are looking to add Liquibase too, visit the [Existing Project](documentation/existing_project.html) page.
* If you are interested in commercial support, training or consulting visit <a href="http://www.datical.com/liquibase/" target="_blank" onClick="trackOutboundLink(this, 'Datical', 'Liquibase RFI'); return false">datical.com</a>.

