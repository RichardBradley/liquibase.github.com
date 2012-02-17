====== <includeAll> タグ ======

includeAll タグを利用することで、変更ログをもっと管理しやすい単位に分割することができます。[[include]] タグにも類似していますが、特定の変更ログを含めるのではなく、ディレクトリを指定して、そこに含まれるすべての *.xml ファイルを変更ログとして、すべての *.sql ファイルを個々の変更として指定できます。見つかったファイルはすべてアルファベット順で実行されます。

===== 例 =====
<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <includeAll path="com/example/changelogs/"/>
</databaseChangeLog>
</code>                    


===== 警告 =====
includeAll タグは多くの有益な使用方法がありますが、将来的に問題を引き起こすかもしれません。これを避けるための最大の問題は、includeAll タグを Ruby on Rails の Active Migration 戦略のようなものとして、変更のリストをファイルごとに格納し、ファイルの順序に実行させるものです。これは最初は一見うまくいくように見えるかもしれませんが、[[http://blog.liquibase.org/2007/06/the-problem-with-rails-active-migrations.html|このような問題]] に容易に該当してしまいます。**

それでも、includeAll タグを利用する場合には、命名規約をまもって、コンフリクトが発生しないようにするか、ファイルの名前を変更して、変更の順序を強制的に変更する方法があります。
