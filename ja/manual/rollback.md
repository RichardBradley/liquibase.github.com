====== 変更セットの取り消し ======

LiquiBase は、データベースに対して行った変更を、自動でもカスタマイズしたロールバックのための SQL 文のどちらからでも取り消す(ロールバックする)ことができます。ロールバックは、[[command line | コマンドライン]] ,  [[Ant]], [[Maven]], そして [[Grails]] から利用できます。





===== どのようにロールバックは制御されるか =====

多くのリファクタリング、たとえば "create table", "rename column" そして "add column" には自動的にロールバック文を作成できます。もし変更ログにこのカテゴリに属する一つの文しかなかった場合は、ロールバックコマンドは自動的に生成されます。

そのほかのリファクタリング、たとえば "drop table" や "insert data" には、自動で生成できるロールバックコマンドがありません。このような場合や、デフォルトで生成されるロールバック文を上書きしたい場合は、changeSet タグ内で、<rollback/> タグを利用してコマンドを設定できます。ロールバックの際に何もしてほしくない場合は、空の<rollback/> タグを利用します。





===== ロールバックタグに利用可能な属性 =====

^ nested tags | 標準の LiquiBase 変更タグを利用してロールバック文を生成  |
^ tag text | この変更をロールバックする SQL を実行  |
^ changeSetId  | この変更をロールバックするために再実行する変更セットの Id 例: dropTable をロールバックするには、そのテーブルを作成した変更セットを参照します。 |
^ changeSetAuthor  | この変更をロールバックするために再実行する変更セットの Author  |



===== 例 =====

多くの変更タグには、ロールバックタグは必要ありません。それらは update 文から生成されます。
<code xml>
    <changeSet id="changeRollback2-create" author="nvoxland">
        <createTable tableName="changeRollback2">
            <column name="id" type="int"/>
        </createTable>
    </changeSet>
</code>

標準の変更タグは、<rollback> タグの中で利用できます。
<code xml>
    <changeSet id="changeRollback" author="nvoxland">
        <createTable tableName="changeRollback1">
            <column name="id" type="int"/>
        </createTable>
        <rollback>
            <dropTable tableName="changeRollback1"/>
        </rollback>
    </changeSet>
</code>

複数の文を<rollback>タグに含ませることもできます。複数のロールバックタグを一つの変更セットに特定づけることもできます。
<code xml>
<changeSet id="multiRollbackTest" author="rs">
        <createTable tableName="multiRollback1">
            <column name="id" type="int"/>
        </createTable>
        <createTable tableName="multiRollback2">
            <column name="id" type="int"/>
        </createTable>
        <createTable tableName="multiRollback3">
            <column name="id" type="int"/>
        </createTable>
        <rollback>
            drop table multiRollback1;
            drop table multiRollback2;
        </rollback>
        <rollback>drop table multiRollback3</rollback>
    </changeSet>
</code>

ロールバックタグは、ロールバック対象を作成した変更セットを参照できます。
<code xml>
    <changeSet id="changeRollback2-drop" author="nvoxland">
        <dropTable tableName="changeRollback2"/>
        <rollback changeSetId="changeRollback2-create" changeSetAuthor="nvoxland"/>
    </changeSet>
</code>

ロールバックタグは、もし何のロールバックも不可能だったり不要の場合は空にすることもできます。
<code>
    <changeSet id="noRollback" author="nvoxland">
        <sql>insert into multiRollback3 (id) values (1)</sql>
        <rollback/>
    </changeSet>
</code>

===== "Roll Back To(どこに戻るか)" モード =====

この3つのやり方でどの変更をロールバックするかを指定できます:





==== タグ ====

ロールバックへのタグを指定することで、そのタグが適用された後のすべての変更セットでデータベースに対して実行されたものがロールバックされます。データベースに対してどのようにタグをつけるかは、[[ command line | コマンドライン ]] ドキュメントを参照してください。


==== 変更セットの数 ====

ロールバックする変更セットの数を指定できます。


===== ロールバック実行モード =====

LiquiBase は、ロールバックを管理する3つのモードがあります:


==== ロールバックの直接実行 ====

ロールバックコマンドは対象となるデータベースに直接実行できます。変更のうちロールバックできないものが一つでもあれば、注意が促されどのコマンドもロールバックされません。


==== ロールバックスクリプトの生成 ====

実際にデータベースを更新するのではなく、データベースをロールバックするのに必要な SQL 文を生成できます。これはどのようなロールバックコマンドが実施されるのかを実行前に確認したい場合には有益です。



==== "将来のロールバック" スクリプトの生成 ====

このモードは、移行スクリプトを生成するのと同じタイミングでロールバックスクリプトを生成できるようにデザインされています。更新されたアプリケーションを利用して、データベースを新しいバージョンに更新する SQL と、必要に応じて新しいバージョンから現在のバージョンにデータベースを戻すスクリプトの両方を手に入れることができます。この機能は、データベース管理者がデータベースに対して実行される SQL を制御したいときだけでなく、アプリケーションがロールバックに関するドキュメントを必要としたり、もしくは、 [[http://en.wikipedia.org/wiki/Sarbanes-Oxley_Act|SOX 対応]] プロセスのためにも有用です。ロールバックの日付やタグ、数はこのモードでは指定できません。