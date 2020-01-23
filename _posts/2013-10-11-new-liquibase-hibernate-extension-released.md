---
layout: default
subnav: subnav_blog.md
title: New Liquibase Hibernate Extension Released
---
# New Liquibase Hibernate Extension Released

After far too long, a new version of the Liquibase-Hibernate extension has been released!


<a title="Downloads" href="http://github.com/liquibase/liquibase-hibernate/releases">Downloads</a>, 
<a title="documentation" href="http://github.com/liquibase/liquibase-hibernate/wiki">documentation</a>, 
and <a title="issues" href="http://github.com/liquibase/liquibase-hibernate/issues">issue tracking</a> 
is hosted at <a title="github.com/liquibase/liquibase-hibernate" href="http://github.com/liquibase/liquibase-hibernate">github.com/liquibase/liquibase-hibernate</a>. 
The extension is also available through Maven with group org.liquibase.ext, artifacts liquibase-hibernate3 and liquibase-hibernate4.


### Liquibase 3.0 Support


If you've been stuck on Liquibase 2.0 because of the old hibernate integration, the 
wait is over. The extension requires Liquibase 3.0.6+, so make sure you are on the newest version of Liquibase.


### Hibernate 4 Support


There are two separate jar files available: liquibase-hibernate3.jar and liquibase-hibernate4.jar. Use the version that corresponds to your Hibernate version


### EJB3 Configuration Support


If you are using the EJB3-style persistence.xml file, you can now use a database url of "*hibernate:ejb3:yourPersistenceUnit*".


### Spring Configuration Support


If your Hibernate configuration is specified in Spring, you can now use a database 
of "*hibernate:spring:your/path/spring.xml?bean=sessionFactory*" to pull the Hibernate configuration from your spring context.


### Programmatic Configuration Support


You can now create your Hibernate configurations dynamically by implementing 
*liquibase.ext.hibernate.customfactory.CustomClassicConfigurationFactory* or  
*liquibase.ext.hibernate.customfactory.CustomEjb3ConfigurationFactory* and reference the 
classes in your database url. For example, "*hibernate:classic:com.example.YourFactory*" or "*hibernate:ejb3:com.example.YourFactory*"


### Upgrade Notes:

- The standard database url has changed from "hibernate:path/to/your/file.xml" to "hibernate:classic:path/to/your/file.xml"
- Requires Liquibase 3.0.6+
- Jar name has changed from liquibase-hibernate.jar to liquibase-hibernate3.jar (or liquibase-hibernate4.jar)




