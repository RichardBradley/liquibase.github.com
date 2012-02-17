====== カラムの追加 ======

存在するテーブルに新しいカラムを追加します。

===== 例 =====

<code xml>
<addColumn tableName="person">
    <column name="firstname" type="varchar(255)"/>
</addColumn>
</code>

===== 利用可能な属性 =====

^ tableName  | カラムを追加するテーブル名 **[必須]** |
^ schemaName  | テーブルのスキーマ名  |



===== 利用可能なサブタグ =====

^ column  | カラムの制約と外部キーに関する情報。"defaultValue" 属性を指定することで、カラムのデフォルト値を指定できます。Setting the "value" attribute will set all rows existing to the specified value without modifying the column default.詳細な情報は[[column | カラムタグ]]のドキュメントを参照 [必須] |



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
^ Firebird  |問題なし  |
^ MaxDB	 | 問題なし  |
^ SQLite  | 問題なし  |

自動ロールバック対応: **あり**
