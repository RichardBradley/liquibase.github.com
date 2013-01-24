====== LiquiBase Ant タスク ======

LiquiBase は Ant タスクによっても制御できます。利用するには、liquibase.jar を Ant の lib ディレクトリに配置するか、"classpathref" によって参照されるクラスパスにするかだけです。

<code xml>
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>
</code>

下記のタスクが Ant から利用可能です。

  * [データベースへの更新](updateDatabase Ant Task)
  * [データベースへのロールバック](rollbackDatabase Ant Task)
  * [将来の変更のロールバック](rollbackFutureDatabase Ant Task)
  * [データベースにタグを打つ ](tagDatabase Ant Task)
  * [変更ログの生成 ](generateChangeLog Ant Task)
  * [データベースの diff ](diffDatabase Ant Task)
  * [データベースの差分を変更ログに出力 ](diffDatabaseToChangeLog Ant Task)
  * [dbDoc ](dbDoc Ant Task)
  * [変更ログの同期 ](changeLogSync Ant Task)
  * [すべてのデータベースオブジェクトの削除 ](dropAllDatabaseObjects Ant Task)

[ コマンドライン ](command line ) でサポートされている追加の LiquiBase コマンドは、Ant タスクでは対応していません。