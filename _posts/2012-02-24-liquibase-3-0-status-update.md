---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.0 Status Update
---
# Liquibase 3.0 Status Update

It has been a while since the last Liquibase release, and I wanted to give a quick status update.


The main thing I have been working on is the next version of Liquibase, which I am going to call 3.0.0. For those of you following along, the goal of 2.0 was to create an extensible system on top of liquibase as well as solidify the liquibase APIs for anyone wanting to integrate liquibase into their applications. Due to the size of that undertaking, the "diff" support did not get the same API cleanup and extensibility system in the 2.x release.


For the last several months I have been going through the diff side of the codebase, adding things such as:


- Standardized ways to specify mappings between "standard types" and "database specific types" in changeslogs
- Support for differentiation between catalogs and schemas
- The ability to add custom database objects to extract and compare in the snapshot/diff process
- The ability to change how database objects are extracted and compared
- Support for annotations in defining Change classes to make for easier subclassing
- Support for custom diff reporting formats
- Ability to handle multiple cross schema and catalog references in diffs



All-in-all I have about 400 changed files in my local repository that I have been waiting to push up to github until it is in a coherent state. I keep thinking "I'm sure it will be ready by next week" but keep finding more I would like to get done first. Because my local repository is so different than the github repository, I have not been bringing in the pull requests as I normally would. I will get to those once I get my changes pushed since I tend to do some modifications to the commits as part of the integration process.



I am calling the next version 3.0 rather than 2.1 because of the potentially breaking changes between 2.0 and 3.0. From an end-user standpoint, there will be little to no changes in the changelog format. Most breaking changes are in the internal liquibase APIs for those integrating liquibase and/or writing extensions. More information will be made available on breaking changes closer to release date.


Besides the code, I spent time lately dealing with defacement issues on liquibase.org and blog.liquibase.org. Because of this attack and earlier spam scripts that abused the wiki system, I am going to move the documentation and site from the current dokuwiki system to github. This has the advantage of better performance, the ability to manage branches of the documentation, and the ability to include an offline version of the manual with each release. Documentation changes will require a github pull request rather than the simpler wiki-style direct editing, however.


My planned timeline for 3.0 is to commit what I have within the next week or so, then merge in the pull requests and create a "3.0 alpha 1" release. I moved around a lot of database-specific code that will take a while for me to test and would like to get some feedback from the community as soon as possible on new bugs or regressions that were introduced by the changes. I will make an announcement when the first 3.0 release is available for testing.






