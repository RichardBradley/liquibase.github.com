---
layout: default
title: Changelog parameters
---

# Change Log Parameters #

//Since LiquiBase 1.7//

LiquiBase allows dynamic substitution of parameters in a changelog.  The parameters to replace are described using the ${} syntax.

## Configuring parameter values ##

Parameter values are looked up in the following order:
  - Passed as a parameter to your LiquiBase runner (see [Ant](Ant.html), [command_line](command_line.html), etc. documentation for how to pass them)
  - As a JVM system property
  - In the parameters block (<property> Tag) of the [DatabaseChangeLog](DatabaseChangeLog.html) file itself.

#### Examples ####

<code xml>
<createTable tableName="${table.name}">
     <column name="id" type="int"/>
     <column name="${column1.name}" type="varchar(${column1.length})"/>
     <column name="${column2.name}" type="int"/>
</createTable>
</code>

<code xml>
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd
        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">

    <property name="clob.type" value="clob" dbms="oracle"/>
    <property name="clob.type" value="longtext" dbms="mysql"/>

    <changeSet id="1" author="joe">
         <createTable tableName="${table.name}">
             <column name="id" type="int"/>
             <column name="${column1.name}" type="${clob.type}"/>
             <column name="${column2.name}" type="int"/>
         </createTable>
    </changeSet>
</databaseChangeLog>

</code>

### <property> ###

Defines a parameter for the changelog. Given a list of contexts and/or databases, the parameter will be only used in those contexts and/or databases.

#### Available Attributes ####

^ name  | Name of the table's schema **[required]**  |
^ value  | Name of the column's table **[required]**  |
^ context  | Contexts given as comma separated list.  |
^ dbms  | Database types given as comma separated list.  |

Example:

<code xml>
    <property name="simpleproperty" value="somevalue"/>
    <property name="clob.type" value="clob" dbms="oracle,h2"/>
    <property name="clob.type" value="longtext" dbms="mysql"/>
    <property name="myproperty" value="yes" context="common,test"/>
</code>