---
layout: post
status: publish
published: true
title: Liquibase Core 1.5.0 Released
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 39
wordpress_url: http://nvoxland.wordpress.com/2008/01/29/liquibase-core-150-released/
date: '2008-01-29 19:15:00 -0600'
date_gmt: '2008-01-29 19:15:00 -0600'
categories:
- Announcement
tags: []
---
Liquibase Core 1.5.0 is now available for download from <a href="http://www.liquibase.org/download">http://www.liquibase.org/download</a>

1.5.0 includes a major refactoring which should not affect most users except for the following items:

#### BREAKING CHANGES



- *Servlet Migrator:* The web.xml parameter names have changed.  See <a href="http://www.liquibase.org/manual/servlet_listener">http://www.liquibase.org/manual/servlet_listener</a> for more information.

- If you used the "database.migrator.should.run", it is must now be changed to "liquibase.should.run"

- If you have extended or embedded Liquibase classes or calls directly in your code, changes will be necessary.



#### BACKWARDS-COMPATIBLE CHANGES



- *Servlet Migrator:* The classes to reference in web.xml have changed to liquibase.servlet.LiquibaseStatusServlet and liquibase.servlet.LiquibaseServletListener.  The old classes are now simply subclasses of the new and are deprecated so they should work.

- *Spring Migrator:* The class to reference in your spring config has changed to liquibase.spring.SpringLiquibase.  The old class still exists as a subclass of the new so existing configurations should continue to work.

- *Command Line:* The "migrate" command has been changed to "update".
"migrate" is now an alias for "update" so existing calls should continue to work


#### ENHANCEMENTS


#### IMPROVED SCHEMA SUPPORT
There is now a "defaultSchemaName" parameter available for setting default schema.  This schema will be used for all ambiguous database objects as well as for storing the databasechangelog and databasechangeloglock tables.

#### NEW COMMANDS
Ant support has been greatly expanded and now covers most of the functionality available in the command line application.  See <a href="http://www.liquibase.org/manual/ant">http://www.liquibase.org/manual/ant</a> for more information.

#### NEW COMMANDS



- changeLogSync
- updateCount
- updateCountSQL

#### NEW REFACTORINGS



- <a href="http://www.liquibase.org/manual/update_data">update change</a>

- <a href="http://www.liquibase.org/manual/delete_data">delete change</a>



#### OTHER CHANGES





- Custom Database implementations can be specified with the databaseClassName parameter
- "replaceIfExists" attribute added to createView
- createTable can specify uniqueConstraintName
- Setting value/valueNumeric/valueBoolean/valueDate on addColumn will update all existing rows with the given value
- Database table comments saved to generated change log
- Changelog file comparisons are case-insensitive on windows
- Output warning of old schema version
- Added comments tag to generated SQL output
- Rollback commands can specify contexts
- XSDs are not pulled from network
- Handles Postgres datatypes better
- Bug fixes



#### Upgrading

Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage of newer change log features, change your XSD declaration to:

    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.5"
        xsi="http://www.w3.org/2001/XMLSchema-instance"
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.5
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.5.xsd">

Depending on feedback received from this release, the 1.5.0.0 releases of the various plug-ins (Maven, Grails, IntelliJ, Eclipse) should be released over the next few days.

As usual, be sure to <a href="http://www.liquibase.org/community">let us know</a> if you have any questions or issues.

