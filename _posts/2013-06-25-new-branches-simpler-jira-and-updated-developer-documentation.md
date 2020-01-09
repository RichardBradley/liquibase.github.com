---
layout: default
subnav: subnav_blog.md
title: New Branches, Simpler Jira and Updated Developer Documentation
---
# New Branches, Simpler Jira and Updated Developer Documentation

Now that 3.0.0 is out, I've cleaned up the Jira process a bit, created more git branches and tried to document it on the liquibase.org site.


On the liquibase.org top navigation bar, there is now a "Dev" link that brings to you to information on working with the Liquibase code, GitHub and Jira.


The <a href="https://www.liquibase.org/development/branches.html">branches</a> page  describes the the new branching strategy where we have a "next" branch for the next major release and a "#.#.x" branch for each release family for patch releases. You can see it in action now with both 3.0.0 and 3.0.1 in the "3.0.x" branch and already some changes in the "next" branch for 3.1.


The <a href="https://www.liquibase.org/development/jira.html">Using Jira</a> page describes how we use the various Jira fields. I simplified the Jira process a bit, taking out the "resolved" stage in favor of just "closed", removed fields we were not using, and created additional components for better categorization.


There is other good information in the new developer section of the site including how to build Liquibase with Maven and I will continue to add more down the road.
