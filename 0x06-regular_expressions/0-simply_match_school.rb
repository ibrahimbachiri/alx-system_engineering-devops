#!/usr/bin/env ruby

# Iterate through the command-line arguments
ARGV.each do |arg|
  # Match the regular expression /School/ in the input argument
  if matched = arg.match(/School/)
    # Print the matched string followed by the end of line character
    puts matched[0]
  else
    # Print an empty line if no match is found
    puts ""
  end
end
