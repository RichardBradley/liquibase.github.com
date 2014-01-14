---
layout: default
title: Ant
subnav: subnav_documentation.md
---

# Liquibase Ant Tasks #

Liquibase can be controlled via ant Tasks. To use, simply add the liquibase.jar to your Ant lib directory or the classpath referenced by "classpathref".

{% highlight xml %}
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>
{% endhighlight %}

The following tasks are available in Ant:

* [updateDatabase](updatedatabase_ant_task.html)
* [rollbackDatabase](rollbackdatabase_ant_task.html)
* [rollbackFutureDatabase](rollbackfuturedatabase_ant_task.html)
* [tagDatabase ](tagdatabase_ant_task.html)
* [generateChangeLog ](generatechangelog_ant_task.html)
* [diffDatabase ](diffdatabase_ant_task.html)
* [diffDatabaseToChangeLog ](diffdatabasetochangelog_ant_task.html)
* [dbDoc ](dbdoc_ant_task.html)
* [changeLogSync ](changelogsync_ant_task.html)
* [dropAllDatabaseObjects ](dropalldatabaseobjects_ant_task.html)

Additional Liquibase commands are supported by the [command_line](../command_line.html) that are not supported by the Ant tasks.


