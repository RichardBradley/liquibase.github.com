#! /bin/bash
unset BUNDLE_GEMFILE
rm Gemfile.lock
bundle exec jekyll serve -l
git checkout -- Gemfile.lock
