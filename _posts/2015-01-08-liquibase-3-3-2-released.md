---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.3.2 Released
---

Liquibase 3.3.2 is officially released. It is primarily a bugfix release, but has one major new feature: object diffChangeLog/generateChangeLog object filtering.

### includeObjects/excludeObjects logic


You can now set an includeObjects or excludeObjects paramter on the command line or Ant. For maven, the parameteres are diffExcludeObjects  and diffIncludeObjects. The format for these parameters are:

- An object name (actually a regexp) will match any object whose name matches the regexp.
- A type:name syntax that matches the regexp name for objects of the given type
- If you want multiple expressions, comma separate them
- The type:name logic will be applied to the tables containing columns, indexes, etc.

NOTE: name comparison is case sensitive. If you want insensitive logic, use the `(?i)` regexp flag.

Example Filters:

- "table_name" will match a table called "table_name" but not "other_table" or "TABLE_NAME"
- "(i?)table_name" will match a table called "table_name" and "TABLE_NAME"
- "table_name" will match all columns in the table table_name
- "table:table_name" will match a table called table_name but not a column named table_name
- "table:table_name, column:\*._lock" will match a table called table_name and all columns that end with "_lock"

### Full 3.3.2 Change Log:

- <a href="https://liquibase.jira.com/browse/CORE-875">CORE-875</a> - Ignore tables for diffs and generateChangelog
- <a href="https://liquibase.jira.com/browse/CORE-1877">CORE-1877</a> - SQLOutput prints endDelimiter regexes
- <a href="https://liquibase.jira.com/browse/CORE-2114">CORE-2114</a> - AddAutoIncrement on Postgres does not work when changes are applied on a specific schema
- <a href="https://liquibase.jira.com/browse/CORE-2141">CORE-2141</a> - handling dependencies and WAR as classpath
- <a href="https://liquibase.jira.com/browse/CORE-2166">CORE-2166</a> - SpringLiquibase: includeAll within jar causes SetupException
- <a href="https://liquibase.jira.com/browse/CORE-2172">CORE-2172</a> - dropPrimaryKey without constraint name on sql server doesn't honour schema information
- <a href="https://liquibase.jira.com/browse/CORE-2174">CORE-2174</a> - Bad exception handling in OracleDatabase.setConnection
- <a href="https://liquibase.jira.com/browse/CORE-2180">CORE-2180</a> - NPE with bad name
- <a href="https://liquibase.jira.com/browse/CORE-2182">CORE-2182</a> - ClassLoader leak due to shutdown hooks

Since the 3.3.0 announcement, **3.3.1 was also released in December as a bugfix release** with the following changes:

- <a href="https://liquibase.jira.com/browse/CORE-1920">CORE-1920</a> - SpringLiqubase includeAll is not including files
- <a href="https://liquibase.jira.com/browse/CORE-2009">CORE-2009</a> - ClassCastException when executing a custom task change (AntClassLoader problem)
- <a href="https://liquibase.jira.com/browse/CORE-2097">CORE-2097</a> - "mvn liquibase:futureRollbackSQL" asks for tag, count or date
- <a href="https://liquibase.jira.com/browse/CORE-2099">CORE-2099</a> - SQLAnywhere support (Driver not capable)
- <a href="https://liquibase.jira.com/browse/CORE-2103">CORE-2103</a> - changelogSchemaName/changelogCatalogName configuration options will not work on Oracle DB
- <a href="https://liquibase.jira.com/browse/CORE-2104">CORE-2104</a> - ConcurrentModificationException iterating over System.getProperties().entrySet()
- <a href="https://liquibase.jira.com/browse/CORE-2105">CORE-2105</a> - Maven profile performing dropAll and update on Oracle failing with an error on populated database.
- <a href="https://liquibase.jira.com/browse/CORE-2107">CORE-2107</a> - LOWER() keyword fails on Postgres createIndex task
- <a href="https://liquibase.jira.com/browse/CORE-2108">CORE-2108</a> - dropAll command trying to drop column on table that has already been dropped
- <a href="https://liquibase.jira.com/browse/CORE-2116">CORE-2116</a> - Could not find implementation of liquibase.logging.Logger
- <a href="https://liquibase.jira.com/browse/CORE-2118">CORE-2118</a> - Change default diffChangeLog/generateChangeLog objectQuotingStrategy back to LEGACY
- <a href="https://liquibase.jira.com/browse/CORE-2119">CORE-2119</a> - Bad finally block in SpringLiquibase.afterPropertiesSet()
- <a href="https://liquibase.jira.com/browse/CORE-2120">CORE-2120</a> - LoadUpdateData with value=NUMERIC quoting values
- <a href="https://liquibase.jira.com/browse/CORE-2121">CORE-2121</a> - DB2: DiffChangeLog/GenerateChangeLog/DropAll sees alias column and tries to drop/add them
- <a href="https://liquibase.jira.com/browse/CORE-2127">CORE-2127</a> - updateSQL creates duplicate DATABASECHANGELOGLOCK tables
- <a href="https://liquibase.jira.com/browse/CORE-2130">CORE-2130</a> - setFetchSize to a negative value breaks Oracle JDBC Driver
- <a href="https://liquibase.jira.com/browse/CORE-2134">CORE-2134</a> - ExecuteCommand won't run with no os attribute.
- <a href="https://liquibase.jira.com/browse/CORE-2136">CORE-2136</a> - Mysql must quote PARTITION as a keyword
- <a href="https://liquibase.jira.com/browse/CORE-2137">CORE-2137</a> - Special characters (&amp;#13;) copied during generateChangelog on DB2/400
- <a href="https://liquibase.jira.com/browse/CORE-2139">CORE-2139</a> - H2Database.supportsDropTableCascadeConstraints() returns false
- <a href="https://liquibase.jira.com/browse/CORE-2142">CORE-2142</a> - generateChangeLog not including all columns in a table
- <a href="https://liquibase.jira.com/browse/CORE-2146">CORE-2146</a> - snakeyaml is pulled in as transitive dependency for using projects
- <a href="https://liquibase.jira.com/browse/CORE-2149">CORE-2149</a> - Liquibase command line fails
- <a href="https://liquibase.jira.com/browse/CORE-2150">CORE-2150</a> - On the 3.3.0-SNAPSHOT, liquibase --version returns 3.2.0
- <a href="https://liquibase.jira.com/browse/CORE-2153">CORE-2153</a> - Liquibase 3.2.1 is no longer compatible with Oracle 9
- <a href="https://liquibase.jira.com/browse/CORE-2155">CORE-2155</a> - diffTypes=data fails with java.sql.SQLException: Attribute value not valid (dataOutputDirectory attribute causes build to fail)
- <a href="https://liquibase.jira.com/browse/CORE-2156">CORE-2156</a> - Resource loader can't load changelog file
- <a href="https://liquibase.jira.com/browse/CORE-2157">CORE-2157</a> - SQLException if there are single quotes in ChangeSet
- <a href="https://liquibase.jira.com/browse/CORE-2159">CORE-2159</a> - Datetime2 no longer used for MSSQL
- <a href="https://liquibase.jira.com/browse/CORE-2161">CORE-2161</a> - includeAll relativeToChangelogFile="true" doesn't work
- <a href="https://liquibase.jira.com/browse/CORE-2164">CORE-2164</a> - SpringLiquibase: includeAll within jar causes NullPointerException
- <a href="https://liquibase.jira.com/browse/CORE-2179">CORE-2179</a> - Creating functional indexes
- <a href="https://liquibase.jira.com/browse/CORE-2115">CORE-2115</a> - Really slow when using fat jars
- <a href="https://liquibase.jira.com/browse/CORE-2125">CORE-2125</a> - Make DatabaseChangeLog#include(String, boolean, ResourceAccessor) public
- <a href="https://liquibase.jira.com/browse/CORE-2148">CORE-2148</a> - Build failure on jdk-1.8
- <a href="https://liquibase.jira.com/browse/CORE-2152">CORE-2152</a> - Change logs in json format not processed by liquibase - parsing errors

### Updated Extensions

The following extensions have also been recently updated with bugfixes, new features and support for Liquibase 3.3.x

- <a href="https://github.com/liquibase/liquibase-hibernate/releases/tag/liquibase-hibernate4-3.5">Liquibase-Hibernate 3.5</a>
- <a href="https://github.com/liquibase/liquibase-oracle/releases/tag/liquibase-oracle-3.2">Liquibase-Oracle 3.2</a>
- <a href="https://github.com/liquibase/liquibase-teradata/releases/tag/liquibase-teradata-3.1">Liquibase-Teradata 3.1</a>
- <a href="https://github.com/liquibase/liquibase-redshift/releases/tag/liquibase-redshift-1.0">Liquibase-Redshift 1.0</a>

### Download

As always, Liquibase can be downloaded from the <a href="http://liquibase.org/download">Liquibase download page</a> and is available in the Maven repository as org.liquibase/liquibase-core. The extensions can be downloaded from their corresponding github repository "Release" pages.
