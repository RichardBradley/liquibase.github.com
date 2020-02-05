---
layout: side-search
title: Docs | Liquibase First Steps 
subnav: subnav_quickstart.md
includeDaticalBox: true
---
# Liquibase First Steps
In this tutorial, you will learn how to get up and running with Liquibase.

### Download and Extract Liquibase
<div class="tile-container">
  <div class="tile-item" align="center">
    <img src="{{site.baseurl}}{% link images/quickstart/download_icon.png %}" width="90px" alt="Download Icon">
  </div>

<div class="tile-item" markdown="1">

Begin by [downloading the Liquibase CLI tool](https://download.liquibase.org/)

You can use one of the following two installation guides depending on your platform:
- [Installing Liquibase Command Line for Windows]({{site.baseurl}}{% link documentation/installation-windows.md %})
- [Installing Liquibase Command Line for Linux/Unix/Mac]({{site.baseurl}}{% link documentation/installation-linux-unix-mac.md %})

View the [Liquibase Documentation]({{site.baseurl}}{% link documentation/index.md %}) for more information on other ways you can download and install Liquibase.
</div>
</div>

### Configure Liquibase
<div class="tile-container">
<div class="tile-item" markdown="1">
Liquibase allows you to specify options on the command line, which means the Liquibase CLI does not require configuration. 

However, creating a liquibase.properties file allows you to input default values so you don't have to specify them in the CLI unless you want to. Liquibase will always override a liquibase.properties file in favor of a CLI command.

View the [Creating and Configuring a liquibase.properties file]({{site.baseurl}}{% link documentation/config_properties.md %}) topic for more information.
</div>

<div class="tile-item">
  <img src="{{site.baseurl}}{% link images/quickstart/configure.png %}" width="100px" alt="Configure Icon">
  </div>
</div>

### Choose your Path
There are two ways Liquibase allows you to define changes to the database:

#### **Liquibase Functions**

<div class="tile-container">
  <div class="tile-item" align="center">
    <img src="{{site.baseurl}}{% link images/quickstart/xml-icon.png %}" width="100px" alt="XML Icon">
  </div>

<div class="tile-item" markdown="1">
Choosing this path means that your changes are defined in XML, JSON or YAML formats. Liquibase will create XML formatted changelogs that define your changeSets, then generate and deploy SQL to your database based on those changeSets. Liquibase will also track all database migrations in your *changelog*. 
</div>
</div>
<div class="tile-container">
<div class="tile-item" markdown="1">

#### **SQL Format**
Choosing this path means that you can define your own changes in SQL format. Liquibase will create SQL formatted changelogs that define your *changeSets*, then generate and deploy those changes to your database automatically. Liquibase supports plain SQL scripts designed to be custom or specific to your database and can even reference multiple script files in your *changelogs*.  
</div>

<div class="tile-item" align="center">
    <img src="{{site.baseurl}}{% link images/quickstart/sql-icon.png %}" width="100px" alt="SQL Icon">
  </div>
</div>

### Summary
In this tutorial we covered:
-   Downloading & Extracting Liquibase
-   How to Configure Liquibase
-   Choosing your Path

## **Next Up:** 

<div class="cta-container" style="margin-left: auto; margin-right: auto; width: 300px; height: 50px">
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/quickstart_lb.md %}">Your First Migration: Liquibase Functions ►</a></div>
<br>
<div class="cta cta--block"><a href="{{site.baseurl}}{% link get_started/quickstart_sql.md %}">Your First Migration: SQL Format ►</a>
</div>

