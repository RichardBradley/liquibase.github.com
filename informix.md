---
layout: default
title: Informix
---

Running liquibase with the the JDBC driver located in the same directory as liquibase:

{% highlight sh %}
./liquibase
  --classpath=./ifxjdbc.jar 
  --url="jdbc:informix-sqli://<SERVER IP>:<service>:informixserver=<INSTANCE>;
           database=<DBNAME>" 
  generateChangeLog
{% endhighlight %}

