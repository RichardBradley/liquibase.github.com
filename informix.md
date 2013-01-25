---
layout: default
title: Informix
---

With the the JDBC located in the same directory as liquibase:

``
./liquibase
  --classpath=./ifxjdbc.jar 
  --url="jdbc:informix-sqli://<SERVER IP>:<service>:informixserver=<INSTANCE>;
           database=<DBNAME>" generateChangeLog
``