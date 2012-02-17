====== シーケンスの変更 ======

存在するシーケンスの属性変更

===== 例 =====

<code xml>
<alterSequence sequenceName="seq_employee_id" incrementBy="10"/>
</code>

===== 利用可能な属性 =====
^ sequenceName  | 変更対象のシーケンス名 **[必須]**  | 
^ incrementBy  | 新しい "increment by"( 増分単位 ) 値 **[必須]**  | 


===== データベースの互換性 =====

^ MySQL  | データベースがシーケンスに非対応  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | データベースがシーケンスに非対応  | 
^ Sybase  | データベースがシーケンスに非対応  | 
^ DB2  | 問題なし  | 
^ Derby  | データベースがシーケンスに非対応  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | データベースがシーケンスに非対応  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | データベースがシーケンスに非対応  |

自動ロールバック対応: **いいえ**
