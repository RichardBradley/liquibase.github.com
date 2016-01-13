---
layout: default
subnav: subnav_blog.md
title: What Effects ChangeSet Checksums?
---


We store an md5 checksum with each changeset entry in the database changelog table to detect differences between what is currently in the changelog and what was actually ran against the database.


We try to keep as many false-positives and false-negitives out of the process by taking only the database change related tags, normalizing the XML, and then creating the checksum.


That means that you can reformat your XML (for the most part) as well as add or change preconditions, contexts, and validCheckSum tags without effecting the checksum. The only time that the xml reformat can cause problems is if a text block such as an `<sql>` tag is reformatted.


So don't fear the checksum. It is there to help you out and you can add information around already ran changesets without problems. And if you do need to change your original changes, <a href="http://www.liquibase.org/2008/10/dealing-with-changing-changesets.html">there are ways to deal with the checksum problems</a>.
