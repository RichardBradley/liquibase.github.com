====== インデックスの削除 ======

存在するインデックスを削除します。


===== 例 =====
<!-- Liquibase 1.6 を利用して Oracle では動作し、SQL Server では動作しません。 -->
<code xml>
<dropIndex indexName="idx_user_username"/>
</code>

<!-- Liquibase 1.6 を利用して Oracle でも SQL Server でも動作します。 -->
<code xml>
<dropIndex indexName="idx_user_username" tableName="table_name" />
</code>

===== 利用可能な属性 =====

^ indexName  | 削除するインデックス名 **[必須]**  | 
^ tableName  | 削除するインデックスがついたテーブル名 **[必須]**  | 


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