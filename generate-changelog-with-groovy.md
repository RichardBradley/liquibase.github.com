---
layout: default
title: Generate-changelog-with-groovy
root: .
---

# Generate LiquiBase changeLogs using Groovy #

In this tutorial, we will show how you can use a Groovy script to generate Liquibase change logs. Groovy makes it very easy to write XML, and it is a great all-purpose scripting language. There are plenty of tutorials available on Groovy and XML, so we won't cover these subjects here.

A fundamental choice when producing XML with Groovy, is which of the two available XML builders to use: the MarkupBuilder or the StreamingMarkupBuilder. We will use the MarkupBuilder for the simple reason that it pretty-prints the output.

It is good practice to separate the creation of an objects (such as a table definition) from the output formattting. So in this tutorial, we will first show how XML output can be created. We will then construct the classes required to store a table definition. And finally, we will generate a Liquibase changelog from the table definition.

In this article, we will populate the table definition objects manually. But it is easy to see how you can expand this to populate the objects from some other source, e.g. a design repository or a spreadsheet.



# The first script #
Our first script will produce a minimal changelog.
Note that the MarkupBuilder cannot output an XML declaration (unlike the StreamingMarkupBuilder), so the declaration is written to the file before invoking the builder.

**sample1.groovy**

{% highlight groovy %}
def writer = new FileWriter('sample1.xml')

def eol = System.properties.'line.separator'
writer << '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' << eol

def xml = new groovy.xml.MarkupBuilder(writer)
xml.databaseChangeLog( xmlns : "http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                     , "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                     , "xsi:schemaLocation" : "http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"
                     ) {
  changeSet(author:'jsmith', id:'1') {
    createTable(tableName:'emp', remarks:'Employees') {
      column(name:'id', type:'number(4,0)' )
      column(name:'ename', type:'varchar2(14)', remarks:'Full name' )
    }
  }
}
{% endhighlight %}
Run this script in Groovy, and the following output is produced:

**sample1.xml**
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns='http://www.liquibase.org/xml/ns/dbchangelog/1.9' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd'>
  <changeSet author='jsmith' id='1'>
    <createTable tableName='emp' remarks='Employees'>
      <column name='id' type='number(4,0)' />
      <column name='ename' type='varchar2(14)' remarks='Full name' />
    </createTable>
  </changeSet>
</databaseChangeLog>
{% endhighlight %}

Note that the column tag has a variable number of attributes. The attributes are produced from the parameters on the call to the column method in the builder, e.g.:
{% highlight groovy %}
column(name:'id', type:'number(4,0)' )
{% endhighlight %}
 
In Groovy, this is equivalent to passing a map with 2 entries to the method. We will use a map in subsequent code, because it is easy to create a map with a variable number of entries.



# Defining the Table class #
A table object contains several other objects:
  * columns
  * primary key
  * unique constraints
  * foreign key constraints
  * indexes
First we will create a Table class that only supports columns:

**Listing 1**
{% highlight groovy %}
class Table {
  Map attributes = [:]
  List columns = []
  Table(Map attribs) {
    attributes = attribs
  }
}
{% endhighlight %}
The map contains the XML attributes as defined by the LiquiBase tags.

A similar class for columns:

**Listing 2**
{% highlight groovy %}
class Column {
  Map attributes = [:]
  Map constraintsAttributes = [:]
  Column(Map attribs) {
    attributes = attribs.findAll{it.key in ['name', 'type', 'remarks']}
    constraintsAttributes = attribs.findAll{it.key in ['nullable']}
  }
}
{% endhighlight %}
For columns, we separate the attributes into 2 maps because they are required for 2 separate XML tags: column and constraints.


Now let's create a test script that uses these classes:

**Listing 3**

{% highlight groovy %}
def writer = new FileWriter('sample2.xml')

// Define 2 tables
def tables =[]
def dept = new Table(tableName:'departments')
dept.columns << new Column(name:'id', type:'number(4,0)', nullable:false)
dept.columns << new Column(name:'dname', type:'varchar2(14)', remarks:'Department name')
tables << dept

def emp = new Table(tableName:'employees', remarks:'All employees known in HR system')
emp.columns << new Column(name:'id', type:'number(4,0)', nullable:false)
emp.columns << new Column(name:'ename', type:'varchar2(14)', remarks:'Full name')
emp.columns << new Column(name:'dept_id', type:'number(4,0)', nullable:false)
tables << emp

def cct = new ChangelogCreateTable(author: "james")
cct.generate(writer, tables)

class ChangelogCreateTable {
  String author
  def changesetId = 1
  def generate(writer, tables) {
    // MarkupBuilder cannot output an XML declaration, so this is a workaround
    def eol = System.properties.'line.separator'
    writer << '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' << eol

    def xml = new groovy.xml.MarkupBuilder(writer)
    xml.databaseChangeLog( xmlns : "http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                         , "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                         , "xsi:schemaLocation" : "http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"
                         ) {
      tables.each { table ->
        changeSet(author: author, id : changesetId++) {
          createTable( table.getAttributes() ) {
            table.columns.each { col ->
              column(col.getAttributes() ) {
                if(col.getConstraintsAttributes()) {
                  constraints(col.getConstraintsAttributes())
                }
              }
            }
          }
        }
      }
    }
  }
}
{% endhighlight %}
To run this as a Groovy script, concatenate these 3 listings in a single file, e.g. sample2.groovy, and run it.

The output is:

**Sample2.xml**

{% highlight groovy %}
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<databaseChangeLog xmlns='http://www.liquibase.org/xml/ns/dbchangelog/1.9' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd'>
  <changeSet author='james' id='1'>
    <createTable tableName='departments'>
      <column name='id' type='number(4,0)'>
        <constraints nullable='false' />
      </column>
      <column name='dname' type='varchar2(14)' remarks='Department name' />
    </createTable>
  </changeSet>
  <changeSet author='james' id='2'>
    <createTable tableName='employees' remarks='All employees known in HR system'>
      <column name='id' type='number(4,0)'>
        <constraints nullable='false' />
      </column>
      <column name='ename' type='varchar2(14)' remarks='Full name' />
      <column name='dept_id' type='number(4,0)'>
        <constraints nullable='false' />
      </column>
    </createTable>
  </changeSet>
</databaseChangeLog>
{% endhighlight %}

You can see how concise and readable the Groovy code is.

# Completing the Table class #
As the final example, we will complete the Table class with:
  * primary key
  * unique constraints
  * foreign key constraints
  * indexes
Note that the Groovy script first creates changeSets to create the tables with unique constraints and indexes. After all tables have been created, the foreign key constraints are created.

**sample3.groovy**

{% highlight groovy %}
def writer = new FileWriter('sample3.xml')

def tables =[]
def dept = new Table(tableName:'departments')
dept.columns << new Column(name:'id', type:'number(4,0)', nullable:false)
dept.columns << new Column(name:'dname', type:'varchar2(14)', remarks:'Department name')
dept.primaryKey = new PrimaryKey(tableName:'departments', constraintName:'dept_pk', columnNames:'id')
dept.uniqueKeys << new UniqueKey(tableName:'departments', constraintName:'dept_uk', columnNames:'dname')
tables << dept

def emp = new Table(tableName:'employees', remarks:'All employees known in HR system')
emp.columns << new Column(name:'id', type:'number(4,0)', nullable:'false')
emp.columns << new Column(name:'ename', type:'varchar2(14)', remarks:'Full name')
emp.columns << new Column(name:'dept_id', type:'number(4,0)', nullable:'false')
emp.primaryKey = new PrimaryKey(tableName:'employees', constraintName:'emp_pk', columnNames:'id')
emp.foreignKeys << new ForeignKey( baseTableName:'employees', constraintName:'emp_dept_fk', baseColumnNames:'dept_id',
                                   referencedTableName:'dept', referencedColumnNames:'id')
def ind1 = new Index(tableName:'employees', indexName:'emp_ind1')
ind1.columns << new Column(name:'dept_id')
emp.indexes << ind1
tables << emp

def cct = new ChangelogCreateTable(author: "james")
cct.generate(writer, tables)

class ChangelogCreateTable {
  String author
  def changesetId = 1
  def generate(writer, tables) {
    def eol = System.properties.'line.separator'
    writer << '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' << eol

    def xml = new groovy.xml.MarkupBuilder(writer)
    xml.databaseChangeLog( xmlns : "http://www.liquibase.org/xml/ns/dbchangelog/1.9"
                         , "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                         , "xsi:schemaLocation" : "http://www.liquibase.org/xml/ns/dbchangelog/1.9 http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd"
                         ) {
      tables.each { table ->
        changeSet(author: author, id : changesetId++) {
          createTable( table.getAttributes() ) {
            table.columns.each { col ->
              column(col.getAttributes() ) {
                if(col.getConstraintsAttributes()) {
                  constraints(col.getConstraintsAttributes())
                }
              }
            }
          }
          if (table.primaryKey != null) {
            addPrimaryKey(table.primaryKey.getAttributes())
          }
          table.uniqueKeys.each { uk ->
            addUniqueConstraint(uk.getAttributes())
          }
          table.indexes.each{ index ->
            createIndex(index.getAttributes()) {
              index.columns.each { col ->
                column(col.getAttributes() )
              }
            }
          }
        }
      }
      
      // Create the foreign keys
      tables.each { table ->
        if (table.foreignKeys) {
          changeSet(author: author, id : changesetId++) {
            table.foreignKeys.each { fk ->
              addForeignKeyConstraint(fk.getAttributes())
            }
          }
        }
      }
    }
  }
}

class Table {
  Map attributes = [:]
  Map metaData = [:]
  List columns = []
  PrimaryKey primaryKey
  List uniqueKeys = []
  List foreignKeys = []
  List indexes = []
  Table(Map attribs) {
    attributes = attribs
  }
}

class Column {
  Map attributes = [:]
  Map constraintsAttributes = [:]
  Column(Map attribs) {
    attributes = attribs.findAll{it.key in ['name', 'type', 'remarks']}
    constraintsAttributes = attribs.findAll{it.key in ['nullable']}
  }
}

class PrimaryKey {
  Map attributes = [:]
  PrimaryKey(Map attribs) {
    attributes = attribs
  }
}

class UniqueKey {
  Map attributes = [:]
  UniqueKey(Map attribs) {
    attributes = attribs
  }
}

class ForeignKey {
  Map attributes = [:]
  ForeignKey(Map attribs) {
    attributes = attribs
  }
}

class Index {
  Map attributes = [:]
  List columns = []
  Index(Map attribs) {
    attributes = attribs
  }
}
{% endhighlight %}

# Conclusion #
If you need to generate a LiquiBase changelog from a structured source, Groovy provides you an easy way to script this task.