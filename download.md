---
layout: default
title: Download Liquibase
---

## Liquibase Core ##

The current stable version of the Liquibase Core is 2.0.5 (Released May 2, 2012)

Available Downloads:
* [liquibase-2.0.5-bin.zip](https://github.com/downloads/liquibase/liquibase/liquibase-2.0.5-bin.zip)
* [liquibase-2.0.5-bin.tar.gz](https://github.com/downloads/liquibase/liquibase/liquibase-2.0.5-bin.tar.gz)

### Upgrade Notes ###
- 1.9 -&gt; 2.0 introduced several significant changes.  Most will be transparent, but see the ["2.0 upgrade guide"](v2_upgrade.html) for full upgrade information
- 1.8 -&gt; 1.9 introduced a change to how change set checksum generation is performed for addNotNullConstraint and removeNotNullConstraint. You will get an md5sum error if you use these tags until you either add a validCheckSum tag to the failing changesets using the old checksum (the one listed in the validation failed message) or run "liquibase clearCheckSums" or "UPDATE DATABASECHANGELOG SET MD5SUM=NULL"
- 1.5 -&gt; 1.6 introduced a change to how change set checksum generation is performed.  You will get an md5sum error message until you either run "liquibase clearCheckSums" or "UPDATE DATABASECHANGELOG SET MD5SUM=NULL"
- 1.4 -&gt; 1.5 introduced changes that may break existing configurations.  See the [1.5 release announcement](http://blog.liquibase.org/2008/01/liquibase-core-150-released.html) for more information


### Requirements ###

Liquibase has been designed for Java 1.5 and greater. 



### Installation ###

Extract liquibase.zip. In it you will find a //liquibase-VERSION.jar// This jar is all that is needed to run Liquibase from the ["command line"](manual/command_line.html), [ant](manual/ant.html), [Maven](manual/grails.html), [Spring](manual/grails.html), or a [servlet container](manual/servlet_listener.html). You can run the [command line](manual/command_line.html) version of the migrator with the same jar file by simply running //java -jar liquibase-VERSION.jar//.

## Source Code Download ##

Browse  the Liquibase source or check it out from https://github.com/liquibase/liquibase

## Liquibase Extension Portal ##

Liquibase 2.0 and beyond supports 3rd-party extensions and integrations.  Visit the [Extension Portal](http://www.liquibase.org/extensions) for more information.

## Grails ##

The current version of the [Liquibase Grails plug-in](manual/grails.html) is 1.9.3.4 which is available though the standard Grails plug-in system.


## Liquibase Community ##

Feature suggestions, bug reports, and general help should be directed to the [community](community.html).

## Copyright ##
Copyright (C) 2006-2013 Nathan Voxland

This library is free software; you can redistribute it and/or modify it under the terms of the Apache License, Version 2.0.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.