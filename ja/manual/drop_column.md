====== カラムの削除 ======

存在するカラムを削除します。

===== 例 =====

<code xml>
<dropColumn tableName="person" columnName="ssn"/>
</code>

===== 利用可能な属性 =====

^ tableName  | 削除対象のカラムを持つテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ columnName  | 削除対象のカラム名 **[必須]**  | 




===== Database Compatiblity =====

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
^ SQLite  | 非対応  |

自動ロールバック対応: **いいえ**
