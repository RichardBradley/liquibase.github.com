---
layout: default
title: Rename table
---

# Rename Table #

Renames an existing table.

## Sample ##

{% highlight xml %}
<renameTable oldTableName="employee" newTableName="person"/>
{% endhighlight %}

## Available Attributes ##

^ schemaName  | Name of the table schema  | 
^ oldTableName  | Existing name of the table to rename **required**  |
^ newTableName  | Name to rename the table to **required**  |


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
^ Caché  | Not Supported  | 
^ Firebird  | Not Supported  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**
