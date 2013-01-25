---
layout: default
title: Custom refactoring class
---

# Custom Refactoring #

Although LiquiBase tries to provide a wide range of database refactorings, there are times you may want to create your own custom refactoring class.

To create your own custom refactoring, simply create a class that implements the [liquibase.change.custom.CustomSqlChange](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/CustomSqlChange.html) or [liquibase.change.custom.CustomTaskChange](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/CustomTaskChange.html) interface and use the &lt;custom&gt; tag in your change set.

If your change can be rolled back, implement the [liquibase.change.custom.CustomSqlRollback](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/CustomSqlRollback.html) interface as well.

For a sample custom change class, see [liquibase.change.custom.ExampleCustomSqlChange](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/ExampleCustomSqlChange.html)


## Sample ##

{% highlight xml %}
<customChange class="com.example.ExampleCustomChange">
    <param name="tableName" value="person"/>
    <param name="columnName" value="employee_id"/>
</customChange>
{% endhighlight %}

{% highlight xml %}
<customChange class="com.example.ExampleCustomChange"
    tableName="person"
    columnName="employee_id"/>
{% endhighlight %}

## Available Attributes ##

^ class  | Name class that implements the custom change. **required**  |
^ any parameter on custom change subclass  | You can specify parameters on your custom class by passing them as attributes to the &lt;custom&gt; tag  |



## Nested "param" Tags ##


Instead of passing parameters to your custom change class as attributes on the &lt;custom&gt; tag, you can use nested &lt;param&gt; parameters, or a combination of both.

^ name  | Name of the custom change class parameter to set. **required**  |
^ value  | Value to set the parameter to. **value or tag text required**  |
^ tag text  | Value to set the parameter to.  //Since 1.9// **value or tag text required**  |