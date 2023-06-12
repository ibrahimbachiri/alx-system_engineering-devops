this script prompt hello world to the standard output

#!/bin/bash

echo "\"(Ôo)'"

####################################

this script display Confused Smiley

#!/bin/bash

echo "\"(Ôo)'"

####################################

#this script will display all content file

#!/bin/bash

cat /etc/passwd


####################################

#this script will display Data base for the user & Data base for the local Host

#!/bin/bash

cat /etc/passwd /etc/hosts



####################################

#this script will display last 10 lines

#!/bin/bash

tail -n 10 /etc/passwd



####################################

#this script will display first 10 lines

#!/bin/bash

head -n 10 /etc/passwd

####################################

#this script will display thuird line of iacta file

#!/bin/bash

head -n 3 iacta | tail -n 1

####################################

9- 9-duplicate_last_line

#this script will duplicate last  line of iacta file

#!/bin/bash

tail -n 1 iacta >> iacta 