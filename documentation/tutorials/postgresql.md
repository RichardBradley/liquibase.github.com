---
layout: default
title: Docs | PostgreSQL Tutorial 
subnav: subnav_tutorials.md
---
# PostgreSQL Tutorial

#### To test your connection, try running liquibase with the JDBC driver located in the same directory as liquibase:

{% highlight sh %}

liquibase
  --driver=org.postgresql.Driver
  --classpath=postgresql-9.2-1002-jdbc4.jar
  --url="jdbc:postgresql://<IP OR HOSTNAME>:<PORT>/<DATABASE>"
  --changeLogFile=db.changelog-1.0.xml
  --username=<POSTGRESQL USERNAME>
  --password=<POSTGRESQL PASSWORD>
generateChangeLog

{% endhighlight %}


## **Creating New Liquibase Projects with PostgreSQL – Windows**
The purpose of this document is to guide you through the process of creating a new Liquibase project with **PostgreSQL** on a **Windows** machine. In this tutorial, you will generate an example project and follow the instructions to apply and learn concepts associated with creating new Liquibase Projects with PostgreSQL.
### Prerequisites
* If you have not installed the latest version of Liquibase, navigate to [https://download.liquibase.org/download](https://download.liquibase.org/download) to install the software application.
* Ensure the liquibase.bat file’s path is set to a location in the PATH System variable.
* Navigate to [https://jdbc.postgresql.org/download.html](https://jdbc.postgresql.org/download.html) and download the jdbc driver jar file for PostgreSQL.<br />

> **Note:** Place the jdbc jar driver file in a known directory so you can locate it easily.

>**Example:** C:\Users\Liquibase_Drivers\postgresql-42.2.8.jar

## Tutorial

#### To create a Liquibase project with PostgreSQL on your Windows machine, begin with the following steps:

* Create a new project folder and name it **LiquibasePostgreSQL**.
* In your LiquibasePostgreSQL folder, Right-click then select New>Text Document to create an empty text file.<br/>
* Rename the text file to **dbchangelog.xml**.
Changelog files contain a sequence of changesets, each of which make small changes to the structure of your database. Instead of creating an empty changelog file in step 2, you can also use an existing database to generate a changelog. In this tutorial, you will manually add a single change. To add this change:
* Open the dbchangelog.xml file and update the changelog file with the following code snippet:


{% highlight xml %}
  <?xml version="1.0" encoding="UTF-8"?>
  <databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
    http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
  </databaseChangeLog>
{% endhighlight %}


* In your LiquibasePostgreSQL folder Right-click and select New>Text Document to create a new text file.
* Rename the text file to **liquibase.properties**.
* Edit the liquibase.properties file to add the following properties:
{% highlight properties %}

    changeLogFile: C:\\Users\\Administrator\\LiquibasePostgreSQL\\dbchangelog.xml
    url: jdbc:postgresql://localhost:5432/MYDATABASE
    username: postgres
    password: password
    driver: org.postgresql.Driver
    classpath: ../../Liquibase_Drivers/postgresql-42.2.8.jar

{% endhighlight %}
Because you are creating this project on Windows OS, you must specify the path with double slashes in the changeLogFile property. You must also use a relative path from your project directory to the driver jdbc jar file location in the classpath property.

> Note: If you already have a Liquibase Pro key and want to apply it to
> your project, add the following property to your liquibase.properties
> file. 	 
liquibaseProLicenseKey: `<paste license key>`

*	Adding a changeset to the changelog – Change Sets are uniquely identified by “author” and ”id” attributes. Liquibase attempts to execute each changeset in a transaction that is committed at the end.
In the dbchangelog.xml file line 9 to 20 add a new “department” create table change set as follows:
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
            <column name="active" type="boolean"                     
              defaultValueBoolean="true"/>
        </createTable>
   </changeSet>
</databaseChangeLog>
{% endhighlight %}

> Note: This create table change set is XML format.  The corresponding
> SQL statement should look like the following:

{% highlight sql %}
CREATE TABLE "department"
  ("id" number(*,0),
   "name" VARCHAR2(50 BYTE),
   "active" NUMBER(1,0) DEFAULT 1
  );
{% endhighlight %}

* Open the command prompt.  Navigate to the LiquibasePostgreSQL directory.  
  Run the following command:

  ### "liquibase update"
*	 From a database UI Tool, for example: “pgAdmin” check your database changes under “**MYDATABASE**”.
You should see a new “**department**” table added to the database.  For example:

{% highlight sql %}
SELECT * FROM public.department;
{% endhighlight %}


|ID  |NAME  |ACTIVE |
|--|--|--|
|NULL |NULL  |NULL|


Also, you should see two more tables:
*	**DATABASECHANGELOG** tracking table – This table keeps a record of all the changesets that were deployed.  This way, next time when you deploy again, the changesets in the changelog will be compared with the DATABASECHANGELOG tracking table and only the new changesets that were not found in the DATABASECHANGELOG will be deployed.  You will notice that a new row was created in that table with the changeset information we have just deployed.
For this example:

|ID|AUTHOR |FILENAME       |DATEEXECUTED|ORDEREXECUTED|EXECTYPE|MDSUM|...|
|--|--|--|--|--|--|--|--|
|1  |bob   |dbchangelog.xml|`date&time`|1|EXECUTED|`checksumvalue`|...|

*	**DATABASECHANGELOGLOCK** – This table is used internally by Liquibase to manage access to the changelog table during deployment.
