---
layout: default
title: Create sequence
---

# Create Sequence #

Creates a new database sequence.

## Sample ##

{% highlight xml %}
<createSequence sequenceName="seq_employee_id"/>
{% endhighlight %}



## Available Attributes ##

^ sequenceName  | Name of the sequence to create **required**  |
^ schemaName  | Name of the table schema  |
^ incrementBy  | The interval between sequence numbers  |
^ minValue  | The minimum value of the sequence  |
^ maxValue  | The maximum value the sequence can generate  |
^ ordered  | 'true' or 'false' |
^ startValue  | The first sequence number to be generated  |


## Database Compatiblity #

^ MySQL  | No Sequence Support in Database  | 
^ PostgreSQL  | No Issues  | 
^ Oracle  | No Issues  | 
^ MS-SQL  | No Sequence Support in Database  | 
^ Sybase  | No Sequence Support in Database  | 
^ DB2  | No Issues  | 
^ Derby  | No Sequence Support in Database  | 
^ HSQL  | No Issues  | 
^ H2  | No Issues  | 
^ Caché  | No Sequence Support in Database  | 
^ Firebird  | No Issues  | 
^ MaxDB  | No Issues  | 
^ SQLite  | No Sequence Support in Database  |

Automatic Rollback Support: **YES**