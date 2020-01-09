---
layout: default
subnav: subnav_blog.md
title: Managing Change Logs
---

# Managing Change Logs

While you can include all your change sets in one giant change log, there are many good reasons to split them up. While there are many ways to divide your change logs, the best strategy I have found is to create a change log per major java package that contains data access code. This approach has several advantages:

#### Easy to Know Where to Add (and Look For) Database Changes</b>

If you are making a database change due to code in a package, you know exactly where to put the change.

#### Makes Code-Reuse and Code-Repackaging Easier

Since packages are often used as a logical code unit, the code to manage database changes can be moved and re-used along with the java code.

#### Keeps Database Changes Closer to the Code

You don't need to go hunt through your file navigator as you switch between adding required databases changes and making the corresponding code changes.

#### Fewer File Conflicts

On multi-developer teams, the database change logs are a shared resource with many individuals editing them. Like any version controlled file, the more developers and the more branches that touch a file, the more chances for problems. Breaking up a change log into multiple files limits the changes and extent of merge issues.

There are, of course, other ways to break up your change log files including one change log per project and one change log per table. Depending on your requirements, these or other strategies may work better for you. The important thing is to find what works best for you.
