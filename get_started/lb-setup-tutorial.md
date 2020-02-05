---
layout: side-search
title: Docs | Setting up Liquibase Tutorial 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Setting up Liquibase Tutorial
Before attempting any of the step-by-step tutorials, please prepare your environment with the setup instructions.

## Step 1: Download and Extract Liquibase
- Download Liquibase. Visit the [download page](https://download.liquibase.org/) to get the latest binary.
- After downloading the *.zip or *.tar.gz, extract the contents into a folder. You may want to add this folder to your system PATH environment so that you can execute liquibase from any directory. For this tutorial, we will refer to that directory as LB_HOME, and when executing the liquibase shell script will use LB_HOME/liquibase or LB_HOME\liquibase.bat as the example command.

## Step 2: Install Java
1. Java is a required dependency. Install Java if it is not already installed.
    > **Note:** You can download and use either the Oracle JDK or <a href="https://jdk.java.net/12/">OpenJDK</a>. Be sure to configure your path
     and environment variable <a href="https://stackoverflow.com/questions/52511778/how-to-install-openjdk-11-on-windows">properly</a>.
2. Validate that you have a working java version. On the command line, execute 

{% highlight bash %}
java -version
{% endhighlight %}
    
Ensure that it runs successfully and displays your installed Java version.

## Step 3: Download the H2 JDBC Driver
1. The tutorials make use of an H2 database. You will need to download the H2 JDBC driver, which can be found <a href="http://www.h2database.com/html/cheatSheet.html">here</a>.
2. Copy the h2*.jar file into the `lib` subdirectory of the `LB_HOME` directory where you extracted the Liquibase archive.

## Step 4: Setup the liquibase.properties File
1. The tutorials use the CLI. While it is possible to pass all required parameters, such as the JDBC driver and database URL on the command line, it is much easier to 
   configure a liquibase.properties file.
2. Create a new directory for your first liquibase project, and change into that directory. For this example, we named the directory `my-first-lb-project`
3. Create a plain text file named `liquibase.properties` in the project directory you just created and add the following content to the file.

{% highlight text %}

driver: org.h2.Driver
classpath: ./h2-1.4.199.jar
url: jdbc:h2:file:./h2tutorial
username: admin
password: password
changeLogFile: myChangeLog.xml

{% endhighlight %}

>**Note:** Be sure to use the actual version of the h2*.jar file that you copied into the extracted LB_HOME/lib directory!

> **Note:** If you already have a Liquibase Pro key and want to apply it to
> your project, add the following property to your liquibase.properties
> file.

{% highlight text %}
liquibaseProLicenseKey: paste license key
{% endhighlight %}



Ensure that you can execute liquibase. At the command prompt, run one of the following commands, depending on your platform:

**Linux** 
{% highlight bash %}
~/my-first-lb-project$ LB_HOME/liquibase --help
{% endhighlight %}
    
**Windows** 
{% highlight text %}
C:\Users\Me\my-first-lb-project>LB_HOME\liquibase.bat --help
{% endhighlight %}

That is the completion of this Setup Tutorial. You should now see some help output, and you are ready to begin one of the two following tutorials.

## Tutorial: Getting Started with Liquibase Functions
This tutorial uses Liquibase Liquibase Functions (XML formatted changelogs). Instead of working with SQL, changes will be defined in XML. Liquibase will generate SQL based on the changeSet(s) defined and will deploy that to target databases. All migrations are tracked and ordered explicitly in the changeLog.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/quickstart_lb.md %}">Get Started Tutorial: Using Liquibase Functions ►</a></div></div>

## Tutorial: Getting Started Using SQL Scripts
This tutorial is ideal for those comfortable and familiar with SQL. The tutorial starts with a blank database and guides you through the process of using Liquibase to track, version, and deploy SQL scripts located in a specific folder.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/quickstart_sql.md %}">Get Started Tutorial: SQL Scripts ►</a></div></div>
