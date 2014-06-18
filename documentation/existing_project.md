---
layout: default
title: Starting Liquibase on an Existing project 
---

# Adding Liquibase on an Existing project

The [Quick Start Guide](/quickstart.html) works well for starting Liquibase on a new project because your empty changelog file matches your empty database. 
However, when you have an existing project with an existing database things are more complicated.
                                            
Unfortunately, there is no simple "this is how you do it" answer because there is so much variations in projects, processes and requirements. 
Liquibase provides many tools to help the process, but it is up to you to decide the best way to combine them for your particular situation.    

When adding Liquibase to an existing project there are basically two approaches: "Make it look like you've always been using Liquibase" and "Just start using Liquibase" 

## Make it look like you've always been using Liquibase

The goal of this approach is to have a changelog file that matches the current state of your database. You can run this changeLog against a blank database and the final result will be indistinguishable from your existing databases--as if you used Liquibase from the beginning.
This approach is usually the best long term, but it can be more work up front. 

#### Create ChangeLog 
Creating the changelog to match your database can be done automatically using the [generateChangeLog command](generating_changelogs.html) or be done manually. 
For any database larger than a few tables, the generateChangeLog command is usually a good idea but make sure you go through the generated changeSets to ensure they are correct. Liquibase does not always detect more complex structures like stored procedures or details like if an index is not clustered. Also, ensure data types are as you expected them.
  
#### Populate the DatabaseChangeLog table  
Once you have your changeLog, you need a way to ensure that the pre-Liquibase changeSets are only ran on new, empty databases. The easiest way to do this is generally to use the `changeLogSync` or `changeLogSyncSQL` command to execute (or generate) the SQL that marks the starting changeSets as already ran without actually executing them.

As an alternative to the changeLogSync command, you can add [contexts](contexts.html) on the pre-Liquibase changeSets such as `<changeSet ... context="legacy">` and when you run Liquibase on a new database you run with `liquibase --contexts=legacy update` and on an existing database you run with `liquibase --contexts=non-legacy`.

Finally, you can add `<precondition onFail="MARK_RAN">` tags to the generated changeSets. For example, if you have a `<createTable tableName="person">` changeSet, you would add `<preconditions onFail="MARK_RAN"><not><tableExists tableName="person"/></not></preconditions>` tag.
Adding preconditions requires more changes to the changeLog file and introduces a performance penalty because Liquibase must check the database metadata for each changeSet the first run through, this approach is usually best used in isolated cases only.  

#### What is the current state?  
Often times a part of the reason to move to Liquibase is because your schemas have diverged over time, so an important question to answer is "If I'm making the changelog file match the current state, what **is** the current state?"
Usually the best answer to that question is "the production database" but it can vary. 

How divergent your schemas are will also affect which of the above techniques you use to populate the DatabaseChangeLog table, and it will often times make sense to use multiple approaches. 
For example, you may want to generate your base changeLogs from the production database and use changeLogSyncSQL to be able to mark them ran on everything from production down. 
Then you can add your non-released changeSets to the changeLog file with a precondition checking if it has already ran. That will allow Liquibase to automatically figure out the correct state for all your databases from development through production.
           
             
## We are going to use Liquibase starting.....NOW!

Instead of building up a changeLog to match your existing database, you can instead just declare "from now on we are using Liquibase".
The advantage to this is that it much easier to set up because it is just a mandate. 
Usually this works best going from one version to the next because your databases are all in a reasonably consistent state and you simply start tracking database changes in your next version using Liquibase. 
Because Liquibase only looks at the DatabaseChangeLog table to determine what needs to run, it doesn't care what else might be in your database and so it will leave all your existing tables alone and just run the new changeSets.

The biggest disadvantage to this approach is that you cannot bootstrap an empty database with Liquibase alone. A work-around is to take a pre-Liquibase snapshot using your database backup tool and use that as your database seed. 
Any time you need to create a new database, you first load in the seed and then run Liquibase update. 
  
Depending on how much variation you have between your schemas, even with this approach you may need to rely on preconditions or a "mark changes ran" script in order to standardize and handle those variations.  


## People and Processes

Finally, remember that starting to use Liquibase--especially on an existing project--isn't just about how you bootstrap your changeLog file. It is also a question of how you introduce Liquibase into your existing processes and culture.

For many companies and projects, everyone realizes the problems that need fixing and are on board with the advantages of change. 
For others, however, there can be entrenched interests and strong resistance similar to any other process change. 
Liquibase provides many tools and approaches that can be used to ease it into an existing process such as [SQL output](sql_output.html), [SQL formatted changelogs](sql_format.html), [diffChangeLog](diff.html) and more that can be combined
in ways that works best for your group.

If you know that introducing Liquibase is going to be complex, either from a technical or processes standpoint, it is usually best to introduce it slowly.
Start with it on a new project as a trial run and once you have a good grasp of how it works and available options, apply it to other existing projects. 