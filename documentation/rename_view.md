---
layout: default
title: Rename view
---

# Rename View #

Renames an existing view

## Sample ##

{% highlight xml %}
<renameView oldViewName="personView" newViewName="people"/>
{% endhighlight %}

## Available Attributes ##

^ oldViewName  | Name of the view to rename **required**  |
^ newViewName  | Name to rename the view to **required**  |
^ schemaName  | Name of the view schema  | 


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | Not Supported  | 
^ HSQL  | Not Supported  | 
^ H2  | No Issues  | 
^ Caché  | Not Supported  | 
^ Firebird  | Not Supported  | 
^ MaxDB  | No Issues  | 
^ SQLite  | Not Supported  |

Automatic Rollback Support: **YES**