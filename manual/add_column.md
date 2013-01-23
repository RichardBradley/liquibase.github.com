---
layout: default
title: Add column
---

# "Add Column" Refactoring #

Adds a new column to an existing table.

## Sample ##

<code xml>
<addColumn tableName="person">
    <column name="firstname" type="varchar(255)"/>
</addColumn>
</code>

## Available Attributes ##

^ tableName  | Name of the table to add the column to **[required]** |
^ schemaName  | Name of the table schema  |


## Available Sub-Tags ##

^ column  | Column constraint and foreign key information. Setting the "defaultValue" attribue will specify a default value for the column.  Setting the "value" attribute will set all rows existing to the specified value without modifying the column default.  See the [[column.html| column tag documentation]] for more information **[required]** |



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
^ Firebird  |No Issues  |
^ MaxDB	 | No Issues  |
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**
