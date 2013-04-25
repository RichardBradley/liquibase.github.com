---
layout: default
title: Marknextchangesetran ant task
subnav: subnav_documentation.md
---

## markNextChangeSetRan Ant Task ##

Marks the next change as already ran.  Useful for when a change was made manually and so an update is failing.

### Sample ###

{% highlight xml %}
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
{% endhighlight %}


### Available Parameters ###

<table>
<tr><td>driver</td><td>The name of the database driver to connect with **required**  </td></tr>
<tr><td>url</td><td>The database URL **required**  </td></tr>
<tr><td>username</td><td>The database username to connect with **required**  </td></tr>
<tr><td>password</td><td>The password to use when connecting to the database **required**  </td></tr>
<tr><td>changeLog| The change log file to execute **required**  </td></tr>
<tr><td>defaultSchemaName</td><td>Schema to drop objects in  </td></tr>
<tr><td>outputFile</td><td>Save SQL to given file rather than executing  </td></tr>
<tr><td>classpathref</td><td>A reference to the classpath that contains the database driver, liquibase.jar, and the changelog.xml file **required**  </td></tr>
</table>
