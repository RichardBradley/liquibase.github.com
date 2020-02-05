---
layout: default
title: Docs | Changelog parameters 
---

# Change Log Parameters #

**Since Liquibase 1.7**

Liquibase allows dynamic substitution of parameters in a changelog.  The parameters to replace are described using the ${} syntax.

## Configuring parameter values ##

Parameter values are looked up in the following order:

  - Passed as a parameter to your Liquibase runner (see [Ant](ant/index.html), [command_line](command_line.html), etc. documentation for how to pass them)
  - As a JVM system property
  - In the parameters block (&lt;property&gt; Tag) of the [DatabaseChangeLog](/documentation/databasechangelog.html) file itself
  - As an environment variable

#### Examples ####

{% highlight xml %}
<createTable tableName="${table.name}">
     <column name="id" type="int"/>
     <column name="${column1.name}" type="varchar(${column1.length})"/>
     <column name="${column2.name}" type="int"/>
</createTable>
{% endhighlight %}

{% highlight xml %}
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd
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

{% endhighlight %}

### &lt;property&gt; ###

Defines a parameter for the changelog. Given a list of contexts and/or databases, the parameter will be only used in those contexts and/or databases.

#### Available Attributes ####

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>name</td><td>Name of the table's schema <b>required if <i>file</i> is not set</b>  </td></tr>
<tr><td>value</td><td>Name of the column's table <b>required if <i>file</i> is not set</b>  </td></tr>
<tr><td>file</td><td>Name of the file the properties shall be loaded from. It will create a property for all properties in the file. 
The content of the file has to follow the java properties file format</td></tr>
<tr><td>context</td><td>Contexts given as comma separated list.  </td></tr>
<tr><td>dbms</td><td>The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this 
  attribute. Valid database type names are listed on the <a href="../databases.html">supported databases page</a>. It is possible to list multiple databases separated by commas. 
  You can also specify that a changeset is <b>NOT</b> applicable to a particular database type by prefixing with <code>!</code>. The keywords <code>all</code> and <code>none</code> are 
  also available.</td></tr>
<tr><td>global</td><td>Defines whether the property is global or limited to a databaseChangeLog. Given as "true" or "false".  </td></tr>
</table>

Example:

{% highlight xml %}
    <property name="simpleproperty" value="somevalue"/>
    <property name="clob.type" value="clob" dbms="oracle,h2"/>
    <property name="clob.type" value="longtext" dbms="mysql"/>
    <property name="myproperty" value="yes" context="common,test"/>
    <property name="localproperty" value="foo" global="false"/>
{% endhighlight %}
