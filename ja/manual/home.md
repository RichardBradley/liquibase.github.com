====== Liquibase マニュアル ======



===== 概要 =====
  * [ 概要](Overview )


===== 変更ログの生成 =====
  * <[Hibernate Integration](DatabaseChangeLog]]>
  * <[[ChangeSet]]>
  * <[[Include]]>
  * <[[IncludeAll]]>
  * <[[Preconditions]]>
  * [[Contexts]]
  * [[ChangeLog Parameters]]
  * [[Hibernate)
  * [ データベースの更新](Formatted SQL Changelogs]]



===== Liquibase の機能 =====
  * [[Update )
  * [ データベースのロールバック](Rollback )
  * [ データベースの "差分(Diff)"](Diff )
  * [変更ログの生成](generating_changelogs)
  * [ データベースドキュメント生成](DBDoc )
  * [ SQL アウトプット](SQL Output )

===== Liquibase の実行 =====
  * [ サーブレットリスナー](Ant]]
  * [[Maven]]
  * [[Spring]]
  * [[Grails]]
  * [[Servlet Listener )
  * [ コマンドライン](Command Line )


===== リファクタリング =====


==== 構造のリファクタリング ====
  * [ カラムの追加](Add Column )
  * [ カラムの名称変更](Rename Column )
  * [ カラムの変更](Modify Column )
  * [ カラムの削除](Drop Column )
  * [ シーケンスの変更](Alter Sequence )
  * [ テーブルの作成](Create Table )
  * [ テーブルの名称変更](Rename Table )
  * [ テーブルの削除](Drop Table )
  * [ ビューの作成](Create View )
  * [ ビューの名称変更](Rename View )
  * [ ビューの削除](Drop View )
  * [ カラムの統合](Merge Columns )
  * [ ストアドプロシージャの作成](Create Stored Procedure )




==== データ品質に関するリファクタリング ====
  * [ 参照テーブルと外部キー制約の追加](Add Lookup Table )
  * [ Not Null 制約の追加](Add Not-Null Constraint )
  * [ Not Null 制約の削除](Remove Not-Null Constraint )
  * [ 一意制約の追加](Add Unique Constraint )
  * [ 一意制約の削除](Drop Unique Constraint )
  * [ シーケンスの作成](Create Sequence )
  * [ シーケンスの削除](Drop Sequence )
  * [ Auto increment の追加](Add Auto-Increment )
  * [ デフォルト値の追加](Add Default Value )
  * [ デフォルト値の削除](Drop Default Value )


==== 参照整合性のリファクタリング ====
  * [ 外部キー制約の追加](Add Foreign Key Constraint )
  * [ 外部キー制約の削除](Drop Foreign Key Constraint )
  * [ すべての外部キー制約の削除](Drop All Foreign Key Constraints )
  * [ 主キー制約の追加](Add Primary Key Constraint )
  * [ 主キー制約の削除](Drop Primary Key Constraint )



==== リファクタリングではない変更 ====
  * [ データのインサート](Insert Data )
  * [ データのロード](Load Data )
  * [ データの更新とインサート](Load Update Data )
  * [ データの更新 ](Update Data )
  * [ データの削除 ](Delete Data )
  * [ データベースのタグ付け](Tag Database )
  * [ データベースの停止](stop )


==== データベース構造のリファクタリング ====
  * [ インデックスの作成](Create Index )
  * [ インデックスの削除](Drop Index )


==== カスタムリファクタリング ====
  * [ カスタム SQL ](Custom SQL )
  * [ カスタム SQL ファイル](Custom SQL File )
  * [ カスタムリファクタリングクラス](Custom Refactoring Class )
  * [ シェルコマンドの実行](Execute Shell Command )



===== 変更ログのサンプル =====
  * [MySQL](http://www.liquibase.org/samples/changelogs/mysql.changelog.xml)
  * [PostgreSQL](http://www.liquibase.org/samples/changelogs/pgsql.changelog.xml)
  * [Oracle](http://www.liquibase.org/samples/changelogs/oracle.changelog.xml)
  * [MS SQL](http://www.liquibase.org/samples/changelogs/mssql.changelog.xml)
  * [DB2](http://www.liquibase.org/samples/changelogs/db2.changelog.xml)
  * [Derby](http://www.liquibase.org/samples/changelogs/derby.changelog.xml)
  * [HSQL](http://www.liquibase.org/samples/changelogs/hsql.changelog.xml)


===== Liquibase の開発 =====
  * [ Liquibase の開発概要](Development Overview )
  * [ アーキテクチャ](Architecture )
  * [API (Javadoc)](http://www.liquibase.org/manual/latest/api/index.html)
  * [API (Doxygen)](http://www.liquibase.org/manual/latest/doxygen/html/index.html)