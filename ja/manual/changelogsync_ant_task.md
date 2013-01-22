===== changeLogSync Ant Task =====

すべての変更セットをデータベースに対して実行されたことにします。手動でデータベースを更新した場合に有効です。


==== 例 ====

<code xml>
<target name="sync-database" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.file not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <changeLogSync
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            >
    </changeLogSync>
</target>
</code>


==== 利用可能な属性 ====

^ changeLogFile  | 実行対象の変更ログファイル **[必須]**  | 
^ driver  | データベース接続に利用するドライバ名 |
^ url  | データベース URL **[必須]**  | 
^ username  | データベースに接続するユーザー名 **[必須]**  | 
^ password  | データベースに接続するパスワード **[必須]**  | 
^ defaultSchemaName  | データベースオブジェクトと LiquiBase 制御テーブルを管理するためにデフォルトで利用されるスキーマ名  |
^ outputFile  | 実行するのではなく、指定された位置に SQL を保存 **[必須]**  |
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス **[必須]**  | 
^ databaseChangeLogTableName  | 利用する databasechangelog テーブル名を上書き  // LiquiBase 1.9 から// |
^ databaseChangeLogLockTableName  | 利用する databasechangeloglock テーブル名を上書き // LiquiBase 1.9 から//  |

==== 利用可能なサブタグ ====
^ changeLogProperty  |  [[changelog parameters]] 設定の組み合わせ //LiquiBase 1.7 より// | 

=== 利用可能な <changeLogProperty> パラメータ ===
^ name  | 設定するプロパティ名  | 
^ value  | 設定するプロパティ値  | 


