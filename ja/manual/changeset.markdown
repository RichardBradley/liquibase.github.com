====== <changeSet> タグ ======

changeSet(変更セット) タグを利用することで、データベースへの変更やリファクタリングをひとまとめにして利用することができます。

<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.7"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.7
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.7.xsd">
    <changeSet id="1" author="bob">
        <comment>A sample change log</comment>
        <createTable/>
    </changeSet>
    <changeSet id="2" author="bob" runAlways="true">
        <alterTable/>
    </changeSet>
    <changeSet id="3" author="alice" failOnError="false" dbms="oracle">
        <alterTable/>
    </changeSet>
</databaseChangeLog>
</code>                    

各変更セットタグは、"id"　タグと "author" タグの組み合わせと変更ログファイルのクラスパス名によって、一意に識別されます。id  タグは、識別子として利用されるだけで、変更が実施される順序を決めるものでもありませんし、数値である必要もありません。実際の作者(author)を知らない場合や保存したくない場合は、たんに代わりの値として "UNKNOWN" を利用します。

Liquibase が databaseChangeLog を実行するとき、変更セットを順番に読み、それぞれに対して、"databasechangelog" テーブルの内容と id/author/ファイルのパス名の組み合わせがすでに実行されたかどうか確認します。もしすでに実行されていれば、変更セットは "runAlways" タグが true  でない限り実行をスキップします。変更セットの変更が一通り実行された後、 LiquiBase は、あたらしく id/author/ファイルのパス名 の値と、変更セット (下記参照)のMD5Sumを "databasechangelog" にインサートします。

LiquiBase は、各変更セットをトランザクションとして実行し、通常終了すればコミットし、なんらかのエラーが発生したらロールバックします。データベースによっては、このトランザクション設定のインターフェースによって自動コミットをおこなってしまい、予期しないデータベース状態に陥る可能性もあります。そのため、通常はひとつの変更セットにひとつの変更のみを保持するのがよいやり方です。データのインサートのようなトランザクションを非自動コミットの集合として適用しないかぎりは。







===== 利用可能な属性 =====

^ id  | アルファベットと数値による識別子 **[必須]** |
^ author  | 変更セットの作成者 **[必須]** |
^ dbms  | 対象変更セットが利用されるデータベースの種類。マイグレーションが実行されるとき、この属性に対してデータベースの種類が確認されます。現在、利用できる値は、[[../databases|対応データベース]] ページに記載されています。 |
^ runAlways  | 毎回変更セットを実行します、たとえ以前に実行されていたとしても |
^ runOnChange  | 変更セットが最初に確認された時と、変更された時だけ変更を実施します。|
^ context  | 実行時に特定の context の条件を満たしたときだけ変更を実施します。コンテキスト名にはどんな文字列も利用可能で、大文字と小文字は区別されません。|
^ runInTransaction  | 変更セットを単一のトランザクションとして実行する(もし可能なら)かどうか。デフォルトは true です。**警告:  この属性は十分に注意して利用してください。もし、変更セットが複数の文から成り立っており、その途中でエラーになった場合、LiquiBase の databasechangelog テーブルは、無効な状態のままになります。** // LiquiBase 1.9 から // |

===== 利用可能なサブタグ =====

^ comment  | 変更セットの概要。XML コンポーネントでも同様の効果を得られますが、LiquiBase の将来の機能で、<comment> タグを活用してドキュメントを生成できるようになるでしょう |
^ preConditions | 変更セットが実行される前に達成する必要のある[[Preconditions | 前提条件]]。テーブルの削除といった回復不可能なことをするまえのデータのサニティチェックに有用 //1.7 より //|
^ <Any Refactoring Tag(s)>(すべてのリファクタリングタグ)  | この変更セットの一部分として実行されるデータベースの(複数の)変更 |
^ validCheckSum | 現在の値以外のチェックサムを有効とする // 1.7から//|
^ rollback | 変更セットの[[rollback | ロールバック]] 方法を記述するリファクタリングタグまたはSQL 文 |


==== Rollback Tag ====

ロールバッグタグは、SQL 文、変更タグ、以前の変更セットへの参照を利用してどのように変更を取り消すかを記述します。

=== Rollback Tag 例 ===

<code xml>
<changeSet id="1" author="bob">
    <createTable tableName="testTable">
    <rollback>
        drop table testTable
    </rollback>
</changeSet>
</code>

<code xml>
<changeSet id="1" author="bob">
    <createTable tableName="testTable">
    <rollback>
        <dropTable tableName="testTable"/>
    </rollback>
</changeSet>
</code>

<code xml>
<changeSet id="2" author="bob">
    <dropTable tableName="testTable"/>
    <rollback changeSetId="1" changeSetAuthor="bob"/>
</changeSet>
</code>


===== 変更セット MD5 チェックサム =====


LiquiBase が変更セットに到達すると、MD5Sum を計算して、"databasechangelog" に MD5Sum を保存します。MD5Sum を保存する意味は、LiquiBase が、ほかの誰かが実行されて以来変更セットを変更していないかどうかを知ることができるためです。変更セットが実行されたときから変更されていた場合、LiquiBase はエラーとともに移行を終了します。というのも、何が変更されたか知ることができず、データベースが変更ログが期待しているのと異なった状態にあるかもしれないからです。もし、適切な理由によって変更セットが変更されていた場合やこのエラーを無視したい場合は、databasechangelog テーブルを更新して、その行の id/author/ファイルのパス名に対応する MD5Sum を null に更新します。次回 LiquiBase が実行されると、MD5Sum の値を適切な値に更新してくれます。

MD5Sum は、"runOnChange" 変更セット属性と一緒に使用されます。普通はただ現在のバージョンが知りたいだけで新しい変更セットを追加したくないのに、更新されたときはいつでも適用したいときがなんどもあるでしょう。このよい例はストアドプロシージャに関するものです。ストアドプロシージャの全体をコピーして新しい変更セットを作るたび、とても長い変更ログが無駄に終わるだけでなく、ソースコード管理システムのマージや差分の機能を失うことになるのです。代わりに、runOnChange = "true" 属性を変更セットにあるストアドプロシージャのテキストにつけましょう。そのストアドプロシージャは、内容が変更されたときだけ再作成されるようになります。