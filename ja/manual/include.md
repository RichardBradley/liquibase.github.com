====== <include> タグ ======

include タグによって、変更ログをいくつかの管理しやすい単位にまで分割できます。

<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.1
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.1.xsd">
    <include file="com/example/news/news.changelog.xml"/>
    <include file="com/example/directory/directory.changelog.xml"/>
</databaseChangeLog>
</code>                    

プロジェクトが成長するにつれ、変更ログに含まれる変更セットの数も手に負えないほど増加します。この問題をやわらげ、変更の管理を容易にするために、データベース変更ログ (databaseChangeLogs ) には、変更ログのツリーを含むことができます。上記の例では、ルート変更ログは、 com/example/news/news.changelog.xml にある変更をインクルードし、つぎに、com/example/directory/directory.changelog.xml をインクルードすることができます。

インクルードされた変更ログは、見つかった順序で実行されますから、インクルードされた変更ログが完全に独立していることを注意深く確認するか、事前に必要な変更ログをまず最初に実行する必要があります。

あらゆるサブとなる変更ログファイルの変更ログレベルで定義された[[preconditions | 前提条件]]は、あらゆる変更セットが実行される//前に// 評価されます。

XML に含まれたインクルード機能ではなく、<include> タグを利用する理由は、XML の機能は、パーサーがひとつの巨大な XML ドキュメントしか確認しないからです。LiquiBase は、それぞれの変更を id , author そしてファイル名で一意に識別しますから、id と author の組み合わせがそれぞれのファイルで一意でありさえすればよく、複数の変更ログ全体にわたってそうである必要はないのです。


===== 利用可能な属性 =====

^ file  | インポート対象のファイル名 **[必須]** |
^ relativeToChangelogFile | ファイルのパスが、クラスパスからではなく、ルート変更ログからの相対パスであるかどうか。デフォルトは "false" //1.9 から// |



===== 実装に関する注意点 =====

現在のところ、変更ログの繰り返しや複数のインクルードをチェックする仕組みはありません。

変更ログを 2 回インクルードしたとしても、問題に遭遇することはないでしょう。というのも、2回目には、LiquiBase は変更セットがすでに実行され、もう二度と実行されない ( runAlways タグがない限り ) からです。一貫性を保つためにあまりこの機能に頼りすぎないでください。

変更ログのループを作成した場合 ( root.changelog.xml が news.include.changelog.xml をインクルードし、それがさらに root.changelog.xml をインクルードする ) 無限ループに陥ります。ループのチェックは、機能拡張のリストに含まれていますが、現在は実装されていません。
