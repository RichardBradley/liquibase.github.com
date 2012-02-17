====== カスタム SQL ======

"sql" タグを利用することで、どんな SQL でも書くことができます。LiquiBase の自動化されたリファクタリングでは対応していない複雑な変更を記述したり、LiquiBase の不具合や制限事項を回避するのに役立ちます。sql タグに含まれる SQL は複数の行に渡ることも可能です。

[[create stored procedure|ストアドプロシージャの作成]] リファクタリングは、ストアドプロシージャを作成するのにもっともよい方法です。

"sql" タグは、同一ファイルに複数行にわたる SQL 文を記述できます。SQL文は、; を SQL 文の最後に書いたり、SQL  文の間に go を書くことで分割できます。複数行にわたる SQL 文は、; または go にのみ対応しており、改行するだけでは十分でありません。ファイルにひとつの  SQL 文しかない場合は、; も go も必要ありません。

SQL は下記のようなフォーマットでコメントを含むことが可能です:

  - /* で始まり、*/ で終わる複数行のコメント。
  - <スペース>--<スペース> 形式の単一行末のコメント。

注意: デフォルトでは、行末の ";" または "go" で SQL 文は分割されます。このため、コメントまたは SQL 文でなくて、 ";" または、"go" で終わる場合、それを行末に記述すると無効な SQL 文になります。

===== 例 =====

<code xml>
<sql>insert into person (id, name) values (1, 'Bob')</sql>
</code>


===== 利用可能な属性 =====

^ stripComments  | true に設定することで、SQL を実行する前にあらゆるコメントを削除します。false の場合は削除しません。デフォルトは false  です。|
^ splitStatements  | LiquiBase に SQL 文を ; または go で分割させたくない場合に false に設定します。デフォルトは true です。 | 
^ endDelimiter  | 文を完了させるための区切り文字。デフォルトは";" ですが "" のように設定もできます。 | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | Sybase は、複数行にわたる SQL 文を利用する場合、stripComments を true に設定する必要があるでしょう | 
^ DB2  | 問題なし  | 
^ HSQL  | 問題なし  | 
^ Derby  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  |

自動ロールバック対応: **いいえ**

===== 例 =====
下記の例では、SQL タグを利用して Oracle の PL/SQL ブロックを実行する方法を示しています。これにより、変更ログである程度の動的な処理を実行できます。

新しく作成されるすべてのオブジェクトに対して、ある汎用的な処理を実行したいとします。
例:
  * 変更ログを実行する前に、ほかのスキーマのオブジェクトへのシノニムがあることを確認します。
  * 新しく作成されるテーブルに、適切な権限が付与されることを確認します。

この例では、書くテーブルにビューを作成したいと仮定しましょう。

変更ログの最後に runalways 属性のついた変更セットを実行するようにします。
まず、対応するビューが存在しないテーブルを抽出し、ビューを作成します。

<code xml>
  <changeSet author='jsmith' id='1' runAlways='true'>
    <sql splitStatements="false">
      DECLARE
        cursor c_newviews is
          select table_name
          from user_tables
          where table_name like 'DATABASECHANGELOG%'
          AND table_name||'_VW' not in
            (select view_name from user_views);
      BEGIN
        FOR r_newviews in c_newviews LOOP
          EXECUTE IMMEDIATE
            'CREATE VIEW ' || r_newviews.table_name || '_VW ' ||
            'AS SELECT * FROM ' || r_newviews.table_name;
        END LOOP;
      END;
    </sql>
  </changeSet>

</code>