---
layout: default
title: Modify sql
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
<tr><td>dbms</td><td>List of [database types](../databases.html) to apply the modification(s) to. If not specified, modification is applied on all runs  </td></tr>
<tr><td>context</td><td>List of [contexts](contexts.html) in which to run the sql modification.  If not specified, is applied in all contexts **Since 2.0**  </td></tr>
<tr><td>applyToRollback| Should the sql modification be applied to rollback statements? Default='false' **Since 2.0**  </td></tr>
</table>

## Available Sub-Tags ##

### prepend ###
Adds SQL to the beginning of the statement.

#### Available Attributes ####
<table>
<tr><td>value</td><td>Text to add to beginning of statement  </td></tr>
</table>

### append ###
Adds SQL to the end of the statement.

#### Available Attributes ####
<table>
<tr><td>value</td><td>Text to add to end of statement  </td></tr>
</table>

### replace ###
Replaces all instances of the text specified.

#### Available Attributes ####
<table>
<tr><td>replace</td><td>Text to replace  </td></tr>
<tr><td>with</td><td>Text to replace with </td></tr>
</table>

### regExpReplace ###
Replaces all instances of the regular expression specified.

#### Available Attributes ####
<table>
<tr><td>replace</td><td>Regular expression specifying text to replace  </td></tr>
<tr><td>with</td><td>Text to replace with </td></tr>
</table>