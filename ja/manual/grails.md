====== LiquiBase と Grails 統合 ======

LiquiBase は、 [Grails](http://grails.codehaus.org/) プラグインとして利用できます。インストールは、grails で、install-plugin liquibase を実行し、[変更ログ XML ファイル](databasechangelog) をgrails-app/migrations/changelog.xml に作成するだけです。

LiquiBase プラグインをインストールするには、プロジェクトフォルダーで、以下のコマンドを実行します:
''grails install-plugin liquibase''

どのコマンドでも、単純に '' grails <コマンド名>'' をプロジェクトのルートフォルダで実行すればよいです。

===== XML 以外に変更ログ方法を書く方法は?=====

今のところありませんが、XML に代わる LiquiBase 独自の言語に取り組んでいます。XML がほんとうに苦手なら、 [LiquiBase IDE か Eclipse プラグイン](../ide/home) もよい選択でしょう。




===== 更新/取り消しコマンド =====

^ migrate  | データベースを最新バージョンに更新  | 
^ migrate-sql  | データベースを最新に更新する SQL を標準出力に出力  | 
^ migrate-count <数値> | データベースに指定された数値分の変更を適用  | 
^ migrate-count-sql <数値>  | データベースに指定された数値分の変更を適用する SQL を標準出力に出力  | 
^ rollback <tag>  | タグが適用されたところまでデータベースの状態をロールバック | 
^ rollback-sql <tag>  | タグが適用されたところまでデータベースの状態をロールバックする SQL を標準出力に出力 | 
^ rollback-count <数値>  | 最近の <数値> に指定された数値分、データベースの変更をロールバック | 
^ rollback-count-sql <数値>  | 最近の <数値> に指定された数値分、データベースの変更をロールバックする SQL を標準出力に出力  | 
^ rollback-to-date <日時>  | 指定された日時までデータベースをロールバック。日付フォーマット: yyyy-MM-dd HH:mm:ss  | 
^ rollback-to-date-sql <日時>  | 指定された日時までデータベースをロールバックする SQL を標準出力に出力 | 
^ future-rollback-sql  | 変更ログに記述された変更を適用した後、変更前の状態にまで戻すSQLを出力  | 


===== そのほかのコマンド =====

^ db-doc  | 現在のデータベースと変更ログに基づいて、Javadocのようなドキュメントを生成  | 
^ generate-changelog  | 現在のデータベースの状況を複製できる変更ログを標準出力に出力 | 


===== メンテナンスのコマンド =====

^ tag  | 'Tags' 将来起こりうるロールバックに備えて現在の状態に 'タグ' をうつ  | 
^ changelog-sync-sql  | データベースに対して実行されたすべての変更をおこなうための SQL を標準出力に出力  | 
^ clear-checksums  | データベースログに保存されたすべてのチェックサムを削除。'MD5Sum Check Failed'エラー対応に有益 | 
^ drop-all  | そのユーザーが保持するすべてのデータベースオブジェクトを削除  | 
^ list-locks  | データベースオブジェクトの変更ログをロックしているユーザーをリスト  | 
^ release-locks  | データベース変更ログへのすべてのロックを解放  | 
^ status  | まだ実行されていない変更セットを出力  | 
^ validate-changelog  | 変更ログにエラーがないか確認  | 
^ db-diff | Generate changeSet(s) to make Test DB match Development |

===== バージョン名の付け方 =====


Grails プラグインは、LiquiBase core のバージョンに従ってつけられています。たとえば、Grails プラグインのバージョンが "1.3.2.0" なら、LiquiBase 1.3.2  に対応した最初の Grails プラグインということです。LiquiBase ではなく、Grails プラグインにパッチがある場合、バージョンは、"1.3.2.1" になります。
