====== テーブルの作成 ======

新しくテーブルを作成する。

===== 例 =====

<code xml>
<createTable tableName="person">
    <column name="id" type="int">
        <constraints primaryKey="true" nullable="false"/>
    </column>
    <column name="firstname" type="varchar(255)"/>
    <column name="lastname" type="varchar(255)"/>
    <column name="username" type="varchar(255)">
      <constraints unique="true" nullable="false"/>
    </column>
     <column name="testid" type="int" />
</createTable>
</code>


===== 利用可能な属性 =====

^ tableName  | 作成対象のテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ tablespace  | テーブルを作成する"表領域" ( SQL Server のファイルグループ) 名 | 
^ remarks  | テーブルの簡単な説明 (テーブルコメント) | 

===== 利用可能なサブタグ =====

^ column  | テーブルに作成するカラム名。カラムタグには、制約と外部キーに関する情報を保持できます。 詳細は [カラムタグ](column) を参照 **[必須]**  |



===== データベースの互換性 =====

^ MySQL  | データベースが表領域に非対応 ストレージエンジンを指定したい場合は、[[custom_sql]] を利用してください|
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