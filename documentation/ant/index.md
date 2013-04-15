---
layout: default
title: Ant
---

# Liquibase Ant Tasks #

Liquibase can be controlled via ant Tasks. To use, simply add the liquibase.jar to your Ant lib directory or the classpath referenced by "classpathref".

{% highlight xml %}
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>
{% endhighlight %}

The following tasks are available in Ant
* [updateDatabase](updateDatabase_ant_task.html)
* [rollbackDatabase](rollbackDatabase_ant_task.html)
* [rollbackFutureDatabase](rollbackFutureDatabase_ant_task.html)
* [tagDatabase ](tagDatabase_ant_task.html)
* [generateChangeLog ](generateChangeLog_ant_task.html)
* [diffDatabase ](diffDatabase_ant_task.html)
* [diffDatabaseToChangeLog ](diffDatabaseToChangeLog_ant_task.html)
* [dbDoc ](dbDoc_ant_task.html)
* [changeLogSync ](changeLogSync_ant_task.html)
* [dropAllDatabaseObjects ](dropAllDatabaseObjects_ant_task.html)

Additional Liquibase commands are supported by the [command_line](../command_line.html) that are not supported by the Ant tasks.


