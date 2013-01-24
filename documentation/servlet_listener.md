---
layout: default
title: Servlet listener
---

# Servlet Listener #

LiquiBase can be run via a servlet listener. This allows you to have your database be updated automatically whenever the site is deployed. Since LiquiBase uses distributed locking, this method will work just fine even if you have a cluster of application servers.

To configure the servlet listener, simply add liquibase.jar to your WEB-INF/lib directory and the following to your web.xml file:

**Liquibase 1.9.x**

<code xml>
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
</code>                

**Liquibase 2.0**

<code xml>
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
</code>  

## Available context-parameters: ##

^ Param for 1.9.x ^ Param for 2.0 ^ Description ^
| LIQUIBASE_CHANGELOG | liquibase.changelog | Specifies the changelog file to run **[required]**  | 
| LIQUIBASE_DATA_SOURCE | liquibase.datasource | JNDI datasource to use for running LiquiBase. Note that the LIQUIBASE_DATA_SOURCE can be different than the data source the rest of your web app uses if that data source does not have sufficient privileges to create/alter tables etc. **[required]**  | 
| LIQUIBASE_HOST_EXCLUDES | liquibase.host.excludes | Specify host names on which you do NO want LiquiBase to run. Specifying this parameter allows you to deploy the same WAR/EAR to multiple machines in different environments and not have LiquiBase run on all of them.  | 
| LIQUIBASE_HOST_INCLUDES | liquibase.host.includes | Specify the ONLY host names on which want LiquiBase to run. Specifying this parameter allows you to deploy the same WAR/EAR to multiple machines in different environments and not have LiquiBase run on all of them.  | 
| LIQUIBASE_FAIL_ON_ERROR | liquibase.onerror.fail | Specify if an exception is thrown by LiquiBase if an error occurs. Setting the value to "true" (default) will cause the exception to be thrown and keep the site from initializing properly. Setting the value to "false" will allow the site to deploy as normal, but the database will be in an undefined state.  | 
| LIQUIBASE_CONTEXTS | liquibase.contexts | A comma separated lists of the [contexts](contexts.html) to run in.  |

If you want to control servers that run LiquiBase but don't want to set the LIQUIBASE_HOST_EXCLUDES/LIQUIBASE_HOST_INCLUDES attributes, you can specify the "liquibase.should.run=[true/false]" system property.
