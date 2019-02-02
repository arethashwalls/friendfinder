# [Not So Different](https://radiant-stream-15157.herokuapp.com/)
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
    * [`htmlRoutes.js`](/app/routing/htmlRoutes.js) contains the GET routes for *Not So Different*'s two pages.
* A `gitignore` file
* NPM's `package-lock.json` and `package.json` files.
* This `readme`.
* A [`server.js`](/server.js) file for setting up the Express server.

### Application:

**Not So Different** is a full-stack application.

#### Front End

On the client side, the user fills out a survey. The [front-end JavaScript](/app/public/assets/script.js) waits for a click event on the submit button then captures the form values and posts them to the survey.

As an experiment, I decided to try writing the front-end code without any external libraries. While some syntax (especially the Fetch API) might have been better implemented with a library, I've completed several projects with Axios or JQuery and wanted to try something different.

`script.js` contains two other pieces of functionality; one for closing the modal that appears after the POST request is sent, and one for loading default images if any image links break.

For styling, I had fun and embraced the middle-school-ish theme.

#### Data

[`friends.js`](/app/data/friends.js) holds an array of friends (or, as it turned out, villians) as well as a helper method that generates random test scores. While the test may have been more fun if I'd filled out custom answers for each character, that wasn't really the focus of the assignment and I wanted to save time.

For this particular application, we weren't asked to create persistant storage, so the array will only persist as long as the server is live.

#### Routing

The application's HTML routes are both simple GET routes.

The API POST route includes the logic for determining the closest match. 

#### Server

[`server.js`](server.js) is mostly boilerplate and sets up our server.
