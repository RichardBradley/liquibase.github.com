===== diffDatabase Ant Task =====

Outputs a [[diff]] of the difference between two databases as a change log to bring them into sync.

==== Sample ====

<code xml>
<target name="diff-database" depends="prepare">

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <diffDatabaseToChangeLog
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"

            referenceUrl="${database.url}"
            referenceUsername="${database.username}"
            referencePassword="${database.password}"

            outputFile="path/to/newchangelog.xml"
            classpathref="classpath"
            >
    </diffDatabaseToChangeLog>
</target>
</code>



==== Available Parameters ====

^ driver  | The name of the database driver to connect with  | 
^ url  | The target database URL **[required]**  | 
^ username  | The target database username to connect with **[required]**  | 
^ password  | The target database password **[required]**  | 
^ defaultSchemaName  | Schema to use by default for managed database objects and LiquiBase control tables  |
^ baseDriver  | The name of the database driver to connect with  | 
^ referenceUrl  | The base database URL **[required]**  | 
^ referenceUsername  | The base database username to connect with **[required]**  | 
^ referencePassword  | The base database password **[required]**  | 
^ baseDefaultSchemaName  | Schema to use by default for managed database objects and LiquiBase control tables  |
^ outputFile  | Location of file to save change log to **[required]**  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **[required]**  | 
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use //Since LiquiBase 1.9// |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use //Since LiquiBase 1.9// |

==== Available Sub Tags ====
^ changeLogProperty  | Sets a [[changelog parameters]] set //Since LiquiBase 1.7// | 

=== Available <changeLogProperty> Parameters ===
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
