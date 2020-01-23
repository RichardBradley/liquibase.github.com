---
layout: default
subnav: subnav_blog.md
title: Liquibase Status - Aug 2015
---
# Liquibase Status - August 2015

This is the first in a planned monthly post designed to give a better window into Liquibase development and the Liquibase community. I'd appreciate any feedback you have on how helpful (or not) it is and/or any suggestions you have.

My work on Liquibase was split last month between a 3.4.1 release and continuing work on Liquibase 4.0. The full scope (and timeline) of 4.0 is still being determined, but the high-level goals are to:

- Simplify and standardize the codebase
- Improve the testability
- Make larger internal API changes to support new functionality

So far, the 4.0 work has focused on simplifying the Statement/Change/Generator/Snapshot logic and improving the testing of the interaction between Liquibase and the database. For more information and to help review the code so far, see [http://forum.liquibase.org/#Topic/49382000001343003](http://forum.liquibase.org/#Topic/49382000001343003)

The goal of 4.0 is to have no end-user breaking changes, but there will be API changes that will affect extension writers. Documentation on the upgrade process will be part of the release.

Beyond codebase changes, I switched the blog hosting from a separate server to being a part of the [liquibase.org github pages sites](https://github.com/liquibase/liquibase.github.com). Anyone using an RSS reader should have been redirected, and for everyone else the main difference should be posts now showing in the left navigation of liquibase.org and a more consistent design. For me, I now have one less server to maintain which is always good.

I also recently became the proud owner of the [@liquibase](https://twitter.com/liquibase), twitter account so feel free to follow and/or contact me there.

Finally, I want to use each monthly update as an opportunity to recognize a different contributor. As an open source project, Liquibase is a group effort with usually very little recognition.

This month I'd like to thank [Mark Chesney](https://github.com/mches).  Over the last few months he has sent nearly [50 pull requests](https://github.com/liquibase/liquibase/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Amches+) and has not only done a good job of managing the corresponding [liquibase.jira.com issues](https://liquibase.jira.com/secure/ViewProfile.jspa?name=mches), but has also helped answer questions, find work-arounds, and triage issues on other issues as well. Most of his work has centered around improving MS SqlServer support, and I appreciate all he has done.


