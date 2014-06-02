---
layout: default
title: Liquibase version 3.2 Upgrade Guide
---

# 3.1 to 3.2 Upgrade Guide #

For must Liquibase end users, Liquibase 3.2 is a drop-in replacement for Liquibase 3.1 version.

For developers of Liquibase extensions, there has been some Java API changes that may impact your code.

- <a href="v3_upgrade.html">2.x to 3.0 upgrade guide</a>
- <a href="v3_1_upgrade.html">3.0 to 3.1 upgrade guide</a>

## Updates to UTF-8 handling

Use of UTF-8 has been made more consistent. This may affect some stored checksums if using non-ascii characters. If you run into checksum issues, you can use the `<validCheckSum>` tag to mark both as valid or set the md5sum column to null in your databases to have it updated.

## New liquibase.change.Change.checkStatus(Database) method

There is a new checkStatus(Database) method added to the Change interface which is used to validate that the change successfully ran against the given database. 
The AbstractChange base class implements it to throw a "not implemented" exception which will be fine in most cases currently, but will be used in future releases.  

## Major changes to ResourceAccessor

The liquibase.resource.ResourceAccessor interface was significantly changed in order to better encapsulate file access logic. See the new javadoc for more information
 
## Parsing and Serialization Logic
 
The XML, YAML, and JSON ChangeLogParsers were changed significantly along with many other Serializable classes. A new liquibase.parser.core.ParsedNode class was added as an intermediary format. 