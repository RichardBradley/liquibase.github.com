---
layout: default
title: XML Format | Liquibase Docs
---

# XML Format

Liquibase supports XML as a format for storing your changelog files. There is more information about the XML format [in the FAQ.](/faq.html#what-is-all-that-stuff-at-the-beginning-of-my-xml-changelog)

## XSD Support

XSD schema definitions are available for each Liquibase version. Since there are no changelog format changes in patch versions, there are only xsd files that correspond to major.minor versions.

See [the XML Schema Definitions](/xml/ns/dbchangelog/) for more information.

## Liquibase Extension XSDs

If you use a [Liquibase extension](../extensions/index.html) that includes additional change tags, check the extension documentation to find out if they provide a XSD.
If they do not, you can use the xsd at [dbchangelog-ext.xsd](dbchangelog-ext.xsd) which allows any nested tag and attribute.

## Limitations

None

## Example

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd
        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">

    <preConditions>
        <runningAs username="liquibase"/>
    </preConditions>

    <changeSet id="1" author="nvoxland">
        <createTable tableName="person">
            <column name="id" type="int" autoIncrement="true">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="firstname" type="varchar(50)"/>
            <column name="lastname" type="varchar(50)">
                <constraints nullable="false"/>
            </column>
            <column name="state" type="char(2)"/>
        </createTable>
    </changeSet>

    <changeSet id="2" author="nvoxland">
        <addColumn tableName="person">
            <column name="username" type="varchar(8)"/>
        </addColumn>
    </changeSet>
    <changeSet id="3" author="nvoxland">
        <addLookupTable
            existingTableName="person" existingColumnName="state"
            newTableName="state" newColumnName="id" newColumnDataType="char(2)"/>
    </changeSet>

</databaseChangeLog>

{% endhighlight %}
