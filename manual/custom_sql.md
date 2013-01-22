====== Custom SQL ======

The "sql" tag allows you to specify whatever sql you want. It is useful for complex changes that aren't supported through LiquiBase's automated refactoring tags and to work around bugs and limitations of LiquiBase. The SQL contained in the sql tag can be multi-line.

The [[create stored procedure|createProcedure]] refactoring is the best way to create stored procedures.

The "sql" tag can also support multiline statements in the same file. Statements can either be split using a ; at the end of the last line of the SQL or a go on its own on the line between the statements can be used.Multiline SQL statements are also supported and only a ; or go statement will finish a statement, a new line is not enough. Files containing a single statement do not need to use a ; or go.

The sql change can also contain comments of either of the following formats:

  - A multiline comment that starts with /* and ends with */.
  - A single line comment starting with <space>--<space> and finishing at the end of the line 

Note: By default it will attempt to split statements on a ";" or "go" at the end of lines. Because of this, if you have a comment or some other non-statement ending ";" or "go", don't have it at the end of a line or you will get invalid SQL.

===== Sample =====

<code xml>
<sql>insert into person (id, name) values (1, 'Bob')</sql>
</code>


===== Available Attributes =====

^ stripComments  | Set to true to remove any comments in the SQL before executing, otherwise false. Defaults to false if not set  | 
^ splitStatements  | Set to false to not have liquibase split statements on ;'s and GO's. Defaults to true if not set  | 
^ endDelimiter  | Delimiter to apply to the end of the statement.  Defaults to ";", may be set to "".  | 


===== Database Compatiblity =====

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | Sybase might require stripComments to be set to true for multiline sql  | 
^ DB2  | No Issues  | 
^ HSQL  | No Issues  | 
^ Derby  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  | 

Automatic Rollback Support: **NO**

===== Examples =====
The example below shows how you can use the SQL tag to run a PL/SQL block in Oracle. This allows you to perform some dynamic logic in your changelog.

Imagine you want to perform a generic action on all newly created objects.
Examples are:
  * Ensure we have synonyms on objects of another schema before running a changelog
  * Ensure that we create appropriate grants on newly created tables

For this example, let's assume that we want a view to be created for each table.

We will implement that by running a changeset at the end of each changelog with the runalways attribute.
We select all tables which do not have a corresponding view, and then create that view. 

<code xml>
  <changeSet author='jsmith' id='1' runAlways='true'>
    <sql splitStatements="false">
      DECLARE
        cursor c_newviews is
          select table_name
          from user_tables
          where table_name like 'DATABASECHANGELOG%'
          AND table_name||'_VW' not in
            (select view_name from user_views);
      BEGIN
        FOR r_newviews in c_newviews LOOP
          EXECUTE IMMEDIATE
            'CREATE VIEW ' || r_newviews.table_name || '_VW ' ||
            'AS SELECT * FROM ' || r_newviews.table_name;
        END LOOP;
      END;
    </sql>
  </changeSet>

</code>
