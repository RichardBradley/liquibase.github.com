---
layout: default
subnav: subnav_blog.md
title: Taking the XML changeset and changelog workflows to the next level
---
# Taking the XML Changeset and Changelog Workflows to the Next Level

As many of you know, a few years after starting the Liquibase open-source project, I joined the team at Datical. 
For those who are unaware, Datical is a commercial solution built on top of Liquibase. 

Datical is also the primary maintainer of the Liquibase open source project - though we are always looking for more engaged community members who might be interested in being stewards to the project along with me.

While I’ve enjoyed the years of growth - both Liquibase and Datical have seen, I had always hoped for a better transition from the open-source project I founded to the commercial software that I now help architect. 

Finally, the wait is over – and I’m tremendously excited to announce that Datical’s latest release supports users bringing in their own XML changesets and changelogs from Liquibase.

*This new capability is a major milestone.* 
I’ve heard from your, the open-source community time and again that being able to describe database changes in an object model is much more approachable than having to writing everything in SQL – especially when delivering software runs against a number of different backend database platforms. 

Now, you can continue working with the Liquibase XML model, using the same workflow and practices that you have established across your team while upgrading to Datical when the time is right.

While Liquibase is a great solution for smaller teams, projects, and organizations, it has a number of limitations at enterprise scale. 
With this new capability, it becomes possible for teams to continue using Liquibase at enterprise scale, while seamlessly integrating and leveraging Datical behind the scenes to meet enterprise needs. 
I’ve heard of many cases where large organizations have put enormous effort into customizing and updating Liquibase with an internally forked version to meet their needs. 
While some of these projects have been rather successful, many eventually suffer from neglect as it becomes more difficult to maintain, scale, adapt the solution as time passes and as more teams want access.
 
There is now a new way forward. Already there has been many notable organizations, including Athene, MedImpact, and Zions Bancorporation, that started with Liquibase and moved to Datical. 
But now, instead of making a transition to Datical and requiring developers to write SQL, organizations can move to Datical while empowering their development teams to have a choice between writing XML changesets and SQL.
 
I’m excited about this news. If you are curious about how this works the team at Datical has pulled together a <a href="https://www.brighttalk.com/webcast/16371/343436">demo video</a> that illustrates how the Liquibase workflow can seamlessly benefit from Datical’s advanced enterprise capabilities. 
You can also learn more <a href="https://www.datical.com/liquibase/">here</a>.
