====== LiquiBase アーキテクチャ ======

LiquiBase migrator は、様々なビルドとデプロイメントプロセスに容易に統合でき、それらと依存性がないようにデザインされています。

LiquiBase のプライマリーワーカークラスは、[liquibase.migrator.Migrator](http://www.liquibase.org/api/liquibase/migrator/Migrator.html) です。あらゆる LiquiBase との協業する方法 ([コマンドライン](http://www.liquibase.org/api/liquibase/commandline/CommandLineFileOpener.html)、[Ant](http://www.liquibase.org/api/liquibase/ant/DatabaseMigratorTask.html) など) は、Liquibase クラスのまわりにある薄いラッパーです。

それぞれのデータベースへのリファクタリング/変更は、 [liquibase.change](http://www.liquibase.org/api/liquibase/change/package-summary.html)  パッケージのクラスとして実装されています。LiquiBase migrator が実行されると、SAX XML パーサーを利用して変更ログを解析し、必要な変更クラスをインスタンス化し、実行し、対応する SQL として保存します。

LiquiBase のアーキテクチャに質問がある場合は、 [メーリングリスト](../community) を利用してコンタクトしてください。
