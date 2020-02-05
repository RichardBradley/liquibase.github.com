---
layout: default
title: Docs | snapshot Command 
---

# Liquibase Commands: snapshot
The `snapshot` command has two modes. When run without options, it will gather the current state of the database and show a text-based version of the schema to STDOUT. When
run with the `--snapshotFormat=JSON` option, creates a JSON file that represents the current state of your database. A snapshot is like a photograph of your database that
can be used in the [diff](/documentation/diff.html) or [diffChangeLog](/documentation/diffChangeLog.html) commands.

## Uses
The `snapshot` command is typically used when you want to quickly compare changes in your database or keep a record of your current database state. Snapshots can also be used to compare:
+ A previous database state to an online database
+ A previous database state to another snapshot.
> **Note:** Running a `diff` command using at least one *snapshot.json* file is faster than using a `diff` command with two online databases. However, keep in mind that a snapshot will no
longer reflect the current state of the database if the database is changed with the `update` command or if it is changed manually.

## Running the snapshot Command
To take a snapshot of your database:
1.	Configure the *liquibase.properties* file to include your driver class path, URL, and user authentication information for your database.
> **Note:** For information on how to configure your *liquibase.properties* file, view the [Creating & Configuring your *liquibase.properties* File](config_properties.html) topic in the knowledge base.
2.	Run the following command: `liquibase --outputFile=myschemaSnapshot.json snapshot --snapshotFormat=json`

## Using the snapshot in the diff and diffChangeLog commands

You can use the JSON format snapshot file in the diff and diffChangeLog commands. One typical workflow is:

  1. Make sure your local environment is up-to-date by getting the latest changelog from source control.
  2. Configure your liquibase.properties to point to a local development database and run `liquibase update` to ensure it has the latest schema.
  3. Take a snapshot of the local development database with `liquibase --outputFile=before.json snapshot --snapshotFormat=json`
  4. Make manual changes to the local development database as needed.
  5. Add the manual changes to the changelog with `liquibase --referenceUrl=offline:mysql?snapshot=before.json diffChangeLog`
  6. Review the changelog to ensure that it matches your expectations of the manual changes made.
  7. Mark the manual changes as deployed in the local development database by running `liquibase changeLogSync`
  8. Commit the changes to source control.

The format for the database URL when using a snapshot is:

{% highlight bash %}
offline:<dbtype>?snapshot=<path/to/snapshot.json>
{% endhighlight %}

The `<dbtype>` in that URL should be the Type Name from [the list of supported databases](/databases.html), and the `<path/to/snapshot.json>` is a path relative to where the command is running. 


## Output
<details>
<summary style="font-size:125%;color:blue;">myschemaSnapshot.json example</summary>
<br>
{% highlight json %}
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
      ,
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
}
{% endhighlight %}
</details>
The `snapshot` command produces a JSON file that contains all your objects and places the file in the same directory as your *changelog*.

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
