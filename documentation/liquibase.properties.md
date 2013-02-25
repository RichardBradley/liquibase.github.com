---
layout: default
title: Liquibase.properties
---

# The liquibase.properties configuration file #

Liquibase can read paramaters for its execution from standard Java Property files. A simple liquibase.properties file would look like this:

``
driver: oracle.jdbc.OracleDriver
classpath: ../ojdbc14.jar
url: jdbc:oracle:thin:@localhost:1521:XE
username: tbd
password: tbd
``

Note that paths are relative to the current directory.

For each property defined in the file that matches a property in the goal being invoked that property of the goal will be set.

### See Also ###
   * [Using a liquibase.properties file in the command  line](command_line#using_a_liquibase.properties_file)
   * [Using a liquibase.properties file with the maven plugin](maven#using_configuration_property_files)