rem -DlocalRepositoryPath=lib
set jar=D:\dev\liquibase\liquibase-core\target\liquibase-core-3.8.6-local-SNAPSHOT.jar
del liquibase-core-3.8.6-local-SNAPSHOT.jar
copy %jar% liquibase-core-3.8.6-local-SNAPSHOT.jar
mvn install:install-file -Dfile=%jar% -DgroupId=org.liquibase -DartifactId=liquibase-core -Dversion=3.8.6-local-SNAPSHOT -Dpackaging=jar
pause