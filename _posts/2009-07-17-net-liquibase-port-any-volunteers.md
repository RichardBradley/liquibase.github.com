---
layout: default
subnav: subnav_blog.md
title: .Net Liquibase Port Volunteers
---
# .Net Liquibase Port: Any Volunteers?

As part of re-evaluating the Liquibase APIs as part of the 2.0 codebase, I started an experimental .Net implementation to see what changes would need to be incorporated into the regular codebase to produce a liquibase.dll with as new little code as possible. I have the code to the point that I know it would work, and can see the direction it would need to go, but I will not have time to fully implement it for quite some time. That is where you could come in...


Despite <a href="https://stackoverflow.com/questions/812474/jvm-clr-source-compatible-language-options">thinking about alternate languages</a>, I ended up finding that <a href="https://www.ikvm.net/">ikvm</a> is the best option for us. I was able to split the existing java code into a "core" and "core-jvm" source directories. The "core" code is/will be java code, but without any jdbc or xml libraries (or java-specific technologies like Ant, Maven, and Servlets). The core-jvm source is all the remaining "java specific" code.


I then compiled the "core" java library into a dll and added it as a reference in a new "core-clr" source directory and visual studio solution. I was able to begin implementing the liquibase abstraction interfaces using OleDbConnection-based classes.


What is the current state? The liquibase code is divided between core, core-jvm, and core-clr, but the core-clr is far from complete. Since we can use the core liquibase.dll, 90% of the liquibase code will be shared between the two projects, so bugfixes will be applicable to both, new features will be applicable to both, and the .net port will include all the cross-database support and refactorings that currently exist in liquibase. What needs to be done is:


- Re-implement the connection based logic using OleDbConnection (or better .net interface?). This includes translating the abstracted liquibase "execute this sql" calls as well as the database metadata reading logic.
- Re-implement the XML parser using .net libraries. This has not been started, but the abstractions are already there in the liquibase code.
- Create any .Net specific integrations (IIS, NHibernate, MSBuild, Installer, etc.)



If you are interested in helping, please send me an email (nathan@voxland.net). You do not need to be proficient in java to help, we can handle any changes to the java liquibase codebase to support you as needed.

