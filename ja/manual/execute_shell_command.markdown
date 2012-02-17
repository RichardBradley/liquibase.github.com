====== シェルコマンドの実行 ======

システムコマンドを実行します。このリファクタリングは、SQL を生成しませんので、LiquiBase コマンドを migrateSQL のように利用しても期待した結果は得られないでしょう。**このため、できる限り SQL を生成するリファクタリングを使用してください。**


===== 例 =====

<code xml>
<executeCommand executable="mysqldump" os="Windows XP">
    <arg value="--add-drop-database"/>
    <arg value="--compress"/>
    <arg value="dbName"/>
</executeCommand>
</code>

===== 利用可能な属性 =====

^ executable  | 実行ファイル名 **[必須]**  | 
^ os  | コマンドを実行する OS のリスト (os.name Java システムプロパティから取得)  |  


===== 利用可能なサブタグ =====

^ arg  | 実行ファイルへの引数 ("value" 属性の中で)   | 

===== JDK 互換性 =====

^ JDK 1.4  | 非対応  | 
^ JDK 1.5以上  | 問題なし  | 


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
^ SQLite  | 問題なし  |

自動ロールバック対応: **いいえ**