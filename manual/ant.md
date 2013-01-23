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
  * [[updateDatabase_ant_task.html|updateDatabase]]
  * [[rollbackDatabase_ant_task.html|rollbackDatabase]]
  * [[rollbackFutureDatabase_ant_task.html|rollbackFutureDatabase]]
  * [[tagDatabase_ant_task.html|tagDatabase ]]
  * [[generateChangeLog_ant_task.html|generateChangeLog ]]
  * [[diffDatabase_ant_task.html|diffDatabase ]]
  * [[diffDatabaseToChangeLog_ant_task.html|diffDatabaseToChangeLog ]]
  * [[dbDoc_ant_task.html|dbDoc ]]
  * [[changeLogSync_ant_task.html|changeLogSync ]]
  * [[dropAllDatabaseObjects_ant_task.html|dropAllDatabaseObjects ]]

Additional LiquiBase commands are supported by the [[command_line.html]] that are not supported by the Ant tasks.


