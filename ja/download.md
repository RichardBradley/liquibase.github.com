==== Liquibase Core のダウンロード====

Liquibase Core の現在の安定版は、2.0.1 です。

利用可能なダウンロード:
  * [liquibase-2.0.1-bin.zip](http://liquibase.org/liquibase-2.0.1-bin.zip)
  * [liquibase-2.0.1-bin.tar.gz](http://liquibase.org/liquibase-2.0.1-bin.tar.gz)

==== アップグレード ====
  * 1.9 から 2.0 で、いくつかの大きな変更がなされています。その多くは透過的ですが、 [2.0 upgrade guide](v2 upgrade) で完全なアップグレードの情報を参照してください。
  * 1.8 から 1.9 で、チェックサムの生成方法が、addNotNullConstraint と removeNotNullConstraint に対して変更になりました。  validCheckSum タグを追加して、変更セットが古いチェックサム (バリデーションが失敗したメッセージ内にリストされます) を利用するようにするか、"liquibase clearCheckSums" もしくは "UPDATE DATABASECHANGELOG SET MD5SUM=NULL" を実行するまでは md5sum エラーが発生するでしょう。
  * 1.5 から 1.6 で、チェックサムの生成方法が変更されました。"liquibase clearCheckSums" または "UPDATE DATABASECHANGELOG SET MD5SUM=NULL" を実行するまで、md5sum エラーメッセージが表示されるでしょう。
  * 1.4 から 1.5 で実施された変更により、既存の設定に影響を与える可能性があります。詳細は、 [1.5 リリースアナウンスメント](http://blog.liquibase.org/2008/01/liquibase-core-150-released.html) を参照。

==== システム要件 ====

Liquibase は Java 1.5 以上のバージョン用に設計されています。Java 1.4 用のパッケージもビルドされていますが、十分にテストされていません。

==== インストール ====

liquibase.zip を展開すると、liquibase-VERSION.jar ファイルが現れます。この jar さえあれば、Ant, Maven, Spring そしてサーブレットコンテナーから移行ツールを実行できます。コマンドラインの移行ツールも、java -jar liquibase-VERSION.jar と実行するだけで使用できます。

===== ソースコードのダウンロード =====

Liquibase のソースコードをブラウズやチェックアウトはこちらから https://github.com/liquibase/liquibase

===== Liquibase Extension ポータル =====

Liquibase 2.0 とそれ以降のバージョンでは、サードパーティによる機能拡張と統合がサポートされます。詳しくは、[Extension Portal](http://www.liquibase.org/extensions) を参照ください。

===== Grails =====

現在のバージョンの [Liquibase Grails plug-in](manual/grails) は 1.9.3.4 であり、通常の Grails プラグインシステムを通じて利用可能です。

===== Liquibase コミュニティ =====

機能の提案、不具合の報告、そして一般的なヘルプについては、[メーリングリスト](community)まで。

===== Copyright ===== 	
Copyright (C) 2006-2011 Nathan Voxland

This library is free software; you can redistribute it and/or modify it under the terms of the Apache License, Version 2.0.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.