---
layout: default
title: Change createSequence
root: ../..
---

# Change: 'createSequence'

Create Sequence

## XML Sample ##

{% highlight xml %}
<createSequence catalogName="cat"
        cycle="true"
        incrementBy="371717"
        maxValue="371717"
        minValue="371717"
        ordered="true"
        schemaName="public"
        sequenceName="A String"
        startValue="371717"/>
{% endhighlight %}

## Available Attributes ##

<table>
<tr><th>Name</th><th>Description</th><th>Required For Database</th></tr>
<tr><td>catalogName</td><td>Name of the catalog</td><td></td></tr>
<tr><td>cycle</td><td>null</td><td></td></tr>
<tr><td>incrementBy</td><td>null</td><td></td></tr>
<tr><td>maxValue</td><td>null</td><td></td></tr>
<tr><td>minValue</td><td>null</td><td></td></tr>
<tr><td>ordered</td><td>null</td><td></td></tr>
<tr><td>schemaName</td><td>Name of the schema</td><td></td></tr>
<tr><td>sequenceName</td><td>null</td><td>all</td></tr>
<tr><td>startValue</td><td>null</td><td></td></tr>
</table>
## SQL Generated From Above Sample (Oracle)

{% highlight sql %}
CREATE SEQUENCE cat."A STRING" START WITH 371717 INCREMENT BY 371717 MINVALUE 371717 MAXVALUE 371717 ORDER CYCLE;


{% endhighlight %}

## Database Support

<table style='border:1;'>
<tr><th>Database</th><th>Notes</th><th>Easy Rollback</th></tr>
<tr><td>Cache</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>DB2</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>DB2i</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Derby</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Firebird</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>H2</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>HyperSQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>Informix</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>MySQL</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Oracle</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>PostgreSQL</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SAP DB</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>SQL Server</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>SQLite</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Sybase</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Sybase Anywhere</td><td>Not Supported</td><td><b>Yes</b></td></tr>
</table>
