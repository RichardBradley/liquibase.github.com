---
layout: default
title: JSON Format
---

# JSON Format

Liquibase supports JSON as a format for storing your changelog files.

## Requirements

To use JSON-based changelogs, you must include <a href="https://code.google.com/p/snakeyaml/">snakeyaml-1.12.jar</a> in your classpath.

## Limitations

None

## Example

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
