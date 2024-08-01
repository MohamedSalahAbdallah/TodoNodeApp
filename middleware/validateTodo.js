// This file contains a middleware function that validates a todo object against a schema

// Importing the Joi library for schema validation
const Joi = require("joi");

// Defining a Joi schema for todo objects
// The schema specifies the expected structure and types of properties in a todo object
const todoSchema = Joi.object({
  // The "title" property must be a string, and must be between 3 and 255 characters long (inclusive)
  title: Joi.string().min(3).max(255).required(),
  // The "description" property is optional and can be a string from 5 to 1024 characters long (inclusive)
  description: Joi.string().min(5).max(1024),
  // The "completed" property is optional and must be a boolean
  completed: Joi.boolean(),
});

// Defining a middleware function that validates todo objects against the schema
function validateTodo(req, res, next) {
  // Validating the request body against the schema
  const { error } = todoSchema.validate(req.body);
  // If there is an error, the request body does not match the schema
  // In this case, we send a 400 Bad Request response with the first error message as the response body
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // If there is no error, the request body matches the schema
  // We call the "next" function to pass control to the next middleware or route handler
  next();
}

// Exporting the middleware function so it can be used in other parts of the application
module.exports = validateTodo;

