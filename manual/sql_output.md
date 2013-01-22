====== SQL Output ======

Depending on your development and release processes, you may not want LiquiBase to directly update your database.  Reasons for this may include a desire to tweak the resulting SQL, have the SQL approved by a DBA, or for [[http://blog.liquibase.org/2007/07/sox-compliance-and-database-refactoring.html|SOX compliance]].  

For this reason, all [[update]] and [[rollback]] commands have an "sql output" mode which do not execute anything against the database but instead save the resulting SQL to standard out or a specified file.