---
layout: default
title: V2 features
---

# Features and Changes between Liquibase 1.9 and 2.0 #

Liquibase 2.0 is a significant upgrade both in features and in community support.  For help in upgrading to version 2.0, see the [[v2_upgrade|Version 2.0 upgrade guide]]

**This page will be updated regularly up to and beyond the 2.0 final release.**

# Extensibility #

The primary focus of the 2.0 release is to open Liquibase up to extension.  There are several reasons for this, including:
  * The ability to upgrade components of Liquibase (such as Hibernate support) outside the regular release cycle
  * Allow new and experimental features to be introduced gradually
  * Allow 3rd parties to create custom extensions
  * Allow Liquibase users to modify functionality to better fit their needs
  * Allow us to support more database-specific features that don't belong in the core library

To support the new extensibility model, we completely refactored the codebase to clean it up (it is several years old), solidify APIs so they can coded against, added many integration points, and created an [[http://liquibase.org/extensions|extension portal]].  

Nearly every aspect of Liquibase can be modified including
 * Adding additional database change types
 * Modifying existing "core" changes with new attributes or defaults
 * Modifying SQL generated form by core and extension changes
 * Adding new database support
 * Modifying behavior of "core" database integrations
 * Modifying logging behaviors
 * Adding new precondition types as well as modifying and extending "core" preconditions

For more information on extending Liquibase for your own use, or to create a publicly available extension, visit our [[http://liquibase.org/extensions|extension portal]]

# New Features #
  * [[http://blog.liquibase.org/2010/05/liquibase-formatted-sql.html|Liquibase formatted SQL changelogs]]
  * Informix support
  * Ability to specify databases and contexts in which to specify changelog parameters
  * Ability to specify contexts on modifySql
  * [[http://www.liquibase.org/manual/preconditions#changelogpropertydefined|ChangeLogPropertyDefined]] precondition
  * Performance improvements
  * Lots of bug fixes


# Community Improvements #
  * Changed to Apache License, 2.0 from LGPL
  * Replacing the old mailing lists with an [[http://www.liquibase.org/forum|online forum]]
  * [[http://liquibase.org/extensions|Extension/plug-in portal]]
  * [[http://liquibase.jira.com|New Feature/Issue tracker]]
  * [[http://liquibase.jira.com/source/browse/CORE|New source repository and browser]]
  * Maven as build script
  * Improved documentation including developer documentation
  * Improved test coverage
