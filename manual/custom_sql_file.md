---
layout: default
title: Custom sql file
---

# Custom SQL File #

The "sqlFile" tag allows you to specify any sql statements and have it stored external in a file. It is useful for complex changes that are not supported through LiquiBase's automated refactoring tags such as stored procedures.

The sqlFile refactoring finds the file by searching in the following order:

  - The file is searched for in the classpath. This can be manually set and by default the liquibase startup script adds the current directory when run.
  - The file is searched for using the file attribute as a file name. This allows absolute paths to be used or relative paths to the working directory to be used.

The "sqlFile" tag can also support multiline statements in the same file. Statements can either be split using a ; at the end of the last line of the SQL or a go on its own on the line between the statements can be used.Multiline SQL statements are also supported and only a ; or go statement will finish a statement, a new line is not enough. Files containing a single statement do not need to use a ; or go.

The sql file can also contain comments of either of the following formats:

  - A multiline comment that starts with /* and ends with */.
  - A single line comment starting with <space>--<space> and finishing at the end of the line 


## Sample ##

<code xml>
<sqlFile path="sample.sql"/>
</code>

where sample.sql can contain:
<code sql>
insert into person (id, name) values (1, 'Bob')
</code>

A multiline sample.sql might look like:
<code sql>
insert into person (id,name) values (1, 'George');
insert into person (id,name) values (2, 'Jim')
</code>

For MSSQL you could also use go  for multiline support and 
have statements split across many lines:
<code sql>
insert into person (id,name) 
values (1, 'George')
go
insert into person (id,name) 
values (2, 'Jim')
</code>                    


## Available Attributes ##

^ path  | The name of the SQL file to load  | 
^ stripComments  | Set to true to remove any comments in the SQL before executing, otherwise false. Defaults to false if not set  | 
^ splitStatements  | Set to false to not have liquibase split statements on ;'s and GO's. Defaults to true if not set  | 
^ encoding  | Specify the file encoding to use  | 
^ endDelimiter  | Delimiter to apply to the end of the statement.  Defaults to ";", may be set to "".  | 


## Database Compatiblity ##

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