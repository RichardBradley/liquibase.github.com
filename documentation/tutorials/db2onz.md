---
layout: default
title: Docs | Tutorials 
subnav: subnav_tutorials.md
---
# DB2 on z/OS Tutorial
<hr>

### Step 1: Download and Extract Liquibase
1. Download Liquibase. Visit the [download page](https://download.liquibase.org) to get the latest binary.
2. After downloading the *.zip or *.tar.gz, extract the contents into a folder. 
>**Note:** You may want to add this folder to your system PATH environment so that you can execute liquibase from any directory. 

For this tutorial, we will refer to that directory as `LB_HOME`, and when executing the liquibase shell script will use `LB_HOME/liquibase` or `LB_HOME\liquibase.bat` as the example command.

### Step 2: Install Java
1. Java is a required dependency. Install Java if it is not already installed.
>**Note:** You can download and use either the Oracle JDK or [OpenJDK](https://jdk.java.net/13/). Be sure to [configure](https://stackoverflow.com/questions/52511778/how-to-install-openjdk-11-on-windows) your PATH and environment variable properly.
2. Validate that you have a working Java version. On the command line, execute: `java -version`

Ensure that it runs successfully and displays your installed Java version.

### Step 3: Download the DB2JCC Driver and License File
The license JAR file is required when connecting to a mainframe DB2 database, which is not a free JAR file. You must purchase the DB2 Connect product. The license file is contained within the activation package for it.More information regarding the license file can be found [here](https://www.ibm.com/support/pages/location-db2jcclicensecisuzjar-file).
1. Download the DB2JCC driver, which can be found [here](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads).
2. Copy the `db2jcc.jar` and `db2jcc_license_cisuz.jar` files into the `lib` subdirectory of the `LB_HOME` directory where you extracted the Liquibase archive.

### Step 4: Setup the liquibase.properties File
While it is possible to pass all required parameters, such as the JDBC driver and database URL on the command line, it is much easier to configure a liquibase.properties file.

>**Pro Tip:**  Create multiple liquibase.properties files for your DEV, QA, and PROD environments.  You can pass the specific properties file as a liquibase command line argument.

1. Create a new directory for your first liquibase project, and change into that directory. For this example, we named the directory db2_zos

2. Create a plain text file named liquibase.properties in the project directory you just created and add the following content to the file.

{% highlight text %}

driver: com.ibm.db2.jcc.DB2Driver
classpath: <c:/full/path/to/LB_HOME>/lib/db2jcc.jar;><c:/full/path/to/LB_HOME>/lib/db2jcc_license_cisuz.jar>
url: jdbc:db2://<HOST_IP_ADDRESS>:<PORT>/<DBNAME>:retrieveMessagesFromServerOnGetMessage=true;emulateParameterMetaDataForZCalls=1;
username: <DBUSER>
password: <DBUSER_PASSWORD>
changeLogFile: db2zosChangeLog.xml

{% endhighlight %}

>**Note:** Be sure to replace the <values> with the actual values for your system.

Ensure that you can execute liquibase. At the command prompt, run one of the following commands, depending on your platform:

**<u>Linux</u>**

`<LB_HOME>/liquibase --help`

**<u>Windows</u>**

`<LB_HOME>\liquibase.bat --help`

You should now see some help output, and you are ready to begin using Liquibase.  That is the completion of this Setup Tutorial.   You are now ready to continue with deployment.

<div align="center"><img src="\images\documentation\Tutorials\DB2onZSetupImg.png" width="700px" alt="Image of the Command prompts help output" /></div>
<br>
<hr>

## **Next Up:** 
<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="\documentation\workflows\db2onzdeploy-sql.html">Deploy Changes to DB2 z/OS ►</a></div></div>