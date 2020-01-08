---
layout: default
title: Docs | Creating Liquibase Project with Maven and PostgreSQL 
---

# Setting up a Liquibase project with Maven and PostgreSQL

The purpose of this document is to guide you through the process of creating a new Maven project with 
PostgreSQL on a Linux/Unix/Mac machine. In this tutorial, you will generate an example project and follow 
the instructions to apply and learn concepts associated with creating new Liquibase Projects within Maven.

## Prerequisites
[Install Liquibase with Maven on Linux/Unix/Mac](installation-linux-unix-mac-with-maven.html) if you have not done so already.

## Maven – Liquibase Project Tutorial
To create a Liquibase project within Maven that uses a PostgreSQL database, begin with the following steps:
1. Create a new project folder and name it `MavenPostgreSQL`. 
2. Create a new plain-text file named `dbchangelog.xml` in the `MavenPostgeSQL` directory. This file will be your *changelog*, a file that will keep track of
  all the changes you make to your database structure. You can learn more about them on the [Database Change Log File](databasechangelog.html) page. 
  In this tutorial, you will manually add a single change. We will start with an empty changelog file.
3. Open the `dbchangelog.xml` file and update it with the following text. This is a basic empty changelog file. 

 {% highlight xml %}
 <?xml version="1.0" encoding="UTF-8"?>
 <databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                    xmlns:pro="http://www.liquibase.org/xml/ns/pro"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
 </databaseChangeLog>
 {% endhighlight %}

{:start="4"}
4. Create another plain text file in the same directory, named `liquibase.properties`
5. Edit the liquibase.properties file to add the following properties:
 {% highlight txt %}
 changeLogFile: dbchangelog.xml
 url: jdbc:postgresql://localhost:5432/MYDATABASE
 username: postgres
 password: password
 {% endhighlight %}
 **Note:** If you have a [Liquibase Pro]() key and want to apply it to your project, add the following property to your liquibase.properties file.
 `liquibaseProLicenseKey: <paste license key>`

{:start="6"}
6. Add a changeset to the changelog.
 In the dbchangelog.xml file line 9 to 20 add a new changeset. This changeset will have one change in it, to create a table named "department".

 {% highlight xml %}
 <?xml version="1.0" encoding="UTF-8"?>
 
 <databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                    xmlns:pro="http://www.liquibase.org/xml/ns/pro"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
 
     <changeSet id="1" author="bob">
         <createTable tableName="department">
             <column name="id" type="int">
                 <constraints primaryKey="true" nullable="false"/>
             </column>
             <column name="name" type="varchar(50)">
                 <constraints nullable="false"/>
             </column>
             <column name="active" type="boolean" defaultValueBoolean="true"/>
         </createTable>
    </changeSet>
 </databaseChangeLog>
 {% endhighlight %}

{:start="7"}
7. Now, we create the maven POM file for the project. Create a new plain-text file in the same directory named `pom.xml`.
8. Edit the `pom.xml` file and update it to have the following contents:

 {% highlight xml %}
 <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
   <modelVersion>4.0.0</modelVersion>
 
   <groupId>com.my-group.app</groupId>
   <artifactId>LiquiPostgreSQL-app</artifactId>
   <version>1.0-SNAPSHOT</version>
   <build>
       <pluginManagement>
           <plugins>
               <plugin>
                   <groupId>org.liquibase</groupId>
                   <artifactId>liquibase-maven-plugin</artifactId>
                   <version>3.8.0</version>
                   <configuration>
                       <propertyFile>liquibase.properties</propertyFile>
                   </configuration>
                   <dependencies>
                     <dependency>
                         <groupId>postgresql</groupId>
                         <artifactId>postgresql</artifactId>
                         <version>9.1-901-1.jdbc4</version>
                     </dependency>
                 </dependencies>
               </plugin>
           </plugins>
       </pluginManagement>
   </build>
 </project>
 {% endhighlight %}

{:start="9"}
9. Open the command prompt and navigate to the `MavenPostgreSQL` directory.  
10. Run the following command: `mvn liquibase:update`
11. From a database UI Tool, for example: "pgAdmin" check your database changes under "MYDATABASE".
 You should see a new "department" table added to the database. 
 
Also, you should see two more tables:

1. DATABASECHANGELOG - This table keeps a record of all the changesets that have been deployed. The next time you run the **update** command, the 
changesets in the changelog will be compared with the DATABASECHANGELOG tracking table, and only the new changesets not 
found in the DATABASECHANGELOG will be deployed.  You will notice that a new row was created in that table with the changeset 
information we have just deployed.
2. DATABASECHANGELOGLOCK - This table is used internally by Liquibase to manage access to the changelog table during deployment.
