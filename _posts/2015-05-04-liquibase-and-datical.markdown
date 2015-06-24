---
layout: post
status: publish
published: true
title: Liquibase and Datical
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 474
wordpress_url: http://blog.liquibase.org/?p=474
date: '2015-05-04 14:32:15 -0500'
date_gmt: '2015-05-04 19:32:15 -0500'
categories:
- General
tags: []
---


For those of you who don't know, I've been working for <a title="Datical" href="http://datical.com">Datical</a> for the last year and a half as "Benevolent Dictator for Life." I often joke that I feel like I'm retired because after years of working on Liquibase as a hobby on nights and weekends I'm now spending my days working on my "hobby".


The rest of the Datical team works on Datical DB which uses Liquibase. Datical DB wraps additional functionality around Liquibase such as:


- Database specific objects such as Oracle Packages &amp; SQL Server Functions
- Forecast to simulate deployments
- HTML reporting
- Out-of-the-box integrations with Jenkins, IBM UrbanCode, CA Release Automation, and others
- Rules Engine (using Drools) to help you control specific objects in your deployments.



I've always considered the scope of Liquibase to be "git for your database"&ndash;flexible but with a single, vendor neutral purpose that is part of an overall application deployment process. Datical DB builds out the rest of toolset for those who need it.



To help highlight and differentiate Liquibase and Datical, I've made a few updates to <a href="http://liquibase.org">liquibase.org</a> including a feature comparison on the download page and a more descriptive "Enterprise Version" menu link. Liquibase continues to be a separate product from Datical and will always remain open source. The changes are simply to point people to Datical DB if they are interested without getting in the way of those who simply use Liquibase.
