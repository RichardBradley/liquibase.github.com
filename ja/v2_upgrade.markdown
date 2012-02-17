====== 1.x から 2.0 のアップグレードガイド ======
FIXME
Liquibase 2.0 では、いくつかの互換性のない変更が導入されており、1.9 から 2.0 へのアップグレードで対応が必要となります。新しい問題や回避策を見つけた場合はこの wiki ページを更新してください。2.0 での新機能の一覧は、 [[v2_features|2.0 機能一覧]]を参照してください。

**This page will be updated regularly up to and beyond the 2.0 final release.**

===== チェックサムフォーマットの変更 =====
Liquibase は、DATABASECHANGELOG テーブルに実行された変更ごとのチェックサムを記録しています。それらのチェックサムは、過去に実行された変更が変更されていた場合に警告を出したり、runOnChange="true" に設定された変更セットに対応するために使われます。

これらのチェックサムを導出する方法が、2.0 で変更されました。既存のデータベースを最初に更新するときに、Liquibase は昔のフォーマットを検知し、新しいチェックサムの値に更新します。最初の実行の間、Liquibase は更新された変更セットや、runOnChangeの要求に対応できません。この動作について懸念がある場合、2.0で新しい変更ログを作成する前に、何も変更しない変更ログを実行するという方法があります。

===== XSD 定義の変更 =====

XSD 定義のフォーマットが変更されました。新しいフォーマットは以下のようになります:

    <databaseChangeLog
       xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd">


===== ModifyColumn タグの非推奨 =====

modifyColumn タグは非推奨となり、extension portal に移動されました。現在、modifyColumn を利用している場合は、新しい <modifyDataType> または、ほかの用途が限定されたコマンド (addPrimaryKeyConstraint など) を利用したり、[[http://liquibase.jira.com/wiki/display/CONTRIB/ModifyColumn+Change|modifyColumn library]] をクラスパスに追加したりすることを検討してください。

===== DATABASECHANGELOG テーブルに追加されたカラム =====

Liquibase 2.0 では自動的に3つのカラムをDATABASECHANGELOG テーブルに追加します:  Tag, OrderExecuted, そして ExecType.  Liquibase の旧バージョンはこのあたらしいバージョンと互換性がありません。これらのカラムのうち2つは NULL を許可しません。

===== Hibernate 統合の抽出 =====

The Hibernate integration has been moved to be a plugin rather than in the Liquibase core itself.  If you use the Liquibase hibernate support, you'll need to add the jar from [[http://liquibase.jira.com/wiki/display/CONTRIB/Hibernate+Integration|the hibernate extension]] to your classpath.


===== Diff パラメータ名称の変更 =====

混乱を避けるため、baseUrl、baseUsername などのdiffのために利用されていたパラメータは、referenceUrl、referenceUsername などに変更されました。

===== Maven Plugin =====

Maven プラグインの artifact 名が、org.liquibase : liquibase-plugin"から"org.liquibase : liquibase-maven-plugin"に変更されました。

===== Servlet Listener =====

  * LiquibaseServletListener のクラス名がいかに変更されました。 liquibase.integration.servlet.LiquibaseServletListener
  * コンテキストパラメータ名の変更:
    * LIQUIBASE_DATA_SOURCE -> liquibase.datasource
    * LIQUIBASE_CHANGELOG -> liquibase.changelog
    * LIQUIBASE_CONTEXTS -> liquibase.contexts
    * LIQUIBASE_DEFAULT_SCHEMA -> liquibase.schema.default
    * LIQUIBASE_HOST_INCLUDES -> liquibase.host.includes
    * LIQUIBASE_HOST_EXCLUDES -> liquibase.host.exludes
    * LIQUIBASE_FAIL_ON_ERROR-> liquibase.onerror.fail


===== Spring Integration =====

SpringLiquibase のクラス名が、liquibase.integration.spring.SpringLiquibase に変更されました。

===== そのほかパッケージとクラス名の変更 =====

Many other classes changed their packages and/or names significantly.  If you have more complex Liquibase integration and are not sure how to convert your code, post a question on the [[http://liquibase.org/forum|forum]]


===== MANIFEST.MF requirements for embedding =====

Liquibase expects a Liquibase-Package property in a MANIFEST.MF file.  If you are using the standard liquibase.jar you don't have to worry about it. But if you are embedding liquibase to the point of not including the standard MANIFEST.MF, make sure you add the following to your MANIFEST.MF

    Liquibase-Package: liquibase.change,
     liquibase.database,
     liquibase.parser,
     liquibase.precondition,
     liquibase.serializer,
     liquibase.sqlgenerator,
     liquibase.executor,
     liquibase.snapshot,
     liquibase.logging,
     liquibase.ext

