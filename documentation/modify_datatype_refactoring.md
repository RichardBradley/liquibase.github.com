---
layout: default
title: Modify datatype refactoring
---

# Modify Data Type Refactoring #

Makes changes to an the data type of an existing column.

## Sample ##

{% highlight xml %}
<modifyDataType tableName="person" columnName="firstname" newDataType="varchar(500)"/>
<modifyDataType tableName="person" columnName="firstname" newDataType="java.sql.Types.VARCHAR(500)"/>
{% endhighlight %}

## Available Attributes ##

^ tableName   | Name of the table that the column to modify is in **required**   |
^ columnName  | Name of the column to modify **required**   |
^ newDataType | New data type of the column **required**   |
^ schemaName  | Name of the table schema  |
^ nullable    | If the column is nullable | 


## Available Sub-Tags ##


## Database Compatiblity ##

^ MySQL  | No Issues  |
^ PostgreSQL  | No Issues  |
^ Oracle  | No Issues  |
^ MS-SQL  | No Issues  |
^ Sybase  | No Issues  |
^ DB2  | Some Issues  |
^ Derby  | No Issues  |
^ HSQL  | No Issues  |
^ H2  | No Issues  |
^ Caché  | No Issues  |
^ Firebird  | No Issues  |
^ MaxDB  | No Issues  |
^ SQLite  | No Issues  |

Automatic Rollback Support: **NO**
