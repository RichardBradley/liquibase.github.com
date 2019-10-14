#!/bin/bash

JEKYLL_VERSION=$(sed -E -n 's/^.*gem "jekyll", "[<>=~]{1,2} (.*)".*$/\1/p' ./Gemfile)
docker run --volume="$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve --watch --drafts