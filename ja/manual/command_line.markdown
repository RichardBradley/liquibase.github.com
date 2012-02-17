====== LiquiBase コマンドライン ======


LiquiBase は、下記のように実行することで、コマンドラインから実行できます。
**liquibase [オプション] [コマンド]** (または、liquibase コマンドをjava -jar <liquibase-jar へのパス> で置き換えることもできます)。コマンドライン migrator は、必要に応じて移行したいが、Ant や Maven などがサーバーにない場合に適しています。 コマンドライン migrator は、[[Servlet Listener | サーブレットリスナー]], [[Ant]], または [[Maven]] よりも多様な制御ができます。たとえば、メンテナンスコマンドを実行して SQL を出力したり、データベースの変更ログのロックを出力したり、解放したりできます。

コマンドライン migrator よって下記のことが可能です

  * [[rollback| 変更の取り消しを行ったり、取り消しのためのスクリプトを生成する]]
  * [[diff| "diff" を生成する]]
  * [[generating changelogs| 存在するデータベースからデータベース作成のスクリプトを生成する]]
  * [[dbdoc|データベースの変更履歴ドキュメントを出力する]]

コマンドライン migrator を引数なしで実行すると、利用可能なパラメータとともにヘルプメッセージが表示されます:



===== データベース更新コマンド =====

^ update  | データベースの状態を最新に更新する  | 
^ updateCount <数値>  | 次の <数値>文の変更セットを適用する |
^ updateSQL  | データベースの状態を最新に更新する SQL を標準出力する  | 
^ updateCountSQL <数値>  | 次の <数値>文の変更セットを適用する SQL を標準出力する  | 



===== データベースロールバックコマンド =====

^ rollback <タグ>  | タグが適用された地点までデータベースの状態をロールバックする  | 
^ rollbackToDate <日/時刻>  | 指定された日/時刻までデータベースの状態をロールバックする  | 
^ rollbackCount <数値>  | 最新の <数値> ぶん変更をロールバックする  | 
^ rollbackSQL <タグ>  | タグが適用された地点までデータベースの状態をロールバックするSQL を標準出力する  | 
^ rollbackToDateSQL <日/時刻e>  | 指定された日/時刻までデータベースの状態をロールバックする SQL を標準出力する  | 
^ rollbackCountSQL <数値>  | 最新の <数値> ぶん変更をロールバックする SQL を標準出力する  | 
^ futureRollbackSQL  | 変更ログが適用された後に、現在の状態にまでデータベースの状態を戻す SQL を出力する  | 
^ generateChangeLog  | 標準出力に、データベースの変更ログを出力する。1.8 では、dataDir パラメータ設定が必要   | 

===== Diff コマンド =====

^ diff [diff パラメータ]  | 差分を標準出力に出力します |
^ diffChangeLog [diff パラメータ]  | 元のデータベースを対象のデータベースに更新するための XML 変更ログを出力します  | 


===== ドキュメンテーションコマンド =====

^ dbDoc <出力先ディレクトリ>  |  現在のデータベースに基づいた変更ログを、Javadoc のような形式でドキュメント出力します  |






===== メンテナンスコマンド =====

^ tag <tag> | 将来のロールバックに備えて現在のデータベースの状態に'タグ'を打ちます | 
^ status  | まだ実行されていない変更セットの数を出力 (--verbose をつけるとそのリスト ) を出力します  | 
^ validate  | 変更ログのエラーの有無をチェックします  | 
^ changelogSync  | 全ての変更がデータベースで実行されたことに変更します  | 
^ changelogSyncSQL  | 全ての変更がデータベースで実行されたことに変更するための SQL を標準出力します | 
^ markNextChangeSetRan | 次の変更セットをデータベースで実行されたことにします  | 
^ listLocks  | データベースの変更ログを誰がロックしているのかを表示します | 
^ releaseLocks  | データベースの変更ログへのロックを解放します | 
^ dropAll  | そのユーザーが保持しているすべてのデータベースオブジェクトを削除します。この機能で、ファンクション、プロシージャ、そしてパッケージは削除されません (1.8.1 での制限事項)   | 
^ clearCheckSums  | データベースから現行のチェックサムを削除します。次の実行時にチェックサムは再計算されます。  | 

===== 必須パラメータ =====

^ --changeLogFile=<パスとファイル名>  | 利用する変更ログファイル名  | 
^ --username=<value>  | データベースユーザー名  | 
^ --password=<value>  | データベースパスワード  | 
^ --url=<value>  | データベース URL  | 
^ --driver=<jdbc.driver.ClassName>  | データベースドライバクラス名  | 


===== 必須の Diff パラメータ =====

^ --referenceUsername=<value>  | 比較元のデータベースユーザー名  | 
^ --referencePassword=<value>  | 比較元のデータベースユーザーパスワード  | 
^ --referenceUrl=<value>  | 比較元データベースURL  | 


===== オプションパラメータ =====

^ --classpath=<値>  | 移行ファイルと JDBC ドライバを含むクラスパス | 
^ --contexts=<値>  | 実行する変更セットコンテキスト  | 
^ --defaultSchemaName=<schema>  | 管理対象とするデータベースオブジェクトと LiquiBase コントロールテーブルのデフォルトスキーマを設定 |
^ --databaseClass=<custom.DatabaseImpl>  | カスタム [[http://www.liquibase.org/api/liquibase/database/Database.html|データベース]] 実装を利用する場合に指定  |
^ --defaultsFile=<ファイルへのパス>  | デフォルトのオプション設定値を含むファイル名 (デフォルト: ./liquibase.properties)  | 
^ --includeSystemClasspath=<true または false>  | LiquiBase クラスパスにシステムクラスパスを含むかどうか (デフォルト: true)  | 
^ --promptForNonLocalDatabase=<true または false>  | ローカルホストではないホストで稼働しているデータベースの場合にプロンプトを出力するかどうか (デフォルト: false)  | 
^ --currentDateTimeFunction=<値>  | SQL で使用されている現在の日時を出力する関数を上書きするかどうか。LiquiBase が対応していないデータベースで有用 | 
^ --logLevel=<level>  | 実行時のログレベル (debug, info, warning, severe, off)  | 
^ --help  | コマンドラインパラメータを出力するヘルプ  | 
^ --exportDataDir  | Insert 文の書かれた CSV ファイルが保存されるディレクトリ名 (generateChangeLog コマンドにより必要) | 

===== 必須 Diff パラメータ =====

^ --baseUsername=<値>  | 比較元のデータベースユーザー名 | 
^ --basePassword=<値>  | 比較元のデータベースユーザーパスワード  | 
^ --baseUrl=<値>  | 比較元のデータベース URL  | 


===== オプション Diff パラメータ =====

^ --baseDriver=<jdbc.driver.ClassName>  | 比較元のデータベースドライバーのクラス名 |


===== liquibase.properties ファイルの使用方法 =====

コマンドラインで毎回オプションを指定したくない場合、デフォルト値を含むプロパティファイルを作成することができます。デフォルトでは、 LiquiBase は、"liquibase.properties" というファイル名をカレントのディレクトリにないか探しますが、--defaultsFile フラグを利用することで、ほかの場所を指定できます。同じオプションをプロパティファイルとコマンドラインで指定した場合、コマンドラインの設定がファイルの値よりも優先されて使用されます。

===== 例 =====


==== 通常の Migrator 実行 ====

<code>
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=\path\to\classes:jdbcdriver.jar \
      --changeLogFile=com/example/db.changelog.xml \
      --url="jdbc:oracle:thin:@localhost:1521:oracle" \
      --username=scott \
      --password=tiger \
      update
</code>



==== 変更ログを WAR ファイルから抽出して migrator を実行する ====

<code>
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=website.war \
      --changeLogFile=com/example/db.changelog.xml \
      --url=jdbc:oracle:thin:@localhost:1521:oracle \
      --username=scott \
      --password=tiger \
      update
</code>


==== 変更ログを EAR ファイルから抽出して migrator を実行する ====

<code>
java -jar liquibase.jar \
      --driver=oracle.jdbc.OracleDriver \
      --classpath=application.ear \
      --changeLogFile=com/example/db.changelog.xml \
      --url=jdbc:oracle:thin:@localhost:1521:oracle \
      --username=scott \
      --password=tiger
</code>




==== 変更セットを実行せず、/tmp/migrate.sql に SQL を保存する ====

<code>
java -jar liquibase.jar \
        --driver=oracle.jdbc.OracleDriver \
        --classpath=jdbcdriver.jar \
        --url=jdbc:oracle:thin:@localhost:1521:oracle \
        --username=scott \
        --password=tiger \
        updateSQL > /tmp/script.sql
</code>


==== 変更ログへのロック状況を表示する ====
<code>
java -jar liquibase.jar \
        --driver=oracle.jdbc.OracleDriver \
        --classpath=jdbcdriver.jar \
        --url=jdbc:oracle:thin:@localhost:1521:oracle \
        --username=scott \
        --password=tiger \
        listLocks
</code>



==== LiquiBase を設定値を ./liquibase.properties に記述して実行する ====

<code>
java -jar liquibase.jar update
</code>

<code>
#liquibase.properties
driver: oracle.jdbc.OracleDriver
classpath: jdbcdriver.jar
url: jdbc:oracle:thin:@localhost:1521:oracle
username: scott
password: tiger
</code>

==== データベースからのデータの抽出 ====
このコマンドを実行すると、対象のデータベースからデータを抽出し、"data"フォルダに、<ファイル名>で指定されたファイルとして保存されます。

<code>
java -jar liquibase.jar --changeLogFile="./data/<ファイル名> " --diffTypes="data" generateChangeLog
</code>

==== Update passing changelog parameters ====
<code>
liquibase.bat update -Dengine=myisam
</code>