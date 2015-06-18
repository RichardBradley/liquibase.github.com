---
layout: default
subnav: subnav_blog.md
title: Start With Simple Evolutionary Database Design
---
Reg Developer in the UK recently posted an interview with Scott Ambler about database refactoring at <a href="http://www.regdeveloper.co.uk/2007/07/04/evolutionary_database_design/">http://www.regdeveloper.co.uk/2007/07/04/evolutionary_database_design/</a>.

In the interview, he discusses questions developers and DBAs often have when first approaching evolutionary database design (EDD).  The two main points he covers are:

1. Having both developers and DBAs involved in the database design process is an improvement over "traditional" waterfall-style databases designed  only by the DBA.
1. If you make your schema changes with triggers and views correctly, you can have a "transition window" that will allow you to make your changes without breaking existing systems that use the database.

While I agree with both these points, I worry about his focus on "transition window" database refactoring methods.  There is certainly value in being able to provide these windows for databases that have many independent systems depending on them, but I think that for the vast majority of projects it makes database refactoring seem too difficult to even attempt.

I would propose that more focus needs to be placed on the simpler aspect of EDD: databases that are specific to a single system or set of related systems that are all managed and updated in a frequent, agile manner.  These are the teams most likely to adopt an EDD process and there is still a lot of work to get them the tools they need to work efficiently.

In the interview, Scott says  that "right now we're at the beginning of the adoption curve" in regards to EDD and I agree with that.  So--for now--let's focus on the needs of the majority of those early adopters.

I see the tools and practices required to do EDD efficiently as a spectrum that range from a single-project database with no DBA, through a set of related projects with a part time DBA involved, to a database that supports a large set of independent systems that is under the constant care of a DBA.   "Transition Window" methods of database refactoring work great for the high end of the spectrum and I don't think it should be ignored because it is important to know that a process can scale.

For now, however, we need to start a the simple end and build a strong foundation of tools and techniques before working our way up the stack to the top.  There is the start of the required tools in the form of DBUnit for unit testing and Liquibase for managing refactorings, but there is still large holes including IDE support for refactorings, best practices and pattern catalogs for database testing, and more.

