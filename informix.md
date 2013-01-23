---
layout: default
title: Informix
---

# Informix #

With the the JDBC located in the same directory as liquibase: 

<code>

./liquibase 
  --classpath=./ifxjdbc.jar 
  --url="jdbc:informix-sqli://<SERVER IP>:<service>:informixserver=<INSTANCE>;
           database=<DBNAME>" generateChangeLog

</code>