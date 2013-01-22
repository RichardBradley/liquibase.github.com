====== Not Null 制約の削除 ======

カラムに null 値を許可します。

===== 例 =====

<code xml>
<dropNotNullConstraint tableName="employee" columnName="employer_id"/>
</code>

===== 利用可能な属性 =====

^ tableName  | 削除対象の制約を持つテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ columnName  | 削除対象の制約のカラム名 **[必須]**  | 
^ columnDataType  | カラムのデータ型 [MySQL と MS-SQL と PostgreSQL で必要]  | 


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
^ Firebird  | 非対応  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  |


自動ロールバック対応: **はい**