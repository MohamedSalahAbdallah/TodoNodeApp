# Todo List Application

This is a simple todo list application built using Node.js, Express, and MySQL. It allows users to create, read, update, and delete (CRUD) todo items.

## Features

- **Add Todo**: Add a new todo item with a title and description.
- **View Todos**: View all the todo items in a table.
- **Edit Todo**: Edit an existing todo item.
- **Delete Todo**: Delete a todo item.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for Node.js.
- **MySQL**: Relational database to store the todo items.
- **Bootstrap**: CSS framework for styling the frontend.
- **jQuery**: JavaScript library for DOM manipulation and AJAX requests.

## Prerequisites

- **Node.js** and **npm**: Install from [nodejs.org](https://nodejs.org/).
- **MySQL**: Install from [mysql.com](https://www.mysql.com/).

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the MySQL database**:

   - Open MySQL command line or MySQL Workbench.
   - Run the following SQL commands to create the database and table:
     ```sql
     CREATE DATABASE todo_db;
     USE todo_db;
     CREATE TABLE todos (
         id INT AUTO_INCREMENT PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description TEXT NOT NULL,
         completed BOOLEAN DEFAULT FALSE
     );
     ```

4. **Create a MySQL user and grant permissions**:

   ```sql
   CREATE USER 'todo_user'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON todo_db.* TO 'todo_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

5. **Start the application**:

   ```bash
   node index.js
   ```

6. **Open your browser** and navigate to `http://localhost:3000`.

## Project Structure

- **index.js**: Entry point of the application.
- **routes/todos.js**: Express routes for handling CRUD operations.
- **public/index.html**: Main HTML file for the frontend.
- **public/style.css**: CSS file for custom styles.
- **public/script.js**: JavaScript file for handling frontend logic.

## API Endpoints

- **GET /todos**: Retrieve all todo items.
- **POST /todos**: Create a new todo item.
- **PUT /todos/:id**: Update an existing todo item.
- **DELETE /todos/:id**: Delete a todo item.

## Frontend

The frontend is built with HTML and Bootstrap for styling. jQuery is used for making AJAX requests to the backend and dynamically updating the DOM.

## License

This project is licensed under the MIT License.
