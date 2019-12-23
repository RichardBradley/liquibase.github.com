---
layout: full-width
title: Liquibase vs. Flyway
includeDaticalBox: true
extraStyleSheets:
  - 2-col-landing-page
extraJavascriptFiles:
  - tracking-codes/hotjar.js
---

<div class="landing-page">
  <div class="landing-page__main-content span-16">
    <hr class="landing-page__horizontal-rule">
    <div class="landing-page__main-content__heading">
      <h1>
        Liquibase vs. Flyway
      </h1>
    </div>
    <div class="landing-page__main-content__text">
      <p><i>Understand the differences and similarities of these two database migration tools so you can decide which one will work best for your use case, team structure, and workflow.</i></p> 
      <p>Anyone who has ever developed software will tell you, you shouldn’t develop application code without version control. The same is true for database code. With the rise of Agile and DevOps methodologies that are needed to accomplish continuous integration and deployment, it’s more important than ever to apply CI/CD to databases. There are two leading open source tools for database version control: Liquibase and Flyway. Both have become popular options for versioning and organizing database changes, deploying changes when they need to be deployed, and tracking what’s been deployed.</p>
      <p><b>Here’s what Flyway and Liquibase have in common:</b>
      <ul>
        <li>Use a migrations-based approach to database change</li>
        <li>At update time, both tools check if a change has already been deployed</li>
        <li>Run from command line or Maven</li>
        <li>Offer support and enhanced features as a paid add-on to their open source offering</li>
        <li>Use SQL-based migrations (both can use plain old SQL)</li>
        <li>Repeatable migrations (both can perform rerunnable vs. non-rerunnable changes)</li> 
      </ul>
      </p>
      <h2>Differences between Liquibase and Flyway</h2>
      <p>While both tools are based on <a href="https://martinfowler.com/articles/evodb.html" target="_blank">Martin Fowler’s Evolutionary Database</a>, there are some differences. Here’s where <a href="https://www.liquibase.org/" target="_blank">Liquibase</a> and <a href="https://flywaydb.org/" target="_blank">Flyway</a> differ.</p>
      <h3><b>The way changes are defined</b></h3>
      <p>Flyway uses SQL exclusively. (This means you need to manually create and specify the SQL you want). Some people love that. Some people find it restricting.</p>
      <p>Liquibase can use plain old SQL, but it also allows you to specify the change you want in several different abstract, database-agnostic formats including XML, YAML, and JSON. Liquibase makes it easy to define database changes in a format that’s familiar and comfortable to each user and then automatically generates database-specific SQL for you.</p>
      <h3><b>Script and file management</b></h3>
      <p>When it comes to scaling for multiple developers and the ability to branch/merge, Liquibase and Flyway handle this differently.</p>
      <p><i><b>With Flyway, the filename is king.</b></i></p>
      <p>This can have limitations. Let’s take a closer look.</p>
      <p>Flyway is built around a concept of a linear database versioning system which starts at version 1. After a change is added, the version is incremented to 2, then 3, etc. Users often end up doing gymnastics with filenames to manage execution order. For example, changes 1, 2, 3, 4, 5 are all deployed. Now imagine you want to add a change between 2 and 3,so you add a "2.5". What happens to environments where 1-5 were already deployed? Version control systems, like Git, can’t handle this for you. </p>
      <p>Another limitation comes to light when you’re working on a team with other developers and there’s a filename conflict or a change ordering issue. All of these scenarios — adding a new change, filename conflicts, and reordering changes — need to be dealt with manually when using Flyway.</p>
      <p><i><b>With Liquibase, changes are managed with one ledger, referred to as the changelog.</b></i></p>
      <p>Liquibase uses a unique identification scheme: an ID and author, along with the name and path of the file all in a <a href="https://www.liquibase.org/documentation/databasechangelog.html" target="_blank">changelog</a>. This makes it easy to manage the order in which database changes are made. This way of managing the changes makes developer conflicts and collisions less likely since there are multiple factors that drive the uniqueness of a given change. The only possible problems you can encounter are with XML merge conflicts, which can typically be resolved with version control systems like Git. </p>
      <p>With Liquibase, it’s also easy to reorder changes in the changelog when you need to roll out changes to lower environments.</p>
      <h3><b>Rework and selective deployments</b></h3>
      <p>Let’s face it, rework happens. It happens to all of us, every day. Nobody gets everything right the first time.</p>
      <p>Flyway can be pretty unforgiving when it comes to reworking database changes and performing selective deployments.</p>
      <p><b>Reworking changes</b></p>
      With Flyway, users have two options for reworking changes: roll everything back or purchase their Pro or Enterprise offerings for undo functionality. With the open source version of Flyway, there’s no real way to automate or clean up an environment where a bad change has been deployed.
      <p>The free version of Liquibase allows you to undo changes you have made to your database, either automatically or via custom rollback SQL with the <a href="https://www.liquibase.org/documentation/rollback.html" target="_blank">rollback command.</a></p>
      <p><b>Selective deployments</b></p>
      <p>If your use case requires you to selectively deploy changes, it’s harder to do that with Flyway than it is with Liquibase. Let’s say you want to only deploy to a test environment and you’re managing scripts that populate certain configuration or test data to that environment. With Flyway, you would have to set up a different configuration (properties file) for each of the affected environments in order to only apply certain changes to those specific databases. Since Liquibase uses one ledger (changelog), it’s more straightforward to <a href="https://www.liquibase.org/2014/11/contexts-vs-labels.html" target="_blank">add labels and contexts</a> to ensure that this is set up in one place.</p>
      <p><b>Liquibase preconditions</b></p>
      <p>Liquibase has a powerful feature called <a href="https://www.liquibase.org/documentation/preconditions.html" target="_blank"><i>preconditions</i></a>. Preconditions allow users to apply changes based on certain conditions such as to check whether or not a table exists or for another example to check whether a column contains data before dropping it. This allows you to control whether or not a change should be applied or not based on the state of the database. A changeset will only execute if the precondition passes. If the precondition fails, you can tell Liquibase what you’d like to happen next, such as <code>HALT, WARN, MARK_RAN,</code> etc. Flyway does not do this.</p>
      <h3><b>Stored logic</b></h3>
      <p>Liquibase Pro enables users to snapshot and work with Stored Logic. Snapshots allow you to get a static view of your database at a particular point in time and is useful for reporting and safeguarding your data by comparing databases (performing diffs) to find differences.</p>
      <p>Liquibase Pro users have Stored Logic <i>changeSets</i> in changelogs generated through the <a href="https://www.liquibase.org/documentation/diff.html" target="_blank">diffChangeLog</a> and <a href="https://www.liquibase.org/documentation/generating_changelogs.html" target="_blank">generateChangeLog</a> command.</p>
      <p>Since Flyway only uses SQL, the expectation is for users to generate the SQL themselves using a database’s native tool to export the SQL. Or alternatively, the developer would just write the stored procedure as a SQL file for Flyway to deploy as needed. SQL files that contain stored logic would have to be named differently than other files (for example, use an “R_” prefix rather than a “V1.2_” prefix.</p>
      <p>Flyway also doesn't have the ability to perform a diff to compare two databases, like Liquibase — Flyway expects that you will also use some external tool to do this. This also means Flyway users can't do the equivalent of diffChangeLog.</p>
      <h2>Wrapping it up</h2>
      <p>Both Liquibase and Flyway are tools that help with managing, tracking, and deploying database schema changes. They are both migration-based tools that are looking to fill a need that many teams have for treating database code like app code with source control and automation.</p>
      <p>Flyway can solve your Day One problems: managing, tracking, and deploying database schema changes. Flyway’s file structure and raw SQL focus work fine at the beginning. It’s easy and quick. However, everyone eventually hits the rollback/rework/merge/conditional logic use cases.</p>
      <p><b>Liquibase has the power and flexibility to handle your Day One problems AND your Day 50 problems more gracefully from the get-go.</b> Sure, there are workarounds for Flyway to handle some of these more complex needs, but they’re not pretty. Liquibase handles these very typical database schema problems in stride.</p>
      <p>There are always tradeoffs to make when choosing between tools. If you are looking for a tool that checks the following boxes, <a href="https://www.liquibase.org/" target="_blank">Liquibase</a> may be right for you:</p>
      <ul>
        <li>Define database changes in a format that’s familiar and comfortable to each user and then automatically generates database-specific SQL</li>
        <li>Support updating and managing the same schema across multiple database vendors using the same changelog file</li>
        <li>Easily add new changes and reorder them without running into filename conflicts</li>
        <li>Rollback changes without having to purchase a paid offering</li>
        <li>Snapshot and work with Stored Logic (including reverse engineering)</li>
        <li>Selectively deploy changes as needed to different environments</li>
      </ul>
      <p><a href="https://download.liquibase.org/download-community/" target="_blank">Give Liquibase a try</a> to take a closer look and check out all the great features we covered in this comparison.</p>


  </div>
    <div class="landing-page__main-content__cta">
      {% include components/buttons/cta.html ctaText="Try Liquibase Pro Free for 14 Days" ctaHref="https://download.liquibase.org/liquibase-pro-trial-request-form/" %}
    </div>
  </div>
  <div class="landing-page__cta-block span-6 push-2">
    <hr class="landing-page__horizontal-rule landing-page__horizontal-rule--centered">
    <div class="landing-page__cta-block__heading">
      <h2>
        Take Liquibase Pro for a spin!
      </h2>
    </div>
    <div class="landing-page__cta-block__text">
      <p>
        Get a free 14-day trial of Liquibase Pro. If you decide you don't want the Pro features, simply keep using the open source version.
      </p>
    </div>
    <div class="landing-page__cta-block__cta">
      {% include components/buttons/cta.html ctaText="Try Liquibase Pro" ctaHref="https://download.liquibase.org/liquibase-pro-trial-request-form/" %} <i>No credit card required.</i> 
    </div>
  </div>
</div>