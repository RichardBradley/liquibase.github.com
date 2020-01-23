---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.5.1 Released
---
# Liquibase 3.5.1 Released

Bugfix release Liquibase 3.5.1 is now available from [liquibase.org/download](/download) and through the Maven repositories.

### Fixes include:

- Fixed handling of Liquibase running inside a nested jar (like in Spring Boot)
- NullPointerException in diff command
- Fixes to whitespace handling and checksums in loadData

### Full changelog:

- [CORE-2727] - NPE in DiffToReport.print() method
- [CORE-2728] - Classloading broken in 3.5.0 with nested jars
- [CORE-2729] - NullPointerException on Diff
- [CORE-2731] - diff fails with NullPointerException
- [CORE-2732] - releaseLock fails because ObjectQuotingStrategy is reset to LEGACY
- [CORE-2733] - relativeToChangelogFile fails with FileSystemResourceAccessor
- [CORE-2734] - Liquibase no longer handle newline correctly in endDelimiter when using sqlFile change
- [CORE-2743] - CSV whitespace trimmed in 3.5.0
- [CORE-2744] - changeset with loadUpdateData changes checksum in 3.5.0
- [CORE-2745] - Performance degradation of sqlFile change
- [CORE-2746] - Oracle: handle case when schema name contains a hyphen
- [CORE-2750] - MSSQL catalog/database included all the time