---
layout: default
title: Drop foreign key constraint
---

# Drop Foreign Key Constraint #

Drops an existing foreign key

## Sample ##

{% highlight xml %}
<dropForeignKeyConstraint
    constraintName="fk_address_person"
    baseTableName="address"/>
{% endhighlight %}

## Available Attributes ##

^ constraintName  | Name of the foreign-key constraint to drop **required**  |
^ baseTableName  | Name of the table containing the foreign key **required**  |
^ baseTableSchemaName  | Name of the table schema  | 


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
^ SQLite  | Not supported in database  |

Automatic Rollback Support: **NO**