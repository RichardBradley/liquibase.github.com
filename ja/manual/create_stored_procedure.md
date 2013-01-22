====== ストアドプロシージャの作成 ======

"createProcedure" タグを利用して、ストアドプロシージャの定義を作成 (または作成と置き換え)が可能です。このタグは、"sql" タグを利用するよりも適しています。なぜなら、コメントを削除したり行を中断したりしないからです。

CREATE OR REPLACE 文と一緒にrunOnChange = "true" タグをchangeSet タグを閉じるのにを使うのがよい場合があります。プロシージャに変更を加える必要があるときは、新しく REPLACE PROCEDURE を実行するのではなく、現存のコードを変更するだけでよいのです。この方法のよいところは、変更ログを比較的小さくし、ソースコントロールシステムの diff コマンドを利用して、どこが変わったかを容易に知ることができる点です。

===== 例 =====

<code xml>
<createProcedure>
    CREATE OR REPLACE PROCEDURE testHello
    IS
    BEGIN
      DBMS_OUTPUT.PUT_LINE('Hello From The Database!');
    END;
</createProcedure>
</code>



===== データベースの互換性 =====

^ MySQL  | CREATE OR REPLACE は非対応| 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ HSQL  | 問題なし  | 
^ Derby  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 非対応  | 

自動ロールバック対応: **いいえ**
