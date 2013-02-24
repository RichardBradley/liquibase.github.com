---
layout: default
title: Stop
---

# Stop Liquibase Execution #

Stops Liquibase execution with a message.  Mainly useful for debugging and stepping through a changelog.  //Since Liquibase 1.9//

## Samples ##

{% highlight xml %}
<stop>Halted Liquibase for debugging</stop>
{% endhighlight %}

## Available Attributes ##

^ tag text | Message to output when execution stops.  | 


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

Automatic Rollback Support: **N/A**