---
layout: default
subnav: subnav_blog.md
title: Looking for help with Maven configuration
---


Part of the delay of the next 2.0 RC is that I want that release to include a 2.0 snapshot in the maven repository for people to try. Unfortunately, I have determined that my maven skills are not what I need them to be to make this happen, and am hoping I can get some help.


If you look at the liquibase source from <a href="http://liquibase.jira.com/source/browse/CORE">http://liquibase.jira.com/source/browse/CORE</a> you'll see that we have what is probably an uncommon source configuration--which is the root of a lot of my maven issues.


The main source is broken up into three major sub-modules:


- liquibase-core
- liquibase-core-jvm
- liquibase-maven-plugin



each with its own pom.xml. The general idea is that the liquibase-core and liquibase-core-jvm modules are compiled and combined into a single jar file that is released as liquibase-core.jar while the liquibase-maven-plugin module is released independently. There is a liquibase-dist module that attempts to bind everything together in to liquibase-core, but I'm not sure if it is really doing it all correctly.



Prior to 2.0, liquibase was build using Ant and we do have a repository on sourceforge that is rsynced with the central maven repository. The old process used an ant task to update a local copy of that maven repository and I would upload the new/changed files to the sourceforge site manually.


The main questions that I know of currently are:

1. How do I get maven to create the "liquibase-core " module to release to the maven repository?
1. What is the best way to create and release it? I would like the process to be based on builds from the <a href="http://liquibase.org/ci">build server</a>, not based on building the modules locally
1. What improvements should I make to the module structure?
1. Is what I am trying to do too much for maven's preferred way of doing things?
1. What should I be doing to help OSGi support?

