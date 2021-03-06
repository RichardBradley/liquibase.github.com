===== diffDatabase Ant Task =====

2つのデータベース間の[[diff]] を出力します。

==== 例 ====

<code xml>
<target name="diff-database" depends="prepare">

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <diffDatabase
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"

            baseUrl="${database.url}"
            baseUsername="${database.username}"
            basePassword="${database.password}"

            outputFile="path/to/outputfile.txt"
            classpathref="classpath"
            >
    </diffDatabase>
</target>
</code>


==== Available Parameters ====

^ driver  | 接続に利用するデータベースドライバ名  | 
^ url  | データベースへの URL  | 
^ username  | 接続に利用するデータベースユーザー名  | 
^ password  | 接続に利用するデータベースユーザーのパスワード  | 
^ defaultSchemaName  | LiquiBase 制御テーブルと管理対象のテーブルのデフォルトスキーマ名 |
^ baseDriver  | 接続に利用するデータベースドライバ名  | 
^ baseUrl  | 比較元のデータベース URL  **[必須]**  | 
^ baseUsername  | 比較元のデータベースに接続するユーザー名 **[必須] ** |
^ basePassword  | 比較元のデータベースに接続するパスワード **[必須]**  | 
^ baseDefaultSchemaName  | データベースオブジェクトと LiquiBase 制御テーブルを管理するためにデフォルトで利用されるスキーマ名  |
^ outputFile  | 変更ログを保存するファイルの位置 **[必須]** |
^ classpathref  | データベースドライバ、liquibase.jar と changelog.xml ファイルへの参照パス  **[必須]** | 
^ databaseChangeLogTableName  | 利用する databasechangelog テーブル名を上書き  // LiquiBase 1.9 から// |
^ databaseChangeLogLockTableName  | 利用する databasechangeloglock テーブル名を上書き // LiquiBase 1.9 から//  |

==== 利用可能なサブタグ ====
^ changeLogProperty  |  [[changelog parameters]] 設定の組み合わせ //LiquiBase 1.7 より// | 

=== 利用可能な <changeLogProperty> パラメータ ===
^ name  | 設定するプロパティ名  | 
^ value  | 設定するプロパティ値  | 