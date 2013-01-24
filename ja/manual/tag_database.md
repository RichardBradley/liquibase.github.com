====== データベースのタグ付け======

将来の[ ロールバック](rollback ) に備えてタグを打ちます。LiquiBase 1.6 からの機能です。


===== 例=====

<code xml>
<tagDatabase tag="version_1.3"/>
</code>


===== 利用可能な属性 =====

^ tag  | 適用するタグ名 **[必須]**  | 



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

自動ロールバック対応: **いいえ**