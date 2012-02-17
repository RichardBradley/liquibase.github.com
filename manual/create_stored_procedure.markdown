====== Create Procedure ======

The "createProcedure" tag allows you to define the create (or create and replace) definition for a stored procedure. This tag is better to use for creating procedures than the "sql" tag because it will not attempt to strip comments or break up lines.

Often times it is best to use the CREATE OR REPLACE syntax along with the runOnChange="true" tag on the enclosing changeSet tag. That way if you need to make a change to your procedure you can simply change your existing code rather than creating a new REPLACE PROCEDURE call. The advantage to this approach is that it keeps your change log smaller and allows you to more easily see what has changed in your procedure code through your source control system's diff command.

===== Sample =====

<code xml>
<createProcedure>
    CREATE OR REPLACE PROCEDURE testHello
    IS
    BEGIN
      DBMS_OUTPUT.PUT_LINE('Hello From The Database!');
    END;
</createProcedure>
</code>




===== Database Compatibility =====

^ MySQL  | No support for CREATE OR REPLACE  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ HSQL  | No Issues  | 
^ Derby  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | Not Supported  |

Automatic Rollback Support: **NO**
