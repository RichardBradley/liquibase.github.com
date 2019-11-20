---
layout: default
title: Oracle Tutorial | Liquibase Docs
---

#### To test your connection, try running liquibase with the JDBC driver located in the same directory as liquibase:

{% highlight sh %}

liquibase
--driver=oracle.jdbc.OracleDriver
--classpath=ojdbc14.jar
--url="jdbc:oracle:thin:@<IP OR HOSTNAME>:<PORT>:<SERVICE NAME OR SID>"
--changeLogFile=db.changelog-1.0.xml
--username=<USERNAME>
--password=<PASSWORD>
generateChangeLog

{% endhighlight %}


## **Creating New Liquibase Projects with Oracle – Windows**
The purpose of this document is to guide you through the process of creating a new Liquibase project with **Oracle** on a **Windows** machine. In this tutorial, you will generate an example project and follow the instructions to apply and learn concepts associated with creating new Liquibase Projects with Oracle.
### Prerequisites
* If you have not installed the latest version of Liquibase, navigate to [https://download.liquibase.org/download](https://download.liquibase.org/download) to install the software application.
* Ensure the liquibase.bat file’s path is set to a location in the PATH System variable.
* Navigate to [https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) and download the ojdbc jar driver file.<br />

> **Note:** Place the ojdbc jar driver file in a known directory so you can locate it easily.

>**Example:** C:\Users\Liquibase_Drivers\ojdbc7.jar

## Tutorial

#### To create a Liquibase project with Oracle on your Windows machine, begin with the following steps:

* Create a new project folder and name it **LiquibaseProj**.
* In your LiquibaseProj folder, Right-click then select New>Text Document to create an empty text file.<br/>
* Rename the text file to **dbchangelog.xml**.
Changelog files contain a sequence of changesets, each of which make small changes to the structure of your database. Instead of creating an empty changelog file in step 2, you can also use an existing database to generate a changelog. In this tutorial, you will manually add a single change. To add this change:
* Open the dbchangelog.xml file and update the changelog file with the following code snippet:


{% highlight sh %}
  <?xml version="1.0" encoding="UTF-8"?>
	<databaseChangeLog
	  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
	  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
	  http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
	</databaseChangeLog>
{% endhighlight %}


* In your LiquibaseProj folder Right-click and select New>Text Document to create a new text file.
* Rename the text file to **liquibase.properties**.
* Edit the liquibase.properties file to add the following properties:
{% highlight sh %}

    changeLogFile: C:\\Users\\Administrator\\LiquibaseProj\\dbchangelog.xml
    url: jdbc:oracle:thin:@localhost:1521:ORCL
    username: MYSCHEMA
    password: password
    driver: oracle.jdbc.OracleDriver
    classpath: ../../Liquibase_Drivers/ojdbc7.jar

{% endhighlight %}
Because you are creating this project on Windows OS, you must specify the path with double slashes in the changeLogFile property. You must also use a relative path from your project directory to the driver ojdbc jar file location in the classpath property.

> Note: If you already have a Liquibase Pro key and want to apply it to
> your project, add the following property to your liquibase.properties
> file. 	 
liquibaseProLicenseKey: `<paste license key>`

*	Adding a changeset to the changelog – Change Sets are uniquely identified by “author” and ”id” attributes. Liquibase attempts to execute each changeset in a transaction that is committed at the end.
In the dbchangelog.xml file line 9 to 20 add a new “department” create table change set as follows:
{% highlight sh %}
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

{% highlight sh %}
CREATE TABLE "department"
(	"id" number(*,0),
	"name" VARCHAR2(50 BYTE),
	"active" NUMBER(1,0) DEFAULT 1
);
{% endhighlight %}

* Open the command prompt.  Navigate to the LiquibaseProj directory.  
  Run the following command:

  ### "liquibase update"
*	 From SQL Developer Tool, check your database changes under “**MYSCHEMA**”.
You should see a new “**department**” table added to the database.  For example:

    SELECT * FROM my_schema.department;


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
