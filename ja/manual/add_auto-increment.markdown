====== Auto Increment の追加======

現在のカラムを auto increment カラムに変換します。

===== 例 =====

<code xml>
<addAutoIncrement tableName="person" columnName="id" columnDataType="int"/>
</code>

===== 利用可能な属性 =====

^ tableName  | auto increment を追加するテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ columnName  | auto increment に変換するカラム名 **[必須]**  | 
^ columnDataType  | auto increment に変換するカラムの現在のデータ型 **[必須]**  | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | データベースがauto incrementに非対応  | 
^ MS-SQL  | 現在のところ未対応  | 
^ Sybase  | 現在のところ未対応  | 
^ DB2  | 問題なし  | 
^ Derby  | 現在のところ未対応  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | データベースがauto incrementに非対応  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 列定義が INTEGER 以外の場合は、INTEGER に変換 |

自動ロールバック対応: **いいえ**