#!/usr/bin/env ruby

# Check if there is an argument
if ARGV.empty?
  puts ""
else
  ARGV.each do |arg|
    if arg.match(/School/)
      puts arg
    else
      puts ""
    end
  end
end
