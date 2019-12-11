#! /usr/bin/env groovy

// If run with no arguments, search through this directory recursively, looking at each .md file and 
// then seeing if there are any references to that file in any of the other pages. Output shows a
// count of links to each page, sorted from largest to smallest.
//
// using the the generated _site directory, use grep to find files that mention the name of
// each page followed by ".html". We will just update the count of 'links' in the allPages
// map with the number of pages that mention the page in question. Then at the end, any page
// that has zero links to it is (potentially) an orphan. There may be some that are intentionally
// orphans. 
// Note that if there are two pages with the same name but in different directories, we will mis-count
// those unless we make this way smarter about looking at page names and links. 
//
// If run with a single argument, consider that argument as a name of a page and show the internal 
// links to that page.

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
def removeablePath = currentDir.getCanonicalPath()
println "removeablePath is ${removeablePath}"
currentDir.eachFileRecurse {
  fullPath = it.getCanonicalPath()
  
  // ignore stuff in directories we don't care about
  if (fullPath ==~ /.*\/_site\/.*/ || 
      fullPath ==~ /.*\/\.git\/.*/ ||
      fullPath ==~ /.*\/_includes\/.*/ ||
      fullPath ==~ /.*\/_layouts\/.*/ ||
      fullPath ==~ /.*\/dbdoc\/.*/ ||
      fullPath ==~ /.*\/javadoc\/.*/ ) {
    return true
  }
  
  // we are only interested in files. Check the extensions, we are only interested
  // in .md files or .html files. Keep count of all extensions just for grins.
  if (it.isFile()) {
    extension = FilenameUtils.getExtension(it.name)
    pageName = FilenameUtils.getBaseName(it.name)
    
    // blog posts are strange. The filename is like yyyy-mm-dd-title but the link
    // you would use is like yyyy/mm/title so we need to extract just the title.
    def match = pageName =~ /(\d+)-(\d+)-(\d+)-(.*)/
    if (match) {
      blogTitle = match[0][4]
      pageName = blogTitle
    }
    
    pagePath = FilenameUtils.getFullPath(it.name)
    pageId = "${pagePath}/${pageName}"
    if (extensions.containsKey(extension)) {
      extensions[extension] = extensions[extension] + 1
    } else {
      extensions[extension] = 1
    }
    
    if (extension == 'md' || extension == 'html') {
      allPages[pageName] = 0
    }
  } 
}

println "Total pages: ${allPages.size()}"
if (args.length == 0) {
  print "Finding orphans "
  allPages.each { entry ->
    count = getCountFromCommand ("grep -nHIrF -- ${entry.key}.html".toString(),"_site")
    allPages[entry.key] = count
    print '.'
  }
  println ''

  def sortedPages = allPages.sort { -it.value }
  println "Pages"
  println "\t${'PageName'.padRight(80)}\tLink Count"
  sortedPages.each { entry ->
    println "\t${entry.key.padRight(80)}\t${entry.value}"
  }
} else {
  println "Finding links to page named '${args[0]}.html'"
  runCommand ("grep -nHIrF -- ${args[0]}.html".toString(),"_site")
}


