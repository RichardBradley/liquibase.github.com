====== インデックスの作成 ======

存在するひとつのカラム、または複数のカラムに対してインデックスを作成します。

===== 例 =====

<code xml>
<createIndex tableName="user" indexName="idx_user_username">
    <column name="username"/>
</createIndex>
</code>

<code xml>
<createIndex tableName="user" indexName="idx_person_name">
    <column name="firstname"/>
    <column name="lastname"/>
</createIndex>
</code>


===== 利用可能な属性名 =====

^ tableName  | インデックスを作成する対象のテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ indexName  | 作成するインデックス名  | 
^ tablespace  | インデックスを作成する"表領域" (SQL Server のファイルグループ) 名 | 
^ unique  |値が一意かどうか //1.8 から//  | 

===== 利用可能なサブタグ =====

^ column  | インデックスを作成するカラム名 (複数可 )。詳細は[[column|カラムタグ]] を参照  | 


===== データベースの互換性 =====

^ MySQL  | データベースが表領域に非対応  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | データベースが表領域に非対応  | 
^ HSQL  | データベースが表領域に非対応  | 
^ H2  | データベースが表領域に非対応  | 
^ Caché  | データベースが表領域に非対応  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  |

自動ロールバック対応: **はい**