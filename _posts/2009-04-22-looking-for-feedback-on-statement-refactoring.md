---
layout: default
subnav: subnav_blog.md
title: Feedback on Statement Refactoring
---
# Looking for Feedback on Statement Refactoring

I am starting the extensibility refactoring at the \*Statement class level and moving up from there. I committed an initial version of what I am thinking to trunk, and am looking for feedback (either in comments, or directly to me at nathan@voxland.net).

### Renamed liquibase.database.sql package to liquibase.database.statement.

We may want to support non-"sql" statements in the future, so the name change seemeded best

### Separated out the creation of SQL from the \*Statement class.

Before each Statement class had a "String getSqlStatement(Database)" method that would create a string containing the database specific sql required to run the statement. Now, there is a liquibase.database.statement.generator package that contains classes that take a Statement instance containing the information about a statement (table name, column names, etc) and converts them into SQL strings.

There is now a SqlGeneratorFactory singleton with a "SqlGenerator getBestGenerator(SqlStatement statement, Database database)" method. When we get to the point where we have Statement classes that need to be executed, liquibase will call this method to get the correct SqlGenerator instance for a given statement and database and use that instance to create the sql to execute. (this change has not been made yet) .

The SqlGeneratorFactory has a list of all SqlGenerators available. That list is built up via a reflection package search in the liquibase.database.statement.generator package and sub-packages, or via a SqlGeneratorFactory.register() method. There will be a standard package of liquibase.database.statement.generator.ext that can be used by 3rd parties to have their statements registered automatically without using the register ethod.

I have started breaking up the Statement classes (although I haven't removed the old getSqlStatement methods yet). In the liquibase.database.statement.generator package there is an SqlGenerator interface which provides a getSpecializationLevel method, an isValid method, and a generateSql method.  In the getBestGenerator() method, the SqlGeneratorFactory will loop through all known generators and call the isValid method to determine if a given SqlGenerator would work for that combination of database and statement. Once it has a list of good generators, it will call the getSpecialiazationLevel() method which returns an int corresponding to how "good" that generator is for that statement/database combo. There should usually be a default generator for each statement that will have a level of 1. There will often be database-specific versions of the generator that return a level of 5. 3rd party Statement generators can return any level they want to override the built in ones or other 3rd party generators. If no generators are found for a database/statement combo, tyere is a NotImplementedGenerator that is returned that simply throws an exception.

### New generateSql method returns an array.

Before, there was a one-to-one correspondence between a Statement class, and the SQL generated. I think there are situations, however, where a Statement may generate multiple SQL commands and so we should allow the return of an array.

### generateSql returns instances of "Sql", not Strings

This is the part I go back and forth on. Since the goal of this refactoring is to give 3rd party developers an API to code against, I want to do my best to make sure that API is not going to change. There has been talk in the past about building more flexibility into the system by giving back an syntax tree that can be modified before being executed. The idea with the Sql interface, is that we would only have an "UnparsedSql" implementation at first, but may make smarter implementations in the future.

The question is: is this too much? We now have a mechanism where we can override what sql string is generated for a particular database and/or statement, is that going to cover all the low-level-sql-tweaking that we would need? I feel like the Sql interface may allow some sort of cross-cutting sql modification, or similar, but it is just a half-thought out idea.

### Improving tests

I am going to repurpose the test framework around the Statement classes that actually run them against the database. This has not been done yet.

