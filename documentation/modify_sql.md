---
layout: default
title: Modify SQL | Liquibase Docs
---

# Modifying Generated SQL #

Although Liquibase supports most standard SQL statements with its change tags, there are times when the generated SQL needs to be slightly different for your particular needs.  Examples include changing datatypes or adding additional vendor-specific clauses such as "ENGINE INNODB" to CREATE TABLE statements.  **Since 1.9**

## Sample ##

{% highlight xml %}
<changeSet id="1" author="nvoxland">
    <createTable tableName="person">
        <column name="id" type="bigint"/>
        <column name="firstname" type="varchar(255)"/>
        <column name="lastname" type="varchar(255)"/>
    </createTable>
    <modifySql>
         <replace replace="bigint" with="long"/>
    </modifySql>
    <modifySql dbms="mysql">
         <append value=" engine innodb"/>
    </modifySql>
</changeSet>
{% endhighlight %}

## Available Attributes ##

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>dbms</td><td>The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this 
  attribute. Valid database type names are listed on the <a href="../databases.html">supported databases page</a>. It is possible to list multiple databases separated by commas. 
  You can also specify that a changeset is <b>NOT</b> applicable to a particular database type by prefixing with <code>!</code>. The keywords <code>all</code> and <code>none</code> are 
  also available.</td></tr>
<tr><td>context</td><td>List of <a href="contexts.html">contexts</a> in which to run the sql modification.  If not specified, is applied in all contexts <b>Since 2.0</b>  </td></tr>
<tr><td>applyToRollback</td><td>Should the sql modification be applied to rollback statements? Default='false' <b>Since 2.0</b>  </td></tr>
</table>

## Available Sub-Tags ##

### prepend ###
Adds SQL to the beginning of the statement.

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>value</td><td>Text to add to beginning of statement  </td></tr>
</table>

### append ###
Adds SQL to the end of the statement.

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>value</td><td>Text to add to end of statement  </td></tr>
</table>

### replace ###
Replaces all instances of the text specified.

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>replace</td><td>Text to replace  </td></tr>
<tr><td>with</td><td>Text to replace with </td></tr>
</table>

### regExpReplace ###
Replaces all instances of the regular expression specified.

#### Available Attributes ####
<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr><td>replace</td><td>Regular expression specifying text to replace  </td></tr>
<tr><td>with</td><td>Text to replace with </td></tr>
</table>
