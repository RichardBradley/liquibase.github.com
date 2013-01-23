---
layout: default
title: Add unique constraint
---

# Add Unique Constraint #

Adds a unique constrant to an existing column or set of columns.


## Sample ##

<code xml>
<addUniqueConstraint tableName="person"
    columnNames="id"
    constraintName="pk_person"/>
</code>

## Available Attributes ##

^ tableName  | Name of the table to create the unique constraint on **[required]**  | 
^ schemaName  | Name of the table schema
^ columnNames  | Name of the column(s) (comma separated if mulitiple) to create the unique constraint on **[required]**  | 
^ constraintName  | Name of unique constraint **[required]**  | 
^ tablespace  | "Tablespace" (file group in SQL Server) to create the index in | 


## Database Compatiblity ##

^ MySQL  | Does not support tablespaces  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | Does not support specifying tablespace when adding constraints to a table  | 
^ Derby  | Does not support tablespaces  | 
^ HSQL  | Does not support tablespaces  | 
^ H2  | Does not support tablespaces  | 
^ Caché  | Does not support tablespaces  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | The value of "constraintName" is ignored but required  |

Automatic Rollback Support: **YES**