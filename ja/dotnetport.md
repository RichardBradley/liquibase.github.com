{{  :help-wanted.jpg|}}====== .Net版 LiquiBase ======

これまでに、.Net 版の LiquiBase に対する少なからぬ興味が持たれてきましたが、まだ動作するものはありません。このページでは、.Net 版の現在の状況とロードマップの概要を提供します。もっと情報が必要だったり、援助をしていただける方は、[the LiquiBase .Net 版フォーラム](http://liquibase.org/forum/index.php?board=4.0)までどうぞ。

最初の(もしかしたら長期の)目的は、.Net 版と Java 版の LiquiBaseでできるだけソースコードを共有することです。LiquiBase には、どのプラットフォーム化に関係なく、"if creating a table of database type X, use this SQL" といったたぐいのロジックが大量に存在しています。ロジックをできるだけ性格で完全なものにするために、liquibase の多くの部分はクロスプラットフォームな言語で書かれています。利用可能なオプションを評価して、[IKVM.NET](http://www.ikvm.net) を利用して Java のバイトコードを .Net にすることにしました。

Java 版の LiquiBase に多くの労力を割く計画のため、主要な Java の LiquiBase 開発者は、2010年の後半までは、質問に答えたりする以上の、一般的なアーキテクチャや方向性について以上の貢献は行えません。

===== ロードマップ =====
  - LiquiBase を "Core"、JVM固有、そして CLR 固有のモジュールに分割  **[DONE]**
  - プロジェクトをリードするコアグループの発見//[TODO]//
  - .Net 開発のためのビルド環境がうまく動作するための設定 **[PARTIAL]**
  - ServiceLocator と他の主たる LiquiBase オブジェクトの初期化  **[PARTIAL]**
  - Rename ClrClasspathScanner to ClrServiceLocator and create unit tests around them to make sure that the ServiceLocator calls work correctly.  Once done, you should be able to look up liquibase.database.Database and liquibase.change.Change implementations.  ServiceLocation.java will need to modified based on your new class name.
  - DatabaseConnection、 ChangeLogParser の実装と、CLR ネイティブライブラリを利用してデータベースのメタデータを読み込む  **[PARTIAL]**
  - DatabaseConnection を改善し、名称を変え、完全に実装する
  - DatabaseFactory.getInstance().getDatabase(yourLiquibaseConnectionObject).checkDatabaseChangeLogTable() を呼び出せるようにし、and have it create the databasechangelog table if it does not exists, and just return if it does not.
  - LiquiBase のユニットテスト、インテグレーションテストを .Net 内で実行する
  - Java 版と機能的に同等になるまで、不具合の修正と機能追加を繰り返す

===== はじめましょう =====

メモ: このドキュメントをぜひ改善してください。

==== SVN ====

LiquiBase のソースコードは下記よりチェックアウトできます
**http://liquibase.jira.com/svn/CORE/trunk**

liquibase.jira.com の有効なアカウントを持つ人であれば誰でも、コードをコミットできます。それらはプロジェクトの開発者によってレビューされます。

==== Java ライブラリのコンパイル ====

IKVM は、Javaのバイトコード(ソースコードファイルではなく)を、.Net の IL にコンパイルするため、変更を行ったり、コアライブラリーを変更したりするには、Javaでの開発環境が必要です。

これらをダウンロードしてインストールします :
  * [Java Development Kit](http://java.sun.com/javase/downloads/widget/jdk6.jsp)
  * [Maven](http://maven.apache.org/) which we use as our build script.
Just unzip the file to where you want it installed
  * [Ikvm](http://ikvm.net)Just unzip the file to where you want it installed.
  * [Eclipse](http://eclipse.org) or [Intellij](http://intellij.com)

.Net 版が熟成してきたら、プレコンパイルされ、IKVM直前のビルドで、Javaの開発環境を必要としないものを提供する予定です。

===== .Net コードベース =====

LiquiBase　レポジトリには、core-clr フォルダフォルダがあり、Visual Studioのソリューションファイルを含む.net の実装コードが格納されています。

==== 命名規則 ====

liquibase のコアとなるパッケージやメソッド名は、最初の文字が小文字になる Java の命名規則に従っていることに気づくでしょう。いつかは、.net に対応したファサードを作って、ほとんどの場合はそれらを隠蔽したいと考えています。どれだけ簡単なのかはわかりませんが、戻り値の型やパラメータなどを探すときには気にとめておく必要があります。いつの日か、LiquiBase を統合するときの最初の段階として、LiquiBase.LiquiBase という C# クラスを作成し、liquibase.LiquiBase の Java クラスと同じようにしたいと考えています。
