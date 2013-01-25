---
layout: default
title: Modify column
---

# Modify Column Refactoring #

This tag is deprecated in 2.0 see [Modify_Datatype_Refactoring](Modify_Datatype_Refactoring.html) instead.

Makes changes to an existing column such as the data type.

## Sample ##

{% highlight xml %}
<modifyColumn tableName="person">
    <column name="firstname" type="varchar(5000)"/>
</modifyColumn>
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name of the table that the column to modify is in **required**   |
^ schemaName  | Name of the table schema  | 


## Available Sub-Tags ##

^ column  | New column definition See the [ column tag documentation](column.html) for more information |



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
