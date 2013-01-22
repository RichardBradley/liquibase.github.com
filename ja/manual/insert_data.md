====== データのインサート ======

存在するテーブルにデータをインサートします。

===== 例 =====

<code xml>
<insert tableName="People">
    <column name="id" valueNumeric="2"/>
    <column name="firstname" value="Fred"/>
    <column name="lastname" value="Johnson"/>
    <column name="username" value="fjohnson"/>
    <column name="testid" valueNumeric="2"/>
</insert>
</code>

===== 利用可能な属性 =====

^ tableName  | データをインサートする対象のテーブル | 
^ schemaName  | テーブルのスキーマ名  | 


===== 利用可能なサブタグ =====

^ column  | カラムにインサートするデータ。詳細は[[column|カラムタグ]] を参照  | 


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