---
layout: default
title: Dbdoc
root: ..
---

# Database Documentation Generator #

Using change information stored in the change logs and an existing database, Liquibase can generate database change documentation.

## Running DBDoc ##

The dbDoc command support is currently available through the ["command line"](command_line.html) only.


## Example ##

``
liqubase.sh --driver=oracle.jdbc.OracleDriver \
        --url=jdbc:oracle:thin:@testdb:1521:test \
        --username=bob \
        --password=bob \
        --changeLogFile=path/to/changelog.xml
    dbDoc \
        /docs/dbdoc
``


## Sample Output ##

The documentation output is based on a "JavaDoc" style documentation. The report of changes from our sample changelog is available [here](http://www.liquibase.org/dbdoc/index.html).
