====== Alter Sequence ======

Modifies properties of an existing sequence

===== Sample =====

<code xml>
<alterSequence sequenceName="seq_employee_id" incrementBy="10"/>
</code>

===== Available Attributes =====
^ sequenceName  | Name of the sequence to alter **[required]**  | 
^ incrementBy  | New "increment by" value **[required]**  | 


===== Database Compatiblity =====

^ MySQL  | No Sequence Support in Database  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Sequence Support in Database  | 
^ Sybase  | No Sequence Support in Database  | 
^ DB2  | No Issues  | 
^ Derby  | No Sequence Support in Database  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Sequence Support in Database  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Sequence Support in Database  |

Automatic Rollback Support: **NO**
