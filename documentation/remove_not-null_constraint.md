---
layout: default
title: Remove not-null constraint
---

# Drop Not-Null Constraint #

Makes a column nullable.

## Sample ##

{% highlight xml %}
<dropNotNullConstraint tableName="employee" columnName="employer_id"/>
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name of the table containing that the column to drop the constraint from **required**  |
^ schemaName  | Name of the table schema  | 
^ columnName  | Name of the column to drop the constraint from **required**  |
^ columnDataType  | Current data type of the column \[required for MySQL, MS-SQL, & PostgreSQL\]  |


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
^ Firebird  | Not Supported  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**