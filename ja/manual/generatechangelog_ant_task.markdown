===== generateChangeLog Ant Task =====

現存するデータベースを再作成するための[[generating changelogs|変更ログを生成]] 


==== 例 ====

<code xml>
<target name="generateChangelog" depends="prepare">
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
    </taskdef>

    <generateChangeLog
            outputFile="path/to/output.xml"
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            />
</target>
</code>


==== 利用可能な属性 ====

^ outputFile  | 生成された変更ログファイルを保存するファイル名 **[必須]**  | 
^ driver  | 接続に利用するデータベースドライバ名  | 
^ url  | データベースへの URL **[必須]**   | 
^ username  | 接続に利用するデータベースユーザー名 **[必須]**  | 
^ password  | 接続に利用するデータベースユーザーのパスワード **[必須]**  | 
^ defaultSchemaName  | LiquiBase 制御テーブルと管理対象のテーブルのデフォルトスキーマ名 |
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス  **[必須]** | 
^ currentDateTimeFunction  | SQL で利用される現在の日、時刻に関する関数を上書きします。LiquiBase が対応していないデータベースに対して有用  | 
^ databaseChangeLogTableName  | 利用する databasechangelog テーブル名を上書き  // LiquiBase 1.9 から// |
^ databaseChangeLogLockTableName  | 利用する databasechangeloglock テーブル名を上書き // LiquiBase 1.9 から//  |

==== 利用可能なサブタグ ====
^ changeLogProperty  |  [[changelog parameters]] 設定の組み合わせ //LiquiBase 1.7 より// | 

=== 利用可能な <changeLogProperty> パラメータ ===
^ name  | 設定するプロパティ名  | 
^ value  | 設定するプロパティ値  | 


