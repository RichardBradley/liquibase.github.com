---
layout: default
subnav: subnav_blog.md
title: Happy Birthday! 10 Years of Liquibase
---
# Happy birthday to Liquibase

10 years ago today was the [initial public announcement of Liquibase, originally called the "Sundog Database Refactoring Tool"](http://www.theserverside.com/news/thread.tss?thread_id=40959).

Like most open source projects, Liquibase started out simply as a tool to solve a problem I had. We had many different client projects on a variety of databases and it was getting more and more difficult to ensure that changes everyone made in development reached other developers and production. I was primarily using Java at the time and was not able to find anything that would solve our needs. There were tools like Apache ddlutils but it did not track changes, it only kept the current state. There was also Rails Active Record Migrations, but that was Ruby and I didn't like the fact that their change tracking would not work across multiple branches and multiple developers. Not finding anything that worked, I started my own open source project.

You can still see my initial requirements in Liquibase:

- I needed to support multiple databases types, even the same code running against different database types
- I needed a way to pull in blocks of database structure when I would pull in a shared library of functionality
- I needed to support multiple developers and multiple branches under concurrent development
- I needed a way to safely push updates to the database schema along with updates to the code without worrying about losing data or missing changes
- I needed a way to store database changes along with the source code in our source control system

Leading up to this point I had read [Ambler and Sadalage's book "Refactoring Databases: Evolutionary Database Design"](http://martinfowler.com/books/refactoringDatabases.html) which helped with envisioning database changes as a series of refactorings and inspired many of the higher-level refactoring tags like "addLookupTable"

We've come a long way in 10 years. When Liquibase was first released, there was

- The changelog XML file with its changeSets and change tags
- ChangeSets were tracked by id + author + path
- Support for <include>
- A command line, Ant, and servlet listener interface
- Support for Java 1.4 and 1.5
- Support for MySQL 4.1./5.0, Postgresql 8.1, Oracle 10gR2, and MS SqlServer 2005

Since that initial release we've had almost 70 releases with help from innumerable contributors. We've added support for more databases, more changelog file formats, preconditions, tagging, contexts, dbdoc, changelog parameters, diff, offline database support, and much, much more. Plus, we came up with a better name--even if it was [poorly capitalized initially.](http://www.liquibase.org/2010/07/lower-case-b.html)

What does the next 10 years have in store? Lots more of the same. Backwards compatibility has always been important to me and it is fun to see that the example changelog in the initial release can still be run with Liquibase 3.5.2. We are continuing to add support for new databases (including NoSQL databases), new refactoring's, and new features. The "Refactoring GUI IDE" mentioned in the initial announcement turned out to be well beyond the scope of what I could manage, has been realized in [Datical DB](http://www.datical.com/product/). I mentioned support for .Net in the initial announcement and I've not given up hope on that project yet, despite not making any progress on it so far. Javascript is another technology that could use a Liquibase port, if there are any volunteers...

Since starting with Datical 3 years ago, I've not only had a business card that says "Benevolent Dictator for Life, Liquibase" but I've been able to work on Liquibase full time which has been invaluable in continuing to grow the project and help the community. Currently I am continuing to improve the 3.x codebase while starting a larger reworking of the code for a 4.0 release which will set us up for expanded functionality and simpler maintenance in the next decade. Also in the pipeline is website and documentation improvements, a better plugin portal, and much more.

Because we are an open source project and don't really have "customers" it is impossible to know how many people use Liquibase, but there are thousands of visitors to [liquibase.org](http://liquibase.org) every day from almost every country on the planet. Liquibase has grown far more than I ever imagined when I started it as a fun side project a decade ago. I released it as an open source project because I wanted a chance to contribute back to the community and to see what it was like on the other side of an open source project. I've always been a believer in open source, and managing Liquibase has only solidified that belief because Liquibase could not be what it is today without the community around it.

**THANK YOU ALL!**
