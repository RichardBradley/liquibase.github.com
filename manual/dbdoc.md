---
layout: default
title: Dbdoc
---

# Database Documentation Generator #

Using change information stored in the change logs and an existing database, LiquiBase can generate database change documentation.

## Running DBDoc ##

The dbDoc command support is currently available through the [[command_line.html]] only.


## Example ##

<code>
liqubase.sh --driver=oracle.jdbc.OracleDriver \
        --url=jdbc:oracle:thin:@testdb:1521:test \
        --username=bob \
        --password=bob \
        --changeLogFile=path/to/changelog.xml
    dbDoc \
        /docs/dbdoc
</code>


## Sample Output ##

The documentation output is based on a "JavaDoc" style documentation. The report of changes from our sample changelog is available [[http://www.liquibase.org/dbdoc/index.html|here]].
