# liquibase.github.io

Documentation for the liquibase.org site.

***Please send pull requests!***

## Project Overview

The Liquibase site is hosted using GitHub Pages, and generated using [Jekyll](http://jekyllrb.com/). Pages are written in MarkDown documents, making use of [Liquid template tags](http://jekyllrb.com/docs/templates/).

To build the site for local testing, install Jekyll and its dependencies, including Ruby, the kramdown gem, Python 2.7, and the Pygments package. If you're developing on Windows, there is a handy [Portable package of Jekyll](https://github.com/madhur/PortableJekyll) you can use. You may still need to fiddle around a bit to get it working, such as installing the kramdown gem ("gem install kramdown") and editing "setpath.cmd".

Once Jekyll is installed, just navigate to this repo's directory, and run `jekyll serve`. You can then access the site from `http://localhost:4000`.

If you're using a MarkDown editor with a "live preview" feature, be aware that it's unlikely to support Liquid's syntax highlighting tags, such as "{% highlight xml %}".

## Project Setup
### Requirements
* [Ruby](https://ruby-doc.org/)
  * _OR_ [RVM](https://rvm.io/rvm/install)
* [Bundler](https://bundler.io/)

### Steps
#### Install
Once all requirements are met, you can install everything with:
```bash
bundle install
```

#### Local Dev Server
```bash
bundle exec jekyll serve 
```