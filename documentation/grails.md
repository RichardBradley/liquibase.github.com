---
layout: default
title: Grails
root: ..
---

# Official Liquibase Grails Integration #

The standard Grails Database Migration Plugin (http://grails-plugins.github.com/grails-database-migration/docs/manual/index.html) is built off Liquibase and is the officially supported Liquibase/Grails integration. 

# Legacy Liquibase Grails Integration #

Prior to the Grails Database Migration Plugin, Liquibase supported a grails integration as well. This plugin has not been updated since version 1.9.

To install, simply run grails install-plugin liquibase and create your [change log XML file](databasechangelog.html) in grails-app/migrations/changelog.xml

Run the following command in your project folder to install Liquibase plugin:
''grails install-plugin liquibase''

To run any command, simply execute `grails <commmand_name>` in root folder of your project.


## Update/Rollback Commands ##

^ migrate  | Updates database to current version  | 
^ migrate-sql  | Writes SQL to update database to current version to STDOUT  | 
^ migrate-count `<num>` | Applies `<num>` changes to the database  |
^ migrate-count-sql `<num>`  | Writes SQL to apply the next `<num>` changes to STDOUT  |
^ rollback &lt;tag&gt;  | Rolls back the database to the the state is was when the tag was applied  |
^ rollback-sql &lt;tag&gt;  | Writes SQL to roll back the database to that state it was in when the tag was applied to STDOUT  |
^ rollback-count `<num>`  | Rolls back the last `<num>` change sets applied to the database  |
^ rollback-count-sql `<num>`  | Writes SQL to roll back the last `<num>` change sets to STDOUT applied to the database  |
^ rollback-to-date `<date>`  | Rolls back the database to the the state is was at the given date/time. Date Format: yyyy-MM-dd HH:mm:ss  |
^ rollback-to-date-sql `<date>`  | Writes SQL to roll back the database to that state it was in at the given date/time version to STDOUT  |
^ future-rollback-sql  | Writes SQL to roll back the database to the current state after the changes in the changelog have been applied  | 

## Misc Commands ##

^ db-doc  | Generates Javadoc-like documentation based on current database and change log  | 
^ generate-changelog  | Writes Change Log XML to copy the current state of the database to standard out  | 

## Maintenance Commands ##

^ tag  | 'Tags' the current database state for future rollback  | 
^ changelog-sync-sql  | Writes SQL to mark all changes as executed in the database to STDOUT  | 
^ clear-checksums  | Removes all saved checksums from database log. Useful for 'MD5Sum Check Failed' errors  | 
^ drop-all  | Drop all database objects owned by user  | 
^ list-locks  | Lists who currently has locks on the database changelog  | 
^ release-locks  | Releases all locks on the database changelog  | 
^ status  | Outputs list of unrun changesets  | 
^ validate-changelog  | Checks changelog for errors  | 
^ db-diff | Generate changeSet(s) to make Test DB match Development |

## Version Naming Convention ##


The Grails plugin is versioned based off the core Liquibase version. For example, a Grails plug-in version of "1.3.2.0" is the first Grails plug-in release based on the 1.3.2 version of Liquibase. If there is a patch to the Grails plug-in, but not the core Liquibase library, the version will change to "1.3.2.1".
