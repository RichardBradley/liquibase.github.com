---
layout: default
title: Load data
---

# Load Data #

Loads data from a CSV file into an existing table.  A value of //NULL// in a cell will be converted to a database NULL rather than the string "NULL"

Date/Time values included in the CSV file should be in ISO format[http://en.wikipedia.org/wiki/ISO_8601](http://en.wikipedia.org/wiki/ISO_8601) in order to be parsed correctly by Liquibase.  Liquibase will initially set the date format to be "yyyy-MM-dd'T'HH:mm:ss" and then it checks for two special cases which will override the data format string.

  - If the string representing the date/time includes a ".", then the date format is changed to "yyyy-MM-dd'T'HH:mm:ss.S"
  - If the string representing the date/time includes a space, then the date format is changed to "yyyy-MM-dd HH:mm:ss"

Once the date format string is set, Liquibase will then call the SimpleDateFormat.parse() method attempting to parse the input string so that it can return a Date/Time.  If problems occur, then a ParseException is thrown and the input string is treated as a String for the INSERT command to be generated.



//Since Liquibase 1.7//


## Sample ##

{% highlight xml %}
<loadData tableName="users" file="com/sample/users.csv">
    <column name="id" type="NUMERIC"/>
    <column name="firstname" type="STRING"/>
    <column name="lastname" type="STRING"/>
    <column name="username" type="STRING"/>
</loadData>
{% endhighlight %}


## Available Attributes ##

^ tableName  | Name of the table to insert data into **required** |
^ schemaName  | Name of the table schema  | 
^ file  | CSV file to load **required**  |
^ encoding | Encoding of the CSV file (defaults to UTF-8)  | 

## Available Sub-Tags ##

^ column  | Defines how the data should be loaded  | 





## Available Column Attributes ##

^ index | A zero-based index of the column being described **index or header required** |
^ header | Data file header row value of column being described **index or header required** |
^ name  | Name of the column to insert into.  Defaults to the header value in the file |
^ type  | Data type of the column. Possible values: STRING, NUMERIC, DATE, BOOLEAN **required**  |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | No Issues  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  | 

Automatic Rollback Support: **NO**