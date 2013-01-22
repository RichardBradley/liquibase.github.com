====== デフォルト値の追加 ======

特定のカラムにデフォルト値を追加します。

===== 例 =====

<code xml>
<addDefaultValue tableName="file"
    columnName="fileName"
    defaultValue="New File"/>
</code>

===== 利用可能な属性 =====

^ tableName  | 対象カラムを持つテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ columnName  | デフォルト値を追加するカラム名 **[必須]**  | 
^ defaultValue  | デフォルト値 **[デフォルト値のひとつ* 必須]**  | 
^ defaultValueNumeric  | デフォルトの数値の値 **[デフォルト値のひとつ* 必須]**  | 
^ defaultValueBoolean  | デフォルトのブール値 **[デフォルト値のひとつ* 必須]**  | 
^ defaultValueDate  | デフォルトの日付 または 時刻の値 **[デフォルト値のひとつ* 必須]**  | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | Derby 10.3.1.4 より前のバージョンでは問題が発生する可能性があります  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  |

自動ロールバック対応: **はい**