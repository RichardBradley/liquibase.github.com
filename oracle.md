---
layout: default
title: Oracle
---

Running liquibase with the the JDBC driver located in the same directory as liquibase:

{% highlight sh %}
./liquibase
  --driver=oracle.jdbc.OracleDriver
  --classpath=./ojdbc14.jar
  --url="jdbc:oracle:thin:@<IP OR HOSTNAME>:<PORT>:<SERVICE NAME OR SID>""
  --changeLogFile=db.changelog-1.0.xml 
  --username=<USERNAME>
  --password=<PASSWORD>
  generateChangeLog
{% endhighlight %}
