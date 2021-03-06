===== tagDatabase Ant Task =====

"Tags" the database for possible future rollback.  See [[rollback]] for more information.

==== Sample ====

<code xml>
<target name="tag" depends="prepare">
    <fail unless="db.changelog.file">db.changelog.file not set</fail>
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <tagDatabase
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            classpathref="classpath"
            tag="version 1.2"
            >
    </tagDatabase>
</target>
</code>



==== Available Parameters ====

^ tag  | Tag to apply to the database  |
^ driver  | The name of the database driver to connect with  | 
^ url  | The database URL **[required]**  | 
^ username  | The database username to connect with **[required]**  | 
^ password  | The password to use when connecting to the database **[required]**  | 
^ defaultSchemaName  | Schema to use for LiquiBase control tables  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **[required]**  | 
^ currentDateTimeFunction  | Overrides current date time function used in SQL. Useful for unsupported databases  | 
^ databaseChangeLogTableName  | Overrides the name of the databasechangelog table to use //Since LiquiBase 1.9// |
^ databaseChangeLogLockTableName  | Overrides the name of the databasechangeloglock table to use //Since LiquiBase 1.9// |

==== Available Sub Tags ====
^ changeLogProperty  | Sets a [[changelog parameters]] set //Since LiquiBase 1.7// | 

=== Available <changeLogProperty> Parameters ===
^ name  | The name of the property to set  | 
^ value  | The value of the property to set  | 
