====== カラムタグ ======

"column" タグは、カラム定義とカラムの情報が必要なとき、LiquiBase XML を通じて再利用されるタグです。As a result, not all the attributes of column make sense in each context it is used in.


===== 利用可能な属性 =====

^ name  | カラム名  |
^ type  | そのカラムのデータ型  |
^ value  | カラムに設定する値。値はシングルクオーテーションで囲みます。二回続けるとエスケープされます。 |
^ valueNumeric  | カラムに設定する数値。値にはシングルクオーテーションは不要で、エスケープもされません。 | 
^ valueBoolean  | カラムに設定するブール値。データベースの実装によって実際に設定される値が決まります。| 
^ valueDate  | カラムに設定する日付や時刻の値。この値は下記のいずれかの形式で設定可能です: "YYYY-MM-DD", "hh:mm:ss" または "YYYY-MM-DDThh:mm:ss".  | 
^ defaultValue  | カラムのデフォルト値  | 
^ defaultValueNumeric  | 数値型カラムのデフォルト値  | 
^ defaultValueBoolean  | ブーリアン型カラムのデフォルト値  | 
^ defaultValueDate  | date型、または/かつ time型のデフォルト値。この値は下記いずれかのフォーマットです: "YYYY-MM-DD", "hh:mm:ss" または"YYYY-MM-DDThh:mm:ss"  | 
^ defaultValueComputed  | ファンクションまたはプロシージャの呼び出しの戻り値。この属性は実行するファンクションを含みます。 |
^ autoIncrement  | カラムが auto increment かどうか  | 
^ remarks  | カラムの短い説明 (カラムコメント) | 

スクリプトをデータベースに依存しないようにするには、これらの "generic" なデータ型は適切なデータベースごとの実装に変換されます: 
  * BOOLEAN
  * CURRENCY
  * UUID
  * CLOB
  * BLOB
  * DATE
  * DATETIME
  * TIME.  

また、java.sql.Types.* を設定することで、適切な方に変換することもできます。必要なら精度を記述も可能です。
  * java.sql.Types.TIMESTAMP
  * java.sql.VARCHAR(255)

===== 利用可能なサブタグ =====

^ constraints  | 制約の定義  | 


====== 制約タグ ======

"constraints" タグは、カラムへの制約に関する情報を保持します。




===== 利用可能な属性 =====

^ nullable  | カラムは null を含むことができますか?  | 
^ primaryKey  | カラムは主キーですか?  | 
^ primaryKeyName  | 主キー名 //[1.6 より]//  | 
^ unique  | 一意制約が適用可能か |
^ uniqueConstraintName | 一意制約名 |
^ references  | 外部キーの定義  | 
^ foreignKeyName  | 外部キー制約名  | 
^ deleteCascade  | delete cascade  を設定 | 
^ deferrable  | 制約は遅延可能か  | 
^ initiallyDeferred  | 制約は当初から遅延されているか  | 