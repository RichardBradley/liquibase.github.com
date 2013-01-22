===== markNextChangeSetRan Ant Task =====

Marks the next change as already ran.  Useful for when a change was made manually and so an update is failing.

==== Sample ====

<code xml>
<target name="markNextChangeSetRan" depends="prepare">
    <fail unless="database.url">database.url not set</fail>

    <fail unless="database.username">database.username not set</fail>
    <fail unless="database.password">database.password not set</fail>

    <taskdef resource="liquibasetasks.properties">
        <classpath refid="classpath"/>

    </taskdef>

    <markNextChangeSetRan
            driver="${database.driver}"
            url="${database.url}"
            username="${database.username}"
            password="${database.password}"
            promptOnNonLocalDatabase="${prompt.user.if.not.local.database}"
            dropFirst="false"
            classpathref="classpath"
            changeLog="${changelog.file}"
            >
    </markNextChangeSetRan>
</target>
</code>


==== Available Parameters ====

^ driver  | The name of the database driver to connect with **[required]**  | 
^ url  | The database URL **[required]**  | 
^ username  | The database username to connect with **[required]**  | 
^ password  | The password to use when connecting to the database **[required]**  | 
^ changeLog| The change log file to execute **[required]**  | 
^ defaultSchemaName  | Schema to drop objects in  |
^ outputFile  | Save SQL to given file rather than executing  |
^ classpathref  | A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **[required]**  | 

