====== 外部キー制約の追加 ======

存在するカラムに外部キー制約を追加します。



===== 例 =====

<code xml>
<addForeignKeyConstraint constraintName="fk_address_person"
    baseTableName="address" baseColumnNames="person_id"
    referencedTableName="person" referencedColumnNames="id"
/>
</code>





===== 利用可能な属性 =====

^ constraintName  | 作成する外部キー制約名 **[必須]**  | 
^ baseTableName  | 外部キーを作成するテーブル名 **[必須]**  | 
^ baseTableSchemaName  | 外部キーを作成するテーブルのスキーマ名  | 
^ baseColumnNames  | 外部キーを作成するカラム名 ( 複数の場合はカンマで分割 ) **[必須]**  | 
^ referencedTableName  | 外部キーが参照するテーブル名 **[必須]**  | 
^ referencedTableSchemaName  | 外部キーが参照するテーブルのスキーマ名  | 
^ referencedColumnNames  | 外部キーが参照するカラム名( 複数の場合はカンマで分割 ) **[必須]**  | 
^ deferrable  | 外部キーは遅延可能 (deferrable ) かどうか  | 
^ initiallyDeferred  | 外部キーは当初から遅延可能 (deferrable ) かどうか  | 
^ deleteCascade  | 外部キーに "on delete cascade" を付与するかどうか //[onDelete="CASCADE" 採用のため非推奨]// | 
^ onDelete  | ON DELETE 機能。設定可能な値: "CASCADE", "SET NULL", "SET DEFAULT", "RESTRICT", "NO ACTION" //1.8から//  | 
^ onUpdate  | ON UPDATE 機能。設定可能な値: "CASCADE", "SET NULL", "SET DEFAULT", "RESTRICT", "NO ACTION" //1.8 から//  | 


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
^ SQLite  | データベースが非対応 |

自動ロールバック対応: **YES**