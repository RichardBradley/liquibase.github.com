====== カラムの統合 ======

2つのカラムにある値を連結して、文字列として結合し、新しいカラムに保存します。

===== 例 =====

<code xml>
<mergeColumns tableName="person"
    column1Name="phoneAreaCode"
    joinString="-"
    column2Name="phoneSuffix"
    finalColumnName="phone"
    finalColumnType="varchar(50)"
/>
</code>

===== 利用可能な属性 =====

^ tableName  | 連結対象のカラムを持つテーブル名 **[必須]**  | 
^ schemaName  | テーブルのスキーマ名  | 
^ column1Name  | 前半のデータを持つカラム名 **[必須]**  | 
^ joinString  | 前半と後半のカラムの間にはいる文字列 (空でもよい) **[必須]**  | 
^ column2Name  | 後半のデータを持つカラム名 **[必須]**  | 
^ finalColumnName  | 新しいカラム名 **[必須]**  | 
^ finalColumnType  | 新しいカラム名のデータ型 **[必須]**  | 


===== データベースの互換性 =====

^ MySQL  | 問題なし  | 
^ PostgreSQL  | 問題なし  | 
^ Oracle  | 問題なし  | 
^ MS-SQL  | 問題なし  | 
^ Sybase  | 問題なし  | 
^ DB2  | 問題なし  | 
^ Derby  | 非対応  | 
^ HSQL  | 問題なし  | 
^ H2  | 問題なし  | 
^ Caché  | 問題なし  | 
^ Firebird  | 問題なし  | 
^ MaxDB  | 問題なし  | 
^ SQLite  | 問題なし  | 

自動ロールバック対応: **いいえ**