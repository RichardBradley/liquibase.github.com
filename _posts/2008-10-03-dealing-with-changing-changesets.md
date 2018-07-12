---
layout: default
subnav: subnav_blog.md
title: Dealing with Changing ChangeSets
---


The goal of a Liquibase change log file is to track the linear sequence of changes required to take a database from a starting point to the current state, and it is built up one change at a time throughtout development. By following the "always append changes" rule you will ensure that all databases are consistent since all will have gone through the exact same set of changes.


If you go back and modify an old <a href="/documentation/changeset">changeSet</a> to incorporate a new change you will run into troubles because that change may have been ran against other databases and will not be ran again. To alert you to this problem, Liquibase stored checksums (md5 hashes) of each change that was ran. If the checksum of a changeSet in the current changelog file is different than what was executed before, Liquibase does not attempt to update anything.


That being said, things never go according to plan, and so Liquibase has several options for dealing with changes to existing changeSets depending on your needs. Generally I see 3 main reasons for a change:


## Original Change Set was Wrong or Buggy


There are times when a change that was created wrong, especially if you are using the `<sql>` tag and have a complicated statement. When you catch the problem, you are often not able to recover original data or structures, but want the change to be correct for new databases going forward. In this case, it is best to use add a `<validCheckSum>` tag to the changeSet specifying that the new check sum is correct. To know the check sum to specify, simply make your change and try to update a database. The resulting verification error will include the new check sum.


## Multiple change sets should be consolidated into a single change set


There are times when several change sets should be consolidated into a single change for performance reasons. There has been talk on the <a href="http://www.liquibase.org/community">mailing list</a> about creating syntax support for this, but for now the best option is to simply remove the old change sets from the change log and create a new one. To keep the new change set from being run on databases that have already made the change the old way, use the `<changeSetExecuted>` <a href="/documentation/preconditions.html">precondition.</a>


### Example:

   <changeSet id="163-new" author="nvoxland">
      <preConditions onFail="MARK_RAN">
          <not>
              <changeSetExecuted id="163" author="nvoxland" changeLogFile="com/example/db.changelog.xml"/>
          </not>
      </preConditions>
      ......
   </changeSet>


## Change should never have been applied


Perhaps you should never have moved data, or dropped a table. Whatevever the reason, there are times you want to reverse a done change set if it was executed and otherwise just skip it. The best way to handle this is similar to the combining change sets above. You simply delete the old changeSet from your changelog file and create a new changeset that will only run if the old changeset was ran.


### Example:

    <changeSet id="163-undo" author="nvoxland">
      <preConditions onFail="MARK_RAN">
          <changeSetExecuted id="163" author="nvoxland" changeLogFile="com/example/db.changelog.xml"/>
      </preConditions>
      .....
    </changeSet>


## More Options

Beyond these options, there are several other tools available to use including the <a href="/documentation/command_line">changeLogSync </a>command, markNextChangeSetRan, preconditions based on the database state (`<tableExists>`, `<sqlCheck>` etc.), or even manually editing the databasechangelog table to add or remove tables

