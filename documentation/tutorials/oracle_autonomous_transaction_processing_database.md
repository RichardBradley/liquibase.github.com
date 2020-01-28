---
layout: default
title: ATP Tutorial | Liquibase Docs
subnav: subnav_tutorials.md
---

# **Creating New Liquibase Projects Oracle Autonomous Transaction Processing Database (ATP)**
The purpose of this document is to guide you through the process of creating a new Liquibase project with **ATP**. In this tutorial, you will generate an example project and follow the instructions to apply and learn concepts associated with creating new Liquibase Projects with ATP.
### Prerequisites
* If you have not installed the latest version of Liquibase, navigate to [https://download.liquibase.org/download](https://download.liquibase.org/download) to install the software application.
* Ensure the liquibase.bat file’s path is set to a location in the PATH System variable.
* This example assumes that you have created an Oracle Free tier ATP Database via the Oracle Cloud web console and that you have created an Access Control List during provision with your IP address.
For more information about Provision Oracle Autonomous Database Processing via the Oracle Cloud web console, please see Oracle ATP related links at the bottom of this page.
* Navigate to [https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) and download the ojdbc driver jar file for Oracle database.
* Download Wallet
  1. Login to your Oracle Cloud account -> Select Autonomous Transaction Processing -> click on your autonomous database link -> Select DB Connection and select “Download Wallet”.
  2. Enter a password for the Wallet and download the .zip file.
  3. Record the Wallet password somewhere safe.  For this example let’s call this password “my_wallet_password”.
  4. Unzip the Wallet and have it somewhere safe in your file system.
  5. Navigate to the wallet folder and edit the ojdbc.properties file with the following:
    * Comment out the **oracle.net.wallet_location** line
    * Set **javax.net.ssl.trustStorePassword** to the wallet password in step 3
    * Set **javax.net.ssl.keyStorePassword** to the wallet password in step 3

      For example:
      {% highlight text %}
      #oracle.net.wallet_location=(SOURCE=(METHOD=FILE)(METHOD_DATA=(DIRECTORY=${TNS_ADMIN})))
      javax.net.ssl.trustStore=${TNS_ADMIN}/truststore.jks
      javax.net.ssl.trustStorePassword=my_wallet_password
      javax.net.ssl.keyStore=${TNS_ADMIN}/keystore.jks
      javax.net.ssl.keyStorePassword=my_wallet_password
      {% endhighlight %}

* In the wallet folder open the sqlnet.ora and make sure that **SSL_SERVER_DN_MATCH=yes**

<br />

## Tutorial

#### To create a Liquibase project with ATP database, begin with the following steps:

* Create a new project folder and name it **LiquibaseATP**.
* Place the ojdbc jar driver file in the **LiquibaseATP** project directory.
* In your LiquibaseATP folder, create an empty text file.<br/>
* Rename the text file to **myChangeLog.xml**.
Changelog files contain a sequence of changesets, each of which make small changes to the structure of your database. Instead of creating an empty changelog file in step 3, you can also use an existing database to generate a changelog. In this tutorial, you will manually add a single change. To add this change:
* Open the myChangeLog.xml file and update the changelog file with the following code snippet:


{% highlight xml %}
  <?xml version="1.0" encoding="UTF-8"?>
  <databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
    http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
  </databaseChangeLog>
{% endhighlight %}


* In your LiquibaseATP folder create a new text file.
* Rename the text file to **liquibase.properties**.
* Edit the liquibase.properties file to add the following properties:
{% highlight properties %}

    changeLogFile: myChangeLog.xml
    url: jdbc:oracle:thin:@<database_name>_high?TNS_ADMIN=/path/to/Wallet_<database_name>
    username: ADMIN
    password: <DATABASE PASSWORD>
    classpath: ojdbc8.jar

{% endhighlight %}


> Note: In this properties file example, the driver jar file is "ojdbc8.jar" under the classpath: property.  Please rename it to match the one that you have previously downloaded accordingly.
Also, if you are on a Windows machine, please make the TNS_ADMIN path to your wallet folder with double dashes in the url property. for example: url: jdbc:oracle:thin:@databaseName_high?TNS_ADMIN=path//to//Wallet_databaseName

*	Adding a changeset to the changelog – Change Sets are uniquely identified by “author” and ”id” attributes. Liquibase attempts to execute each changeset in a transaction that is committed at the end.
In the myChangeLog.xml file line 9 to 20 add a new “department” create table change set as follows:
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

* Open the command prompt.  Navigate to the LiquibaseATP directory.  
  Run the following command:

  ### "liquibase update"
*	 Sign in to your Oracle Cloud account -> go to your Autonomous Database -> click on the "tools tab" -> click on "Open SQL Developer Web" button -> enter your Database user and password.
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


<br/>
**Oracle ATP related links:** <br />
[Java Connectivity with Autonomous Database](https://www.oracle.com/technetwork/database/application-development/jdbc/documentation/atp-5073445.html)

[Oracle Database JDBC drivers](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html)

[Oracle Cloud : Autonomous Transaction Processing (ATP) - Create Service](https://oracle-base.com/articles/vm/oracle-cloud-autonomous-transaction-processing-atp-create-service#create-atp-service)

[Using Oracle Autonomous Transaction Processing on Shared Exadata Infrastructure](https://docs.oracle.com/en/cloud/paas/atp-cloud/atpug/manage-users-admin.html#GUID-B227C664-EBA0-4B5E-B11C-A56B16567C1B)
