##Repo name alx-system_engineering_devops
##this repo contain a file name 4-listmorefiles display current directory including hidden files 
##script

#!/bin/bash
ls -al

end script

#############################################################################

0-current_working_directory
#!/bin/bash
pwd

this script will Write a script that prints the absolute path name of the current working directory.

###############################################################################

File: 1-listit

#!/bin/bash
ls

Display the contents list of your current directory.



###############################################################################

###############################################################################

2-bring_me_home

#!/bin/bash
cd ~

to do user home directory



###############################################################################

##############################################################################
3-listfiles

#!/bin/bash
ls -l

Display current directory contents in a long format



###############################################################################

##############################################################################

4-listmorefiles

#!/bin/bash
ls -al

Display current directory contents, including hidden files (starting with .). Use the long format



###############################################################################

##############################################################################

5-listfilesdigitonly

display current directory long format with user and group and hidden files

#!/bin/bash
ls -aln

###############################################################################

6-firstdirectory

create a script created a direct full name including tmp/and the name of the directory
#!bin/bash
mkdir -p /tmp/my_first_directory

################################################################################

7-movethatfile

move file from tmp to /tmp/my_first_directory
#!/bin/bash
mv betty /tmp/my_first_directory

##########################################################################

##########################################################################

8-firstdelete

#!/bin/bash
rm /tmp/my_first_directory/betty



###############################################################################

##########################################################################

9-firstdirdeletion

#!/bin/bash
rmdir /tmp/my_first_directory



###############################################################################

##########################################################################

10-back

#!/bin/bash

cd -

#########################################################################

##########################################################################

11-lists

#!/bin/bash
ls -la . .. /boot



###############################################################################












