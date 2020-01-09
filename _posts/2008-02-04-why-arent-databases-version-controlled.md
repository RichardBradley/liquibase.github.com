---
layout: default
subnav: subnav_blog.md
title: Why Aren't Databases Version Controlled?
---
# Why aren't Databases Version Controlled?

There was a great post the other day on Coding Horror titled 
["Get Your Database Under Version Control"](http://www.codinghorror.com/blog/archives/001050.html).  
It references a good [series of posts by K. Scott Allen](http://odetocode.com/Blogs/scott/archive/2008/01/30/11702.aspx)
on  database version control, but also makes the point that *"When it comes to version 
control, the database is often a second or even third-class citizen."*

I have noticed this in the past as well, and have wondered why?

## Lack of tools?

Subversion, CVS, RCS and others have been around for years, but when I came the the 
realization that the database must be version controlled I could find no tools that 
fit my need and so created [Liquibase](https://www.liquibase.org/). I think 
lack of tools is a symptom of the problem rather than a cause, however. Developers 
have never been a group to sit around waiting for a tool to solve a pressing need they see.

## DBA Overlords?

In some organization changes to the database must go through a database change process 
managed by DBAs. The fact that the database changes are managed by an external group 
could create a "not our problem" situation where the developers depend on the DBAs to 
track changes. Again, I don't see this as a reason because the majority of projects 
do not have such a process in place and so wouldn't be depending on it.

## Only Now a Big Problem?

The answer that makes most sense to me is that database versioning is a relatively new 
problem. Code changes *need* to  be propagated to every developer on a team quickly 
and reliably and therefore automated tools like Subversion and CVS have been around 
for a long time and no one would ever consider a group project without them.  Most 
developers would not even consider a solo project without them.

Databases, on the other hand, do not change as often and so manual and error-ridden 
processes have worked well enough in the past.  As databases have become more and 
more central to projects of all types the old manual database update scripts are 
showing their limitations.

I think the final straw in the ad-hoc database management schemes has come from the 
growth of agile processes.  Pre-agile, even smaller projects would  often design the 
database up-front and changes to it could be managed in a piecemeal fashion throughout 
the project.  As agile does away with as much of the up-front design as possible, the 
number of database changes introduced throughout a project increases dramatically and 
a way to quickly, reliably, and automatically apply changes becomes a necessity.

I see the existing database versioning tools like [Liquibase](https://www.liquibase.org/), 
[DBDeploy](http://www.dbdeploy.com/), and 
[ActiveRecord:Migration](http://api.rubyonrails.org/classes/ActiveRecord/Migration.html) 
as the [RCS](http://en.wikipedia.org/wiki/Revision_Control_System)  of database 
versioning: they are a great start, but there is a lot of ground left to cover.  Recent 
version of Liquibase have added features such as [database change rollback](/documentation/rollback.html), 
[database comparisons](/documentation/diff.html), 
[DBDoc](/documentation/dbdoc.html), and 
[change contexts](/documentation/contexts.html), but there is 
still a lot to do.  That doesn't mean, however, that you shouldn't *Get your databse under version control*!

