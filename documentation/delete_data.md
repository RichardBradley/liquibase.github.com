---
layout: default
title: Delete data
---

# Delete Data #

Deletes data from an existing table

## Samples ##

{% highlight xml %}
<delete tableName="People">
    <where>id=2</where>
</delete>
{% endhighlight %}

{% highlight xml %}
<delete tableName="People">
</delete>
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name of the table to delete data from  | 
^ schemaName  | Name of the table schema  | 

## Available Sub-Tags ##

^ where \[TEXT\]  | Where clause for delete statement |


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