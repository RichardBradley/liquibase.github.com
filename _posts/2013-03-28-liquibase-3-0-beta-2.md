---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0 Beta 2
---
# Liquibase 3.0 Beta 2

Liquibase 3.0 beta 2 is now available.


Major changes since beta 1 include:


- Support for YAML and JSON formatted changelogs (see below)
- Support for excluding databases in dbms attribute (see below)
- Support for setting the dbms attribute on sql and sqlfile changes
- Can generate rollback script file on startup with SpringLiquibase
- Improved UTF8 support
- Improvements to case-sensitive database support
- Bugfixes

### Excluding from dbms list

The dbms attribute now supports prepending a database name with "!" to specify which databases a changeset should not run on. For example: `<changeSet dbms="!oracle">`

### JSON and YAML changelog support


For all you XML-haters out there, Liquibase not natively supports JSON and YAML formatted changelogs. The syntax and tags are very similar between the JSON, YAML and XML formats.


YAML example: <a href="https://raw.github.com/liquibase/liquibase/master/liquibase-integration-tests/src/test/resources/changelogs/yaml/common.tests.changelog.yaml">https://raw.github.com/liquibase/liquibase/master/liquibase-integration-tests/src/test/resources/changelogs/yaml/common.tests.changelog.yaml</a>


JSON example: <a href="https://raw.github.com/liquibase/liquibase/master/liquibase-integration-tests/src/test/resources/changelogs/json/common.tests.changelog.json">https://raw.github.com/liquibase/liquibase/master/liquibase-integration-tests/src/test/resources/changelogs/json/common.tests.changelog.json</a>


If you chose to use YAML or JSON format, you will need to include <a href="https://code.google.com/p/snakeyaml/">snakeyaml </a>1.12 in your classpath.


I'm continuing to work on shifting the documentation to github from the current wiki, and while there is still much more to do, you can at least see YAML and JSON change syntax example at <a href="http://liquibase.github.com/documentation/changes/add_auto_increment.html">http://liquibase.github.com/documentation/changes/add_auto_increment.html</a>.


### Download


As always, you can download the release from the 
<a href="https://download.liquibase.org/download-community/">Liquibase download page</a> and direct any comments or questions for <a href="https://forum.liquibase.org/">https://forum.liquibase.org</a>
