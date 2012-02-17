====== LiquiBase Architecture ======

The LiquiBase migrator is designed to require no dependencies to run and be easy to integrate into various build and deployment processes.

The primary worker class for LiquiBase is [[http://www.liquibase.org/api/liquibase/Liquibase.html|liquibase.Liquibase]]. All the various ways of interacting with LiquiBase ([[http://www.liquibase.org/api/liquibase/commandline/CommandLineFileOpener.html|command line]], [[http://www.liquibase.org/api/liquibase/ant/DatabaseMigratorTask.html|Ant]], etc.) are thin wrappers around the Liquibase class.

Each database refactoring/change is implemented by a class in the [[http://www.liquibase.org/api/liquibase/change/package-summary.html|liquibase.change]] package. As the LiquiBase migrator runs, it uses a SAX XML parser to parse the change logs, instantiate the necessary change class, and run or save the corresponding SQL.

If you have additional questions about LiquiBase's architecture, please contact us via the [[../community|mailing list]].
