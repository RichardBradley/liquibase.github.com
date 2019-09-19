---
layout: default
title: MySQL
---

Running liquibase with the the JDBC driver located in the same directory as liquibase:

{% highlight sh %}
./liquibase
  --driver=com.mysql.jdbc.Driver 
  --classpath=./mysql-connector-java-5.1.21-bin.jar 
  --url="jdbc:mysql://<IP OR HOSTNAME>:<PORT>/<SCHEMA NAME>?autoReconnect=true&amp;useSSL=false" 
  --changeLogFile=db.changelog-1.0.xml 
  --username=<MYSQL USERNAME>
  --password=<MYSQL PASSWORD>
  generateChangeLog
{% endhighlight %}
