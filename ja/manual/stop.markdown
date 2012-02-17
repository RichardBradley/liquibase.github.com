====== LiquiBase 実行の停止 ======

メッセージとともに LiquiBase の実行を停止します。主にデバッグや変更ログのステップ実行に有効です。// LiquiBase 1.9 より//

===== 例 =====

<code xml>
<stop>Halted LiquiBase for debugging</stop>
</code>


===== 利用可能な属性 =====

^ tag text | 実行が停止したときに出力されるメッセージ  | 



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
^ SQLite  | 問題なし  | 

自動ロールバック対応: **なし**