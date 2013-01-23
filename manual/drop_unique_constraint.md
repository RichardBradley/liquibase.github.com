---
layout: default
title: Drop unique constraint
---

# Drop Unique Constraint #

Drops an existing unique constraint.

## Sample ##

<code xml>
<dropUniqueConstraint tableName="person" constraintName="pk_person"/>
</code>


## Available Attributes ##

^ tableName | Name of the table to drop the unique constraint from **[required]** |
^ schemaName | Name of the table schema |
^ constraintName | Name of unique constraint to drop **[required]** |


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
^ SQLite  | The "constraintName" attribute is used to specify the column name  |

Automatic Rollback Support: **NO**