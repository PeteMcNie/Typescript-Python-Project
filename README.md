# Typescript-React--Boilerplate

A bolier plate to get started on typescript-react projects quicker.

## Python venv setup:
- In terminal of project:
- 1. $ python3 -mvenv venv (Create virtual environment)
- 2. Put venv in .gitignore
- 3. $ source venv/bin/activate (Activate environment, you will see name of enviroment activated on left-side of terminal)
     $ deactivate (To get out of virtual environent in terminal)
- 4. $ vim requirements.txt (create requirements file which specifies packages for this project (think package.json for python))
- 5. Inside vim:
     - I to insert text:
     - type in name & version number of packages eg: flask==1.1.2 
     - To exit and save vim: Hit ESC after inserting, then type :wq to save and quit.
- 6. $ pip install -r requirements.txt (Installs dependencies inside requirements)

## Frontend localhost
- Frontend localhost is setup for this project on localhost:3000

## Backend localhost
- Currently the flask default is used, localhost:5000
