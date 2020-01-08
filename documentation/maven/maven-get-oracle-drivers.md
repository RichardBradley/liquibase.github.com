---
layout: default
title: Docs | Maven Get Oracle Drivers 
subnav: subnav_maven.md
---

# How to Get Oracle Drivers using Maven
Liquibase and Maven require the use of drivers to read your database. This topic walks you through the process of getting Oracle drivers while using Maven.

## Step 1: Add a Dependency
Add a dependency to the `<dependencies>` section of the Maven `pom.xml`, in your Maven project directory as follows:

{% highlight xml %}
      <!-- https://mvnrepository.com/artifact/com.oracle.jdbc/ojdbc6 -->
      <dependency>
           <groupId>com.oracle.jdbc</groupId>
           <artifactId>ojdbc8</artifactId>
           <version>19.3.0.0</version>
      </dependency>

{% endhighlight %}
<br>

## Step 2: Login to Oracle
Navigate to [https://www.oracle.com/webapps/maven/register/license.html](https://www.oracle.com/webapps/maven/register/license.html) and log in. If you do not have an account, please create one at this time.

## Step 3: Include the Repository
Update the `settings.xml` file located in your Maven project directory to include the [maven.oracle.com](https://www.oracle.com/webfolder/application/maven/index.html) repository:

{% highlight xml %}
<repository>
    <id>maven.oracle.com</id>
    <name>oracle-maven-repo</name>
    <url>https://maven.oracle.com</url>
    <layout>default</layout>
    <releases>
        <enabled>true</enabled>
        <updatePolicy>always</updatePolicy>
    </releases>
</repository>
{% endhighlight %}
<br>

## Step 4: Include the Plugin
Update your `settings.xml` file located in your Maven project directory to include the [maven.oracle.com](https://www.oracle.com/webfolder/application/maven/index.html) pluginRepository.

{% highlight xml %}
<pluginRepository>
    <id>maven.oracle.com</id>
    <url>https://maven.oracle.com</url>
</pluginRepository>
{% endhighlight %}
<br>

## Step 5: Include the Server
Update your `settings.xml` file in your Maven project directory to include the server for [maven.oracle.com](https://www.oracle.com/webfolder/application/maven/index.html).

{% highlight xml %}
<server>
    <id>maven.oracle.com </id>
    <username>YOUR ORACLE USERNAME</username>
    <password>YOUR ORACLE PASSWORD</password>
    <configuration>
        <basicAuthScope>
            <host>ANY </host>
            <port>ANY </port>
            <realm>OAM 11g </realm>
        </basicAuthScope>
        <httpConfiguration>
            <all>
                <params>
                    <property>
                        <name>http.protocol.allow-circular-redirects </name>
                        <value>%b,true </value>
                    </property>
                </params>
            </all>
        </httpConfiguration>
    </configuration>
</server>
{% endhighlight %}
<br>

## Step 6: Create a settings-security.xml File
Create a `settings-security.xml` file in your .m2 directory with your Oracle password in an encrypted format. 
> **Example:** {USER_HOME}/.m2/ directory.

1. Encrypt your master password: `mvn -encrypt-master-password <your_password>`
2. Copy the encrypted password from the console.
3. Paste the encrypted password into the `settings-security.xml` file located in your .m2 folder:

{% highlight xml %}
<settingsSecurity> 
     <master>{YOUR ENCRYPTED MASTER PASSWORD}</master> 
</settingsSecurity> 
{% endhighlight %}
<br>

## Step 7: Configure Maven
Configure Maven with an HTTP Wagon compatible with [maven.oracle.com](https://www.oracle.com/webfolder/application/maven/index.html).

- Download the HTTP Wagon jar from [Maven Central](http://central.maven.org/maven2/org/apache/maven/wagon/wagon-http/2.8/wagon-http-2.8-shaded.jar). 
- Copy the wagon-http jar into: `MAVEN_HOME/lib/ext/`

To verify the configuration is correct, run `mvn compile`. If there are no errors stating that artifact com.oracle.jdbc cannot be 
found in [repo.maven.apache.org](http://repo.maven.apache.org/), then everything is configured correctly. If you are getting this error, make sure you have not omitted a step in these instructions.
