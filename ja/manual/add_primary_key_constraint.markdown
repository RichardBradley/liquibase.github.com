====== 主キー制約の追加 ======

存在する一つのカラムまたは複数のカラムに主キー制約を追加します。

===== 例 =====

<code xml>
<addPrimaryKey tableName="person"
    columnNames="id"
    constraintName="pk_person"/>
</code>

===== 利用可能な属性 =====

^ tableName  | 主キー制約を作成するテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ columnNames  | 主キー制約を作成するカラム名 (複数の場合はカンマで分割) **[必須]**  | 
^ constraintName  | 主キー制約名 **[必須]**  | 
^ tablespace  | 主キー制約を作成する"表領域" (SQL Server のファイルグループ) 名  | 


===== データベースの互換性 =====

^ MySQL  | 問題なし、ただし表領域の指定は非対応  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 新規に作成される主キーでの表スペース指定は非対応  | 
^ Derby  | 問題なし、ただし表領域の指定は非対応  | 
^ HSQL  | 問題なし、ただし表領域の指定は非対応  | 
^ H2  | 問題なし、ただし表領域の指定は非対応  | 
^ Caché  | 問題なし、ただし表領域の指定は非対応  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | データベースが非対応  |

自動ロールバック対応: **いいえ**