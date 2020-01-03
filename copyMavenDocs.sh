#! /bin/bash
# copyMavenDocs.sh
# copies generated maven documentation from `liquibase/liquibase-maven-plugin/target/site` to `liquibase.github.com/documentation/maven/generated`

SOURCE_DIR=../liquibase/liquibase-maven-plugin/target/site
TARGET_DIR=documentation/maven/generated

cp $SOURCE_DIR/changelogSync-mojo.html          $TARGET_DIR
cp $SOURCE_DIR/changelogSyncSQL-mojo.html       $TARGET_DIR
cp $SOURCE_DIR/clearCheckSums-mojo.html         $TARGET_DIR
cp $SOURCE_DIR/dbDoc-mojo.html                  $TARGET_DIR
cp $SOURCE_DIR/diff-mojo.html                   $TARGET_DIR    
cp $SOURCE_DIR/dropAll-mojo.html                $TARGET_DIR
cp $SOURCE_DIR/futureRollbackSQL-mojo.html      $TARGET_DIR
cp $SOURCE_DIR/generateChangeLog-mojo.html      $TARGET_DIR
cp $SOURCE_DIR/help-mojo.html                   $TARGET_DIR
cp $SOURCE_DIR/listLocks-mojo.html              $TARGET_DIR
cp $SOURCE_DIR/migrate-mojo.html                $TARGET_DIR
cp $SOURCE_DIR/migrateSQL-mojo.html             $TARGET_DIR  
cp $SOURCE_DIR/releaseLocks-mojo.html           $TARGET_DIR
cp $SOURCE_DIR/rollback-mojo.html               $TARGET_DIR
cp $SOURCE_DIR/rollbackSQL-mojo.html            $TARGET_DIR  
cp $SOURCE_DIR/status-mojo.html                 $TARGET_DIR
cp $SOURCE_DIR/tag-mojo.html                    $TARGET_DIR
cp $SOURCE_DIR/update-mojo.html                 $TARGET_DIR
cp $SOURCE_DIR/updateSQL-mojo.html              $TARGET_DIR  
cp $SOURCE_DIR/updateTestingRollback-mojo.html  $TARGET_DIR

# use a sed script to remove the "-local-SNAPSHOT" from the version numbers
# that may be included in the different pages. 

for file in $TARGET_DIR/*.html
do
  sed -i 's/-local-SNAPSHOT//g' $file
done

echo "Copied generated maven docs from $SOURCE_DIR to $TARGET_DIR"
