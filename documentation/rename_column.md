---
layout: default
title: Rename column
---

# Rename Column #

Renames an existing column

## Sample ##

{% highlight xml %}
<renameColumn tableName="person"
    oldColumnName="fname" newColumnName="firstName"/>
{% endhighlight %}

## Available Attributes ##
^ tableName  | Name of the table containing that the column to rename **required**  |
^ schemaName  | Name of the table schema  |
^ oldColumnName  | Existing name of the column to rename **required**  |
^ newColumnName  | Name to rename the column to **required**  |
^ columnDataType  | Current data type of the column (MySQL only)  |




## Database Compatiblity ##
^ MySQL  | No Issues  |
^ PostgreSQL  | No Issues  |
^ Oracle  | No Issues  |
^ MS-SQL  | No Issues  |
^ Sybase  | No Issues  |
^ DB2  | Not Supported  |
^ Derby  | No Issues  |
^ HSQL  | No Issues  |
^ H2  | No Issues  |
^ Caché  | Not Supported  |
^ Firebird  | No Issues  |
^ MaxDB  | No Issues  |
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**

