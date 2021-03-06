====== シーケンスの削除 ======

存在するシーケンスを削除します。

===== 例 =====

<code xml>
<dropSequence sequenceName="seq_employee_id"/>
</code>

===== 利用可能な属性 =====

^ sequenceName  | 削除対象のシーケンス名 **[必須]**  | 


===== データベースの互換性 =====

^ MySQL  |  データベースがシーケンスに非対応  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  |  データベースがシーケンスに非対応  | 
^ Sybase  |  データベースがシーケンスに非対応  | 
^ DB2  | 問題なし  | 
^ Derby  |  データベースがシーケンスに非対応  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  |  データベースがシーケンスに非対応  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  |  データベースがシーケンスに非対応  | 

自動ロールバック対応: **いいえ**