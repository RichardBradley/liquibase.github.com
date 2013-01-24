====== データベースの "差分(Diff)" ======

データベースの変更を記録するためのもっとも良い方法は、変更セットを開発期間から作成することですが、(参照 [the problem with database diffs](http://blog.liquibase.org/2007/06/the-problem-with-database-diffs.html))、 データベースの差分の取得に価値があることもあります、とくにプロジェクトの後半で必要な変更が変更ログに含まれていることを確認するために、ダブルチェックをすることなどがあります。



=====  Diff の実行 =====

Diff コマンドは、[ コマンドライン](command line ) と [[ant]] に対応しています。 データベースの差分を取得するときは、通常 LiquiBase を利用するように(--url, --username, などのフラグ) を指定して、比較元のデータベースにもコマンドラインの後に追加のフラグを用意します。

===== 実行例 =====

<code>
liqubase.sh --driver=oracle.jdbc.OracleDriver \
        --url=jdbc:oracle:thin:@testdb:1521:test \
        --username=bob \
        --password=bob \
    diff \
        --referenceUrl=jdbc:oracle:thin:@localhost/XE \
        --referenceUsername=bob \
        --referencePassword=bob
</code>





===== データベースの比較項目 =====

現在、LiquiBase は下記の比較を実施します:

  * バージョンの差分
  * 存在しない/予期されないテーブル
  * 存在しない/予期されないビュー
  * 存在しない/予期されないカラム
  * 存在しない/予期されない主キー
  * 存在しない/予期されない一意キー
  * 存在しない/予期されない外部キー
  * 存在しない/予期されない順序
  * 存在しない/予期されない索引
  * 列定義の差分 (データ型やauto-increment など)
  * ビュー定義の差分
  * データの差分 (限定的) デフォルトではチェックされません

これらは(今のところ)チェックしていません

  * 外部キー以外の制約(チェック制約、そのほか）
  * ストアドプロシージャ
  * 列定義の幅

LiquiBase は、データ型の差分を抽出できますが、結果は 大文字小文字やデータ型の違いにより正しくないかもしれません。




===== 比較項目の制御 ( 1.8 より) =====
 どの変更を比較するかは、diff コマンドの、diffTypes パラメータで制御します。以下のオプションが利用でき、複数の場合はカンマで分割します:
  * テーブル //[デフォルト]//
  * カラム //[デフォルト]//
  * ビュー //[デフォルト]//
  * 主キー //[デフォルト]//
  * インデックス //[デフォルト]//
  * 外部キー //[デフォルト]//
  * シーケンス //[デフォルト]//
  * データ

diffTypes が指定されない場合は、デフォルト に設定された比較項目が実施されます。

注意: これは、"generateChangeLog" コマンドでのみ利用可能であり、"diff" または "diffChangeLog" では利用できません。

==== 出力モード ====

LiquiBase は二つの出力モデルに対応しています: それらは、差分("diff") モードと変更ログ("diffChangeLog")モードです。どちらのモードでも、diff の進行は標準エラーに出力されます。


==== レポートモード ====

レポートモードでは、二つのデータベースの差分説明が標準出力に出力されます。

<code>
Base Database: BOB jdbc:oracle:thin:@testdb:1521:latest
Target Database: BOB jdbc:oracle:thin:@localhost/XE
Product Name: EQUAL
Product Version:
     Base:   'Oracle Database 10g Enterprise Edition Release 10.2.0.1.0
With the Partitioning, OLAP and Data Mining options'
     Target: 'Oracle Database 10g Express Edition Release 10.2.0.1.0'
Missing Tables: NONE
Unexpected Tables: NONE
Missing Views: NONE
Unexpected Views: NONE
Missing Columns:
     CREDIT.MONTH
     CREDIT.COMPANY
     CMS_TEMPLATE.CLASSTYPE
     CONTENTITEM.SORTORDER
Unexpected Columns:
     CATEGORY.SORTORDER
Missing Foreign Keys: NONE
Unexpected Foreign Keys:
     FK_NAME (ID_VC -> STATUS_ID_VC)
Missing Primary Keys: NONE
Unexpected Primary Keys: NONE
Missing Indexes: NONE
Unexpected Indexes: NONE
Missing Sequences: NONE
Unexpected Sequences: NONE
</code>


==== 変更ログ(ChangeLog） モード ====

変更ログモードでは、元のデータベースを対象とするデータベースにアップグレードするために必要な、XML 形式のへの変更ログが標準出力に出力されます。この変更ログは、そのまま利用することもできますし、別にある変更ログに追記することもできます。

<code xml>
<?xml version="1.0" encoding="UTF-8"?>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.1"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.1
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.1.xsd">
    <changeSet author="diff-generated" id="1185206820975-1">
        <addColumn tableName="CREDIT">
            <column name="MONTH" type="VARCHAR2(10)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-2">
        <addColumn tableName="CREDIT">
            <column name="COMPANY" type="NUMBER(22,0)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-3">
        <addColumn tableName="CMS_TEMPLATE">
            <column name="CLASSTYPE" type="VARCHAR2(255)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-4">
        <addColumn tableName="CONTENTITEM">
            <column name="SORTORDER" type="NUMBER(22)"/>
        </addColumn>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-5">
        <dropColumn columnName="SORTORDER" tableName="CATEGORY"/>
    </changeSet>
    <changeSet author="diff-generated" id="1185206820975-6">
        <dropForeignKeyConstraint baseTableName="CMS_STATUS"
                     constraintName="FK_NAME"/>
    </changeSet>
</databaseChangeLog>
</code>

