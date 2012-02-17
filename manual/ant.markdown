====== LiquiBase Ant Tasks ======

LiquiBase can be controlled via ant Tasks. To use, simply add the liquibase.jar to your Ant lib directory or the classpath referenced by "classpathref".

<code xml>
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>
</code>

The following tasks are available in Ant
  * [[updateDatabase Ant Task|updateDatabase]]
  * [[rollbackDatabase Ant Task|rollbackDatabase]]
  * [[rollbackFutureDatabase Ant Task|rollbackFutureDatabase]]
  * [[tagDatabase Ant Task|tagDatabase ]]
  * [[generateChangeLog Ant Task|generateChangeLog ]]
  * [[diffDatabase Ant Task|diffDatabase ]]
  * [[diffDatabaseToChangeLog Ant Task|diffDatabaseToChangeLog ]]
  * [[dbDoc Ant Task|dbDoc ]]
  * [[changeLogSync Ant Task|changeLogSync ]]
  * [[dropAllDatabaseObjects Ant Task|dropAllDatabaseObjects ]]

Additional LiquiBase commands are supported by the [[command line]] that are not supported by the Ant tasks.


