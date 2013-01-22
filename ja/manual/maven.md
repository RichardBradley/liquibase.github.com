====== Maven LiquiBase プラグイン ======

LiquiBase は、Maven リポジトリから入手できる Maven プラグインから制御することができます。

LiquiBase-core と Maven プラグインは、[[http://mvnrepository.com/artifact/org.liquibase/liquibase-core |こちら]] からすべてのバージョンが利用可能です。



==== ゴール ====

^ ゴール                                       ^ 詳細                          ^
| [[maven migrate|liquibase:migrate]]        | //**非推奨** 代わりに update を利用//    |
| [[maven migrateSQL|liquibase:migrateSQL]]  | //**非推奨** 代わりに updateSQL を利用// |
| [[maven update|liquibase:update]] | [[DatabaseChangeLog]] の指定に基づいて、特定のデータベースを最新バージョンへの更新を実施します |
| [[maven updateSQL|liquibase:updateSQL]] | [[DatabaseChangeLog]] の指定に基づいて、特定のデータベースを最新バージョンへの更新を実施する SQL を生成します |
| [[maven tag|liquibase:tag]] | 指定されたタグとともに、現在のデータベースの状態にタグを打ちます |
| [[maven rollback|liquibase:rollback]] | 指定されたタグ、日付、または[[Changeset | 変更セット]] の数分データベースのロールバックを行います |






===== 設定と利用方法 =====

プラグインの設定は、pom.xml ファイルの <plugins> セクションで行います、設定と実行フェーズを記述します。

それぞれのゴールに応じて、設定パラメータがありますが、そのうちのいくつかは上記例であるとおり、両者で共通になっています。設定パラメータについて詳細を知りたい場合は、ゴールからのリンクを参照してください。


=== ファイルへのパス ===
Maven プラグインのバージョン 1.6.1.0 では、すべてのファイル名は Maven プロジェクトのmaven test クラスパスか絶対パスによって解決されます。これにより、[[DatabaseChangeLog]] がほかの Maven artifacts にも現れるようになり、データベースの LiquiBase を呼び出すことができます。


=== プロパティファイルの利用 ===
Maven LiquiBase プラグインでの設定は、標準的な Java プロパティファイルを元に行うことができます。もし、プロパティファイルが指定されていれば、Maven LiquiBase プラグインの起動時にこれを利用します。

ファイルに指定されたそれぞれのプロパティがゴールと合致している場合には設定されます。もし、プロパティがゴールと合致していない場合は、警告が表示され、実行は継続されます。

警告を表示するだけになっている理由は、ユーザーが単一のマスタープロパティファイルを利用して複数の Maven Liquibase ゴール、たとえば [[maven update|liquibase:update]] や [[maven tag|liquibase:tag]] に対応できるようにするためです。

== プロパティファイルと設定値の両方を使用する ==

プロパティは、LiquiBase プロパティファイルと <configuration> の両方で指定できます。

<configuration> セクションでプロパティが指定された場合は、プロパティファイルで指定されたものを上書きして指定します。

この動作がお好みでなければ、<configuration>  セクションに、<code xml><propertyFileWillOverride>true</propertyFileWillOverride></code> を追加することでプロパティファイルが、<configuration> セクションの記述より優先されるようになります。




=== Maven Liquibase Update の例===

下記の設定例は、 LiquiBase Maven プラグイン、バージョン 1.6.1.0 のもので、[[maven update|liquibase:update]] ゴールの例を示しています;
<code xml>
  <project>
    [...]
    <build>
      <plugins>
        <plugin>
          <groupId>org.liquibase</groupId>
          <artifactId>liquibase-plugin</artifactId>
          <version>1.6.1.0</version>
          <executions>
            <execution>
              <phase>process-resources</phase>
              <configuration>
                <propertyFile>src/main/resources/liquibase.properties</propertyFile>
              </configuration>
              <goals>
                <goal>update</goal>
              </goals>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>
    [...]
  </project>
</code>

上記の設定例では、 [[maven migrate|liquibase:update]] を実行し、ビルドの process-resource フェーズを達成します。LiquiBase を実行するためのパラメータ (database url,password, 等々)は、src/main/resources/liquibase.properties で設定されます。

src/main/resources/liquibase.properties ファイルへのパスは、そのファイルがクラスパスにあれば短縮できます。

LiquiBase を実行するためのすべてのパラメータは、プラグインの<configuration> セクションで指定します。下記がその例です:


<code xml>
  [...]
    <plugin>
      <groupId>org.liquibase</groupId>
      <artifactId>liquibase-plugin</artifactId>
      <version>1.6.1.0</version>
      <executions>
        <execution>
          <phase>process-resources</phase>
          <configuration>
            <changeLogFile>src/main/resources/org/liquiabse/business_table.xml</changeLogFile>
            <driver>oracle.jdbc.driver.OracleDriver</driver>
            <url>jdbc:oracle:thin:@tf-appserv-linux:1521:xe</url>
            <username>liquibaseTest</username>
            <password>pass</password>
          </configuration>
          <goals>
            <goal>update</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  [...]
</code>

=== さらなる設定プロパティ ===
<code xml><promptOnNonLocalDatabase>false</promptOnNonLocalDatabase></code> を設定パラメータに追加すると、ローカルでないデータベースでの移行を確認するポップアップダイアログが抑止できます。

maven コマンド <code>mvn help:describe -DgroupId=org.liquibase -DartifactId=liquibase-plugin -Dversion=1.7.0.0 -Dfull=true</code> を設定すると、LiquiBase maven プラグインで利用できる全ての設定パラメータへのヒントが表示されます。

=== 複数のプロジェクトに共通の設定を利用するには ===

parent-pom ( company super-pom とも呼ばれます) の利用を通じて、集中された Liquibase プラグイン設定をすべての Maven 子プロジェクトに適用可能です。super-pom の概要に関する詳細な説明は、see [[http://maven.apache.org/guides/introduction/introduction-to-the-pom.html|Maven manual Pom section]] を参照して下さい。

この設定を行うと、プラグイン設定は、super-pom に記述され、すべての子プロジェクトから利用可能になります。各プロジェクトでのニーズ ( データベースドライバ、JDBC URL 等) への対応は、ローカルの ''liquibase.properties'' ファイルを通じて行われます。さらに、いくつかの設定がプロジェクト内で行う必要がある場合、''liquibase.properties'' は、Maven リソースフィルタリングシステムによってフィルターさせることも可能です。

Parent ''pom.xml'' 設定:

<code xml>
  <project>
    [...]
    <build>
      <plugins>
        <plugin>
          <groupId>org.liquibase</groupId>
          <artifactId>liquibase-plugin</artifactId>
          <version>x.x.x.x</version>
          <configuration>
            <propertyFileWillOverride>true</propertyFileWillOverride>
            <propertyFile>target/classes/liquibase.properties</propertyFile>
          </configuration>
        </plugin>
      </plugins>
    </build>
    [...]
  </project>
</code>

x.x.x.x をもっとも最新のプラグインバージョンに変更しましょう。
上記にあるように、''<executions>'' セクションを追加するか、''<configuration>'' セクションにさらなる設定情報を追加します。どんな変更でも全ての子プロジェクトに反映されることを忘れないで下さい。ある程度であれば、''<propertyFileWillOverride>'' を ''true'' に変更することで、グローバルの設定を、ローカルにある ''liquibase.properties'' ファイルによって置き換えることも可能です。プロジェクトに対して多少の例外を除いてグローバル設定を使用したい場合、常に''<plugin>'' セクションを子の  ''pom.xml'' に追加することもでき、これによりグローバル設定が上書きされます。

''db.changelog.xml'' だけでなく、''liquibase.properties'' も、''src/main/resources'' フォルダになければなりません。必要なだけ多くのプロパティを保持することができます。ここでは、完全な設定例を記述します:

<code>
contexts ${liquibase.contexts} 
changeLogFile com/company/client/project/db.changelog.xml 
driver ${dataSource.project.driverClass} 
url ${dataSource.project.jdbcURL} 
username ${dataSource.project.user} 
password ${dataSource.project.password} 
verbose true 
dropFirst false 
</code>


そのプレースホルダは、Maven のリソースフィルタリングシステムにより、置換されます。Maven の通常の ''resources/'' フォルダを置き換えるには、"pom.xml" ファイルに下記のように記述するだけです:
<code xml>
<build>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <filtering>true</filtering>
      </resource>
    </resources>
</build>
</code>

詳細は [[http://maven.apache.org/guides/getting-started/index.html#How_do_I_filter_resource_files|How do I filter resource files]] を参照してください。

その特定の設定、プロジェクトの jdbc url、データベースドライバ、ユーザー名とパスワードは、Liquibase でも利用されます。
そのプレースホルダは、''src/main/filters'' に存在するプロパティファイルの値で置き換えられます。
必要なだけいくらでもプロパティファイルフィルタを作成することができます。Maven の実行時に利用されるフィルタを特定するには、[[http://maven.apache.org/guides/introduction/introduction-to-profiles.html|Maven profiles]] を利用する必要があります。
典型的な実行例はこのようになります:

<code>mvn resources:resources liquibase:update -P<profile_name></code>

''liquibase.properties'' プレースホルダーをフィルタ＝するのに、''resources''  を実行する必要があります。"-P" オプションは、Maven に利用するプロファイルを示し、( フィルタープロパティファイルから ) 値のまとまりを利用してフィルタリングします。

フィルタリングを行う必要がない場合、super-pom プラグイン設定を <code xml><propertyFile>target/classes/liquibase.properties</propertyFile></code> から <code xml><propertyFile>src/main/resources/liquibase.properties</propertyFile></code> に置き換えます。

実行も、単純に<code>mvn liquibase:update</code> にします。



この設定方法による主なメリットは:
  * プロジェクトで Liquibase プラグインの設定が不要。"liquibase.properties" だけが必要。
  * プラグインバージョン更新を行う場所が一意に特定可能 ( すべての "pom.xml" ファイルを手動で編集し、コミットする必要がありません。)