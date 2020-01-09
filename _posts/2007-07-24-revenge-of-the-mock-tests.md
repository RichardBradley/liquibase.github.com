---
layout: default
subnav: subnav_blog.md
title: Revenge of the Mock Tests
---
# Revenge of the Mock Tests

If you didn't see, version 1.1.1 of Liquibase was released the day after 1.1 because of problems reported by users with the new diff tool.

Now, we could simply say "it's a new feature, you should expect bugs", but they were pretty obvious ones that should have been caught by simply executing the diff tool against all our supported databases. A simple unit test or two that actually ran the diff tool exposed the bugs and they were easy to catch.

Why weren't those tests wrote before the 1.1 release? It was because I was testing with a mock database connection which didn't capture all the idiosyncrasies of different databases. The tests were there, and the coverage was there, but there were still bugs because of limitations in the (mock) abstraction layer.

The lesson to be learned is that when writing database access level code, never use a mock database connection.
