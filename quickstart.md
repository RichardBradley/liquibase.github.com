---
layout: default
title: Liquibase Quick Start
includeDaticalBox: true
---
<div>
<h1 class="homepg"> Liquibase Quick Start</h1>    
<h2 class="homepg"> Overview </h2>
<p class="opg">
    This Quick Start provides a brief orientation to Liquibase, and addresses three key topics:</p>
    <ul class="opg">
        <li><a href="#approach">State and Migration approaches</a></li>
        <li><a href="#how">How Liquibase works</a></li>
        <li><a href="#tutorials">Tutorials for quickly getting started with Liquibase</a>
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                    <li><a href="#simpleSQL">Tutorial: Getting Started Using SQL Scripts</a></li>
                    <li><a href="#lbmodel">Tutorial: Getting Started Using Liquibase Functions</a></li>
                </ul></li>
    </ul>
    <p class="opg">
    The quick start does not cover every feature available in Liquibase, and is instead focused on ensuring that you understand the core concepts and are able to address basic use cases.
    </p>
</div>

<div style="background-color:lightgray">
<h2 class="homepg" id="approach">Database Change Management: State and Migration approaches</h2>
<p class="opg">
    There are two approaches for managing database changes. The first approach is state-based (or declarative) – in which the desired state of the database is defined. A tool that can compare (or diff) the target environment against the defined desired state is used to generate migration scripts that allow the target environment to match the declared state. The alternative approach is migration-based (or imperative) – in which the specific migrations for altering the state of a database are described. A tool capable of explicitly tracking and ordering the individual migrations and deploying the migrations that have not yet been deployed to the target environment is used to get the target database properly migrated.
</p>
<p class="opg">
    While Liquibase is capable of comparisons (or diffs), it is fundamentally a migration-based solution. The diff capability in Liquibase is only meant to assist with onboarding new projects and with sanity checking that database migrations have been properly applied. As a migration-based solution, Liquibase can easily:</p>
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
    <li>Liquibase uses a change log (which is a ledger of changes) to explicitly list database changes in a specific order. Each change in the change log is a “change set”. Change logs can be arbitrarily nested to aid in organization and management of database migrations.
        <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
            <li>Note: It is a best practice to ensure that each change set is as atomic a change as possible to avoid failed statements from leaving the database in an unknown state; however, it is possible to treat a large SQL script as a single change set.</li>
        </ul>
    </li>
    <li>Liquibase uses a tracking table (specifically called ‘DATABASECHANGELOG’) which resides on each database and which tracks which change sets in the change log have been deployed.
            <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                <li>Note: if there is no tracking table on a database that Liquibase is acting upon, the Liquibase will create a tracking table.</li>
                <li>Note: To assist with projects where you are not starting with a blank database, Liquibase has a feature to generate a change log to represent the current state of the database schema.</li>
            </ul>
        </li>
</ul>
<p class="opg">
        With the ledger and the tracking table, Liquibase is able to:
</p>
<ul class="opg">
    <li>Track and version database changes – Users know exactly what changes have been deployed to the database and what changes have not yet been deployed.</li>
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
        When working with Liquibase, changes can either be defined with the <strong><a href="#simpleSQL">Liquibase functions</a></strong> or with <strong><a href="#lbmodel">SQL</a></strong>. Importantly, these modes are not mutually exclusive, and can be used in conjunction, providing considerable flexibility in how database changes are defined and deployed.
        For changes defined with Liquibase functions, Liquibase generates SQL appropriate for the target database. This can be helpful when:
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
    <li>Making changes that are not Liquibase functions. Changes that are custom or specific to a database – for example, Oracle Nested Tables – are not typically Liquibase functions.</li>
    <li>Enabling developers highly proficient in SQL who strongly prefer working directly with SQL. It’s a common misconception that Liquibase only supports “XML database migrations”. The reality is that Liquibase can absolutely support plain SQL scripts!</li>
</ul>
<p class="callout">
        Note: <strong>Liquibase Pro</strong> adds change types for defining procedural database code to Liquibase functions. However, unlike other changes that are Liquibase functions, these procedural database code changes, such as “CREATE FUNCTION”, require database platform specific SQL (for example, on Oracle, the change would require PL/SQL). These new change types can be helpful in providing better visibility into database-specific changes from directly inspecting the change log.
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
    <li>After downloading the *.zip or *.tar.gz, extract the contents into a folder. You may want to add this folder to your system PATH environment so that you can execute liquibase from any directory. For this tutorial, we will refer to that directory as LB_HOME, and when executing the liquibase shell script will use `LB_HOME/liquibase` or `LB_HOME\liquibase.bat` as the example command.</li>
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
                    <li>On the command line, execute: {% highlight bash %}java -version{% endhighlight %}</li>
                    <li>Ensure that it runs successfully and displays your installed Java version.</li>
            </ul>
    </li>
</ol>
<br/>
<h4 class="homepg" style="font-size: large">Step 3: Download the H2 JDBC Driver</h4>
<ol class="opg">
    <li>The tutorials make use of an H2 database. You will need to download the H2 JDBC driver, which can be found <a href="http://www.h2database.com/html/cheatSheet.html">here</a>.</li>
    <li>Copy the h2*.jar file into the lib subdirectory of the LB_HOME directory where you extracted the Liquibase *.zip or *tar.gz</li>
</ol>
<br/>
<h4 class="homepg" style="font-size: large">Step 4: Setup liquibase.properties</h4>
<ol class="opg">
    <li>The tutorials use the CLI. While it is possible to pass all required parameters, such as the JDBC driver and database URL on the command line, it is much easier to configure a liquibase.properties file to save time and effort.</li>
    <li>Create a new directory for your first liquibase project, and change into that directory. For this example, we named the directory `my-first-lb-project`</li>
    <li>Create a plain text file named liquibase.properties in the project directory you just created and add the following content to the file.
{% highlight bash %}driver: org.h2.Driver
classpath: ./h2-1.4.199.jar
url: jdbc:h2:file:./h2tutorial
username: admin
password: password
changeLogFile: myChangeLog.xml{% endhighlight bash %}
        <ul class="opg" style="list-style-type: circle; padding-bottom: 0; margin-left: 1em;">
                <li><strong>Note: Be sure to use the actual version of the h2*.jar file that you copied into the extracted LB_HOME/lib directory!</strong></li>
        </ul>
    </li>
    <li>Ensure that you can execute liquibase. At the command prompt, run one of the following commands, depending on your platform:<br/>
        <b>Linux</b>
{% highlight bash %}~/my-first-lb-project$ LB_HOME/liquibase --help{% endhighlight bash %}
        <b>Windows</b>
{% highlight Batchfile %}C:\Users\Me\my-first-lb-project>LB_HOME\liquibase.bat --help{% endhighlight Batchfile %}
        You should see some help output.
    </li>
</ol>
</div>
</div>

<div>
<p class="opg">
    That is all! You are now setup to start one of the tutorials!
</p>
</div>

<div style="background-color:lightgray">

<h2 class="homepg" id="simpleSQL">Tutorial: Getting Started Using SQL Scripts</h2>
<p class="opg">This tutorial is ideal for those comfortable and familiar with SQL. The tutorial starts with a blank database and guides you through the process of using Liquibase to track, version, and deploy SQL scripts located in a specific folder.</p>

<h3 style="display:flex; justify-content:center; text-align:center"><a class="cta" href="/get_started/quickstart_sql.html">Start with SQL Scripts</a></h3>
<hr>
<h2 class="homepg" id="lbmodel">Tutorial: Getting Started Using Liquibase XML formatted changelogs</h2>
<p class="opg">This tutorial uses Liquibase XML formatted changelogs. Instead of working with SQL, changes will be defined in XML. Liquibase will generate SQL based on the changeSet(s) defined and will deploy that to target databases. All migrations are tracked and ordered explicitly in the changeLog.</p>
<h3 style="display:flex; justify-content:center; text-align:center"><a class="cta" href="/get_started/quickstart_lb.html">Start with Liquibase XML Changelogs</a></h3>

</div>

{% include tracking-codes/hotjar.tracking-code.html %}
