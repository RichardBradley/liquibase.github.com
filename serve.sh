#! /bin/bash
unset BUNDLE_GEMFILE
rm Gemfile.lock
title Jekyll Server
bundle exec jekyll serve -l --incremental
git checkout -- Gemfile.lock
