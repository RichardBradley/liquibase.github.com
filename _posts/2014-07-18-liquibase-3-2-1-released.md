---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.2.1 Released
---


Liquibase 3.2.1 has been released. As usual, it can be downloaded from the <a href="http://liquibase.org/download">Liquibase download page</a> and is available in the Maven repository as org.liquibase/liquibase-core.


3.2.1 is purely a bugfix release. The only potential update issue could be a fix for incorrect checksums introduced in 3.2.0. If you used defaultValueNumeric, defaultValue or used createProcedure or sql tags you may have seen unexpectedly changed checksums with 3.2.0. With 3.2.1, those have been reverted back to the correct 3.1.x version. If you are updating from 3.1.x it will be a smoother update from 3.2.0. If you already updated to 3.2.1 and manually fixed your checksums in the databasechangelog table, they will need to be updated again.


### Full change log:


- <a href="https://liquibase.jira.com/browse/CORE-1844">CORE-1844</a> - bulkFetch of foreign keys on Oracle is very slow
- <a href="https://liquibase.jira.com/browse/CORE-1918">CORE-1918</a> - Multiple comment blocks in changesets no longer works
- <a href="https://liquibase.jira.com/browse/CORE-1920">CORE-1920</a> - SpringLiqubase includeAll is not including files
- <a href="https://liquibase.jira.com/browse/CORE-1922">CORE-1922</a> - 3.2.0 Regression due to CORE-1721
- <a href="https://liquibase.jira.com/browse/CORE-1923">CORE-1923</a> - Error raised: Unknown Reason when doing tagging via command line
- <a href="https://liquibase.jira.com/browse/CORE-1930">CORE-1930</a> - Snapshot command returns no information on MSSQL
- <a href="https://liquibase.jira.com/browse/CORE-1933">CORE-1933</a> - (3.0.8 -> 3.2.0) pom.xml: 2Mb of superfluous dependencies
- <a href="https://liquibase.jira.com/browse/CORE-1934">CORE-1934</a> - file path in databasechangelog is absoulte since liquibase 3.2.0 when using includeAll inside a jar
- <a href="https://liquibase.jira.com/browse/CORE-1936">CORE-1936</a> - NullPointerException while diffing database against hibernate.cfg.xml
- <a href="https://liquibase.jira.com/browse/CORE-1938">CORE-1938</a> - defaultValueNumeric="0" or defaultValue="0" is translated to 0.0
- <a href="https://liquibase.jira.com/browse/CORE-1940">CORE-1940</a> - Maximum Oracle Sequence fails to be parsed as a BigInteger
- <a href="https://liquibase.jira.com/browse/CORE-1944">CORE-1944</a> - NullPointerException when tagging through Ant before applying changesets
- <a href="https://liquibase.jira.com/browse/CORE-1947">CORE-1947</a> - Liquibase dependency to jetty-servlet/velocity should be `<optional>true</optional>`

- <a href="https://liquibase.jira.com/browse/CORE-1950">CORE-1950</a> - Checksum validation failed after Liquibase upgrade (3.1.1 -> 3.2.0)
- <a href="https://liquibase.jira.com/browse/CORE-1957">CORE-1957</a> - Using VARCHAR2 column type fails for Hsqldb running in oracle syntax mode
- <a href="https://liquibase.jira.com/browse/CORE-1960">CORE-1960</a> - "Could not find implementation of liquibase.logging.Logger" starts appearing after migration from 3.1.1 to 3.2.0
- <a href="https://liquibase.jira.com/browse/CORE-1970">CORE-1970</a> - NullPointerException on rollback with `<sqlFile>` tag
- <a href="https://liquibase.jira.com/browse/CORE-1746">CORE-1746</a> - Support `<sqlFile>` parameters
- <a href="https://liquibase.jira.com/browse/CORE-1951">CORE-1951</a> - Regression on 3.2.0 : --diffTypes=data generates Unknown Reason Exception

**UPDATE:** There is still a couple checksum issues updating from 3.1.1 to 3.2.1. I'll get those fixed up in a 3.2.2 release today or tomorrow.
