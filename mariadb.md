---
layout: default
title: MariaDB Tutorial | Liquibase Docs
---

#### To test your connection, try running liquibase with the JDBC driver located in the same directory as liquibase:

{% highlight sh %}

liquibase
  --driver=org.mariadb.jdbc.Driver
  --classpath=./mariadb-java-client-1.4.6.jar
  --url="jdbc:mariadb://<IP OR HOSTNAME>:<PORT>/<SCHEMA NAME>"
  --changeLogFile=db.changelog-1.0.xml
  --username=<MARIADB USERNAME>
  --password=<MARIADB PASSWORD>
generateChangeLog

{% endhighlight %}


## **Creating New Liquibase Projects with MariaDB AWS RDS – Windows**
The purpose of this document is to guide you through the process of creating a new Liquibase project with **MariaDB AWS RDS** on a **Windows** machine. In this tutorial, you will generate an example project and follow the instructions to apply and learn concepts associated with creating new Liquibase Projects with MariaDB AWS RDS.
### Prerequisites
* If you have not installed the latest version of Liquibase, navigate to [https://download.liquibase.org/download](https://download.liquibase.org/download) to install the software application.
* Ensure the liquibase.bat file’s path is set to a location in the PATH System variable.
* Navigate to [https://mariadb.com/kb/en/library/about-mariadb-connector-j/ ](https://mariadb.com/kb/en/library/about-mariadb-connector-j/) and download the jdbc driver file for MariaDB.<br />

> **Note:** Place the jdbc jar driver file in a known directory so you can locate it easily.

>**Example:** C:\Users\Liquibase_Drivers\mariadb-java-client-2.4.4.jar

## Tutorial

#### To create a Liquibase project with MariaDB AWS RDS on your Windows machine, begin with the following steps:

* Create a new project folder and name it **LiquibaseMariaDB_RDS**.
* In your LiquibaseMariaDB_RDS folder, Right-click then select New>Text Document to create an empty text file.<br/>
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


* In your LiquibaseMariaDB_RDS folder Right-click and select New>Text Document to create a new text file.
* Rename the text file to **liquibase.properties**.
* Edit the liquibase.properties file to add the following properties:
{% highlight properties %}

    changeLogFile: C:\\Users\\Administrator\\LiquibaseMariaDB_RDS\\dbchangelog.xml
    url: jdbc:mariadb:// myrds.cz1j1vh9uvuo.us-east-1.rds.amazonaws.com:3306/mydatabase
    username: myrds
    password: password
    driver: org.mariadb.jdbc.Driver
    classpath: ../../Liquibase_Drivers/ mariadb-java-client-2.4.4.jar

{% endhighlight %}
Because you are creating this project on Windows OS, you must specify the path with double slashes in the changeLogFile property. You must also use a relative path from your project directory to the driver jdbc jar file location in the classpath property.  Also, the url property should follow this template:
##### url: jdbc:mariadb://{host}[:{port}]/[{databasename}]
In our case, since we are using AWS RDS database instance, the host name should be copied from AWS website under your RDS --> Databases --> `<database name>` --> Connectivity & security --> Endpoint `<copy the endpoint value>`.  This value should look similar to the value mentioned in the liquibase.properties example above.


> Note: If you already have a Liquibase Pro key and want to apply it to
> your project, add the following property to your liquibase.properties
> file. 	 
{% highlight properties %}
liquibaseProLicenseKey: `<paste license key>`
{% endhighlight %}

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

* Open the command prompt.  Navigate to the LiquibaseMariaDB_RDS directory.  
  Run the following command:

{% highlight sh %}
  liquibase update
{% endhighlight %}
  
*	 From a database UI Tool, check your database changes under “**mydatabase**”.
You should see a new “**department**” table added to the database.  For example:

{% highlight sql %}
    SELECT * FROM my_schema.department;
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
