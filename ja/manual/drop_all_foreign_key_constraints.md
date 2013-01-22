====== すべての外部キー制約の削除 ======

一つのテーブルに対するすべての外部キー制約の削除

===== 例 =====

<code xml>
<dropAllForeignKeyConstraints
    baseTableName="address"/>
</code>

===== 利用可能な属性 =====

^ baseTableName  | 外部キーを含むテーブル名 **[必須]**  | 
^ baseTableSchemaName  | テーブルのスキーマ名  | 


===== データベースの互換性 =====

^ MySQL  |  v5.1.10 以上(REFERENTIAL_CONSTRAINTS table)  | 
^ PostgreSQL  | 問題なし(?)  | 
^ Oracle  | 問題なし(?)  | 
^ MS-SQL  | 問題なし(?)  | 
^ Sybase  | データベースが非対応  | 
^ DB2  | 問題なし(?)  | 
^ Derby  | データベースが非対応  | 
^ HSQL  | データベースが非対応  | 
^ H2  | データベースが非対応  | 
^ Caché  | データベースが非対応  | 
^ Firebird  | データベースが非対応  | 
^ MaxDB  | データベースが非対応  | 
^ SQLite  | データベースが非対応  |

自動ロールバック対応: **いいえ**