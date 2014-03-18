---
layout: default
title: Watch
---

# Liquibase SDK Watch

The liquibase-sdk watch command runs a simple database view application. This command can be useful for understanding what Liquibase does,
demos, and simple manual testing. The application runs as a web application running by default on localhost port 80.

__Liquibase SDK is available in Liquibase 3.2.0+__

## Features

* Page auto-reloads on changes to DATABASECHANGELOG table
* Select an item in the top tabbed section to see more details
* DatabaseChangeLog records shown in reverse order for less scrolling

## Available Parameters

* **--url** Database URL to watch [required]
* **--username** Database username [required]
* **--password** Database password [required]
* **--port** HTTP port to use. Default: 8080

Example:

* `liquibase-sdk watch --url=jdbc:mysql://10.10.100.100/lbcat --username=lbuser --password=lbuser`

<img src="watch-screenshot.png" style="max-width:80%">