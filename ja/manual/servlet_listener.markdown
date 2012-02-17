====== サーブレット・リスナー ======

LiquiBase は、サーブレットリスナーを経由して実行できます。これにより、サイトがデプロイされるときは常に、データベースを最新の状態に保つことができます。LiquiBase は分散ロックシステムを利用していますので、アプリケーションサーバーがクラスタ化されていてもうまく動くでしょう。

サーブレットリスナーを設定するのは、liquibase.jar を WEB-INF/lib ディレクトリに追加し、web.xml ファイルに下記のように設定します:


**Liquibase 1.9**

<code xml>
<context-param>
    <param-name>LIQUIBASE_CHANGELOG</param-name>
    <param-value>com/example/db.changelog.xml</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_DATA_SOURCE</param-name>
    <param-value>java:comp/env/jdbc/default</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_HOST_EXCLUDES</param-name>
    <param-value>production1.example.com, production2.example.com</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_FAIL_ON_ERROR</param-name>
    <param-value>true</param-value>
</context-param>

<context-param>
    <param-name>LIQUIBASE_CONTEXTS</param-name>
    <param-value>production</param-value>
</context-param>

<listener>
    <listener-class>liquibase.servlet.LiquibaseServletListener</listener-class>
</listener>
</code>          

**Liquibase 2.0**

<code xml>
<context-param>
    <param-name>liquibase.changelog</param-name>
    <param-value>com/example/db.changelog.xml</param-value>
</context-param>

<context-param>
    <param-name>liquibase.datasource</param-name>
    <param-value>java:comp/env/jdbc/default</param-value>
</context-param>

<context-param>
    <param-name>liquibase.host.includes</param-name>
    <param-value>production1.example.com, production2.example.com</param-value>
</context-param>

<context-param>
    <param-name>liquibase.onerror.fail</param-name>
    <param-value>true</param-value>
</context-param>

<context-param>
    <param-name>liquibase.contexts</param-name>
    <param-value>production</param-value>
</context-param>

<listener>
    <listener-class>liquibase.integration.servlet.LiquibaseServletListener</listener-class>
</listener>
</code> 


===== 利用可能な context パラメータ: =====

^ Param for 1.9.x ^ Param for 2.0 ^ Description ^
^ LIQUIBASE_CHANGELOG | liquibase.changelog | 実行対象の変更ログファイル名 **[必須]**  | 
^ LIQUIBASE_DATA_SOURCE  |liquibase.datasource  | LiquiBase を実行するときの JNDI データソース名。MIGRATOR_DATA_SOURCE はそのほかのウェブアプリケーションが利用するデータソースが、テーブルの作成(create)と変更(alter)などを行うのに必要な権限を持っていない場合は、それと異なっていてもかまいません。**[必須]**  | 
^ LIQUIBASE_HOST_EXCLUDES  | liquibase.host.excludes | LiquiBase が実行してほしく**ない**ホスト名を指定します。このパラメータを設定することで、同一の WAR/EAR を異なる環境の複数のマシンにデプロイでき、それらのマシンのすべてで LiquiBase を実行する必要がありません。 | 
^ LIQUIBASE_HOST_INCLUDES  | liquibase.host.includes | LiquiBase が実行してほしい**特定の** ホスト名を指定します。同一の WAR/EAR を異なる環境の複数のマシンにデプロイでき、それらのマシンのすべてで LiquiBase を実行する必要がありません。 | 
^ LIQUIBASE_FAIL_ON_ERROR  | liquibase.onerror.fail | エラーが発生したとき、LiquiBase が 例外をスローするかどうかを指定します。この値を "true" (デフォルト値) にすると、例外がスローされ、環境を初期状態に適切に保つことができます。この値を "false" に設定すると、このサイトは通常通りにデプロイされますが、データベースはただしくない状態に陥るでしょう。 | 
^ LIQUIBASE_CONTEXTS  | liquibase.contexts | カンマ(,)で分けられた 実行される [[contexts | コンテキスト]] | 

サーバーに migrator を実行させたいけれど、LIQUIBASE_HOST_EXCLUDES や LIQUIBASE_HOST_INCLUDES を設定したくない場合は、 "liquibase.should.run=[true/false]" システムプロパティを指定できます。