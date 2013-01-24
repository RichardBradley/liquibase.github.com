====== SQL アウトプット ======

開発とリリースプロセスによっては、LiquiBase で直接データベースを更新したくないこともあるでしょう。結果の SQL 文を調整したかったり、SQL に DBA の承認が必要だったり、 [SOX コンプライアンス](http://blog.liquibase.org/2007/07/sox-compliance-and-database-refactoring.html)対応などが主な理由です。

このため、すべての[[update]] と [[rollback]] コマンドには、"sql output" モードがあり、データベースに対して何も実行せず、代わりに結果の SQL を標準出力か特定のファイルに出力します。
