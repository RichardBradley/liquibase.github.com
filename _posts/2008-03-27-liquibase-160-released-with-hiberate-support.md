---
layout: default
subnav: subnav_blog.md
title: Liquibase 1.6.0 Released with Hibernate Support
---
# Liquibase 1.6.0 Released with Hibernate Support

The Liquibase team is proud to announce the 1.6.0 Liquibase Core release.

This release focuses primarily on Hibernate integration which allows you to use the
[diffChangeLog](/documentation/diffChangeLog.html) functionality available with the 
command line and Ant to automatically generate Liquibase change sets based on new 
Hibernate mapping information.

This functionality is similar to what is offered with hbm2ddl, but with the added ability 
to control and modify the changes before they are applied. For more information, see 
[https://github.com/liquibase/liquibase-hibernate](https://github.com/liquibase/liquibase-hibernate)

Additional functionality includes a new [tagDatabase](/documentation/changes/tagDatabase.html) tag, a "primaryKeyName" attribute on the column tag, as well as many bug fixes.

NOTE: Due to a bug in the change set md5 checksum generation in pre-1.6 releases, existing 
md5sum information needs to be cleared out of the databasechagelog table before running 1.6 
for the first time. This can be done by running 
[liquibase clearCheckSums](/documentation/command_line.html) or by running `UPDATE DATABASECHANGELOG SET MD5SUM=NULL`

Upgrading is simply a matter of replacing the liquibase.jar file. To take advantage 
of newer change log features, change your XSD declaration to:


    <databasechangelog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.6"
        xsi="http://www.w3.org/2001/XMLSchema-instance"
        schemalocation="http://www.liquibase.org/xml/ns/dbchangelog/1.6
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.6.xsd">

Liquibase 1.6 can be downloaded from <a href="https://download.liquibase.org/download-community/">https://download.liquibase.org/download-community//</a> and, as always, let us know if you have any questions or issues.

