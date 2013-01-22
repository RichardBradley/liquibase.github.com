====== データのロードと更新 ======

CSV ファイルから既存のテーブルにデータをロード、もしくは更新します。loadData との違いは、対象のレコードの存在有無を確認する点です。もしそのレコードが見つかれば、そのレコードは更新され、そうでない場合はインサートされます。また、ロールバック用に DELETE 文が生成されます。

セルの中に //NULL// と書かれた場合には、文字列としての"NULL"ではなく、データベースのNULL値に置き換えられます。

//LiquiBase 2.0から//


===== 例 =====

<code xml>
<loadUpdateData tableName="users" file="com/sample/users.csv" primaryKey="id">
    <column name="id" type="NUMERIC"/>
    <column name="firstname" type="STRING"/>
    <column name="lastname" type="STRING"/>
    <column name="username" type="STRING"/>
</loadUpdateData>
</code>


===== 利用可能な属性 =====

^ tableName  | インサートまたはアップデートの対象となるテーブル名 **[必須]** | 
^ schemaName  | テーブルのスキーマ名  | 
^ primaryKey | 主キーを構成するカンマ区切りされたカラム名 **[必須]**  | 
^ file  | ロードする CSV ファイル名 **[必須]**  | 
^ encoding | CSV ファイルのエンコーディング (デフォルト値は UTF-8)  | 

===== 利用可能なサブタグ =====

^ column  | データがどのようにロードされるかを定義する  | 





===== 利用可能なカラム属性 =====

^ index | ゼロから始まるカラムに対応するインデックス **[index または header のいずれかが必須]** | 
^ header | データファイルのカラムのヘッダー **[index または header のいずれかが必須]** | 
^ name  | インサートまたはアップデート対象のカラム名。デフォルトはファイルのヘッダ(header)の値と同一 |
^ type  | カラムのデータ型。利用可能な値: STRING, NUMERIC, DATE, BOOLEAN **[必須]**  |


===== データベースの互換性 =====

^ MySQL  | 非対応 | 
^ PostgreSQL  | 非対応 | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 非対応  | 
^ Sybase  | 非対応  | 
^ DB2  | 非対応  | 
^ Derby  | 非対応  | 
^ HSQL  | 非対応  | 
^ H2  | 非対応  | 
^ Caché  | 非対応  | 
^ Firebird  | 非対応  | 
^ MaxDB  | 非対応  | 
^ SQLite  | 非対応  | 

自動ロールバック対応: **はい**