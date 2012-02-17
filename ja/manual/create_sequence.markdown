====== シーケンスの作成 ======

新しくシーケンスを作成します。

===== 例 =====

<code xml>
<createSequence sequenceName="seq_employee_id"/>
</code>



===== 利用可能な属性 =====

^ sequenceName  | 作成するシーケンス名 **[必須]**  |
^ schemaName  | テーブルのスキーマ名  |
^ incrementBy  | シーケンス値の増加単位  |
^ minValue  | シーケンス値の最小値  |
^ maxValue  | シーケンス値の最大値  |
^ ordered  | 'true' または 'false' |
^ startValue  | 生成される最初のシーケンス値  |


===== データベースの互換性 ======

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
^ SQLite |  データベースがシーケンスに非対応  | 

自動ロールバック対応: **はい**