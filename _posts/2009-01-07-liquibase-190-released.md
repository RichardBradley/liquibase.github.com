---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.9.0 Released
---
# Liquibase 1.9.0 Released

Liquibase 1.9.0 has been released!

Major features include:

- <a href="http://www.liquibase.org/manual/modify_sql">`modifySql` support</a>
- <a href="http://www.liquibase.org/manual/includeall">`includeAll` support</a>
- Sybase Adaptive SQL Anywhere support
- Paths in `<include>` can be relative to changelog using the "relativeToChangeLog" attribute
- <a href="http://www.liquibase.org/manual/stop">`stop` support</a>
- runInTransaction attribute for changeSet
- Stronger validation in .xsd
- Better Derby support (drop column, rename column)
- Bug fixes


If you are using the standard Liquibase library, upgrading is simply a matter of replacing the liquibase.jar file.  If you are using Grails, Maven, or the IntelliJ plugin, an updated version should be available via standard plugin repository within in the next day.


*NOTE: DUE TO A BUG IN THE "ADD NOT NULL CONSTRAINT" AND "DROP NOT NULL CONSTRAINT" CODE, YOU WILL GET CHECKSUM VALIDATION ERRORS FOR EXISTING CHANGESETS THAT USE THOSE TAGS. *


To solve the problem, either:

1. Add the `<validCheckSum>` tag to the failing changesets specifying the old MD5 sum (the one listed in the validation failed message)
1. Or, run `UPDATE DATABASECHANGELOG SET MD5SUM=NULL`

To take advantage of newer change log features, change your XSD declaration to:

    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
        xsi="http://www.w3.org/2001/XMLSchema-instance"
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">

Download Liquibase 1.9 from: <a href="https://download.liquibase.org/download-community/">https://download.liquibase.org/download-community/</a>


As usual, make sure you let us know if you have any questions, problems, or ideas. Also, thank you to everyone who submitted bug reports and patches over the last couple months.
