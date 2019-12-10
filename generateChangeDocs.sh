#! /bin/bash
# re-build the java doc generator and run it. 

pushd _doc_generators
mvn clean package
popd
java -jar liquibase-docgenerator-1.0.0.local-SNAPSHOT.jar

# show some info useful to the user
echo ""
echo "------- created docgenerator and docs using the following liquibase version -------"
grep \<liquibase.version\> _doc_generators/pom.xml
echo ""

