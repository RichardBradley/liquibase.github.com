---
layout: default
title: Liquibase XML Schema Definitions
subnav: subnav_main.md
---
# Liquibase XML Schema Definitions

This page contains a list of all the Liquibase XSD files. A new version of the XSD is generally available for each change to the major or minor version of Liquibase. XSD schemas are written in XML, and describe what a properly formed XML document for a particular application should look like. If you really want to get the lowdown, [this is a good article on XML and namespaces.](https://www.w3schools.com/xml/xml_namespaces.asp)

Simply put, referencing one of these XSD files in your *changelog* allows both Liquibase itself and any third-party XML tool (like an editor) to validate that your *changelog* is properly formed. There is more information about the format of XML changelog files [in the databasechangelog page](/documentation/databasechangelog.html) and [in the FAQ.](/faq.html#what-is-all-that-stuff-at-the-beginning-of-my-xml-changelog)

These XSD files are embedded into the Liquibase jar file, and don't normally need to be downloaded from this site, but these are here for easier reference. 

 * [dbchangelog-1.0.xsd](dbchangelog-1.0.xsd)
 * [dbchangelog-1.1.xsd](dbchangelog-1.1.xsd)
 * [dbchangelog-1.2.xsd](dbchangelog-1.2.xsd)
 * [dbchangelog-1.3.xsd](dbchangelog-1.3.xsd)
 * [dbchangelog-1.4.xsd](dbchangelog-1.4.xsd)
 * [dbchangelog-1.5.xsd](dbchangelog-1.5.xsd)
 * [dbchangelog-1.6.xsd](dbchangelog-1.6.xsd)
 * [dbchangelog-1.7.xsd](dbchangelog-1.7.xsd)
 * [dbchangelog-1.8.xsd](dbchangelog-1.8.xsd)
 * [dbchangelog-1.9.xsd](dbchangelog-1.9.xsd)
 * [dbchangelog-2.0.xsd](dbchangelog-2.0.xsd)
 * [dbchangelog-3.0.xsd](dbchangelog-3.0.xsd)
 * [dbchangelog-3.1.xsd](dbchangelog-3.1.xsd)
 * [dbchangelog-3.2.xsd](dbchangelog-3.2.xsd)
 * [dbchangelog-3.3.xsd](dbchangelog-3.3.xsd)
 * [dbchangelog-3.4.xsd](dbchangelog-3.4.xsd)
 * [dbchangelog-3.5.xsd](dbchangelog-3.5.xsd)
 * [dbchangelog-3.6.xsd](dbchangelog-3.6.xsd)
 * [dbchangelog-3.7.xsd](dbchangelog-3.7.xsd)
 * [dbchangelog-3.8.xsd](dbchangelog-3.8.xsd)
 * [dbchangelog-ext.xsd](dbchangelog-ext.xsd)
