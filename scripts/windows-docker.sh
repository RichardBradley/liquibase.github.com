#!/bin/bash
# JEKYLL_VERSION=$(sed -E -n 's/^.*gem "jekyll", "[<>=~]{1,2} (.*)".*$/\1/p' ./Gemfile)
JEKYLL_VERSION=3.8.5 # TODO: See if sed will work on windows.
winpty docker run -it --rm -v /${PWD}:/srv/jekyll -p 4000:4000 jekyll/jekyll:$JEKYLL_VERSION jekyll serve --watch --drafts