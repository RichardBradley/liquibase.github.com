---
layout: default
subnav: subnav_blog.md
title: Top 5 Indicators You Are Ready to Move from Liquibase to Datical DB
---

Ten years ago, I started Liquibase to bring sanity to my database schema changes. At the time, I was working on a 3-tier Java web project. Ruby on Rails had Active Record Migrations and I asked, "Why can't I have that for Java?" Since then, Liquibase has become the standard for database change management. We support 13 databases and have 24 extensions for other databases. (Hi, Teradata and Hana!!!) All of that progress is because of our amazing users, committers, and testers. We couldn't have done it without you.

A little over three years ago, I began working at [Datical](http://www.datical.com) to bring functionality to Liquibase that just didn't fit into our project goals. (Also, I really wanted to work full-time on my favorite OSS project!) More often than not, we see our biggest Datical advocates discover Datical DB after using Liquibase. I wanted to share some common themes I've seen when Liquibase users start using Datical DB.

Before that, I wanted to be clear on how we view Liquibase's role in software development. Simply put: we solve one problem very well. Cross platform database change management is what Liquibase does. Much like Apache, we provide an API for users to extend Liquibase. That's what Datical has done with Liquibase; they have created extensions that extend and enhance Liquibase. It's these Datical extensions, user-interface, and integrations that may be useful to Liquibase users.

### Your Team is Large

In 2013 and 2015, I did a survey of our current Liquibase users. A large percentage (72%) of the 2015 respondents worked in companies where IT is less than 100. In my experience, Developers typically bring in Liquibase for a specific application. Then, usage of Liquibase starts to grow. One project, two, five...congratulations! You're moving faster than ever with database changes. Unfortunately, you're killing your DBAs.

Most development teams will use Liquibase to help themselves manage database change. They then deliver SQL scripts for the DBAs to execute. While that works for the Development team, the speed at which changes are being produced is too much for the DBAs to consume.

Two bits of functionality in [Datical DB](http://www.datical.com/product/) help DBAs be more efficient than manually reviewing every SQL script. First, Datical DB provides Forecast functionality that details the impact of proposed database changes. Simply put, it's a "practice run" for your database changes. Secondly, that impact of those proposed changes is contained in HTML Reports. Thus, DBAs can quickly review the reports and understand the impact without having to inspect opaque SQL scripts.

### The Distance Between Development and Production is High

The closer you are to Development, your knowledge of the application increases. [QA](http://www.liquibase.org/2016/02/liquibase-for-qa.html) knows the application better than Production engineers, but less than Development. Conversely, the closer you are to Production, the more you know about the state of the Production systems. As the distance between these two groups increase, the difficulty in understanding the relationship between the database and application code changes. With a tightly integrated team, this is not a challenge. How often has a system administration walked over to your desk to answer a question? Now, imagine if Production support is in Asia while Development is in Europe. That's a long walk!

Datical DB Forecast allows those performing the Production push to have a far greater understanding of the change impact. Moreover, they can run the Forecast at a time that's convenient for all stakeholders to get approval. This avoids late night surprises and the need to rollback. "What! There's a DROP TABLE in this script! WHY?!?!?"

### You've Bought Other DevOps Tools

I like to say that Liquibase was DevOps before DevOps was cool. Thankfully, more and more companies are adopting tools that support DevOps to enable continuous delivery through the software lifecycle. So, if you have the Liquibase plugin for Jenkins, you're well on your way. However, like all open source software, some assembly is required. Datical DB provides supported (and Open Source) plugins for all of your favorite [DevOps tools](http://www.datical.com/integrations/).

### You Want to be Even Faster

At some point with Liquibase, you will reach a point where Liquibase can no longer provide any improvements to the speed of your releases. Because Liquibase focuses on cross platform database change, a large number of platform specific objects are not supported directly by Liquibase. For example, for CHECK CONSTRAINTs in MySQL, you will simply have to include a SQL script to create that object. Datical DB includes vendor specific objects (like MSSQL Functions). Thus, implementing on legacy projects that use these objects is far easier with Datical DB.

### You Worry About Compliance

My favorite feature in Datical DB is the [Rules Engine](http://www.datical.com/product/validation-intelligence/). Thus, enforcing best practices is a snap. For example, let's say SOX compliance requires you to have a valid ServiceNow ticket. No problem. Datical DB can look at your Change Set and make sure a ticket number is included in the Change Set ID, if that's your standard. Or, imaging you are DBA with a pet peeve about new columns created with a default value set. Datical DB will actual fail a build if a proposed change violates a rule. This makes enforcing your regulatory and technical rules a breeze. With Liquibase, you would have to review each change or SQL script generated.

So, if these issues aren't a concern for you, then keep using Liquibase! I'll still be here to fix bugs, add features, and merge in your pull requests. But, if you're ready to see how far you can go with database change management, come over here to get some more information about Datical DB.



