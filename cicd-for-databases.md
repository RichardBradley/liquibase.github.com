---
layout: full-width
title: Using Liquibase to Achieve CI/CD for Databases
includeDaticalBox: true
extraStyleSheets:
  - 2-col-landing-page
---

<div class="landing-page">
  <div class="landing-page__main-content span-16">
    <hr class="landing-page__horizontal-rule">
    <div class="landing-page__main-content__heading">
      <h1>
        Using Liquibase to Achieve CI/CD for Databases
      </h1>
    </div>
    <div class="landing-page__main-content__text">
      <p>Application release technology has come a long way in the past several years. It used to take weeks or even months to release new software. Now that organizations have adopted new workflows and processes, the time it takes to complete a release has been reduced to days and even hours. It’s an exciting time. However, there is one area that hasn’t benefited from the DevOps movement as much. The database change process isn’t nearly as automated or as fast as app code changes.</p> 
      <p><b>Database Schema Migration</b></p>
      <p>Database schema migrations are an essential task for every software project. There are several different reasons why updates to the database are required, some examples are:
      <ul> 
        <li>New features require new attributes in existing tables or entirely new tables</li>
        <li>Bug fixes may lead to changes in names or data types in the database</li>
        <li>Performance issues that require additional indexes in the database</li>
      </ul>
      </p>
      <p>Even in organizations that have adopted DevOps, manual rework is the norm when it comes to database schema and stored procedure changes.<sup>1</sup> In fact, the faster the application release cycle, the more database professionals had to rework database changes. 93% of survey respondents reported reworking database changes multiple times for daily or weekly release cycles.<sup>1</sup></p>
      <h2>Understanding CI/CD</h2>
        <p>Before we jump into how Liquibase fits into the CI/CD process, let’s cover what we mean by CI/CD.</p>
        <h3>What is Continuous Integration (CI)?</h3>
        <p>Continuous integration (CI) is a process that automates the integration of code changes from multiple developers a single software project. The CI process hinges on a source code version control system, such as Git (or Github, BitBucket, and many others) or TFS Version Control, coupled with automated processes for code quality tests, syntax style review tools, and more. These processes can be triggered when new code is merged or committed to a shared repository, thus the name “Continuous Integration.”</p>
        <h3>What is Continuous Deployment (CD)?</h3>
        <p>Continuous Deployment (CD) is a process that automates testing to validate if code changes are correct, stable and deployable. If so, in a literal CD context, code is automatically deployed to production as soon as these conditions are met.</p>
        <h2>CI/CD for Databases Using Liquibase</h2>
        <p>Implementing end-to-end CI/CD requires all code (including database code) to be checked in to a version control system and be deployed as part of the software release process. Liquibase can help you achieve this.</p>
        <p>Each database schema change you make with Liquibase is called a “changeset.” All changesets are tracked by Liquibase using changelogs. Liquibase allows you to create a trigger that updates the database automatically by pointing to the changelog file. From here, it makes it easy to integrate the process into your overall CI/CD process:</p>
        <ul>
            <li>Push your changeset files to your feature repository</li>
            <li>Create a pull request against the Dev branch</li>
            <li>After peer review and approvals, merge the feature branch with the Dev branch</li>
            <li>The CI/CD implementation configured on the Dev server triggers Liquibase for database updates</li>
            <li>Liquibase automatically executes any new changelog files (and is awesome enough to remember which scripts have already run)</li>
        </ul>    
        <h2>Three Ways to Integrate Databases into Your CI/CD Process</h2>
        <p>Companies have software teams of all shapes, sizes, and types. These teams may run anything from huge mission-critical databases to newer NoSQL databases. The one thing that every team has in common is the need for a process to handle database version control and changes to ensure that applications deploy quickly and without errors.</p>
        <p>Since each software team is different, it makes sense for organizations to choose the right database change management solution based on team makeup, the complexity of the database, how frequently it needs to be updated, and the importance of applications it supports.</p>
        <h3>Track, Version and Deploy Database Changes</h3>
        <p>Liquibase offers products at three levels to help increase productivity for every software team’s use case.</p>
        <h4>Liquibase Community</h4>
        <p><i>Open source and always free</i></p>
        <p><a href="https://www.liquibase.org" target="_blank">Liquibase</a> provides a great starting point for teams addressing the challenges that come with managing database changes. Founded over a decade ago, Liquibase is the leading open source solution for helping teams track, version, and deploy database changes. It has been downloaded over 12 million times by teams around the world and is built into solutions such as Spinnaker and Appian. It’s simple enough for beginners and powerful enough to support advanced use cases that involve reworking database changes.</p>
        <ul>
            <li>Track, version, deploy, and rework database changes</li>
            <li><a href="https://www.liquibase.org/documentation/rollback.html" target="_blank">Rollbacks</a></li>
            <li>Active online community with forum support</li>
        </ul>
        <h4>Liquibase Pro</h4>
        <p><i>More features and support</i></p>
        <p><a href="https://download.liquibase.org/liquibase-pro-trial-request-form/" target="_blank">Liquibase Pro</a> adds more features to Liquibase’s powerful database change control capabilities, including targeted rollbacks and the ability to track, version, and deploy Store Logic.</p> 
        <p>While Liquibase is a great starting point, teams that want best practices on how to make the most of Liquibase may find Liquibase Pro better suited to their needs.</p>
        <ul>
            <li>Targeted rollbacks</li>
            <li>Track, version, and deploy Stored Logic</li>
            <li>Guidance and best practices for your specific use case(s)</li>
            <li><a href="https://support.liquibase.org/" target="_blank">Email and ticketed support</a></li>
        </ul>
        <h4>Datical</h4>
        <p><i>A comprehensive solution with enterprise features and world-class support</i></p>
        <p><a href="https://www.datical.com" target="_blank">Datical</a> enhances the database change management experience with access to advanced capabilities such as automatic enforcement of predefined DBA rules (improving productivity), a simulator that forecasts the impact of database changes before they are deployed (reducing risk and eliminating downtime), and a dashboard that automates tracking and reporting of every database deployment (simplifying audits).</p>
        <p>Datical provides more than just software; it offers built-in, consultative implementation assistance and support that gets teams to database release automation success faster with lower risk.</p>
        <p>We partner with your whole team to ensure your mission-critical database changes are deployed safely and seamlessly.</p>
        <ul>
            <li>Automated change validation</li> 
            <li>Automated dependency and impact analysis</li>
            <li>Object tracking</li>
            <li>Drift reconciliation</li>
            <li>Enterprise plugins</li>
            <li>Dedicated, world-class implementation & support</li>
        </ul>
        <p><sup>1</sup> 2019 State of Database Deployments in Application Delivery. Dimensional Research.<a href="https://www.datical.com/whitepapers/survey-the-state-of-database-deployments-in-application-delivery-2019/" target="_blank"> https://www.datical.com/whitepapers/survey-the-state-of-database-deployments-in-application-delivery-2019/</a>
        </p>

  </div>
    <div class="landing-page__main-content__cta">
      {% include components/buttons/cta.html ctaText="Try Liquibase Pro Free for 30 Days" ctaHref="https://download.liquibase.org/liquibase-pro-trial-request-form/" %}
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
        Get a free 30-day trial of Liquibase Pro. If you decide you don't want the Pro features, simply keep using the open source version.
      </p>
    </div>
    <div class="landing-page__cta-block__cta">
      {% include components/buttons/cta.html ctaText="Try Liquibase Pro" ctaHref="https://download.liquibase.org/liquibase-pro-trial-request-form/" %} <i>No credit card required.</i> 
    </div>
  </div>
</div>