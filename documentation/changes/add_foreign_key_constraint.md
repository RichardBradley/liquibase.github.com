---
layout: default
title: Change addForeignKeyConstraint
root: ../..
---

# Change: 'addForeignKeyConstraint'

Add Foreign Key Constraint

## XML Sample ##

{% highlight xml %}
<addForeignKeyConstraint baseColumnNames="A String"
        baseTableCatalogName="A String"
        baseTableName="A String"
        baseTableSchemaName="A String"
        constraintName="A String"
        deferrable="true"
        initiallyDeferred="true"
        onDelete="A String"
        onUpdate="A String"
        referencedColumnNames="A String"
        referencedTableCatalogName="A String"
        referencedTableName="A String"
        referencedTableSchemaName="A String"
        referencesUniqueColumn="true"/>
{% endhighlight %}

## Available Attributes ##

<table>
<tr><th>Name</th><th>Description</th><th>Required For Database</th></tr>
<tr><td>baseColumnNames</td><td>null</td><td>all</td></tr>
<tr><td>baseTableCatalogName</td><td>null</td><td></td></tr>
<tr><td>baseTableName</td><td>null</td><td>all</td></tr>
<tr><td>baseTableSchemaName</td><td>null</td><td></td></tr>
<tr><td>constraintName</td><td>null</td><td>all</td></tr>
<tr><td>deferrable</td><td>null</td><td></td></tr>
<tr><td>initiallyDeferred</td><td>null</td><td></td></tr>
<tr><td>onDelete</td><td>null</td><td></td></tr>
<tr><td>onUpdate</td><td>null</td><td></td></tr>
<tr><td>referencedColumnNames</td><td>null</td><td>all</td></tr>
<tr><td>referencedTableCatalogName</td><td>null</td><td></td></tr>
<tr><td>referencedTableName</td><td>null</td><td>all</td></tr>
<tr><td>referencedTableSchemaName</td><td>null</td><td></td></tr>
<tr><td>referencesUniqueColumn</td><td>null</td><td></td></tr>
</table>
## SQL Generated From Above Sample (Oracle)

{% highlight sql %}
ALTER TABLE "A STRING"."A STRING" ADD CONSTRAINT "A STRING" FOREIGN KEY ("A STRING") REFERENCES "A STRING"."A STRING" ("A STRING") ON DELETE A String DEFERRABLE INITIALLY DEFERRED;


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
<tr><td>MySQL</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Oracle</td><td><b>Supported</b></td><td><b>Yes</b></td></tr>
<tr><td>PostgreSQL</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>SAP DB</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>SQL Server</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>SQLite</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Sybase</td><td>Not Supported</td><td><b>Yes</b></td></tr>
<tr><td>Sybase Anywhere</td><td>Not Supported</td><td><b>Yes</b></td></tr>
</table>
