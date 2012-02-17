====== LiquiBase Ant タスク ======

LiquiBase は Ant タスクによっても制御できます。利用するには、liquibase.jar を Ant の lib ディレクトリに配置するか、"classpathref" によって参照されるクラスパスにするかだけです。

<code xml>
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>
</code>

下記のタスクが Ant から利用可能です。

  * [[updateDatabase Ant Task|データベースへの更新]]
  * [[rollbackDatabase Ant Task|データベースへのロールバック]]
  * [[rollbackFutureDatabase Ant Task|将来の変更のロールバック]]
  * [[tagDatabase Ant Task|データベースにタグを打つ ]]
  * [[generateChangeLog Ant Task|変更ログの生成 ]]
  * [[diffDatabase Ant Task|データベースの diff ]]
  * [[diffDatabaseToChangeLog Ant Task|データベースの差分を変更ログに出力 ]]
  * [[dbDoc Ant Task|dbDoc ]]
  * [[changeLogSync Ant Task|変更ログの同期 ]]
  * [[dropAllDatabaseObjects Ant Task|すべてのデータベースオブジェクトの削除 ]]

[[command line | コマンドライン ]] でサポートされている追加の LiquiBase コマンドは、Ant タスクでは対応していません。