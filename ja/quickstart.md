====== Liquibase クイックスタート ======

===== ステップ 1: 変更ログファイルの作成: =====

[データベース変更ログファイル](ja/manual/databasechangelog) は、すべてのデータベースへの変更を記録するものです。XML をベースにしていますから、空の XML ファイルから始めましょう:


<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd">

</databaseChangeLog>
</code>                     



===== ステップ 2: 変更セットの追加 =====

それぞれの [変更セット](ja/manual/changeset)は、"id" と "author" 属性によって一意に識別されます。これら2つのタグは、名前とパッケージ、changelog ファイルと一緒に使われ、変更を一意に特定します。仮に "id" だけで一意に指定するのでよいなら、すぐに誤って重複が発生するでしょう、複数の開発者と複数のコードブランチが関連する場合は特に。 "author" 属性を保持することで、重複の可能性を最小限にしています。

それぞれの変更セットは、データベースへ適用したいアトミックな変更であることを考慮しましょう。通常は、一つの変更セットに、たったひとつだけの変更を含むのがよいやり方です、しかしもっと多くの変更を含むことも可能です。もし、複数の行を insert して、何らかの理由で失敗した場合に、すべてをいっぺんに取り消したいといった理由がある場合もあるでしょうから。Liquibase はそれぞれの変更セットをトランザクションとして実行しようとします。しかし多くのデータベースは暗黙的なコミットを行い、各コマンドをトランザクションとして保持してしまいます (create table, drop table など)

<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd">

    <changeSet id="1" author="bob">
        <createTable tableName="department">
            <column name="id" type="int">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column name="name" type="varchar(50)">
                <constraints nullable="false"/>
            </column>
            <column name="active" type="boolean" defaultValueBoolean="true"/>
        </createTable>
    </changeSet>

</databaseChangeLog>
</code>                  





===== ステップ 3: 変更セットの実行 =====

[ コマンドライン](ja/manual/command line )、 [ サーブレットリスナー](ja/manual/Ant]]、[[ja/manual/Maven]]、[[ja/manual/Grails]]、そして[[ja/manual/servlet listener )を通じて、変更ログに含まれる変更を実施する多くの方法があります。

<code>
liquibase --driver=com.mysql.jdbc.Driver \
     --classpath=/path/to/classes \
     --changeLogFile=com/example/db.changelog.xml \
     --url="jdbc:mysql://localhost/example" \
     --username=user \
     --password=asdf \
     migrate
</code>                    


===== ステップ4: データベースの確認 =====

データベースに "department" という名前のテーブルができているはずです。そのほかにも2つのテーブルができているでしょう。"databasechangelog" と "databasechangeloglock" の2つです。 databasechangelog テーブルは、データベースに対して実行されたすべての 文を保持しています。databasechangeloglock テーブルは、2つの環境から同時に同じデータベースの移行をしないために使用されます。




===== 次のステップ =====

このクイックスタートは、Liquibase を始めるために書かれました。できることのすべての詳細な記述や、migrator を実行するためのそのほかの方法は、Liquibase の[ マニュアル ](ja/manual/home )を参照してください。[ベストプラクティス](bestpractices)を読みましょう。拡張性のあるシナリオでは、[tutorial using Oracle](tutorial-using-oracle) を参照してください。


また、[トレーニング](training) を見ることもできます。