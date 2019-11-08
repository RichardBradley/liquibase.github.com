---
layout: side-search
title: Using Version Control Systems with Liquibase
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Using Version Control Systems with Liquibase

Liquibase utilizes a text-based, human-readable, auto-mergeable format which allows you to use any version control system of your choice. 

Liquibase is "version control friendly" because it executes the files you give it against a database but doesn't care where those files come from. You can manually create them in your machine directory, check them out of a version control system, use a network share file, or they can come from a zip file. What Liquibase cares about is that the file exists and can be called on.

## What do I need to know about using version control with Liquibase?
If you keep your changeLog files in a version control system, you can perform your normal check-in, check-out, branching, and merging functions. You can run the changeLog at any point from where it is stored and Liquibase will update the database to the expected state.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="/get_started/lb-core-usage-concepts.html">Get Started: Liquibase Core Usage Concepts ►</a></div></div>