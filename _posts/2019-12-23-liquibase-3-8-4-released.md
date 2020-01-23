---
layout: default
subnav: subnav_blog.md
title: Liquibase 3.8.4 Released, Corrects Spring Boot Error in Pro
---
# Liquibase 3.8.4 Released, Corrects Spring Boot Error in Pro

Liquibase 3.8.4 is now available here through [Liquibase.org](https://download.liquibase.org/download-community/).
The [3.8.4 release is also available on GitHub](https://github.com/liquibase/liquibase/releases/). Here’s a closer look at what's included in the latest release.

## Liquibase 3.8.4 Overview

### Liquibase 3.8.4 Fix for Liquibase Pro Spring Boot Error
Previously, running a Spring Boot application while using Liquibase 3.8.0+ in Java 9+ caused errors. With the release of Liquibase 3.8.4, users can now use primary workflows with embedded Liquibase cases.

### Bug Fixes
For both Liquibase Community and Liquibase Pro users, the following bugs were fixed in version 3.8.4:
- Fixed a 'Class not Found' exception error when using Java +9.
- Fixed a 'Cannot Use Default Schema Name' error when users diff against an SQL Server snapshot file.
- Fixed an 'Unexpected type: java.util.Date' error when using a defaultValueDate attribute in a YAML changelog.
- Improved datetime type handling in SQL Server. Liquibase now preserves types and prevents unexpected behaviors.

### Documentation
All Liquibase users should also check out our continually improving documentation. For this release, there are several pages with brand new video content! Check them out here:
- [Creating & Configuring your liquibase.properties File](/documentation/config_properties.html)
- [Generating SQL to Update Database Schemas](/documentation/generate-sql-update-schemas.html)
- [Your First Migration with Liquibase Functions](/get_started/quickstart_lb.html)

You can also see our growing library of videos and [subscribe to our YouTube channel](https://www.youtube.com/channel/UC5qMsRjObu685rTBq0PJX8w?).

Full Liquibase documentation is available at [http://www.liquibase.org/documentation/index.html](/documentation/index.html).
