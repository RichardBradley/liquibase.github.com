====== データの更新 ======

存在するテーブルのデータを更新します。



===== 例 =====

<code xml>
<update tableName="People">
    <column name="firstname" value="Fred"/>
    <column name="lastname" value="Johnson"/>
    <column name="username" value="fjohnson"/>
    <where>id=2</where>
</update>
</code>

<code xml>
<update tableName="People">
    <column name="downsized" valueBoolean="true"/>
</update>
</code>

<code xml>
<comment>Example with text update</comment>
<update tableName="ProductSettings">
    <column name="property" value="vatCategory"/>
    <where>property='vat'</where>
</update>
</code>

===== 利用可能な属性 =====

^ tableName  | 更新対象のデータが存在するテーブル名  | 
^ schemaName  | テーブルのスキーマ名  | 


===== 利用可能なサブタグ =====

^ column  | 更新対象のデータ。詳細は[[column|カラムタグ]]を参照。  **[必須]**  | 
^ where [文字列]  | update 文の where 句 | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 問題なし  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 

自動ロールバック対応: **いいえ**