## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do. 


#### add
the add command stages the files that are ready to be committed and tell Git to start tracking changes made to the file. 

#### branch
makes a copy of the master that you can make separate commits to.

#### checkout
changes the file back to how it was at the last commit. Use to switch between branches.

#### clone
makes a copy of an existing git repository.

#### commit
takes a snapshot of the change you've made to the file and store it to the repository. 

#### fetch
Similar to git pull except it won't do any merge. It creates a local copy of the remote branch.

#### log
a record of all the changes you've made to the repository.

#### merge
merges the changes you've made on a branch into the master branch.

#### pull
pull the changes other people have made to your project. 

#### push
tells git where to place the commits.

#### reset
unstages a file

#### rm
stage the files you want to remove and also removes the files.

#### status
git status allows you to check the current state of the project you're working on in the repository.

## Release 4: Git Workflow

- Push files to a remote repository
after adding adding a remote repository, do git push-u "remote name" master

- Fetch changes
1. check current remote with git remote -v
2. set up a new remote by git remote add "remote name" "URL of repository that you want to fetch change from"
3. git fetch "remote name"
4. git branch -va
5. git branch to make sure you are on  the master branch
6. git merge "remote name"/master
7. sync by git commit -m "desc of change"

- Commit locally
1. do git add "filename" to stage the change
2. then git commit -m "desc. of changes"

## Release 5: Reflection

I think it was good to learn how to use git with command lines even though it was certainly very convenient to just
use the GitHub app to manage your repo. It was interesting to see sort of "behind the scene" how to make and store changes to our repo.  This challenge was fairly straight forward as all you need to do is follow the instructions so there really wasn't a concept that was difficult to grasp. I think now I am fairly comfortable with adding and pushing changes using the command line.
