---
layout: default
title: Download Liquibase
subnav: subnav_main.md
---

# Liquibase Downloads #

## Current Liquibase Core Release: 3.3.3 (Apr 29, 2015) ##
<ul>
<li style="margin-top:20px"><a href="../v3_3_upgrade.html">3.2 to 3.3 upgrade guide</a></li>
</ul>

## Liquibase Versions ##
<table style="width:100%">
<tr>
<td style="width:50%"></td>
<td style="width:25%"><center><font size="5">Liquibase</font></center></td>
<td style="width:25%"><center><font size="5">Datical DB</font></center></td>
</tr>
<tr>
<td style="width:50%">Database Source Control/Versioning</td>
<td style="width:25%"><center>X</center></td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Database Schema Management</td>
<td style="width:25%"><center>X</center></td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Stored Logic Support</td>
<td style="width:25%"> </td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Full ALM Workflow Support</td>
<td style="width:25%"> </td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Deployment Simulation and Error Reporting</td>
<td style="width:25%"> </td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Standards & Compliance Enforcement</td>
<td style="width:25%"> </td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Automated Reporting backed by Complete Audit Database</td>
<td style="width:25%"> </td>
<td style="width:25%"><center>X</center></td>
</tr>
<tr>
<td style="width:50%">Full Commercial Support & Training</td>
<td style="width:25%"> </td>
<td style="width:25%"><center>X</center></td>
</tr>
</table>
<table>
<tr>
<td style="width:50%"></td>
<td style="width:25%"><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.3.3-bin.zip/download" onclick="trackOutboundLink(this, 'Download 3.3.3', 'sourceforge.net'); return false;">liquibase-3.3.3-bin.zip</a><br/><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.3.3-bin.tar.gz/download" onclick="trackOutboundLink(this, 'Download 3.3.3', 'sourceforge.net'); return false;">liquibase-3.3.3-bin.tar.gz</a></td>
<td style="width:25%"><center><a href="http://www.datical.com/liquibase" target="_blank" onClick="_gaq.push(['_trackEvent', 'Liquibase', 'Click', 'Liquibase RFI']);">Learn more about<br/>Datical DB >></a></center></td>
</tr>
</table>

## Extensions ##

Liquibase supports a powerful plugin/extension framework to add new features or override standard logic. Visit the [Extension Portal](http://www.liquibase.org/extensions) for more information.

## Previous Releases ##

<ul>
    <li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.2.3-bin.zip/download" onclick="trackOutboundLink(this, 'Download 3.2.3', 'sourceforge.net'); return false;">liquibase-3.2.3-bin.zip</a></li>
    <li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.2.3-bin.tar.gz/download" onclick="trackOutboundLink(this, 'Download 3.2.3', 'sourceforge.net'); return false;">liquibase-3.2.3-bin.tar.gz</a></li>
</ul>
<ul>
    <li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.1.1-bin.zip/download" onclick="trackOutboundLink(this, 'Download 3.1.1', 'sourceforge.net'); return false;">liquibase-3.1.1-bin.zip</a></li>
    <li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.1.1-bin.tar.gz/download" onclick="trackOutboundLink(this, 'Download 3.1.1', 'sourceforge.net'); return false;">liquibase-3.1.1-bin.tar.gz</a></li>
</ul>
<ul>
<li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.0.8-bin.zip/download" onclick="trackOutboundLink(this, 'Download 3.0.8', 'sourceforge.net'); return false;">liquibase-3.0.8-bin.zip</a></li>
<li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-3.0.8-bin.tar.gz/download" onclick="trackOutboundLink(this, 'Download 3.0.8', 'sourceforge.net'); return false;">liquibase-3.0.8-bin.tar.gz</a></li>
</ul>
<ul>
<li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-2.0.5-bin.zip/download" onclick="trackOutboundLink(this, 'Download 2.0.5', 'sourceforge.net'); return false;">liquibase-2.0.5-bin.zip</a></li>
<li><a href="http://sourceforge.net/projects/liquibase/files/Liquibase%20Core/liquibase-2.0.5-bin.tar.gz/download" onclick="trackOutboundLink(this, 'Download 2.0.5', 'sourceforge.net'); return false;">liquibase-2.0.5-bin.tar.gz</a></li>
</ul>
<ul>
<li><a href="https://sourceforge.net/projects/liquibase/files/Liquibase%20Core/">All previous versions</a></li>
</ul>

## Snapshot Builds ##

Snapshot builds can be downloaded directly from the <a href="https://liquibase.jira.com/builds/browse/CORE-LB" onclick="trackOutboundLink(this, 'Download Snapshot', 'liquibase.jira.com'); return false;">Liquibase build server</a>
 
Snapshot Maven builds are also automatically uploaded to the sonatype repository. You can configure your project to pull from it by adding to your pom.xml:
  
{% highlight xml %}
<repositories>
    <repository>
        <id>sonatype-snapshots</id>
        <name>OSS Sonatype Snapshots</name>
        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
    </repository>
</repositories>
{% endhighlight %}

## Installation ##

### Command line ###

Extract the liquibase-VERSION.zip or liquibase-VERSION.tar.gz file to a local directory. The extracted files contain a `liquibase.bat` and `liquibase` shell script for Windows and Mac/UNIX systems.

### Maven ###

Liquibase Core, the Liquibase Maven plugin, and standard Liquibase Extensions are available through the central maven repository under the "org.liquibase" organization. See <a href="../documentation/maven/index.html">the Liquibase Maven documentation</a> for more information.

### Other ### 

Within the liquibase-VERSION.zip or liquibase-VERSION.tar.gz file is the liquibase.jar file to add to your classpath. If you are using JSON/YAML based changelogs you also need to add the snakeyaml.jar found in the included lib directory.

## Requirements ##

Liquibase 2.x requires Java 1.5+. Liquibase 3.x requires Java 1.6+.

## Source Code ##

Browse the Liquibase source or clone it out from [https://github.com/liquibase/liquibase](https://github.com/liquibase/liquibase).

## Liquibase Community ##

Feature suggestions, bug reports, and general help should be directed to the [community](../community/index.html).

## Copyright ##
Copyright (C) 2006-{{ site.time | date: "%Y" }}  Nathan Voxland

This library is free software; you can redistribute it and/or modify it under the terms of the Apache License, Version 2.0.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.