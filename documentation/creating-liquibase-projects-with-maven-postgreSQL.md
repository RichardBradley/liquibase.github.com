---
layout: default
title: Creating Liquibase Project with Maven and PostgreSQL
---

# Setting up a Liquibase project within Maven with PostgreSQL
The purpose of this document is to guide you through the process of creating a new Maven project with PostgreSQL on a Linux/Unix/Mac machine. In this tutorial, you will generate an example project and follow the instructions to apply and learn concepts associated with creating new Liquibase Projects within Maven.

## Prerequisites
•	[Install Liquibase with Maven on Linux/Unix/Mac](installation-linux-unix-mac-with-maven.html) if you have not done so already.

## Maven – Liquibase Project Tutorial
To create a Liquibase project within Maven while using PostgreSQL, begin with the following steps:
1.	Create a new project folder and name it MavenPostgreSQL.
2.	Right-click your MavenPostgreSQL folder then select **New>Text Document** to create an empty text file.
3.	Rename the text file to dbchangelog.xml.
**Note:** Changelog files contain a sequence of changesets, each of which make small changes to the structure of your database. Instead of creating an empty changelog file in step 2, you can also use an existing database to generate a changelog.

In this tutorial, you will manually add a single change. To add this change:
4.	Open the dbchangelog.xml file and update the changelog file with the following code snippet:

{% highlight sh %}

	<?xml version="1.0" encoding="UTF-8"?>
	<databaseChangeLog
	xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
	xmlns:pro="http://www.liquibase.org/xml/ns/pro"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
	http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">
	</databaseChangeLog>

{% endhighlight %}

5.	Right-click your MavenPostgreSQL folder then select **New>Text Document** to create a new text file.
6.	Rename the text file to liquibase.properties
7.	Edit the liquibase.properties file to add the following properties:

- changeLogFile: dbchangelog.xml
- url: jdbc:postgresql://localhost:5432/MYDATABASE
- username: postgres
- password: password

**Note:** If you already have a Liquibase Pro key and want to apply it to your project, add the following property to your liquibase.properties file.

`liquibaseProLicenseKey: <paste license key>`

8.	Add a changeset to the changelog.

**Note:** Change Sets are uniquely identified by “author” and ”id” attributes. Liquibase attempts to execute each changeset in a transaction that is committed at the end.

In the dbchangelog.xml file line 9 to 20 add a new “department” create table change set as follows:

{% highlight sh %}

<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  	xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
	xmlns:pro="http://www.liquibase.org/xml/ns/pro"
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
<column name="active" type="boolean"                     defaultValueBoolean="true"/>
        </createTable>
   </changeSet>
</databaseChangeLog>

{% endhighlight %}

**Note:** The above example for create table changeset is in XML format. If you use SQL, your statement should look like the following:

`CREATE TABLE "department"
(	"id" number(*,0),
	"name" VARCHAR2(50 BYTE),
	"active" NUMBER(1,0) DEFAULT 1
);`

9.	Right-click your MavenPostgreSQL folder, then select **New>Text Document** to create an empty text file.
10.	 Rename the text file to pom.xml.
11.	 Open the dbchangelog.xml file and update the changelog file with the following code snippet:

{% highlight sh %}

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.my-group.app</groupId>
  <artifactId>LiquiPostgrSQL-app</artifactId>
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

12.	Open the command prompt and navigate to the MavenPostgreSQL directory.  
13. Run the following command: `mvn liquibase:update`
14.	 From a database UI Tool, for example: “pgAdmin” check your database changes under “MYDATABASE”.
You should see a new “department” table added to the database.  For example:

Also, you should see two more tables:
1.	DATABASECHANGELOG tracking table – This table keeps a record of all the changesets that were deployed. The next time you deploy, the changesets in the changelog will be compared with the DATABASECHANGELOG tracking table, and only the new changesets not found in the DATABASECHANGELOG will be deployed.  You will notice that a new row was created in that table with the changeset information we have just deployed.
For this example:

2.	DATABASECHANGELOGLOCK – This table is used internally by Liquibase to manage access to the changelog table during deployment.
