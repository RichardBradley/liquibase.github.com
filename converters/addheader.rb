require 'find'
Find.find('../') do |file|

  if file.end_with? ".markdown"
    puts file
    name = file.sub /.*\/(.*?)\.markdown/, "\\1"
    name = name.gsub "_", " "
    name = name.capitalize

    puts name

    f = File.open(file, "r+")

    #puts f.ext_name

    lines = f.readlines
    f.close

    lines = ["---
layout: default
title: #{name}
---
\n"] + lines

    output = File.new(file, "w")
    lines.each { |line| output.write line }
    output.close
  end

  end