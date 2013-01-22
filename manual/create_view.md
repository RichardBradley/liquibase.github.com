====== Create View ======

Creates a new database view.

===== Sample =====

<code xml>
<createView viewName="personView">
    select id, firstname from person
</createView>
</code>



===== Available Attributes =====

^ viewName  | Name of the view to create **[required]**  | 
^ schemaName  | Name of the view schema  | 
^ replaceIfExists  | Use "create or replace" syntax, introduced in v1.5 (="true"/"false")  |
^ NESTED TEXT  | SQL for generating the view **[required]**  | 



===== Database Compatiblity =====

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | "replaceIfExists" not available  | 
^ Sybase  | "replaceIfExists" not available  | 
^ DB2  | No Issues  | 
^ Derby  | "replaceIfExists" not available  | 
^ HSQL  | "replaceIfExists" not available  | 
^ H2  | "replaceIfExists" not available  | 
^ Caché  | "replaceIfExists" not available  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**