---
layout: default
title: Liquibase Quickstart
includeDaticalBox: true
---

<div>
<h2 class="homepg"> Overview </h2>
<p class="opg">
    This Quick Start provides a brief orientation to Liquibase, and addresses three key topics:</p>
    <ul class="opg">
        <li><a href="#approach">State and Migration approaches</a></li>
        <li><a href="#how">How Liquibase works</a></li>
        <li><a href="#tutorials">Tutorials for using Liquibase</a>
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                    <li><a href="#simpleSQL">Tutorial: Use SQL Scripts</a></li>
                    <li><a href="#lbmodel">Tutorial: Use the Liquibase Model</a></li>
                </ul></li>
    </ul>
    <p class="opg">
    The quick start does not cover every feature available in Liquibase, and is instead focused on ensuring that you understand the core concepts and are able to address basic use cases.
    </p>
</div>

<div style="background-color:lightgray">
<h2 class="homepg" id="approach">Database Change Management: State and Migration approaches</h2>
<p class="opg">
    There are two approaches for managing database changes. The first approach is declarative (or state-based) – in which the desired state of the database is defined. A tool that can compare (or diff) the target environment against the defined desired state is used to generate migration scripts that allow the target environment to match the declared state. The alternative approach is imperative (or migration-based) – in which the specific migrations for altering the state of a database are described. A tool capable of explicitly tracking and ordering the individual migrations and deploying the migrations that have not yet been deployed to the target environment is used to get the target database properly migrated. 
</p>
<p class="opg">
    While Liquibase is capable of comparisons (or diffs), it is fundamentally an imperative (or migration-based) solution. The diff capability in Liquibase is only meant to assist with onboarding new projects and with sanity checking that database migrations have been properly applied. As a migration-based solution, Liquibase can easily:</p>
    <ul class="opg">
        <li>Track all proposed database changes, including the specific order they need to be deployed in, who proposed/authored the change, and record the purpose of the change (as a comment)</li>
        <li>Clearly answer whether a database change has or has not been deployed to a database. Effectively, Liquibase is able to “version” each database</li>
        <li>Deterministically deploy changes to a database, including promoting a database to a specific “version”</li>
        <li>Prevent users from modifying changes that have already been deployed to a database and requiring that they either deliberately rework the deployed change or roll-forward</li>
    </ul>
<br/>
</div>

<div>
<h2 class="homepg" id="how">How Liquibase Works</h2>
<p class="opg">At its core, Liquibase relies on a simple mechanism to track, version, and deploy changes:</p>
<ul class="opg">
    <li>Liquibase uses a changeLog (which is a ledger of changes) to explicitly list database changes in a specific order. Each change in the changeLog is a “changeSet”. ChangeLogs can be arbitrarily nested to aid in organization and management of database migrations.
        <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
            <li>Note: It is a best practice to ensure that each changeSet is as atomic a change as possible to avoid failed statements from leaving the database in an unknown state; however, it is possible to treat a large SQL script as a single changeSet.</li>
        </ul>
    </li>
    <li>Liquibase uses a tracking table (specifically called ‘DATABASECHANGELOG’) which resides on each database and which tracks which changeSets in the changeLog have been deployed. 
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                <li>Note: if there is no tracking table on a database that Liquibase is acting upon, the Liquibase will create a tracking table.</li>
                <li>Note: To assist with projects where you are not starting with a blank database, Liquibase has a feature to generate a changeLog to represent the current state of the database schema.</li>
            </ul>
        </li>
</ul>
<p class="opg">
        With the ledger and the tracking table, Liquibase is able to:
</p>
<ul class="opg">
    <li>Track and version database changes – so users know exactly what changes have been deployed to the database and what changes have not yet been deployed</li>
    <li>Deploy changes – specifically, by comparing what is in the ledger against what is in the tracking table, Liquibase is able to deploy only the changes that have not yet been deployed previously to the database.
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                    <li>Note: Liquibase has advanced features such as contexts, labels, and preconditions to precisely control when and where changeSets are deployed.</li>
            </ul>
    </li>
</ul>
<br/>
</div>

<div style="background-color:lightgray">
<h2 class="homepg" id="tutorials">Tutorials: Track, Version, and Deploy Database Changes with Liquibase</h2>
<p class="opg">
        When working with Liquibase, changes can either be defined with the <strong><a href="#simpleSQL">Liquibase object model</a></strong> or with <strong><a href="#lbmodel">SQL</a></strong>. Importantly, these modes are not mutually exclusive, and can be used in conjunction, providing considerable flexibility in how database changes are defined and deployed.
        For changes defined with the Liquibase object model, Liquibase generates SQL appropriate for the target database. This can be helpful when:
</p>
<ul class="opg">
    <li>Supporting multiple different database backends. This is a common use case if you are a software vendor looking to avoid writing the same database migrations simply to support different database platforms.</li>
    <li>Enabling developers who are not proficient or experienced with SQL to define database changes. Instead of SQL, the database migrations can be defined in XML, JSON, or YAML.</li>
    <li>Standardizing database changes. Liquibase will generate syntactically and stylistically consistent SQL, ensuring, as an example, that all ‘CREATE TABLE’ migrations have the same style and pattern.</li>
</ul>
<p class="opg">
    Alternatively, Liquibase works directly with user provided database migrations. This can be helpful when:
</p>
<ul class="opg">
    <li>Making changes that are not a part of the Liquibase object model. Changes that are custom or specific to a database – for example, Oracle Nested Tables – are not typically part of the Liquibase object model.</li>
    <li>Enabling developers highly proficient in SQL who strongly prefer working directly with SQL. It’s a common misconception that Liquibase only supports “XML database migrations”. The reality is that Liquibase can absolutely support plain SQL scripts!</li>
</ul>
<p class="callout">
        Note: <strong>Liquibase Pro</strong> adds change types for defining procedural database code to the Liquibase object model. However, unlike other changes that are a part of the Liquibase object model, these procedural database code changes, such as “CREATE FUNCTION”, require database platform specific SQL (for example, on Oracle, the change would require PL/SQL). These new change types can be helpful in providing better visibility into database-specific changes from directly inspecting the changeLog.
</p>
<br/>
</div>

<div>
<h2 class="homepg">Tutorial Setup</h2>
<p class="opg">
        Before attempting any of the step-by-step tutorials, please prepare your environment with the setup instructions.
</p>
<div style="background-color:whitesmoke">
<h4 class="homepg" style="font-size:large">Step 1: Download and Extract Liquibase</h4>
<ol class="opg">
    <li>Download Liquibase. Visit the <a href="https://download.liquibase.org/">download page</a> to get the latest binary.</li>
    <li>After downloading the *.zip or *.tar.gz, extract the contents into a folder.</li>
</ol>
<br/>
<h4 class="homepg" style="font-size: large">Step 2: Install Java</h4>
<ol class="opg">
    <li>Java is a required dependency. Install Java if it is not already installed.
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                    <li>Note: You can download and use the <a href="https://jdk.java.net/12/">OpenJDK</a>. Be sure to configure your path and environment variable <a href="https://stackoverflow.com/questions/52511778/how-to-install-openjdk-11-on-windows">properly</a>.</li>
            </ul>
    </li>
    <li>Validate that you have a working java version.
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                    <li>On the command line, execute: {% highlight bash %}java --version{% endhighlight %}</li>
                    <li>Ensure that it runs successfully and displays your installed Java version.</li>
            </ul>
    </li>
</ol>
<br/>
<h4 class="homepg" style="font-size: large">Step 3: Download the H2 JDBC Driver</h4>
<ol class="opg">
    <li>The tutorials make use of an H2 database. You will need to download the H2 JDBC driver, which can be found <a href="http://www.h2database.com/html/cheatSheet.html">here</a>.</li>
    <li>Copy the h2*.jar file into the directory that you extracted the Liquibase *.zip or *tar.gz</li>
</ol>
<br/>
<h4 class="homepg" style="font-size: large">Step 4: Setup liquibase.properties</h4>
<ol class="opg">
    <li>The tutorials use the CLI. While it is possible to pass all required parameters, such as the JDBC driver and database URL, it is much easier to configure a liquibase.properties file to save time and effort.</li>
    <li>Create a liquibase.properties. Add the following content to the file and save it in the directory that you extracted the Liquibase *.zip or *.tar.gz.
{% highlight bash %}driver: org.h2.Driver
classpath: ./h2-1.4.199.jar
url: jdbc:h2:file:./h2tutorial
username: admin
password: password
changeLogFile: myChangeLog.xml{% endhighlight bash %}
        <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                <li><strong>Note: Be sure to use the actual version of the h2*.jar file that you copied into the extracted Liquibase directory!</strong></li>
        </ul>
    </li>
</ol>
</div>
<div>
<p class="opg">
    That is all! You are now setup to start one of the tutorials!
</p>
</div>

<div style="background-color:lightgray">

<h2 class="homepg" id="simpleSQL">Tutorial: Get Started with SQL Scripts</h2>
<p class="opg">Blah  Go to <a href="quickstart/quickstart_sql.html">Link</a></p>

<h2 class="homepg" id="lbmodel">Tutorial: Get Started with the Liquibase Model</h2>
<p class="opg">Blah. Go to <a href="quickstart/quickstart_lb.html">Link</a></p>

</div>