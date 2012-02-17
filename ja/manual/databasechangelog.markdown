====== <databaseChangeLog> タグ ======

<databaseChangeLog> タグは、あらゆる XML ファイルの変更ログのルートタグです。

===== 利用可能な属性 =====

^ logicalFilePath  | 変更セットの一意な識別子を作成するときに、ファイル名とパスを上書きするときに使用します。 |




===== 利用可能なサブタグ =====

^ <preConditions>  | 変更ログを実行するのに前提条件が必要な場合 [[preconditions|詳しくは]]  |
^ <property>  | プロパティに設定する値、, if not set by another means. [[changelog_parameters|Read More]]  |
^ <changeSet>  | 実行する変更セット[[changeset|詳しくは]]  |
^ <include>  | 追加の変更セットを含む場合 [[include|詳しくは]]  |

LiquiBase migrator が実行されるとき、databaseChangeLog タグを解析します。まず、なんらかの前提条件が存在しているかをチェックします。なんらかの[[preconditions | 前提条件]] を満たさなかった場合、LiquiBase は、何が失敗したのかを表すエラーメッセージとともに終了します。前提条件は、実行対象となる DBMS や変更を実施するユーザーといった、期待される事象や仮定を変更ログのライターに記述させたり、強制させたりするのに有効です。


すべての前提条件を満たした場合、LiquiBase は、[[changeSet | 変更セット]] と [[include | 追加の変更セット ]] を ** databaseChangeLog ファイルに並んでいる順序の通りに** 実行します。

databaseChangeLog タグ用の XML スキーマはこちらから。[[http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd]]

それぞれの変更セットは、"id" タグと、"author" タグを保持しています。これらのタグは、クラスパスの位置と XML ファイル名とあわせて変更セットを一意に特定します。



===== サンプル変更ログ (v1.9) =====

<code xml>
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
        http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
</databaseChangeLog>
</code>

===== サンプル変更ログ (v2.0) =====

<code xml>
<databaseChangeLog
    xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext"
    xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd
    http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd">
</databaseChangeLog>
</code>                 

