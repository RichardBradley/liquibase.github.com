#! /usr/bin/env groovy

// list any redirects, showing the actual url and the redirect url
// There are three ways to do redirects that I have found:
// 
// Method 1 - in markdown files:for an example, see liquibase.github.com/download/index.md, which contains:
//   ---
//   title: Download Liquibase
//   redirect_to:
//     - http://download.liquibase.org
//   ---
// Method 2 - in xml?
// I also see liquibase.github.com/feed (as a plain text file, no extension) that contains:
//   <?xml version="1.0"?>
//   <redirect>
//   <newLocation>
//       http://www.liquibase.org/rss.xml
//   </newLocation>
//   </redirect>
// 
// Method 3 - in HTML:example - see liquibase.github.com/extensions/index.html
//   <html>
//   <head>
//       <meta http-equiv="refresh" content="0;url=https://liquibase.jira.com/wiki/display/CONTRIB/LiquiBase+Extensions+Portal">
//   </head>
//   </html>
// 
// This script will show all of these types.
//
@Grapes(
    @Grab(group='commons-io', module='commons-io', version='2.6')
)
import org.apache.commons.io.FilenameUtils


// map of page name to count of links to that page
def allPages = [:]
// map of extension to count of number of files with that extension
def extensions = [:]

// a wrapper closure around executing a string                                  
// can take either a string or a list of strings (for arguments with spaces)    
// returns a count of lines in the output.
def getCountFromCommand = { strList, dirName ->
  def proc = strList.execute(null,new File(dirName))
  def stdout = new StringBuilder(), stderr = new StringBuilder()
  proc.consumeProcessOutput(stdout, stderr)
  proc.waitForOrKill(1000)

  def output = stdout.toString()
  int count = 0
  if (output.length() > 0) {
    count = output.split("\r\n|\r|\n").length;
  }
  return count
}

// a wrapper closure around executing a string                                  
// can take either a string or a list of strings (for arguments with spaces)    
// prints the output
def runCommand = { strList, dirName ->
  def proc = strList.execute(null,new File(dirName))
  def stdout = new StringBuilder(), stderr = new StringBuilder()
  proc.consumeProcessOutput(stdout, stderr)
  proc.waitForOrKill(1000)

  println stdout.toString()
}

//--------- main execution -----------------------------------------------------

def currentDir = new File('.')
currentDir.eachFileRecurse { thisFile ->
  fullPath = thisFile.getCanonicalPath()
  
  // ignore stuff in directories we don't care about
  if (fullPath ==~ /.*\/_site\/.*/ || 
      fullPath ==~ /.*\/\.git\/.*/ ||
      fullPath ==~ /.*\/_includes\/.*/ ||
      fullPath ==~ /.*\/_layouts\/.*/ ||
      fullPath ==~ /.*\/dbdoc\/.*/ ||
      fullPath ==~ /.*\/javadoc\/.*/ ) {
    return true
  }
  
  // We are only interested in files. Don't check this script.
  if (thisFile.isFile() && (! thisFile.name.startsWith('listRedirects'))) {
    contents = thisFile.text
    fileName = thisFile.path.padRight(40)
    // check for type 1 redirect
    def type1Match = contents =~ /(?m)redirect_to:\s*-*\s*(.*)/
    if (type1Match) {
      target = type1Match[0][1]
      println "type 1 redirect: ${fileName} redirects to ${target}"
    }

    // check for type 2 redirect
    def type2Match = contents =~ /(?m)<redirect>\s*<newLocation>\s*(.*)\s*<\/newLocation>/
    if (type2Match) {
      
      target = type2Match[0][1]
      println "type 2 redirect: ${fileName} redirects to ${target}"
    }

    // check for type 3 redirect, and whether it is 'canonicalized'
    def type3Match = contents =~ /(?m)<meta http-equiv="refresh"\s*content="\d+;url=(.*)">/
    if (type3Match) {
      target = type3Match[0][1]
      def isCanonical = contents =~/(?m)<link rel="canonical" href="/
      def canonicalString = isCanonical ? "(has canonical reference)" : "(DOES NOT HAVE CANONICAL REFERENCE)"
      def hasTitle = contents =~/(?m)<title>.*<\/title>/
      def titleStatus = hasTitle ? "(has title)" : "(DOES NOT HAVE TITLE)"
      println "type 3 redirect: ${fileName} redirects to ${target} ${canonicalString} ${titleStatus}"
    }

    // check for type 4 redirect
    def type4Match = contents =~ /(?m)redirectUrl: (.*)/
    if (type4Match) {
      target = type4Match[0][1]
      println "type 4 redirect: ${fileName} redirects to ${target}"
    }
    
  } 
}

