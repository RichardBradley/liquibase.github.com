---
layout: default
subnav: subnav_blog.md
title: Why Aren't Databases Version Controlled?
---
There was a great post the other day on Coding Horror titled "<a href="http://www.codinghorror.com/blog/archives/001050.html">Get Your Database Under Version Control</a>".  It references a good <a href="http://odetocode.com/Blogs/scott/archive/2008/01/30/11702.aspx">series of posts by K. Scott Allen</a> on  database version control, but also makes the point that *"When it comes to version control, the database is often a second or even third-class citizen."*

I have noticed this in the past as well, and have wondered why?

#### Lack of tools?

Subversion, CVS, RCS and others have been around for years, but when I came the the realization that the database must be version controlled I could find no tools that fit my need and so created <a href="http://www.liquibase.org/">Liquibase</a>.   I think lack of tools is a symptom of the problem rather than a cause, however.  Developers have never been a group to sit around waiting for a tool to solve a pressing need they see.

#### DBA Overlords?

In some organization changes to the database must go through a database change process managed by DBAs.   The fact that the database changes are managed by an external group could create a "not our problem" situation where the developers depend on the DBAs to track changes.  Again, I don't see this as a reason because the majority of projects do not have such a process in place and so wouldn't be depending on it.

#### Only Now A Big Problem?

The answer that makes most sense to me is that database versioning is a relatively new problem.   Code changes *need* to  be propagated to every developer on a team quickly and reliably and therefore automated tools like Subversion and CVS have been around for a long time and no one would ever consider a group project without them.  Most developers would not even consider a solo project without them.

Databases, on the other hand, do not change as often and so manual and error-ridden processes have worked well enough in the past.  As databases have become more and more central to projects of all types the old manual database update scripts are showing their limitations.

I think the final straw in the ad-hoc database management schemes has come from the growth of agile processes.  Pre-agile, even smaller projects would  often design the database up-front and changes to it could be managed in a piecemeal fashion throughout the project.  As agile does away with as much of the up-front design as possible, the number of database changes introduced throughout a project increases dramatically and a way to quickly, reliably, and automatically apply changes becomes a necessity.

I see the existing database versioning tools like <a href="http://www.liquibase.org/">Liquibase</a>, <a href="http://www.dbdeploy.com/">DBDeploy</a>, and <a href="http://api.rubyonrails.org/classes/ActiveRecord/Migration.html">ActiveRecord:Migration</a> as the <a href="http://en.wikipedia.org/wiki/Revision_Control_System">RCS</a>  of database versioning: they are a great start, but there is a lot of ground left to cover.  Recent version of Liquibase have added features such as <a href="http://www.liquibase.org/manual/rollback">database change rollback</a>, <a href="http://www.liquibase.org/manual/diff">database comparisons</a>, <a href="http://www.liquibase.org/manual/dbdoc">DBDoc</a>, and <a href="http://www.liquibase.org/manual/contexts">change contexts</a>, but there is still a lot to do.  That doesn't mean, however, that you shouldn't *Get your databse under version control*!

