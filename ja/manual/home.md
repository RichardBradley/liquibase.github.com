====== Liquibase マニュアル ======



===== 概要 =====
  * [[Overview | 概要]]


===== 変更ログの生成 =====
  * <[[DatabaseChangeLog]]>
  * <[[ChangeSet]]>
  * <[[Include]]>
  * <[[IncludeAll]]>
  * <[[Preconditions]]>
  * [[Contexts]]
  * [[ChangeLog Parameters]]
  * [[Hibernate|Hibernate Integration]]
  * [[Formatted SQL Changelogs]]



===== Liquibase の機能 =====
  * [[Update | データベースの更新]]
  * [[Rollback | データベースのロールバック]]
  * [[Diff | データベースの "差分(Diff)"]]
  * [[generating_changelogs|変更ログの生成]]
  * [[DBDoc | データベースドキュメント生成]]
  * [[SQL Output | SQL アウトプット]]

===== Liquibase の実行 =====
  * [[Ant]]
  * [[Maven]]
  * [[Spring]]
  * [[Grails]]
  * [[Servlet Listener | サーブレットリスナー]]
  * [[Command Line | コマンドライン]]


===== リファクタリング =====


==== 構造のリファクタリング ====
  * [[Add Column | カラムの追加]]
  * [[Rename Column | カラムの名称変更]]
  * [[Modify Column | カラムの変更]]
  * [[Drop Column | カラムの削除]]
  * [[Alter Sequence | シーケンスの変更]]
  * [[Create Table | テーブルの作成]]
  * [[Rename Table | テーブルの名称変更]]
  * [[Drop Table | テーブルの削除]]
  * [[Create View | ビューの作成]]
  * [[Rename View | ビューの名称変更]]
  * [[Drop View | ビューの削除]]
  * [[Merge Columns | カラムの統合]]
  * [[Create Stored Procedure | ストアドプロシージャの作成]]




==== データ品質に関するリファクタリング ====
  * [[Add Lookup Table | 参照テーブルと外部キー制約の追加]]
  * [[Add Not-Null Constraint | Not Null 制約の追加]]
  * [[Remove Not-Null Constraint | Not Null 制約の削除]]
  * [[Add Unique Constraint | 一意制約の追加]]
  * [[Drop Unique Constraint | 一意制約の削除]]
  * [[Create Sequence | シーケンスの作成]]
  * [[Drop Sequence | シーケンスの削除]]
  * [[Add Auto-Increment | Auto increment の追加]]
  * [[Add Default Value | デフォルト値の追加]]
  * [[Drop Default Value | デフォルト値の削除]]


==== 参照整合性のリファクタリング ====
  * [[Add Foreign Key Constraint | 外部キー制約の追加]]
  * [[Drop Foreign Key Constraint | 外部キー制約の削除]]
  * [[Drop All Foreign Key Constraints | すべての外部キー制約の削除]]
  * [[Add Primary Key Constraint | 主キー制約の追加]]
  * [[Drop Primary Key Constraint | 主キー制約の削除]]



==== リファクタリングではない変更 ====
  * [[Insert Data | データのインサート]]
  * [[Load Data | データのロード]]
  * [[Load Update Data | データの更新とインサート]]
  * [[Update Data | データの更新 ]]
  * [[Delete Data | データの削除 ]]
  * [[Tag Database | データベースのタグ付け]]
  * [[stop | データベースの停止]]


==== データベース構造のリファクタリング ====
  * [[Create Index | インデックスの作成]]
  * [[Drop Index | インデックスの削除]]


==== カスタムリファクタリング ====
  * [[Custom SQL | カスタム SQL ]]
  * [[Custom SQL File | カスタム SQL ファイル]]
  * [[Custom Refactoring Class | カスタムリファクタリングクラス]]
  * [[Execute Shell Command | シェルコマンドの実行]]



===== 変更ログのサンプル =====
  * [[http://www.liquibase.org/samples/changelogs/mysql.changelog.xml|MySQL]]
  * [[http://www.liquibase.org/samples/changelogs/pgsql.changelog.xml|PostgreSQL]]
  * [[http://www.liquibase.org/samples/changelogs/oracle.changelog.xml|Oracle]]
  * [[http://www.liquibase.org/samples/changelogs/mssql.changelog.xml|MS SQL]]
  * [[http://www.liquibase.org/samples/changelogs/db2.changelog.xml|DB2]]
  * [[http://www.liquibase.org/samples/changelogs/derby.changelog.xml|Derby]]
  * [[http://www.liquibase.org/samples/changelogs/hsql.changelog.xml|HSQL]]


===== Liquibase の開発 =====
  * [[Development Overview | Liquibase の開発概要]]
  * [[Architecture | アーキテクチャ]]
  * [[http://www.liquibase.org/manual/latest/api/index.html|API (Javadoc)]]
  * [[http://www.liquibase.org/manual/latest/doxygen/html/index.html|API (Doxygen)]]