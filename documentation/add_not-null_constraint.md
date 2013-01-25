---
layout: default
title: Add not-null constraint
---

# Add Not-Null Constraint #

Adds a not-null constraint to an existing table. If a defaultNullValue attribute is passed, all null values for the column will be updated to the passed value before the constraint is applied.

## Sample ##

{% highlight xml %}
<addNotNullConstraint
        tableName="employee"
        columnName="employer_id"
        defaultNullValue="1" />
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name of the table to add the constraint to **required**  |
^ schemaName  | Name of the table schema  | 
^ columnName  | Name of the column to add the constraint to **required**  |
^ defaultNullValue  | Value to set all currently null values to. If not set, change will fail if null values exist  | 
^ columnDataType  | Current data type of the column (MySQL & MS-SQL only) **required** |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | No Issues  | 
^ HSQL  | Bug in HSQL causes add not null constraint to fail depending on your data  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | Not Supported  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**