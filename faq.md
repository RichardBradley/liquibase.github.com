---
layout: default
title: FAQ
includeDaticalBox: true
---

# FAQ #

### What license is Liquibase released under? ###
Liquibase is released under the Apache License, version 2.0. The main Liquibase jar file also contains commercially licensed Pro code that is only active when a license key is provided.

### Where can I get the source code? ###
The source is available from the main [download](download/index.html) page or [directly from Github](https://github.com/liquibase/liquibase)

### How does Liquibase compare to tools that compare development database with production databases to generate change lists? ###
Liquibase works better because it **understands** what the changes are. For example, a database comparison program would simply see the "person" table on integration has a "firstname" and a "lastname" column, but on live, the "person" table has a "name" column. It would report that you need to drop the "name" column and add a "firstname" and a "lastname" column. While this would leave you with the correct schema, you would lose everyone's name in the process. With Liquibase, you would have a changeset that says "rename 'name' to 'lastname' and add a 'firstname' column" or, even better, "split the name column on a space and place the values in new 'firstname' and 'lastname' columns, then drop the 'name' column." Knowing **why** they are different allows changes to production databases without the fear of losing valuable data.

### What if multiple processes/application servers attempt to migrate the database at the same time? ###
Liquibase uses a distributed locking system to only allow one process to update the database at a time. The other processes will simply wait until the lock has been released.

### Does Liquibase work with branches? ###
Yes. Since each change is independent, database changes that had been made in a different branch, then merged in will be run the next time Liquibase is run. You may run into a problem with the order that the statements are ran, but any issues you have can be easily solved by re-ordering the changelog files.

### Why do I have to specify an "author" tag? ###
Why not just an "id" tag? The main reason for both the author the id attribute tag is because it is too easy for more than one person to a tag with the same "id" value--especially when using multiple branches. The source control system is going to resolve and merge two change sets added on different branches, but it won't care that there are two different changesets with the same "id", and once a change set has been run against a database with one id, you can't (easily) change it. By also determining change set uniqueness based on an author tag, the chance of duplicates is lowered.

### What if I really don't want to specify an author tag? ###
There are times an organization would not want to have changes tied back to a particular individual or if the original author isn't actually known. If this is the case, simply make up a value such as "UNKNOWN".

### How can I specify vendor specific features such as ENGINE=InnoDB in MySQL? ###
We do not currently have a way to specify vendor specific extensions to the create table tag, and so you would need to use the `<sql>` tag and specify your create table statement manually. Of course you would be able to configure your mysql install to use innodb as the
default storage engine with default-storage-engine=INNODB.

Since 1.9, the [modifySql](documentation/modify_sql.html) tag can be used to modify the generated SQL.

### What is all that stuff at the beginning of my XML changelog? ###
If you are using an XML format changelog, you may be wondering what all that stuff at the beginning is. Here's and example, followed by 
an explanation of each of the parts. 

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
    xmlns:pro="http://www.liquibase.org/xml/ns/pro"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd
        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd
        http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-3.8.xsd ">
</databaseChangeLog>
{% endhighlight %}

All of this is for the benefit of XML parsers, including the parser that is built into Liquibase and any XML-aware editors that you might
want to use to edit the changelog. 

The first line says "This is an XML document, version 1.0, and the character encoding is UTF-8". If you edit the XML in a plain-text editor, 
you should check that the file actually is encoded in UTF-8. 

The second element declares that this XML document has a root element of `databaseChangeLog` and then goes on to say more about what that actually means.

The rest of the lines are all about XML namespaces, and then XSD schemas. XML Namespaces allow an XML document to have elements that are defined in
different XSD schemas. XSD schemas are themselves written in XML, and describe what a properly formed XML document for a particular application should
look like. If you really want to get the lowdown, [this is a good article on XML and namespaces.](https://www.w3schools.com/xml/xml_namespaces.asp)

The line `xmlns="http://www.liquibase.org/xml/ns/dbchangelog"` says that the __*default* namespace__ for this document is identified with the given URI. 
This indicates that global elements, attributes, types, and groups in the databaseChangeLog namespace can be used in this document without a prefix 
(i.e, unqualified). This means that we can later on write things like `<changeSet>` rather than `<databaseChangeLog:changeSet>`. There can only be 
one default namespace in an XML document.

One key thing to remember here is the namespace URI is not used by the parser to look up information. The purpose of using an URI is to give the namespace a unique name. 
Some organizations use the URI as a pointer to a web page that contains human-readable namespace information. 

The next line `xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"` says that we are going to use a different namespace in this document. This namespace will have the 
prefix `xsi` and the URI `http://www.w3.org/2001/XMLSchema-instance`. This particular namespace is only used in one place in this document, further on in this element. 

Next, we declare two other namespaces. The first has the prefix `ext` and URI `http://www.liquibase.org/xml/ns/dbchangelog-ext`. This is a namespace that can
be used for any generic extension, without needing to write your own XSD file.

The second namespace has the `pro` prefix and the URI `http://www.liquibase.org/xml/ns/pro`. This namespace is used for features added by Liquibase Pro. Even if you 
are using the community version of Liquibase, you might want to have this in your changelogs in case you ever upgrade. When you look at an XML changelog, if any
of the elements start with `<pro:` then you know that was generated by or written to use the pro extensions. 

The final declaration in the header is quite big, and needs to be broken down a bit. It starts with `xsi:schemaLocation`. Here is the one place we use the `xsi` prefix
we declared earlier. The `schemaLocation` indicates that what follows in the quotes is a *list* of `URI + URL` pairs. In each `URI + URL` pair, the __URI__ matches one of the
URIs mentioned earlier in either the default namespace or one of the other namespace declarations, and the __URL__ is a pointer to where an XSD document can be found. Each
element in the declaration is separated from the others by whitespace - this can be just a space, or it can be a newline. This example splits each half of the pair
with a space, and separates each pair with a newline.

In this example, there are 3 pairs of `URI + URL`: one for the default namespace identified by the URI `http://www.liquibase.org/xml/ns/dbchangelog`, one for the `ext`
namespace, and one for the `pro` namespace. Note that both the default namespace and the pro namespace refer to URLs that have version numbers in them. Liquibase does
make changes to the XSD documents, so if you start using a new feature, you may need to update your changelogs to avoid errors. 

A final note - the XML parser that Liquibase uses internally is configured to look for the XSD documents on the classpath first (including in the Liquibase jar file), 
so it won't go out to the internet to download the XSD files. If you write an extension that uses a custom XSD, you should likewise include that in your jar file.



