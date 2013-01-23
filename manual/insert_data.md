---
layout: default
title: Insert data
---

# Insert Data #

Inserts data into an existing table

## Sample ##

<code xml>
<insert tableName="People">
    <column name="id" valueNumeric="2"/>
    <column name="firstname" value="Fred"/>
    <column name="lastname" value="Johnson"/>
    <column name="username" value="fjohnson"/>
    <column name="testid" valueNumeric="2"/>
</insert>
</code>

## Available Attributes ##

^ tableName  | Name of the table to insert data into  | 
^ schemaName  | Name of the table schema  | 

## Available Sub-Tags ##

^ column  | Data to insert into columns. See the [[column.html|column tag documentation]] for more information  |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | No Issues  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  | 

Automatic Rollback Support: **NO**