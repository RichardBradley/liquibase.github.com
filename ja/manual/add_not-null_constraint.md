====== Not Null 制約の追加 ======

存在するテーブルに not null 制約を追加します。defaultNullValue 属性が渡されたら、すべての null 値はその値に更新されてから、その制約が実行されます。

===== 例 =====

<code xml>
<addNotNullConstraint
        tableName="employee"
        columnName="employer_id"
        defaultNullValue="1" />
</code>

===== 利用可能な属性  =====

^ tableName  | 制約を追加する対象のテーブル **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ columnName  | 制約を追加するカラム名 **[必須]**  | 
^ defaultNullValue  | 現在 null の値に対して設定する値、設定しない場合、null 値が存在するエラーになるでしょう。  | 
^ columnDataType  | カラムのデータ型 (MySQL と MS-SQL のみ) **[必須]**  | 


===== Database Compatiblity =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 問題なし  | 
^ HSQL  | HSQL に存在する不具合のため、データによっては not null 制約の追加が失敗する場合があります | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 非対応  | 
^ MaxDB  | 問題なし  |
^ SQLite  | 問題なし  |
 

自動ロールバック対応: **はい**