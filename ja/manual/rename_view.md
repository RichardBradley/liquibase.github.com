====== ビューの名称変更 ======

存在するビューの名称変更

===== 例 =====

<code xml>
<renameView oldViewName="personView" newViewName="people"/>
</code>

===== 利用可能な属性名 =====

^ oldViewName  | 変更前のビュー名 **[必須]**  | 
^ newViewName  | 変更後のビュー名 **[必須]**  | 
^ schemaName  | ビューのスキーマ名  | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 非対応  | 
^ HSQL  | 非対応  | 
^ H2  | 問題なし  | 
^ Caché  | 非対応  | 
^ Firebird  | 非対応  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 未対応  | 

自動ロールバック対応: **はい**