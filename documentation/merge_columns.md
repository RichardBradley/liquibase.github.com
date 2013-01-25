---
layout: default
title: Merge columns
---

# Merge Columns #

Concatenates the values in two columns, joins them by with string, and stores the resulting value in a new column.

## Sample ##

{% highlight xml %}
<mergeColumns tableName="person"
    column1Name="phoneAreaCode"
    joinString="-"
    column2Name="phoneSuffix"
    finalColumnName="phone"
    finalColumnType="varchar(50)"
/>
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name table containing the columns to join **required**  |
^ schemaName  | Name of the table schema  | 
^ column1Name  | Name column containing the first half of the data **required**  |
^ joinString  | String to place include between the values from column1 and column2 (may be empty) **required**  |
^ column2Name  | Name column containing the second half of the data **required**  |
^ finalColumnName  | Name of the column to create **required**  |
^ finalColumnType  | Datatype of the column to create **required**  |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | Not Supported  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **NO**