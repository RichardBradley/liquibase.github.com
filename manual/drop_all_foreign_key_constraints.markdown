====== Drop All Foreign Key Constraints ======

Drops all foreign key constraints for a table

===== Sample =====

<code xml>
<dropAllForeignKeyConstraints
    baseTableName="address"/>
</code>

===== Available Attributes =====

^ baseTableName  | Name of the table containing the foreign key **[required]**  | 
^ baseTableSchemaName  | Name of the table schema  | 


===== Database Compatiblity =====

^ MySQL  | Requires v5.1.10 (REFERENTIAL_CONSTRAINTS table)  | 
^ PostgreSQL  | No Issues(?)  | 
^ Oracle  | No Issues(?)  | 
^ MS-SQL  | No Issues(?)  | 
^ Sybase  | Not supported in database  | 
^ DB2  | No Issues(?)  | 
^ Derby  | Not supported in database  | 
^ HSQL  | Not supported in database  | 
^ H2  | Not supported in database  | 
^ Caché  | Not supported in database  | 
^ Firebird  | Not supported in database  | 
^ MaxDB  | Not supported in database  | 
^ SQLite  | Not supported in database  |

Automatic Rollback Support: **NO**