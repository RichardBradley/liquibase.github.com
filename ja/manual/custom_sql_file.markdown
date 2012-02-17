====== カスタム SQL ファイル ======

"sqlFile" タグを利用することで、どんな SQL 文でも指定でき、それを外部のファイルに保存できます。これはストアドプロシージャのような LiquiBase の自動リファクタリングでは対応していない複雑な変更を行う場合に有用です。

sqlFile リファクタリングは、下記の順序でファイルを検索します:

  - クラスパスを元に検索されます。これは手動で設定することもできますし、LiquiBase の起動スクリプトは実行時にカレントディレクトリをクラスパスに追加します。
  - file 属性をファイル名として利用することで検索も可能です。絶対パスでも現在のディレクトリからの相対パスでも指定可能です。

"sqlFile" タグは、同一のファイルに複数の SQL 文を記述にも対応しています。SQL 文は文の最後に ; を記述するか、go を SQL 文の間におくことで分割可能です。複数の SQL 文は ; または go によって SQL 文が終了したことを示します。改行だけでは不十分です。ファイルにひとつの SQL 文しかない場合は、; も go も不要です。

SQL ファイルは下記の形式でコメントを含むことができます:

  - /* で始まり、*/ で終わる複数行のコメント
  - <space>--<space> の形式で文の最後に記述される単一行のコメント


===== 例 =====

<code xml>
<sqlFile path="sample.sql"/>
</code>

sample.sql には下記を含むことができます:
<code sql>
insert into person (id, name) values (1, 'Bob')
</code>

複数行の sample.sql はこのようなものがあります:
<code sql>
insert into person (id,name) values (1, 'George');
insert into person (id,name) values (2, 'Jim')
</code>

MSSQL では、go を利用することで複数行の SQL 文を記述できます:
<code sql>
insert into person (id,name) 
values (1, 'George')
go
insert into person (id,name) 
values (2, 'Jim')
</code>                    


===== 利用可能な属性 =====

^ path  | 読み込む SQL ファイル名  | 
^ stripComments  | true に設定すると、SQL 文の実行前にすべてのコメントを削除します。デフォルト値は false です。 | 
^ splitStatements  | false に設定すると、; や go を記述しても SQL 文を分割しません。デフォルト値は true です。  | 
^ encoding  | 使用するファイルの文字エンコーディング | 
^ endDelimiter  | 文を完了させるための区切り文字。デフォルトは";" ですが "" のように設定もできます。 | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  |  Sybase では、複数行の SQL 文を記述する場合に、stripComments を true に設定する必要があるでしょう。 | 
^ DB2  | 問題なし  | 
^ HSQL  | 問題なし  | 
^ Derby  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  |

自動ロールバック対応: **いいえ**