# Todo List Application

This is a simple todo list application built using Node.js, Express, and MySQL. It allows users to create, read, update, and delete (CRUD) todo items.

## Features

- **Add Todo**: Add a new todo item with a title and description.
- **View Todos**: View all the todo items in a table.
- **Edit Todo**: Edit an existing todo item.
- **Delete Todo**: Delete a todo item.
- **Get Todo by ID**: Fetch a specific todo item by its ID.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MySQL**: Relational database management system.
- **Bootstrap**: CSS framework for styling the frontend.
- **jQuery**: JavaScript library for DOM manipulation.

## Prerequisites

- **Node.js**: Install from [Node.js website](https://nodejs.org/).
- **MySQL**: Install from [MySQL website](https://www.mysql.com/).

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

3. **Set up MySQL database**:

   ```sql
   CREATE DATABASE todo_db;
   USE todo_db;
   CREATE TABLE todos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       completed BOOLEAN DEFAULT FALSE
   );
   ```

4. **Configure the database connection**:
   Update the `routes/todos.js` file with your MySQL connection details:

   ```javascript
   const connection = mysql.createConnection({
     host: "localhost",
     user: "todo_user",
     password: "password",
     database: "todo_db",
   });
   ```

5. **Start the server**:

   ```bash
   npm start
   ```

6. **Open the application**:
   Open your web browser and go to `http://localhost:3000`.

## API Endpoints

### Create a New Todo (POST)

```sh
curl -X POST http://localhost:3000/todos \
-H "Content-Type: application/json" \
-d '{
    "title": "New Todo",
    "description": "This is a new todo item",
    "completed": false
}'
```
