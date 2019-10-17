---
layout: default
title: Using Liquibase with Spring Boot and Maven
---

# Using Liquibase with Spring Boot and Maven Tutorial #

When developing a software, it is very common to create a database schema during production.  Liquibase is a great migration tool that helps creating the database schema, then can run deployment and some testing to the database to ensure that the changes will work in production. 
The purpose of this tutorial is to demonstrate using Liquibase migration tool for a Java Spring Boot application with Maven.

## Spring ##
Liquibase can be run in a <a href="https://spring.io/projects/spring-boot" target="_blank">Spring</a> environment by declaring a liquibase.spring.SpringLiquibase bean.

### Example ###

{% highlight xml %}
<bean id="liquibase" class="liquibase.integration.spring.SpringLiquibase">
      <property name="dataSource" ref="myDataSource" />
      <property name="changeLog" value="classpath:db-changelog.xml" />

      <!--
      contexts specifies the runtime contexts to use.
      -->
      <property name="contexts" value="test, production" />
 </bean>
{% endhighlight %}

## Overview ##

### What is Liquibase? ###
<a href="https://www.liquibase.org/" target="_blank">Liquibase</a> provides a great starting point for teams addressing the challenges that come with managing database schema changes.

It has the ability to manage revisions of your database schema scripts. It works across various types of databases, and supports various file formats for defining the DB structure. Liquibase has the ability to roll changes back and forward from a specific point - saving you from the need to know what was the last change/script you ran on a specific DB instance.

### What is Spring Boot? ###
<a href="https://www.tutorialspoint.com/spring_boot/spring_boot_introduction.htm" target="_blank">Spring Boot</a> is an open source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production-ready Spring applications.

### What is Maven? ###
<a href="https://maven.apache.org/" target="_blank">Apache Maven</a> is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.

## Prerequisites ##
* <a href="https://download.liquibase.org/" target="_blank">Install the latest version of Liquibase</a> (These instructions include how to install Java.)
* <a href="https://maven.apache.org/install.html" target="_blank">Download and install Maven.</a>


## Tutorial

* Create a new project folder and name it **LiquibaseProj**.
* In your LiquibaseProj folder, create a plain text document named **dbchangelog.xml**.<br/>
Changelog files contain a sequence of changesets, each of which make small changes to the structure of your database. Instead of creating an empty changelog file in step 2, you can also use an existing database to generate a changelog. In this tutorial, you will manually add a single change. To add this change:
* Open the dbchangelog.xml file and update the changelog file with the following code snippet:


{% highlight sh %}
  <?xml version="1.0" encoding="UTF-8"?>
	<databaseChangeLog
	  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
	  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
	  http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
	</databaseChangeLog>
{% endhighlight %}


* In your LiquibaseProj folder create a plain text document named **liquibase.properties**.
* Edit the liquibase.properties file to add the following properties:
{% highlight sh %}

    changeLogFile: dbchangelog.xml
    url: jdbc:h2:mem:my_db;MODE=Mysql;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE;DATABASE_TO_UPPER=false;INIT=CREATE SCHEMA IF NOT EXISTS my_db\\;SET SCHEMA my_db

{% endhighlight %}

The changeLogFile propertiy will point to the changelog we have created.  Since the changelog is in the home directory, there is no need to specify a path to it.  If the changelog is located somewhere else, then a relative path should be added.  
Windows example: changeLogFile: ..\\<path to changelog>\\changelogs\\dbchangelog.xml , Linux example: ../<path to changelog>/changelogs/dbchangelog.xml
The url propery is your Databse url.  In this example we are using an In-Memory h2 Database.
If there is a user and password associated with the database, then the username and password properties should be added to the properties file as well.

> Note: If you already have a Liquibase Pro key and want to apply it to
> your project, add the following property to your liquibase.properties
> file. 	 
liquibaseProLicenseKey: `<paste license key>`

*	Adding a changeset to the changelog – Change Sets are uniquely identified by “author” and ”id” attributes. Liquibase attempts to execute each changeset in a transaction that is committed at the end.
In the dbchangelog.xml file line 9 to 20 add a new “department” create table change set as follows:
{% highlight sh %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

    <changeSet id="1" author="bob">
        <createTable tableName="department">
            <column name="id" type="int">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="name" type="varchar(50)">
                <constraints nullable="false"/>
            </column>
		<column name="active" type="boolean"                     
			defaultValueBoolean="true"/>
        </createTable>
   </changeSet>
</databaseChangeLog>
{% endhighlight %}

> Note: This create table change set is XML format.  When the Liquibase update command is run, the changeset will be used to general SQL 
> that is specific to the database platform. In this example, we are using an h2 in-memory database just for an example, and the SQL   
> generated would look like this:

{% highlight sh %}
CREATE TABLE "department"
(	"id" number(*,0),
	"name" VARCHAR2(50 BYTE),
	"active" NUMBER(1,0) DEFAULT 1
);
{% endhighlight %}


* In your LiquibaseProj folder create a plain text document named **pom.xml**.
* Open the pom.xml file and update it with the following code snippet:
{% highlight sh %}
<?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
      <modelVersion>4.0.0</modelVersion>
      <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.9.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
      </parent>
      <groupId>com.liquibase-support.app</groupId>
      <artifactId>Liquibase-app-1</artifactId>
      <version>0.0.1-SNAPSHOT</version>
      <name>Liquibase-app</name>
      <description>Demo project for Spring Boot</description>
      <properties>
        <java.version>8</java.version>
        <liquibase.propertyFile>${project.basedir}/liquibase.properties</liquibase.propertyFile>
      </properties>
      <dependencies>
        <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-test</artifactId>
          <scope>test</scope>
        </dependency>
      </dependencies>
      <build>
        <pluginManagement>
          <plugins>
            <plugin>
              <groupId>org.liquibase</groupId>
              <artifactId>liquibase-maven-plugin</artifactId>
              <version>3.8.0</version>
              <configuration>
                <propertyFile>${liquibase.propertyFile}</propertyFile>
              </configuration>
              <dependencies>
                 <dependency>
                  <groupId>com.h2database</groupId>
                  <artifactId>h2</artifactId>
                  <version>1.4.200</version>
                </dependency>
                <dependency>
                  <groupId>org.hibernate</groupId>
                   <artifactId>hibernate-core</artifactId>
                   <version>5.4.6.Final</version>
                </dependency>
                <dependency>
                  <groupId>javax.xml.bind</groupId>
                  <artifactId>jaxb-api</artifactId>
                  <version>2.4.0-b180830.0359</version>
                </dependency>
              </dependencies>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
          </plugins>
        </pluginManagement>
      </build>
    </project>
{% endhighlight %}


* Download and unzip the <a href="assets/liquibaseSpringBootExample/src.zip" download>src.zip</a> to your LiquibaseProj directory.
* In the src diretory you will notice the path to your application code: src/main/java/com/application.java and the path to some junit tests: src/test/java/com/applicationTests.java.

* The Spring Boot Maven plugin had many great features.
1. It collects all the jar files in the classpath and builds a single "uber-jar".  This makes it more convenient to execute your service.
2. It searches for the "public static void main()" method to flag as a runnable class.

* Open the command prompt or Bash. Navigate to the LiquibaseProj directory.  
  Run the following command:
  ### mvn package
  This command will compile and test your Spring Boot Application code.
  ### mvn liquibase:update

*	 In the console output you should notice the following SQL executions:
For example: 
CREATE TABLE department (id INT NOT NULL, name VARCHAR(50) NOT NULL, active BOOLEAN DEFAULT TRUE, CONSTRAINT PK_DEPARTMENT PRIMARY KEY (id))
Table department created.

Also, you should see two more tables updated:
*	**DATABASECHANGELOG** tracking table – This table keeps a record of all the changesets that were deployed.  This way, next time when you deploy again, the changesets in the changelog will be compared with the DATABASECHANGELOG tracking table and only the new changesets that were not found in the DATABASECHANGELOG will be deployed.  You will notice that a new row was created in that table with the changeset information we have just deployed.
For this example:

|ID|AUTHOR |FILENAME       |DATEEXECUTED|ORDEREXECUTED|EXECTYPE|MDSUM|...|
|--|--|--|--|--|--|--|--|
|1  |bob   |dbchangelog.xml|`date&time`|1|EXECUTED|`checksumvalue`|...|

*	**DATABASECHANGELOGLOCK** – This table is used internally by Liquibase to manage access to the changelog table during deployment.

## Conclusion ##
Congratulations! You are now able to use Liquibase to manage your database alongside with your Java Spring Boot application with Maven.
Click here <a href="https://www.liquibase.org/documentation/maven/index.html" target="_blank">Maven Liquibase Plugin</a> to learn more about the Maven Liquibase Plugin and it's usage.
