---
layout: default
title: diffChangeLog Command
---

# Liquibase Commands: `diffChangeLog`
The `diffChangeLog` command provides you with:
+ Information containing differences between two databases; specifically, the diffChangeLog  points out the differences in general and generates changes to resolve most of them.
+ A *changelog* file containing deployable change sets.

## Uses
The `diffChangeLog` command is typically used when you want to create a deployable *changelog* to synchronize multiple databases. The `diffChangeLog` command also provides more information about:
+ Missing objects in your database
+ Changes made to your database
+ Unexpected items in your database

## Running the `diffChangeLog` Command
To create a diff *changelog*:

+ The first option is to run the `diffChangeLog` command and pass the parameters needed for your source database and target database. 

As an example you can run the following:

{% highlight text %}
liquibase
--changeLogFile=dbchangelog.xml
--outputFile=mydiff.txt
--driver=oracle.jdbc.OracleDriver
--classpath=ojdbc14.jar
--url="jdbc:oracle:thin:@<IP OR HOSTNAME>:<PORT>:<SERVICE NAME OR SID>"
--username=<USERNAME>
--password=<PASSWORD>
diffChangeLog
--referenceUrl="jdbc:oracle:thin:@<IP OR HOSTNAME>:<PORT>:<SERVICE NAME OR SID>"
--referenceUsername=<USERNAME>
--referencePassword=<PASSWORD>
{% endhighlight %}

>**Note:** When running `diffChangeLog` against two different databases, the class path property should reference both .jar files. Use the path separator that is correct
for your operating system (a semicolon on Windows, a colon on Mac or Linux). Example: `classpath: ojdbc7.jar:postgresql-42.2.8.jar`

+ Alternatively, configure the *liquibase.properties* file to include your driver class path, URL, and user authentication information for both databases.
Run the following command:
{% highlight text %}
liquibase --changeLogFile=file_name.xml diffChangeLog
{% endhighlight %} 

> **Note:** Replace *file_name.xml*, with your filename and extension format. If you specify a file name that already exists, Liquibase will append your changes to the existing file.

For information on how to configure your *liquibase.properties* file, view the [Creating & Configuring your *liquibase.properties* File](config_properties.html) topic in the knowledge base.

<details>
<summary style="font-size:200%;color:blue;">Console Output Example</summary>
<br>
{% highlight text %}
Liquibase Pro 3.8.1 by Datical licensed to Liquibase Pro Customer
Liquibase command 'diffChangeLog' was executed successfully.
{% endhighlight %}
</details>

The `diffChangeLog` command produces a list of all objects and creates a changelog with a list of changesets.

Liquibase Community `diffChangeLog` categories:
+ Catalog
+ Column
+ Foreign Key
+ Index
+ Primary Key
+ Schema
+ Sequence
+ Procedure
+ Unique Constraints
+ View

Additional Liquibase Pro `diffChangeLog` categories:

+ Check Constraint
+ Package
+ Package Body
+ Function
+ Trigger
+ Synonyms
<details>
<summary style="font-size:200%;color:blue;">Pro diffChangeLog sample file</summary>
<br>
{% highlight xml %}

<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:pro="http://www.liquibase.org/xml/ns/pro"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
    <changeSet author="Administrator (generated)" id="1571345362466-8">
           <pro:createTrigger disabled="false" path="objects/trigger/TS_T_EXEMPLAR_SEQEXEMPLAR.sql" relativeToChangelogFile="true" tableName="T_EXEMPLAR" triggerName="TS_T_EXEMPLAR_SEQEXEMPLAR"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-9">
           <pro:createTrigger disabled="false" path="objects/trigger/ORDERS_BEFORE_INSERT4.sql" relativeToChangelogFile="true" tableName="orders" triggerName="ORDERS_BEFORE_INSERT4"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-10">
           <pro:createTrigger disabled="false" path="objects/trigger/ORDERS_BEFORE_INSERT2.sql" relativeToChangelogFile="true" tableName="orders" triggerName="ORDERS_BEFORE_INSERT2"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-11">
           <pro:createTrigger disabled="false" path="objects/trigger/ORDERS_BEFORE_INSERT.sql" relativeToChangelogFile="true" tableName="orders" triggerName="ORDERS_BEFORE_INSERT"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-12">
           <createView fullDefinition="true" path="objects/view/OREDERS_VIEW.sql" relativeToChangelogFile="true" viewName="OREDERS_VIEW"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-13">
           <pro:createTrigger disabled="false" path="objects/trigger/ORDERS_BEFORE_INSERT3.sql" relativeToChangelogFile="true" tableName="orders" triggerName="ORDERS_BEFORE_INSERT3"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-14">
           <createProcedure path="objects/storedprocedure/P_CUSTOMER_HAS_NUM_FILM.sql" procedureName="P_CUSTOMER_HAS_NUM_FILM" relativeToChangelogFile="true"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-15">
           <createView fullDefinition="true" path="objects/view/V_CUSTOMER_HAS_FILM.sql" relativeToChangelogFile="true" viewName="V_CUSTOMER_HAS_FILM"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-16">
           <createProcedure path="objects/storedprocedure/SP_CUSTOMER_SOCIAL_ACCTS.sql" procedureName="SP_CUSTOMER_SOCIAL_ACCTS" relativeToChangelogFile="true"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-17">
           <pro:createTrigger disabled="false" path="objects/trigger/TRI_BORROWING.sql" relativeToChangelogFile="true" tableName="T_BORROWING" triggerName="TRI_BORROWING"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-18">
           <pro:createTrigger disabled="false" path="objects/trigger/TRU_BORROWING.sql" relativeToChangelogFile="true" tableName="T_BORROWING" triggerName="TRU_BORROWING"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-19">
           <pro:createTrigger disabled="false" path="objects/trigger/TSU_T_EXEMPLAR_SEQEXEMPLAR.sql" relativeToChangelogFile="true" tableName="T_EXEMPLAR" triggerName="TSU_T_EXEMPLAR_SEQEXEMPLAR"/>
       </changeSet>
       <changeSet author="Administrator (generated)" id="1571345362466-20">
           <pro:createFunction functionName="F_CUSTOMER_HAS_NUM_FILM" path="objects/function/F_CUSTOMER_HAS_NUM_FILM.sql" relativeToChangelogFile="true"/>
       </changeSet>
</databaseChangeLog>
{% endhighlight %}
</details>
> **Note:** Liquibase does not currently check datatype length.
