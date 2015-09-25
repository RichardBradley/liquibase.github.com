---
layout: default
subnav: subnav_blog.md
title: 2015 Survey Results
---

There were 136 responses to the 2015 Liquibase Survey. Since I'm relying on self-selection for people answering the survey, the first question is how representative is the data.
The only two "demographic" survey questions I have alternate data points for are version used and country.

### Liquibase Version

Version | Survey | Maven Downloads
---- | ---- | -----
3.4 | 44% | 12%
3.3 | 29% | 37%
3.2 | 8% | 4%
3.1 | 7% | 11%
3.0 | 3% | 8%
2.x | 9% | 27%
1.x | 1% | 1%

Maven downloads is as good of a proxy for active users as I have since it will be including re-downloads more often.
Based on these results, the survey results are more skewed toward people who keep their Liquibase version more up to date as you'd probably expect since they are the ones visiting liquibase.org more often and subscribing to the blog where the survey announcements were.

### Country

Country	| Survey | Liquibase.org traffic
--- | --- | ---
United States | 26% | 22%
Germany | 20% | 8%
India | 2% | 7%
UK | 10% | 6%
Russia | 2% | 5%
France | 2% | 4%
Brazil | 2% | 4%
Canada | 3% | 3%
Other | 34% | 41%

The survey is interestingly heavy on people from Germany and under-representative of India, but otherwise seems like a reasonable cross-section.

### Usage Information

<img src="/custom_images/survey-2015/often.png">

<img src="/custom_images/survey-2015/long.png">

<img src="/custom_images/survey-2015/percent-use.png">

<img src="/custom_images/survey-2015/app-count.png">

What I found most surprising was the length of time people have used Liquibase. For a project that was first released in 2006, I would have expected a larger contingent of people using it for longer than 4 years.
It may be a result of newer users being most likely to visit liquibase.org and see the survey link, but it also a good sign for the project and the community that the user base is continuing to grow.
Continued growth should be expected as well, since most people are using Liquibase daily or weekly as part of their normal development process, but many have so far only deployed to less than 1/4 of their projects.

### Existing and Future Functionality

<img src="/custom_images/survey-2015/meets-needs.png">

<img src="/custom_images/survey-2015/docs.png">

<img src="/custom_images/survey-2015/extension.png">

One goal of the survey is to get an idea of what functionality people use and what could be improved upon. The general "how well does it meet your needs" peaks at a 4 and averages to 4, whereas the documentation averages only 3.3.
Documentation is something that I've not spent nearly enough time on, and the results definitely confirms that. The "meets needs" response is OK, but could definitely be better.
The extension question had 75% of people not writing extensions, so most people are making do with what ships with Liquibase vs. building their own functionality.

The most helpful section of the survey was the free response questions since they gave people a chance to give specific details about what they liked and what they want improved.

Some common themes in the answers included:

##### What do you like most about Liquibase?

- Use of non-sql XML and other formats to describe changes while still supporting SQL when needed
- Database agnostic and independent
- Simple/easy to use
- Can set up automatic database updates that just work
- Flexibility
- Project reliability and community
- Multiple options for defining changelogs

##### What features do you wish Liquibase had?

- Improved error messages and feedback
- Improved groovy support
- Ability to verify schemas
- Support for more databases and database-specific functionality
- NoSQL support
- PostConditions
- Looping construct
- Consolidation of old changeSets
- Static analysis/linting of changelogs

##### What are your greatest pain points with Liquibase?

- Migration of current workflow / adaption
- Documentation
- File encoding issues
- Checksums
- The logging system
- Using Liquibase in OSGi
- Functionality that may not work consistently  across all database types
- Lack of baselining support
- Performance
- Only Java-based
- Mixed-case handling
- Data type logic
- Sometimes slow bugfixes and community responses
- Required to use XML

There was a lot of other great answers as well, both for specific features to add and more general suggestions.

The areas for improvement generally lined up with what I was expecting, and are in the queue for upcoming releases which is always good.
Issues with documentation appears not only as a called-out pain point, but also shows up as other issues (such as required use of XML) where existing functionality is not described well enough to be found.

### Other demographics

<img src="/custom_images/survey-2015/database.png">

<img src="/custom_images/survey-2015/tech.png">

<img src="/custom_images/survey-2015/co-size.png">

<img src="/custom_images/survey-2015/who.png">

<img src="/custom_images/survey-2015/agility.png">

I always find real-life database usage interesting. For all the hype some databases get, Oracle squeaks out ahead of Postgresql and Mysql with a big drop-off to the rest.
MS SqlServer is probably under-represented compared to the industry as a whole since Liquibase is Java-based, but I was also surprised at H2's popularity.
I use H2 often while testing Liquibase because it is significantly faster for my tests than anything else, so it's good to see it is getting wider use.

Not a big surprise that Java and Javascript dominated the technologies of Liquibase users, but I was surprised to see the other languages at nearly 10% usage each.

I've always seen Liquibase as more of a developer-friendly tool, but was surprised to see just how dominant the use by developers are vs. other roles was. Perhaps it's all the XML that scares off everyone else...

I was also surprised to see the agility responses not farther to the right given that Liquibase is an agile/refactoring type tool.

### Comparisons to 2013 Results

I purposefully kept the survey questions very close to the survey I did in 2013 to compare. Some highlights from comparing results:

- Daily use increased from 43% to 53% while weekly use remained consistent
- "How well does Liquibase meet your needs" increased from 3.6 to 4.0
- "How helpful is the documentation" increased from 3.2 to 3.3
- Database use was very consistent, other than an increase in DB2 use from 4% to 10%
- Non-Java technology use increased from about 5% to about 10%
- Agility increased from 3.4 to 3.5

### Final Thoughts

Thanks again to everyone who filled out the survey this year.

While I get a good feel for how people are using Liquibase on an ongoing basis from questions asked, issues opened, and pull requests made, it is very helpful to have an alternate view of the project.
There wasn't anything completely unexpected to alter the roadmap I have in my head, but it is also good to see that the changes I'm planning on making will address many of the pain points people are having.
Plus, there are were several "that is a great idea, why didn't I think of that" suggestions which will be incorporated in future releases.

My plan was to continue making incremental improvements to the 3.x codeline while concurrently working on a more major 4.0 release, and based on the survey results I think that plan continues to make sense.
It appears that for the most part people are satisfied with Liquibase and it does most of what is needed. Consistency and reliability are important to them, and I don't want to throw major changes at them.
However, while there are safe improvements such as performance and file encoding that can be made in 3.x, fully addressing things like checksums, mixed-case, and data types will require significant-enough changes that they are best wrapped up into a "you know there is going to require testing" 4.0 release.

Documentation is also re-highlighted as something that needs more love as well. Liquibase is very flexible and has a lots of options, and not only does the raw features need to be better documented but how the various pieces can fit together to solve use cases and pain points needs to be better highlighted as well.

If you have any question or suggestions please let me know or discuss it on the [forum](http://forum.liquibase.org/#Topic/49382000001371001).