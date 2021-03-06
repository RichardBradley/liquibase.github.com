====== Create Index ======

Creates an index on an existing column or set of columns.

===== Samples =====

<code xml>
<createIndex tableName="user" indexName="idx_user_username">
    <column name="username"/>
</createIndex>
</code>

<code xml>
<createIndex tableName="user" indexName="idx_person_name">
    <column name="firstname"/>
    <column name="lastname"/>
</createIndex>
</code>


===== Available Attributes =====

^ tableName  | Name of the table to add the index to **[required]**  | 
^ schemaName  | Name of the table schema  | 
^ indexName  | Name of the index to create  | 
^ tablespace  | "Tablespace" (file group in SQL Server) to create the index in  | 
^ unique  | Are the values unique //Since 1.8//  | 

===== Available Sub-Tags =====

^ column  | Column(s) to add to the index. See the [[column|column tag documentation]] for more information  | 


===== Database Compatiblity =====

^ MySQL  | Does not support tablespaces  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | Does not support tablespaces  | 
^ HSQL  | Does not support tablespaces  | 
^ H2  | Does not support tablespaces  | 
^ Caché  | Does not support tablespaces  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  | 

Automatic Rollback Support: **YES**