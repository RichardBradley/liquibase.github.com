---
layout: default
title: Liquibase XML Schema Definitions - extensions
subnav: subnav_main.md
---

This is a list of some of the Liquibase extension XSD files. XSD schemas are written in XML, and 
describe what a properly formed XML document for a particular application should look like. If 
you really want to get the lowdown, [this is a good article on XML and namespaces.](https://www.w3schools.com/xml/xml_namespaces.asp)

Simply put, referencing one of these xsd files in your changelog allows both Liquibase itself and
any third-party XML tool (like an editor) to validate that your changelog is properly formed. There is
more information about the format of XML changelog files [in the databasechangelog page](/documentation/databasechangelog.html) and [in the FAQ.](/faq.html#what-is-all-that-stuff-at-the-beginning-of-my-xml-changelog)

These XSD files are generally embedded into the extensions jar file, and don't normally need to 
be downloaded from this site, but these are here for easier reference. 

 * [oraext.xsd](oraext.xsd)
 
