====== Spring Integration ======

LiquiBase は [[http://www.springframework.org|Spring]] 環境でも、liquibase.spring.SpringMigrator ビーンを宣言することで利用可能です。



===== 例 =====

<code xml>
<bean id="liquibase" class="liquibase.integration.spring.SpringLiquibase">
      <property name="dataSource" ref="myDataSource" />
      <property name="changeLog" value="classpath:db-changelog.xml" />

      <!--
      contexts specifies the runtime contexts to use.
      -->
      <property name="contexts" value="test, production" />
 </bean>
</code>

