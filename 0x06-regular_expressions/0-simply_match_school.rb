#!/usr/bin/env ruby

# Check if there is an argument
if ARGV.empty?
  puts ""
else
  # Iterate through the command-line arguments
  ARGV.each do |arg|
    # Match the regular expression /School/ in the input argument
    if arg.match(/School/)
      # Print the matched string followed by the end of line character
      puts arg
    else
      # Print an empty line if no match is found
      puts ""
    end
  end
end
