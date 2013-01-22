====== Drop Primary Key ======

Drops an existing primary key.

===== Sample =====

<code xml>
<dropPrimaryKey tableName="person" constraintName="pk_person"/>
</code>


===== Available Attributes =====

^ tableName  | Name of the table to drop the primary key of **[required]**  | 
^ schemaName  | Name of the table schema  | 
^ constraintName  | Name of primary key constraint to drop  | 



===== Database Compatiblity =====

^ MySQL  | No Issues  | 
^ PostgreSQL  | Requires a non-null 'constraintName'  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | Requires a non-null 'constraintName'  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | No Issues  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | Requires a non-null 'constraintName'  | 
^ MaxDB  | No Issues  | 
^ SQLite  | Not supported in database  |

Automatic Rollback Support: **NO**