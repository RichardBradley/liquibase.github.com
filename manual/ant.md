---
layout: default
title: Ant
---

# LiquiBase Ant Tasks #

LiquiBase can be controlled via ant Tasks. To use, simply add the liquibase.jar to your Ant lib directory or the classpath referenced by "classpathref".

<code xml>
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>
</code>

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

Additional LiquiBase commands are supported by the [command_line](command_line.html) that are not supported by the Ant tasks.


