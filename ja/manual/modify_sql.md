====== 生成された SQL の変更  ======

LiquiBase はほとんどの標準的な SQL 文を変更タグでサポートしていますが、特定の要求とは若干異なっている場合が多くあります。たとえば、データ型を変更したり、ベンダー固有の "ENGINE INNODB" 句を CREATE TABLE 文に付与したりする場合です。// 1.9 から //

===== 例 =====

<code xml>
<changeSet id="1" author="nvoxland">
    <createTable tableName="person">
        <column name="id" type="bigint"/>
        <column name="firstname" type="varchar(255)"/>
        <column name="lastname" type="varchar(255)"/>
    </createTable>
    <modifySql>
         <replace replace="bigint" with="long"/>
    </modifySql>
    <modifySql dbms="mysql">
         <append value=" engine innodb"/>
    </modifySql>
</changeSet>
</code>


===== 利用可能な属性 =====

^ dbms  | List of [対応データベース](../databases)のリストから、SQL 文の変更を実施するものを記述します。もし、記述されなかった場合、変更はすべての実行で適用されます。|
^ context  | SQLの変更が実施される[[contexts]]のリスト。 特定されない場合、すべてのコンテキストが適用されます。//2.0から//  |
^ applyToRollback| SQL の変更がロールバック文に適用されるかどうか。デフォルトは'false' //2.0 より//  |


===== 利用可能なサブタグ =====

==== prepend ====
文の最初に SQL を付与します。

=== 利用可能な属性 ===
^ value | 文の最初に付加されるテキスト  |

==== append ====
文の最後に SQL を付与します。

=== 利用可能な属性 ===
^ value | 文の最後に付加されるテキスト  |

==== replace ====
指定されたテキストをすべて置き換える。

=== 利用可能な属性 ===
^ replace | 置換元のテキスト  |
^ with | 置換後のテキスト |

==== regExpReplace ====
指定された正規表現のテキストをすべて置き換える。

=== 利用可能な属性 ===
^ replace | 正規表現の置換元のテキスト |
^ with | 置換後のテキスト  |

