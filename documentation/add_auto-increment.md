---
layout: default
title: Add auto-increment
---

# Add Auto-Increment #

Converts an existing column to be an auto-increment column.

## Sample ##

<code xml>
<addAutoIncrement tableName="person" columnName="id" columnDataType="int"/>
</code>

## Available Attributes ##

^ tableName  | Name of the table to add the auto-increment to **[required]**  | 
^ schemaName  | Name of the table schema  | 
^ columnName  | Name of column to make auto-increment **[required]**  | 
^ columnDataType  | Current data type of the column to make auto-increment **[required]**  | 




## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Auto-Increment Support in Database  | 
^ MS-SQL  | Not Currently Supported  | 
^ Sybase  | Not Currently Supported  | 
^ DB2  | No Issues  | 
^ Derby  | Not Currently Supported  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Auto-Increment Support in Database  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | If the column type is not INTEGER it is converted to INTEGER  |

Automatic Rollback Support: **NO**