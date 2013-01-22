====== ビューの作成 ======

新規にビューを作成

===== 例 =====

<code xml>
<createView viewName="personView">
    select id, firstname from person
</createView>
</code>


===== 利用可能な属性 =====

^ viewName  | 作成対象のビュー名 **[必須]**  | 
^ schemaName  | ビューのスキーマ名  | 
^ replaceIfExists  | "create or replace" 文法の利用、v1.5 から導入  |
^ NESTED TEXT  | ビューを作成する SQL **[必須]**  | 



===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | “replaceIfExists” は利用できません  | 
^ Sybase  | “replaceIfExists” は利用できません  | 
^ DB2  | 問題なし  | 
^ Derby  | “replaceIfExists” は利用できません  | 
^ HSQL  | “replaceIfExists” は利用できません  | 
^ H2  | “replaceIfExists” は利用できません  | 
^ Caché  | “replaceIfExists” は利用できません  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  | 

自動ロールバック対応: **はい**