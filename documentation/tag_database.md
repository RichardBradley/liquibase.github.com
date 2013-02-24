---
layout: default
title: Tag database
---

# Tag Database #

Applies a tag to the database for future [rollback](rollback.html).  Since Liquibase 1.6

## Samples ##

{% highlight xml %}
<tagDatabase tag="version_1.3"/>
{% endhighlight %}

## Available Attributes ##

^ tag  | tag to apply **required**  |


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