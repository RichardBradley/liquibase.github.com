---
layout: default
title: Create table
---

# Create Table #

<createTable tableName="person">
    <column name="id" type="int">
        <constraints primaryKey="true" nullable="false"/>
    </column>
    <column name="firstname" type="varchar(255)"/>
    <column name="lastname" type="varchar(255)"/>
    <column name="username" type="varchar(255)">
      <constraints unique="true" nullable="false"/>
    </column>
     <column name="testid" type="int" />
</createTable>

## Sample ##

<code xml>
<createTable tableName="person">
    <column name="id" type="int">
        <constraints primaryKey="true" nullable="false"/>
    </column>
    <column name="firstname" type="varchar(255)"/>
    <column name="lastname" type="varchar(255)"/>
    <column name="username" type="varchar(255)">
      <constraints unique="true" nullable="false"/>
    </column>
     <column name="testid" type="int" />
</createTable>
</code>


## Available Attributes ##

^ tableName  | Name of the table to create **[required]**  | 
^ schemaName  | Name of the table schema  | 
^ tablespace  | "Tablespace" (file group in SQL Server) to create the table in  | 
^ remarks  | Short description of the table (table comment)  | 


## Available Sub-Tags ##

^ column  | Column(s) to create in the table. The Column tag can contain constraint and foreign key information. See the [[column.html|column tag documentation]] for more information **[required]**  |




## Database Compatiblity ##

^ MySQL  | Does not support tablespaces.To specify storage engine use [[custom_sql.html]] tag|
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | Does not support tablespaces  | 
^ HSQL  | Does not support tablespaces  | 
^ H2  | Does not support tablespaces  | 
^ Caché  | Does not support tablespaces  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  |

Automatic Rollback Support: **YES**