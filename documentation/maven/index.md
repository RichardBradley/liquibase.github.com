---
layout: default
title: Maven
subnav: subnav_documentation.md
---

# Maven Liquibase Plugin #

Liquibase can be controlled via a Maven plug-in which can be obtained from the central Maven repository.

You can find the all the versions of the Liquibase-core and Maven plugins in the central repository by going [here](http://mvnrepository.com/artifact/org.liquibase/liquibase-core).

## Goals Available ##

* [liquibase:changelogSync](maven_changelogsync.html)
* [liquibase:changelogSyncSQL](maven_changelogsyncsql.html)
* [liquibase:clearCheckSums](maven_clearchecksums.html)
* [liquibase:dbDoc](maven_dbDoc.html)
* [liquibase:diff](maven_diff.html)
* [liquibase:dropAll](maven_dropall.html)
* [liquibase:generateChangeLog](maven_generateChangeLog.html)
* [liquibase:help](maven_help.html)
* [liquibase:listLocks](maven_listlocks.html)
* [liquibase:releaseLocks](maven_releaselocks.html)
* [liquibase:rollback](maven_rollback.html)
* [liquibase:rollbackSQL](maven_rollbacksql.html)
* [liquibase:status](maven_status.html)
* [liquibase:tag](maven_tag.html)
* [liquibase:update](maven_update.html)
* [liquibase:updateSQL](maven_updatesql.html)
* [liquibase:updateTestingRollback](maven_updatetestingrollback.html)
* [liquibase:futureRollbackSQL](maven_futurerollbacksql.html)
* [liquibase:migrate](maven_migrate.html) **DEPRECATED** use update instead
* [liquibase:migrateSQL](maven_migrateSQL.html) **DEPRECATED** use updateSQL instead


## Configuration and Usage ##

Configuration of the plugin is done via the `<plugins>` section of the pom.xml, specifying the configuration and execution phase to bind the plugin to.

Each goal has its own configuration parameters, but some of which are common to other plugin goals, for more information on all the configuration parameters available for a specific goal click on the link to goal above.


#### Paths to files ####

As of version 1.6.1.0 of the Maven plugin all files are resolved from the maven test classpath for the Maven project or an absolute path. This allows for [DatabaseChangeLogs](../databasechangelog.html) to be present in other Maven artifacts (on the classpath) and able to be used to invoke liquibase on a database.


#### Using Configuration Property Files ####

Configuration settings for the Maven Liquibase plugin can be specified in standard Java Property files. If a [configuration property file](../liquibase.properties.html) is specified it will be used to setup the properties for the invocation of the Maven Liquibase plugin.

For each property defined in the file that matches a property in the goal being invoked that property of the goal will be set. If the property does not match any of the properties for the goal, then a warning will be displayed to the user, but execution will continue.

The reason for only printing a warning is to allow a user to define a single master configuration property file that can be resused for multiple Maven Liquibase goals like [liquibase:update](maven_update.html) and [liquibase:tag](maven_tag.html).


##### Using both a Configuration Property File and specifying Configuration Values #####

It is possible to specify a Configuration Property File and individual Properties in the `<configuration>` section of the Maven Liquibase plugin.

If this is done the properties specified in the `<configuration>` section will be used in preference over those defined in the properties file.

If this behaviour is not desirable, then the properties file can be setup to override the specified properties in the `<configuration>` section by adding the following to the `<configuration>` section;

{% highlight xml %}
<propertyFileWillOverride>true</propertyFileWillOverride>
{% endhighlight %}


#### Example of Maven Liquibase Update ####

You need to ensure that you include the relevant JDBC driver for your database in the dependency section of Maven POM file.

MySQL example:
{% highlight xml %}
<project>
    <dependencies>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <!-- Replace with the version of the MySQL driver you want to use -->
            <version>${mysql-version}</version>
        </dependency>
    </dependencies>
</project>
{% endhighlight %}

Oracle example (thin driver):
{% highlight xml %}
<project>
    <dependencies>
        <dependency>
            <groupId>com.oracle</groupId>
            <artifactId>ojdbc14</artifactId>
            <version>10.2.0.4</version>
        </dependency>
    </dependencies>
</project>
{% endhighlight %}


The following is a sample configuration for the Liquibase Maven plugin, version 1.6.1.0, showing an example of the [liquibase:update](maven_update.html) goal;

{% highlight xml %}
  <project>
    <build>
      <plugins>
		<plugin>
		   <groupId>org.liquibase</groupId>
		   <artifactId>liquibase-maven-plugin</artifactId>
		   <version>3.0.5</version>
		   <configuration>                  
			  <propertyFile>src/main/resources/liquibase/liquibase.properties</propertyFile>
		   </configuration>                
		   <executions>
			 <execution>
			   <phase>process-resources</phase>                                                                  
			   <goals>
				 <goal>update</goal>
			   </goals>
			 </execution>
		   </executions>
		</plugin> 	
      </plugins>
    </build>
  </project>
{% endhighlight %}

This example configuration will execute the [liquibase:update](maven_update.html) goal as part of the process-resources phase of the build. The parameters (database url, password, etc...) for running Liquibase are specified in the src/main/resources/liquibase.properties.

Note that the path to the file src/main/resources/liquibase.properties could be shortened to liquibase.properties if there was only one on the classpath.

All the parameters for executing the Maven Liquibase plugin can also be specified in `<configuration>` section of the plugin. Below is an example of this:

{% highlight xml %}
    <plugin>
      <groupId>org.liquibase</groupId>
      <artifactId>liquibase-maven-plugin</artifactId>
      <version>3.0.5</version>
      <executions>
        <execution>
          <phase>process-resources</phase>
          <configuration>
            <changeLogFile>src/main/resources/org/liquibase/business_table.xml</changeLogFile>
            <driver>oracle.jdbc.driver.OracleDriver</driver>
            <url>jdbc:oracle:thin:@tf-appserv-linux:1521:xe</url>
            <username>liquibaseTest</username>
            <password>pass</password>
          </configuration>
          <goals>
            <goal>update</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
{% endhighlight %}


#### Further configuration properties ####

Add `<promptOnNonLocalDatabase>false</promptOnNonLocalDatabase>` as configuration parameter to disable the dialog popping up which confirms migrations on non-local databases.

The maven command `mvn help:describe -DgroupId=org.liquibase -DartifactId=liquibase-maven-plugin -Dversion=2.0.1 -Dfull=true` will give you hints about all available configuration parameters within the Liquibase maven plugin.


#### Using a global configuration for multiple projects ####

Through the usage of a parent-pom (some call it company super-pom) it is possible to have a centralized Liquibase plugin configuration that applies to all your Maven child projects. For a detailed explanation of the super-pom concept, see [Maven manual Pom section](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html).

In this setup, the plugin configuration is set in the super-pom, so that it becomes available to all child projects. The adaptation to each project needs (database driver, jdbc url, etc.) is made through a local `liquibase.properties` file. In addition, since several configurations may be necessary inside the project, `liquibase.properties` can be filtered by with the Maven resource filtering system.

Parent `pom.xml` configuration:

{% highlight xml %}
  <project>
    <build>
      <plugins>
        <plugin>
          <groupId>org.liquibase</groupId>
          <artifactId>liquibase-maven-plugin</artifactId>
          <version>x.x.x.x</version>
          <configuration>
            <propertyFileWillOverride>true</propertyFileWillOverride>
            <propertyFile>target/classes/liquibase.properties</propertyFile>
          </configuration>
        </plugin>
      </plugins>
    </build>
  </project>
{% endhighlight %}

You want to replace x.x.x.x by the most recent version of the plugin.

As shown above, you may want to add an `<executions>` section, or put more configuration properties in the ``<configuration>`` section. Keep in mind that any modification will apply to all child projects. It is possible to some extent to override this global configuration in your local `liquibase.properties` file as `<propertyFileWillOverride>` is set to `true`. If you have a few exceptions among your projects but want to keep a global config for all the others, you can always add the `<plugin>` section to your child `pom.xml`. This will override the global config.

The `liquibase.properties` must be put in the `src/main/resources` folder, as well as your `db.changelog.xml`. It can hold as many properties as you need. Here's an already quite complete example:

{% highlight properties %}
contexts: ${liquibase.contexts} 
changeLogFile: com/company/client/project/db.changelog.xml 
driver: ${dataSource.project.driverClass} 
url: ${dataSource.project.jdbcURL} 
username: ${dataSource.project.user} 
password: ${dataSource.project.password} 
verbose: true 
dropFirst: false 
{% endhighlight %}

The placeholders are filtered by the Maven resource filtering system. In order to get your Maven standard `resources/` folder filtered you need to have this config in your `pom.xml`:
{% highlight xml %}
<build>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
</build>
{% endhighlight %}

See [How do I filter resource files](http://maven.apache.org/guides/getting-started/index.html#How_do_I_filter_resource_files) for more details.

In this particular setup, the project jdbc url, database driver, username and password are used for Liquibase as well.

The placeholders are replaced by values found in filter property files located in `src/main/filters`.

You can have as many property file filters as you need. To specify the filter to use on Maven execution, you need to use [Maven profiles](http://maven.apache.org/guides/introduction/introduction-to-profiles.html).

A typical invocation would look like this:

`mvn resources:resources liquibase:update -P<profile_name>`

Invoking the `resources` is necessary in order to have the `liquibase.properties` placeholders filtered. The `-P` option tells Maven the profile to use and thus the set of values (from the filter properties file) to use for filtering.

If you don't need the filtering capabilities, you can replace in the super-pom plugin configuration `<propertyFile>target/classes/liquibase.properties</propertyFile>` by `<propertyFile>src/main/resources/liquibase.properties</propertyFile>`

Invocation is then simplified to a mere `mvn liquibase:update`.

The main advantages of this setup are:
* no Liquibase plugin configuration in your projects. Only the `liquibase.properties` is required.
* a unique place where to update the plugin version (you don't need to manuall edit all your `pom.xml` and commit them)
