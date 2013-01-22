====== Drop Index ======

Drops an existing index


===== Sample =====
<!-- Works on Oracle on Liquibase 1.6;  Does not work for SQL Server. -->
<code xml>
<dropIndex indexName="idx_user_username"/>
</code>

<!-- Works on Oracle and SQL Server on Liquibase 1.6; -->
<code xml>
<dropIndex indexName="idx_user_username" tableName="table_name" />
</code>

===== Available Attributes =====

^ indexName  | Name of the index to drop **[required]**  | 
^ tableName  | Name of the indexed table **[required]**  | 


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
^ SQLite  | No Issues  | 

Automatic Rollback Support: **NO**