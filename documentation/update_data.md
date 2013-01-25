---
layout: default
title: Update data
---

# Update Data #

Updates data in an existing table


## Samples ##

{% highlight xml %}
<update tableName="People">
    <column name="firstname" value="Fred"/>
    <column name="lastname" value="Johnson"/>
    <column name="username" value="fjohnson"/>
    <where>id=2</where>
</update>
{% endhighlight %}

{% highlight xml %}
<update tableName="People">
    <column name="downsized" valueBoolean="true"/>
</update>
{% endhighlight %}

{% highlight xml %}
<comment>Example with text update</comment>
<update tableName="ProductSettings">
    <column name="property" value="vatCategory"/>
    <where>property='vat'</where>
</update>
{% endhighlight %}

## Available Attributes ##

^ tableName  | Name of the table to update data in  | 
^ schemaName  | Name of the table schema  | 

## Available Sub-Tags ##

^ column  | Data to update. See the [column tag documentation](column.html) for more information.  **required**  |
^ where \[TEXT\]  | Where clause for update statement |


## Database Compatiblity ##

^ MySQL  | No Issues  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Issues  | 
^ Sybase  | No Issues  | 
^ DB2  | No Issues  | 
^ Derby  | No Issues  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Issues  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Issues  | 

Automatic Rollback Support: **NO**