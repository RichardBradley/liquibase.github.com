====== 一意制約の追加 ======

存在するカラム、または複数のカラムに対して一意制約を追加します。


===== 例 =====

<code xml>
<addUniqueConstraint tableName="person"
    columnNames="id"
    constraintName="pk_person"/>
</code>


===== 利用可能な属性 =====

^ tableName  | 一意制約を作成する対象のテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名 |
^ columnNames  | 一意制約を作成するカラム名(複数の場合はカンマで分割 **[必須]**  | 
^ constraintName  | 一意制約名称 **[必須]**  | 
^ tablespace  | インデックスを作成するテーブルスペース ( SQL Server ではファイルグループ名) | 



===== データベースの互換性 =====

^ MySQL  | データベースがテーブルスペースに非対応  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | テーブルに制約を追加する際に表スペースは指定できません | 
^ Derby  | データベースがテーブルスペースに非対応  | 
^ HSQL  | データベースがテーブルスペースに非対応  | 
^ H2  | データベースがテーブルスペースに非対応  | 
^ Caché  | データベースがテーブルスペースに非対応  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  |
^ SQLite  | "constraintName”に指定した値は無視されますが、設定は必要 |

自動ロールバック対応: **はい**