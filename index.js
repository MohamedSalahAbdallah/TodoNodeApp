// Importing the required modules
const express = require("express"); // Importing the Express.js module
const bodyParser = require("body-parser"); // Importing the body-parser module
const todoRoutes = require("./routes/todo"); // Importing the routes for the todo list
const path = require("path"); // Importing the path module

// Creating an instance of the Express application
const app = express();

// Defining the port number on which the server will run
const PORT = 3000;

// Using the body-parser middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Using the body-parser middleware to parse incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

// Using the todoRoutes middleware to handle API requests related to the todo list
app.use("/todos", todoRoutes);

// Using the express.static middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Defining a route to serve the HTML file
app.get("/", (req, res) => {
  // Sending the HTML file as a response
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  // Logging a message to the console indicating that the server is running
  console.log(`Server is running on port ${PORT}`);
});

