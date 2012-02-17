===== rollbackDatabase Ant Task =====

データベースへの変更をロールバックします。詳細は [[rollback | ロールバック ]] を参照。



==== 例 ====

<code xml>
<target name="rollback-database" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.files not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>

    <rollbackDatabase
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            rollbackTag="release1.2"
            >
    </migrateDatabase>
</target>
</code>


==== 利用可能な属性 ====

^ changeLogFile  | 実行する変更ログファイル名  | 
^ driver  | 接続に利用するデータベースドライバ名  | 
^ url  | データベースへの URL  | 
^ username  | 接続に利用するデータベースユーザー名  | 
^ password  | 接続に利用するデータベースユーザーのパスワード  | 
^ defaultSchemaName  | LiquiBase 制御テーブルと管理対象のテーブルのデフォルトスキーマ名 |
^ outputFile  | SQL を直接実行するのではなく、ファイルに出力する  |
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス  | 
^ rollbackTag  | ロールバック先となるタグ  | 
^ rollbackDate  | ロールバック先となる日付 | 
^ rollbackCount  | ロールバックする変更セット数  | 
^ contexts  | カンマで区切られたロールバック対象となる [[contexts]] のリスト。指定されない場合は、すべての context がロールバックされる  | 
^ databaseChangeLogTableName  | 利用する databasechangelog テーブル名を上書き  // LiquiBase 1.9 から// |
^ databaseChangeLogLockTableName  | 利用する databasechangeloglock テーブル名を上書き // LiquiBase 1.9 から//  |

==== 利用可能なサブタグ ====
^ changeLogProperty  |  [[changelog parameters]] 設定の組み合わせ //LiquiBase 1.7 より// | 

=== 利用可能な <changeLogProperty> パラメータ ===
^ name  | 設定するプロパティ名  | 
^ value  | 設定するプロパティ値  | 
