---
layout: default
title: Column
---

# Column tag #

The "column" tag is a tag that is re-used throughout the Liquibase XML when column definitions and column information is needed. As a result, not all the attributes of column make sense in each context it is used in.

## Available Attributes ##

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>Value to set the column to. The value will be surrounded by quote marks and nested quote marks will be escaped.</td>
    </tr>
    <tr>
      <td>valueNumeric</td>
      <td>Numeric value to set the column to. The value will not be escaped and will not be nested in quote marks.</td>
    </tr>
    <tr>
      <td>valueBoolean</td>
      <td>Boolean value to set the column to. The actual value string inserted will be dependent on the database implementation.</td>
    </tr>
    <tr>
      <td>valueDate</td>
      <td>Date and/or Time value to set the column to. The value is specified in one of the following forms: "YYYY-MM-DD", "hh:mm:ss" or "YYYY-MM-DDThh:mm:ss".</td>
    </tr>
    <tr>
      <td>valueComputed</td>
      <td>A value that is returned from a function or procedure call.</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>Default value for column.</td>
    </tr>
    <tr>
      <td>defaultValueNumeric</td>
      <td>Default numeric value for column</td>
    </tr>
    <tr>
      <td>defaultValueBoolean</td>
      <td>Default boolean value for column</td>
    </tr>
    <tr>
      <td>defaultValueDate</td>
      <td>Default date and/or time value for column.  The value is specified in one of the following forms: "YYYY-MM-DD", "hh:mm:ss" or "YYYY-MM-DDThh:mm:ss"</td>
    </tr>
    <tr>
      <td>defaultValueComputed</td>
      <td>A value that is returned from a function or procedure call.  This attribute will contain the function to call.</td>
    </tr>
    <tr>
      <td>autoIncrement</td>
      <td>Is column an auto-increment column.  Ignored on databases that do not support autoincrement/identity functionality.</td>
    </tr>
    <tr>
      <td>remarks</td>
      <td>Short description of the column (column comment)</td>
    </tr>
  </tbody>
</table>

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

Also, specifying a java.sql.Types.* type will be converted to the correct type as well. If needed, precision can be included. Here are some examples:
    * java.sql.Types.TIMESTAMP
    * java.sql.Types.VARCHAR(255)

## Available Sub-Tags ##

<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>constraints</td>
      <td>Constraint definitions</td>
    </tr>
  </tbody>
</table>

# Constraints tag #

The "constraints" tag contains information about constraints on the column.

## Available Attributes ##

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nullable</td>
      <td>Is column nullable?</td>
    </tr>
    <tr>
      <td>primaryKey</td>
      <td>Is column a primary key?</td>
    </tr>
    <tr>
      <td>primaryKeyName</td>
      <td>Primary key name <b>Since 1.6</b>  </td>
    </tr>
    <tr>
      <td>unique</td>
      <td>Should a unique clause be applied  </td>
    </tr>
    <tr>
      <td>uniqueConstraintName</td>
      <td>Unique constraint name</td>
    </tr>
    <tr>
      <td>references</td>
      <td>Foreign key definition</td>
    </tr>
    <tr>
      <td>foreignKeyName</td>
      <td>Foreign key name</td>
    </tr>
    <tr>
      <td>deleteCascade</td>
      <td>Set delete cascade</td>
    </tr>
    <tr>
      <td>deferrable</td>
      <td>Are constraints deferrable</td>
    </tr>
    <tr>
      <td>initiallyDeferred</td>
      <td>Are constraints initially deferred</td>
    </tr>
  </tbody>
</table>
