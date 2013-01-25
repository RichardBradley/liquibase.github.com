---
layout: default
title: Add lookup table
---

# Add Lookup Table #

Creates a lookup table containing values stored in a column and creates a foreign key to the new table.

## Sample ##

{% highlight xml %}
<addLookupTable
    existingTableName="address" existingColumnName="state"
    newTableName="state" newColumnName="abbreviation"
    constraintName="fk_address_state"
/>
{% endhighlight %}


## Available Attributes ##

^ existingTableName  | Name of the table containing the data to extract **required**  |
^ existingTableSchemaName  | Name of the existing table schema  | 
^ existingColumnName  | Name of the column containing the data to extract **required**  |
^ newTableName  | Name of lookup table to create **required**  |
^ newTableSchemaName  | Name of the table schema  | 
^ newColumnName  | Name of the column in the new table to create **required**  |
^ newColumnDataType  | Data type of the new table column.  Required for MySQL and MS-SQL. |
^ constraintName  | Name of the foreign-key constraint to create between the existing table and the lookup table **required**  |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | Not Supported  | 
^ HSQL  | Not Supported  | 
^ H2  | No Issues  | 
^ Caché  | Not Supported  | 
^ Firebird  | Not Supported  | 
^ MaxDB  | No Issues  | 
^ SQLite  | Not Supported  |

Automatic Rollback Support: **YES**