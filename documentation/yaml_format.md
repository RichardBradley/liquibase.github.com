---
layout: default
title: YAML Format
---

# YAML Format

Liquibase supports [YAML](http://www.yaml.org) as a format for storing your changelog files.

## Requirements

To use YAML-based changelogs, you must include [snakeyaml-1.12.jar](https://bitbucket.org/asomov/snakeyaml/) in your classpath.

## Limitations

None

## Example

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
            existingColumnName: state
            newTableName: state
            newColumnName: id
            newColumnDataType: char(2)

{% endhighlight %}
