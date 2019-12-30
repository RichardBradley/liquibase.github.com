---
layout: default
title: Apache derby | Liquibase Docs
subnav: subnav_tutorials.md
---

# Apache Derby #

Apache Derby can be downloaded here: [http://db.apache.org/derby/derby_downloads.html](http://db.apache.org/derby/derby_downloads.html)

To use Derby with liquibase you will need the following information:

**jars for the classpath:**
 * derby.jar
 * derbyclient.jar 

**jdbc driver name:**
 * org.apache.derby.jdbc.EmbeddedDriver

**jdbc url:**
 * jdbc:derby:DATABASENAME

Creating a database with Derby can be done with a tool called "ij" provided by Derby, as well as other ways.

{% highlight console %}
ij> CONNECT 'jdbc:derby:exampledb;create=true';
{% endhighlight %}


A run of liquibase with Derby, having both Derby jars and using the exampledb database folder in the current directory, could look like this:

{% highlight console %}
java -jar liquibase.jar 
  --classpath=derby.jar:derbyclient.jar 
  --driver=org.apache.derby.jdbc.EmbeddedDriver 
  --url="jdbc:derby:exampledb" 
  --changeLogFile=db-changelog.xml migrate
{% endhighlight %}

For further arguments you can pass to Derby, please have a look at Derby's documentation: [http://db.apache.org/derby/manuals/index.html](http://db.apache.org/derby/manuals/index.html)
