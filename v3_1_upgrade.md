---
layout: default
title: Liquibase version 3.1 Upgrade Guide
---

# 3.0 to 3.1 Upgrade Guide #

For the normal Liquibase end user, Liquibase 3.1 is a drop-in replacement for any Liquibase 3.0 version. If you are running against InterSystems Cache, SAP MaxDB or IBM DB2 for iSeries see the note below.

For developers of Liquibase extensions, there has been some Java API changes that may impact your code.

<a href="v3_upgrade.html">2.x to 3.0 upgrade guide</a>

## Less common database support moved to extensions

If you are using Liquibase with Cache, MaxDB or DB2 for iSeries, support has been moved out of Liquibase core and into extensions.

To re-enable support for these databases, install the corresponding extension:

- <a href="https://github.com/liquibase/liquibase-cache">InterSystems Cache</a>
- <a href="https://github.com/liquibase/liquibase-maxdb">SAP MaxDB</a>
- <a href="https://github.com/liquibase/liquibase-db2i">IBM DB2 for iSeries</a>

## Class liquibase.executor.Executor changes

The liquibase.executor.Executor queryForList methods now return `List<Map<String, ?>>` rather than just `List<Map>`

## Interface liquibase.database.Database changes

There is a new `addReservedWords(words)` method to implement. If extending AbstractJdbcDatabase, the default implementation should work for you.

The following methods were removed from liquibase.database.Database in favor of extensible service implementations:

|---
| 3.0 | 3.1 |
|---
| hasDatabaseChangeLogLockTable() | ((StandardLockService) liquibase.lockservice.LockServiceFactory.getInstance().getLockService(database)).hasDatabaseChangeLogLockTable() |
| checkDatabaseChangeLogLockTable() | liquibase.lockservice.LockServiceFactory.getInstance().getLockService(database).init() |
| checkDatabaseChangeLogTable(updateExistingNullChecksums, databaseChangeLog, contexts) | liquibase.changelog.ChangeLogServiceFactory.getInstance().getChangeLogService(database).init() |
| hasDatabaseChangeLogTable() | ((StandardChangeLogHistoryService) liquibase.changelog.ChangeLogServiceFactory.getInstance().getChangeLogService(database)).hasDatabaseChangeLogTable()|
| getNextChangeSetSequenceValue() | liquibase.changelog.ChangeLogServiceFactory.getInstance().getChangeLogService(database).getNextSequenceValue() |

## Interface liquibase.lockservice.LockService changes

New methods were added to the LockService interface:

- init()
- destroy()

The class liquibase.lockservice.LockServiceImpl has been renamed to liquibase.lockservice.StandardLockService, although a deprecated placeholder with the old name was introduced for backwards compatibility.

## Interface liquibase.changelog.visitor.ChangeExecListener changes

New methods were added to the ChangeExecListener interface:

- preconditionFailed
- preconditionErrored
- willRun
- ran

## Interface liquibase.snapshot.SnapshotGenerator changes

A new replaces() method was added to SnapshotGenerator. The default implementation in JdbcSnapshotGenerator is a no-op which should work for most uses.

## Standardized ResourceAccessor handling of missing files.

CommandLineResourceAccessor now returns null if a file does not exist rather than throwing an IOException. This behavior now matches the other ResourceAccessors.

An IOException should only be thrown by a ResourceAccessor if the file exists but there is a problem reading it.