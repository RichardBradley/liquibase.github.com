====== 対応データベース ======

データ型や SQL 文法の違いもあり、現在下記のデータベースに対応しています。これらのデータベースへの追加機能やそのほかのデータベースへの対応は、[[http://liquibase.org/extensions|Liquibase extensions]] によって利用可能です。


^ データベース ^ 種別名  ^ 補足  ^
| MySQL	 | mysql | 問題なし  |
| PostgreSQL  | postgresql | 8.2 以降のバージョンでのみ、"drop all database objects" 機能が利用できます。  |
| Oracle  | oracle | データベースキャラクタセットが AL32UTF8 か AL16UTF16 の際には、diff を実行するために11g ドライバが必要です。   |
| MS-SQL  | mssql | 問題なし  |
| Sybase Enterprise | sybase | ASE 12.0 以上のバージョンが必要です。"select into" データベースオプションを設定する必要があります。最適なドライバは JTDS です。Sybase はDDL へのトランザクションをサポートしていないので、ロールバックはきちんと動作しません。外部キーは、ロールバックや dropAll 機能を妨げる場合には削除できません。|
| Sybase Anywhere | asany  | //1.9 から//  |
| DB2  | db2 | 問題なし。必要なときには、auto-call REORG を実施します。|
| Apache Derby  | derby | 問題なし  |
| HSQL  | hsqldb | 問題なし  |
| H2  | h2 | 問題なし  |
| InterSystems Caché  | cache | 問題なし  |
| Firebird  | firebird | 問題なし  |
| MaxDB / SAPDB  | maxdb | 問題なし  |
| SQLite ( LiquiBase 1.8 から) | sqlite | 問題なし  |






====== 対応していないデータベースで利用するには ======

Liquibase は、SQL が異なりうる複数の DBMS 同士をつなぐ唯一の基準である JDBC 規格に準拠して作成されています。Liquibase を対応していないデータベースに対して使おうとする場合も、たいていの場合はうまく実行できるでしょう。ありがちな唯一の問題は、現在の date/time ファンクション名に関するものです。もし、Liquibase が、てきせつな date/time ファンクションを決定できなかったら、それを currentDateTimeFunction の引数に渡すことができます。 (参照 [[ja/manual/command line]] と [[ja/manual/Ant]])

対応していないデータベースの変更/リファクタリングタグによって生成されるSQL で問題が発生するかもしれません。この問題に対するもっともよい方法は、まず、標準の変更/リファクタリングタグを使用することです。もし、エラーが発生するなら、[[ja/manual/custom_sql|<sql> タグ]] に戻って、データベースに対応するような方法で、すべての変更のを記録する必要があります。


もし、何らかの理由で、DatabaseChangeLog テーブルがデータベースに作成できない場合に、あなたの環境に応じて変更できる SQL  文のもとはこちらです:


<code sql>
CREATE TABLE DATABASECHANGELOG (id varchar(150) not null,
author varchar(150) not null,
filename varchar(255) not null,
dateExecuted datetime not null,
md5sum varchar(32),
description varchar(255),
comments varchar(255),
tag varchar(255),
liquibase varchar(10),
primary key(id, author, filename))
</code>

DatabaseChangeLog テーブルを自分で作る理由は、null の列が必要になったり、インデックスの制限によって主キーの列の長さに問題がある場合などです。データ型やデータ長は必要があれば変更できます、Liquibase はたんにそのテーブルの存在をチェックしているだけです。
