---
layout: default
title: Sqlite
---

# SQLite #

SQLite is a single-file database which follows the zero-configuration approach.
It is furthermore easy to use and is thus perfect for your first experiments with liquibase.

There is a jdbc driver available here:
http://www.zentus.com/sqlitejdbc/

To use sqlite with liquibase you will need the following information:

**jars for the classpath:**
sqlitejdbc-v<version>.jar

**jdbc driver name:**
org.sqlite.JDBC

**jdbc url:**
jdbc:sqlite:<database-name>

There is no need to create a database before you can use sqlite, as I said: it follows the zero-configuration approach.

A run of liquibase with sqlite, having the sqlite.jar and the in the current directory (and the liquibase.jar at hand as well), could look like this:

<code>
java -jar liquibase.jar --classpath=sqlitejdbc-v<version>.jar --driver=org.sqlite.JDBC --url="jdbc:sqlite:exampledb.sqlite" --changeLogFile=db-changelog.xml migrate
</code>

Tip: There is an easy to use firefox extension which can be used to display and edit a sqlite database.
Find it over here:
https://addons.mozilla.org/de/firefox/addon/sqlite-manager/


Have fun :)