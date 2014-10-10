---
layout: default
title: Liquibase
---


<script>
  $(function() {
    $( "#changelog-tabs" ).tabs();
  });
</script>

<img src="custom_images/home_tagline.png" alt="Source Control For Your Database: Liquibase is an open source, database-independent library for tracking, managing and applying database changes">

<div>
<div class="span-8 append-1">

<h1>Works With You</h1>
<ul>
    <li>Supports code branching and merging</li>
    <li>Supports multiple developers</li>
    <li>Supports <a href="databases.html">multiple database types</a></li>
    <li>Supports <a href="documentation/xml_format.html">XML</a>, <a href="documentation/yaml_format.html">YAML</a>, <a href="documentation/json_format.html">JSON</a> and <a href="documentation/sql_format.html">SQL</a> formats</li>
    <li>Supports <a href="documentation/contexts.html">context-dependent logic</a></li>
    <li>Cluster-safe database upgrades</li>
    <li>Generate <a href="documentation/dbdoc.html">Database change documentation</a></li>
    <li>Generate Database "<a href="documentation/diff.html">diffs</a>"</li>
    <li><a href="documentation/running.html">Run through your</a> build process, embedded in your application or on demand</li>
    <li>Automatically <a href="documentation/sql_output.html">generate SQL scripts</a> for DBA code review</li>
    <li>Does not require a <a href="documentation/offline.html">live database connection</a></li>
</ul>

</div>

<div class="span-8 last">
<div class='highlight'>
<h2>Get Started</h2>
<ol>
<li><a href="download/index.html">Download Liquibase</a></li>
<li>Create new changelog file in <a href="documentation/xml_format.html">XML</a>, <a href="documentation/yaml_format.html">YAML</a>, <a href="documentation/json_format.html">JSON</a> or <a href="documentation/sql_format.html">SQL</a>format</li>
<li>Add <a href="documentation/changeset.html">changeset</a> to <a href="documentation/databasechangelog.html">changelog</a> file</li>
<li>Run <a href="documentation/command_line.html">liquibase update</a></li>
<li>Commit changelog file to source control</li>
<li>GOTO 3</li>
</ol>
<a href="quickstart.html">Quick Start Guide</a> | <a href="documentation/index.html">Full Documentation</a>
</div>
</div>

<div class="span-17 last">

<h1>Refactor Your Database</h1>
<ul>
    <li>Simple commands like <a href="documentation/changes/create_table.html">Create Table</a> and <a href="documentation/changes/drop_column.html">Drop Column</a></li>
    <li>Complex commands like <a href="documentation/changes/add_lookup_table.html">Add Lookup Table</a> and <a href="documentation/changes/merge_columns.html">Merge Columns</a></li>
    <li>Specify the <a href="documentation/changes/sql.html">exact SQL to run</a></li>
    <li>Plus the ability to <a href="documentation/rollback.html">Generate and manage rollback logic</a></li>
</ul>

<h1>Open and Extensible</h1>
<ul>
    <li>Open Source: Apache 2.0 License</li>
    <li><a href="http://liquibase.org/extensions">Extension support</a> allows you to extend and override virtually every part of Liquibase</li>
    <li><a href="javadoc/index.html">Java APIs</a> for executing and embedding</li>
</ul>

<div id='changelog-tabs'>
<ul>
    <li><a href="#tab-xml">XML Format</a></li>
    <li><a href="#tab-yaml">YAML Format</a></li>
    <li><a href="#tab-json">JSON Format</a></li>
    <li><a href="#tab-sql">SQL Format</a></li>
  </ul>
<div id='tab-xml'>
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.1.xsd
        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">

    <preConditions>
        <runningAs username="liquibase"/>
    </preConditions>

    <changeSet id="1" author="nvoxland">
        <createTable tableName="person">
            <column name="id" type="int" autoIncrement="true">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="firstname" type="varchar(50)"/>
            <column name="lastname" type="varchar(50)">
                <constraints nullable="false"/>
            </column>
            <column name="state" type="char(2)"/>
        </createTable>
    </changeSet>

    <changeSet id="2" author="nvoxland">
        <addColumn tableName="person">
            <column name="username" type="varchar(8)"/>
        </addColumn>
    </changeSet>
    <changeSet id="3" author="nvoxland">
        <addLookupTable
            existingTableName="person" existingColumnName="state"
            newTableName="state" newColumnName="id" newColumnDataType="char(2)"/>
    </changeSet>

</databaseChangeLog>

{% endhighlight %}
</div>
<div id='tab-yaml'>
{% highlight yaml %}
databaseChangeLog:
  - preConditions:
    - runningAs:
        username: liquibase

  - changeSet:
      id: 1
      author: nvoxland
      changes:
        - createTable:
            tableName: person
            columns:
              - column:
                  name: id
                  type: int
                  autoIncrement: true
                  constraints:
                    primaryKey: true
                    nullable: false
              - column:
                  name: firstname
                  type: varchar(50)
              - column:
                  name: lastname
                  type: varchar(50)
                  constraints:
                    nullable: false
              - column:
                  name: state
                  type: char(2)

  - changeSet:
      id: 2
      author: nvoxland
      changes:
        - addColumn:
            tableName: person
            columns:
              - column:
                  name: username
                  type: varchar(8)

  - changeSet:
      id: 3
      author: nvoxland
      changes:
        - addLookupTable:
            existingTableName: person
            existingColumnName:state
            newTableName: state
            newColumnName: id
            newColumnDataType: char(2)

{% endhighlight %}
</div>
<div id='tab-json'>
{% highlight json %}
{
    "databaseChangeLog": [
        {
            "preConditions": [
                {
                    "runningAs": {
                        "username": "liquibase"
                    }
                }
            ]
        },

        {
            "changeSet": {
                "id": "1",
                "author": "nvoxland",
                "changes": [
                    {
                        "createTable": {
                            "tableName": "person",
                            "columns": [
                                {
                                    "column": {
                                        "name": "id",
                                        "type": "int",
                                        "autoIncrement": true,
                                        "constraints": {
                                            "primaryKey": true,
                                            "nullable": false
                                        },
                                    }
                                },
                                {
                                    "column": {
                                        "name": "firstname",
                                        "type": "varchar(50)"
                                    }
                                },
                                {
                                    "column": {
                                        "name": "lastname",
                                        "type": "varchar(50)"
                                        "constraints": {
                                            "nullable": false
                                        },
                                    }
                                },
                                {
                                    "column": {
                                        "name": "state",
                                        "type": "char(2)"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },

        {
            "changeSet": {
                "id": "2",
                "author": "nvoxland",
                "changes": [
                    {
                        "addColumn": {
                            "tableName": "person",
                            "columns": [
                                {
                                    "column": {
                                        "name": "username",
                                        "type": "varchar(8)"
                                    }
                                }
                           ]
                        }
                    }
                ]
            }
        },

        {
            "changeSet": {
                "id": "3",
                "author": "nvoxland",
                "changes": [
                    {
                        "addLookupTable": {
                            "tableName": "person",
                            "existingTableName": "person",
                            "existingColumnName":"state",
                            "newTableName": "state",
                            "newColumnName": "id",
                            "newColumnDataType": "char(2)",
                        }
                    }
                ]
            }
        }
    ]
}

{% endhighlight %}
</div>
<div id='tab-sql'>
{% highlight sql %}
--liquibase formatted sql

--changeset nvoxland:1
create table person (
  id int not null primary key,
  firstname varchar(80),
  lastname varchar(80) not null,
  state varchar(2)
);

--changeset nvoxland:2
alter table person add column username varchar(8)

--changeset nvoxland:3
create table state AS SELECT DISTINCT state AS id FROM person WHERE state IS NOT NULL;
alter table state modify id char(2) NOT NULL;
alter table state add primary key(id);
alter table person add constraint fk_person_state foreign key (state) references state(id);

{% endhighlight %}
</div>
</div>


</div>
</div>
