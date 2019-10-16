---
layout: default
title: Liquibase
includeDaticalBox: true
extraStyleSheets:
  - choose-path
  - value-props
---

<h1 style="display:flex; justify-content:center; margin-top: 36px;"><img src="images/liquibase_logo.gif" alt="Liquibase"></h1>
<h3 style="display:flex; justify-content:center; text-align:center; font-size: 20px;">The leading open source tool for database change and deployment management.</h3>

<div class="lb-choose-path">
    <div class="lb-choose-path__heading">
        <div class="lb-choose-path__heading__title">
            <h2>
                Which Option is Right for You?
            </h2>
        </div>
    </div>
    <div class="lb-choose-path__paths">
        <div class="lb-choose-path__path lb-choose-path__path--community">
            <div class="lb-choose-path__path__title">
                <h2>
                    Liquibase Community
                </h2>
            </div>
            <div class="lb-choose-path__path__text">
                <p>
                    Liquibase provides a great starting point for teams addressing the challenges that come with managing database schema changes.
                    <br><br>
                    It does a lot more than push database scripts, it generates and deploys them as well.
                </p>
            </div>
            <div class="lb-choose-path__path__spacer"></div>
            <div class="lb-choose-path__path__button">
                <a href="https://download.liquibase.org" class="cta cta--block">Download Liquibase</a>
            </div>
        </div>
        <div class="lb-choose-path__path lb-choose-path__path--pro">
            <div class="lb-choose-path__path__title">
                <h2>
                    Liquibase Pro
                </h2>
            </div>
            <div class="lb-choose-path__path__text">
<<<<<<< HEAD
                <p>
                    Liquibase Pro offers expert help and support from the creators or Liquibase, so you don’t have to go it alone.
                    <br><br>
                    Liquibase Pro also adds capabilities that enhance and extend the base open source features, such as adding functions to XML change sets for updating procedural database code.
                    <br><br>
                    <em>Try it free for 14 days.</em>
                </p>
=======
                <ul>
                    <li>Standardized migration templates for procedural database code</li>
                    <li>Guidance and best practices for your specific use case(s) from a named support engineer</li>
                    <li>Technical support from Liquibase experts</li>
			    </ul>
>>>>>>> 76a5d8ec... [LOW-14] - Fix Choose Your Path Cards.
            </div>
            <div class="lb-choose-path__path__button">
                <a href="https://support.liquibase.org" class="cta cta--block">Try Free for 14 Days</a>
            </div>
        </div>
    </div>
</div>

<h3 class="value-prop-header">Liquibase provides a database-independent way to deliver fast, safe, repeatable database deployments</h3>

<div class="value-prop">
    <h2>Flexible Database Change Definition</h2>
    <p>
        Whether it’s simple <a href="documentation/sql_format.html">SQL scripts</a>, <a href="documentation/xml_format.html">XML</a>, <a href="documentation/json_format.html">JSON</a>, or <a href="documentation/yaml_format.html">YAML</a> migrations, Liquibase makes it easy to define database changes in a format that’s familiar and comfortable to each user.
    </p>
</div>

<div class="value-prop">
    <h2>Open and Extensible</h2>
    <p>
        Liquibase is truly open-source and is released under the Apache 2.0 license. While Liquibase already supports a broad range of <a href="databases.html">database platforms</a>, it has a flexible <a href="extensions/index.html">extension framework</a> for easily adding support for new database platforms. Additionally, it is easy to embed and execute Liquibase through its <a href="javadoc/index.html">Java APIs</a>.
    </p>
</div>

<div class="value-prop">
    <h2>Efficient, Standardized Database Schema Management</h2>
    <p>
        Liquibase functions make it easy to generate database-appropriate SQL. This allows teams to efficiently scale by writing database changes once and deploying to a variety of backends. Even if your team works with a single database platform, this capability standardizes the SQL produced in development making reviews, audits, and troubleshooting easier. Learn more in the <a href="quickstart.html">Quick Start</a>.
    </p>
</div>

<div class="value-prop">
    <h2>Precise Database Change Control</h2>
    <p>
        Liquibase has a robust set of capabilities to precisely control when, where, and how database changes are deployed. Go beyond filenames and precisely order changes with an explicit <a href="documentation/databasechangelog.html">change log file</a>. Fine tune how your changes are deployed to each environment with <a href="documentation/contexts.html">contexts</a> and labels. Use conditional logic to further manage the deployment of changes in each environment with Liquibase <a href="documentation/preconditions.html">preconditions</a>.
    </p>
</div>

<div class="value-prop">
    <h2>Fits Your Process</h2>
    <p>
        Liquibase is built to support teams of developers working simultaneously on database changes, and can gracefully handle branching and merging of database migrations. There are numerous options for fitting Liquibase into a <a href="documentation/running.html">build processes</a>. It is possible to <a href="documentation/sql_output.html">generate SQL scripts</a> for DBA code review and even perform database <a href="documentation/diff.html">diffs</a>. Liquibase does not require a <a href="documentation/offline.html">live database connection</a>, and makes it easy to <a href="documentation/dbdoc.html">document</a> datbase migrations. Whether you are a <a href="/dba.html" style="font-weight: bolder;">DBA</a>, <a href="/qa.html" style="font-weight: bolder;">QA Engineer</a>, <a href="/release_manager.html" style="font-weight: bolder;">Release Manager</a>, or  <a href="/developer.html" style="font-weight: bolder;">Developer</a>, Liquibase can meet your needs.
    </p>
</div>

<br/>

<h3 style="display:flex; justify-content:center; text-align:center">
    <a class="cta" href="/quickstart.html">Track and deploy database changes in minutes!</a>
</h3>

<hr>

<p style="text-align: center; font-size:medium; font-weight: bold">
    Liquibase is thankful for the support, software, and/or services provided by the whole community including the following organizations: <br/>
    <a href="http://datical.com/">Datical</a> | <a href="https://atlassian.com/">Atlassian</a> | <a href="https://www.zoho.com/">Zoho</a> | <a href="https://www.yourkit.com/">YourKit</a>
</p>

{% include tracking-codes/hotjar.tracking-code.html %}
