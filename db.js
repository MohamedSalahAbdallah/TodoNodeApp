
// Import the mysql2 package
const mysql = require("mysql2");

// Create a new MySQL connection object
// The connection object contains the configuration details for the MySQL server
const connection = mysql.createConnection({
  // The hostname of the MySQL server
  // In this case, it is set to "localhost" which means the server is running on the same machine as the application
  host: "localhost",
  
  // The username to use when connecting to the MySQL server
  // In this case, it is set to "todo_user"
  user: "todo_user",
  
  // The password to use when connecting to the MySQL server
  // Replace "your_password" with the actual password for the "todo_user" account
  password: "your_password",
  
  // The name of the database to use
  // In this case, it is set to "todo"
  database: "todo",
});

// Connect to the MySQL server using the configuration details provided in the connection object
// The callback function is executed when the connection is successfully established or when an error occurs
connection.connect((err) => {
  // If an error occurs during the connection, throw the error to indicate that there was a problem
  if (err) throw err;
  
  // If the connection is successful, log a message to the console indicating that the connection was established
  console.log("Connected to the MySQL server.");
});

// Export the connection object so that it can be used in other parts of the application
module.exports = connection;

