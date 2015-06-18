---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.3.3 Released
---

Liquibase 3.3.3 is primarily a bugfix release

As always, Liquibase can be downloaded from the <a href="http://liquibase.org/download">Liquibase download page</a> and is available in the Maven repository as org.liquibase/liquibase-core.

### Fixed Issues:

- <a href="https://liquibase.jira.com/browse/CORE-1768">CORE-1768</a> - Oracle dropAll fails on spatial tables and sequences
- <a href="https://liquibase.jira.com/browse/CORE-1840">CORE-1840</a> - Liquibase fails when run on a computer that can't connect to the internet
- <a href="https://liquibase.jira.com/browse/CORE-1857">CORE-1857</a> - Wrong column size detection on varchar2 fields with char as datatype
- <a href="https://liquibase.jira.com/browse/CORE-1866">CORE-1866</a> - Filtering changelog list by includeAll tag is not working
- <a href="https://liquibase.jira.com/browse/CORE-1943">CORE-1943</a> - Handle Error: InetAddress.getLocalHost().getHostName() UnknownHostException results in NoClassDefFoundError
- <a href="https://liquibase.jira.com/browse/CORE-1958">CORE-1958</a> - Column type of "TIMESTAMP(6)" under MySql converted to TIMESTAMP dropping fractional seconds
- <a href="https://liquibase.jira.com/browse/CORE-1967">CORE-1967</a> - includeAll uses full file path for sql changelogs
- <a href="https://liquibase.jira.com/browse/CORE-2023">CORE-2023</a> - Problem using includeAll with SpringLiquibase
- <a href="https://liquibase.jira.com/browse/CORE-2126">CORE-2126</a> - Postgres 9.3 - Drop table With Cascade - Not Supported
- <a href="https://liquibase.jira.com/browse/CORE-2156">CORE-2156</a> - Resource loader can't load changelog file
- <a href="https://liquibase.jira.com/browse/CORE-2186">CORE-2186</a> - AbstractResourceAccessor#convertToPath(String, String) fails for processing includeAll from Classpath
- <a href="https://liquibase.jira.com/browse/CORE-2192">CORE-2192</a> - NoSuchMethodException when generating offline Oracle migration script
- <a href="https://liquibase.jira.com/browse/CORE-2199">CORE-2199</a> - Liquibase adds a semicolon after a stored proc definition making the stored proc unusable
- <a href="https://liquibase.jira.com/browse/CORE-2202">CORE-2202</a> - liquibase.should.run inverted boolean
- <a href="https://liquibase.jira.com/browse/CORE-2204">CORE-2204</a> - valueNumeric not being set when using prepared statements
- <a href="https://liquibase.jira.com/browse/CORE-2206">CORE-2206</a> - diffChangeLog with JPA-annotated entities causes ConcurrentModificationException
- <a href="https://liquibase.jira.com/browse/CORE-2208">CORE-2208</a> - Typo in message
- <a href="https://liquibase.jira.com/browse/CORE-2210">CORE-2210</a> - java.lang.NullPointerException when file is empty
- <a href="https://liquibase.jira.com/browse/CORE-2214">CORE-2214</a> - When inserting string value starting and ending with apostrophes (quotes) the value is not quoted in the generated SQL
- <a href="https://liquibase.jira.com/browse/CORE-2218">CORE-2218</a> - Regression on modifyDataType : VARCHAR2 was supported on 3.2...and fails on 3.3
- <a href="https://liquibase.jira.com/browse/CORE-2239">CORE-2239</a> - Remarks attribute in renameColumn causes parse error
- <a href="https://liquibase.jira.com/browse/CORE-2240">CORE-2240</a> - setDropFirst(true) still broken on empty database
- <a href="https://liquibase.jira.com/browse/CORE-2262">CORE-2262</a> - 3.3.2 ant task dies on NPE in ChangeLogParameters
- <a href="https://liquibase.jira.com/browse/CORE-2263">CORE-2263</a> - Index Snapshot - doesn't include upper cased name indexes when db is NOT case sensitive
- <a href="https://liquibase.jira.com/browse/CORE-2274">CORE-2274</a> - Ant Upade Task does not consider changeLogFile correctly if it is contained in a JAR
- <a href="https://liquibase.jira.com/browse/CORE-2279">CORE-2279</a> - Rollback fails in MS SQL 2008 using liquibase 3.3.2
- <a href="https://liquibase.jira.com/browse/CORE-2284">CORE-2284</a> - Creating a DatabaseChangeLog() results in NPE
- <a href="https://liquibase.jira.com/browse/CORE-2290">CORE-2290</a> - Liquibase gives different results from Ant and the command line
- <a href="https://liquibase.jira.com/browse/CORE-2301">CORE-2301</a> - Regression from 3.2.3 in mssql 2000 unsupported usage of varchar(max) and sys.extenden_properties
- <a href="https://liquibase.jira.com/browse/CORE-2304">CORE-2304</a> - Autoincrement on type INT4 fails
- <a href="https://liquibase.jira.com/browse/CORE-2310">CORE-2310</a> - IncludeAll Fails with Unknown Reason Error
- <a href="https://liquibase.jira.com/browse/CORE-2315">CORE-2315</a> - NPE in CommandlineResourceAccessor
- <a href="https://liquibase.jira.com/browse/CORE-2325">CORE-2325</a> - Liquibase - New versions break DB create
- <a href="https://liquibase.jira.com/browse/CORE-2329">CORE-2329</a> - Escaped reserved keywords in HSQL are stored in lower case instead of upper case.
- <a href="https://liquibase.jira.com/browse/CORE-2330">CORE-2330</a> - includeAll uses full file path with includeAll
- <a href="https://liquibase.jira.com/browse/CORE-2261">CORE-2261</a> - UpdateSQL needs to append a "/" to the end of createProcedure for Oracle
- <a href="https://liquibase.jira.com/browse/CORE-2287">CORE-2287</a> - Improve support for Groovy-based tests in Eclipse
- <a href="https://liquibase.jira.com/browse/CORE-2296">CORE-2296</a> - Upgrade Groovy and Spock to maintained versions
- <a href="https://liquibase.jira.com/browse/CORE-2318">CORE-2318</a> - Add support for converting BigDecimal objects to a SQL string via DataTypeFactory




