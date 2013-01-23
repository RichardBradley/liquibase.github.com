---
layout: default
title: Add foreign key constraint
---

# Add Foreign Key Constraint #

Adds a foreign key constraint to an existing column.

## Sample ##

<code xml>
<addForeignKeyConstraint constraintName="fk_address_person"
    baseTableName="address" baseColumnNames="person_id"
    referencedTableName="person" referencedColumnNames="id"
/>
</code>




## Available Attributes ##

^ constraintName  | Name of the new foreign-key constraint **[required]**  | 
^ baseTableName  | Name of the table containing the foreign key **[required]**  | 
^ baseTableSchemaName  | Name of the base table schema  | 
^ baseColumnNames  | Name of column(s) (comma-separate if multiple) to place the foreign key on **[required]**  | 
^ referencedTableName  | Name of table the foreign key points to **[required]**  | 
^ referencedTableSchemaName  | Name of the referenced table schema  | 
^ referencedColumnNames  | Column(s) (comma-separate if multiple) the foreign key points to **[required]**  | 
^ deferrable  | Is the foreign key deferrable  | 
^ initiallyDeferred  | Is the foreign key initially deferred  | 
^ deleteCascade  | Should the constraint be marked "on delete cascade" //[deprecated in favor on onDelete="CASCADE"]// | 
^ onDelete  | ON DELETE functionality.  Possible values: "CASCADE", "SET NULL", "SET DEFAULT", "RESTRICT", "NO ACTION" //Since 1.8//  | 
^ onUpdate  | ON UPDATE functionality.  Possible values: "CASCADE", "SET NULL", "SET DEFAULT", "RESTRICT", "NO ACTION" //Since 1.8//  | 


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

Automatic Rollback Support: **YES**