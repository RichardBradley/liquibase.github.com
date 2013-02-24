---
layout: default
title: Execute shell command
---

# Execute Shell Command #

Executes a system command. Because this refactoring doesn't generate SQL like most, using Liquibase commands such as migrateSQL may not work as expected. **Therefore, if at all possible use refactorings that generate SQL.**


## Sample ##

{% highlight xml %}
<executeCommand executable="mysqldump" os="Windows XP">
    <arg value="--add-drop-database"/>
    <arg value="--compress"/>
    <arg value="dbName"/>
</executeCommand>
{% endhighlight %}

## Available Attributes ##

^ executable  | Name of the executable to run **required**  |
^ os  | List of operating systems on which to execute the command (taken from the os.name Java system property)  |  

## Available Sub-Tags ##

^ arg  | Argument (in the "value" attribute) to pass to the executable.  | 

## JDK Compatiblity ##

^ JDK 1.4  | Not Supported  | 
^ JDK 1.5+  | No Issues  | 


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