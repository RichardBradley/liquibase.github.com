---
layout: default
title: Command line
---

# LiquiBase Command Line #

LiquiBase can be run from the command line by running
**liquibase [options] [command] [command parameters]** (optionally, replace the liquibase command with java -jar <path-to-liquibase-jar>). The command line migrator works well when you want to do migrations on demand, but don't have Ant or Maven available such as on servers. The command line migrator also gives you more control over the process than the [[servlet_listener.html]], [[Ant.html]], or [[Maven.html]] do, allowing you to run maintenance commands like outputting SQL and listing/releasing database changelog locks.

Any values found after the command on the command line invocation will be considered a command parameter. The command line processor will validate whether the command line parameters are allowed for the current command. If the current command does not allow command line parameters or the parameter appears to be an incorrect format, then an error message of 'unexpected command parmeter' will be logged and the execution will terminate.

The command line migrator also allows you to

  * [[rollback.html|perform rollback operations and generate rollback scripts]]
  * [[diff.html|generate "diff"s]]
  * [[generating_changelogs.html|generate creation scripts from existing databases]]
  * [[dbdoc.html|generate database change documentation]]

If you run the command line migrator without any arguments, you will get a help message listing these available parameters:


## Database Update Commands ##

^ update  | Updates database to current version  | 
^ updateCount <value>  | Applies the next <value> change sets  | 
^ updateSQL  | Writes SQL to update database to current version to STDOUT  | 
^ updateCountSQL <value>  | Writes SQL to apply the next <value> change sets to STDOUT  | 





## Database Rollback Commands ##

^ rollback <tag>  | Rolls back the database to the state it was in when the tag was applied  | 
^ rollbackToDate <date/time>  | Rolls back the database to the state it was in at the given date/time  | 
^ rollbackCount <value>  | Rolls back the last <value> change sets  | 
^ rollbackSQL <tag>  | Writes SQL to roll back the database to the state it was in when the tag was applied to STDOUT  | 
^ rollbackToDateSQL <date/time>  | Writes SQL to roll back the database to the state it was in at the given date/time version to STDOUT  | 
^ rollbackCountSQL <value>  | Writes SQL to roll back the last <value> change sets to STDOUT  | 
^ futureRollbackSQL  | Writes SQL to roll back the database to the current state after the changes in the changeslog have been applied  | 
^ updateTestingRollback  | Updates the database, then rolls back changes before updating again |
^ generateChangeLog  | generateChangeLog of the database to standard out. v1.8 requires the dataDir parameter currently. | 


## Diff Commands ##

^ diff [diff parameters]  | Writes description of differences to standard out  |
^ diffChangeLog [diff parameters]  | Writes Change Log XML to update the base database to the target database to standard out  | 


## Documentation Commands ##

^ dbDoc <outputDirectory>  | Generates Javadoc-like documentation based on current database and change log  |





## Maintenance Commands ##

^ tag <tag>  | 'Tags' the current database state for future rollback  | 
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

^ --changeLogFile=<path and filename>  | The changelog file to use  | 
^ --username=<value>  | Database username  | 
^ --password=<value>  | Database password  | 
^ --url=<value>  | Database URL  | 
^ --driver=<jdbc.driver.ClassName>  | Database driver class name  | 






## Optional Parameters ##

^ --classpath=<value>  | Classpath containing migration files and JDBC Driver.  | 
^ --contexts=<value>  | ChangeSet contexts to execute  | 
^ --defaultSchemaName=<schema>  | Specifies the default schema to use for managed database objects and for LiquiBase control tables  |
^ --databaseClass=<custom.DatabaseImpl>  | Specifies a custom [[http://www.liquibase.org/api/liquibase/database/Database.html|Database]] implementation to use  |
^ --defaultsFile=</path/to/file>  | File containing default option values (default: ./liquibase.properties)  | 
^ --includeSystemClasspath=<true or false>  | Include the system classpath in the LiquiBase classpath (default: true)  | 
^ --promptForNonLocalDatabase=<true or false>  | Prompt if non-localhost databases (default: false)  | 
^ --currentDateTimeFunction=<value>  | Overrides current date time function used in SQL. Useful for unsupported databases  | 
^ --logLevel=<level>  | Execution log level (debug, info, warning, severe, off)  | 
^ --help  | Output command line parameter help  | 
^ --exportDataDir  | Directory where insert statement csv files will be kept (required by generateChangeLog command)  | 

## Required Diff Parameters ##

^ --referenceUsername=<value>  | Base Database username  | 
^ --referencePassword=<value>  | Base Database password  | 
^ --referenceUrl=<value>  | Base Database URL  | 

## Optional Diff Parameters ##

^ --referenceDriver=<jdbc.driver.ClassName>  | Base Database driver class name  | 

## Change Log Properties ##
^ -D<property.name>=<property.value>  | Pass a name/value pair for [[changelog_parameters.html|substitution of ${} blocks]] in the change log(s)  |

## Using a liquibase.properties file ##

If you do not want to always specify options on the command line, you can create a [[liquibase.properties|properties file]] that contains default values. By default, LiquiBase will look for a file called "liquibase.properties" in the current working directory, but you can specify an alternate location with the --defaultsFile flag. If you have specified an option in a properties file and specify the same option on the command line, the value on the command line will override the properties file value.

## Examples ##

### Standard Migrator Run ###

<code>
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=\path\to\classes:jdbcdriver.jar \
      --changeLogFile=com/example/db.changelog.xml \
      --url="jdbc:oracle:thin:@localhost:1521:oracle" \
      --username=scott \
      --password=tiger \
      update
</code>

### Run Migrator pulling changelogs from a .WAR file ###

<code>
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=website.war \
      --changeLogFile=com/example/db.changelog.xml \
      --url=jdbc:oracle:thin:@localhost:1521:oracle \
      --username=scott \
      --password=tiger \
      update
</code>

### Run Migrator pulling changelogs from an .EAR file ###

<code>
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=application.ear \
      --changeLogFile=com/example/db.changelog.xml \
      --url=jdbc:oracle:thin:@localhost:1521:oracle \
      --username=scott \
      --password=tiger
</code>

### Don't execute changesets, save SQL to /tmp/script.sql ###

<code>
java -jar liquibase.jar \
        --driver=oracle.jdbc.OracleDriver \
        --classpath=jdbcdriver.jar \
        --url=jdbc:oracle:thin:@localhost:1521:oracle \
        --username=scott \
        --password=tiger \
        updateSQL > /tmp/script.sql
</code>

### List locks on the database change log ###

<code>
java -jar liquibase.jar \
        --driver=oracle.jdbc.OracleDriver \
        --classpath=jdbcdriver.jar \
        --url=jdbc:oracle:thin:@localhost:1521:oracle \
        --username=scott \
        --password=tiger \
        listLocks
</code>

### Runs LiquiBase using defaults from ./liquibase.properties ###

<code>
java -jar liquibase.jar update
</code>

<code>
#liquibase.properties
driver: oracle.jdbc.OracleDriver
classpath: jdbcdriver.jar
url: jdbc:oracle:thin:@localhost:1521:oracle
username: scott
password: tiger
</code>

### Export Data from Database ###
This will export the data from the targeted database and put it in a folder "data" in a file name specified with <insert file name>.

<code>
java -jar liquibase.jar --changeLogFile="./data/<insert file name> " --diffTypes="data" generateChangeLog
</code>

### Update passing changelog parameters ###
<code>
liquibase.bat update -Dengine=myisam
</code>
