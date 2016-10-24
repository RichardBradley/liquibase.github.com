---
layout: default
subnav: subnav_blog.md
title: Liquibase-Hibernate Plugin 3.6 Released
---

After far too long, the Liquibase-Hibernate plugin has been updated to **support Hibernate 5.x!!**

To use the new Hibernate 5 support, either download the liquibase-hibernate5 jar from the [release page](https://github.com/liquibase/liquibase-hibernate/releases)
or change your maven coordinates to &lt;artifactId&gt;liquibase-hibernate5&lt;/artifactId&gt; instead of &lt;artifactId&gt;liquibase-hibernate4&lt;/artifactId&gt;.

I have also released a 3.6 version of the liquibase-hibernate4 plugin that fixes some issues and also supports the newest Liquibase 3.5.3.

### Potential Issues

Because of changes in how Hibernate handles its naming between 4.x and 5.x, you now need to use separate implicitNamingStrategy and physicalNamingStrategy settings.
The Liquibase-Hibernate plugin will try to pick these up from your configuration automatically, but if you are setting them in your liquibase "url" you may need to change them.

Liquibase 3.5 introduced a change to how the the loadData change computed checksums of the CSV. The fix made it more forgiving of whitespace added to the file, but if you
previously had whitespace in your csv file you will get checksum validation errors. Adding the &lt;validCheckSum&gt;*&lt;/validCheckSum&gt; tag to any problem changeSets will fix the problem.

### Additional changes in this release

- Better diffChangeLog/generateChangeLog support for unique constraints
- Improved support for @Clob and @Lob annotations
- Improved detection and use of hibernate dialects
- Improved handling of indexes and primary keys

The full changelog is available at [https://github.com/liquibase/liquibase-hibernate/milestone/6?closed=1](https://github.com/liquibase/liquibase-hibernate/milestone/6?closed=1)

Any issues or feature suggestions can be added to [https://github.com/liquibase/liquibase-hibernate/issues](https://github.com/liquibase/liquibase-hibernate/issues)