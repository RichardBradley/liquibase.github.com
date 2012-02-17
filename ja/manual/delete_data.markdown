====== データの削除 ======

存在するテーブルからデータを削除します。


===== 例 =====

<code xml>
<delete tableName="People">
    <where>id=2</where>
</delete>
</code>

<code xml>
<delete tableName="People">
</delete>
</code>


===== 利用可能な属性 =====

^ tableName  | 削除対象のデータがあるテーブル名 |
^ schemaName  | テーブルのスキーマ名  | 


===== 利用可能なサブタグ =====

^ where [文字列]  | delete 文の where 句 | 



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