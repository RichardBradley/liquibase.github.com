---
layout: default
title: Include
---

# <include> tag #

The include tag allows you to break up your change-logs into more manageable pieces.

<code xml>
<?xml version="1.0" encoding="UTF-8"?>

<databaseChangeLog
  xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9
         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="com/example/news/news.changelog.xml"/>
    <include file="com/example/directory/directory.changelog.xml"/>
</databaseChangeLog>
</code>                    

As projects grow, the number of changeSets in a changeLog can grow unwieldy. To help ease this problem, and to make management of changes easier, databaseChangeLogs can be included to create a tree of change-logs. In the example above, the root change log includes first the changes in com/example/news/news.changelog.xml then the changes in com/example/directory/directory.changelog.xml.

Included change-logs are run in the order they are found so care does need to be taken to make sure that the included changelogs are either completely independent, or that any required changelogs are run first.

Any [[preconditions.html]] defined at the changelog level in sub changelog files will be evaluated //before// any changesets are ran.

The reason to use the <include> tag rather than using XML's built-in include functionality is that with the built-in functionality the parser sees just one big XML document. We uniquely identify each change with the id, the author, and the file name so you only have to ensure that the id/author combinations are unique within each file, not across all change logs.

## Available Attributes ##

^ file  | Name of the file to import **[required]** |
^ relativeToChangelogFile | Is the file path relative to the root changelog file rather than to the classpath.  Defaults to "false" //since 1.9// |


## Implementation Notes ##

Currently there is no checking for looping changelogs or double inclusion of changelogs.

If you include a changelog twice, you shouldn't run into problems because the second time around, LiquiBase will know that the changeSets have been run and won't run them again (unless there is a runAlways tag). Do not rely on this functionality remaining constant.

If you create a changeLog loop (root.changelog.xml includes news.changelog.xml which includes root.changelog.xml) you will get an infinite loop. Checks for loops is a feature on our list of enhancements, but is currently not implemented
