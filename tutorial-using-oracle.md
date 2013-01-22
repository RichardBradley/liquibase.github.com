====== LiquiBase Tutorial using Oracle ======
This is a LiquiBase tutorial that shows you how to manage your database objects using the Oracle database and some Oracle tools. It also shows how branching and merging is performed using Subversion. The tutorial incorporates several best practices. This makes it realistic for the needs of a software development shop. Of course your needs may be simpler. You may not need branching, you may not ever need to deliver a fresh install. In that case, you can just use the best practices and conventions that apply to your situation.

The scenario we will be using for the tutorial assumes we are developing an application for two customers named Solo and Duplex. Each customer has their own upgrade timing.

^Time ^ Solo          ^ Duplex         ^
|t1 | install r1.0    |                |
|t2 | patch to r1.1   |                |
|t3 | upgrade to r2.0 | install r2.0   |

During the lifecycle of an application, the development team may produce thousands of database changes. Periodically, we will want to consolidate these changes so that a fresh install can be done rapidly (also essential for the continuous integration environment), and so that we can ship a smaller set of changes to customers for upgrading.

The chosen strategy, is to clean up the changelog for every major release. This means that customers will have to upgrade to major releases separately. I.e. to upgrade from release 1.0 to release 3.0 they will also have to install 2.0.
A delivery for version X (this includes versions X.y) always consists of 3 parts:

^Script^Description^Create objects for version X ^ Upgrade from X-1^Apply latest changes to version X^
|lb_install|Perform fresh install for version X|  X  | |  X  |
|lb_upgrade_to_major|Upgrade from (X-1) to X | |  X  |  X  |
|lb_update|Upgrade within same major version, eg 1.1 to 1.5|  | |  X  |

The directory structure we will build during this tutorial is shown below (assuming that we are delivering version 5.x). Instead of using a Subversion server, we will use a local repository in the ''repo'' directory.
<code>
D:\projects
    +-- lbdemo
          +-- repo           <-- Subversion repository
          +-- trunk          <-- Working directory
                +-- install  <-- Installation changelogs
                +-- latest   <-- Changelogs for replaceable objects (packages, triggers, views)
                +-- v004     <-- Changelogs to upgrade from version 4.0
                +-- v005     <-- Changelogs to upgrade from version 5.0
</code>

**lb_install:** A fresh install for version 5.0 will run:
  * the changelogs in ''install''
  * the changelogs in ''latest'' creating 'replaceable' objects


**lb_upgrade_to_major:** An upgrade from version 4.x to 5.0 will run:
  * the changelogs in ''v004''
  * the changelogs in ''v005''


**lb_update:** An update from version 5.x will run:
  * the changelogs in ''v005''

The scenario for this tutorial is illustrated in the diagram below. It will be handy to print this diagram for reference while you are going through the tutorial. Each of the blue boxes is a Subversion revision. The contents of a box is the commit message which describes the change.

{{tutorial-overview.png?800|}}

===== Step 1: Install the software =====
==== Install Oracle Database ====
If you don't already have an Oracle database available, then download Oracle XE from the [[http://www.oracle.com/technology|Oracle Technology Network]] and install it on your computer. The XE edition of the database is free to use for development and production purposes.

==== Install SQL Developer ====
There are many tools available to manage your database objects. If you haven't already got such a tool, then take a look at SQL Developer. SQL Developer is available as a free download at the [[http://www.oracle.com/technology|Oracle Technology Network]]. 

==== Install JDeveloper ====
Oracle JDeveloper is another free tool available from the [[http://www.oracle.com/technology|Oracle Technology Network]]. It has too many features to list here, we will only mention the XML editor. This editor is schema aware, and makes it easy to author your changelogs.

After downloading and installing, start JDeveloper. If you are behind a proxy, configure the proxy using:

Tools > Preferences > Web Browser and Proxy

Next we will add the LiquiBase XSD so that the editor becomes aware of the Liquibase schema.
Choose Tools > Preferences > XML Schemas. Select "add". Enter:

^Schema:| <nowiki>http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd</nowiki> |
^Extension: |xml|

Press OK and now your JDeveloper is ready to edit your changelogs. There is no need to create an application or a project. Simply open the XML file you want to edit.

==== Install TortoiseSVN ====
TortoiseSVN is a graphical front end to Subversion. It also has the capability to create a file based repository. We will use this feature for this tutorial. There is no need for you to have access to a Subversion server. Download TortoiseSVN from [[http://tortoisesvn.net/]].
Install it and reboot your PC.

==== Create directory structure and Subversion repository ====
Create the directory structure for this tutorial.
<code>
D:
mkdir D:\projects\lbdemo\repo
</code>
In Windows Explorer, right-click on directory repo and choose **TortoiseSVN > Create repository here**. We have now created a Subversion repository.

Right-click on the directory repo again, and choose  **TortoiseSVN > Repo-browser**. The browser displays in a window similar to Windows Explorer. Right-click on the repo directory and choose **Create folder ..**. Enter the name: ''trunk''. You will then be prompted for a comment before you commit this change. Enter any comment.

Repeat this to create folders ''branches'' and ''tags''.


You should end up with a repository structure that looks like this:
<code>
file:///D:/projects/lbdemo/repo
  +- branches
  +- tags
  +- trunk
</code>

Close the repository browser.

Return to Windows Explorer, navigate to directory D:\projects\lbdemo and right-click in the right panel. Choose **SVN Checkout ...**. In the panel that appears, enter:

^URL of repository: |''<nowiki>file:///D:/projects/lbdemo/repo/trunk</nowiki>''|
^Checkout directory: |''D:\projects\lbdemo\trunk''|

Press OK. A confirmation window will display to create directory trunk. Select Yes. Press OK. In Windows Explorer, the trunk directory will be displayed with a green icon, indicating that it is a working copy with no changes to commit.

==== Install the JDBC Driver ====
Download the Oracle JDBC driver here: [[http://www.oracle.com/technology/software/tech/java/sqlj_jdbc/index.html]]
Click on the link for 10g  Release 2 drivers, and choose ''ojdbc14.jar''.

Save the jar in directory: ''D:\projects\lbdemo''.

==== Install LiquiBase ====
Install LiquiBase following the instructions.

Add the directory containing the ''liquibase.bat'' file to your PATH. [[http://redmondlab.net|Redmond Path]] is a handy tool to edit your path; much easier than the standard facility in Windows. 

Test the installation by opening a DOS box in the ''D:\projects\lbdemo\trunk'' directory and entering the following command:
<code>liquibase --version</code>
The result should be something like: ''LiquiBase Version: 1.9.0''


Next, create a file named ''liquibase.properties.template'' in the ''trunk'' directory with the following contents:
<code>
#liquibase.properties
driver: oracle.jdbc.OracleDriver
classpath: ../ojdbc14.jar
url: jdbc:oracle:thin:@localhost:1521:XE
username: tbd
password: tbd
</code>
Note that the classpath is relative to the current directory.

Copy this file to ''liquibase.properties'' and edit the last 2 lines to look like this:
<code>
#liquibase.properties
driver: oracle.jdbc.OracleDriver
classpath: ../ojdbc14.jar
url: jdbc:oracle:thin:@localhost:1521:XE
username: lb_dev
password: lb_dev
</code>


This properties file will save us from specifying these parameters on the command line. We will check the template file into subversion. The file with the real connection details we will keep locally.

Right-click on file ''liquibase.properties'' and choose **TortoiseSVN > Add to ignore list > liquibase.properties**

Right-click on file ''liquibase.properties.template'' and choose **TortoiseSVN > Add**

Right-click on directory ''trunk'' and choose **TortoiseSVN > commit**.


===== Step 2: Create the initial database schemas =====
For our tutorial, we will create these database schemas:
  * **lb_dev** - our development environment
  * **lb_test** - our test environment
  * **lb_solo** - the environment of customer Solo
  * **lb_duplex** - the environment of customer Duplex

Open SQL Developer and create a connection to your database using the "system" username.

File > New > Connections > Database connection

Open this connection and run these commands:
<code>
drop user lb_dev cascade;
create user lb_dev identified by lb_dev;
grant connect, resource, create view to lb_dev;

drop user lb_test cascade;
create user lb_test identified by lb_test;
grant connect, resource, create view to lb_test;

drop user lb_solo cascade;
create user lb_solo identified by lb_solo;
grant connect, resource, create view to lb_solo;

drop user lb_duplex cascade;
create user lb_duplex identified by lb_duplex;
grant connect, resource, create view to lb_duplex;
</code>

In SQL Developer, create a connection for each of these users. They will come in handy later.

===== Step 3: Create project directories and standard files =====
In this step we will be creating the following directory structure in the ''trunk'' directory:

<code>
trunk
  +-- install
  |     +-- cst      <-- Contains FK constraints, one file per table
  |     +-- seq      <-- Contains sequence definitions, one file per sequence
  |     +-- tab      <-- Contains table definitions, one file per table
  +-- latest
  |     +-- pkb      <-- Contains package bodies, one file per package
  |     +-- pks      <-- Contains package specifications, one file per package
  |     +-- trg      <-- Contains triggers, one file per trigger
  |     +-- vw       <-- Contains views, one file per view
  +-- v000
</code>

We will create a separate install directory for the installation of non-replaceable objects (as opposed to the upgrades), and within the install directory a separate directory for each type of object.

Under latest, we have a directory for each type of "replaceable" database object. By "replaceable" we mean that the object can be updated by simply replacing it by a new version. The SQL syntax for these objects starts with ''create or replace''.

Paste these commands in a DOS box to create the directory structure in one go:
<code>
cd \projects\lbdemo\trunk
mkdir install
mkdir install\cst
mkdir install\seq
mkdir install\tab
mkdir latest
mkdir latest\pkb
mkdir latest\pks
mkdir latest\trg
mkdir latest\vw
mkdir v000
</code>

As we are starting from scratch (version 0), directory v000 will contain the changelogs to migrate from version 0.

We'll create a simple batch file to perform the upgrades:

**trunk/lb_update.bat**
<code>
@echo off
call liquibase --changeLogFile=update.xml update
</code>

The file above refers to ''update.xml'', which we will create next.

JDeveloper is a great tool for editing XML files, but creating a new XML file from scratch is a bit cumbersome. The following steps are the quickest way:
  * Create an empty file in Windows Explorer (New > TextDocument) and give it the correct filename
  * Open this file in JDeveloper
  * Copy and paste the file contents from this tutorial into JDeveloper


**trunk/update.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="v000/master.xml" />
</databaseChangeLog>

</code>

Create the file that will later contain the includes of each changeLog in order of applicability.

**trunk/v000/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 0 -->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>

</databaseChangeLog>
</code>

You may be wondering why this file contains a preCondition. Doesn't LiquiBase already check which changes have been run? Well, if we perform a fresh install of version 5, then the database will not contain the list of changes before version 5. And we definitely don't want to run these changes by accident. So we define an explicit check in the form of a preCondition.


Commit the current version to Subversion. Right-click on directory trunk and select **SVN Commit...**

Enter a message like "Initial version", select all files/directories and press OK. Now the files/directories will also be displayed with a green icon in Windows explorer.



===== Step 4: Create database objects =====
Each change (including initial creations) are related to an issue number: a bug or a project task. Our first task (which happens to have number 73) is to create 2 tables.

The file structure which we will be describing has a certain structure which is easier to see if we visualize it. The white boxes are the directories. The blue boxes are the files within the directories. The arrows indicate that one file calls or includes another file.

{{tutorial-files.png?600|}}

==== Change 73 ====
The description of this task is:
  * Create table ''departments'', the primary key is populated using a sequence and a trigger
  * Create table ''employees'' with a foreign key to departments

We will create one changefile for these changes. It will consist of these changes:
  * createTable departments
  * createSequence
  * include of a separate file for the trigger. This file is located in directory ''latest/trg''
  * createTable employees

Create the following files:

 
**trunk/v000/2009-10-15-73.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createTable tableName="departments"
                     remarks="The departments of this company. Does not include geographical divisions.">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="DPT_PK"/>
            </column>
            <column name="dname" type="varchar2(14)"
                    remarks="The official department name as registered on the internal website."/>
        </createTable>
        <addUniqueConstraint constraintName="departments_uk1"
                             columnNames="dname" tableName="departments"/>
        <createSequence sequenceName="departments_seq"/>
    </changeSet>
    
    <include file="latest/trg/departments_bi.xml"/>
    
    <changeSet author="jsmith" id="2">
        <createTable tableName="employees">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="EMP_PK"/>
            </column>
            <column name="ename" type="varchar2(14)"
                    remarks="The first and last name"/>
            <column name="salary" type="number(6,2)"
                    remarks="The full remuneration"/>
            <column name="dpt_id" type="number(4,0)"/>
        </createTable>
        <addForeignKeyConstraint baseColumnNames="dpt_id"
                                 baseTableName="employees"
                                 constraintName="emp_dpt_fk"
                                 referencedColumnNames="id"
                                 referencedTableName="departments"/>
    </changeSet>
</databaseChangeLog>
</code>

Note that the table and column remarks will be applied as table and column comments in the database.

**trunk/latest/trg/departments_bi.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createProcedure>
create trigger departments_bi before insert on departments
for each row
when (new.id is null)
begin
 select departments_seq.nextval into :new.id from dual;
end;
        </createProcedure>
        <rollback>
            drop trigger departments_bi
        </rollback>
    </changeSet>
</databaseChangeLog>
</code>

Note the runOnChange="true" attribute. This ensures that we can make future changes in this file and these changes will be applied automatically. Note also that in the file above, we have provided an explicit rollback statement to undo this change. Liquibase can automatically generate rollback statements for many commands, but not for SQL blocks in which anything may happen.

Update the master.xml to include the change:

**trunk/v000/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 0 -->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v000/2009-10-15-73.xml" />
</databaseChangeLog>
</code>

Now we are ready to test the changes by applying them to the database. Run the batch file we created before:
<code>
D:\projects\lbdemo\trunk> lb_update
</code>
If all goes well, you will see a confirmation message: Migration successful.

Now examine the contents of table DATABASECHANGELOG using SQL*Developer. You will see 3 rows, corresponding to the 3 changeSets we applied. If the change was not exactly what you wanted, you can roll it back. To view the SQL that will roll back the changes:
<code>
liquibase --changeLogFile=update.xml rollbackCountSQL 3
</code>
To actually perform the rollback:
<code>
liquibase --changeLogFile=update.xml rollbackCount 3
</code>

After you have completed and tested your changes, commit them to Subversion with this comment: "73: Create tables departments & employees". The current state is represented by the first box on the diagram at the start of this tutorial.

This task is now complete, we will continue to the next task.

==== Change 59 ====
This description of this task is:
  * Create package ''departments_pck''
  * Create view ''departments_vw''
Both objects are of the "replaceable" type, i.e. a new version can simply replace an older version. The files will therefore go into the ''latest'' directory. Create/update the following files:

**trunk/v000/master.xml** (add the new change to the end of the file)
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 0 -->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v000/2009-10-15-73.xml" />
    <include file="v000/2009-10-15-59.xml" />
</databaseChangeLog>
</code>

**trunk/v000/2009-10-15-59.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="latest/pks/departments_pck.xml"/>
    <include file="latest/pkb/departments_pck.xml"/>
    <include file="latest/vw/departments_vw.xml"/>
</databaseChangeLog>
</code>

**trunk/latest/pks/departments_pck.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createProcedure>
create or replace package departments_pck as
  function  upname(name in varchar2) return varchar2;
end departments_pck;
        </createProcedure>
        <rollback>
            drop package departments_pck
        </rollback>
    </changeSet>
</databaseChangeLog>
</code>


**trunk/latest/pkb/departments_pck.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createProcedure>
create or replace package body departments_pck as
  function upname(name in varchar2) return varchar2 is
  begin
    return upper(name);
  end;
end departments_pck;
        </createProcedure>
        <rollback>
            drop package body departments_pck
        </rollback>
    </changeSet>
</databaseChangeLog>
</code>


**trunk/latest/vw/departments_vw.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1" runOnChange="true">
        <createView viewName="departments_vw">
            select id, dname
            from departments
        </createView>
    </changeSet>
</databaseChangeLog>
</code>

Now we are ready to test the changes by applying them to the database. Run the batch file we created before:
<code>
D:\projects\lbdemo\trunk> lb_update
</code>
If all goes well, you will see a confirmation message: Migration successful.

Now examine the contents of table DATABASECHANGELOG using SQL*Developer. You will see 3 new rows, corresponding to the 3 changeSets we applied. Try rolling back the changes, to test the rollback statements we coded:
<code>
liquibase --changeLogFile=update.xml rollbackCount 3
</code>

After you have completed and tested your changes, commit them to Subversion with comment:"59: create departments_pck and departments_vw".

We could continue in this manner for the remainder of the project. At some point however, the number of changes may become very large and we may want to define a new starting point. This is the topic of the next section.

===== Step 5: Branch major release =====
We are ready to branch for release 1.x. This will allow us to perform a fresh install of version 1.x, without applying the many changes from 0.0 to 1.0. Of course, for installations running version 0.x, we also provide the incremental migration possibility.

====  Step 5.1: Finalize this version ====
The last change to version 0 has been made. After all these changes have been applied, we are effectively at major version 1. The major version is recorded in table databasechangelog. Modify this file to record this version:


**trunk/v000/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!--These changes should only be run against a schema with major version 0-->
        <sqlCheck expectedResult="0">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v000/2009-10-15-73.xml"/>
    <include file="v000/2009-10-15-59.xml"/>
    
    <!-- Do not include any more changes in this file -->
    <changeSet author="MajorVersion" id="1" />

</databaseChangeLog>
</code>

Run the update command to apply the changeset with the version number:
<code>
lb_update
</code>

====  Step 5.2: Create fresh-install scripts ====
LiquiBase stores sets of changes in a **changelog**. Although we can create the changelog for the initial objects by hand, it would be nice to be able to generate them from an existing database. The LiquiBase generateChangeLog command does export tables to a changelog file, but it has some significant shortcomings:
  * Everything is dumped into one file. This does not provide much overview in your version control system.
  * It does not export all objects. E.g. triggers and packages are missing.

So there is room here for a new utility (watch this space!).

For now, we will create the installation changelogs manually. The organization of the changelogs is as follows:
  * The "replaceable" objects are stored in the ''latest'' directory, as we have seen before.
  * Other objects are stored in the ''install'' directory.

Our (manual) utility will create these files:

**trunk/install/tab/departments.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createTable tableName="departments"
                     remarks="The departments of this company. Does not include geographical divisions.">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="DPT_PK"/>
            </column>
            <column name="dname" type="varchar2(14)"
                    remarks="The official department name as registered on the internal website."/>
        </createTable>
        <addUniqueConstraint constraintName="departments_uk1" columnNames="dname"
                             tableName="departments" />
    </changeSet>
</databaseChangeLog>
</code>

**trunk/install/tab/employees.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createTable tableName="employees">
            <column name="id" type="number(4,0)">
                <constraints nullable="false" primaryKey="true"
                             primaryKeyName="EMP_PK"/>
            </column>
            <column name="ename" type="varchar2(14)"
                    remarks="The first and last name"/>
            <column name="salary" type="number(6,2)"
                    remarks="The full remuneration"/>
            <column name="dpt_id" type="number(4,0)"/>
        </createTable>
    </changeSet>
</databaseChangeLog>
</code>

**trunk/install/seq/departments_seq.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <createSequence sequenceName="departments_seq"/>
    </changeSet>
</databaseChangeLog>
</code>

**trunk/install/cst/employees.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <addForeignKeyConstraint baseColumnNames="dpt_id"
                                 baseTableName="employees"
                                 constraintName="emp_dpt_fk"
                                 referencedColumnNames="id"
                                 referencedTableName="departments"/>
    </changeSet>
</databaseChangeLog>
</code>



====  Step 5.3: Reorganize changelog directories and scripts ====
Create a new directory for the changelogs from 1.0:
<code>
mkdir v001
</code>

Create a new master.xml in this directory:

**trunk/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
</databaseChangeLog>
</code>


Edit the update file:

**trunk/update.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="v001/master.xml" />
</databaseChangeLog>
</code>

Create the install script for fresh installs of version 1.x:

**trunk/lb_install.bat**
<code>
@echo off
call liquibase --changeLogFile=install.xml update
call liquibase --changeLogFile=update.xml  update
</code>

As you can see above, after the installation of 1.x, we run the updates from 1.x to the latest version. You may wonder: why not include the update at the end of the install.xml file as: ''<include file="v001/master.xml" />'' ? That would be equally valid. However, for some reason, if we do that then the precondition in master.xml fails.

Create the ''install.xml''. This file does the fresh install of objects, records the MajorVersion number and includes new changes from version v001 (see last 2 lines in script below):

** trunk/install.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <includeAll path="install/tab/" />
    <includeAll path="install/seq" />
    <includeAll path="install/cst" />
    <includeAll path="latest/pks" />
    <includeAll path="latest/vw" />
    <includeAll path="latest/pkb" />
    <includeAll path="latest/trg" />

    <changeSet author="MajorVersion" id="1" />

</databaseChangeLog>
</code>

====  Step 5.4: Test the Fresh Install ====
Modify liquibase.properties and change the username and password:
<code>
username: lb_test
password: lb_test
</code>

Perform the fresh install in schema lb_test:
<code>
lb_install
</code>

This should run successfully.

Modify liquibase.properties and change the username and password back to:
<code>
username: lb_dev
password: lb_dev
</code>

To verify that the fresh install in lb_test is identical to the incrementally built schema in lb_dev we can use the liquibase diff command. Enter the following command on the command-line:
<code>
liquibase diff --baseUrl=jdbc:oracle:thin:@localhost:1521:XE --baseUsername=lb_test --basePassword=lb_test
</code>

This command will give the output in text format and should indicate that there are no differences:
<code>
Diff Results:
Base Database: LB_TEST jdbc:oracle:thin:@localhost:1521:XE
Target Database: LB_DEV jdbc:oracle:thin:@localhost:1521:XE
Product Name: EQUAL
Product Version: EQUAL
Missing Tables: NONE
Unexpected Tables: NONE
Missing Views: NONE
Unexpected Views: NONE
Missing Columns: NONE
Unexpected Columns: NONE
Changed Columns: NONE
Missing Foreign Keys: NONE
Unexpected Foreign Keys: NONE
Missing Primary Keys: NONE
Unexpected Primary Keys: NONE
Missing Unique Constraints: NONE
Unexpected Unique Constraints: NONE
Missing Indexes: NONE
Unexpected Indexes: NONE
Missing Sequences: NONE
Unexpected Sequences: NONE
</code>

Liquibase can also produce output in changelog format. Look up the ''diffChangeLog'' command in the manual.

Release 1.x is technically correct now, ready for branching.

Commit the current version to Subversion. Right-click on directory trunk and select **SVN Commit...**. Include all the newly created files.

Enter a message like "Finalize 1.x", select all files and press OK. Now the files will also be displayed with a green icon in Windows explorer.


====  Step 5.5: Branch version 1.x ====
Right-click on the ''trunk'' and choose **TortoiseSVN > Repo-browser**. Select ''trunk'' in the left pane. By default we are selecting the HEAD, which is correct. But if someone else commited a change on the trunk in the meantime, you would want to select the revision in which you finalized 1.x.

Right-click on ''trunk'' and choose ''copy to ..''.

Fill in:
^New Name:| <nowiki>file:///D:/projects/lbdemo/repo/branches/1.x</nowiki>|

Enter log message "Branched 1.x" and press OK.

In the left pane under branches you will now see a folder named 1.x. Right-click on ''branches/1.x'' and choose **Checkout ...**.

^URL of repository:   | <nowiki>file:///D:/projects/lbdemo/repo/branches/1.x</nowiki>     |
^Checkout directory:  | D:\projects\lbdemo\branch_1.x  |

The new directory will be created, containing the files in this branch. The system test can start, to verify that this version is fit to ship.

Let's do a fresh install from this directory into the lb_test schema.

Navigate to directory ''branch_1.x'' and copy file ''liquibase.properties.template'' to ''liquibase.properties''. Change the connection details to:
<code>
username: lb_test
password: lb_test
</code>

Re-create the lb_test schema again using SQLDeveloper. Connect as system and run:
<code>
drop user lb_test cascade;
create user lb_test identified by lb_test;
grant connect, resource, create view to lb_test;
</code>

Perform the fresh install from the directory ''branch_1.x'':
<code>
cd \projects\lbdemo\branch_1.x
lb_install
</code>

===== Step 6: Create test data =====
In order to test data migration functionality, let's insert some test data. In a SQL Developer session, run this script:

<code>
insert into departments (id, dname) values (1, 'HQ');
insert into departments (id, dname) values (2, 'Sales');
insert into employees (id, ename, salary, dpt_id) values (1, 'King', 1200, 1);
insert into employees (id, ename, salary, dpt_id) values (2, 'Smith', 1000, 2);
commit;
</code>

Run this script in the **lb_dev** schema and in the **lb_test** schema. We won't create liquibase scripts for this data, and we won't store the scripts in Subversion. The art of maintaining setup data and test data is worth a separate tutorial, so we won't cover it here. If you are curious, look up the **insert data** and **load data** functionality in the LiquiBase manual.

===== Step 7: Fix bug 102 =====
The system test on version 1.x has revealed a bug and it needs to be fixed before we can ship version 1.0. We fix bugs on the trunk, and then backport them to the relevant branches.

This change has been registered in our issue tracker with number 102. The change description is:
  * replace column employees.salary by 2 new columns: fixed_salary and bonus (both NOT-NULL)
  * The value of bonus should be salary *0.1
  * The value of fixed_salary should be salary * 0.9

Remember that our changes are now taking us from version 1.x, so the changelogs go in directory v001. Create this changelog:

** trunk/v001/2009-10-16-102.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <addColumn tableName="employees">
            <column name="fixed_salary" type="number(6,2)"
                    remarks="Monthly gross salary"/>
            <column name="bonus" type="number(6,2)"
                    remarks="On-target monthly bonus"/>
        </addColumn>
        <update tableName="employees">
            <column name="fixed_salary" valueNumeric="salary * 0.9"/>
            <column name="bonus" valueNumeric="salary * 0.1"/>
        </update>
        <addNotNullConstraint tableName="employees" columnName="fixed_salary" />
        <addNotNullConstraint tableName="employees" columnName="bonus" />
        <dropColumn tableName="employees" columnName="salary" />
    </changeSet>
</databaseChangeLog>
</code>

Update ''master.xml'' to include this file:

**trunk/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v001/2009-10-16-102.xml"/>
</databaseChangeLog>
</code>

Run the update command:
<code>
lb_update
</code>

Note that this change cannot be rolled back automatically. If we wanted to be able to roll this back, we would have had to specify the rollback logic.

Use SQL Developer to check that the changes have successfully been applied.

<code>
DESC employees

ame                 Null     Type
-------------------- -------- ------------
ID                   NOT NULL NUMBER(4)
ENAME                         VARCHAR2(14)
DPT_ID                        NUMBER(4)
FIXED_SALARY         NOT NULL NUMBER(6,2)
BONUS                NOT NULL NUMBER(6,2)

5 rows selected

SELECT * FROM employees;

ID   ENAME     DPT_ID    FIXED_SALARY   BONUS
---- --------- --------- -------------- -----
1    King      1         1080           120  
2    Smith     2         900            100  

2 rows selected
</code>

Commit these changes using TortoiseSVN. Enter log message: "102: Replace salary by fixed_salary and bonus".

===== Step 8: Backport bug 102 to branch 1.x =====
=== Perform the merge  ===
Right-click on directory ''branch_1.x'' and choose **TortoiseSVN > Merge...**.

^Merge type: | Merge a range of revisions |

Press Next

^URL to merge from: | <nowiki>file:///D:/projects/lbdemo/repo/trunk</nowiki> |
^Revision range to merge: | Use the [Show log] button to display the list of revisions. Select the change for bug 102. |

Press Next

Press Merge

Press OK to close the results window.

In Windows Explorer, you will see that ''2009-10-16-102.xml'' has been added to the v001 directory, and that ''v001/master.xml'' has been updated. Right-click on file ''master.xml'' and choose **TortoiseSVN > Diff**. You will see that only the one line has been added to master.xml.

Commit branch_1.x with comment "102: backport".

=== Test the results  ===
Run the update command:
<code>
cd D:\projects\lbdemo\branch_1.x
lb_update
</code>

Use SQL Developer to confirm that the employees in schema lb_test now have a fixed salary and a bonus.

=== Tag this revision as 1.0  ===
The acceptance test has now been completed, so we can label this version as our "1.0" release.
Right-click on ''branch_1.x'' and choose **TortoiseSVN > Branch/Tag ...**. Fill out the dialogue as shown below:

^From WC at URL:                     | <nowiki>file:///D:/projects/lbdemo/repo/branches/1.x</nowiki>     |
^To URL:                             | <nowiki>file:///D:/projects/lbdemo/repo/tags/1.0</nowiki>  |
^Create copy in the repository from: | (leave as default)        |
^Log message:                        | Tagged as 1.0                           |

Press OK and close the repository browser.

We can now deliver version 1.0 to the customer.

===== Step 9: Install 1.0 for Solo =====
We can now deliver version 1.0 to our customer Solo. Create directory ''D:\projects\lbdemo\solo''. Right-click on this directory and choose TortoiseSVN > Export. Fill out the dialogue as shown below:

^URL of repository:                  | <nowiki>file:///D:/projects/lbdemo/repo/tags/1.0</nowiki>  |
^Export directory:                   | D:\projects\lbdemo\solo         |
Leave the rest as default and press OK. The files will be exported to the solo directory.

Copy file ''liquibase.properties.template'' to ''liquibase.properties'' and change the username and password to ''lb_solo''.

Apply the changeLog for the initial installation and the patches of version 1.0 to the empty schema of Solo:
<code>
cd D:\projects\lbdemo\solo
lb_install
</code>

Twice, you should receive the confirmation "Migration successful", and Solo is running on 1.0.



===== Step 10: Further development on the trunk (change 105) =====
The specifications for this change are:
  * add column mgr_id to the departments table. To be populated by the mgr_id of King.
  * add a foreign key: departments.mgr_id -> employees.id

Create the changelog:

**trunk/v001/2009-10-16-105.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <addColumn tableName="departments">
            <column name="mgr_id" type="number(4,0)"/>
        </addColumn>
        <sql>update departments
             set mgr_id = (select id
                           from employees
                           where ename='King');
        </sql>
        <addForeignKeyConstraint baseColumnNames="mgr_id"
                                 baseTableName="departments"
                                 constraintName="dpt_emp_fk1"
                                 referencedColumnNames="id"
                                 referencedTableName="employees"/>
    </changeSet>
</databaseChangeLog>
</code>

Update ''master.xml'' to include this file:

**trunk/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v001/2009-10-16-102.xml"/>
    <include file="v001/2009-10-16-105.xml"/>
</databaseChangeLog>
</code>

Run the update command:
<code>
lb_update
</code>

Use SQL Developer to check that the changes have been applied correctly.

Commit these changes using TortoiseSVN, with comment "105: Add mgr_id and foreign key".

===== Step 11: Branch major release 2.x =====
This is the same as step 5. Repeat step 5 , replacing 1.x by 2.x.

However, there is a difference. Customers running 1.x need to be able to upgrade to 2.x. We did not cover that aspect previously. If a 1.x customer were simply to run lb_update, then it would fail on the precondition in the master.xml:

<code>
    <preConditions>
        <!-- These changes should only be run against a schema with major version 2 -->
        <sqlCheck expectedResult="2">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
</code>

So how do we ensure that all the changes between "finalize 1.x" and "finalize 2.x" have been applied before applying the 2.x changes? If you look at the diagram at the beginning of this tutorial, you will see that we are talking about change 105. Change 105 was never delivered in the 1.x branch and it is not contained in the v002/master.xml.

The answer is, we create 2 new files as part of step 5.3:

**trunk/lb_upgrade_to_major.bat**
<code>
@echo off
call liquibase --changeLogFile=upgrade_to_major.xml update
call liquibase --changeLogFile=update.xml update
</code>

**trunk/upgrade_to_major.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <include file="v001/master.xml" />
</databaseChangeLog>
</code>


===== Step 12: Change 114, rename column =====
Testing on branch 2.x revealed a bug that we want fixed on branch 1.x as well. Column employees.ename needs to be renamed to full_name. Refer to the diagram at the start of this tutorial for a visual overview of this step. By now you should know the routine.

Create the changelog:

**trunk/v002/2009-10-18-114.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <changeSet author="jsmith" id="1">
        <renameColumn newColumnName="full_name" oldColumnName="ename" tableName="employees"/>
    </changeSet>
</databaseChangeLog></code>

Update ''master.xml'' to include this file:

**trunk/v002/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 2 -->
        <sqlCheck expectedResult="2">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v002/2009-10-18-114.xml"/>
</databaseChangeLog>
</code>

Run the update command:
<code>
lb_update
</code>

Use SQL Developer to check that the changes have been applied correctly.

Commit these changes using TortoiseSVN, with comment "114: Renamed employee.ename to full_name".

===== Step 13: Backport change 114 to branch 1.x =====
This is the same as step 8 with a major exception. On the trunk, change 114 is recorded in directory v002 and in file v002/master.xml

Branch 1.x does not have a directory v002. We will create this directory to contain the changelog. However, note that we will **not** create a file named ''v002/master.xml''. There should only be one master.xml on a branch, as it contains the order of the changes.

Change 114 will be referenced in ''v001/master.xml'' as follows:

**branch_1.x/v001/master.xml**
<code>
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    <preConditions>
        <!-- These changes should only be run against a schema with major version 1 -->
        <sqlCheck expectedResult="1">
            SELECT NVL(MAX(id),0)
            FROM databasechangelog
            WHERE author='MajorVersion'
        </sqlCheck>
    </preConditions>
    <include file="v001/2009-10-16-102.xml"/>
    <include file="v002/2009-10-18-114.xml"/>
</databaseChangeLog>
</code>

===== Step 14: Backport change 114 to branch 2.x =====
This is the same as step 8.

===== Step 15: Deliver release 1.1 to Solo =====
This is the same as step 9, except you will run the lb_update command instead of lb_install to update Solo to the latest version of the 1.x branch.

===== Step 16: Deliver 2.0 as a fresh install to customer Duplex =====
This is also the same as step 9, but taking the export from tag 2.0.

===== Step 17: Deliver 2.0 as an upgrade to customer Solo =====
The same export created in the previous step can be delivered to customer Solo. 

Customer lb_solo runs the ''lb_upgrade_to_magor'' command.


===== Summary of developer procedures =====
==== Database refactorings ====
The default action is to create a change file named <date>-IssueNr>.xml in directory vXXX and specify the change in this file. Example filename: ''v002/2009-12-25-305.xml''

^ ^Create^Modify^Delete^
^Table|Default|Default|Default|
^Sequence|Default |Default |Default |
^View|Create new file in directory ''latest/vw''. Include this file in the change file.|Modify file in directory ''latest/vw''. Include this file in the change file. |See below  |
^Trigger|Create new file in directory ''latest/trg''. Include this file in the change file. |Modify file in directory ''latest/trg''. Include this file in the change file. |See below|
^Package|Create new file in directory ''latest/pck''. Include this file in the change file. |Modify file in directory ''latest/pck''. Include this file in the change file. |See below |


=== Delete object from latest directory (view, trigger, package) ===
The procedure is described here for a view, and is similar for triggers and packages.

Delete the view from the ''latest/vw'' directory.

Create a changeset to delete the view, with a preCondition. The preCondition prevents an error condition if the view does not exist. This will be the case if we run a changeLog on a database before the definition of the view:
<code>
    <changeSet author="jsmith" id="1">
        <preConditions onFail="MARK_RAN">
            <viewExists viewName="departments_vw">
        </preConditions>
        <dropView viewName="departments_vw"/>
    </changeSet>
</code>
alternative
<code>
    <changeSet author="jsmith" id="1" failOnError="false">
        <dropView viewName="departments_vw"/>
    </changeSet>
</code>
Add the changeset to the master.

Search all changelogs for inclusion of the view definition (which no longer exists). Remove this line from the relevant changelogs.


==== Other Procedures (non-refactoring) ====
=== Branch major release ===
As an example, let's assume that you are ready to branch for release 4.x.

The trunk will contain:
  * The installation scripts for 3.x
  * The upgrade changelogs to upgrade from 2.x (to 3.x)
  * The upgrade changelogs to upgrade from 3.x (to 4.x)

On the trunk, perform the following actions:
  - Create fresh install scripts for 4.x (replacing those for 3.x)
  - Delete all (upgrade) changelogs from 2.x
  - Create an empty changelog container for 4.x
  - replace names of these containers in master.xml
  - Commit

Create a branch from this revision with name "4.x". The x indicates that all further patches on 4.0 will take place on this branch. Development of 4.1 will take place on the trunk.

