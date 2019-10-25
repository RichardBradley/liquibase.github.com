---
layout: default
title: Creating & Configuring liquibase.properties file
---
# Creating & Configuring your liquibase.properties File
For Liquibase to run effectively on your system, a convenience way is to create and configure the *liquibase.properties* file. This file allows you to specify your database connection information with parameters so Liquibase can access your database.  This option will save you the trouble of passing along command line arguments.

The *liquibase.properties* file should be placed in your project Liquibase directory.
> Note: The file can also be named something other than liquibase.properties and/or be in a completely different directory by using the --defaultsFile parameter during runtime.
To learn more please see [Liquibase Command Line ](https://www.liquibase.org/documentation/command_line.html).


## Parameters
The *liquibase.properties* file accepts the parameter types listed below.

| Parameter | Definition |
| --------- | ---------- |
| changeLogFile: | The path for your changelog file|
| driver | The driver class name for your source database|
| url | The source database for performing comparisons. Also known as your base. |
| username | The username for your source database.|
| password | The password for your source database.|
| referenceDriver | The driver class name for your target database. |
| referenceUrl | The database you want to use to compare to your source database. Also known as your target. |
| referenceUsername | The username for your target database. |
| referencePassword | The password for your target database. |
| liquibaseProLicenseKey | Your Liquibase Pro license key (If you have one). |
| classpath | The path for your database driver

Different commands require different parameter information to work. For more information on parameter requirements, search the Liquibase Command topics in the knowledge base.

## liquibase.properties File Example
changeLogFile: ../path/to/file/dbchangelog.xml <br/>
driver: oracle.jdbc.OracleDriver <br/>
url: jdbc:oracle:thin:@192.168.0.22:1521/orcl <br/>
username: PRO <br/>
password: password <br/>
referenceDriver: oracle.jdbc.OracleDriver <br/>
referenceUrl: jdbc:oracle:thin:@192.168.0.22:1521/orcl <br/>
referencePassword: password <br/>
liquibaseProLicenseKey: aeioufakekey32aeioufakekey785463214 <br/>
classpath: ../path/to/file/ojdbc6-11.2.0.3.0.jar

## How to Create & Configure Your *liquibase.properties* File
To create your *liquibase.properties file*:
1. Create a new folder for your project.
**Note:** It is best practice to create a new folder for each project, rather than place all your projects in the same directory.
2. Inside your new project directory, create a new text file.
3. Name the file liquibase.properties. If a .txt was added by default, remove it.

To configure your *Liquibase.properties* file:
1.	Locate the *liquibase.properties* file in your directory and open it.
2.	Enter the parameters required by the Liquibase Command(s) you want to run.
> **Note:** For information on parameter requirements, search the Liquibase Command topics in the knowledge base.
3.	Save your *liquibase.properties file.*
