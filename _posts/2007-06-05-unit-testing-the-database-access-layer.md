---
layout: default
subnav: subnav_blog.md
title: Unit Testing the Database Access Layer
---
### The Problem

Writing unit tests for code that accesses a database is a difficult problem, and it's one I've struggled with for several years.  The problems come down to a balancing act between several (often competing) requirements:

1. The unit test must not not break due to changes outside the class under test.
1. The unit test must not break due to code refactoring that doesn't break functionality.
1. The unit test must run very fast.
1. The unit test must remain valid through database refactorings.
1. The unit test must fail if the code doesn't function correctly.

I've tried several approaches in the past and was unsatisfied with them:

### Mock the Database Connection

This is the most "pure" unit testing approach because it completely isolates the class under test from all external dependencies.

    Connection conn = createMock(Connection.class);
    Statement statement = createMock(Statement.class);
    expect(conn.createStatement()).andReturn(statement);
    expect(statement.execute("SELECT ID FROM PERSON;")).andStubReturn(true);
    statement.close();
    expectLastCall();
    replay(conn);
    replay(statement);

    ClassUnderTest classUnderTest = new ClassUnderTest ();
    classUnderTest .findPersonIds();

    verify(conn);
    verify(statement);

The advantages to mocking the database connection is that the tests run fast and don't change to due to creating of other unit tests.

In practice, however, I've found these tests to be more or less worthless.  They (like most mock tests) really just test the implementation of the method, not the behavior of the method, and therefore often fail due to code refactoring.  The biggest problem, however, is that the access to the database is really the whole point of the method and there are so many ways that can fail.

I would argue, that really the method is implemented as SQL with a Java wrapper around it and in the mock unit test, only the Java code is really tested--the SQL is often just cut and pasted from what is in the method.

Throw in changes to the database over the life of the project (the "person" table name changes to "employee") and you end up with tests that pass, but don't really tell you if your code will work.

### Create Test Data Sets For Each Test

The obvious response to the problems with mock database tests is to have your tests access an actual database.  This method will create tests that actually fail if your SQL is wrong or your database schema changes without a corresponding code update, but brings with it its own difficulties, primarily with keeping the database in a known state.  There are tools available such as <a href="http://www.dbunit.org/">DbUnit</a> and <a href="http://unitils.sourceforge.net/summary.html">Unitils</a> to help with the test-data management, but these have disadvantages.

The main problem is that the way the test data is stored, it is very dependent on the exact schema when it was created, and if your database structure changes your test data can no longer be inserted and your tests are now worthless.  For example, if your test is created with test data that inserts rows into a "person" table, but later that table is renamed to "employee", your insert statements will no longer execute.  Depending on the schema changes, you may be able to recover your test data with a search and replace, but often the changes are too much and it has been long enough since you wrote the test that you don't remember exactly what was supposed to be in the data.

Additionally, the data is inserted as part of the setup method for each test.  Accessing databases in Unit tests slows them down considerably already, we should work to minimize any calls to the database that we have to do.

### Manage Test Data With All Other Database Changes

To solve the problem of keeping test data definitions from getting out of sync with the schema, you need to have your test data built up along with your database so it will be modified by database refactoring that were made after it was initially created.  For example, here is a database change script:

1. create table person
1. insert row into person `test data`
1. insert row into person `test data`
1. rename table person to employee

By including the test data with your database changes, the data is automatically kept up in the same way the production data would be.  Using this technique over the dataset per method also has the advantage of performing better because the data is only inserted once, but it has the disadvantage that you need to handle all the test data that any method would want in one place.
To facilitate this technique, I built the idea of <a href="https://www.liquibase.org/documentation/contexts.html">execution contexts</a> into Liquibase so you can mark the test data changes and only apply them in environments where you run unit tests.  So far I have been happy with the results.  The tests fail when there is a differences between the database schema and what the code is expecting or when there is a bug in my SQL and I haven't lost any tests due to database refactorings.

The tests don't run as fast as mock connection tests would, but they aren't prohibitively slow.  We have over 1000 unit tests in one project that all run in about a minute.  It would be better if they would all run in 10 seconds, but what good are fast tests that don't actually test what's important?  Just remember to mock the (already tested) data access layer in higher layers of your code so you don't take the database performance hit any more than you need to.

With this technique, you need to always remember that your test data set will evolve over time and write your tests accordingly, but how to do that will be covered in a <a href="http://www.liquibase.org/2007/06/building-database-tests-that-dont-break.html">later blog posting</a>.

