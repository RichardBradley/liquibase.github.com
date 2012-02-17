====== データベースドキュメント生成 ======

変更ログとデータベースの情報を元にして、LiquiBase はデータベースへの変更に関するドキュメントを生成できます。


===== DBDoc の実行 =====

The dbDoc コマンドは、現在のところ[[command line | コマンドライン]] からの実行のみ対応しています。


===== 例 =====

<code>
liqubase.sh --driver=oracle.jdbc.OracleDriver \
        --url=jdbc:oracle:thin:@testdb:1521:test \
        --username=bob \
        --password=bob \
        --changeLogFile=path/to/changelog.xml
    dbDoc \
        /docs/dbdoc
</code>


===== アウトプットサンプル =====

出力されるドキュメントは、"JavaDoc" のドキュメンテーション形式を元にしています。サンプルの変更ログからの出力例は、 [[http://www.liquibase.org/dbdoc/index.html|こちら]]から取得可能です。
