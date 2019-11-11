---
layout: default
title: Using Jira | Liquibase Docs
---

# Using Jira

The core Liquibase project uses [liquibase.jira.com](http://liquibase.jira.com/browse/CORE) as its bug and feature tracker.

If you have a bug or feature that you are working on or would like to have worked on, it should have an issue logged.

## Jira Fields

We limited down the available fields in Jira to a small but generally required set. We use them as follows:

**Title/Summary** is the one line description of the feature or bug.

Choose a title that is descriptive and to the point, keeping in mind that it will appear in the Jira release notes and be used by others to know what is in a release.

**Issue Type** contains just three options:
1. "Bug" for things that cause errors or do not work as expected
1. "Feature" for brand new features
1. "Improvement" for new functionality on existing features

**Priority** contains four options:
1. "Blocker" for bugs and missing features that are stopping you from using Liquibase
1. "Major" for bugs and missing features that interfere with your ability to use Liquibase, but you are able to work around the problem
1. "Nice to Have" for bugs and missing features that would be nice to have fixed or changed, but do not interfere with your usage
1. "Trivial" for bugs and missing features that are inconsequential.

**Affects Version** should contain the version in which you saw the bug the most recent version if it is a feature request.

**Fix Version** should be set to the version(s) in which the change is going to be made.
Normally this will be the next upcoming version, but if the change needs to be backported to previous release families specify both the current next version and all backported versions.

For example, if 3.1.3 is the version under development, but a bug needs to be fixed in the upcoming 3.0.4 version as well, set the Fix Version to "3.1.3, 3.0.4".

This should not be set until it has been determined that the issue will be fixed in a given release, either because you or someone else is actually going to fix it in that time frame.

**Environment** should describe your setup for a bug or the setup improved with a feature request. Include things like database type and version, operating system, and anything else that seems relevant to diagnosing and/or reproducing the issue.

**Description** should include enough information that someone else could reproduce your bug or understand the feature you want added. Include reproduction steps, impact, logs, and anything else that would be of value.

## Audiences ##

There are many different usages and audiences of issues entered in Jira. Remember to keep these people in mind when creating and working with Jira issues:

1. **People looking through the Jira backlog looking for something to fix** There are often lots of issues to chose from and if your issue is vague or incomplete there is a good chance it will be skipped over.
1. **The person fixing the bug** Make sure you are putting yourself in their shoes and thinking through what they will need. If you have done some troubleshooting or debugging and have any information that will make their job easier, make sure to include it.
1. **Others that are seeing a similar issue or want a similar feature** Describe your bug or feature well enough that somebody else running into it will find your issue rather than creating a duplicate or variation. Not only does duplicates leads to confusion for everyone, but we lose out on the chance to collaborate on a solution.
1. **Readers of the release notes** For each release, a link to the generated Jira release notes is made available. Make sure your title makes obvious what was changed.

## Jira Workflow ##

Liquibase uses "Open", "In Progress" and "Awaiting Merge" and "Closed" issues. We don't differentiate between Open vs. Reopened or Closed vs. Resolved.

All new issues will be created as "Open". When anyone begins working on an issue, they should assign it themselves and change the status to "In Progress". If it turns out that they will not actually resolve the issue, they will unassign it and set the status back to "Open".

When the fix or feature is "done" and ready to bring into the main codebase, the issue moves to "Awaiting Merge". At that point, the developer should create a GitHub pull request and reference the pull request in the Jira comments.

If the pull request is accepted, the issue will be changed to "closed". If the pull request is rejected, discussion will normally happen within the pull request interface until it is either accepted or given up on at which case the issue status will go back to "Open".

See the [how to contribute](contribute.html) documentation for more information on pull requests.



