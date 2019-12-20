#! /bin/bash

# Use this script to create an HTML redirect file. Requires two arguments.

if [ "$#" -lt 2 ]; then
  echo "Please supply two arguments."
  echo ""
  echo "  First argument is the full path to the redirect file to create. Should have"
  echo "  an html extension."
  echo ""
  echo "  Second argument is the full or relative URL that is the redirect target. If"
  echo "  redirecting to a page within liquibase.org, you can use a url that starts"
  echo "  with just / to refer to the root of the liquibase website."
  exit 1
fi

FILENAME=$1
TARGETURL=$2
TARGETEXISTS=1

# See if the target exists! the wget option --spider means to only check, do not
# download. The -q means quiet. 
echo "Checking to see if '$TARGETURL' already exists"
if [[ $TARGETURL == "http:"* ]]; then
  wget --spider $TARGETURL
  if [ $? -ne 0 ]; then
    echo "Target URL $TARGETURL not found"
    TARGETEXISTS=0
  fi
else
  wget --spider http://liquibase.org$TARGETURL
  if [ $? -ne 0 ]; then
    echo "Target URL http://liquibase.org$TARGETURL not found"
    TARGETEXISTS=0
  fi
fi

if [ $TARGETEXISTS -eq 1 ]; then
  echo "Creating redirect file '$FILENAME' that redirects to '$TARGETURL'"

  # if path has directory separators, make sure that the directory exists.
  if [[ $FILENAME == *"/"* ]]; then
    DIRNAME=$(dirname "${FILENAME}")
    if [ ! -e $DIRNAME ]; then 
      echo "Creating directory '$DIRNAME'"
      mkdir -p $DIRNAME
    fi
  fi

  echo "<html>" > $FILENAME
  echo "<head>" >> $FILENAME
  echo "    <meta http-equiv=\"refresh\" content=\"0;url=$TARGETURL\">" >> $FILENAME
  echo "    <link rel=\"canonical\" href=\"$TARGETURL\">" >> $FILENAME
  echo "</head>" >> $FILENAME
  echo "</html>" >> $FILENAME

  echo ""
  echo "Contents of $FILENAME"
  echo ""
  cat $FILENAME
else
  echo "TargetURL '$TARGETURL' does not exist, not creating a redirect file."
fi

