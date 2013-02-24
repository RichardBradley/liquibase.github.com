---
layout: default
title: Command line
root: ..
---

# Liquibase Command Line #

Liquibase can be run from the command line by running
**liquibase \[options\] \[command\] \[command parameters\]** (optionally, replace the liquibase command with java -jar &lt;path-to-liquibase-jar&gt;). The command line migrator works well when you want to do migrations on demand, but don't have Ant or Maven available such as on servers. The command line migrator also gives you more control over the process than the ["servlet listener"](servlet_listener.html), [Ant](Ant.html), or [Maven](Maven.html) do, allowing you to run maintenance commands like outputting SQL and listing/releasing database changelog locks.

Any values found after the command on the command line invocation will be considered a command parameter. The command line processor will validate whether the command line parameters are allowed for the current command. If the current command does not allow command line parameters or the parameter appears to be an incorrect format, then an error message of 'unexpected command parmeter' will be logged and the execution will terminate.

The command line migrator also allows you to

  * [perform rollback operations and generate rollback scripts](rollback.html)
  * [generate "diff"s](diff.html)
  * [generate creation scripts from existing databases](generating_changelogs.html)
  * [generate database change documentation](dbdoc.html)

If you run the command line migrator without any arguments, you will get a help message listing these available parameters:


## Database Update Commands ##

^ update  | Updates database to current version  | 
^ updateCount &lt;value&gt;  | Applies the next &lt;value&gt; change sets  |
^ updateSQL  | Writes SQL to update database to current version to STDOUT  | 
^ updateCountSQL &lt;value&gt;  | Writes SQL to apply the next &lt;value&gt; change sets to STDOUT  |





## Database Rollback Commands ##

^ rollback &lt;tag&gt;  | Rolls back the database to the state it was in when the tag was applied  |
^ rollbackToDate &lt;date/time&gt;  | Rolls back the database to the state it was in at the given date/time  |
^ rollbackCount &lt;value&gt;  | Rolls back the last &lt;value&gt; change sets  |
^ rollbackSQL &lt;tag&gt;  | Writes SQL to roll back the database to the state it was in when the tag was applied to STDOUT  |
^ rollbackToDateSQL &lt;date/time&gt;  | Writes SQL to roll back the database to the state it was in at the given date/time version to STDOUT  |
^ rollbackCountSQL &lt;value&gt;  | Writes SQL to roll back the last &lt;value&gt; change sets to STDOUT  |
^ futureRollbackSQL  | Writes SQL to roll back the database to the current state after the changes in the changeslog have been applied  | 
^ updateTestingRollback  | Updates the database, then rolls back changes before updating again |
^ generateChangeLog  | generateChangeLog of the database to standard out. v1.8 requires the dataDir parameter currently. | 


## Diff Commands ##

^ diff \[diff parameters\]  | Writes description of differences to standard out  |
^ diffChangeLog \[diff parameters\]  | Writes Change Log XML to update the base database to the target database to standard out  |


## Documentation Commands ##

^ dbDoc &lt;outputDirectory&gt;  | Generates Javadoc-like documentation based on current database and change log  |





## Maintenance Commands ##

^ tag &lt;tag&gt;  | 'Tags' the current database state for future rollback  |
^ status  | Outputs count (list if --verbose) of unrun change sets  | 
^ validate  | Checks the changelog for errors  | 
^ changelogSync  | Mark all changes as executed in the database  | 
^ changelogSyncSQL  | Writes SQL to mark all changes as executed in the database to STDOUT  | 
^ markNextChangeSetRan | Mark the next change set as executed in the database  | 
^ listLocks  | Lists who currently has locks on the database changelog  | 
^ releaseLocks  | Releases all locks on the database changelog  | 
^ dropAll  | Drops all database objects owned by the user. Note that functions, procedures and packages are not dropped (limitation in 1.8.1).  | 
^ clearCheckSums  | Removes current checksums from database.  On next run checksums will be recomputed  | 

## Required Parameters ##

^ --changeLogFile=&lt;path and filename&gt;  | The changelog file to use  |
^ --username=&lt;value&gt;  | Database username  |
^ --password=&lt;value&gt;  | Database password  |
^ --url=&lt;value&gt;  | Database URL  |
^ --driver=&lt;jdbc.driver.ClassName&gt;  | Database driver class name  |






## Optional Parameters ##

^ --classpath=&lt;value&gt;  | Classpath containing migration files and JDBC Driver.  |
^ --contexts=&lt;value&gt;  | ChangeSet contexts to execute  |
^ --defaultSchemaName=&lt;schema&gt;  | Specifies the default schema to use for managed database objects and for Liquibase control tables  |
^ --databaseClass=&lt;custom.DatabaseImpl&gt;  | Specifies a custom [Database](http://www.liquibase.org/api/liquibase/database/Database.html) implementation to use  |
^ --defaultsFile=&lt;/path/to/file&gt;  | File containing default option values (default: ./liquibase.properties)  |
^ --includeSystemClasspath=&lt;true or false&gt;  | Include the system classpath in the Liquibase classpath (default: true)  |
^ --promptForNonLocalDatabase=&lt;true or false&gt;  | Prompt if non-localhost databases (default: false)  |
^ --currentDateTimeFunction=&lt;value&gt;  | Overrides current date time function used in SQL. Useful for unsupported databases  |
^ --logLevel=&lt;level&gt;  | Execution log level (debug, info, warning, severe, off)  |
^ --help  | Output command line parameter help  | 
^ --exportDataDir  | Directory where insert statement csv files will be kept (required by generateChangeLog command)  | 

## Required Diff Parameters ##

^ --referenceUsername=&lt;value&gt;  | Base Database username  |
^ --referencePassword=&lt;value&gt;  | Base Database password  |
^ --referenceUrl=&lt;value&gt;  | Base Database URL  |

## Optional Diff Parameters ##

^ --referenceDriver=&lt;jdbc.driver.ClassName&gt;  | Base Database driver class name  |

## Change Log Properties ##
^ -D&lt;property.name&gt;=&lt;property.value&gt;  | Pass a name/value pair for [substitution of ${} blocks](changelog_parameters.html) in the change log(s)  |

## Using a liquibase.properties file ##

If you do not want to always specify options on the command line, you can create a [properties file](liquibase.properties) that contains default values. By default, Liquibase will look for a file called "liquibase.properties" in the current working directory, but you can specify an alternate location with the --defaultsFile flag. If you have specified an option in a properties file and specify the same option on the command line, the value on the command line will override the properties file value.

## Examples ##

### Standard Migrator Run ###

``
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=\path\to\classes:jdbcdriver.jar \
      --changeLogFile=com/example/db.changelog.xml \
      --url="jdbc:oracle:thin:@localhost:1521:oracle" \
      --username=scott \
      --password=tiger \
      update
``

### Run Migrator pulling changelogs from a .WAR file ###

``
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=website.war \
      --changeLogFile=com/example/db.changelog.xml \
      --url=jdbc:oracle:thin:@localhost:1521:oracle \
      --username=scott \
      --password=tiger \
      update
``

### Run Migrator pulling changelogs from an .EAR file ###

``
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=application.ear \
      --changeLogFile=com/example/db.changelog.xml \
      --url=jdbc:oracle:thin:@localhost:1521:oracle \
      --username=scott \
      --password=tiger
``

### Don't execute changesets, save SQL to /tmp/script.sql ###

``
java -jar liquibase.jar \
        --driver=oracle.jdbc.OracleDriver \
        --classpath=jdbcdriver.jar \
        --url=jdbc:oracle:thin:@localhost:1521:oracle \
        --username=scott \
        --password=tiger \
        updateSQL &gt; /tmp/script.sql
``

### List locks on the database change log ###

``
java -jar liquibase.jar \
        --driver=oracle.jdbc.OracleDriver \
        --classpath=jdbcdriver.jar \
        --url=jdbc:oracle:thin:@localhost:1521:oracle \
        --username=scott \
        --password=tiger \
        listLocks
``

### Runs Liquibase using defaults from ./liquibase.properties ###

``
java -jar liquibase.jar update
``

#liquibase.properties
``
driver: oracle.jdbc.OracleDriver
classpath: jdbcdriver.jar
url: jdbc:oracle:thin:@localhost:1521:oracle
username: scott
password: tiger
``

### Export Data from Database ###
This will export the data from the targeted database and put it in a folder "data" in a file name specified with &lt;insert file name&gt;.

``
java -jar liquibase.jar --changeLogFile="./data/&lt;insert file name&gt; " --diffTypes="data" generateChangeLog
``

### Update passing changelog parameters ###
``
liquibase.bat update -Dengine=myisam
``
