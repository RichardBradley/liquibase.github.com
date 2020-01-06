---
layout: default
subnav: subnav_blog.md
title: Top 10 Findings from Our Liquibase Community Survey
---
First, a huge THANK YOU to everyone who participated in the Liquibase community survey. We had the best turnout ever and really appreciate all of the great input and feedback. We’ve already adjusted our road map to make sure we are building the features that you are asking for. The system works! Here are the top 10 findings from our survey.

## 1 — Most Liquibase users are developers.
We’ve learned that most people using Liquibase are coming from development and not from the database side. It’s interesting to understand our users’ backgrounds and what their focus is so that we can help more users get their jobs done easier and faster. Not only that, but it helps us figure out what type of information and analogies might be more useful in the documentation. 

<img src="/blog/images/job-title-role.png">

## 2 — Liquibase is used by companies of all sizes.
It’s fascinating to us to see how well Liquibase can work with different sized teams and for companies both big and small. 

<img src="/blog/images/company-size-employees.png">

Some of the respondents who opted to have a phone conversation with us have told us that Liquibase works great, but there are pain points around managing complex management tasks for really large deployments. We’re looking into options around what we can offer to help with the ecosystem around Liquibase. 

## 3 — Preferences for executing Liquibase are pretty clear. 
Understanding how the community executes Liquibase helps us understand where to invest our time. Maven and the command line are the favorites followed by Spring Boot, and custom shell scripts. 

<img src="/blog/images/execute-liquibase.png">

## 4 — The most popular databases to use with Liquibase surprised us.
There were some not officially supported databases that showed up high on our list and some supported ones that not many people use. It’s definitely time to make sure we’re officially supporting the databases the community works with most. We’d like to learn more from you about how you’re using Liquibase with databases like MySQL and MariaDB. 

<img src="/blog/images/popular-databases-liquibase.png">

## 5 — Understanding your preference for writing change scripts. 
We asked the community for their preference for writing change scripts (1 being most preferred and 5 being least preferred). We hear you. Yes, many people like using XML, but many Liquibase users prefer SQL. 

We’ll be focusing on documenting the use of plain old SQL better and also improving the overall experience for those that use SQL for change scripts. 

<img src="/blog/images/authoring-database-change-scripts.png">

## 6 — Most of you are definitely interested in a centralized dashboard.
We’ve added creating a dashboard that shows all Liquibase deployments in your organization to our road map! Exciting. We’ll be updating you on our progress here soon.

<img src="/blog/images/dashboard-interest.png">

## 7 — Most of you are using Jenkins for CI. 
There are a LOT of CI tools out there, but our survey shows most Liquibase users rely on Jenkins. We’d like to begin work on a Jenkins plugin for the community to make it even easier. If you’re interested in using an open source Jenkins plugin for Liquibase, let us know what you’d like to see as part of the plugin. Already make your own version? What should we be aware of? Let us know what you think and [join the discussion on our subreddit](https://www.reddit.com/r/liquibase/comments/ekxhld/jenkins_plugin_for_liquibase_weigh_in/). 

<img src="/blog/images/Jenkins-preference-Liquibase.png">

## 8 — We need to continue making our documentation better. 
We’ve made a ton of improvements recently and plan on making many more to our docs, add video tutorials, and make our getting started information more useful. Most of the other input we received was about adding or improving integrations and various features.

## 9 — Features that you’d most like to see.
Features that are highest in demand are around rolling back a specific change and an easier way to run platform-specific SQL. We’ve added these items to our road map and you’ll be seeing these become reality very soon!

## 10 — Overall, you really like Liquibase.
We received a lot of positive feedback from you. It’s exciting and fun to work on a project so many people love and rely on. 

Some positive pieces of feedback we wanted to share:

“We use Liquibase in our CI/CD pipeline with Jenkins and it has worked well for us. We have been using SQL versus XML/JSON/YAML as it allows us to use Postgres BDR and PgLogical features that would otherwise have been unavailable.” 
-- Andy K., Senior Software Architect at ACI Worldwide

“I love using Liquibase. I don't want to think about doing database releases without it anymore.”
-- Anonymous

“Liquibase is a great tool that changed the way I managed database changes.”
-- Anonymous 

“Fantastic tool.”
-- Anonymous
