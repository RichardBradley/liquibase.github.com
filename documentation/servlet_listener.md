---
layout: default
title: Servlet listener
---

# Servlet Listener #

Liquibase can be run via a servlet listener. This allows you to have your database be updated automatically whenever the site is deployed. Since Liquibase uses distributed locking, this method will work just fine even if you have a cluster of application servers.

To configure the servlet listener, simply add liquibase.jar to your WEB-INF/lib directory and the following to your web.xml file:

{% highlight xml %}
<context-param>
    <param-name>liquibase.changelog</param-name>
    <param-value>com/example/db.changelog.xml</param-value>
</context-param>

<context-param>
    <param-name>liquibase.datasource</param-name>
    <param-value>java:comp/env/jdbc/default</param-value>
</context-param>

<context-param>
    <param-name>liquibase.host.includes</param-name>
    <param-value>production1.example.com, production2.example.com</param-value>
</context-param>

<context-param>
    <param-name>liquibase.onerror.fail</param-name>
    <param-value>true</param-value>
</context-param>

<context-param>
    <param-name>liquibase.contexts</param-name>
    <param-value>production</param-value>
</context-param>

<listener>
    <listener-class>liquibase.integration.servlet.LiquibaseServletListener</listener-class>
</listener>
{% endhighlight %}


**If using Liquibase 1.9.x**

{% highlight xml %}
<context-param>
    <param-name>LIQUIBASE_CHANGELOG</param-name>
    <param-value>com/example/db.changelog.xml</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_DATA_SOURCE</param-name>
    <param-value>java:comp/env/jdbc/default</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_HOST_EXCLUDES</param-name>
    <param-value>production1.example.com, production2.example.com</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_FAIL_ON_ERROR</param-name>
    <param-value>true</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_CONTEXTS</param-name>
    <param-value>production</param-value>
</context-param>

<listener>
    <listener-class>liquibase.servlet.LiquibaseServletListener</listener-class>
</listener>
{% endhighlight %}


## Available context-parameters: ##

<table>
<tr><td>Parameter</td><td>1.9 version</td><td>Description</td></tr>
<tr><td>liquibase.changelog</td><td>LIQUIBASE_CHANGELOG</td><td>Specifies the changelog file to run <b>required</b></td></tr>
<tr><td>liquibase.datasource</td><td>LIQUIBASE_DATA_SOURCE</td><td>JNDI datasource to use for running Liquibase. Note that the LIQUIBASE_DATA_SOURCE can be different than the data source the rest of your web app uses if that data source does not have sufficient privileges to create/alter tables etc. <b>required</b></td></tr>
<tr><td>liquibase.host.excludes</td><td>LIQUIBASE_HOST_EXCLUDES</td><td>Specify host names on which you do NO want Liquibase to run. Specifying this parameter allows you to deploy the same WAR/EAR to multiple machines in different environments and not have Liquibase run on all of them.</td></tr>
<tr><td>liquibase.host.includes</td><td>LIQUIBASE_HOST_INCLUDES</td><td>Specify the ONLY host names on which want Liquibase to run. Specifying this parameter allows you to deploy the same WAR/EAR to multiple machines in different environments and not have Liquibase run on all of them.</td></tr>
<tr><td>liquibase.onerror.fail</td><td>LIQUIBASE_FAIL_ON_ERROR</td><td>Specify if an exception is thrown by Liquibase if an error occurs. Setting the value to "true" (default) will cause the exception to be thrown and keep the site from initializing properly. Setting the value to "false" will allow the site to deploy as normal, but the database will be in an undefined state.</td></tr>
<tr><td>liquibase.contexts</td><td>LIQUIBASE_CONTEXTS</td><td>A comma separated lists of the [contexts](contexts.html) to run in.</td></tr>
</table>

If you want to control servers that run Liquibase but don't want to set the LIQUIBASE_HOST_EXCLUDES/LIQUIBASE_HOST_INCLUDES attributes, you can specify the "liquibase.should.run=\[true/false\]" system property.
