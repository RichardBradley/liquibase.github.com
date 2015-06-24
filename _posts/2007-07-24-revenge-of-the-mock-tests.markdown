---
layout: post
status: publish
published: true
title: Revenge of the Mock Tests
author:
  display_name: Nathan Voxland
  login: nvoxland
  email: nathan@voxland.net
  url: ''
author_login: nvoxland
author_email: nathan@voxland.net
wordpress_id: 24
wordpress_url: http://nvoxland.wordpress.com/2007/07/24/revenge-of-the-mock-tests/
date: '2007-07-24 20:29:00 -0500'
date_gmt: '2007-07-24 20:29:00 -0500'
categories:
- Uncategorized
tags: []
---
If you didn't see, version 1.1.1 of Liquibase was released the day after 1.1 because of problems reported by users with the new diff tool.

Now, we could simply say "it's a new feature, you should expect bugs", but they were pretty obvious ones that should have been caught by simply executing the diff tool against all our supported databases. A simple unit test or two that actually ran the diff tool exposed the bugs and they were easy to catch.

Why weren't those tests wrote before the 1.1 release? It was because I was testing with a mock database connection which didn't capture all the idiosyncrasies of different databases. The tests were there, and the coverage was there, but there were still bugs because of limitations in the (mock) abstraction layer.

The lesson to be learned is that when writing database access level code, never use a mock database connection.
