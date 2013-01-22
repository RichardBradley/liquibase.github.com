====== カラムの名称変更 ======

存在するカラムの名称を変更します。

===== 例 =====

<code xml>
<renameColumn tableName="person"
    oldColumnName="fname" newColumnName="firstName"/>
</code>

===== 利用可能な属性 =====
^ tableName  | 名称変更の対象になるカラムを持つテーブル名**[必須]**  |
^ schemaName  | テーブルのスキーマ名  |
^ oldColumnName  | 名称変更前のカラム名 **[必須]**  |
^ newColumnName  | 名称変更後のカラム名 **[必須]**  |
^ columnDataType  | 現在のカラムのデータ型 (MySQL のみ)  |




===== データベースの互換性 =====
^ MySQL  | 問題なし  |
^ PostgreSQL  | 問題なし  |
^ Oracle  | 問題なし  |
^ MS-SQL  | 問題なし  |
^ Sybase  | 問題なし  |
^ DB2  | 非対応  |
^ Derby  | 問題なし  |
^ HSQL  | 問題なし  |
^ H2  | 問題なし  |
^ Caché  | 非対応  |
^ Firebird  | 問題なし  |
^ MaxDB  | 問題なし  |
^ SQLite  | 問題なし  |

自動ロールバック対応: **あり**

