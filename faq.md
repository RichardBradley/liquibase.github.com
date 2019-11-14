---
layout: default
title: FAQ
includeDaticalBox: true
---

# FAQ #

### What license is Liquibase released under? ###

Liquibase is released under the Apache License, version 2.0.


### Where can I get the source code? ###
The source is available from the main [download](download/index.html) page

### How does Liquibase compare to tools that compare development database with production databases to generate change lists? ###
Liquibase works better because it **understands** what the changes are. For example, a database comparison program would simply see the "person" table on integration has a "firstname" and a "lastname" column, but on live, the "person" table has a "name" column. It would report that you need to drop the "name" column and add a "firstname" and a "lastname" column. While this would leave you with the correct schema, you would lose everyone's name in the process. With Liquibase, you would have a changeset that says "rename 'name' to 'lastname' and add a 'firstname' column" or, even better, "split the name column on a space and place the values in new 'firstname' and 'lastname' columns, then drop the 'name' column." Knowing **why** they are different allows changes to production databases without the fear of losing valuable data.

### What if multiple processes/application servers attempt to migrate the database at the same time? ###
Liquibase uses a distributed locking system to only allow one process to update the database at a time. The other processes will simply wait until the lock has been released.

### Does Liquibase work with branches? ###
Yes. Since each change is independent, database changes that had been made in a different branch, then merged in will be run the next time Liquibase is run. You may run into a problem with the order that the statements are ran, but any issues you have can be easily solved by re-ordering the changelog files.

### Why do I have to specify an "author" tag? ###
Why not just an "id" tag? The main reason for both the author the id attribute tag is because it is too easy for more than one person to a tag with the same "id" value--especially when using multiple branches. The source control system is going to resolve and merge two change sets added on different branches, but it won't care that there are two different changesets with the same "id", and once a change set has been run against a database with one id, you can't (easily) change it. By also determining change set uniqueness based on an author tag, the chance of duplicates is lowered.


### What if I really don't want to specify an author tag? ###
There are times an organization would not want to have changes tied back to a particular individual or if the original author isn't actually known. If this is the case, simply make up a value such as "UNKNOWN".



### How can I specify vendor specific features such as ENGINE=InnoDB in MySQL? ###
We do not currently have a way to specify vendor specific extensions to the create table tag, and so you would need to use the `<sql>` tag and specify your create table statement manually. Of course you would be able to configure your mysql install to use innodb as the
default storage engine with default-storage-engine=INNODB.

Since 1.9, the [modifySql](documentation/modify_sql.html) tag can be used to modify the generated SQL.