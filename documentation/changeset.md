---
layout: default
title: Changeset
---

# &lt;changeSet&gt; tag #

The changeSet tag is what you use to group database changes/[refactoring](refactoring_commands.html)s together.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.7"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.7
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.7.xsd">
    <changeSet id="1" author="bob">
        <comment>A sample change log</comment>
        <createTable/>
    </changeSet>
    <changeSet id="2" author="bob" runAlways="true">
        <alterTable/>
    </changeSet>
    <changeSet id="3" author="alice" failOnError="false" dbms="oracle">
        <alterTable/>
    </changeSet>
</databaseChangeLog>
{% endhighlight %}

Each changeSet tag is uniquely identified by the combination of the "id" tag, the "author" tag, and the changelog file classpath name. The id tag is only used as an identifier, it does not direct the order that changes are run and does not even have to be an integer. If you do not know or do not wish to save the actual author, simply use a placeholder value such as "UNKNOWN".

As LiquiBase executes the databaseChangeLog, it reads the changeSets in order and, for each one, checks the "databasechangelog" table to see if the combination of id/author/filepath has been run. If it has been run, the changeSet will be skipped unless there is a true "runAlways" tag. After all the changes in the changeSet are run, LiquiBase will insert a new row with the id/author/filepath along with an MD5Sum of the changeSet (see below) in the "databasechangelog".

LiquiBase attempts to execute each changeSet in a transaction that is committed at the end, or rolled back if there is an error. Some databases will auto-commit statements which interferes with this transaction setup and could lead to an unexpected database state. Therefore, it is usually best to have just one change per changeSet unless there is a group of non-auto-committing changes that you want applied as a transaction such as inserting data.




## Available Attributes ##

^ id  | An alpha-numeric identifier **required** |
^ author  | The creator of the change set **required**  |
^ dbms  | The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this attribute. Valid database type names are listed on the [supported databases page](../databases) |
^ runAlways  | Executes the change set on every run, even if it has been run before |
^ runOnChange  | Executes the change the first time it is seen and each time the change set has been changed |
^ context  | Executes the change if the particular context was passed at runtime. Any string can be used for the context name and they are checked case-insensitively. |
^ runInTransaction  | Should the changeSet be ran as a single transaction (if possible)?  Defaults to true.  **Warning: be careful with this attribute.  If set to false and an error occurs part way through running a changeSet containing multiple statements, the LiquiBase databasechangelog table will be left in an invalid state** //Since 1.9// |
^ failOnError | Should the migration fail if an error occurs while executing the changeSet? |



## Available Sub-Tags ##

^ comment  | A description of the change set.  XML comments will provide the same benefit, future releases of LiquiBase may be able to make use of &lt;comment&gt; tag comments to generate documentation |
^ preConditions | [Preconditions](Preconditions.html) that must pass before the change set will be executed.  Useful for doing a data sanity check before doing something unrecoverable such as a dropTable //Since 1.7// |
^ &lt;Any Refactoring Tag(s)&gt;  | The database change(s) to run as part of this change set (so called [refactoring](refactoring_commands.html)s) |
^ validCheckSum | When comparing the changeSet stored in the database with the checksum generated from the current changeSet, do not consider the changeSet changed if the given validCheckSum is in the database. Use primarily when you need to change a changeSet and don't want errors thrown on databases on which is has already ran (not a recommended procedure).  //Since 1.7// |
^ rollback | SQL statements or refactoring tags that describe how to [rollback](rollback.html) the change set |

### Rollback Tag ###

The rollback tag describes how to roll back a change using SQL statement(s), change tags, or a reference to a previous change set.

#### Rollback Tag Examples ####

{% highlight xml %}
<changeSet id="1" author="bob">
    <createTable tableName="testTable">
    <rollback>
        drop table testTable
    </rollback>
</changeSet>
{% endhighlight %}

{% highlight xml %}
<changeSet id="1" author="bob">
    <createTable tableName="testTable">
    <rollback>
        <dropTable tableName="testTable"/>
    </rollback>
</changeSet>
{% endhighlight %}

{% highlight xml %}
<changeSet id="2" author="bob">
    <dropTable tableName="testTable"/>
    <rollback changeSetId="1" changeSetAuthor="bob"/>
</changeSet>
{% endhighlight %}



## ChangeSet Check Sums ##

When LiquiBase reaches a changeSet, it computes a check sum and stores it in the "databasechangelog". The value of storing the check sum is so that LiquiBase can know if someone changed the changes in the changeSet since it was run. If the changeSet was changed since it was run, LiquiBase will exit the migration with an error because it cannot know what was changed and the database may be in a state different than what the changeLog is expecting. If there was a valid reason for the changeSet to have been changed and you want to ignore this error, update the databasechangelog table so that the row with the corresponding id/author/filepath has a null value for the check sum. The next time LiquiBase runs, it will update the check sum value to the new correct value.


Check sums are also used in conjunction with the "runOnChange" changeSet attribute. There are times you may not want to add a new changeSet because you only need to know about the current version, but you want this change applied whenever it is updated. A good example of when you would want this is stored procedures. If you copy the entire text of the stored procedure to a new changeSet each time you make a change you will not only end up with a very long changeLog, but you will lose the merging and diff-ing power of your source control. Instead, put the text of the stored procedure in a changeSet with a runOnChange="true" attribute. The stored procedure will only be re-created when and only when there is a change to the text of it.
