---
layout: default
title: MariaDB
---

Running liquibase with the the JDBC driver located in the same directory as liquibase:

{% highlight sh %}
./liquibase
  --driver=org.mariadb.jdbc.Driver
  --classpath=./mariadb-java-client-1.4.6.jar
  --url="jdbc:mariadb://<IP OR HOSTNAME>:<PORT>/<SCHEMA NAME>" 
  --changeLogFile=db.changelog-1.0.xml 
  --username=<MARIADB USERNAME>
  --password=<MARIADB PASSWORD>
  generateChangeLog
{% endhighlight %}
