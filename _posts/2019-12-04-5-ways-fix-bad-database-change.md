---
layout: default
subnav: subnav_blog.md
title: 5 Ways to Fix a Bad Database Change in Liquibase
author: Steve Donie
---

You’ve just run a `liquibase update`. Moments later, your stomach churns as you realize that there were some big mistakes in the changes you just deployed and your database is definitely not in the state you intended. What do you do now?
**Don’t panic. You’ve got options.**

When you’ve made a bad database change, you have a number of options for dealing with changes you have already deployed using Liquibase. How best to proceed depends on your specific scenario. 

First, let’s focus on fixing up the environment where the bad database change was made. We won’t worry about upstream or downstream environments just yet as they may or may not have the same changes already deployed to them.

## Roll changes forward
This is the beauty of database migrations and making small changes incrementally. By rolling the changes forward (some call this fixing forward), you simply add a new changeset to address the issue(s) caused by the deployment of previous change(s). Running a `liquibase update` is the best way to get rid of bad database changes that you’ve made. We strongly encourage using this option whenever possible. 

For example, let's say that you just added a new column to a database. Your changeset looks like this:

{% highlight xml %}
<changeSet author="BobTheDBA" id="add-country-to-address">
<addColumn tableName="address">
<column name="country" type="VARCHAR2(10 CHAR)">
</column>
</addColumn>
</changeSet>
{% endhighlight %}

You start doing your testing and you realize that ten characters is definitely not wide enough. To fix forward, add another changeSet that widens that column to the desired size:

{% highlight xml %}
<changeSet author="BobTheDBA" id="widen-country-column">
<modifyDataType columnName="country" newDataType="VARCHAR2(1000 CHAR)" tableName="address"/>
</changeSet>
{% endhighlight %}

And off you go on your merry way!

## Include a rollback script with every changeset
This option requires a lot of discipline as it involves creating a valid rollback for every. single. change. [Documentation on Liquibase rollbacks](http://www.liquibase.org/documentation/rollback.html).

By choosing the rollback script option, you will need to manually validate that the rollback for each changeset properly rolls back the change made by the changeset. Liquibase can/will auto-generate rollbacks for purely additive changes. For example, if you use the ‘create table’ command, Liquibase can generate a ‘drop table’ – but this is ONLY if you are using a Liquibase function and will not work if you’re pointing to a SQL file, using the SQL tag, or using a formatted SQL changelog. The best practice is to author rollbacks for every change (which you can do in any/all changelog formats) if you foresee the need to roll back.

Additionally, note that Liquibase will serially roll back changes to whatever point you want. There is no means to roll back a specific change that has previously been deployed. You have to roll back the changes in the reverse order that they were deployed. 

For example, you have the following changes deployed to a database and they all have a corresponding rollback script (A’, B’, C’, D’). 

<img src="/images/change scripts and rollback scripts.png" alt="Liquibase Change Scripts and Rollback">

Let’s say you want to roll back change ‘B’. Liquibase will only allow you to roll back change B by applying D’, C’ and B’ (basically rolling back D, C, and B) in order to “rollback change B”.

<img src="/images/rollback-a-change-liquibase.png" alt="Rollback a Change in Liquibase">

If you attempt a rollback to a change and Liquibase does NOT have a valid rollback script for one of the changes in the sequence, the rollback operation will fail and nothing will be rolled back. Liquibase performs this check before it starts applying any rollbacks, so no harm is done, but nothing will happen. The state of your database will remain exactly the way it is.

## Drop, rework, and deploy
If you are working in a sandbox/developer environment, this option is for you. You can run a `liquibase dropAll` to drop everything from the database. (Do NOT use this in production!) Once you have a clean sandbox, you can edit any changesets you want to, and then run a `liquibase update` to deploy the changes you want. This is a great option for iterative development if (and only if) you have a sandbox environment where you have the luxury of dropping all objects.

## Restore from backup
This option only works if you have a backup and the ability to take the downtime to restore from a backup. It’s operating outside of Liquibase but is a path to resolution.

## Do it live
This option is also operating outside of Liquibase and when you do not have a backup or ability to restore from a backup. 
With this option, you connect to the database and beat it into the state you desire. It’s unequivocally the worst of all options. If you ever want these fixes to apply to other environments, it will definitely require some combination of using `validCheckSum`, `diffChangelog`, `changelogSync`, etc. depending on the specifics of what you actually do by hand. Undoubtedly, it is STRONGLY recommended you do NOT use this option, and that you talk your DBAs out of resorting to this option; bribe them if you must!

## Summing it up
Bad database changes happen. Depending on your situation and needs, there are several ways to handle a bad database change when you’re using Liquibase. We always recommend rolling forward whenever possible, but it’s good to know all of your options.
