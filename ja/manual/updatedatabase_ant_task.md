===== updateDatabase Ant Task =====

データベースに対して未実行の変更を適用します。



==== 例 ====

<code xml>
<target name="update-database" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.file not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <updateDatabase
            changeLogFile="${db.changelog.file}"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            dropFirst="false"
            classpathref="classpath"
    />
    
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
^ promptOnNonLocalDatabase  | true に設定された場合 (デフォルトは false )、ローカルホスト以外のデータベースに対して LiquiBase を実行しようとしたときダイアログボックスで警告されます | 
^ dropFirst  | true に設定された場合、LiquiBase はまず接続しているユーザーが保持するすべてのデータベースオブジェクトを削除します。 [デフォルトは FALSE]  | 
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス  | 
^ contexts  | カンマで区切られたロールバック対象となる [[contexts]] のリスト。指定されない場合は、すべての context がロールバックされる  | 
^ currentDateTimeFunction  | SQL で利用される現在の日、時刻に関する関数を上書きします。LiquiBase が対応していないデータベースに対して有用  | 
^ databaseChangeLogTableName  | 利用する databasechangelog テーブル名を上書き  |
^ databaseChangeLogLockTableName  | 利用する databasechangeloglock テーブル名を上書き  |

==== 利用可能なサブタグ ====
^ changeLogProperty  |  [[changelog parameters]] 設定の組み合わせ //LiquiBase 1.7 より// | 

=== 利用可能な <changeLogProperty> パラメータ ===
^ name  | 設定するプロパティ名  | 
^ value  | 設定するプロパティ値  | 

