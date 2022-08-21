# folder structure of all-in-one-hacksprint frontend:

I have divided the frontend design into five different folders namely:

# 1. components Folder -> 
Here all the resusable or small componenets like navbar, cards, footer, food menu , charts etc are present. 

# 2. context Folder -> 
Here all the reusable states are defined. Also this folder is important as it helps in avoiding props drilling.

# 3. helper Folder -> 
Here the pages sharedcontent(common to other components) are defined to avoid writing same code everywhere, instead i created an outlet so that after signin other pages can use it as outlet. 

I also have created protected routes so that a user cannot bypass the login. User must login to see other pages!!

# 4. pages Folder -> 
As the name suggests it contains all the pages used for creating this app. It has a dashboard(landing page after login), error page, item page, order food page, register page, report page, signin page and success message page.

# 5. schema Folder -> 
It contains the schema for every form in page.

# 6. assets Folder ->
It contains all the images used in this project.

# NOTE
You will be logged out if u press the avatar of top right of navbar... and redirected to dashboard if you press the top left icon of navbar