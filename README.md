# Note Taking App Server
=====================================

This is the server-side code for a Note Taking App, built using Node.js and Express.js.

## Overview
------------

This server provides RESTful APIs for creating, reading, updating, and deleting notes. It uses MongoDB as the database and Mongoose as the ORM.

## Dependencies
------------

* Express.js
* MongoDB
* Mongoose
* Cors
* Body-parser
* Dotenv

## Setup
--------

1. Clone the repository
2. Install dependencies using `npm install`
3. Create a `.env` file with:
  -PORT = number
  -MONGODB_URI = your mongoDB route
  -JWT_SECRET = string
  -JWT_EXPIRES_IN = number (in ms)
5. Start the server using `npm start`

## API Endpoints
----------------

* `/auth/notes`: Authentication routes for registering, login, logout
* `/`: Serve static files and render EJS templates with create, read, update, and delete notes functionality

## Configuration
-------------

* `config/db.js`: MongoDB connection settings
* `middlewares/errorHandling.js`: Error handling middleware

## Routes
---------

* `routes/route.js`: Routes for rendering the page with CRUD
* Splash Route
* `/`: (Public/GET) Display splash page until logged in
* User Logged In Route
* `/user/:id`: (Private/GET) Authenticate user and display minimized notes and controls to create/update/delete notes
*   Response Status Code: 200 OK
* Create Route
* `/create`: (Private/POST) Post route to create a new note
*   Request Body: JSON object with title and content properties
*   Response Status Code: 201 Created
* Display and Update Route
* `/note/:id`: (Private/GET) Get a note by ID
*   Params: id (required)
*   Response Status Code: 200 OK
* Update Route
* `/update/:id`: (Private/PUT) Update a note by ID
*   Params: id (required)
*   Request Body: JSON object with title and content properties
*   Response Status Code: 200 OK
* Delete Route
* `/delete/:id`: (Private/DELETE) Delete a note by ID
*   Params: id (required)
*   Response Status Code: 204 No Content
* Middleware
* `isAuthenticated`: Check if user has been authenticated before allowing access to private routes
  
* `routes/authRoute.js`: Routes for authentication
* Register Route
* `/register`: (Public/POST) After filling in the username and password/password confirm form it will add the user to the database
*   Request Body: JSON object with username and password properties
*   Response Status Code: 201 Created
* Login Route
* `/login`: (Public/POST) Will check credentials and on successful entry return a cookie for future authentication
*   Request Body: JSON object with username and password properties
*   Response Status Code: 200 OK
* Logout Route
* `/logout`: (Public/GET) Will logout current user by removing the authentication cookie

## Views
--------

* `views/`: EJS templates for rendering notes and other pages

## Static Files
----------------

* `public/`: Serve static files such as CSS, JS

## License
-------

ISC License

## Author
-------

Maletta
