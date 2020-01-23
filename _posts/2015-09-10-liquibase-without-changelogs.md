---
layout: default
subnav: subnav_blog.md
title: Liquibase Without Changelogs
---
# Liquibase Without Changelogs

Early on, Liquibase only supported XML changelogs with each changeSet listed in it. There are many advantages to using that setup, but there are now many different ways to store your database changes.

One way to manage your changes is to store them in individual SQL files.  Some people prefer this setup because it is similar to other tools they have used, because they find SQL more natural to work with than XML, or they prefer to work with smaller files in a directory than changeSets stored in a large file. It is also helpful when migrating to Liquibase from an older system that manages changes as individual files.

### Master Changelog

To bootstrap the process, you need a master changelog file that uses the includeAll command. I know the title said "Liquibase Without Changelogs," but once you have created this file you never have to touch it again.

**File "com/example/liquibase/changelog.xml"**

{% highlight html %}

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.4.xsd">
    <includeAll path="com/example/liquibase" filter="sql"/>
</databaseChangeLog>

{% endhighlight %}

The includeAll command is telling Liquibase to run all the SQL files in the "com/example/liquibase" directory.

Now, when you run `liquibase --changeLogFile=com/example/liquibase/changelog.xml update` Liquibase will look for files with an SQL extension in com/example/liquibase and treat each as a changeSet. The files will be executed in alphabetical order.

### Example Usage

Create a file "com/example/liquibase/0010-create-address.sql" containing

{% highlight sql %}

create table address (id int primary key, line1 varchar(20), line2 varchar(20));

{% endhighlight %}

Now run liquibase update and you will see an "Update Successful" message and the new address table in your database.

If you run liquibase update update again, Liquibase knows that the SQL file already ran and does not try to re-create your table.

You can see what Liquibase is tracking by running select id, author, filename from databasechangelog and you will see a row with id="raw", author="includeAll", filename="com/example/liquibase/0010-create-address.sql". The SQL file is being managed like any other changeSet, using a generated author of "includeAll" and id of "raw".

Now create another file "com/example/liquibase/0020-address-insert.sql" containing:

{% highlight sql %}

insert into address (id, line1, line2) values (1, '121 Main Ave', null);
insert into address (id, line1, line2) values (2, '662 Broadway', 'Suite 3317');
insert into address (id, line1, line2) values (3, '412 Riverview', null);

{% endhighlight %}

and run liquibase update again.

This time data will be inserted into the table and if you select from databasechangelog there will now be a second row containing id="raw", author="includeAll", filename="com/example/liquibase/0020-insert-address.sql"

Continue adding SQL files to build your database.

### Things to consider: File Naming

Liquibase simply execute files in alphabetical order and will track what has ran based on the filename.

Therefore, choose a naming pattern that is easy for you to use but also leaves you open to sneak in new changeSets between existing ones down the road if you need. In the above example, I used a pattern of a zero-padded 4 digit number that increments by 10 followed by a simple description of what is in the file. The zero-padding will preserve the correct alphabetical file ordering while the incrementing by 10 allows me to add a "0011-increase-address-size.sql" file if I realize one needs to be added "before" the 0020 file. If I hit the limit of the 10 increment or the 1000 zero padded length, continue on with letters. 001a.sql will come after 0019 alphabetically.

Also make sure you use a consistent case for your filenames. Some systems will sort them case sensitively and others will not, so for best portability pick a case and stick to it.

### Things to consider: checksums

Like all changeSets, Liquibase tracks the checksum of the changeSet when it was executed against each database. So, if you modify a SQL file after it has been executed somewhere, Liquibase will throw an error on the next update saying that the checksum has changed. Therefore, each new step in your database migration should be in its own file--don't append to an existing file.

### Things to consider: transactions

Like all changeSets, Liquibase will try to run each SQL file in its own transaction. Since most statements are auto-committing on most databases, it is best to have a single statement per SQL file. Otherwise, if the second statement fails but the first auto-commits, Liquibase will be in an indeterminate state due to the half-ran changeSet.

### Liquibase Formatted SQL

Rather than using standard SQL in your files, consider using [Liquibase-formatted SQL](http://www.liquibase.org/documentation/sql_format.html) for some or all of your files. Liquibase-formatted SQL is designed to be backwards-compatible with standard SQL but allows you more flexibility and power within Liquibase, such as the ability to run preconditions, use changelog parameters, filter statements by database or context, and more. Liquibase-formatted SQL also allows you to specify multiple changeSet blocks within a single file.

To try a Liquibase-formatted file, create a file com/example/liquibase/0030-start-cart.sql

{% highlight sql %}

--liquibase formatted sql
--changeset nvoxland:1
create table cart (id int primary key, created_date date);

--changeset nvoxland:2
create table cart_item (id int primary key, created_date date, cart_id int, line_item int, quantity int);

{% endhighlight %}

After running liquibase update, when you select from databasechangelog you will see a row with id="1" author="nvoxland" filename="com/example/liquibase0030-start-cart.sql" and a row with id="2" author="nvoxland" filename="com/example/liquibase0030-start-cart.sql". Because of the formatting, Liquibase is seeing each chunk of the file as a separate changeSet and any new changesets you append to the file will be handled correctly as well.

*(Originally posted to the [Datical.com blog](http://www.datical.com/liquibase-without-changelogs/))*