====== Liquibase ベストプラクティス ======
このページでは、プロジェクトに応用可能ないくつかのベストプラクティスを記述しています。

===== 変更ログを系統立てる =====
もっとも一般的な変更ログを系統立てる方法は、メジャーリリースを利用するものです。変更ログを記録するために、クラスパスに存在するパッケージを選びます。データベースに接続するものに近いものが望ましいでしょう。ここでは、com/example/db/changelog を使用します。

==== ディレクトリ構造 ====
<code>
com
  example
    db
      changelog
        db.changelog-master.xml
        db.changelog-1.0.xml
        db.changelog-1.1.xml
        db.changelog-2.0.xml
      DatabasePool.java
      AbstractDAO.java
</code>


====変更ログの階層 ====
master.xml ファイルに正しい順序でリリースに関する変更ログを記録します。上記の例ではこのようになります。

<code>
<?xml version="1.0" encoding="UTF-8"?> 
<databaseChangeLog 
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
                      http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"> 

  <include file="com/example/db/changelog/db.changelog-1.0.xml"/> 
  <include file="com/example/db/changelog/db.changelog-1.1.xml"/> 
  <include file="com/example/db/changelog/db.changelog-2.0.xml"/> 
</databaseChangeLog> 
</code>

この db.changelog-master.xml は、すべての LiquiBase が実行されるときに利用されます。

===== 変更セットの Id =====
環境に適したものを選んでください。1から始まる一意の数字を選ぶ場合もあるでしょうし、意味のある名前を書く場合もあるでしょう(例 'new-address-table')

===== 開発者のための手続き =====
  - 好みの IDE か、XML エディタを使用して、変更を含むローカルな変更セットを作成します:
  - Liquibase を起動して、新しい変更セットを実行します (あたらしい SQL コードをテストします);
  - アプリケーションのソースコードに対応する変更を記述します (例 Java コード );
  - 新しいアプリケーションコードとデータベースの変更の組み合わせをテストします;  
  - 変更セットとアプリケーションコードの両方をコミットします;