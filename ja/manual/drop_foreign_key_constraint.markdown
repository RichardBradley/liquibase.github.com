====== 外部キー制約の削除 ======

存在する外部キー制約を削除します。

===== 例 =====

<code xml>
<dropForeignKeyConstraint
    constraintName="fk_address_person"
    baseTableName="address"/>
</code>

===== 利用可能な属性 =====

^ constraintName  | 削除する外部キー制約名 **[必須]**  | 
^ baseTableName  | 外部キー制約を保持するテーブル名Name **[必須]**  | 
^ baseTableSchemaName  | テーブルのスキーマ名  | 


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
^ SQLite  | データベースが非対応  |

自動ロールバック対応: **いいえ**