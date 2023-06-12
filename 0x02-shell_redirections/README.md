
O-hello_world


this script prompt hello world to the standard output

#!/bin/bash

echo ""Hello, World"

####################################
1-confused_smiley

this script display Confused Smiley

#!/bin/bash

echo "\"(Ôo)'"

####################################
2-hellofile

#this script will display all content file

#!/bin/bash

cat /etc/passwd


####################################
3-twofiles

#this script will display Data base for the user & Data base for the local Host

#!/bin/bash

cat /etc/passwd /etc/hosts



####################################

4-lastlines

#this script will display last 10 lines

#!/bin/bash

tail -n 10 /etc/passwd



####################################

5-firstlines

#this script will display first 10 lines

#!/bin/bash

head -n 10 /etc/passwd

####################################
6-third_line

#this script will display third line of iacta file

#!/bin/bash

head -n 3 iacta | tail -n 1

####################################

7-file





###########################
8

#this script will duplicate last  line of iacta file

#!/bin/bash

tail -n 1 iacta >> iacta

####################################

10-no_more_js


this script will delete all regular  files with the extension .js

#!/bin/bash
find . -type f -name "*.js" -delete

####################################

11-directories

this script will find  all directories and subdirectories in the current directory
#!/bin/bash
find . -mindepth 1 -type d | wc -l  



####################################

12-directories

this script will find  all directories and subdirectories in the curre\
nt directory
#!/bin/bash
find . -mindepth 1 -type d | wc -l


####################################

13-unique


#!/bin/bash
sort | uniq -u

###############################
14-findhatword

#!/bin/bash
grep "root" /etc/passwd

############################


15-counthatword

#!/bin/bash
grep -c "bin" /etc/passwd 

######################
16-whatsnext

#!/bin/bash
grep -A 3 "root" /etc/passwd
#####################


