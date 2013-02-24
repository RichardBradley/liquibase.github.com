---
layout: default
title: Column
---

# Column tag #

The "column" tag is a tag that is re-used throughout the Liquibase XML when column definitions and column information is needed. As a result, not all the attributes of column make sense in each context it is used in.





## Available Attributes ##

^ name  | Name of the column  |
^ type  | Data type of the column.  |
^ value  | Value to set the column to. The value will be surrounded by quote marks and nested quote marks will be escaped.  |
^ valueNumeric  | Numeric value to set the column to. The value will not be escaped and will not be nested in quote marks.  | 
^ valueBoolean  | Boolean value to set the column to. The actual value string inserted will be dependent on the database implementation.  | 
^ valueDate  | Date and/or Time value to set the column to. The value is specified in one of the following forms: "YYYY-MM-DD", "hh:mm:ss" or "YYYY-MM-DDThh:mm:ss".  | 
^ valueComputed  | A value that is returned from a function or procedure call.  | 
^ defaultValue  | Default value for column  | 
^ defaultValueNumeric  | Default numeric value for column  | 
^ defaultValueBoolean  | Default boolean value for column  | 
^ defaultValueDate  | Default date and/or time value for column.  The value is specified in one of the following forms: "YYYY-MM-DD", "hh:mm:ss" or "YYYY-MM-DDThh:mm:ss"  | 
^ defaultValueComputed  | A value that is returned from a function or procedure call.  This attribute will contain the function to call.  | 
^ autoIncrement  | Is column an auto-increment column.  Ignored on databases that do not support autoincrement/identity functionality. | 
^ remarks  | Short description of the column (column comment)  | 

To help make scripts database-independent, the following "generic" data types   will be converted to the correct database implementation: 
  * BOOLEAN
  * CURRENCY
  * UUID
  * CLOB
  * BLOB
  * DATE
  * DATETIME
  * TIME
  * BIGINT  

Also, specifying a java.sql.Types.* type will be converted to the correct type as well. If needed, precision can be included.
  * java.sql.Types.TIMESTAMP
  * java.sql.Types.VARCHAR(255)

## Available Sub-Tags ##

^ constraints  | Constraint definitions  | 


# Constraints tag #

The "constraints" tag contains information about constraints on the column




## Available Attributes ##

^ nullable  | Is column nullable?  | 
^ primaryKey  | Is column a primary key?  | 
^ primaryKeyName  | Primary key name //Since 1.6//  |
^ unique  | Should a unique clause be applied  |
^ uniqueConstraintName  | Unique constraint name  | 
^ references  | Foreign key definition  | 
^ foreignKeyName  | Foreign key name  | 
^ deleteCascade  | Set delete cascade  | 
^ deferrable  | Are constraints deferrable  | 
^ initiallyDeferred  | Are constraints initially deferred  | 