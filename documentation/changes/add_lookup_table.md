---
layout: default
title: Change addLookupTable
root: ../..
---

# Change: 'addLookupTable'

Add Lookup Table

## XML Sample ##

{% highlight xml %}
<addLookupTable constraintName="A String"
        existingColumnName="A String"
        existingTableCatalogName="A String"
        existingTableName="A String"
        existingTableSchemaName="A String"
        newColumnDataType="A String"
        newColumnName="A String"
        newTableCatalogName="A String"
        newTableName="A String"
        newTableSchemaName="A String"/>
{% endhighlight %}

## Available Attributes ##

<table>
<tr><th>Name</th><th>Description</th><th>Required For Database</th></tr>
<tr><td>constraintName</td><td>null</td><td></td></tr>
<tr><td>existingColumnName</td><td>null</td><td>all</td></tr>
<tr><td>existingTableCatalogName</td><td>null</td><td></td></tr>
<tr><td>existingTableName</td><td>null</td><td>all</td></tr>
<tr><td>existingTableSchemaName</td><td>null</td><td></td></tr>
<tr><td>newColumnDataType</td><td>null</td><td>all</td></tr>
<tr><td>newColumnName</td><td>null</td><td>all</td></tr>
<tr><td>newTableCatalogName</td><td>null</td><td></td></tr>
<tr><td>newTableName</td><td>null</td><td>all</td></tr>
<tr><td>newTableSchemaName</td><td>null</td><td></td></tr>
</table>
## SQL Generated From Above Sample (MySQL)

{% highlight sql %}
CREATE TABLE `A String`.`A String` AS SELECT DISTINCT A String AS A String FROM `A String`.`A String` WHERE A String IS NOT NULL;

ALTER TABLE `A String`.`A String` MODIFY `A String` A STRING NOT NULL;

ALTER TABLE `A String`.`A String` ADD PRIMARY KEY (`A String`);

ALTER TABLE `A String`.`A String` ADD CONSTRAINT `A String` FOREIGN KEY (`A String`) REFERENCES `A String`.`A String` (`A String`);


{% endhighlight %}

## Database Support

<table style='border:1;'>
<tr><th>Database</th><th>Notes</th><th>Easy Rollback</th></tr>
<tr><td>Cache</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>DB2</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>DB2i</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Derby</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Firebird</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>H2</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>HyperSQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Informix</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>MySQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Oracle</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>PostgreSQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SAP DB</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SQL Server</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SQLite</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Sybase</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Sybase Anywhere</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
</table>
