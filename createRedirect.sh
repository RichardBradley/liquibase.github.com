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

FILENAME=.$1
TARGETURL=$2

# See if the target exists! the wget option --spider means to only check, do not
# download. The -q means quiet. 
echo "Checking to see if '$TARGETURL' already exists"
TESTURL=$TARGETURL
if [[ $TARGETURL != "http"* ]]; then
  TESTURL=https://www.liquibase.org$TARGETURL
fi

wget -q --spider $TESTURL
if [ $? -ne 0 ]; then
  echo "  Target URL $TARGETURL not found, not creating a redirect file."
  exit 1
else
  echo "  Target '$TARGETURL' exists."
  echo ""
  echo "Creating redirect file '$FILENAME' that redirects to '$TARGETURL'"

  # if path has directory separators, make sure that the directory exists.
  if [[ $FILENAME == *"/"* ]]; then
    DIRNAME=$(dirname "${FILENAME}")
    DIRNAME=./$DIRNAME/
    if [ ! -e $DIRNAME ]; then 
      echo "Creating directory '$DIRNAME'"
      mkdir -p $DIRNAME
    fi
  fi

  echo "<html>" > $FILENAME
  echo "<head>" >> $FILENAME
  echo "    <meta http-equiv=\"refresh\" content=\"0;url=$TARGETURL\">" >> $FILENAME
  echo "    <link rel=\"canonical\" href=\"$TARGETURL\">" >> $FILENAME
  echo "    <title>Redirecting to $TARGETURL...</title>" >> $FILENAME
  echo "</head>" >> $FILENAME
  echo "</html>" >> $FILENAME

  echo ""
  echo "Contents of $FILENAME"
  echo ""
  cat $FILENAME
fi

