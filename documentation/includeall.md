---
layout: default
title: includeAll tag
---

The includeAll tag allows you to break up your change-logs into more manageable pieces.  It is similar to the [include](include.html) tag, but instead of passing a particular changelog file to include, you specify a directory and it will include all *.xml files as changelog files, and all *.sql files as individual changes.  All files that are found are run in order according to alphabetical order.

## Sample ##
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <includeAll path="com/example/changelogs/"/>
</databaseChangeLog>
{% endhighlight %}

## Warnings ##
**While the includeAll tag has many valuable uses, its use can cause problems down the road.  The biggest thing to avoid is to use the includeAll tag to simulate Ruby on Rails Active Migrations strategy of a list of changes, one per file, that are ran in file order.  While this seems like a good idea at first, it [quickly runs into problems](http://www.liquibase.org/2007/06/the-problem-with-rails-active-migrations.html)**

If you do choose to use the includeAll tag, make sure you have a naming strategy in place that will insure that you will never have conflicts or need to rename files to change to force a reordering.    
