====== テーブルの名称変更 ======

存在するテーブルの名称変更。

===== 例 =====

<code xml>
<renameTable oldTableName="employee" newTableName="person"/>
</code>

===== 利用可能な属性 =====

^ schemaName  | テーブルのスキーマ名  | 
^ oldTableName  | 名称変更前のテーブル名 **[必須]**  | 
^ newTableName  | 名称変更後のテーブル名 **[必須]**  | 


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
^ Caché  | 非対応  | 
^ Firebird  | 非対応  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  | 

自動ロールバック対応: **はい**

