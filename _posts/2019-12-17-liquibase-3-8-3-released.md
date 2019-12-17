---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.8.3 Released Improves Maven Plugin Support
---
Liquibase 3.8.3 is now available here through [Liquibase.org](https://download.liquibase.org/download-community/).
The [3.8.3 release is also available on GitHub](https://github.com/liquibase/liquibase/releases/). Here’s a closer look at what's included in the latest release.

## Liquibase 3.8.3 Overview

### Improved Support for Liquibase-Maven Plugin and Java 9+
When you try to make a lot of improvements really fast, sometimes things can break. Thanks for letting us know that there was an issue with our last point release with Maven. We wanted to remedy this as quickly as possible. We're very happy to report with the release of Liquibase 3.8.3, users of both Liquibase Community and Liquibase Pro can enjoy improved Liquibase-Maven plugin experiences, especially when using Java 9+.

### Bug Fixes
The following bugs were fixed in version 3.8.3:
- Liquibase-Maven plugin now works with Java 9+.
- Improvements using formatted SQL file with `generateChangeLog` for users with Stored Logic objects.
- Rollback by tag now works without getting hung up on your labels.
- Licenses are now properly included (making attorneys happy) and should prevent some issues for a small set of users that needed extra clarity.
- Expired license messages are now less annoying. (We made them less verbose and less excitable.)

### Documentation
All Liquibase users should also check out our continually improving documentation. For this release, there are two pages of special interest:
- [Maven Liquibase Plugin](/documentation/maven/index.html)
- [How to Get Oracle Drivers using Maven](/documentation/maven/maven-get-oracle-drivers.html)

Full Liquibase documentation is available at [https://www.liquibase.org/documentation/index.html](/documentation/index.html).

### Get Involved
You can help make the Liquibase community better by contributing in the following ways:
- Contribute code - [https://www.liquibase.org/development/contribute.html](https://www.liquibase.org/development/contribute.html)
- Make documentation updates -[https://github.com/liquibase/liquibase.github.com/tree/master/documentation](https://github.com/liquibase/liquibase.github.com/tree/master/documentation)
- Participate in our community survey and earn $10 for 10 minutes of your time -[https://www.surveymonkey.com/r/Liquibase-Survey-B](https://www.surveymonkey.com/r/Liquibase-Survey-B)
