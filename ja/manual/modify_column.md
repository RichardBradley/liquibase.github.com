====== データ型変更のリファクタリング ======

** This page should be reviewed by a senior liquibase developer. Use this information with care. **

現存するカラムのデータ型を変更します。

===== 例 =====

<code xml>
<modifyDataType tableName="person" columnName="firstname" newDataType="varchar(500)"/>
</code>

===== 利用可能な属性 =====

^ tableName   | 変更対象となるカラムを保持するテーブル名 **[必須]**   | 
^ columnName  | 変更対象となるカラム名 **[必須]**   | 
^ newDataType | そのカラムの新しいデータ型 **[必須]**   | 
^ schemaName  | テーブルを保持するスキーマ名  |
^ nullable    | そのカラムがNULLを許容するか | 


===== 利用可能なサブタグ =====


===== データベースの互換性 =====

^ MySQL  | 問題なし  |
^ PostgreSQL  | 問題なし  |
^ Oracle  | 問題なし  |
^ MS-SQL  | 問題なし  |
^ Sybase  | 問題なし  |
^ DB2  | いくつかの問題あり  |
^ Derby  | 問題なし  |
^ HSQL  | 問題なし  |
^ H2  | 問題なし  |
^ Cache  | 問題なし  |
^ Firebird  | 問題なし  |
^ MaxDB  | 問題なし  |
^ SQLite  | 問題なし  |

自動ロールバック対応: **いいえ**
