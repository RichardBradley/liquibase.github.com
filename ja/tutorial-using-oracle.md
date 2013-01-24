====== Oracle  を用いた LiquiBase のチュートリアル ======
本文書は、LiquiBase のチュートリアルで、Oracle データベースとそのほかの Oracle のツールを利用して、どのようにデータベースオブジェクトを管理するかを示しています。また、Subversion を利用したブランチングとマージの方法も記述しています。このチュートリアルは、いくつかのベストプラクティスをまとめたものです。そのため、ソフトウェア開発環境のニーズをとらえた現実的なものです。もちろん、ニーズはもっと単純な場合もあるでしょう。ブランチングが要らなかったり、新規インストールを提供する必要がないかもしれません。この場合はあなたの状況にあうベストプラクティスと規約を利用するだけでよいのです。

チュートリアルで利用するシナリオは、ふたつの顧客、Solo と Duplex 向けにアプリケーションを開発している場合を想定しています。それぞれの顧客はそれぞれ異なったアップグレードのタイミングが必要です。

^時間軸 ^ 顧客 Solo          ^ 顧客 Duplex         ^
|t1 | r1.0 のインストール    |                |
|t2 | r1.1 へのパッチ適用   |                |
|t3 | r2.0 へのアップグレード | r2.0 のインストール   |

アプリケーションのライフサイクルで、開発チームはデータベースに多数の変更を行います。定期的に、それらの変更を統合して、新規インストールを迅速に出来るようにする必要があり ( また継続的なインテグレーション環境のためにも必要)、それによって顧客に小さな変更のまとまりをアップグレード用に提供できるのです。

今回のやり方は、各メジャーリリースごとに変更ログをクリーンアップするものです。これにより、顧客はメジャーリリースを段階的にアップグレードする必要があります。たとえば、リリース1.0 からリリース3.0へのアップグレードにあたっては、リリース2.0をインストールする必要があるのです。バージョン X ( バージョン X.y を含む )は、常に3つの部分から成り立っています: 

^スクリプト^概要^バージョン X のオブジェクト作成 ^ X-1 からのアップグレード^バージョンXへの最新の変更の適用^
|lb_install|バージョン X の新規インストール|  X  | |  X  |
|lb_upgrade_to_major|(X-1) から X へのアップグレード | |  X  |  X  |
|lb_update|同一メジャーバージョンないでのアップグレード、例 1.1から1.5|  | |  X  |

このチュートリアルでビルドを行うディレクトリ構造は下記の通りです (バージョン 5.x をリリースすると仮定しています)。Subversion サーバーを利用する代わりに、ローカルの “repo” ディレクトリをリポジトリとして利用します。
<code>
D:\projects
    +-- lbdemo
          +-- repo           <-- Subversion レポジトリ
          +-- trunk          <-- 作業用ディレクトリ
                +-- install  <-- 変更ログのインストール
                +-- latest   <-- 置き換え可能なオブジェクト(パッケージ、トリガー、ビュー)の変更ログ
                +-- v004     <-- バージョン4.0からのアップグレード用変更ログ
                +-- v005     <-- バージョン5.0からのアップグレード用変更ログ
</code>

**lb_install:** バージョン5.0の新規インストールは下記を実行:
  * ''install'' の変更ログ
  * the changelogs in ''latest'' creating 'replaceable' objects


**lb_upgrade_to_major:** バージョン4.xから5.0へのアップグレードは下記を実行:
  * ''v004'' の変更ログ
  * ''v005'' の変更ログ


**lb_update:** バージョン5.xからのアップグレードは下記を実行:
  * ''v005'' の変更ログ

チュートリアルでのシナリオは、下記の図に表されています。チュートリアルを実行している間にリファレンスとしてこの図を印刷するとよいでしょう。青い箱は Subversion のリビジョンを示しています。箱に書かれている文章は、変更を表すコミットメッセージです。

{{tutorial-overview.png?800|}}

===== ステップ 1: ソフトウェアのインストール =====
==== Oracle データベースのインストール ====
Oracle データベースが利用できない場合、Oracle XE を [Oracle Technology Network](http://www.oracle.com/technology)からダウンロードしてインストールします。 XE エディションのデータベースは開発と本番環境両方の目的で無償で利用できます。

==== SQL Developer のインストール ====
データベースオブジェクトを管理するための数多くのツールがあります。そのようなツールを持っていない場合は、SQL Developer を使ってみてはどうでしょう。SQL Developer は  [Oracle Technology Network](http://www.oracle.com/technology) から無償でダウンロードできます。

==== JDeveloper のインストール ====
Oracle JDeveloper もまた、無償で[Oracle Technology Network](http://www.oracle.com/technology)から取得できます。多数の機能がありますが、ここでは XML エディタにのみ触れることにしましょう。このエディタはスキーマに対応しており、変更ログを簡単に記述できます。

ダウンロードとインストールが終わったら、JDeveloper を起動します。プロキシー配下にある場合はプロキシを設定します:

Tools > Preferences > Web Browser and Proxy

次に、LiquiBase XSD を追加してエディターが LiquiBase スキーマを理解できるようにします。
Tools > Preferences > XML Schemas. "add" を選び、エンターを押す:

^Schema:| <nowiki>http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd</nowiki> |
^Extension: |xml|

OK を押せば、JDeveloper で変更ログを編集する準備が出来ました。アプリケーションやプロジェクトを作成する必要はありません。編集したい XML ファイルを開くだけでよいのです。

==== TortoiseSVN のインストール ====
TortoiseSVN は Subversion のためのグラフィカルなフロントエンドツールです。ファイルベースのリポジトリを作成する機能も持っています。このチュートリアルではその機能を利用します。Subversion サーバーにアクセスする必要はありません。TortoiseSVN を [http://tortoisesvn.net/](http://tortoisesvn.net/) からダウンロードしてインストールし、PC を再起動します。

==== ディレクトリ構造の作成と Subversion レポジトリ ====
チュートリアルのために下記のディレクトリを作成します。
<code>
D:
mkdir D:\projects\lbdemo\repo
</code>
Windows のエクスプローラで repo ディレクトリを右クリックし、 **TortoiseSVN > Create repository here** を選択します。これで Subversion のリポジトリが作成されました。

Windows のエクスプローラで repo ディレクトリを右クリックし、 **TortoiseSVN > Create repository here** を選択します。これで Subversion のリポジトリが作成されました。
再度 repo ディレクトリを右クリックし、**TortoiseSVN > Repo-browser** を選択します。ブラウザに小さな Windows のエクスプローラに似た画面が現れます。repo ディレクトリを右クリックし、**Create folder ..** を選択し、"trunk" と名前を入力します。変更をコミットする前にコメントを入力するよう求められますので、何か好きなコメントを入力します。

上記の手順を、"branches" と "tags" のフォルダに対しても実施します。


上記が終わるとディレクトリ構造は下記のようになっているはずです:
<code>
file:///D:/projects/lbdemo/repo
  +- branches
  +- tags
  +- trunk
</code>

リポジトリブラウザを閉じます。

Windows のエクスプローラに戻り、D:\projects\lbdemo に移動して、右側のパネルで右クリックし、**SVN Checkout ...** を選択します。ここで表示されたパネルで、下記を入力します:

^URL of repository: |''<nowiki>file:///D:/projects/lbdemo/repo/trunk</nowiki>''|
^Checkout directory: |''D:\projects\lbdemo\trunk''|

OK を押すと、trunk ディレクトリを作成することの確認画面が表示されます。Yes を選択し、OK を押します。Windows のエクスプローラで、trunk ディレクトリが緑のアイコンで表示されます。これは、コミットする変更がないワーキングコピーであることを示しています。

==== JDBC Driver のインストール ====
Oracle JDBC Drive をこちらからダウンロードします: [Redmond Path](http://www.oracle.com/technology/software/tech/java/sqlj_jdbc/index.html]]
10g R2 ドライバのリンクをクリックし、''ojdbc14.jar'' を選択します。

その jar ファイルを ''D:\projects\lbdemo'' ディレクトリに保存します。

==== LiquiBase のインストール ====
下記の手順に従って LiquiBase をインストールします。

PATH に"libuibase.bat" ファイルを含むディレクトリを追加します。[[http://sites.google.com/site/redmondlab/path) はパスを編集するのに便利なツールです: Windows の標準よりもはるかに便利です。

DOS プロンプトを開いて、''D:\projects\lbdemo\trunk'' ディレクトリに移動し、下記のコマンドを実行します:
<code>liquibase --version</code>
結果は下記のようになるはずです: ''LiquiBase Version: 1.9.0''


次に、''liquibase.properties.template'' という名前で "trunk" ディレクトリにファイルを作成します。ファイルの内容は下記の通りです:
<code>
#liquibase.properties
driver: oracle.jdbc.OracleDriver
classpath: ../ojdbc14.jar
url: jdbc:oracle:thin:@localhost:1521:XE
username: tbd
password: tbd
</code>
注意 classpath は現在のディレクトリからの相対パスです。

そのファイルを ''liquibase.properties'' としてコピーし、最後の2行を以下のように編集します:
<code>
#liquibase.properties
driver: oracle.jdbc.OracleDriver
classpath: ../ojdbc14.jar
url: jdbc:oracle:thin:@localhost:1521:XE
username: lb_dev
password: lb_dev
</code>


そのプロパティファイルを利用することで、コマンドラインからパラメータを入力する必要がなくなります。テンプレートを subversion にチェックインします。実際に接続するための詳細があるファイルをローカルに保存します。

''liquibase.properties'' ファイルを右クリックし、**TortoiseSVN > Add to ignore list > liquibase.properties** を選択

''liquibase.properties.template'' ファイルを右クリックし、**TortoiseSVN > Add** を選択

''trunk'' ディレクトリを右クリックし、**TortoiseSVN > commit** を選択。



===== ステップ 2: 初期データベーススキーマの作成 =====
このチュートリアルでは、これらのデータベーススキーマを作成します:
  * **lb_dev** - 開発環境
  * **lb_test** - テスト環境
  * **lb_solo** - 顧客 Solo 用環境
  * **lb_duplex** - 顧客 Duplex 用環境

SQL Developer を開き、”system” ユーザーを利用してデータベースへの接続を作成します。

File > New > Connections > Database connection

その接続を開き、これらのコマンドを実行します: 
<code>
drop user lb_dev cascade;
create user lb_dev identified by lb_dev;
grant connect, resource, create view to lb_dev;

drop user lb_test cascade;
create user lb_test identified by lb_test;
grant connect, resource, create view to lb_test;

drop user lb_solo cascade;
create user lb_solo identified by lb_solo;
grant connect, resource, create view to lb_solo;

drop user lb_duplex cascade;
create user lb_duplex identified by lb_duplex;
grant connect, resource, create view to lb_duplex;
</code>

SQL Developer で、それらのユーザーごとに接続を作成します。それらはあとで便利に利用できます。 

===== ステップ 3: プロジェクトディレクトリと標準ファイルの作成 =====
このステップでは、”trunk” ディレクトリ以下に下記の構造でディレクトリを作成します: 

<code>
trunk
  +-- install
  |     +-- cst      <-- Contains FK constraints, one file per table
  |     +-- seq      <-- Contains sequence definitions, one file per sequence
  |     +-- tab      <-- Contains table definitions, one file per table
  +-- latest
  |     +-- pkb      <-- Contains package bodies, one file per package
  |     +-- pks      <-- Contains package specifications, one file per package
  |     +-- trg      <-- Contains triggers, one file per trigger
  |     +-- vw       <-- Contains views, one file per view
  +-- v000
</code>

変更されないオブジェクト (アップグレードと逆です) のインストール用に別のディレクトリを作成します。

latest 以下に、オブジェクトの種類ごとに”replaceable” データベースオブジェクトのディレクトリを作成します。”replaceable” とは、単純に新しいバージョンに置き換えることでアップデートされるオブジェクトを意味しています。これらのオブジェクトの SQL 文は、create or replace で始まります。

DOS プロンプトにこれらのコマンドをペーストして、いっぺんにディレクトリを作成できます: 
<code>
cd \projects\lbdemo\trunk
mkdir install
mkdir install\cst
mkdir install\seq
mkdir install\tab
mkdir latest
mkdir latest\pkb
mkdir latest\pks
mkdir latest\trg
mkdir latest\vw
mkdir v000
</code>

スクラッチ(バージョン 0)から始めるので、ディレクトリ v000 は、バージョン0からの移行に必要な変更ログを含んでいます。

アップグレードを実行するシンプルなバッチファイルを作成します: 

**trunk/lb_update.bat**
<code>
@echo off
call liquibase --changeLogFile=update.xml update
</code>

上記のファイルは、''update.xml'' を参照しており、次のステップで作成します。

JDeveloper は XML ファイルを編集するのに有効なツールですが、新しい XML ファイルをスクラッチから作成するのは、かなり面倒です。下記のステップが最も簡単なやり方です:
  * Windows のエクスプローラで、空のファイルを作成します。 (New > TextDocument) そして適切なファイル名を設定します。
  * JDeveloper でそのファイルを開きます。
  * このチュートリアルの内容を JDeveloper にコピーペーストします。


**trunk/update.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="v000/master.xml" />
</databaseChangeLog>

</code>

それぞれの変更ログを適用する順序で、変更を含むファイルを作成します。

**trunk/v000/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 0 -->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>

</databaseChangeLog>
</code>

なぜこのファイルが前提条件を含むのか不思議に思うかもしれません。LiquiBase がすでに実行された変更をチェックしているのではありませんでしたか?ええ、もしバージョン5を新規インストールするとしたら、データベースは、バージョン5より前の変更を含んでいてはいけません。加えて、あやまってこれらの変更が絶対に実行されてほしくはないのです。ですから、明示的に preCondition として、これらをチェックしているのです。


現在のバージョンを Subversion にコミットします。trunk ディレクトリを右クリックし、 **SVN Commit...** を選択します。

"Initial version" のようなメッセージを入力し、すべてのファイルとディレクトリを選択して、OK を押します。これで、ファイルとディレクトリは、Windows エクスプローラで緑のアイコンで表示されるようになるでしょう。


===== ステップ 4: データベースオブジェクトの作成 =====
それぞれの変更 (初期生成を含む) は、課題番号に関連付いています: 不具合もしくはプロジェクトのタスクです。最初のタスク ( 73番で起こったとします) は、2つのテーブルを作成します。

ファイル構造は、図式したときに理解しやすいようになっています。白い箱は、ディレクトリを意味しています。青い箱は、ディレクトリ内部のファイルを意味しています。矢印は、一つのファイルがほかのファイルを呼び出すか含んでいることを意味しています。

{{media.600x688.png?600|}}

==== Change 73 ====
このタスクの定義です:
  * ''departments'' テーブルを作成し、シーケンスとトリガーを利用して主キーが生成されます
  * ''employees'' テーブルを作成し、departments テーブルに外部キーを作成します

それらの変更にたいしてひとつの変更ファイルを作成します。それはこれらの変更を含んでいます:
  * departments テーブル作成
  * シーケンス作成
  * トリガーへの異なるファイルのインクルードこのファイルは、''latest/trg'' ディレクトリに保存されます
  * employees テーブル作成

下記のファイルを作成します:

 
**trunk/v000/2009-10-15-73.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createTable tableName="departments"
                     remarks="The departments of this company. Does not include geographical divisions.">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="DPT_PK"/>
            </column>
            <column name="dname" type="varchar2(14)"
                    remarks="The official department name as registered on the internal website."/>
        </createTable>
        <addUniqueConstraint constraintName="departments_uk1"
                             columnNames="dname" tableName="departments"/>
        <createSequence sequenceName="departments_seq"/>
    </changeSet>
    
    <include file="latest/trg/departments_bi.xml"/>
    
    <changeSet author="jsmith" id="2">
        <createTable tableName="employees">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="EMP_PK"/>
            </column>
            <column name="ename" type="varchar2(14)"
                    remarks="The first and last name"/>
            <column name="salary" type="number(6,2)"
                    remarks="The full remuneration"/>
            <column name="dpt_id" type="number(4,0)"/>
        </createTable>
        <addForeignKeyConstraint baseColumnNames="dpt_id"
                                 baseTableName="employees"
                                 constraintName="emp_dpt_fk"
                                 referencedColumnNames="id"
                                 referencedTableName="departments"/>
    </changeSet>
</databaseChangeLog>
</code>

注意 テーブルとカラムの注釈(remarks)は、データベースのテーブルとカラムへのコメントとして生成されます。

**trunk/latest/trg/departments_bi.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createProcedure>
create trigger departments_bi before insert on departments
for each row
when (new.id is null)
begin
 select departments_seq.nextval into :new.id from dual;
end;
        </createProcedure>
        <rollback>
            drop trigger departments_bi
        </rollback>
    </changeSet>
</databaseChangeLog>
</code>

注意 runOnChange="true" 属性についてこれは、このファイルの将来の変更それらの変更が自動的に適用されることを確実にしています。注意 上記のファイルにもあるとおり、この変更を取り消すために明示的なロールバック文を提供しています。Liquibase は多くのコマンドに対して、自動的にロールバック文を生成しますが、SQL ブロックでは何が起こるかわからないため生成しません。

master.xml を更新し、その変更を含むようにします:

**trunk/v000/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 0 -->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v000/2009-10-15-73.xml" />
</databaseChangeLog>
</code>

それらをデータベースに適用し、テストするための準備が出来ました。以前に作成したバッチファイルを実行します:
<code>
D:\projects\lbdemo\trunk> lb_update
</code>
すべてがうまくいけば、確認のメッセージが現れるでしょう:  Migration successful.

SQL*Developer を利用して、DATABASECHANGELOG テーブルの内容を確認しましょう。3つの変更ログに対応する3行が見えるはずです。変更が必要なものと違っていた場合、ロールバックできます。変更をロールバックする SQL 文を見るにはこのようにします:
<code>
liquibase --changeLogFile=update.xml rollbackCountSQL 3
</code>
実際にロールバックを行うには:
<code>
liquibase --changeLogFile=update.xml rollbackCount 3
</code>

変更の実施とテストが完了したら、Subversion にこのコメントとともにコミットします: "73: Create tables departments & employees". 現在の状態は、このチュートリアルの最初に示した図に示されています。

このタスクは完了しました、次のタスクを続けましょう。

==== Change 59 ====
このタスクの定義です:
  * ''departments_pck'' パッケージの作成
  * ''departments_vw'' ビューの作成
どちらのオブジェクトも "replacable" タイプです。例 新しいバージョンが単純に古いものを置き換えます。そのため、それらのファイルは、"latest" ディレクトリに移動します。下記のファイルを作成または更新します:

**trunk/v000/master.xml** (add the new change to the end of the file)
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 0 -->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v000/2009-10-15-73.xml" />
    <include file="v000/2009-10-15-59.xml" />
</databaseChangeLog>
</code>

**trunk/v000/2009-10-15-59.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="latest/pks/departments_pck.xml"/>
    <include file="latest/pkb/departments_pck.xml"/>
    <include file="latest/vw/departments_vw.xml"/>
</databaseChangeLog>
</code>

**trunk/latest/pks/departments_pck.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createProcedure>
create or replace package departments_pck as
  function  upname(name in varchar2) return varchar2;
end departments_pck;
        </createProcedure>
        <rollback>
            drop package departments_pck
        </rollback>
    </changeSet>
</databaseChangeLog>
</code>


**trunk/latest/pkb/departments_pck.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createProcedure>
create or replace package body departments_pck as
  function upname(name in varchar2) return varchar2 is
  begin
    return upper(name);
  end;
end departments_pck;
        </createProcedure>
        <rollback>
            drop package body departments_pck
        </rollback>
    </changeSet>
</databaseChangeLog>
</code>


**trunk/latest/vw/departments_vw.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createView viewName="departments_vw">
            select id, dname
            from departments
        </createView>
    </changeSet>
</databaseChangeLog>
</code>

それらをデータベースに適用し、テストするための準備が出来ました。以前に作成したバッチファイルを実行します:
<code>
D:\projects\lbdemo\trunk> lb_update
</code>
すべてがうまくいったら、以下の確認メッセージが表示されます: Migration successful.

SQL*Developer を利用して、DATABASECHANGELOG テーブルの内容を確認しましょう。3つの変更ログに対応する3行が見えるはずです。変更をロールバックしてみましょう、ロールバック文をテストするためにこのように記述しました:
<code>
liquibase --changeLogFile=update.xml rollbackCount 3
</code>

変更の実施とテストが完了したら、Subversion にこのコメントとともにコミットします:"59: create departments_pck and departments_vw"

このようにしてプロジェクトのリマインダーを継続できます。しかしながら、いくつかのポイントで変更の数がとても大きくなり、新しい開始点を定義したくなることもあるでしょう。これは次のセクションでのトピックです。

===== ステップ 5: メジャーリリース用のブランチ =====
リリース 1.x をブランチ分けする準備が出来ました。これにより、0.0 から 1.0 への多数の変更を適用することなく、バージョン1.xの新規インストールが可能になります。もちろん、バージョン 0.x を実行している環境に対しても、差分以降を提供できます。

====  ステップ 5.1: このバージョンのファイナライズ ====
バージョン0への最後の変更が実施されました。これらすべての変更が適用されると、メジャーバージョン1になります。メジャーバージョンは、databasechangelog テーブルに記録されます。このファイルをそのバージョンを記録するように変更しましょう:


**trunk/v000/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!--These changes should only be run against a schema with major version 0-->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v000/2009-10-15-73.xml"/>
    <include file="v000/2009-10-15-59.xml"/>
    
    <!-- Do not include any more changes in this file -->
    <changeSet author="MajorVersion" id="1" />

</databaseChangeLog>
</code>

アップデートコマンドを実行してバージョン番号とともに変更ログを適用します:
<code>
lb_update
</code>

====  ステップ 5.2: 新規インストール用のスクリプトの作成 ====
LiquiBase は変更の組み合わせを、**変更ログ** として保存しています。しかしながら、初期オブジェクトを手動で作成することも出来ます、すでにあるデータベースからそれらを生成できたら便利でしょう。LiquiBase の generateChangeLog コマンドで、テーブルを変更ログファイルにエクスポートしますが、いくつかの不備があります:
  * すべてが一つのファイルに出力される。バージョン管理システムに適した概要を生成しない。
  * すべてのオブジェクトを出力するわけではない。例トリガーとパッケージは出力されません。

そのため、ここでは新しいユーティリティを利用することにします (ご覧ください!)。

まず、インストールのための変更ログを手動で作成します。変更ログの概要は以下のようになります:
  * "replaceable" オブジェクトは、以前に説明したように "latest" ディレクトリに保存されます。
  * ほかのオブジェクトは、"install" ディレクトリに保存されます。

我々の (手動の) ユーティリティがこれらのファイルを作成します:

**trunk/install/tab/departments.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createTable tableName="departments"
                     remarks="The departments of this company. Does not include geographical divisions.">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="DPT_PK"/>
            </column>
            <column name="dname" type="varchar2(14)"
                    remarks="The official department name as registered on the internal website."/>
        </createTable>
        <addUniqueConstraint constraintName="departments_uk1" columnNames="dname"
                             tableName="departments" />
    </changeSet>
</databaseChangeLog>
</code>

**trunk/install/tab/employees.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createTable tableName="employees">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="EMP_PK"/>
            </column>
            <column name="ename" type="varchar2(14)"
                    remarks="The first and last name"/>
            <column name="salary" type="number(6,2)"
                    remarks="The full remuneration"/>
            <column name="dpt_id" type="number(4,0)"/>
        </createTable>
    </changeSet>
</databaseChangeLog>
</code>

**trunk/install/seq/departments_seq.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createSequence sequenceName="departments_seq"/>
    </changeSet>
</databaseChangeLog>
</code>

**trunk/install/cst/employees.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <addForeignKeyConstraint baseColumnNames="dpt_id"
                                 baseTableName="employees"
                                 constraintName="emp_dpt_fk"
                                 referencedColumnNames="id"
                                 referencedTableName="departments"/>
    </changeSet>
</databaseChangeLog>
</code>



====  ステップ 5.3: 変更ログディレクトリとスクリプトの再編成 ====
1.0 からの変更ログのために新しいディレクトリを作成します:
<code>
mkdir v001
</code>

このディレクトリに、新しく master.xml ファイルを作成します:

**trunk/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
</databaseChangeLog>
</code>


update ファイルを編集します:

**trunk/update.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="v001/master.xml" />
</databaseChangeLog>
</code>

バージョン1.xの新規インストール用のスクリプトを作成します:

**trunk/lb_install.bat**
<code>
@echo off
call liquibase --changeLogFile=install.xml update
call liquibase --changeLogFile=update.xml  update
</code>

上記をみておわかりの通り、1.x のインストールを行ってから、1.x から最新バージョンへのアップデートを実行しています。不思議に思うかもしれません: なぜ、install.xml ファイルの最後に ''<include file="v001/master.xml" />'' のようなアップデートを含まないのかと? これはもちろん有効な方法でしょう。しかしながら、いくつかの理由でこれをおこなうと、master.xml にある前提条件が失敗します。

''install.xml'' を作成します。このファイルは、オブジェクトの新規作成、メジャーバージョン番号の記録、バージョン v001 からの新しい変更の記録を行います (下記のスクリプトの最後の2行をご覧ください):

** trunk/install.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <includeAll path="install/tab/" />
    <includeAll path="install/seq" />
    <includeAll path="install/cst" />
    <includeAll path="latest/pks" />
    <includeAll path="latest/vw" />
    <includeAll path="latest/pkb" />
    <includeAll path="latest/trg" />

    <changeSet author="MajorVersion" id="1" />

</databaseChangeLog>
</code>

====  ステップ 5.4: 新規インストールのテスト ====
liquibase.properties を編集して、ユーザー名とパスワードを追加します:
<code>
username: lb_test
password: lb_test
</code>

スキーマ lb_test で新規インストールを実施します:
<code>
lb_install
</code>

うまくいくはずです。

liquibase.properties を編集して、ユーザー名とパスワードを元に戻します::
<code>
username: lb_dev
password: lb_dev
</code>

lb_test への新規インストールがうまくいくことを確認することは、liquibase diff コマンドを実行して、lb_dev を増分的に実行するのと同一です。コマンドラインで下記のコマンドを実行します:
<code>
liquibase diff --baseUrl=jdbc:oracle:thin:@localhost:1521:XE --baseUsername=lb_test --basePassword=lb_test
</code>

このコマンドを実行するとテキストフォーマットでこのような出力がなされます。これは、二つに違いがないことを意味しています:
<code>
Diff Results:
Base Database: LB_TEST jdbc:oracle:thin:@localhost:1521:XE
Target Database: LB_DEV jdbc:oracle:thin:@localhost:1521:XE
Product Name: EQUAL
Product Version: EQUAL
Missing Tables: NONE
Unexpected Tables: NONE
Missing Views: NONE
Unexpected Views: NONE
Missing Columns: NONE
Unexpected Columns: NONE
Changed Columns: NONE
Missing Foreign Keys: NONE
Unexpected Foreign Keys: NONE
Missing Primary Keys: NONE
Unexpected Primary Keys: NONE
Missing Unique Constraints: NONE
Unexpected Unique Constraints: NONE
Missing Indexes: NONE
Unexpected Indexes: NONE
Missing Sequences: NONE
Unexpected Sequences: NONE
</code>

Liquibase は、変更ログフォーマットで出力することも出来ます。マニュアルで、''diffChangeLog'' コマンドを参照してください。

リリース 1.x は技術的に正確なことが裏付けられ、ブランチ分けの準備が出来ました。

現在のバージョンを Subversion にコミットします。trunk ディレクトリを右クリックし、 **SVN Commit...** を選択します。新しく生成されたすべてのファイルを含みます。

"Finalize 1.x",のようなメッセージを入力し、すべてのファイルとディレクトリを選択して、OK を押します。これで、ファイルは、Windows エクスプローラで緑のアイコンで表示されるようになるでしょう。


====  ステップ 5.5: バージョン 1.x のブランチ分け ====
''trunk'' を右クリックして、**TortoiseSVN > Repo-browser** を選択します。左ペインの ''trunk'' を選択します。デフォルトでは、HEAD を選択するようになっており、それで問題ありません。しかし、ほかの誰かが時々 trunk に変更をコミットしたとき、1.x でファイナライズしたリビジョンを選びたくなることがあるかもしれません。

''trunk'' を右クリックして、''copy to ..'' を選択します。

Fill in:
^New Name:| <nowiki>file:///D:/projects/lbdemo/repo/branches/1.x</nowiki>|

ログメッセージに "Branched 1.x" と入力し OK を押します。

左ペインの branches の下に、1.xという名前のフォルダーが見つかるでしょう。''branches/1.x'' を右クリックして、 **Checkout ...** を選択します。

^URL of repository:   | <nowiki>file:///D:/projects/lbdemo/repo/branches/1.x</nowiki>     |
^Checkout directory:  | D:\projects\lbdemo\branch_1.x  |

新しくディレクトリが作成され、このブランチのファイルを含んでいます。システムテストが開始可能となり、このバージョンが出荷可能なのか検証できます。

このディレクトリから新規インストールを lb_test スキーマに対して実施しましょう。

''branch_1.x'' ディレクトリに遷移し、''liquibase.properties.template'' ファイルを''liquibase.properties''にコピーします。接続の詳細を下記に変更します。
<code>
username: lb_test
password: lb_test
</code>

SQL Developer を利用して lb_test スキーマを再作成します。system ユーザーで接続し下記を実行します:
<code>
drop user lb_test cascade;
create user lb_test identified by lb_test;
grant connect, resource, create view to lb_test;
</code>

''branch_1.x'' ディレクトリから新規インストールを実施します:
<code>
cd \projects\lbdemo\branch_1.x
lb_install
</code>

===== ステップ 6: テストデータの作成 =====
データ移行機能をテストするために、テストデータをインサートしましょう。SQL Developer で、このスクリプトを実施します:

<code>
insert into departments (id, dname) values (1, 'HQ');
insert into departments (id, dname) values (2, 'Sales');
insert into employees (id, ename, salary, dpt_id) values (1, 'King', 1200, 1);
insert into employees (id, ename, salary, dpt_id) values (2, 'Smith', 1000, 2);
commit;
</code>

**lb_dev** スキーマと**lb_test**スキーマでスクリプトを実行します。このデータ用には liquibase スクリプトを作成しませんので、Subversion にも保存しません。データのセットアップとテストデータのメンテナンスは、ほかのチュートリアルで行うべきものなので、ここでは触れません。疑問に思うなら、**insert data** と **load data** の機能をLiquiBase マニュアルで参照してください。

===== ステップ 7: bug 102 の修正 =====
バージョン 1.x へのシステムテストによって、不具合が発見されたため、バージョン 1.0をリリースする前に修正する必要があることがわかりました。trunk で不具合を修正し、関係のあるブランチにバックポートします。

この変更は、変更管理システムで bug102 として登録されています。変更の内容は:
  * column employees.salary カラムを2つのカラムで置き換える: fixed_salary と bonus (どちらも NOT-NULL)
  * bonus の値はsalary の 0.1倍
  * fixed_salary の値はsalary の 0.9倍

変更は、バージョン 1.x からなされたことを忘れないようにしましょう、変更ログは v001 ディレクトリに置かれます。変更ログを作成します:

** trunk/v001/2009-10-16-102.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <addColumn tableName="employees">
            <column name="fixed_salary" type="number(6,2)"
                    remarks="Monthly gross salary"/>
            <column name="bonus" type="number(6,2)"
                    remarks="On-target monthly bonus"/>
        </addColumn>
        <update tableName="employees">
            <column name="fixed_salary" valueNumeric="salary * 0.9"/>
            <column name="bonus" valueNumeric="salary * 0.1"/>
        </update>
        <addNotNullConstraint tableName="employees" columnName="fixed_salary" />
        <addNotNullConstraint tableName="employees" columnName="bonus" />
        <dropColumn tableName="employees" columnName="salary" />
    </changeSet>
</databaseChangeLog>
</code>

''master.xml'' を編集して、このファイルを含むようにします:

**trunk/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v001/2009-10-16-102.xml"/>
</databaseChangeLog>
</code>

アップデートコマンドを実行します:
<code>
lb_update
</code>


注意 この変更は自動でロールバックさせることが出来ません。この変更をロールバックできるようにしたい場合は、ロールバックのためのロジックを定義しなければいけません。

［参考］ SQL Developer を利用して変更が適用されたかを確認します。

<code>
DESC employees

ame                 Null     Type
-------------------- -------- ------------
ID                   NOT NULL NUMBER(4)
ENAME                         VARCHAR2(14)
DPT_ID                        NUMBER(4)
FIXED_SALARY         NOT NULL NUMBER(6,2)
BONUS                NOT NULL NUMBER(6,2)

5 rows selected

SELECT * FROM employees;

ID   ENAME     DPT_ID    FIXED_SALARY   BONUS
---- --------- --------- -------------- -----
1    King      1         1080           120  
2    Smith     2         900            100  

2 rows selected
</code>

TortoiseSVN を用いてそれらの変更をコミットします。ログメッセージ: "102: Replace salary by fixed_salary and bonus"

===== ステップ 8: bug 102 を ブランチ 1.x にバックポート  =====
=== マージの実施  ===
''branch_1.x'' and choose ディレクトリを右クリックし、**TortoiseSVN > Merge...** を選択します。

^Merge type: | Merge a range of revisions |

Next を押します

^URL to merge from: | <nowiki>file:///D:/projects/lbdemo/repo/trunk</nowiki> |
^Revision range to merge: | Use the [Show log] button to display the list of revisions. Select the change for bug 102. |

Next を押します

Merge を押します

OK を押し、結果のウィンドウを閉じます。

Windows エクスプローラで、''2009-10-16-102.xml'' ファイルが v001 ディレクトリに追加されたのがわかるでしょう、また ''v001/master.xml'' も更新されました。''master.xml'' ファイルを右クリックし、**TortoiseSVN > Diff** を選択します。master.xml ファイルにたった1行だけ追加されたのがわかります。

branch_1.x を "102: backport" というコメントでコミットします。

=== Test the results  ===
更新を実施します:
<code>
cd D:\projects\lbdemo\branch_1.x
lb_update
</code>

SQL Developer を利用して、lb_test スキーマの employees テーブルの salary と bonus が修正されたかを確認します。

=== Tag this revision as 1.0  ===
受け入れテストが終了しましたので、このバージョンを"1.0"リリースとしてラベル付けします。''branch_1.x'' を右クリックし、 **TortoiseSVN > Branch/Tag ...** を選択します。ダイアログを下記のように設定します:

^From WC at URL:                     | <nowiki>file:///D:/projects/lbdemo/repo/branches/1.x</nowiki>     |
^To URL:                             | <nowiki>file:///D:/projects/lbdemo/repo/tags/1.0</nowiki>  |
^Create copy in the repository from: | (leave as default)        |
^Log message:                        | Tagged as 1.0                           |

OK を押し、リポジトリブラウザを閉じます。

バージョン1.0をカスタマーに提供できるようになりました。

===== ステップ 9: バージョン 1.0 のインストール for Solo =====
バージョン1.0をカスタマー Solo に提供できるようになりました。 ''D:\projects\lbdemo\solo'' ディレクトリを作成します。ディレクトリを右クリックし、TortoiseSVN > Export を選択します。ダイアログを下記のように設定します:

^URL of repository:                  | <nowiki>file:///D:/projects/lbdemo/repo/tags/1.0</nowiki>  |
^Export directory:                   | D:\projects\lbdemo\solo         |
Leave the rest as default and press OK. そのファイルは、solo ディレクトリに出力されます。

''liquibase.properties.template'' ファイルを ''liquibase.properties'' にコピーし、ユーザー名とパスワードを ''lb_solo'' に変更します。

初期インストールへの変更ログとバージョン1.0 のパッチをSoloの空のスキーマに適用します:
<code>
cd D:\projects\lbdemo\solo
lb_install
</code>

2回、"Migration successful" のメッセージを受け取れば、Solo は1.0 で稼働しています。


===== ステップ 10: trunk でのさらなる開発 (change 105) =====
ここでの変更の内容は下記の通りです:
  * add column mgr_id to the departments table. To be populated by the mgr_id of King.
  * departments.mgr_id -> employees.id への外部キーを追加する

変更ログを作成します:

**trunk/v001/2009-10-16-105.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <addColumn tableName="departments">
            <column name="mgr_id" type="number(4,0)"/>
        </addColumn>
        <sql>update departments
             set mgr_id = (select id
                           from employees
                           where ename='King');
        </sql>
        <addForeignKeyConstraint baseColumnNames="mgr_id"
                                 baseTableName="departments"
                                 constraintName="dpt_emp_fk1"
                                 referencedColumnNames="id"
                                 referencedTableName="employees"/>
    </changeSet>
</databaseChangeLog>
</code>

''master.xml'' を編集して、このファイルを含むようにします:

**trunk/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v001/2009-10-16-102.xml"/>
    <include file="v001/2009-10-16-105.xml"/>
</databaseChangeLog>
</code>

アップデートコマンドを実行します:
<code>
lb_update
</code>

SQL Developer を利用して変更が適切に適用されたかを確認します。

TortoiseSVN を用いてそれらの変更を"105: Add mgr_id and foreign key"といったコメントとともにコミットします。

===== ステップ 11: メジャーリリース 2.x のブランチ分け =====
これは、ステップ5と同様です。1.x を 2.x に置き換えて、ステップ5を繰り返します。

しかしながら、違いがあります。1.x を実行している顧客は、2.x にアップグレードできる必要があるのです。以前はその観点に触れていませんでした。1.x を利用している顧客が、単純に lb_update をしたならば、master.xml にある前提条件の部分で失敗することでしょう:

<code>
    <preConditions>
        <!-- These changes should only be run against a schema with major version 2 -->
        <sqlCheck expectedResult="2">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
</code>

では、どうやって "最後の1.x" と "最後の2.x" の間で行われたすべての変更を、2.x の変更を適用する前に適用することが出来るのでしょうか?このステップの概要を理解するためにチュートリアルの最初で用いた図を参照しましょう。変更105についてお話ししていることがわかるでしょう。変更105は、1.x ブランチでは決して提供されませんでしたから、v002/master.xml には含まれていません。

回答は、ステップ5.3の一部で二つの新しいファイルを作成することです:

**trunk/lb_upgrade_to_major.bat**
<code>
@echo off
call liquibase --changeLogFile=upgrade_to_major.xml update
call liquibase --changeLogFile=update.xml update
</code>

**trunk/upgrade_to_major.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="v001/master.xml" />
</databaseChangeLog>
</code>


===== ステップ 12: Change 114 カラムのリネーム =====
ブランチ2.xをテストして、ブランチ1.xでも修正したい不具合が発見されたとします。employees.ename カラムを full_name にリネームする必要があります。このステップの概要を理解するためにチュートリアルの最初で用いた図を参照しましょう。これまでで、規則性はわかったと思います。

変更ログを作成します:

**trunk/v002/2009-10-18-114.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <renameColumn newColumnName="full_name" oldColumnName="ename" tableName="employees"/>
    </changeSet>
</databaseChangeLog></code>

''master.xml'' を編集して、このファイルを含むようにします:

**trunk/v002/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 2 -->
        <sqlCheck expectedResult="2">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v002/2009-10-18-114.xml"/>
</databaseChangeLog>
</code>

アップデートコマンドを実行します:
<code>
lb_update
</code>

SQL Developer を利用して変更が適切に適用されたかを確認します。

TortoiseSVN を用いてそれらの変更を "114: Renamed employee.ename to full_name" といったコメントとともにコミットします。

===== ステップ 13: 変更114をブランチ1.x にバックポート =====
これは、一つの大きな例外を除いては、ステップ8と同様です。trunk では、変更114は、v002 ディレクトリに記録され、ファイルは  v002/master.xml にありました。

ブランチ1.x には、v002 ディレクトリがありません。その変更ログを保持するためにディレクトリを作成しましょう。しかしながら、 ''v002/master.xml'' というファイル名で作成するわけでは**ありません**。ブランチには、たった一つの master.xml があるべきで、それは変更の順序を記録しています。

変更114 は、下記のように''v001/master.xml'' で参照されるでしょう:

**branch_1.x/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v001/2009-10-16-102.xml"/>
    <include file="v002/2009-10-18-114.xml"/>
</databaseChangeLog>
</code>

===== ステップ 14: 変更 114 を ブランチ 2.x にバックポート =====
これはステップ8と同様です。

===== ステップ 15: リリース 1.1 の Solo への提供 =====
これはステップ9と同様です、例外は lb_install の代わりに、lb_update コマンドを実行して、カスタマー Solo の環境を 1.x ブランチの最新バージョンに更新することです。

===== ステップ 16: カスタマー Duplex にバージョン2.0を新規インストールで提供 =====
これは、ステップ9と同様ですが、タグ2.0からエクスポートを実施します。

===== ステップ 17: カスタマー Solo に対するアップグレード版2.0の提供 =====
以前のステップで作成した同じエクスポートがカスタマー Solo に対しても提供できます。 

カスタマー lb_solo は、''lb_upgrade_to_magor'' コマンドを実行します。


===== 開発者向け手順のまとめ =====
==== データベースリファクタリング ====
デフォルトのアクションは、<日付>-課題番号>.xml ファイルを vXXX ディレクトリに作成し、変更を特定します。ファイル名の例: ''v002/2009-12-25-305.xml''

^ ^Create^Modify^Delete^
^Table|Default|Default|Default|
^Sequence|Default |Default |Default |
^View|Create new file in directory ''latest/vw''. このファイルを変更ファイルにインクルードします。|ファイルを''latest/vw'' ディレクトリに移動します。このファイルを変更ファイルにインクルードします。|下記参照  |
^Trigger|Create new file in directory ''latest/trg''. このファイルを変更ファイルにインクルードします。|ファイルを''latest/trg''ディレクトリに移動します。このファイルを変更ファイルにインクルードします。|下記参照|
^Package|Create new file in directory ''latest/pck''. このファイルを変更ファイルにインクルードします。|ファイルを''latest/pck''ディレクトリに移動します。このファイルを変更ファイルにインクルードします。|下記参照|


=== 最新ディレクトリからオブジェクトの削除 (ビュー､トリガー､パッケージ) ===
ここでは、ビューでの手順を説明します、トリガーとパッケージも同様です。

ビューを''latest/vw'' ディレクトリから削除します。

ビューを削除する変更セットを前提条件とともに作成します。前提条件により、ビューが存在しない場合のエラーを回避できます。これは、ビューの定義をする前にデータベースに変更ログを適用する場合に当てはまります:
<code>
    <changeSet author="jsmith" id="1">
        <preConditions onFail="MARK_RAN">
            <viewExists viewName="departments_vw">
        </preConditions>
        <dropView viewName="departments_vw"/>
    </changeSet>
</code>
または
<code>
    <changeSet author="jsmith" id="1" failOnError="false">
        <dropView viewName="departments_vw"/>
    </changeSet>
</code>
master に変更セットを追加します。

ビューの定義(すでに存在していません)を含んでいるすべての変更ログを検索します。関連する変更ログからその行を削除します。


==== そのほかの手続き (リファクタリング以外) ====
=== メジャーリリースのブランチ分け ===
例として、リリース4.xのために準備をしていると仮定しましょう。

trunk にはこれらが含まれるようになります:
  * 3.x のインストールスクリプト
  * 2.x から(3.xへの)アップグレード変更ログ
  * 3.x から(4.xへの)アップグレード変更ログ

trunk では、下記が実施されます:
  - 4.x の新規インストールスクリプト(3.xのものの置き換え)
  - 2.x でのすべての(更新の)変更ログの削除
  - 4.x 用のからの変更ログコンテナの作成
  - master.xml に含まれるこれらのコンテナの名称変更
  - コミット

このリビジョンから新しいブランチを、"4.x" という名前で作成します。x は、4.0 以降のすべてのパッチがこのブランチに含まれることを意図しています。4.1 の開発はこの trunk でなされます。

