====== <preConditions> タグ======

Preconditions は、[[databasechangelog|変更ログ]] または [[changeset | 変更セット]] に含ませ、データベースの状態に基づいて、データベースへの変更を制御します。

preconditions タグを利用する主な理由はこちらです。
  * 変更ログの作成者が、作成時に必要な前提条件を記述するため
  * それらの前提条件が、変更ログを実施するユーザーに違反されないことを強制するため
  * [[drop_Table | テーブルの削除]] のような回復不可能な変更を実施する前にデータのチェックをするため
  * データベースの状態に基づいて、どの変更セットを実施させ、どれをさせないかを制御するため

お望みであれば、ひとつの <changeSet> タグにひとつの precondition だけにすることもできます。





===== 前提条件 (Preconditions) のサンプル =====
<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.8"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.8
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.8.xsd">
    <preConditions>
        <dbms type="oracle" />
        <runningAs username="SYSTEM" />
    </preConditions>

    <changeSet id="1" author="bob">
        <preConditions onFail="WARN">
            <sqlCheck expectedResult="0">select count(*) from oldtable</sqlCheck>
        </preConditions>
        <comment>Comments should go after preCondition. If they are before then liquibase usually gives error.</comment>
        <dropTable tableName="oldtable"/>
    </changeSet>
</databaseChangeLog>
</code>                                       

上記の変更ログは、データベースが Oracle に対して実行され、データベースユーザーが "SYSTEM" で実行されているときにだけ実行されます。また、"oldtable" が何の結果も含まない(レコード数が0の)時だけ、[[drop_Table | テーブルの削除 ]] を行います。



===== 失敗とエラーのハンドリング =====

LiquiBase は、前提条件の "failures" ( failed のチェック) と、"errors" ( チェックの実施中にスローされた例外 ) を区別し、<preConditions> タグの、"onFail" と "onError" 属性を用いてそれぞれに対応します。// 1.8 から //

=== Available attributes ===

^ onFail | 前提条件が失敗したときに何を行うか(下記参照)  | 
^ onError | 前提条件がエラーになったときに何を行うか(下記参照) | 
^ onFailMessage | 前提条件が失敗したときのカスタマイズされたメッセージ //2.0から// | 
^ onErrorMessage | 前提条件がエラーになったときのカスタマイズされたメッセージ  //2.0から//  | 

=== 利用可能な onFail/onError の値 ===

^ HALT | すぐにすべての変更ログの実施を中断 **[デフォルト]**  | 
^ CONTINUE | 変更セットを飛ばし、変更セットの実行は次回の更新で再実施され、変更ログを継続 | 
^ MARK_RAN | 変更セットを飛ばすが、それを実施されたことにして、変更ログを継続 | 
^ WARN | 警告メッセージを出力して、通常通りに変更セットを実施 | 

変更セットの外では (e.g. 変更ログの最初) HALT と WARN のみが利用可能です。


=== 利用可能な onUpdateSQL の値 ===

^ RUN | updateSQL モードで変更セットを実施|
^ FAIL | updateSQL モードでは、前提条件を失敗 |
^ IGNORE | updateSQL モードで前提条件を無視|


===== AND/OR/NOT ロジック =====

条件付きロジックは、<and> , <or> と <not> タグをネストさせて利用することで対応できます。条件に関するタグが指定されない場合、デフォルトでは AND が利用されます。

例:

<code xml>
    <preConditions>
        <dbms type="oracle" />
        <runningAs username="SYSTEM" />
    </preConditions>
</code>                    

これは、Oracle かつ SYSTEM ユーザーである必要があります。

<code xml>
 <preConditions>
     <dbms type="oracle" />
     <dbms type="mysql" />
 </preConditions>
</code>                 

これは、Oracle かつ MySQL である必要がありますが、つねに false となります。巨大で予期しないマージのタスクがない限りにおいて。

<code xml>
 <preConditions>
     <or>
         <dbms type="oracle" />
         <dbms type="mysql" />
     </or>
 </preConditions>
</code>                 

これは、Oracle または MySQL である必要があり、上記の例より、もっと意味のあるものです。

<code xml>
 <preConditions>
     <or>
         <and>
            <dbms type="oracle" />
            <runningAs username="SYSTEM" />
         </and>
         <and>
            <dbms type="mysql" />
            <runningAs username="sa" />
         </and>
     </or>
 </preConditions>
</code>                 

これは、Oracle に対して 、かつ SYSTEM ユーザーで実行する組み合わせ、もしくは、MS-SQL に対して SA ユーザーで実行する組み合わせの場合に実行されます。

===== 利用可能な前提条件(Preconditions) =====




==== <dbms> ====

データベースの種類が対象と合致しているときに通過します。

=== 利用可能な属性 ===

^ type | [[../databases|データベース]]の種類 **[必須]**  | 



==== <runningAs> ====

データベースユーザーが username 属性で指定されたものと合致する場合に通過します。

=== 利用可能な属性 ===

^ username | スクリプトが実行されるデータベースユーザー **[必須]**  | 


==== <changeSetExecuted> ====

指定された変更セットがすでに実行されていた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ id  | 変更セットの "id" **[必須]**  | 
^ author  | 変更セットの "author" **[必須]**  | 
^ changeLogFile  | 変更セットのファイル名 (相対クラスパスを含む) **[必須]**  | 



==== <columnExists> ====

指定されたカラムがデータベースに存在していた場合に通過します。// 1.8 から //

=== 利用可能な属性 ===

^ schemaName  | テーブルのスキーマ名 **[必須]**  | 
^ tableName  | そのカラムを含むテーブル名 **[必須]**  | 
^ columnName  | カラム名 **[必須]**  | 


==== <tableExists> ====

指定されたテーブルがすでにデータベースに存在していた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ schemaName  | テーブルのスキーマ名 **[必須]**  | 
^ tableName  | テーブル名 **[必須]**  | 


==== <viewExists> ====

指定されたビューがすでにデータベースに存在していた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ schemaName  | ビューのスキーマ名 **[必須]**  | 
^ viewName  | ビュー名 **[必須]**  | 


==== <foreignKeyConstraintExists> ====

指定された外部キーがすでにデータベースに存在していた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ schemaName  | 外部キー制約のスキーマ名 **[必須]**  | 
^ foreignKeyName  | 外部キー制約名 **[必須]**  | 

==== <indexExists> ====

指定されたインデックスがすでにデータベースに存在していた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ schemaName  | インデックスのスキーマ名 **[必須]**  | 
^ indexName  | インデックス名 **[必須]**  | 

==== <sequenceExists> ====

指定されたシーケンスがすでにデータベースに存在していた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ schemaName  | シーケンスのスキーマ名 **[必須]**  | 
^ sequenceName  | シーケンス名 **[必須]**  | 


==== <primaryKeyExists> ====

指定された主キーがすでにデータベースに存在していた場合に通過します。//1.8 から//

=== 利用可能な属性 ===

^ schemaName  | 主キー制約のスキーマ名 **[必須]**  | 
^ primaryKeyName  | 主キー制約名 **[tableName または primaryKeyName が必須]**  | 
^ tableName  | 主キー制約を保持するテーブル名**[tableName または primaryKeyName が必須]** //1.9 から// | 

==== <sqlCheck> ====

SQL 文を実行し、戻り値をチェックします。SQL 文は1行の1つの値を戻すものでなければなりません。 行数を確認するには、"count" SQL 関数を使用します。値の範囲をチェックするには、SQL でチェックを実施し、容易に比較のできる値を返すようにします。

<code xml>
<sqlCheck expectedResult="1">SELECT COUNT(1) FROM pg_tables WHERE TABLENAME = 'myRequiredTable'</sqlCheck>
</code>

=== 利用可能な属性 ===

^ expectedResult  | SQL の結果と比較する値 **[必須]**  | 

==== <customPrecondition> ====

あなた専用のカスタマイズされた前提条件を作成するには、[[http://www.liquibase.org/manual/latest/api/liquibase/precondition/CustomPrecondition.html|liquibase.precondition.CustomPrecondition]] インターフェースを実装したクラスを作成し、customPrecondition タグ内の className パラメータで参照するだけです。




===== 実装に関する注意点 =====

前提条件は、個々の変更ログが実施される最初にチェックされます。もし、"include" タグを利用しており、その子どもの変更ログに前提条件しかない場合、これらの前提条件は migrator がこのファイルに到達するまで実施されません。この動作は将来の動作で変わるかもしれませんから、この動作に依存しないようにしてください。