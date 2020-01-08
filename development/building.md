---
layout: default
title: Docs | Building Liquibase 
---

# Building Liquibase

Liquibase is built using Maven 3. There is a top-level Maven pom.xml file in the root directory which will build each of the sub-modules in turn.
3rd party jar dependencies are configured within the Maven pom.xml files and are automatically downloaded as part of the build process.

## Build Requirements

* Java SE JDK 1.8 or higher installed
* Maven 3.0 or higher
* No OS requirements

## Running Maven

1. Download maven 3.0 or greater from [maven.apache.org](http://maven.apache.org)
1. Unzip maven wherever you prefer
1. `cd ROOT_LIQUIBASE_SOURCE_DIR`
1. `/MAVEN_HOME/bin/mvn package`

Build output goes to the "target" directory under each top level directory. The standard liquibase core jar file is in `ROOT_LIQUIBASE_SOURCE_DIR/liquibase-core/target/liquibase-VERSION.jar`

**Note: If you prefer to build Liquibase without running the tests, run `/MAVEN_HOME/bin/mvn -DskipTests=true package`**
