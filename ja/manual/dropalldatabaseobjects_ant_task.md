===== dropAllDatabaseObjects Ant Task =====

データベースに適用されていない変更を適用します。注意 ファンクション、プロシージャ、そしてパッケージは削除されません (limitation in 1.8.1)。



==== 例 ====

<code xml>
<target name="dropAll" depends="prepare">
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <dropAllDatabaseObjects 
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            classpathref="classpath"
            >
    </dropAllDatabaseObjects >
</target>
</code>

==== 利用可能な属性 ====

^ driver  | データベース接続に利用するドライバ名 |
^ url  | データベース URL **[必須]**  | 
^ username  | データベースに接続するユーザー名 **[必須]**  | 
^ password  | データベースに接続するパスワード **[必須]**  | 
^ defaultSchemaName  | LiquiBase 制御テーブルと管理対象のテーブルのデフォルトスキーマ名 |
^ outputFile  | 生成された変更ログファイルを保存するファイル名 **[必須]**  | 
^ promptOnNonLocalDatabase  | true に設定すると、(デフォルト値は false) ローカルホストにないデータベースに対して LiquiBase を実行しようとするときに警告のダイアログが表示されます | 
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス **[必須]**  | 

==== 利用可能なサブタグ ====
^ changeLogProperty  |  [[changelog parameters]] 設定の組み合わせ //LiquiBase 1.7 より// | 

=== 利用可能な <changeLogProperty> パラメータ ===
^ name  | 設定するプロパティ名  | 
^ value  | 設定するプロパティ値  | 

