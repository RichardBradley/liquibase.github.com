#! /usr/bin/env groovy

// Search through this directory recursively, looking at each .md file and then seeing if there are any references to that file
// in any of the other pages.

@Grapes(
    @Grab(group='commons-io', module='commons-io', version='2.6')
)
import org.apache.commons.io.FilenameUtils


// map of page name to count of links to that page
def allPages = [:]
// map of extension to count of number of files with that extension
def extensions = [:]

def currentDir = new File('.')
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
// println "Extensions"
// extensions.each { entry ->
//   println "\t${entry.key}\t${entry.value}"
// }
