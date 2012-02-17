====== 1.x to 2.0 Upgrade Guide ======

Liquibase 2.0 introduces several non-compatible changes that will require action to upgrade from 1.9 to 2.0.  Please update this wiki page with additional issues or work-arounds you find.  For a list of new features in 2.0, see the [[v2_features|2.0 features list]]

**This page will be updated regularly up to and beyond the 2.0 final release.**

===== Checksum Format Change =====
Liquibase stores checksums for each change executed in the DATABASECHANGELOG table.  These checksums are used to alert the user to changeSets that have been changed after they were executed, and to handle runOnChange="true" changeSets.  

The way we compute these checksums changed in 2.0.  The first time you update an existing database, Liquibase will detect the old format and upgrade the checksum values.  During this first run, Liquibase will not be able to detect modified changeSets or runOnChange requirements.  If you are concerned about this, you may want to run a known unchanged changelog against the database with 2.0 before updating your new changelog.

===== XSD Definition Change =====

The format of the XSD definition has changed.  The new format looks like:

    <databaseChangeLog
       xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-2.0.xsd">


===== ModifyColumn tag Deprecated =====

The modifyColumn tag has been deprecated and moved to the extension portal.  If you are using modifyColumn, consider the new <modifyDataType> or other more specific commands (addPrimaryKeyConstraint, etc).  You can continue to use the modifyColumn tag if you include modify-column-2.0.0.jar in your classpath.  See [[http://liquibase.jira.com/wiki/display/CONTRIB/ModifyColumn+Change|modifyColumn library]] to get this jar.

===== Columns added to table DATABASECHANGELOG =====

Liquibase 2.0 will silently add three columns to your DATABASECHANGELOG table:  Tag, OrderExecuted, and ExecType.  Older versions of Liquibase will be incompatible with this table because they will not supply values for these columns, two of which are not nullable.

SQL to manually make these changes is (may vary based on database):

    ALTER TABLE DATABASECHANGELOG ADD TAG VARCHAR(255);
    ALTER TABLE DATABASECHANGELOG ADD ORDEREXECUTED INT;
    UPDATE DATABASECHANGELOG SET ORDEREXECUTED = -1;
    ALTER TABLE DATABASECHANGELOG MODIFY ORDEREXECUTED INT NOT NULL;
    ALTER TABLE DATABASECHANGELOG ADD EXECTYPE VARCHAR(10);
    UPDATE DATABASECHANGELOG SET EXECTYPE = 'EXECUTED';
    ALTER TABLE DATABASECHANGELOG MODIFY EXECTYPE VARCHAR(10) NOT NULL;

You should only need to use the above sql for updateSql calls.

===== Hibernate Integration Extracted =====

The Hibernate integration has been moved to be a plugin rather than in the Liquibase core itself.  If you use the Liquibase hibernate support, you'll need to add the jar from [[http://liquibase.jira.com/wiki/display/CONTRIB/Hibernate+Integration|the hibernate extension]] to your classpath.

===== Diff parameter naming =====

To remove confusion, the baseUrl, baseUsername, etc parameters used in performing database diffs have changed to referenceUrl, referenceUsername, etc.

===== Maven Plugin =====

The artifact name of the Maven plugin changed to "org.liquibase : liquibase-maven-plugin" from "org.liquibase : liquibase-plugin"

===== Servlet Listener =====

  * The class name of LiquibaseServletListener changed to liquibase.integration.servlet.LiquibaseServletListener.  
  * The context parameter names changed:
    * LIQUIBASE_DATA_SOURCE -> liquibase.datasource
    * LIQUIBASE_CHANGELOG -> liquibase.changelog
    * LIQUIBASE_CONTEXTS -> liquibase.contexts
    * LIQUIBASE_DEFAULT_SCHEMA -> liquibase.schema.default
    * LIQUIBASE_HOST_INCLUDES -> liquibase.host.includes
    * LIQUIBASE_HOST_EXCLUDES -> liquibase.host.excludes
    * LIQUIBASE_FAIL_ON_ERROR-> liquibase.onerror.fail




===== Spring Integration =====

The class name of the SpringLiquibase class has changed to liquibase.integration.spring.SpringLiquibase

===== Other package and class naming =====

Many other classes changed their packages and/or names significantly.  If you have more complex Liquibase integration and are not sure how to convert your code, post a question on the [[http://liquibase.org/forum|forum]]

===== MANIFEST.MF requirements for embedding =====

Liquibase expects a Liquibase-Package property in a MANIFEST.MF file.  If you are using the standard liquibase.jar you don't have to worry about it. But if you are embedding liquibase to the point of not including the standard MANIFEST.MF, make sure you add the following to your MANIFEST.MF

    Liquibase-Package: liquibase.change,
     liquibase.database,
     liquibase.parser,
     liquibase.precondition,
     liquibase.serializer,
     liquibase.sqlgenerator,
     liquibase.executor,
     liquibase.snapshot,
     liquibase.logging,
     liquibase.ext
