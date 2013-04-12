---
layout: default
title: Liquibase
---

<div class="highlight" style="background-color:yellow;padding:10px; margin:20px; text-align:center"><b>WARNING!!!<br><br>UNDER CONSTRUCTION.<br>REAL DOCUMENTATION IS AT <a href="http://liquibase.org">http://liquibase.org</a></b></div>

<div class="container">
<div class="span-14 append-1">

<h1>Source Control for your Database</h1>

<h3>Liquibase is an open source, <a href="databases.html">database-independent</a> library for tracking, managing and applying database changes.</h3>

<h1>Features</h1>
<ul>
<li>Support code branches</li>
<li>Support merging changes from multiple developers</li>
<li><a href="http://liquibase.org/extensions">Plugin/extensions support</a></li>
<li>Cluster-safe database upgrades</li>
<li>Automated updates or generation of SQL scripts that can be approved and applied by a DBA</li>
<li><a href="documentation/rollback.html">Generate and manage rollback logic</a></li>
<li>Database "<a href="documentation/diff.html">diff's</a>"</li>
<li><a href="documentation/dbdoc.html">Database change documentation</a></li>
</ul>

</div>

<div class="span-9 last">
<div class='highlight'>
<h2>Get Started</h2>
<ol>
<li><a href="download/index.html">Download Liquibase</a></li>
<li>Create new changelog file in <a href="documentation/xml_format.html">XML</a>, <a href="documentation/yaml_format.html">YAML</a>, <a href="documentation/json_format.html">JSON</a> or <a href="documentation/sql_format.html">SQL</a>format</li>
<li>Add <a href="documentation/changeset.html">changeset</a> to <a href="documentation/databasechangelog.html">changelog</a> file</li>
<li>Run <a href="documentation/command_line.html">liquibase update</a></li>
<li>Commit changelog file to source control</li>
<li>Repeat</li>
</ol>
<a href="quickstart.html">Quick Start Guide</a> | <a href="documentation/index.html">Full Documentation</a>
</div>
</div>
</div>