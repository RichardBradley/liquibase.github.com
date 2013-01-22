====== 参照テーブルと外部キー制約の追加 ======

カラムに保存された値を参照するテーブルを作成し、そのテーブルに外部キーを作成する。

===== 例 =====

<code xml>
<addLookupTable
    existingTableName="address" existingColumnName="state"
    newTableName="state" newColumnName="abbreviation"
    constraintName="fk_address_state"
/>
</code>


===== 利用可能な属性 =====

^ existingTableName  | 参照先テーブルへのデータの抽出元となるテーブル名 **[必須]**  | 
^ existingTableSchemaName  | 抽出元のテーブルのスキーマ名  | 
^ existingColumnName  | 抽出元のデータを持つカラム名 **[必須]**  | 
^ newTableName  | 新しい参照先のテーブル名 **[必須]**  | 
^ newTableSchemaName  | 参照先テーブルのスキーマ名  | 
^ newColumnName  | 新しい参照先テーブルのカラム名 **[必須]**  | 
^ newColumnDataType  | 新しいテーブルのデータ型。MySQL と MS-SQL で必要|
^ constraintName  | 抽出元と参照先テーブルの間で作成される外部キー制約名 **[必須]**  | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 非対応  | 
^ HSQL  | 非対応  | 
^ H2  | 問題なし  | 
^ Caché  | 非対応  | 
^ Firebird  | 非対応  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 非対応  |

自動ロールバック対応: **はい**