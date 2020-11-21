Recipe API
========

Recipe API serves as a simple backend component integrated with a NoSQL database to serve request raised by client side.
It aids in protoyping client side, without worrying about designing the server side scripts.

It is easy to use:

    Run the application using : node ./bin/www

    Set the target to http://localhost:9000/
    

API
--------

- /recipe : GET : Gets the list of recipes
- /recipe : POST : Add recipe to List
- /recipe/filter : GET (requires JSON payload) : Get the list of recipe that matches key:value pairs
                                                    {key1 : value1, key2 : value2, ...}
- /recipe/:id : GET : Get information about a recipe by id
- /recipe/:id : POST : Edit the information of recipe


- /user : GET : Gets the list of users
- /user : POST : Add user to List
- /user/:id : GET : Get information about a user by id
- /user/:id : POST (requires JSON payload): Edit the information of the user

 Installation
------------

fork the project from {github link}
Make sure to install the app in the root directory of your project.

root
|---client
|---install here
    
install its dependencies: npm install


Contribute
----------

<!-- - Issue Tracker: github.com/RecipeAPI/RecipeAPI/issues -->
- Source Code: github.com/RecipeAPI/RecipeAPI

<!-- Support
-------

If you are having issues, please let us know.
We have a mailing list located at: project@google-groups.com -->

License
-------

The project is licensed under the BSD license.