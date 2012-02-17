===== markNextChangeSetRan Ant Task =====

次の変更をすでに実行されたものとしてマークします。変更が手動でなされており、更新が失敗してしまう状況で有効です。

==== 例 ====

<code xml>
<target name="markNextChangeSetRan" depends="prepare">
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <markNextChangeSetRan
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            dropFirst="false"
            classpathref="classpath"
            changeLog="${changelog.file}"
            >
    </markNextChangeSetRan>
</target>
</code>

==== 利用可能な属性 ====

^ driver  | 接続に利用するデータベースドライバ名  **[必須]** | 
^ url  | データベースへの URL **[必須]**   | 
^ username  | 接続に利用するデータベースユーザー名**[必須]**   | 
^ password  | 接続に利用するデータベースユーザーのパスワード **[必須]**  | 
^ changeLog | 実行対象の変更ログファイル **[必須]**  | 
^ defaultSchemaName  | LiquiBase 制御テーブルと管理対象のテーブルのデフォルトスキーマ名 |
^ outputFile  | 変更ログを保存するファイルの位置 |
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス  **[必須]** | 