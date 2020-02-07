---
layout: default
title: Docs | Column tag 
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
      <td>name</td>
      <td>Name of the column</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Column data type</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Value to set the column to. The value will be surrounded by quote marks and nested quote marks will be escaped. Please note that setting the "value" attribute will set all rows existing to the specified value without modifying the column default. Setting the "defaultValue" attribute will specify a default value for the column.</td>
    </tr>
    <tr>
      <td>computed</td>
      <td>Used if the value in "name" isn't actually a column name but actually a function. <i>Since 3.3.0</i></td>
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
      <td>A value that is returned from a function or procedure call. This attribute will contain the function to call.</td>
    </tr>
    <tr>
      <td>valueBlobFile</td>
      <td>Path to a file, whose contents will be written as a BLOB (i.e. chunk of binary data). Must be either absolute or relative to the Change Log file location (absolute paths are, e.g.: <tt>/usr/local/somefile.dat</tt> on Unix or <tt>c:\Directory\somefile.dat</tt> on Windows. Please refer to <a href="http://docs.oracle.com/javase/7/docs/api/java/io/File.html">java.io.File javadoc</a> for the details of what to consider relative/absolute path).</td>
    </tr>
    <tr>
      <td>valueClobFile</td>
      <td>Path to a file, whose contents will be written as a CLOB (i.e. chunk of character data). Must be either absolute or relative to the Change Log file location (absolute paths are, e.g.: <tt>/usr/local/somefile.dat</tt> on Unix or <tt>c:\Directory\somefile.dat</tt> on Windows. Please refer to <a href="http://docs.oracle.com/javase/7/docs/api/java/io/File.html">java.io.File javadoc</a> for the details of what to consider relative/absolute path).</td>
    </tr>
    <tr>
      <td>encoding</td>
      <td>Name of the encoding (as specified <a href="http://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html">in java.nio.Charset javadoc</a>, e.g. <tt>"UTF-8"</tt>) of the CLOB file (specified in <tt>valueClobFile</tt>) contents.<br><br><b>Note:</b> used only when <tt>valueClobFile</tt> attribute is specified, ignored otherwise.</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>Default value for column.
      <div class='note'><b>Note:</b> If not set the first <code>defaultValueXXX</code> defined is used in the order they
             appear.</div></td>
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
      <td>startWith</td>
      <td>The value auto-increment start.  Ignored on databases that do not support autoincrement/identity functionality.</td>
    </tr>
    <tr>
      <td>incrementBy</td>
      <td>The value of each step by auto-increment.  Ignored on databases that do not support autoincrement/identity functionality.</td>
    </tr>    
    <tr>
      <td>remarks</td>
      <td>Short description of the column (column comment)</td>
    </tr>
    <tr>
      <td>beforeColumn</td>
      <td>If used in an 'addColumn' command, this attribute allows you to control where in the table column order the new column goes. Only one of beforeColumn, afterColumn or position are allowed. <i>Since 3.1</i></td>
    </tr>
    <tr>
      <td>afterColumn</td>
      <td>If used in an 'addColumn' command, this attribute allows you to control where in the table column order the new column goes. Only one of beforeColumn, afterColumn or position are allowed. <i>Since 3.1</i></td>
    </tr>
    <tr>
      <td>position</td>
      <td>If used in an 'addColumn' command, this attribute allows you to control where in the table column order the new column goes. Only one of beforeColumn, afterColumn or position are allowed. Expects a one based index <i>Since 3.1</i></td>
    </tr>
    <tr>
      <td>descending</td>
      <td>If used in a 'createIndex' command, this boolean attribute allows you to specify that a column should be used in descending order in the index. Defaults to <code>false</code> (i.e. ascending order) <i>Since 3.4</i></td>
    </tr>

  </tbody>
</table>

To help make scripts database-independent, the following "generic" data types will be converted to the correct database implementation:

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
      <td>notNullConstraintName</td>
      <td>The not null constraint name</td>
    </tr>
    <tr>
      <td>primaryKey</td>
      <td>Is column a primary key?</td>
    </tr>
    <tr>
      <td>primaryKeyName</td>
      <td>Primary key name <b>Since 1.6</b></td>
    </tr>
    <tr>
      <td>primaryKeyTablespace</td>
      <td>The tablespace to use for the defined primary key</td>
    </tr>
    <tr>
      <td>unique</td>
      <td>Should a unique clause be applied?</td>
    </tr>
    <tr>
      <td>uniqueConstraintName</td>
      <td>The unique constraint name</td>
    </tr>
    <tr>
      <td>references</td>
      <td>Foreign key definition</td>
    </tr>
    <tr>
      <td>referencedTableCatalogName</td>
      <td>Name of the catalog</td>
    </tr>
    <tr>
      <td>referencedTableSchemaName</td>
      <td>Name of the schema</td>
    </tr>
    <tr>
      <td>referencedTableName</td>
      <td>Name of the table</td>
    </tr>
    <tr>
      <td>referencedColumnNames</td>
      <td>Name of the column</td>
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
      <td>Are constraints deferrable?</td>
    </tr>
    <tr>
      <td>initiallyDeferred</td>
      <td>Are constraints initially deferred?</td>
    </tr>
    <tr>
      <td>validateNullable</td>
      <td>Should validate the defined not null constraint?</td>
    </tr>
    <tr>
      <td>validateUnique</td>
      <td>Should validate the defined unique constraint?</td>
    </tr>
    <tr>
      <td>validatePrimaryKey</td>
      <td>Should validate the defined primary key constraint?</td>
    </tr>
    <tr>
      <td>validateForeignKey</td>
      <td>Should validate the defined foreign key constraint?</td>
    </tr>
    <tr>
      <td>checkConstraint</td>
      <td>Should validate the defined check constraint?</td>
    </tr>
  </tbody>
</table>
