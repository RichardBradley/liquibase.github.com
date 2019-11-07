---
layout: default
title: Diff
---
# Liquibase Commands: `diff`
The `diff` command in Liquibase allows you to compare two databases of the same type or different types to one another.

## Uses
The `diff` command is typically used at the completion of a project, because it allows you to verify all expected changes are in the changelog. The `diff` command is also useful for the following tasks:
+ Finding missing objects in your database
+ Seeing that a change was made to your database
+ Finding unexpected items in your database

## Running the `diff` Command
To compare two databases:
+ The first option is to run the `diff` command and pass the parameters needed for your source database and target database.  For example:
Run the following:
{% highlight text %}
liquibase
--outputFile=mydiff.txt
--driver=oracle.jdbc.OracleDriver
--classpath=ojdbc14.jar
--url="jdbc:oracle:thin:@<IP OR HOSTNAME>:<PORT>:<SERVICE NAME OR SID>"
--username=<USERNAME>
--password=<PASSWORD>
diff
--referenceUrl="jdbc:oracle:thin:@<IP OR HOSTNAME>:<PORT>:<SERVICE NAME OR SID>"
--referenceUsername=<USERNAME>
--referencePassword=<PASSWORD>
{% endhighlight %}

>**Note:** When running `diff` against two different databases, the class path property should reference both .jar files. Example: `classpath: ojdbc7.jar:postgresql-42.2.8.jar`

+ Alternatively, configure the *liquibase.properties* file to include your driver class path, URL, and user authentication information for both databases.
Run the following command:
{% highlight text %}
liquibase --outputFile=mydiff.txt diff
{% endhighlight %}
>**Note:** For information on how to configure your *liquibase.properties* file, view the [Creating & Configuring your *liquibase.properties* File](config_properties.html) topic in the knowledge base.

<details>
<summary style="font-size:200%;color:blue;">Example Output</summary>
<br>
{% highlight text %}

Diff Results:
Reference Database: MYSCHEMA2 @ jdbc:oracle:thin:@localhost:1521:ORCL (Default Schema: MYSCHEMA2)
Comparison Database: MYSCHEMA @ jdbc:oracle:thin:@localhost:1521:ORCL (Default Schema: MYSCHEMA)
Compared Schemas: MYSCHEMA2 -> MYSCHEMA
Product Name: EQUAL
Product Version: EQUAL
Missing Catalog(s): NONE
Unexpected Catalog(s): NONE
Changed Catalog(s): NONE
Missing Check Constraint(s): NONE
Unexpected Check Constraint(s): NONE
Changed Check Constraint(s): NONE
Missing Column(s): NONE
Unexpected Column(s):
     MYSCHEMA.DEPARTMENT.ACTIVE
     MYSCHEMA.SERVICETECH.ACTIVE
     MYSCHEMA.SERVICETECH2.ACTIVE
     MYSCHEMA.SERVICETECH3.ACTIVE
     MYSCHEMA.VIEW1.ACTIVE
     MYSCHEMA.DATABASECHANGELOG.AUTHOR
     MYSCHEMA.DATABASECHANGELOG.COMMENTS
     MYSCHEMA.DATABASECHANGELOG.CONTEXTS
     MYSCHEMA.DATABASECHANGELOG.DATEEXECUTED
     MYSCHEMA.DATABASECHANGELOG.DEPLOYMENT_ID
     MYSCHEMA.DATABASECHANGELOG.DESCRIPTION
     MYSCHEMA.DATABASECHANGELOG.EXECTYPE
     MYSCHEMA.DATABASECHANGELOG.FILENAME
     MYSCHEMA.DATABASECHANGELOG.ID
     MYSCHEMA.DATABASECHANGELOGLOCK.ID
     MYSCHEMA.DEPARTMENT.ID
     MYSCHEMA.SERVICETECH.ID
     MYSCHEMA.SERVICETECH2.ID
     MYSCHEMA.SERVICETECH3.ID
     MYSCHEMA.VIEW1.ID
     MYSCHEMA.DATABASECHANGELOG.LABELS
     MYSCHEMA.DATABASECHANGELOG.LIQUIBASE
     MYSCHEMA.DATABASECHANGELOGLOCK.LOCKED
     MYSCHEMA.DATABASECHANGELOGLOCK.LOCKEDBY
     MYSCHEMA.DATABASECHANGELOGLOCK.LOCKGRANTED
     MYSCHEMA.DATABASECHANGELOG.MD5SUM
     MYSCHEMA.DEPARTMENT.NAME
     MYSCHEMA.SERVICETECH.NAME
     MYSCHEMA.SERVICETECH2.NAME
     MYSCHEMA.SERVICETECH3.NAME
     MYSCHEMA.VIEW1.NAME
     MYSCHEMA.DATABASECHANGELOG.ORDEREXECUTED
     MYSCHEMA.DATABASECHANGELOG.TAG
Changed Column(s): NONE
Missing Database Package(s): NONE
Unexpected Database Package(s): NONE
Changed Database Package(s): NONE
Missing Database Package Body(s): NONE
Unexpected Database Package Body(s): NONE
Changed Database Package Body(s): NONE
Missing Foreign Key(s): NONE
Unexpected Foreign Key(s): NONE
Changed Foreign Key(s): NONE
Missing Function(s): NONE
Unexpected Function(s): NONE
Changed Function(s): NONE
Missing Index(s): NONE
Unexpected Index(s):
     PK_DATABASECHANGELOGLOCK UNIQUE  ON MYSCHEMA.DATABASECHANGELOGLOCK(ID)
     PK_DEPARTMENT UNIQUE  ON MYSCHEMA.DEPARTMENT(ID)
     PK_SERVICETECH UNIQUE  ON MYSCHEMA.SERVICETECH(ID)
     PK_SERVICETECH2 UNIQUE  ON MYSCHEMA.SERVICETECH2(ID)
     PK_SERVICETECH3 UNIQUE  ON MYSCHEMA.SERVICETECH3(ID)
Changed Index(s): NONE
Missing Java Class(s): NONE
Unexpected Java Class(s): NONE
Changed Java Class(s): NONE
Missing Java Source(s): NONE
Unexpected Java Source(s): NONE
Changed Java Source(s): NONE
Missing Primary Key(s): NONE
Unexpected Primary Key(s):
     PK_DATABASECHANGELOGLOCK on MYSCHEMA.DATABASECHANGELOGLOCK(ID)
     PK_DEPARTMENT on MYSCHEMA.DEPARTMENT(ID)
     PK_SERVICETECH on MYSCHEMA.SERVICETECH(ID)
     PK_SERVICETECH2 on MYSCHEMA.SERVICETECH2(ID)
     PK_SERVICETECH3 on MYSCHEMA.SERVICETECH3(ID)
Changed Primary Key(s): NONE
Missing Sequence(s): NONE
Unexpected Sequence(s): NONE
Changed Sequence(s): NONE
Missing Stored Procedure(s): NONE
Unexpected Stored Procedure(s): NONE
Changed Stored Procedure(s): NONE
Missing Synonym(s): NONE
Unexpected Synonym(s): NONE
Changed Synonym(s): NONE
Missing Table(s): NONE
Unexpected Table(s):
     DATABASECHANGELOG
     DATABASECHANGELOGLOCK
     DEPARTMENT
     SERVICETECH
     SERVICETECH2
     SERVICETECH3
Changed Table(s): NONE
Missing Trigger(s): NONE
Unexpected Trigger(s): NONE
Changed Trigger(s): NONE
Missing Unique Constraint(s): NONE
Unexpected Unique Constraint(s): NONE
Changed Unique Constraint(s): NONE
Missing View(s): NONE
Unexpected View(s):
     VIEW1
Changed View(s): NONE
Liquibase command 'diff' was executed successfully.

{% endhighlight %}
</details>


The `diff` command produces a list of categories along with one of the following descriptions:
+ **Missing:** The object is not on your comparison database (source database).
+ **Unexpected:** There are objects on your comparison database (source database) that are not on your reference database (target database).
+ **Changed:** The object as it exists on the source database is different than as it exists in the target database.
> **Note:** The changed description will not specify the type of change applied to your database. Run the [diffChangeLog](diffChangeLog.html) command 
to generate a changelog that will apply the changes to the target database.

Liquibase Community `diff` categories:
+ Catalog
+ Column
+ Foreign Key
+ Index
+ Primary Key
+ Schema
+ Sequence
+ Procedure
+ Unique Constraints
+ View

Liquibase Pro `diff` categories:
> **Note:** coming soon with Liquibase 3.8.1

+ Check Constraint
+ Package
+ Package Body
+ Function
+ Trigger
+ Synonyms
>**Note:** Liquibase does not currently check Datatype length.

## Filtering `diff` Types
Liquibase allows you to use diffType parameters to filter the types of objects you want to compare. Multiple filters can be added 
to the parameter as a comma separated list. If no diffTypes are specified, all objects are considered.


Example: 
{% highlight text %}
liquibase --diffTypes=tables,indexes,views diff
{% endhighlight %}

<details>
<summary style="font-size:200%;color:blue;">Example filtered output</summary>
<br>
{% highlight text %}

Diff Results:
Reference Database: MYSCHEMA2 @ jdbc:oracle:thin:@localhost:1521:ORCL (Default Schema: MYSCHEMA2)
Comparison Database: MYSCHEMA @ jdbc:oracle:thin:@localhost:1521:ORCL (Default Schema: MYSCHEMA)
Compared Schemas: MYSCHEMA2 -> MYSCHEMA
Product Name: EQUAL
Product Version: EQUAL
Missing Index(s): NONE
Unexpected Index(s):
     PK_DATABASECHANGELOGLOCK UNIQUE  ON MYSCHEMA.DATABASECHANGELOGLOCK(ID)
     PK_DEPARTMENT UNIQUE  ON MYSCHEMA.DEPARTMENT(ID)
     PK_SERVICETECH UNIQUE  ON MYSCHEMA.SERVICETECH(ID)
     PK_SERVICETECH2 UNIQUE  ON MYSCHEMA.SERVICETECH2(ID)
     PK_SERVICETECH3 UNIQUE  ON MYSCHEMA.SERVICETECH3(ID)
Changed Index(s): NONE
Missing Table(s): NONE
Unexpected Table(s):
     DATABASECHANGELOG
     DATABASECHANGELOGLOCK
     DEPARTMENT
     SERVICETECH
     SERVICETECH2
     SERVICETECH3
Changed Table(s): NONE
Missing View(s): NONE
Unexpected View(s):
     VIEW1
Changed View(s): NONE
Liquibase command 'diff' was executed successfully.

{% endhighlight %}
</details>
