====== JAXB と Groovy を利用したLiquiBase　の変更ログの生成　======

このウェブサイトの [ほかの記事](generate-changelog-with-groovy)で、Groovy と　markupBuilder　を利用して LiquiBase の変更ログを生成する方法を紹介しました。

In this article we're going to use the Java Architecture for XML Binding (JAXB) xjc tooling to generate the changelog. xjc ユーティリティは、LiquiBase XSD から Java のクラスを作成します。これらのクラスを利用することで、 Groovy スクリプトから LiquiBase の変更ログを簡単に生成できます。

前提条件
  - Java JDK　持っていない場合は、sun.com からダウンロード
  - Groovy. http://groovy.codehaus.org/ からダウンロード


このプロジェクト用に新しくディレクトリを作成します。
LiquiBase XSD ファイルを http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd からダウンロードします。
下記の通り、このディレクトリに簡単なバッチファイルを作成します:

<code>
@echo off
xjc dbchangelog-2.0.xsd
javac org\liquibase\xml\ns\dbchangelog\*.java
</code>


このファイルを実行すると、たくさんの .java ファイルが org\liquibase\xml\ns\dbchangelog ディレクトリに作成されます。

このようなファイルを生成します:

**sample1.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog">
    <changeSet author="Bob" id="1">
        <createTable tableName="department">
            <column type="int" name="id">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <column type="varchar(50)" name="name">
                <constraints nullable="false"/>
            </column>
            <column defaultValue="1" type="boolean" name="active"/>
        </createTable>
    </changeSet>
</databaseChangeLog>
</code>

このファイルを生成するには、JAXB 生成クラスを利用する Groovy スクリプトにこのファイルの構造を記述します。ご自由に生成された .java ファイルを確認し、利用可能な属性名を見つけてください。

ここでは Groovy の巧みな機能のいくつかを利用しています:

Create a new object and providing the attributes on one go:
<code>
c = Column( name: "id", type: "int" )
</code>

Using the << operator to add to a list
<code>
ct.column << new Column( ... )
</code>


Groovy スクリプトの全体はこのようになります:

**sample1.groovy**
<code>
import org.liquibase.xml.ns.dbchangelog.*

ct = new CreateTable( tableName: "department"
                    , column : []
                    )
ct.column << new Column( name: "id"
                       , type: "int"
                       , content: [ new Constraints( primaryKey: true, nullable: false) 
                                  ]
                       )

ct.column << new Column( name: "name"
                       , type: "varchar(50)"
                       , content: [ new Constraints( nullable: false) 
                                  ]
                       )

ct.column << new Column( name: "active"
                       , type: "boolean"
                       , defaultValue: 1
                       )

changeSet = new DatabaseChangeLog.ChangeSet( id: 1
                                           , author: "Bob"
                                           )
changeSet.changeSetChildren = []
changeSet.changeSetChildren << ct

databaseChangeLog = new DatabaseChangeLog( changeSetOrIncludeOrIncludeAll : [changeSet])

writer = new ChangeLogWriter()
writer.write( databaseChangeLog, "sample.xml" )
</code>

この Groovy スクリプトがちいさなヘルパースクリプトを利用していることがわかるでしょう:

**ChangeLogWriter.groovy**
<code>
import javax.xml.bind.*

class ChangeLogWriter {
  String dirName = "."

  def write(bean, filename) {
    JAXBContext context = JAXBContext.newInstance( "org.liquibase.xml.ns.dbchangelog" )
    Marshaller marshaller = context.createMarshaller()
    marshaller.setProperty("jaxb.formatted.output", true)
    def pathName = dirName + System.properties.'file.separator' + filename
    def file = new File(pathName)
    file.withWriter('UTF-8') {
      marshaller.marshal( bean, it )
    }
  }
}
</code>
===== まとめ  =====

始める時点で適切に定義されたスキーマがある場合、JAXB は XML ファイルの中身の作成と有効な XML として書き出すための環境を提供します。

もちろん Java でも実行可能ですが、Groovy ではファイルのより簡潔な作成が可能です。
