---
layout: default
title: Load update data
---

# Load Update Data #

Loads or updates data from a CSV file into an existing table.  Differs from loadData by issuing a SQL batch that checks for the existence of a record.  If found, the record is UPDATEd, else the record is INSERTed.  Also, generates DELETE statements for a rollback.

A value of //NULL// in a cell will be converted to a database NULL rather than the string "NULL"

//Since LiquiBase 2.0//


## Sample ##

{% highlight xml %}
<loadUpdateData tableName="users" file="com/sample/users.csv" primaryKey="id">
    <column name="id" type="NUMERIC"/>
    <column name="firstname" type="STRING"/>
    <column name="lastname" type="STRING"/>
    <column name="username" type="STRING"/>
</loadUpdateData>
{% endhighlight %}


## Available Attributes ##

^ tableName  | Name of the table to insert or update data in **required** |
^ schemaName  | Name of the table schema  | 
^ primaryKey | Comma delimited list of the columns for the primary key **required**  |
^ file  | CSV file to load **required**  |
^ encoding | Encoding of the CSV file (defaults to UTF-8)  | 

## Available Sub-Tags ##

^ column  | Defines how the data should be loaded  | 





## Available Column Attributes ##

^ index | A zero-based index of the column being described **index or header required** |
^ header | Data file header row value of column being described **index or header required** |
^ name  | Name of the column to insert or update.  Defaults to the header value in the file |
^ type  | Data type of the column. Possible values: STRING, NUMERIC, DATE, BOOLEAN **required**  |


## Database Compatiblity ##

^ MySQL  | No support | 
^ PostgreSQL  | No support | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No support  | 
^ Sybase  | No support  | 
^ DB2  | No support  | 
^ Derby  | No support  | 
^ HSQL  | No support  | 
^ H2  | No support  | 
^ Caché  | No support  | 
^ Firebird  | No support  | 
^ MaxDB  | No support  | 
^ SQLite  | No support  | 

Automatic Rollback Support: **YES**