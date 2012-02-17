====== Add Primary Key ======

Adds creates a primary key out of an existing column or set of columns.

===== Sample =====

<code xml>
<addPrimaryKey tableName="person"
    columnNames="id"
    constraintName="pk_person"/>
</code>

===== Available Attributes =====

^ tableName  | Name of the table to create the primary key on **[required]**  | 
^ schemaName  | Name of the table schema  | 
^ columnNames  | Name of the column(s) (comma separated if multiple) to create the primary key on **[required]**  | 
^ constraintName  | Name of primary key constraint **[required]**  | 
^ tablespace  | "Tablespace" (file group in SQL Server) to create the primary key index in  | 


===== Database Compatiblity =====

^ MySQL  | No Issues, Does not support tablespaces  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | Does not support setting tablespace for newly added primary keys  | 
^ Derby  | No Issues, Does not support tablespaces  | 
^ HSQL  | No Issues, Does not support tablespaces  | 
^ H2  | No Issues, Does not support tablespaces  | 
^ Caché  | No Issues, Does not support tablespaces  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | Not supported in database  |

Automatic Rollback Support: **YES**