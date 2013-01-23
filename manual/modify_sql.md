---
layout: default
title: Modify sql
---

# Modifying Generated SQL #

Although LiquiBase supports most standard SQL statements with its change tags, there are times when the generated SQL needs to be slightly different for your particular needs.  Examples include changing datatypes or adding additional vendor-specific clauses such as "ENGINE INNODB" to CREATE TABLE statements.  //Since 1.9//

## Sample ##

<code xml>
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
</code>

## Available Attributes ##

^ dbms  | List of [[../databases|database types]] to apply the modification(s) to. If not specified, modification is applied on all runs  |
^ context  | List of [[contexts.html]] in which to run the sql modification.  If not specified, is applied in all contexts //Since 2.0//  |
^ applyToRollback| Should the sql modification be applied to rollback statements? Default='false' //Since 2.0//  |


## Available Sub-Tags ##

### prepend ###
Adds SQL to the beginning of the statement.

#### Available Attributes ####
^ value | Text to add to beginning of statement  |

### append ###
Adds SQL to the end of the statement.

#### Available Attributes ####
^ value | Text to add to end of statement  |

### replace ###
Replaces all instances of the text specified.

#### Available Attributes ####
^ replace | Text to replace  |
^ with | Text to replace with |

### regExpReplace ###
Replaces all instances of the regular expression specified.

#### Available Attributes ####
^ replace | Regular expression specifying text to replace  |
^ with | Text to replace with |
