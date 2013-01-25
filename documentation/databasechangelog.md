---
layout: default
title: Databasechangelog
---

The `<databaseChangeLog>` tag is the root tag of all change log XML files.

## Available Attributes ##

^ logicalFilePath  | Use to override the file name and path when creating the unique identifier of change sets. Required when moving or renaming change logs.  |




## Available Sub-Tags ##

^ `<preConditions>`  | Pre-conditions required to execute the change log. [Read More](preconditions.html)  |
^ `<property>`  | Value to set property to, if not set by another means. [Read More](changelog_parameters.html)  |
^ `<changeSet>`  | The change sets to execute. [Read More](changeset.html)  |
^ `<include>`  | Additional files containing change sets to execute [Read More](include.html)  |

When the LiquiBase migrator runs, it parses the databaseChangeLog tag. It first checks any preconditions specified. If any of the [preconditions](preconditions.html) fail, the LiquiBase will exit with an error message explaining what failed. Preconditions are useful for both documenting and enforcing expectations and assumptions of the changelog writer such as the DBMS to be run against or the user the changes are run as.

If all preconditions are met, LiquiBase will then begin running [changeSet](changeSet.html) and [include](include.html) tags **in the order they appear in the databaseChangeLog file**.

The XML schema for the databaseChangeLog tag is available at
  * [http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd](http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd) //Since 1.9//
  * [http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd](http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd) //Since 2.0//

Each changeSet contains an "id" tag and an "author" tag. These tags, along with the classpath location and name of the XML file create a unique identifier for that changeSet.



## Sample Empty Change Log (v1.9) ##

{% highlight xml %}
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
</databaseChangeLog>
{% endhighlight %}

## Sample Empty Change Log (v2.0) ##

{% highlight xml %}
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd
    http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">
</databaseChangeLog>
{% endhighlight %}
