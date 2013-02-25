---
layout: default
title: Generate-changelog-with-jaxb-and-groovy
---

# Generate Liquibase changeLogs using JAXB and Groovy #

In [another article](generate-changelog-with-groovy) on this website we saw how we can generate Liquibase changelogs using Groovy and the markupBuilder.

In this article we're going to use the Java Architecture for XML Binding (JAXB) xjc tooling to generate the changelog. The xjc utility creates Java classes from the Liquibase XSD. These classes can then be used in a Groovy script to create Liquibase changelogs in an easy way.

Prerequisites
  - The Java JDK. If you don't have this, download it from sun.com
  - Groovy. Download from http://groovy.codehaus.org/


Create a new directory for this project.
Download the Liquibase XSD file from http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd
Create a simple batch file in the directory as follows:

{% highlight groovy %}
@echo off
xjc dbchangelog-2.0.xsd
javac org\liquibase\xml\ns\dbchangelog\*.java
{% endhighlight %}


After you run this file, you will see that many .java files have been created in directory org\liquibase\xml\ns\dbchangelog.

The file that we will be generating looks like this:

**sample1.xml**
{% highlight groovy %}
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog">
    <changeSet author="Bob" id="1">
        <createTable tableName="department">
            <column type="int" name="id">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column type="varchar(50)" name="name">
                <constraints nullable="false"/>
            </column>
            <column defaultValue="1" type="boolean" name="active"/>
        </createTable>
    </changeSet>
</databaseChangeLog>
{% endhighlight %}

To generate this file, we'll write out the structure of the file in a Groovy script using the JAXB generated classes. Feel free to look into the generated .java files to discover the names of the available attributes.

We're using a few neat Groovy features here:

Create a new object and providing the attributes on one go:
{% highlight groovy %}
c = Column( name: "id", type: "int" )
{% endhighlight %}

Using the << operator to add to a list
{% highlight groovy %}
ct.column << new Column( ... )
{% endhighlight %}


Our full Groovy script looks like this:

**sample1.groovy**

{% highlight groovy %}
import org.liquibase.xml.ns.dbchangelog.*

ct = new CreateTable( tableName: "department"
                    , column : []
                    )
ct.column << new Column( name: "id"
                       , type: "int"
                       , content: [ new Constraints( primaryKey: true, nullable: false) 
                                  ]
                       )

ct.column << new Column( name: "name"
                       , type: "varchar(50)"
                       , content: [ new Constraints( nullable: false) 
                                  ]
                       )

ct.column << new Column( name: "active"
                       , type: "boolean"
                       , defaultValue: 1
                       )

changeSet = new DatabaseChangeLog.ChangeSet( id: 1
                                           , author: "Bob"
                                           )
changeSet.changeSetChildren = []
changeSet.changeSetChildren << ct

databaseChangeLog = new DatabaseChangeLog( changeSetOrIncludeOrIncludeAll : [changeSet])

writer = new ChangeLogWriter()
writer.write( databaseChangeLog, "sample.xml" )
{% endhighlight %}

You'll notice that this Groovy script uses a little helper script:

**ChangeLogWriter.groovy**

{% highlight groovy %}
import javax.xml.bind.*

class ChangeLogWriter {
  String dirName = "."

  def write(bean, filename) {
    JAXBContext context = JAXBContext.newInstance( "org.liquibase.xml.ns.dbchangelog" )
    Marshaller marshaller = context.createMarshaller()
    marshaller.setProperty("jaxb.formatted.output", true)
    def pathName = dirName + System.properties.'file.separator' + filename
    def file = new File(pathName)
    file.withWriter('UTF-8') {
      marshaller.marshal( bean, it )
    }
  }
}
{% endhighlight %}
## Conclusion  ##

If you have a well-defined schema as a starting point, JAXB provides the infrastructure to create the content of the XML file and to write it out as valid XML.

This can be done in Java, but Groovy provides a more concise way to script the creation of the files.
