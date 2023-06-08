#!/bin/bash

#################################################################

0-iam_betty

chown betty hello
this  script  switches to  the current  user 

#################################################################





#################################################################

1-who_am_i

chown betty hello
this  script  will tell who you are  user or root etc

#################################################################




#################################################################


2groups

groups 

this  script  will tell who you are  user or root etc

#################################################################






#################################################################

3-new_owner

chown betty hello

will  changes the owner of the file hello to the user betty

#################################################################






#################################################################


4-Empty 

touch hello
this script that creates an empty file called hello. 




#################################################################






#################################################################

5  Execute

chmod u+x hello

this  script will  adds execute permission to the owner of the file hello.




#################################################################




#################################################################


6- Multiple permissions

chmod u+x,g+x,o+r hello

this  script that adds execute permission to the owner and the group owner, 


#################################################################







################################################################

7- Everybody

chmod ugo+x hello

this script that adds execution permission to the owner, 

the group owner and the other users, to the file hello

#################################################################



################################################################
8-James Bond

chmod 007 hello

this   script that sets the permission to the file hello as follows:

#################################################################





################################################################

9 John Doe

chmod 753 hello

Write a script that sets the mode of the file hello to this:


#################################################################




################################################################

10- Look in the mirror

olleh_mode=$(stat -c "%a" olleh)
chmod "$olleh_mode" hello

this  script that sets the mode of the file hello the same as do other file.

#################################################################









################################################################


11 Directories
find . -type d -exec chmod 755 {} +


this script that adds execute permission to all subdirectories of the current directory 




#################################################################




##############################################################

12. More directories

mkdir -m 751 my_dir

this  script that creates a directory called my_dir with permissions 751 in the working directory.



#################################################################





##############################################################

13-Change group

chown :school hello

this  script that changes the group owner to school for the file hello


#################################################################




