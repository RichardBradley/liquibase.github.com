====== Drop Column Refactoring ======

Drops an existing column

===== Sample =====

<code xml>
<dropColumn tableName="person" columnName="ssn"/>
</code>

===== Available Attributes =====

^ tableName  | Name of the table containing the column to drop **[required]**  | 
^ schemaName  | Name of the table schema  | 
^ columnName  | Name of the column to drop **[required]**  | 



===== Database Compatiblity =====

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
^ SQLite  | Not Supported  |

Automatic Rollback Support: **NO**
