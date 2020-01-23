---
layout: default
subnav: subnav_blog.md
title: Executing Liquibase - 3 Use Cases
---
# Executing Liquibase: 3 Use Cases

Once you've created a [database changelog file](/documentation/databasechangelog.html), what is the best way to run it? As always, it depends on what works best for you. There are three main ways to run Liquibase: "automatically on startup", "manually as needed", or "Just give me the SQL and I'll do it myself". All three work with any changelog file, so use the method (or combination of methods) which works best for your project.

### Automatic Deployment

The easiest way to run Liquibase is to set it to run automatically on startup. Once set up, your database state always matches what your code expects and you have no manual steps to forget. This method works best in environments where you have less control over the deployment process or if you want a simpler deployment process.

I've seen this method used for web applications that use Continuous Delivery and have an automated release process from code check in through live production which gets executed multiple times per day. I've also seen this method used in packaged applications that are shipped to customers to make the database management portion completely transparent.

Don't worry if you have multiple servers pointing to the same database. Liquibase uses a DATABASECHANGELOGLOCK table to ensure that only one instance of Liquibase runs at a time. Even if you have a cluster of servers all coming online at the same time and all automatically running Liquibase, the lock table will ensure that they will not all try to update the database concurrently and cause problems.

Liquibase ships with two hooks to automatically update your database on startup: a [servlet listener](/documentation/servlet_listener.html) and a [Spring bean](/documentation/spring.html).

If neither of those hooks fit with your application, you can always call the Liquibase Java API directly. The most straightforward way of running Liquibase directly looks like this:

{% highlight java %}
java.sql.Connection connection = openConnection(); //your openConnection logic here

Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));

Liquibase liquibase = new liquibase.Liquibase("path/to/changelog.xml", new ClassLoaderResourceAccessor(), database);

liquibase.update(new Contexts(), new LabelExpression());
{% endhighlight %}

This code will create an instance of the liquibase.Liquibase façade and run the update() method which simply updates the database to match the passed changelog. There are many other methods on the Liquibase façade which can also be used if you are looking to automate Liquibase in different ways.

### Manual Deployment

If automatic database updates don't work well for you, you can execute Liquibase on demand. Liquibase ships with a [command line application](/documentation/command_line.html) which supports both Windows and Linux. It also ships with an [Ant task](/documentation/ant/index.html) and a [Maven goal](/documentation/maven/index.html) for those who use those tools. These interfaces allow you to execute Liquibase commands whenever you need, without being tied to application startup.

One common use for the Ant and/or Maven interface is to integrate Liquibase into your build process. This allows you to catch errors in your changelog earlier, and also gives you a database which automated tests can be ran against. Developers can run the same tasks against their local environment for initial development and for fixing issues. Remember: [contexts](/documentation/contexts.html) work well for embedding test data in your changelog and only deploying it to test environments.

You may also prefer to run Liquibase directly with more complex release processes that are designed to eliminate downtime. For example, if you make your database changes compatible with the existing codebase (no DROP commands), you can run Liquibase update while the old version of your site is still running. Once it has successfully updated, then begin a staged rollout of new code across your cluster.

### Executing SQL

Manual updates with Liquibase allow you to control WHEN the database is updated, but WHAT is actually executed is still managed completely by Liquibase. For those who need to know exactly what is being done to their database, Liquibase supports an "updateSQL" mode in the command line, Ant, and Maven interfaces. When running updateSQL, Liquibase will simply output the SQL it would normally have ran. The output includes both the SQL to update your database and also the SQL to keep the DATABASECHANGELOG table up to date. Inspect the output as you need then execute it through whatever database tools you prefer. After running the SQL, your database will be in the correct state, and Liquibase will know what was ran and so future updateSQL calls will include only new changeSets.

### Mix and Match

All the above methods can also be mixed and matched as needed to handle whatever schema management needs you may have. Some projects use automatic deployment for development and initial QA, then updateSQL for final QA and production. Some shipped products automatically run Liquibase on startup, but hotfixes are handled through a more manual process. Others automatically run Liquibase all the way through production, but the executed SQL is automatically saved and is watched by DBAs throughout the release progression to ensure nothing unexpected is happening.

No matter what your schema deployment needs are, you should be able to find a way to manage them with Liquibase.