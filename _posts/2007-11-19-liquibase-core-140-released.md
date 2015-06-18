---
layout: default
subnav: subnav_blog.md
title: Liquibase Core 1.4.0 Released
---
Liquibase 1.4.0 has been released. Major features include:

- IntelliJ Plug-in Support
- Added support for specifying schemas in change log
- MaxDB/SAPDB Support
- Refactored Code
- Can specify data types as `java.sql.Types.*`
- Support for composite foreign keys
- Improved Maven support
- Bug Fixes

Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage of newer change log features, change your XSD declaration to:

    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.4"
        xsi="http://www.w3.org/2001/XMLSchema-instance"
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.4
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.4.xsd">

Download Liquibase 1.4 from: <a href="http://www.liquibase.org/download.html">http://www.liquibase.org/download.html</a>

