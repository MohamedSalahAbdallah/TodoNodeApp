// Import the Express.js router
const express = require("express");
const router = express.Router();

// Import the database connection
const db = require("../db");

// Import the middleware for validating todo data
const validateTodo = require("../middleware/validateTodo");

// Create a new todo with validation
// This endpoint is used to create a new todo item in the database
router.post("/", validateTodo, (req, res) => {
  // Extract the title and description from the request body
  const { title, description } = req.body;

  // Construct the SQL query to insert the new todo into the database
  const query = "INSERT INTO todos (title, description) VALUES (?, ?)";

  // Execute the SQL query with the title and description as parameters
  db.query(query, [title, description], (err, results) => {
    // If there was an error during the query execution, throw the error
    if (err) throw err;

    // Construct the response object with the inserted todo's id, title, description, and completed status
    const response = {
      id: results.insertId,
      title,
      description,
      completed: false,
    };

    // Send the response object as a JSON response
    res.json(response);
  });
});

// Read all todos
// This endpoint is used to retrieve all the todo items from the database
router.get("/", (req, res) => {
  // Construct the SQL query to retrieve all the todo items from the database
  const query = "SELECT * FROM todos";

  // Execute the SQL query
  db.query(query, (err, results) => {
    // If there was an error during the query execution, throw the error
    if (err) throw err;

    // Send the query results as a JSON response
    res.json(results);
  });
});

// Update a todo with validation
// This endpoint is used to update an existing todo item in the database
router.put("/:id", validateTodo, (req, res) => {
  // Extract the todo id from the request parameters
  const { id } = req.params;

  // Extract the updated title, description, and completed status from the request body
  const { title, description, completed } = req.body;

  // Construct the SQL query to update the todo item in the database
  const query =
    "UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?";

  // Execute the SQL query with the updated data and todo id as parameters
  db.query(query, [title, description, completed, id], (err, results) => {
    // If there was an error during the query execution, throw the error
    if (err) throw err;

    // Construct the response object with a success message
    const response = {
      message: "Todo updated successfully",
    };

    // Send the response object as a JSON response
    res.json(response);
  });
});

// Delete a todo
// This endpoint is used to delete a todo item from the database
router.delete("/:id", (req, res) => {
  // Extract the todo id from the request parameters
  const { id } = req.params;

  // Construct the SQL query to delete the todo item from the database
  const query = "DELETE FROM todos WHERE id = ?";

  // Execute the SQL query with the todo id as a parameter
  db.query(query, [id], (err, results) => {
    // If there was an error during the query execution, throw the error
    if (err) throw err;

    // Construct the response object with a success message
    const response = {
      message: "Todo deleted successfully",
    };

    // Send the response object as a JSON response
    res.json(response);
  });
});

// Export the router object so that it can be used in the application
module.exports = router;
