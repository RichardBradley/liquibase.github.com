====== カスタムリファクタリング ======

LiquiBase は、広範囲にわたるデータベースリファクタリングを提供しようと努めていますが、カスタムリファクタリングクラスを書きたくなる場合もあるかもしれません。

カスタムリファクタリングを作成するには、まず、[liquibase.change.custom.CustomSqlChange](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/CustomSqlChange.html) か [liquibase.change.custom.CustomTaskChange](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/CustomTaskChange.html) インターフェースを実装するクラスを作成し、<custom> タグを利用して変更セットを記述します。

変更をロールバックしたい場合は、[liquibase.change.custom.CustomSqlRollback](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/CustomSqlRollback.html) インターフェースも実装します。

サンプルカスタムクラスは、 [liquibase.change.custom.ExampleCustomSqlChange](http://www.liquibase.org/manual/latest/api/liquibase/change/custom/ExampleCustomSqlChange.html)を参照してください。


===== 例 =====

<code xml>
<customChange class="com.example.ExampleCustomChange">
    <param name="tableName" value="person"/>
    <param name="columnName" value="employee_id"/>
</customChange>
</code>

<code xml>
<customChange class="com.example.ExampleCustomChange"
    tableName="person"
    columnName="employee_id"/>
</code>

===== 利用可能な属性 =====

^ class  | カスタム変更を実装するクラス名 **[必須]**  |
^ カスタム変更サブクラスのあらゆるパラメータ  | <custom> タグを利用してパラメータを属性としてサブクラスに渡すことができます。  |



===== ネストした "param" タグ =====


<custom> タグを利用してパラメータを属性としてサブクラスに渡す代わりに、<param> パラメータをネストして利用できます。もちろんそれらの組み合わせも可能です。

^ name  | カスタム変更クラスへのパラメータ名 **[必須]**  |
^ value  | パラメータへの値 **[value またはtag text が必須]**  |
^ tag text  | パラメータにセットする値 //1.9 から// **[value またはtag text が必須]**  |