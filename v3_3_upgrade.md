---
layout: default
title: Liquibase version 3.3 Upgrade Guide
---

# 3.2 to 3.3 Upgrade Guide #

For must Liquibase end users, Liquibase 3.3 is a drop-in replacement for Liquibase 3.2 version. <a href="v3_2_upgrade.html">3.1 to 3.2 upgrade guide</a>

## Checksum issues
 
A bugfix in how Float values are handled can cause some checksums to return a different value, even though the changeSet did not change. Add the validCheckSum tag to any changeSets that are throwing unexpected validation errros.