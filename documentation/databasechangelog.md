---
layout: default
title: Databasechangelog
---

# Database Change Log File

The root of all Liquibase changes is the databaseChangeLog file.

## Available Attributes ##

<table>
<tr><td>logicalFilePath</td><td>Use to override the file name and path when creating the unique identifier of change sets. Required when moving or renaming change logs.</td></tr>
</table>

## Available Sub-Tags ##

<table>
<tr><td>preConditions</td><td>Pre-conditions required to execute the change log. [Read More](preconditions.html)</td></tr>
<tr><td>property</td><td>Value to set property to, if not set by another means. [Read More](changelog_parameters.html)</td></tr>
<tr><td>changeSet</td><td>The change sets to execute. [Read More](changeset.html)</td></tr>
<tr><td>include</td><td>Additional files containing change sets to execute [Read More](include.html)</td></tr>
</table>

When the Liquibase migrator runs, it parses the databaseChangeLog tag. It first checks any preconditions specified. If any of the [preconditions](preconditions.html) fail, the Liquibase will exit with an error message explaining what failed. Preconditions are useful for both documenting and enforcing expectations and assumptions of the changelog writer such as the DBMS to be run against or the user the changes are run as.

If all preconditions are met, Liquibase will then begin running [changeSet](changeSet.html) and [include](include.html) tags **in the order they appear in the databaseChangeLog file**.

The XML schema for the databaseChangeLog tag is available at
* [http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd](http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd) **Since 1.9**
* [http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd](http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd) **Since 2.0**

Each changeSet contains an "id" tag and an "author" tag. These tags, along with the classpath location and name of the XML file create a unique identifier for that changeSet.



## Sample Empty Change Log ##

<div id='changelog-tabs'>
<ul>
    <li><a href="#tab-xmlv2">XML Format (v2.0)</a></li>
    <li><a href="#tab-xmlv3">XML Format (v3.0)</a></li>
    <li><a href="#tab-yaml">YAML Format</a></li>
    <li><a href="#tab-json">JSON Format</a></li>
    <li><a href="#tab-sql">SQL Format</a></li>
  </ul>
<div id='tab-xmlv2'>

{% highlight xml %}
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd
    http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">
</databaseChangeLog>
{% endhighlight %}

</div>
<div id="tab-xmlv3">
{% highlight xml %}
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.0.xsd
        http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">
{% endhighlight %}
</div>
<div id="tab-yaml">
{% highlight yaml %}
databaseChangeLog:
{% endhighlight %}
</div>

<div id="tab-json">
{% highlight json %}
{
    "databaseChangeLog": [
    ]
}

{% endhighlight %}
</div>

<div id="tab-sql">
{% highlight sql %}
--liquibase formatted sql

{% endhighlight %}
</div>
</div>

<script>
  $(function() {
    $( "#changelog-tabs" ).tabs();
  });
</script>
