---
layout: default
title: SQL Server
---

Running liquibase with the the JDBC driver located in the same directory as liquibase:

{% highlight sh %}
./liquibase
  --driver=com.microsoft.sqlserver.jdbc.SQLServerDriver 
  --classpath=./sqljdbc4.jar
  --url="jdbc:sqlserver://<IP OR HOSTNAME>:<PORT>;databaseName=<DATABASE>;integratedSecurity=false;" 
  --changeLogFile=db.changelog-1.0.xml 
  --username=<USERNAME>
  --password=<PASSWORD>
  generateChangeLog
{% endhighlight %}
