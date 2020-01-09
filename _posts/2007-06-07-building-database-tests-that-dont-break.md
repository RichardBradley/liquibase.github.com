---
layout: default
subnav: subnav_blog.md
title: Building Database Tests that Don't Break
---
# Building Database Tests that Don't Break

As I discussed in <a href="http://www.liquibase.org/2007/06/unit-testing-database-access-layer.html">Unit Testing the Database</a>, a difficulty you run into when using a shared dataset for unit tests is making sure you write your test in such a way that changes to the dataset will not break older tests.

Note: depending on the database access framework you use, you will actually access the database through a Connection, EntityManager, Session, PersistenceManager etc.  I'll use the term "Connection" generically for any of these access types because the same pattern applies to them all.

###Don't Rely on Particular Data###

The following is an example of a bad test that will break when the dataset changes:


    public void testFindActive() {
    Collection returnSet = new PersonDAO(connection).findActive();
    assertEquals(5, returnSet.size());
    }

When you first write the above test, it will work fine because you have know your data set has 5 person rows in it.  However, when you get to the next test and realize you need more test data and add a new person row, the testFindActive() method will suddenly fail when the method being tested isn't actually broken.

What I have found to be the best way of writing better tests is to create a framework that lets you describe what type of rows you expect your method to return.  Here is a code example:

    public void testFindActive() {
        assertDataCorrect("Did not return active people correctly",
            new DataComparator(entityManager, Person.class) {
                public boolean include(Person person)  {
                        return person.isActive();
                }
            }
    }

There are two advantages to this method of testing:

1. It doesn't break if person rows are added or removed
1. The test better documents the intent of the isActive() method
1. Since you are describing your filter via normal object methods, the test will stay up to date as you refactor your code/

Of course, you need to have an implementation of assertDataCorrect().  Unfortunately, although it is fairly straightforward to implement, how you actually implement it varies depending on your database access framework.  Here is a pseudo-code sample to get you started:


    public abstract class DataTestCase extends TestCase {
        assertDataCorrect(String message,
                DataComparator comparator, Collection
                collectionToTest) {
            assertNotNull("Collection to test was null, poor test", collectionToTest);
            assertTrue("Collection to test was empty, poor test", collectionToTest.size() > 1);

            List allObjects = comparator.getEntityManager
                .createQuery("from " + comparator.getEntityClass().getName());

            int matchingObjects = 0;
            List filteredObjectsFromDB = filterObjects(comparator, allObjects);
            for (Object objectFromDB : filteredObjectsFromDB) {
              matchingObjects++;
              if (!collectionToTest.contains(object)) {
                    fail ("Expected object '"+object.toString()+"' not found in collection");
              }
            }
            assertTrue("Expected "+matchingObjects
                    +" objects, passed collection was "+collectionToTest.size(),
                    matchingObjects == collectionToTest.size());
        }
    }

Some notes on the above implementation:

1. The class extends TestCase so as long as all your database tests extends the new DatabaseTestCase you will always have access to the new assertions.
1. If the passed collection is null or empty, the test fails.  The reason for this is because if your query is returning nothing from the database, you don't really know if it is filtered down correctly.  It could be working correctly, or it could be you have a typo in your filter that will always make it return no results.
1. The assert function selects out all rows from the database and compares them to the returned objects.  If you have a lot of rows, this will be a very poor-performing test.  In practice, your test dataset will normally not grow so large this will become a problem, but it is something to keep in mind if you ever think about running your test suite against a copy of production data.

Eventually, I hope to create a database unit testing library that better encapsulates this logic, but have not had the time yet.  If there is anyone who would like to volunteer to help out with creating one, please contact me at nathan@voxland.net.

### Start a transaction in your setUp() method and roll it back in your tearDown() method

By running your test in a transaction, you ensure that (normally) whatever your code under test does to the database will have no lasting affect and will not cause later tests to fail.  This is a simple extension of the unit testing principal of not assuming your tests will run in a particular order and to have no side effect of your tests.

If your code under test attempts to start and commit transactions, you may need to create a wrapper connection around the actual connection that intercepts calls to start and end transactions and simply logs that they happened.  That way you can test that the commit you expected actually happened and still actually roll back the database in your tearDown() method.

The thing to watch out for is auto-committing code in your class under test.  For example, if your tested logic creates a new table, many databases will auto-commit the transaction.  In these cases, you will need to manually undo the changes in a finally block in your test so you still follow the "no side-effect" rule.
