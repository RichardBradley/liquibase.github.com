---
layout: default
title: Docs | Contributing to Liquibase 
---

# Contributing to Liquibase #

## Using GitHub ##

Liquibase uses the typical GitHub pull request workflow. GitHub provides great documentation including [How to Fork a Repository](https://help.github.com/articles/fork-a-repo) and [Using Pull Requests](https://help.github.com/articles/using-pull-requests).

The root Liquibase repository is at [http://github.com/liquibase/liquibase](http://github.com/liquibase/liquibase). To contribute fixes and features:

1. Create a fork of the main repository using the "Fork" button in the GitHub web interface
1. Clone your new repository to your computer
1. Create a branch in your repository for the fix or feature you are going to contribute
1. Code and test until done
1. Using git, "push" your changes back up to your local GitHub repository
1. Create a pull request in the GitHub web interface
1. Participate in any discussion on the pull request

## Git crash course ##

If you have not used Git or GitHub before, there are many resources available including [Git - SVN Crash Cource](http://git.or.cz/course/svn.html) and the general [GitHub Help](http://help.github.com).

If you would prefer to use subversion, GitHub [transparently supports SVN clients as well](https://github.com/blog/1178-collaborating-on-github-with-subversion)

## Code Guidelines ##

* The Liquibase project uses standard Java conventions
* Curly braces go on the same line as the "if" statements
* Git commit messages should include the Jira issue number, the issue summary, and a description of the how the change fixes the issue. For example "CORE-2822 YAML changelogs do not actually run included files. Finished implementation of the runIncludedChangeLog() method".
* Prefer smaller more frequent commits over larger monolithic commits
* Make sure your pull request target branch follows the [branching standards](branches.html).
* Create a pull request per feature or bug. Don't combine multiple independent changes into a single pull request.
* Include test cases for your features and bugs
