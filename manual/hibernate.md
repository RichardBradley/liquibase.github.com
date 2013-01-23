---
layout: default
title: Hibernate
---

# Hibernate Integration (Since 1.6) #
The LiquiBase-Hibernate is a replacement to Hibernate's "[[http://www.hibernate.org/hib_docs/v3/api/org/hibernate/tool/hbm2ddl/package-summary.html|hbm2ddl]]" functionality.  


## Advantages of LiquiBase over hbm2ddl ##
While hbm2ddl works in general, it is basically a database diff tool and therefore has all the [[http://blog.liquibase.org/2007/06/the-problem-with-database-diffs.html|problems associated with database diff tools]].

The LiquiBase-Hibernate integration records the database changes required by your current Hibernate mapping to a change log file which you can then inspect and modify as needed before executing.

## Development Process ##
Using Hibernate with LiquiBase consists of the following steps:
  - Make needed changes to your Hibernate-mapped objects
  - Run [[diff.html|diffChangeLog]] between your Hibernate config file and your development database (see examples below)
  - Inspect and modify new change sets (if needed)
  - [[Update.html]] your database with the new changes

## Example ##




### Command Line ###
<code>
liquibase \
        --classpath=jdbcdriver.jar:hibernate.jar \
        --changeLogFile=path/to/changelog \
        --url=hibernate:YOUR_HIBERNATE.CFG.XML \
   diffChangeLog \
        --referenceDriver=oracle.jdbc.OracleDriver \
        --referenceUrl=jdbc:oracle:thin:@localhost:1521:oracle \
        --referenceUsername=scott \
        --referencePassword=tiger
</code>

### Ant ###
<code xml>
<target name="hibernate-update" depends="prepare">
 
    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>
 
    </taskdef>
 
    <diffDatabaseToChangeLog
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
 
            baseUrl="hibernate:YOUR_HIBERNATE.CFG.XML"
 
            outputFile="path/to/changelog.xml"
            classpathref="classpath"
            >
    </diffDatabaseToChangeLog>
</target>
</code>






