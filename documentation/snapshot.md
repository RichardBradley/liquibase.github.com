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
2.	Run the following command: `liquibase --outputFile=snapsot.json snapshot –snapshotFormat=json`
 
## Output
 
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
