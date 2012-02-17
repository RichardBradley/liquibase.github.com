====== Groovy を利用した LiquiBase 変更ログの作成 ======

このチュートリアルでは、Groovy スクリプトを利用して LiquiBase の変更ログを生成する方法を紹介します。Groovy によってとても簡単に XML を記述でき、あらゆる目的に対して優れたスクリプト言語です。Groovy と XML についてはとても多くのチュートリアルが利用できますので、ここではそれらには触れません。

Groovy を用いて XML を生成するときの基本的な洗濯は、二つの利用可能な XML ビルダーを利用することです: MarkupBuilder もしくは、StreamingMarkupBuilder です。MarkupBuilder をとても美しく表示するという理由で利用することにします。

オブジェクト (テーブル定義のようなもの) の生成とアウトプットフォーマットを分けるのはよいやり方です。そこで、このチュートリアルでは、XML アウトプットがどのように作られるのかを最初に説明します。次に、テーブル定義を保存するのに必要なクラスを生成します。最後に、テーブル定義から LiquiBase の変更ログを生成します。

この文章では、テーブル定義の変更ログを手動で作成します。しかし、ほかのソースからオブジェクトを生成できるように発展させるのが簡単だと言うことがわかるでしょう。


====== 最初のスクリプト ======
最初のスクリプトでは最小の変更ログを生成します。注意 MarkupBuilder は、XML 宣言を ( StreamingMarkupBuilder とは違って )生成できません、そのため宣言は、builder を実行する前に記述されます。

**sample1.groovy**
<code>
def writer = new FileWriter('sample1.xml')

def eol = System.properties.'line.separator'
writer << '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' << eol

def xml = new groovy.xml.MarkupBuilder(writer)
xml.databaseChangeLog( xmlns : "http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                     , "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                     , "xsi:schemaLocation" : "http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"
                     ) {
  changeSet(author:'jsmith', id:'1') {
    createTable(tableName:'emp', remarks='Employees') {
      column(name:'id', type:'number(4,0)' )
      column(name:'ename', type:'varchar2(14)', remarks:'Full name' )
    }
  }
}
</code>
Groovy からスクリプトを実行し、下記のアウトプットが生成されます:

**sample1.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns='http://www.liquibase.org/xml/ns/dbchangelog/1.9' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd'>
  <changeSet author='jsmith' id='1'>
    <createTable tableName='emp'>Employees
      <column name='id' type='number(4,0)' />
      <column name='ename' type='varchar2(14)' remarks='Full name' />
    </createTable>
  </changeSet>
</databaseChangeLog>
</code>

注意 カラムタグの属性の数は変わる場合があります。その属性は、builder のカラムメソッドを呼び出すところから生成されます、たとえば:
<code>
column(name:'id', type:'number(4,0)' )
</code>
 
Groovy では、これはメソッドに2つのエントリーをマップして渡すのと等しいです。ここでは、マップを次のコードとして利用します、それはエントリーの数が変わる場合でもマップを生成しやすいからです。



====== テーブルクラスの定義 ======
テーブルオブジェクトはいくつかの異なるオブジェクトを有しています:
  * カラム
  * 主キー
  * 一意キー制約
  * 外部キー制約
  * インデックス
まずカラムだけに対応したテーブルクラスを作成します:

**Listing 1**
<code>
class Table {
  Map attributes = [:]
  List columns = []
  Table(Map attribs) {
    attributes = attribs
  }
}
</code>
XML 属性を含むマップを LiquiBase のタグとして定義します。

カラム用の類似クラス:

**Listing 2**
<code>
class Column {
  Map attributes = [:]
  Map constraintsAttributes = [:]
  Column(Map attribs) {
    attributes = attribs.findAll{it.key in ['name', 'type', 'remarks']}
    constraintsAttributes = attribs.findAll{it.key in ['nullable']}
  }
}
</code>
カラムに対して、属性を二つのマップに分けました、これは二つの別々な XML タグが必要だからです:  カラムと制約


では、これらのクラスを利用するテストスクリプトを作成しましょう:

**Listing 3**
<code>
def writer = new FileWriter('sample2.xml')

// Define 2 tables
def tables =[]
def dept = new Table(tableName:'departments')
dept.columns << new Column(name:'id', type:'number(4,0)', nullable:false)
dept.columns << new Column(name:'dname', type:'varchar2(14)', remarks:'Department name')
tables << dept

def emp = new Table(tableName:'employees', remarks:'All employees known in HR system')
emp.columns << new Column(name:'id', type:'number(4,0)', nullable:false)
emp.columns << new Column(name:'ename', type:'varchar2(14)', remarks:'Full name')
emp.columns << new Column(name:'dept_id', type:'number(4,0)', nullable:false)
tables << emp

def cct = new ChangelogCreateTable(author: "james")
cct.generate(writer, tables)

class ChangelogCreateTable {
  String author
  def changesetId = 1
  def generate(writer, tables) {
    // MarkupBuilder は、XML 宣言を生成できないので、そのための回避策です。
    def eol = System.properties.'line.separator'
    writer << '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' << eol

    def xml = new groovy.xml.MarkupBuilder(writer)
    xml.databaseChangeLog( xmlns : "http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                         , "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                         , "xsi:schemaLocation" : "http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"
                         ) {
      tables.each { table ->
        changeSet(author: author, id : changesetId++) {
          createTable( table.getAttributes() ) {
            table.columns.each { col ->
              column(col.getAttributes() ) {
                if(col.getConstraintsAttributes()) {
                  constraints(col.getConstraintsAttributes())
                }
              }
            }
          }
        }
      }
    }
  }
}
</code>
これを Groovy スクリプトとして実行するには、3つのリストを一つのファイルに結合し、例 sample2.groovy 実行します。

出力は:

**Sample2.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns='http://www.liquibase.org/xml/ns/dbchangelog/1.9' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd'>
  <changeSet author='james' id='1'>
    <createTable tableName='departments'>
      <column name='id' type='number(4,0)'>
        <constraints nullable='false' />
      </column>
      <column name='dname' type='varchar2(14)' remarks='Department name' />
    </createTable>
  </changeSet>
  <changeSet author='james' id='2'>
    <createTable tableName='employees' remarks='All employees known in HR system'>
      <column name='id' type='number(4,0)'>
        <constraints nullable='false' />
      </column>
      <column name='ename' type='varchar2(14)' remarks='Full name' />
      <column name='dept_id' type='number(4,0)'>
        <constraints nullable='false' />
      </column>
    </createTable>
  </changeSet>
</databaseChangeLog>
</code>

Groovy  のコードが簡潔で読みやすいものだということがわかるでしょう。

====== テーブルクラスの完成 ======
最後の例として、テーブルクラスを下記とともに完成させます:
  * 主キー
  * 一意キー制約
  * 外部キー制約
  * インデックス
注意 Groovy スクリプトは最初に一意キーとインデックスを持つテーブルを作成する変更セットを作成します。すべてのテーブルが作成されると、外部キーが作成されます。

**sample3.groovy**
<code>
def writer = new FileWriter('sample3.xml')

def tables =[]
def dept = new Table(tableName:'departments')
dept.columns << new Column(name:'id', type:'number(4,0)', nullable:false)
dept.columns << new Column(name:'dname', type:'varchar2(14)', remarks:'Department name')
dept.primaryKey = new PrimaryKey(tableName:'departments', constraintName:'dept_pk', columnNames:'id')
dept.uniqueKeys << new UniqueKey(tableName:'departments', constraintName:'dept_uk', columnNames:'dname')
tables << dept

def emp = new Table(tableName:'employees', remarks:'All employees known in HR system')
emp.columns << new Column(name:'id', type:'number(4,0)', nullable:'false')
emp.columns << new Column(name:'ename', type:'varchar2(14)', remarks:'Full name')
emp.columns << new Column(name:'dept_id', type:'number(4,0)', nullable:'false')
emp.primaryKey = new PrimaryKey(tableName:'employees', constraintName:'emp_pk', columnNames:'id')
emp.foreignKeys << new ForeignKey( baseTableName:'employees', constraintName:'emp_dept_fk', baseColumnNames:'dept_id',
                                   referencedTableName:'dept', referencedColumnNames:'id')
def ind1 = new Index(tableName:'employees', indexName:'emp_ind1')
ind1.columns << new Column(name:'dept_id')
emp.indexes << ind1
tables << emp

def cct = new ChangelogCreateTable(author: "james")
cct.generate(writer, tables)

class ChangelogCreateTable {
  String author
  def changesetId = 1
  def generate(writer, tables) {
    def eol = System.properties.'line.separator'
    writer << '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' << eol

    def xml = new groovy.xml.MarkupBuilder(writer)
    xml.databaseChangeLog( xmlns : "http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                         , "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                         , "xsi:schemaLocation" : "http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"
                         ) {
      tables.each { table ->
        changeSet(author: author, id : changesetId++) {
          createTable( table.getAttributes() ) {
            table.columns.each { col ->
              column(col.getAttributes() ) {
                if(col.getConstraintsAttributes()) {
                  constraints(col.getConstraintsAttributes())
                }
              }
            }
          }
          if (table.primaryKey != null) {
            addPrimaryKey(table.primaryKey.getAttributes())
          }
          table.uniqueKeys.each { uk ->
            addUniqueConstraint(uk.getAttributes())
          }
          table.indexes.each{ index ->
            createIndex(index.getAttributes()) {
              index.columns.each { col ->
                column(col.getAttributes() )
              }
            }
          }
        }
      }
      
      // 外部キーの作成
      tables.each { table ->
        if (table.foreignKeys) {
          changeSet(author: author, id : changesetId++) {
            table.foreignKeys.each { fk ->
              addForeignKeyConstraint(fk.getAttributes())
            }
          }
        }
      }
    }
  }
}

class Table {
  Map attributes = [:]
  Map metaData = [:]
  List columns = []
  PrimaryKey primaryKey
  List uniqueKeys = []
  List foreignKeys = []
  List indexes = []
  Table(Map attribs) {
    attributes = attribs
  }
}

class Column {
  Map attributes = [:]
  Map constraintsAttributes = [:]
  Column(Map attribs) {
    attributes = attribs.findAll{it.key in ['name', 'type', 'remarks']}
    constraintsAttributes = attribs.findAll{it.key in ['nullable']}
  }
}

class PrimaryKey {
  Map attributes = [:]
  PrimaryKey(Map attribs) {
    attributes = attribs
  }
}

class UniqueKey {
  Map attributes = [:]
  UniqueKey(Map attribs) {
    attributes = attribs
  }
}

class ForeignKey {
  Map attributes = [:]
  ForeignKey(Map attribs) {
    attributes = attribs
  }
}

class Index {
  Map attributes = [:]
  List columns = []
  Index(Map attribs) {
    attributes = attribs
  }
}
</code>

====== まとめ ======
構造化されたソースから LiquiBase の変更ログを生成する必要がある場合、Groovy はそれを簡単に実行できるスクリプトです。