---
layout: default
title: Diff
---

# Database "Diff" #

While the best way to track database changes is by adding change sets during development (see [the problem with database diffs](http://blog.liquibase.org/2007/06/the-problem-with-database-diffs.html)), there are times when being able to perform database diffs is valuable, particularly near the end of a project as a double-check that all required changes are included in the change log.

## Running Diff ##

Diff command support is available through the [command_line](command_line.html) and [ant](ant/index.html) tools.  When diff-ing databases, you specify the target database like you normally do in Liquibase (--url, --username, etc. flags) and you specify the base database with additional flags after the command name.

## Example ##

{% highlight sh %}
liquibase.sh --driver=oracle.jdbc.OracleDriver \
        --url=jdbc:oracle:thin:@testdb:1521:test \
        --username=bob \
        --password=bob \
    diff \
        --referenceUrl=jdbc:oracle:thin:@localhost/XE \
        --referenceUsername=bob \
        --referencePassword=bob
{% endhighlight %}


## Database Comparisons ##

Currently, Liquibase runs the following comparisons:

* Version Differences
* Missing/unexpected tables
* Missing/unexpected views
* Missing/unexpected columns
* Missing/unexpected primary keys
* Missing/unexpected unique constraints
* Missing/unexpected foreign Keys
* Missing/unexpected sequences
* Missing/unexpected indexes
* Column definition differences (data type, auto-increment, etc.)
* View definition differences
* Data differences (limited), not checked by default

It does not (currently) check

* Non-foreign key constraints (check, etc)
* Stored Procedures
* Data type length

Liquibase can diff different database types, but the results may be skewed due to differences in case and data types.


## Controlling Checks (since 1.8) ##
 What changes are checked for can be controlled with the diffTypes parameter to the diff commands.  The following options are available and can be passed as a comma-separated list:
 
* tables **\[DEFAULT\]**
* columns **\[DEFAULT\]**
* views **\[DEFAULT\]**
* primaryKeys **\[DEFAULT\]**
* indexes **\[DEFAULT\]**
* foreignKeys **\[DEFAULT\]**
* sequences **\[DEFAULT\]**
* data

If no diffTypes are specified, the checks marked DEFAULT will be run.

Note: This only works with the "generateChangeLog" command, not the "diff" or "diffChangeLog" commands.

### Output Modes ###

Liquibase supports two output modes: report mode ("diff") and change log mode ("diffChangeLog"). In both modes, diff progress is reported to standard error during execution.

### Report Mode ###

In report mode, a description of the differences between two databases is reported to standard out.

{% highlight text %}
Base Database: BOB jdbc:oracle:thin:@testdb:1521:latest
Target Database: BOB jdbc:oracle:thin:@localhost/XE
Product Name: EQUAL
Product Version:
     Base:   'Oracle Database 10g Enterprise Edition Release 10.2.0.1.0
With the Partitioning, OLAP and Data Mining options'
     Target: 'Oracle Database 10g Express Edition Release 10.2.0.1.0'
Missing Tables: NONE
Unexpected Tables: NONE
Missing Views: NONE
Unexpected Views: NONE
Missing Columns:
     CREDIT.MONTH
     CREDIT.COMPANY
     CMS_TEMPLATE.CLASSTYPE
     CONTENTITEM.SORTORDER
Unexpected Columns:
     CATEGORY.SORTORDER
Missing Foreign Keys: NONE
Unexpected Foreign Keys:
     FK_NAME (ID_VC -> STATUS_ID_VC)
Missing Primary Keys: NONE
Unexpected Primary Keys: NONE
Missing Indexes: NONE
Unexpected Indexes: NONE
Missing Sequences: NONE
Unexpected Sequences: NONE
{% endhighlight %}

### ChangeLog Mode ###

In change log mode, the an XML change log of what is necessary to upgrade the base database to the target database is sent to standard out. This change log can be included as is, or copied into an existing change log.  If the diff command is passed an existing change log file, the new change sets will be appended to the end of the file.

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.1"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.1
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.1.xsd">
    <changeSet author="diff-generated" id="1185206820975-1">
        <addColumn tableName="CREDIT">
            <column name="MONTH" type="VARCHAR2(10)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-2">
        <addColumn tableName="CREDIT">
            <column name="COMPANY" type="NUMBER(22,0)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-3">
        <addColumn tableName="CMS_TEMPLATE">
            <column name="CLASSTYPE" type="VARCHAR2(255)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-4">
        <addColumn tableName="CONTENTITEM">
            <column name="SORTORDER" type="NUMBER(22)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-5">
        <dropColumn columnName="SORTORDER" tableName="CATEGORY"/>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-6">
        <dropForeignKeyConstraint baseTableName="CMS_STATUS"
                     constraintName="FK_NAME"/>
    </changeSet>
</databaseChangeLog>
{% endhighlight %}

Database objects to include in the changelog can be controlled with the includeObjects or excludeObjects parameters. (since 3.3.2)

The format supported is:
- An object name (actually a regexp) will match any object whose name matches the regexp.
- A type:name syntax that matches the regexp name for objects of the given type
- If you want multiple expressions, comma separate them
- The type:name logic will be applied to the tables containing columns, indexes, etc.

NOTE: name comparison is case sensitive. If you want insensitive logic, use the `(?i)` regexp flag.

Example Filters:
- "table_name" will match a table called "table_name" but not "other_table" or "TABLE_NAME"
- "(i?)table_name" will match a table called "table_name" and "TABLE_NAME"
- "table_name" will match all columns in the table table_name
- "table:table_name" will match a table called table_name but not a column named table_name
- "table:table_name, column:*._lock" will match a table called table_name and all columns that end with "_lock"