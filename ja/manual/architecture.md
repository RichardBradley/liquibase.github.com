====== LiquiBase アーキテクチャ ======

LiquiBase migrator は、様々なビルドとデプロイメントプロセスに容易に統合でき、それらと依存性がないようにデザインされています。

LiquiBase のプライマリーワーカークラスは、[[http://www.liquibase.org/api/liquibase/migrator/Migrator.html|liquibase.migrator.Migrator]] です。あらゆる LiquiBase との協業する方法 ([[http://www.liquibase.org/api/liquibase/commandline/CommandLineFileOpener.html|コマンドライン]]、[[http://www.liquibase.org/api/liquibase/ant/DatabaseMigratorTask.html|Ant]] など) は、Liquibase クラスのまわりにある薄いラッパーです。

それぞれのデータベースへのリファクタリング/変更は、 [[http://www.liquibase.org/api/liquibase/change/package-summary.html|liquibase.change]]  パッケージのクラスとして実装されています。LiquiBase migrator が実行されると、SAX XML パーサーを利用して変更ログを解析し、必要な変更クラスをインスタンス化し、実行し、対応する SQL として保存します。

LiquiBase のアーキテクチャに質問がある場合は、 [[../community|メーリングリスト]] を利用してコンタクトしてください。
