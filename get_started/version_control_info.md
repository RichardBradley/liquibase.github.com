---
layout: side-search
title: Docs | Using Version Control Systems 
subnav: subnav_quickstart.md
includeDaticalBox: true
---

# Using Version Control Systems with Liquibase

Liquibase utilizes a variety of text-based, human-readable, auto-mergeable formats which allows you to use any version control system of your choice. 

Liquibase is "version control friendly" because it executes the changes you give it against a database but doesn't care where those changes come from. 
You can manually create them in your machine directory, check them out of a version control system, use a network share file, or they can come from a compressed file like a jar, war, or zip file. What Liquibase cares about is that the file exists and can be read.

## What do I need to know about using version control with Liquibase?
If you keep your *changeLog* files in a version control system, you can perform your normal check-in, check-out, branching, and merging functions. You can run the *changeLog* at any point from where it is stored and Liquibase will update the database to the expected state.

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/index.md %}">Return to Get Started Home ►</a></div></div>
