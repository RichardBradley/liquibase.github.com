---
layout: post
status: publish
published: true
title: What Effects ChangeSet Checksums?
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 67
wordpress_url: http://blog.liquibase.org/?p=67
date: '2009-03-24 00:39:45 -0500'
date_gmt: '2009-03-24 05:39:45 -0500'
categories:
- Useage
tags: []
---


We store an md5 checksum with each changeset entry in the database changelog table to detect differences between what is currently in the changelog and what was actually ran against the database.


We try to keep as many false-positives and false-negitives out of the process by taking only the database change related tags, normalizing the XML, and then creating the checksum.


That means that you can reformat your XML (for the most part) as well as add or change preconditions, contexts, and validCheckSum tags without effecting the checksum. The only time that the xml reformat can cause problems is if a text block such as an `<sql>` tag is reformatted.


So don't fear the checksum. It is there to help you out and you can add information around already ran changesets without problems. And if you do need to change your original changes, <a href="http://blog.liquibase.org/2008/10/dealing-with-changing-changesets.html">there are ways to deal with the checksum problems</a>.
