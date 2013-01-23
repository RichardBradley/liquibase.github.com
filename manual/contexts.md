---
layout: default
title: Contexts
---

# Contexts #

"Contexts" in LiquiBase are tags you can add to changeSets to control which will be executed in any particular migration run. Any string can be used for the context name and they are checked case-insensitively.

When you run the migrator though any of the available methods, you can pass in a set of contexts to run. Only changeSets marked with the passed contexts will be run.

If you don't assign a context to a changeSet, it will run all the time, regardless of what contexts you pass in to the migrator.

If you do not specify a context when you run the migrator, ALL contexts will be run.

Here is an example of a change set using the context attribute:
<code>
   <changeSet id="2" author="bob" context="test">
        <insert tableName="news">
            <column name="id" value="1"/>
            <column name="title" value="Liquibase 0.8 Released"/>
        </insert>
        <insert tableName="news">
            <column name="id" value="2"/>
            <column name="title" value="Liquibase 0.9 Released"/>
        </insert>
    </changeSet>
</code>

## Using Contexts for Test Data ##

If you are managing your test data with LiquiBase, the best way to include it is in-line with all your other changeSets, but marked with a "test" context. That way, when you want your test data inserted you can run the migrator with the "test" context. When it comes time to migrate your production database, don't include the "test" context, and your test data not be included. If you have multiple test environments or test data sets, simply tag them with different contexts such as "min-test", "integration-test", etc.

Using contexts to control test data is better than having a separate changeLog tree because later refactorings and changes will be applied to existing test data the same as they are applied to production data. If you had a set of test data that was created and simply added after the database is set up, you would be constantly manually updating your test data scripts to keep them in line with the current database schema.

## Multiple contexts per change set ##

If you want to have a change set tagged with multiple contexts, simply comma-separate them. If you specify multiple contexts in a change set, only one of them needs to match one of the contexts passed to the migrator.

## Using Contexts for Multi-DBMS Change Logs ##

You can use contexts to control which change sets run on which databases, but the better option is to use the built-in "dbms" tag on the changeSet tag.
