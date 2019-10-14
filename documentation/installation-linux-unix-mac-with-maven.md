---
layout: default
title: Installing Liquibase with Maven on Linux/Unix/Mac
---

# Installing Liquibase with Maven on Linux/Unix/Mac

To download Maven, navigate to [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi) and click on the **For Linux/Unix/Mac** Binary tar.gz download file to install the latest version of Apache Maven.

## Installing
Once you have downloaded the tar.gz file, extract it to a new local directory on your computer (**Example:** `/usr/apps/apache-maven-3.6.2`), then add the maven-3.6.2/bin directory to your PATH.
To add the directory to your PATH:
1.	Open the Terminal or Linux Command Line.
2.	Run the following command: `export PATH=$PATH:/usr/apps/apache-maven-3.6.2/bin`

**Note:** This command will not permanently update your PATH for the remainder of the session. To permanently update your PATH, run: `source ~/.profile  or source ~/.bashrc`

## Verifying
Verification is an essential aspect of the Maven installation process, and there are three things you need to check:
1.	The maven-3.6.2/bin folder was correctly added to your PATH.
2.	Java is installed on your system.
3.	You can run the Liquibase help command in Maven.

### Verification #1: Check your Path
To verify that you have correctly added the maven-3.6.2/bin folder to your PATHs, type `env` in your Terminal or Linux command to display all your available PATHs.

### Verification #2: Check for Java Installation
For Maven to run correctly, Java must be installed on your Linux/Unix/Mac machine. To verify that Java is installed on your computer:
1.	Open your Terminal or Linux Command.
2.	In the Command Prompt window, type: `java -version`
If you see the error: `-bash: java: command not found`, then you need to either install Java, or you need to add the location of the Java to your PATH environment as a variable.
To install Java on your computer:
1.	Navigate to [https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and install the Java JDK.
2.	Add the location of the Java file to your PATH environment as a variable.

### Verification #3: Run the Liquibase Help Command in Maven
Another way to verify that you installed Liquibase correctly on your computer is to run the Liquibase Help Command. To run the command:
1. Open your Terminal or Linux Command.
2. In the Command Prompt window, type: `mvn –help`

Learn how to [Create a Liquibase Project with Maven and postgreSQL](creating-liquibase-projects-with-maven-postgreSQL.html)
