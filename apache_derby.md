====== Apache Derby ======

Apache Derby's can be downloaded here: http://db.apache.org/derby/derby_downloads.html

To use derby with liquibase you will need the following information:

**jars for the classpath:**
derby.jar derbyclient.jar 

**jdbc driver name:**
org.apache.derby.jdbc.EmbeddedDriver

**jdbc url:**
jdbc:derby:[databasename]

Creating a database with derby, can be done with a tool called ij provided by derby.
(There are other ways as well though)

ij> CONNECT 'jdbc:derby:exampledb;create=true';

A run of liquibase with derby, having both derby jars and the an exampledb database folder in the current directory, could look like this:

<code>
java -jar liquibase.jar --classpath=derby.jar:derbyclient.jar --driver=org.apache.derby.jdbc.EmbeddedDriver --url="jdbc:derby:exampledb" --changeLogFile=db-changelog.xml migrate
</code>


For further arguments you can pass to derby, please have a look at derby's documentation: http://db.apache.org/derby/manuals/index.html