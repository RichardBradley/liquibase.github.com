====== データのロード ======

CSV ファイルから既存のテーブルにデータをロードします。列にある //NULL// という値は、"NULL" という文字列ではなく、データベースに NULL 値として変換されます。

//LiquiBase 1.7 より//



===== 例 =====

<code xml>
<loadData tableName="users" file="com/sample/users.csv">
    <column name="id" type="NUMERIC"/>
    <column name="firstname" type="STRING"/>
    <column name="lastname" type="STRING"/>
    <column name="username" type="STRING"/>
</loadData>
</code>


===== 利用可能な属性 =====

^ tableName  | データロード対象のテーブル名 **[必須]** |
^ schemaName  | テーブルのスキーマ名  | 
^ file  | ロード元の CSV ファイル **[必須]** |
^ encoding | CSV ファイルのエンコーディング (デフォルトは UTF-8) |

===== 利用可能なサブタグ =====

^ column  | データがどのようにロードされるかを定義します  | 




===== 利用可能なカラム属性 =====

^ index | カラムに対するゼロベースのインデックス**[index または header が必須]** | 
^ header | データファイルヘッダ行の値 **[index または header が必須]** |
^ name  | インサート対象となるカラム名。デフォルトはファイルのヘッダー値 |
^ type  | カラムのデータ型。取り得る値: STRING、NUMERIC、DATE、BOOLEAN **[必須]**  |


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