---
layout: side-search
title: Generating SQL | Liquibase Docs
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Generating SQL to Update Database Schemas
There are two reasons you would want to generate SQL in Liquibase.
1. You need to know exactly what is being done to your database.
2. Your company policies prevent you from using Liquibase in certain environments.

Generating SQL can be helpful when you want to update your database schemas, but want to view those database changes before applying them. There are several commands that generate deployable SQL, these are:

## `updateSQL` Command
Running the `updateSQL` command tells Liquibase to evaluate all the changesets in your *changelog*, then generates the corresponding SQL for what will be deployed to the database so you can preview the changes.

To use the `updateSQL` command, type the following into your command prompt:

{% highlight text %}

liquibase --changeLogFile=mssql_lbpro_master_changelog.xml updateSQL

{% endhighlight %}
<br>

<details>
<summary style="font-size:125%;color:blue;">SQL Output Example </summary>
{% highlight SQL%}
-- *********************************************************************
-- Update Database Script
-- *********************************************************************
-- Change Log: mssql_lbpro_master_changelog_no_catalog.xml
-- Ran at: 11/15/19 1:56 PM
-- Against: datical_login@jdbc:sqlserver://3.219.82.47:1433;sslProtocol=TLS;jaasConfigurationName=SQLJDBCDriver;statementPoolingCacheSize=10;serverPreparedStatementDiscardThreshold=10;enablePrepareOnFirstPreparedStatementCall=false;fips=false;socketTimeout=0;authentication=NotSpecified;authenticationScheme=nativeAuthentication;xopenStates=false;sendTimeAsDatetime=true;trustStoreType=JKS;trustServerCertificate=false;TransparentNetworkIPResolution=true;serverNameAsACE=false;sendStringParametersAsUnicode=true;selectMethod=direct;responseBuffering=adaptive;queryTimeout=-1;packetSize=8000;multiSubnetFailover=false;loginTimeout=15;lockTimeout=-1;lastUpdateCount=true;encrypt=false;disableStatementPooling=false;databaseName=proCatalog;columnEncryptionSetting=Disabled;applicationName=Microsoft JDBC Driver for SQL Server;applicationIntent=readwrite;
-- Liquibase version: 3.8.2-DAT-3598-SNAPSHOT
-- *********************************************************************

USE proCatalog;
GO

-- Lock Database
UPDATE DATABASECHANGELOGLOCK SET LOCKED = 1, LOCKEDBY = 'Erzsebet-PC (192.168.0.34)', LOCKGRANTED = '2019-11-15T13:56:05.17' WHERE ID = 1 AND LOCKED = 0
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::3::dropSynonym-proCatalog::Liquibase Pro User
DROP SYNONYM [privateSynonymOnTable]
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('3::dropSynonym-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 17, '8:82a49a1df297832e0e5c014c7dba5d97', 'dropSynonym synonymName=privateSynonymOnTable', '', 'EXECUTED', NULL, 'dropprivatesynonym,lbl-syn', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::4::dropPublicSynonym::Liquibase Pro User
DROP SYNONYM [publicSynonymOnTable]
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('4::dropPublicSynonym', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 18, '8:e46072543816816b16fff4fdded56068', 'dropSynonym synonymName=publicSynonymOnTable', '', 'EXECUTED', NULL, 'droppublicsynonym,lbl-syn', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::2::dropView-proCatalog::Liquibase Pro User
DROP VIEW persons_view
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('2::dropView-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 19, '8:6b7030bf90f5164b6f261814d4180ade', 'dropView viewName=persons_view', '', 'EXECUTED', NULL, 'dropview,lbl-view', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::2::dropProc-proCatalog::Liquibase Pro User
DROP PROCEDURE printHelloWorld
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('2::dropProc-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 20, '8:b8e93c02e6d2ba004261da39c7a7b578', 'dropProcedure procedureName=printHelloWorld', '', 'EXECUTED', NULL, 'dropprocedure,lbl-proc', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::2::rollbackFunction-proCatalog::Liquibase Pro User
USE [proCatalog2]
GO

CREATE FUNCTION [dbo].[emailFunction]()
RETURNS VARCHAR(100)
AS
BEGIN
DECLARE @rtEmail VARCHAR
SET @rtEmail='random@datical.com'
RETURN @rtEmail
END
GO

USE [proCatalog2]
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('2::rollbackFunction-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 21, '8:ae8e2abb341cf5fce706d5a69deb3387', 'sql; createFunction functionName=emailFunction; sql', '', 'EXECUTED', NULL, 'rollbackfunction,lbl-func', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::2::dropFunc-proCatalog::Liquibase Pro User
DROP FUNCTION emailFunction
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('2::dropFunc-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 22, '8:7b7e55cacd71d5affda392508f3cb17a', 'dropFunction functionName=emailFunction', '', 'EXECUTED', NULL, 'dropfunction,lbl-func', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::3::disableTrigger-proCatalog::Liquibase Pro User
DISABLE TRIGGER table_trigger  ON primary_table
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('3::disableTrigger-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 23, '8:b16d51e844e972a72f45809a9b7b8336', 'disableTrigger tableName=primary_table, triggerName=table_trigger', '', 'EXECUTED', NULL, 'disabletrigger,lbl-trig', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::4::enableTrigger-proCatalog::Liquibase Pro User
ENABLE TRIGGER table_trigger  ON primary_table
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('4::enableTrigger-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 24, '8:780e362d158fe05bf9617a86b2b8f6d9', 'enableTrigger tableName=primary_table, triggerName=table_trigger', '', 'EXECUTED', NULL, 'enabletrigger,lbl-trig', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::5::renameTrigger-proCatalog::Liquibase Pro User
sp_rename 'proCatalog.table_trigger', 'table_trigger_deux'
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('5::renameTrigger-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 25, '8:916bb9a6ced89805b4c2a946d7a62496', 'renameTrigger newTriggerName=table_trigger_deux, oldTriggerName=table_trigger', '', 'EXECUTED', NULL, 'renametrigger,lbl-trig', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::6::dropCatalogTrigger-proCatalog::Liquibase Pro User
DROP TRIGGER db_trigger
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('6::dropCatalogTrigger-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 26, '8:2deca539397c8a4d5b42c5c2c60b2fd8', 'dropTrigger triggerName=db_trigger', '', 'EXECUTED', NULL, 'dropcatalogtrigger,lbl-trig', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::7::dropTrigger-proCatalog::Liquibase Pro User
DROP TRIGGER table_trigger_deux
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('7::dropTrigger-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 27, '8:e3dd925e4c1d8c5da328726d092945ec', 'dropTrigger triggerName=table_trigger_deux', '', 'EXECUTED', NULL, 'droptrigger,lbl-trig', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::4::dropCC-proCatalog::Liquibase Pro User
ALTER TABLE Persons DROP CONSTRAINT chk_Person
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('4::dropCC-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 28, '8:bdcd47644f81e75b61649c57adf9817a', 'dropCheckConstraint constraintName=chk_Person, tableName=Persons', '', 'EXECUTED', NULL, 'dropcheckconstraint,lbl-cc', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::namespaceDatical::Datical (generated)
INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID, TAG) VALUES ('namespaceDatical', 'Datical (generated)', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 29, '8:d7f6cfe3454adb7c8f76de668dfc091e', 'tagDatabase', '', 'EXECUTED', NULL, 'namespacetest', '3.8.2-DAT-3598-SNP', '3847767930', 'namespaceTest')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::namespaceAppdba::addCC-proCatalog::Liquibase Pro User
ALTER TABLE [Persons] ADD CONSTRAINT [chk_Person] CHECK (([P_Id]>(0) AND [City]='Austin'))
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('namespaceAppdba::addCC-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 30, '8:5e664002fca240883e6728a3078023a4', 'addCheckConstraint constraintName=chk_Person, tableName=Persons', '', 'EXECUTED', NULL, 'namespacetest', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::namespaceFunction::createFunction-proCatalog::Liquibase Pro User
CREATE FUNCTION [dbo].[emailFunction]()
RETURNS VARCHAR(100)
AS
BEGIN
DECLARE @rtEmail VARCHAR
SET @rtEmail='random@datical.com'
RETURN @rtEmail
END
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('namespaceFunction::createFunction-proCatalog', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 31, '8:bfdb067647d26bce7755de59000a2440', 'createFunction functionName=emailFunction', '', 'EXECUTED', NULL, 'namespacetest', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::1::columnOrder123-PROSCHEMA::Liquibase Pro User
CREATE TABLE COLUMN_ORDER (COLUMN1 varchar(20), COLUMN2 varchar(20), COLUMN3 varchar(20))
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('1::columnOrder123-PROSCHEMA', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 32, '8:1f702550fb575ee944eabf8261565651', 'createTable tableName=COLUMN_ORDER', '', 'EXECUTED', NULL, 'urldb', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Changeset mssql_lbpro_master_changelog_no_catalog.xml::1::columnOrder231-PROSCHEMA::Liquibase Pro User
CREATE TABLE column_order (column2 varchar(20), column3 varchar(20), column1 varchar(20))
GO

INSERT INTO DATABASECHANGELOG (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('1::columnOrder231-PROSCHEMA', 'Liquibase Pro User', 'mssql_lbpro_master_changelog_no_catalog.xml', GETDATE(), 33, '8:39f420962f02a3a1d0ec2f2548b628ad', 'createTable tableName=column_order', '', 'EXECUTED', NULL, 'refurldb', '3.8.2-DAT-3598-SNP', '3847767930')
GO

-- Release Database Lock
UPDATE DATABASECHANGELOGLOCK SET LOCKED = 0, LOCKEDBY = NULL, LOCKGRANTED = NULL WHERE ID = 1
GO

{% endhighlight%}
</details>
<br>

## `updateSQL` Command with the Labels Parameter
The `updateSQL` command allows you to also run a `--labels` parameter to determine which changesets in the *changelog* to evaluate based on its label. You can view your labels in your *changelog*

<details>
<summary style="font-size:125%;color:blue;">Changelog Example</summary>
<br>
{% highlight xml %}

<?xml version="1.1" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"  
  xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"  
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns:pro="http://www.liquibase.org/xml/ns/pro"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd 
  http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.6.xsd
  http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-3.8.xsd">

<!-- SETUP: Create tables and function for other objects to use. -->
  <changeSet author="Liquibase Pro User"  id="1::createTableforSynonym-proschema" labels="setup" objectQuotingStrategy="QUOTE_ALL_OBJECTS">
    <createTable schemaName="proschema" tableName="primary_table">
      <column name="name" type="CHAR(20)"/>
    </createTable>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="2::createTableforView-proschema" labels="setup" objectQuotingStrategy="QUOTE_ALL_OBJECTS">
    <createTable schemaName="proschema" tableName="account">
      <column name="acct_num" type="NUMBER(20,0)"/>
      <column name="amoount" type="NUMBER(10,2)"/>
    </createTable>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="3::createTableforCC-proschema" labels="setup" objectQuotingStrategy="QUOTE_ALL_OBJECTS">
    <createTable schemaName="proschema" tableName="suppliers">
      <column name="supplier_id" type="NUMBER(4, 0)"/>
      <column name="supplier_name" type="VARCHAR2(50 BYTE)"/>
    </createTable>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="4::functionForTrigger" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="setup">
    <pro:createFunction path="sql/postgres_setup_function.sql" functionName="canned_spam" schemaName="proschema"/>
    <rollback>
      <sqlFile endDelimiter=";" path="sql/postgres_setup_rollback.sql" splitStatements="true" stripComments="true"/>
    </rollback>
  </changeSet>         

  <!--SYNONYM - Not supported in Postgres Community -->

  <!-- VIEW -->
  <!-- Views are not coming from the Pro extension, but exist in Community, and we should validate view changes work after our changes. -->    
  <changeSet author="Liquibase Pro User" id="1::createView-PROSCHEMA" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="createView,lbl-view">
    <createView fullDefinition="true" path="sql/postgres_master_view.sql" schemaName="proschema" viewName="view1"/>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="2::dropView-proschema" labels="dropView,lbl-view">
    <dropView viewName="view1" schemaName="proschema"/>
  </changeSet>

  <!-- PROCEDURE -->
  <!-- Procedures are not coming from the Pro extension, but exist in Community, and we should validate procedure changes work after our changes. -->    
  <changeSet author="Liquibase Pro User" id="1::createProc-proschema" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="createProcedure,lbl-proc">
    <createProcedure path="sql/postgres_master_proc.sql" procedureName="simple_proc" schemaName="proschema"/>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="2::dropProc-proschema" labels="dropProcedure,lbl-proc">
    <dropProcedure procedureName="simple_proc" schemaName="proschema"/>
  </changeSet>  

  <!-- FUNCTION -->
  <changeSet author="Liquibase Pro User" id="1::createFunction-proschema" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="createFunction,rollbackFunction, lbl-func">
    <pro:createFunction functionName="last_updated" path="sql/postgres_master_function.sql" schemaName="proschema"/>
    <rollback>
      <sqlFile endDelimiter=";" path="sql/postgres_master_rollback.sql" splitStatements="true" stripComments="true"/>
    </rollback>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="2::dropFunc-proschema" labels="dropFunction,lbl-func">
    <pro:dropFunction functionName="last_updated" schemaName="proschema"/>
  </changeSet>  

  <!-- TRIGGER -->  
  <changeSet author="Liquibase Pro User" id="1::addTrigger-proschema" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="createTrigger,lbl-trg">
    <pro:createTrigger disabled="false" path="sql/postgres_master_trigger.sql" schemaName="proschema" tableName="primary_table" triggerName="dinner_time"/>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="2::disableTrigger-proschema" labels="disableTrigger,lbl-trig">
    <pro:disableTrigger triggerName="dinner_time" tableName="primary_table" schemaName="proschema"/>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="3::enableTrigger-proschema" labels="enableTrigger,lbl-trig">
    <pro:enableTrigger triggerName="dinner_time" tableName="primary_table" schemaName="proschema"/>
  </changeSet>

  <changeSet author="Liquibase Pro User" id="4::renameTrigger-proschema" labels="renameTrigger,lbl-trg">
    <pro:renameTrigger oldTriggerName="dinner_time" newTriggerName="midnight_snack" tableName="primary_table" schemaName="proschema"/>
  </changeSet>  

  <changeSet author="Liquibase Pro User" id="5::dropTrigger-proschema" labels="dropTrigger,lbl-trg">
    <pro:dropTrigger triggerName="midnight_snack" schemaName="proschema" tableName="primary_table"/>
  </changeSet>

  <!-- CHECK CONSTRAINT -->
  <!-- disable/enableCheckConstraint are not supported on Postgres. -->
  <changeSet author="Liquibase Pro User" id="1::addCC-proschema" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="addCheckConstraint,lbl-cc">
    <pro:addCheckConstraint constraintName="check_supplier_id" schemaName="proschema" disabled="false" tableName="suppliers">supplier_id BETWEEN 100 and 9999</pro:addCheckConstraint>
  </changeSet>  

  <changeSet author="Liquibase Pro User" id="4::dropCC-PROSCHEMA" labels="dropCheckConstraint,lbl-cc">
    <pro:dropCheckConstraint constraintName="check_supplier_id" tableName="suppliers" schemaName="proschema"/>
  </changeSet>    

</databaseChangeLog>

{% endhighlight %}
</details>
<br>
To use the `updateSQL` command with the labels parameter, type the following into your command prompt:
{% highlight text %}

liquibase --changeLogFile=changelog.xml --outputFile=updateSql.txt --labels=setup updateSQL

{% endhighlight %}
<br>

<details>
<summary style="font-size:125%;color:blue;">SQL Output Example</summary>
The following is an example of the `updateSQL` command output with the labels parameter enabled:

{% highlight sql %}

-- *********************************************************************
-- Update Database Script
-- *********************************************************************
-- Change Log: changelog.xml
-- Ran at: 11/12/19 3:48 PM
-- Against: jenkinsci@jdbc:postgresql://localhost:5432/jenkinsci
-- Liquibase version: 3.8.1-local-SNAPSHOT
-- *********************************************************************

-- Create Database Lock Table
CREATE TABLE public.databasechangeloglock (ID INTEGER NOT NULL, LOCKED BOOLEAN NOT NULL, LOCKGRANTED TIMESTAMP WITHOUT TIME ZONE, LOCKEDBY VARCHAR(255), CONSTRAINT DATABASECHANGELOGLOCK_PKEY PRIMARY KEY (ID));

-- Initialize Database Lock Table
DELETE FROM public.databasechangeloglock;

INSERT INTO public.databasechangeloglock (ID, LOCKED) VALUES (1, FALSE);

-- Lock Database
UPDATE public.databasechangeloglock SET LOCKED = TRUE, LOCKEDBY = '172.18.0.1 (172.18.0.1)', LOCKGRANTED = '2019-11-12 15:48:30.445' WHERE ID = 1 AND LOCKED = FALSE;

-- Create Database Change Log Table
CREATE TABLE public.databasechangelog (ID VARCHAR(255) NOT NULL, AUTHOR VARCHAR(255) NOT NULL, FILENAME VARCHAR(255) NOT NULL, DATEEXECUTED TIMESTAMP WITHOUT TIME ZONE NOT NULL, ORDEREXECUTED INTEGER NOT NULL, EXECTYPE VARCHAR(10) NOT NULL, MD5SUM VARCHAR(35), DESCRIPTION VARCHAR(255), COMMENTS VARCHAR(255), TAG VARCHAR(255), LIQUIBASE VARCHAR(20), CONTEXTS VARCHAR(255), LABELS VARCHAR(255), DEPLOYMENT_ID VARCHAR(10));

-- Changeset changelog.xml::1::createTableforSynonym-proschema::Liquibase Pro User
CREATE TABLE "proschema"."primary_table" ("name" CHAR(20));

INSERT INTO public.databasechangelog (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('1::createTableforSynonym-proschema', 'Liquibase Pro User', 'changelog.xml', NOW(), 1, '8:2e63963bef0a14594b566e06c3eabe2d', 'createTable tableName=primary_table', '', 'EXECUTED', NULL, 'setup', '3.8.1-local-SNP', '3595312173');

-- Changeset changelog.xml::2::createTableforView-proschema::Liquibase Pro User
CREATE TABLE "proschema"."account" ("acct_num" numeric(20, 0), "amoount" numeric(10, 2));

INSERT INTO public.databasechangelog (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('2::createTableforView-proschema', 'Liquibase Pro User', 'changelog.xml', NOW(), 2, '8:344a50de118d3db500c0b28b76e14e81', 'createTable tableName=account', '', 'EXECUTED', NULL, 'setup', '3.8.1-local-SNP', '3595312173');

-- Changeset changelog.xml::3::createTableforCC-proschema::Liquibase Pro User
CREATE TABLE "proschema"."suppliers" ("supplier_id" numeric(4, 0), "supplier_name" VARCHAR(50));

INSERT INTO public.databasechangelog (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('3::createTableforCC-proschema', 'Liquibase Pro User', 'changelog.xml', NOW(), 3, '8:19236a09a645a2fecd0707b7e3efe4c1', 'createTable tableName=suppliers', '', 'EXECUTED', NULL, 'setup', '3.8.1-local-SNP', '3595312173');

-- Changeset changelog.xml::4::functionForTrigger::Liquibase Pro User
SET SEARCH_PATH=proschema;

CREATE OR REPLACE FUNCTION "proschema".canned_spam()
    RETURNS trigger
    SET SCHEMA 'proschema'
    AS $$
        BEGIN
            RAISE NOTICE 'Canned Spam in a frying pan: ick';
            RETURN NEW;
        END ;
    $$
LANGUAGE plpgsql;

INSERT INTO public.databasechangelog (ID, AUTHOR, FILENAME, DATEEXECUTED, ORDEREXECUTED, MD5SUM, DESCRIPTION, COMMENTS, EXECTYPE, CONTEXTS, LABELS, LIQUIBASE, DEPLOYMENT_ID) VALUES ('4::functionForTrigger', 'Liquibase Pro User', 'changelog.xml', NOW(), 4, '8:d26a1492fbf2b697a634dad498a87096', 'createFunction functionName=canned_spam', '', 'EXECUTED', NULL, 'setup', '3.8.1-local-SNP', '3595312173');

-- Release Database Lock
UPDATE public.databasechangeloglock SET LOCKED = FALSE, LOCKEDBY = NULL, LOCKGRANTED = NULL WHERE ID = 1;

{% endhighlight %}
</details>
<br>

## `futureRollbackSQL` Command
The `futureRollbackSQL` command generates SQL that reverses changes you applied while using the `updateSQL` command.

To run the `futureRollbackSQL` command, type the following into your command prompt:

{% highlight text %}

liquibase --changeLogFile=mssql_lbpro_master_changelog_no_catalog.xml futureRollbackSQL

{% endhighlight %}
<br>

<details><summary style="font-size:125%;color:blue;">SQL Output Example</summary>

{% highlight text %}
Coming Soon
{% endhighlight %}

</details>
<br>

#### Note for Liquibase Pro Users
Liquibase Pro allows users to also produce deployable SQL for Stored Logic. If you are a Liquibase Pro user, and you are trying to run the `futureRollbackSQL` command, make sure you add a `<rollback>` tag to your changesets so you output the correct SQL, like so:

{% highlight xml %}

<changeSet author="Liquibase Pro User" id="1::createFunction-proCatalog" objectQuotingStrategy="QUOTE_ALL_OBJECTS" labels="createFunction,rollbackFunction, lbl-func">
    <pro:createFunction functionName="emailFunction" path="sql/lbpro_master_func.sql" schemaName="dbo"/>    
    <rollback>
        <sqlFile endDelimiter="GO" path="sql/lbpro_master_func_rollback.sql" splitStatements="true" stripComments="true"/>
    </rollback>
</changeSet>

{% endhighlight %}