---
layout: default
title: Spring
---

# Spring Integration #

Liquibase can be run in a [Spring](http://www.springframework.org) environment by declaring a liquibase.spring.SpringLiquibase bean.



## Example ##

{% highlight xml %}
<bean id="liquibase" class="liquibase.integration.spring.SpringLiquibase">
      <property name="dataSource" ref="myDataSource" />
      <property name="changeLog" value="classpath:db-changelog.xml" />

      <!--
      contexts specifies the runtime contexts to use.
      -->
      <property name="contexts" value="test, production" />
 </bean>
{% endhighlight %}


## Available Attributes ##

  * beanName
  * resourceLoader
  * dataSource
  * changeLog
  * contexts
  * parameters
  * defaultSchema
  * dropFirst //since 2.0.2//