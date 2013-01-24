====== Formatted SQL Changelogs ======

LiquiBase 2.0 では、"SQLそのまま"の変更ログファイルに対応しています。これらの変更ログは、XML の変更ログから呼び出すこともできますし、任意のSQL文を含むこともできます。ここでの記述は、[[Custom SQL]] リファクタリングに変更されます。

フォーマットされたSQLファイルは、コメントを利用してLiquiBaseにメタデータを提供します。それぞれのSQファイルは、次のコメントから始めなければなりません:

<code sql>
--liquibase formatted sql
</code>

===== 変更セット =====

Each changeset in a formatted SQL file begins with a comment of the form

<code sql>
--changeset author:id attribute1:value1 attribute2:value2 [...]
</code>

The changeset comment is followed by one or more SQL statements, separated by
semicolons (or the value of the <endDelimiter> attribute).

==== 利用可能な変更セット属性 =====
これらの属性がそれぞれの変更セットで利用可能です:

^ stripComments  | trueに設定すると、SQLの実行前にすべてのコメントを削除します。デフォルトは false  | 
^ splitStatements  | falseに設定すると、LiquiBaseが;やGOで文を分割しません。デフォルトはtrue  | 
^ endDelimiter  | 分の区切りを設定するデリミタ。デフォルトは、";" "" と設定することも可能。  | 
^ runAlways  | 以前に実行されていたかにかかわらず、その変更セットを毎回実行する |
^ runOnChange  | Executes the change the first time it is seen and each time the change set has been changed |
^ context  | Executes the change if the particular context was passed at runtime. Any string can be used for the context name and they are checked case-insensitively. |
^ runInTransaction  | Should the changeSet be ran as a single transaction (if possible)?  Defaults to true.  **Warning: be careful with this attribute.  If set to false and an error occurs part way through running a changeSet containing multiple statements, the LiquiBase databasechangelog table will be left in an invalid state** |
^ failOnError | Should the migration fail if an error occurs while executing the changeSet? |
^ dbms  | The type of a database which that changeSet is to be used for. When the migration step is running, it checks the database type against this attribute. Valid database type names are listed on the [supported databases page](../databases) |

===== Rollback Actions =====

Changesets may include statements to be applied when rolling back the changeset. Rollback statements are comments of the form
<code sql>
--rollback SQL STATEMENT
</code>

===== 変更ログの例 =====

<code sql>
--liquibase formatted sql

--changeset nvoxland:1
create table test1 (
    id int primary key,
    name varchar(255)
);
--rollback drop table test1;

--changeset nvoxland:2
insert into test1 (id, name) values (1, ‘name 1′);
insert into test1 (id, name) values (2, ‘name 2′);

--changeset nvoxland:3 dbms:oracle
create sequence seq_test;
</code>
