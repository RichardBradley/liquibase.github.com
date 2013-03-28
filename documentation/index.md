---
layout: default
title: Home
---

<div class="container">
<div class="span-10 append-1">

<div class='highlight'>
<h2>TL;DR</h2>
<ol>
<li>Create new changelog file in <a href="xml_format.html">XML</a>, <a href="yaml_format.html">YAML</a>, <a href="json_format.html">JSON</a> or <a href="sql_format.html">SQL</a>format</li>
<li>Add <a href="changeset.html">changeset</a> to <a href="databasechangelog.html">changelog</a> file</li>
<li>Run <a href="command_line.html">Liquibase Update command</a></li>
<li>Commit changelog file to source control</li>
<li>Repeat</li>
</ol>
See the <a href="../quickstart.html">Quick Start Guide</a> for more information
</div>

<h2>Building Changelogs</h2>
<ul>
<li><a href="databasechangelog.html">Changelog file</a>
<ul>
    <li><a href="xml_format.html">XML Format</a></li>
    <li><a href="yaml_format.html">YAML Format</a></li>
    <li><a href="json_format.html">JSON Format</a></li>
    <li><a href="sql_format.html">SQL Format</a></li>
    <li><a href="other_formats.html">Other Formats</a></li>
</ul></li>
<li><a href="changeset.html">Changesets</a></li>
<li><a href="changes.html">Changes/refactoring commands</a></li>
<li><a href="include.html">Including/nesting changelogs</a></li>
<li><a href="preconditions.html">Preconditions</a></li>
<li><a href="contexts.html">Contexts</a></li>
<li><a href="changelog_parameters.html">Changelog Parameters</a></li>
<li><a href="generating_changelogs.html">Generating Changelogs</a></li>
</ul>

<h2>Liquibase Commands</h2>
<ul>
<li><a href="update.html">Update</a></li>
<li><a href="rollback.html">Rollback</a></li>
<li><a href="diff.html">Diff</a></li>
<li><a href="sql_output.html">SQL Output</a></li>
<li><a href="dbdoc.html">DBDoc</a></li>
</ul>

<h2>Running Liquibase</h2>
<ul>
<li><a href="command_line.html">Command Line</a></li>
<li><a href="ant.html">Ant</a></li>
<li><a href="maven.html">Maven</a></li>
<li><a href="spring.html">Spring</a></li>
<li><a href="grails.html">Grails</a></li>
<li><a href="servlet_listener.html">Servlet Listener</a></li>
</ul>

</div>

<div class="span-13 last">
<h2>Major Concepts</h2>

<h3>Changelog file</h3>
<p>
Developers store database changes in text-based files on their local development machines and apply them to their local databases.
Changelog files can be be arbitrarily nested for better management. <a href="databasechangelog.html">[more]</a>
</p>

<h3>Change Set</h3>
<p>
Change Sets are uniquely identified by the "author" and "id" attribute along with with the location of the changelog file and are the units Liquibase tracks execution of.
When Liquibase runs, it queries the DATABASECHANGELOG table for the changesets that are marked as executed and then executes all changesets in the changelog file that have not yet been executed.
 <a href="databasechangelog.html">[more]</a>
</p>

<h3>Changes</h3>
<p>
Each changeset generally contains a change which describes the change/refactoring to apply to the database. Liquibase supports both descriptive changes that generate SQL for supported databases and raw SQL.
Generally there should be just one change per changeset to avoid failed autocommit statements that can leave the database in an unexpected state.
 <a href="changes/index.html">[more]</a>
</p>

<h3>Preconditions</h3>
<p>
Preconditions can be applied to either the changelog as a whole or individual change sets. If a precondition fails, Liquibase will stop execution.
 <a href="preconditions/index.html">[more]</a>
</p>

<h3>Contexts</h3>
<p>
Contexts can be applied to changesets to control which are ran in different environments. For example, some changesets can be tagged as "production" and others as "test".
If no context is specified, the changeset will run regardless of the execution context
 <a href="contexts.html">[more]</a>
</p>

</div>

</div>