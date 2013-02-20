---
layout: default
title: Change mergeColumns
root: ../..
---

# Change: 'mergeColumns'

Merge Column

## XML Sample ##

{% highlight xml %}
<mergeColumns catalogName="cat"
        column1Name="A String"
        column2Name="A String"
        finalColumnName="A String"
        finalColumnType="A String"
        joinString="A String"
        schemaName="public"
        tableName="person"/>
{% endhighlight %}

## Available Attributes ##

<table>
<tr><th>Name</th><th>Description</th><th>Required For Database</th></tr>
<tr><td>catalogName</td><td>Name of the catalog</td><td></td></tr>
<tr><td>column1Name</td><td>null</td><td>all</td></tr>
<tr><td>column2Name</td><td>null</td><td>all</td></tr>
<tr><td>finalColumnName</td><td>null</td><td>all</td></tr>
<tr><td>finalColumnType</td><td>null</td><td>all</td></tr>
<tr><td>joinString</td><td>null</td><td></td></tr>
<tr><td>schemaName</td><td>Name of the schema</td><td></td></tr>
<tr><td>tableName</td><td>Name of the table</td><td>all</td></tr>
</table>
## SQL Generated From Above Sample (MySQL)

{% highlight sql %}
ALTER TABLE `public`.`person` ADD `A String` A STRING;

UPDATE `cat`.`person` SET A String = CONCAT_WS(A String,
 'A String',
 A String);

ALTER TABLE `public`.`person` DROP COLUMN `A String`;

ALTER TABLE `public`.`person` DROP COLUMN `A String`;


{% endhighlight %}

## Database Support

<table style='border:1;'>
<tr><th>Database</th><th>Notes</th><th>Easy Rollback</th></tr>
<tr><td>Cache</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>DB2</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>DB2i</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>Derby</td><td>Not Supported</td><td>No</td></tr>
<tr><td>Firebird</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>H2</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>HyperSQL</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>Informix</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>MySQL</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>Oracle</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>PostgreSQL</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>SAP DB</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>SQL Server</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>SQLite</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>Sybase</td><td><b>Supported</b></td><td>No</td></tr>
<tr><td>Sybase Anywhere</td><td><b>Supported</b></td><td>No</td></tr>
</table>
