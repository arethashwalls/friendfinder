# Not So Different
## A simple full-stack application that matches users based on survey responses, built for UA Coding Bootcamp.

**Not So Different** is a mock-dating-site that provides users with ten Likert-style questions then determines then returns their closest match, based on the FriendFinder homework assignment for UA Coding Bootcamp.

*Not So Different* uses:

* The [Node.js](https://nodejs.org/en/) runtime environment.
* The [Express](https://expressjs.com/) framework.

### Contents:

* `app` contains all local files required by the server.
  * `data` contains one file, [`friends.js`](/app/data/friends.js), which holds the default array of friends for export to the friends API.
  * `public` contains the remaining static files.
    * `assets` contains all images, stylesheets, webfonts, and the front-end script for handling events and AJAX calls, [`script.js`](/app/public/assets/script.js).
  * `routing` contains two JS files.
    * [`apiRoutes.js`](/app/routing/apiRoutes.js) contains GET and POST routes for the friends API, as well as the necessary functions for finding and returning the closest match for the posted profile.
    * [htmlRoutes.js`](/app/routing/htmlRoutes.js) contains the GET routes for *Not So Different*'s two pages.
* A `gitignore` file
* NPM's `package-lock.json` and `package.json` files.
* This `readme`.
* A [`server.js`](/server.js) file for setting up the Express server.
