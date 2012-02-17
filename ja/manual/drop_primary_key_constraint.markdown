====== 主キー制約の削除 ======

存在する主キー制約を削除します。

===== 例 =====

<code xml>
<dropPrimaryKey tableName="person" constraintName="pk_person"/>
</code>

===== 利用可能な属性 =====

^ tableName  | 削除する主キー制約を持つテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ constraintName  | 削除する主キー制約名 **[必須]**  | 



===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | NULL ではない 'constraintName' が必要  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | NULL ではない 'constraintName' が必要  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 問題なし  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | NULL ではない 'constraintName' が必要  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | データベースが非対応   |

自動ロールバック対応: **いいえ**