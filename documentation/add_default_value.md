---
layout: default
title: Add default value
---

# Add Default Value #

Adds a default value to the database definition for the specified column.

## Sample ##

{% highlight xml %}
<addDefaultValue tableName="file"
    columnName="fileName"
    defaultValue="New File"/>
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name of the table to containing the column **required**  |
^ schemaName  | Name of the table schema  | 
^ columnName  | Name of column to add a default value to **required**  |
^ defaultValue  | Default value **one of defaultValue required**  |
^ defaultValueNumeric  | Default numeric value **one of defaultValue required**  |
^ defaultValueBoolean  | Default boolean value **one of defaultValue required**  |
^ defaultValueDate  | Default date and/or time value **one of defaultValue required**  |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | May have issues with Derby versions prior to 10.3.1.4  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**