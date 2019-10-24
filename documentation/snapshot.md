---
layout: default
title: snapshot Command
---

# Liquibase Commands: `snapshot`
The `snapshot` command creates a non-deployable JSON file that represents the current state of your database. A snapshot is like a photograph of your database.

## Uses
The `snapshot` command is typically used when you want to quickly compare changes in your database or keep a record of your current database state. Snapshots can also be used to compare:
+ A previous database state to an online database
+ A previous database state to another snapshot.
> **Note:** Running a `diff` command using at least one *snapshot.json* file is faster than using a `diff` command with two online databases. However, keep in mind that snapshots can become stale over time.

## Running the snapshot Command
To take a snapshot of your database:
1.	Configure the *liquibase.properties* file to include your driver class path, URL, and user authentication information for your database.
> **Note:** For information on how to configure your *liquibase.properties* file, view the [Creating & Configuring your *liquibase.properties* File](config_properties.html) topic in the knowledge base.
2.	Run the following command: `liquibase --outputFile=myschemaSnapshot.json snapshot --snapshotFormat=snapshot.json`

 
## Output
<details>
<summary style="font-size:200%;color:blue;">myschemaSnapshot.json example</summary>
<br>
{% highlight xml %}
Liquibase Pro 3.8.2 by Datical licensed to Liquibase Pro Customer
{
  "snapshot": {
    "created": "2019-10-23T16:10:40.306",
    "database": {
      "productVersion": "Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 - 64bit Production\nWith the Partitioning option",
      "shortName": "oracle",
      "majorVersion": "11",
      "minorVersion": "2",
      "user": "MYSCHEMA",
      "productName": "Oracle",
      "url": "jdbc:oracle:thin:@localhost:1521:ORCL"
    },
    "objects": {
      "com.datical.liquibase.ext.appdba.synonym.Synonym": [
        {
          "synonym": {
            "name": "PRIVATETABLESYN",
            "objectName": "PRIMARY_TABLE",
            "objectSchema": "liquibase.structure.core.Schema#b689101",
            "private": true,
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689152"
          }
        }]
      ,
      "liquibase.structure.core.Catalog": [
        {
          "catalog": {
            "default": true,
            "name": "MYSCHEMA",
            "snapshotId": "b689100"
          }
        }]
      ,
      "liquibase.structure.core.Column": [
        {
          "column": {
            "defaultValue": "1!{java.math.BigDecimal}",
            "name": "ACTIVE",
            "nullable": true,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689129",
            "snapshotId": "b689133",
            "type": {
              "columnSize": "1!{java.lang.Integer}",
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "defaultValue": "1!{java.math.BigDecimal}",
            "name": "ACTIVE",
            "nullable": true,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689123",
            "snapshotId": "b689127",
            "type": {
              "columnSize": "1!{java.lang.Integer}",
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "defaultValue": "1!{java.math.BigDecimal}",
            "name": "ACTIVE",
            "nullable": true,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689102",
            "snapshotId": "b689106",
            "type": {
              "columnSize": "1!{java.lang.Integer}",
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "defaultValue": "1!{java.math.BigDecimal}",
            "name": "ACTIVE",
            "nullable": true,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689142",
            "snapshotId": "b689146",
            "type": {
              "columnSize": "1!{java.lang.Integer}",
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "ACTIVE",
            "nullable": true,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.View#b689148",
            "snapshotId": "b689151",
            "type": {
              "columnSize": "1!{java.lang.Integer}",
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "AUTHOR",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689110",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "COMMENTS",
            "nullable": true,
            "order": "9!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689117",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "CONTEXTS",
            "nullable": true,
            "order": "12!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689120",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "DATEEXECUTED",
            "nullable": false,
            "order": "4!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689112",
            "type": {
              "columnSize": "11!{java.lang.Integer}",
              "dataTypeId": "93!{java.lang.Integer}",
              "typeName": "TIMESTAMP(6)"
            }
          }
        },
        {
          "column": {
            "name": "DEPLOYMENT_ID",
            "nullable": true,
            "order": "14!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689122",
            "type": {
              "columnSize": "10!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "DESCRIPTION",
            "nullable": true,
            "order": "8!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689116",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "EXECTYPE",
            "nullable": false,
            "order": "6!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689114",
            "type": {
              "columnSize": "10!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "FILENAME",
            "nullable": false,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689111",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689109",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689135",
            "snapshotId": "b689137",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689129",
            "snapshotId": "b689131",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689123",
            "snapshotId": "b689125",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689102",
            "snapshotId": "b689104",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689142",
            "snapshotId": "b689144",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "ID",
            "nullable": false,
            "order": "1!{java.lang.Integer}",
            "relation": "liquibase.structure.core.View#b689148",
            "snapshotId": "b689149",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "LABELS",
            "nullable": true,
            "order": "13!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689121",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "LIQUIBASE",
            "nullable": true,
            "order": "11!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689119",
            "type": {
              "columnSize": "20!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "LOCKED",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689135",
            "snapshotId": "b689138",
            "type": {
              "columnSize": "1!{java.lang.Integer}",
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "LOCKEDBY",
            "nullable": true,
            "order": "4!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689135",
            "snapshotId": "b689140",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "LOCKGRANTED",
            "nullable": true,
            "order": "3!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689135",
            "snapshotId": "b689139",
            "type": {
              "columnSize": "11!{java.lang.Integer}",
              "dataTypeId": "93!{java.lang.Integer}",
              "typeName": "TIMESTAMP(6)"
            }
          }
        },
        {
          "column": {
            "name": "MD5SUM",
            "nullable": true,
            "order": "7!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689115",
            "type": {
              "columnSize": "35!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "NAME",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689129",
            "snapshotId": "b689132",
            "type": {
              "columnSize": "50!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "NAME",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689123",
            "snapshotId": "b689126",
            "type": {
              "columnSize": "50!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "NAME",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689102",
            "snapshotId": "b689105",
            "type": {
              "columnSize": "50!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "NAME",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689142",
            "snapshotId": "b689145",
            "type": {
              "columnSize": "50!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "NAME",
            "nullable": false,
            "order": "2!{java.lang.Integer}",
            "relation": "liquibase.structure.core.View#b689148",
            "snapshotId": "b689150",
            "type": {
              "columnSize": "50!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        },
        {
          "column": {
            "name": "ORDEREXECUTED",
            "nullable": false,
            "order": "5!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689113",
            "type": {
              "dataTypeId": "3!{java.lang.Integer}",
              "decimalDigits": "0!{java.lang.Integer}",
              "typeName": "NUMBER"
            }
          }
        },
        {
          "column": {
            "name": "TAG",
            "nullable": true,
            "order": "10!{java.lang.Integer}",
            "relation": "liquibase.structure.core.Table#b689108",
            "snapshotId": "b689118",
            "type": {
              "columnSize": "255!{java.lang.Integer}",
              "columnSizeUnit": "BYTE!{liquibase.structure.core.DataType$ColumnSizeUnit}",
              "dataTypeId": "12!{java.lang.Integer}",
              "typeName": "VARCHAR"
            }
          }
        }]
      ,
      "liquibase.structure.core.Index": [
        {
          "index": {
            "columns": [
              "liquibase.structure.core.Column#b689137"]
            ,
            "name": "PK_DATABASECHANGELOGLOCK",
            "snapshotId": "b689136",
            "table": "liquibase.structure.core.Table#b689135",
            "unique": true
          }
        },
        {
          "index": {
            "columns": [
              "liquibase.structure.core.Column#b689131"]
            ,
            "name": "PK_DEPARTMENT",
            "snapshotId": "b689130",
            "table": "liquibase.structure.core.Table#b689129",
            "unique": true
          }
        },
        {
          "index": {
            "columns": [
              "liquibase.structure.core.Column#b689125"]
            ,
            "name": "PK_SERVICETECH",
            "snapshotId": "b689124",
            "table": "liquibase.structure.core.Table#b689123",
            "unique": true
          }
        },
        {
          "index": {
            "columns": [
              "liquibase.structure.core.Column#b689104"]
            ,
            "name": "PK_SERVICETECH2",
            "snapshotId": "b689103",
            "table": "liquibase.structure.core.Table#b689102",
            "unique": true
          }
        },
        {
          "index": {
            "columns": [
              "liquibase.structure.core.Column#b689144"]
            ,
            "name": "PK_SERVICETECH3",
            "snapshotId": "b689143",
            "table": "liquibase.structure.core.Table#b689142",
            "unique": true
          }
        }]
      ,
      "liquibase.structure.core.PrimaryKey": [
        {
          "primaryKey": {
            "backingIndex": "liquibase.structure.core.Index#b689136",
            "columns": [
              "liquibase.structure.core.Column#b689137"]
            ,
            "name": "PK_DATABASECHANGELOGLOCK",
            "snapshotId": "b689141",
            "table": "liquibase.structure.core.Table#b689135",
            "validate": true
          }
        },
        {
          "primaryKey": {
            "backingIndex": "liquibase.structure.core.Index#b689130",
            "columns": [
              "liquibase.structure.core.Column#b689131"]
            ,
            "name": "PK_DEPARTMENT",
            "snapshotId": "b689134",
            "table": "liquibase.structure.core.Table#b689129",
            "validate": true
          }
        },
        {
          "primaryKey": {
            "backingIndex": "liquibase.structure.core.Index#b689124",
            "columns": [
              "liquibase.structure.core.Column#b689125"]
            ,
            "name": "PK_SERVICETECH",
            "snapshotId": "b689128",
            "table": "liquibase.structure.core.Table#b689123",
            "validate": true
          }
        },
        {
          "primaryKey": {
            "backingIndex": "liquibase.structure.core.Index#b689103",
            "columns": [
              "liquibase.structure.core.Column#b689104"]
            ,
            "name": "PK_SERVICETECH2",
            "snapshotId": "b689107",
            "table": "liquibase.structure.core.Table#b689102",
            "validate": true
          }
        },
        {
          "primaryKey": {
            "backingIndex": "liquibase.structure.core.Index#b689143",
            "columns": [
              "liquibase.structure.core.Column#b689144"]
            ,
            "name": "PK_SERVICETECH3",
            "snapshotId": "b689147",
            "table": "liquibase.structure.core.Table#b689142",
            "validate": true
          }
        }]
      ,
      "liquibase.structure.core.Schema": [
        {
          "schema": {
            "catalog": "liquibase.structure.core.Catalog#b689100",
            "default": true,
            "name": "MYSCHEMA",
            "snapshotId": "b689101"
          }
        }]
      ,
      "liquibase.structure.core.Table": [
        {
          "table": {
            "columns": [
              "liquibase.structure.core.Column#b689109",
              "liquibase.structure.core.Column#b689110",
              "liquibase.structure.core.Column#b689111",
              "liquibase.structure.core.Column#b689112",
              "liquibase.structure.core.Column#b689113",
              "liquibase.structure.core.Column#b689114",
              "liquibase.structure.core.Column#b689115",
              "liquibase.structure.core.Column#b689116",
              "liquibase.structure.core.Column#b689117",
              "liquibase.structure.core.Column#b689118",
              "liquibase.structure.core.Column#b689119",
              "liquibase.structure.core.Column#b689120",
              "liquibase.structure.core.Column#b689121",
              "liquibase.structure.core.Column#b689122"]
            ,
            "name": "DATABASECHANGELOG",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689108"
          }
        },
        {
          "table": {
            "columns": [
              "liquibase.structure.core.Column#b689137",
              "liquibase.structure.core.Column#b689138",
              "liquibase.structure.core.Column#b689139",
              "liquibase.structure.core.Column#b689140"]
            ,
            "indexes": [
              "liquibase.structure.core.Index#b689136"]
            ,
            "name": "DATABASECHANGELOGLOCK",
            "primaryKey": "liquibase.structure.core.PrimaryKey#b689141",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689135"
          }
        },
        {
          "table": {
            "columns": [
              "liquibase.structure.core.Column#b689131",
              "liquibase.structure.core.Column#b689132",
              "liquibase.structure.core.Column#b689133"]
            ,
            "indexes": [
              "liquibase.structure.core.Index#b689130"]
            ,
            "name": "DEPARTMENT",
            "primaryKey": "liquibase.structure.core.PrimaryKey#b689134",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689129"
          }
        },
        {
          "table": {
            "columns": [
              "liquibase.structure.core.Column#b689125",
              "liquibase.structure.core.Column#b689126",
              "liquibase.structure.core.Column#b689127"]
            ,
            "indexes": [
              "liquibase.structure.core.Index#b689124"]
            ,
            "name": "SERVICETECH",
            "primaryKey": "liquibase.structure.core.PrimaryKey#b689128",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689123"
          }
        },
        {
          "table": {
            "columns": [
              "liquibase.structure.core.Column#b689104",
              "liquibase.structure.core.Column#b689105",
              "liquibase.structure.core.Column#b689106"]
            ,
            "indexes": [
              "liquibase.structure.core.Index#b689103"]
            ,
            "name": "SERVICETECH2",
            "primaryKey": "liquibase.structure.core.PrimaryKey#b689107",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689102"
          }
        },
        {
          "table": {
            "columns": [
              "liquibase.structure.core.Column#b689144",
              "liquibase.structure.core.Column#b689145",
              "liquibase.structure.core.Column#b689146"]
            ,
            "indexes": [
              "liquibase.structure.core.Index#b689143"]
            ,
            "name": "SERVICETECH3",
            "primaryKey": "liquibase.structure.core.PrimaryKey#b689147",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689142"
          }
        }]
      ,
      "liquibase.structure.core.View": [
        {
          "view": {
            "columns": [
              "liquibase.structure.core.Column#b689149",
              "liquibase.structure.core.Column#b689150",
              "liquibase.structure.core.Column#b689151"]
            ,
            "definition": "SELECT \"ID\",\"NAME\",\"ACTIVE\"\n    \nFROM \"MYSCHEMA\".\"DEPARTMENT\"",
            "editioning": false,
            "name": "VIEW1",
            "schema": "liquibase.structure.core.Schema#b689101",
            "snapshotId": "b689148"
          }
        }]

    },
    "snapshotControl": {
      "snapshotControl": {
        "includedType": [
          "com.datical.liquibase.ext.appdba.synonym.Synonym",
          "com.datical.liquibase.ext.storedlogic.checkconstraint.CheckConstraint",
          "com.datical.liquibase.ext.storedlogic.databasepackage.DatabasePackage",
          "com.datical.liquibase.ext.storedlogic.databasepackage.DatabasePackageBody",
          "com.datical.liquibase.ext.storedlogic.function.Function",
          "com.datical.liquibase.ext.storedlogic.javalogic.JavaClass",
          "com.datical.liquibase.ext.storedlogic.javalogic.JavaSource",
          "com.datical.liquibase.ext.storedlogic.trigger.Trigger",
          "liquibase.structure.core.Catalog",
          "liquibase.structure.core.Column",
          "liquibase.structure.core.ForeignKey",
          "liquibase.structure.core.Index",
          "liquibase.structure.core.PrimaryKey",
          "liquibase.structure.core.Schema",
          "liquibase.structure.core.Sequence",
          "liquibase.structure.core.StoredProcedure",
          "liquibase.structure.core.Table",
          "liquibase.structure.core.UniqueConstraint",
          "liquibase.structure.core.View"]

      }
    }
  }
}
Liquibase command 'snapshot' was executed successfully.
{% endhighlight %}
</details>
The `snapshot` command produces a JSON file that contains all your objects and places the file in the same hierarchy as your *changelog*.

Liquibase Community `snapshot` categories:
+ Catalog
+ Column
+ Foreign Key
+ Index
+ Primary Key
+ Schema
+ Sequence
+ Unique Constraints
+ View

Liquibase Pro `snapshot` categories:
+ Package
+ Package Body
+ Procedures
+ Function
+ Trigger
+ Synonyms
+ Check Constraints
