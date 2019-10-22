---
layout: default
title: Generating changelogs
---

# Liquibase Commands: generateChangeLog

The `generateChangeLog` [command](command_line.html), creates a *changelog* file and creates your objects by capturing the current state of a database.

## Uses
The `generateChangeLog` command is typically used when you want to capture the current state of a database, then apply those changes to any number of databases.

> **Note:** This command does not create a new database database or schema. You must create them ***before*** applying a *changelog* file to it.

## Running the generateChangeLog command
To generate a *changelog*:
1. Configure the *liquibase.properties* file to include your driver class path, URL, and user authentication information for the database you want to capture.
> **Note:** For informationon how to configure your *liquibase.properties* file, view the [Creating & Configuring your liquibase.properties File](config_properties.html) topic in the knowledge base.
2. Save your *liquibase.properties* file.
>**Note:** Instead of using a liquibase.properties file, you can also pass the necessary information in the command prompt or Linux terminal.
3. Open your command prompt or Linux terminal and run the following command:

{% highlight sh %}

liquibase --changeLogFile=dbchangelog.xml generateChangeLog

{% endhighlight %}

## Output

The `generateChangeLog` command generates a *changelog* that contains all of your objects (represented as changesets) and places the file in the same hierarchy from where the command was ran.

### Liquibase Pro Output
While Liquibase Community stores all the SQL in a *changelog*, Liquibase Pro creates a directory called *Objects* and places it at the same level as your *changelog*.
The *Objects* directory contains a subdirectory for each of the following stored logic types:

+ <a href="https://docs.oracle.com/database/121/LNPLS/packages.htm" target="_blank">package</a><br />
+ <a href="https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_6007.htm" target="_blank">packagebody</a><br />
+ <a href="https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_5009.htm" target="_blank">function</a><br />
+ <a href="https://docs.oracle.com/cd/B28359_01/appdev.111/b28843/tdddg_procedures.htm" target="_blank">storedprocedure</a><br />
+ <a href="https://docs.oracle.com/database/121/TDDDG/tdddg_triggers.htm#TDDDG50000" target="_blank">trigger</a><br />
+ <a href="https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_8004.htm" target="_blank">view</a>

## Examples
<details open>
<summary style="font-size:200%;color:blue;">Liquibase Community changelog</summary>
<br>
{% highlight xml %}

<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:pro="http://www.liquibase.org/xml/ns/pro"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
    <changeSet author="diff-generated" id="1185214997195-1">
        <createTable name="BONUS">
            <column name="ENAME" type="VARCHAR2(10,0)"/>
            <column name="JOB" type="VARCHAR2(9,0)"/>
            <column name="SAL" type="NUMBER(22,0)"/>
            <column name="COMM" type="NUMBER(22,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-2">
        <createTable name="DEPT">
            <column name="DEPTNO" type="NUMBER(2,0)"/>
            <column name="DNAME" type="VARCHAR2(14,0)"/>
            <column name="LOC" type="VARCHAR2(13,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-3">
        <createTable name="EMP">
            <column name="EMPNO" type="NUMBER(4,0)"/>
            <column name="ENAME" type="VARCHAR2(10,0)"/>
            <column name="JOB" type="VARCHAR2(9,0)"/>
            <column name="MGR" type="NUMBER(4,0)"/>
            <column name="HIREDATE" type="DATE(7,0)"/>
            <column name="SAL" type="NUMBER(7,2)"/>
            <column name="COMM" type="NUMBER(7,2)"/>
            <column name="DEPTNO" type="NUMBER(2,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-4">
        <createTable name="SALGRADE">
            <column name="GRADE" type="NUMBER(22,0)"/>
            <column name="LOSAL" type="NUMBER(22,0)"/>
            <column name="HISAL" type="NUMBER(22,0)"/>
        </createTable>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-5">
        <addForeignKeyConstraint baseColumnNames="DEPTNO"
            baseTableName="DEPT" constraintName="FK_NAME"
            referencedColumnNames="DEPTNO" referencedTableName="EMP"/>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-6">
        <createIndex indexName="PK_DEPT" tableName="DEPT">
            <column name="DEPTNO"/>
        </createIndex>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-7">
        <createIndex indexName="PK_EMP" tableName="EMP">
            <column name="EMPNO"/>
        </createIndex>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-8">
        <addPrimaryKey columnNames="DEPTNO" tableName="DEPT"/>
    </changeSet>
    <changeSet author="diff-generated" id="1185214997195-9">
        <addPrimaryKey columnNames="EMPNO" tableName="EMP"/>
    </changeSet>
</databaseChangeLog>

{% endhighlight %}
</details>
<details>
<summary style="font-size:200%;color:blue;">Liquibase Pro changelog</summary>
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
