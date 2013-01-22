====== 一意制約の削除 ======

存在する一意制約の削除

===== 例 =====

<code xml>
<dropUniqueConstraint tableName="person" constraintName="pk_person"/>
</code>


===== 利用可能な属性 =====

^ tableName | 削除対象の一意制約を持つテーブル名 **[必須]** |
^ schemaName | テーブルのスキーマ名 |
^ constraintName | 削除対象の一意制約名 **[必須]** |


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 問題なし  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | “constraintName”属性はカラム名を特定するために利用  |


自動ロールバック対応: **いいえ**