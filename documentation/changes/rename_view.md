---
layout: default
title: Change renameView
root: ../..
---

# Change: 'renameView'

Rename View

## XML Sample ##

{% highlight xml %}
<renameView catalogName="cat"
        newViewName="A String"
        oldViewName="A String"
        schemaName="public"/>
{% endhighlight %}

## Available Attributes ##

<table>
<tr><th>Name</th><th>Description</th><th>Required For Database</th></tr>
<tr><td>catalogName</td><td>Name of the catalog</td><td></td></tr>
<tr><td>newViewName</td><td>null</td><td>all</td></tr>
<tr><td>oldViewName</td><td>null</td><td>all</td></tr>
<tr><td>schemaName</td><td>Name of the schema</td><td></td></tr>
</table>
## SQL Generated From Above Sample (MySQL)

{% highlight sql %}
RENAME TABLE `cat`.`A String` TO `cat`.`A String`;


{% endhighlight %}

## Database Support

<table style='border:1;'>
<tr><th>Database</th><th>Notes</th><th>Easy Rollback</th></tr>
<tr><td>Cache</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>DB2</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>DB2i</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Derby</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Firebird</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>H2</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>HyperSQL</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Informix</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>MySQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Oracle</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>PostgreSQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SAP DB</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SQL Server</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SQLite</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Sybase</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Sybase Anywhere</td><td>Not Supported</td><td><b>Yes</b></td></tr>
</table>
