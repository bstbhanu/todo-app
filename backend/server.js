// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection configuration – update these with your MySQL credentials
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'liverpoolynwa29',
//   database: 'todo_app'
// });

// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     console.error('Database connection error:', err);
//     return;
//   }
//   console.log('MySQL connected...');
// });

// // CRUD Endpoints

// // Get all tasks
// app.get('/tasks', (req, res) => {
//   const query = "SELECT * FROM tasks";
//   db.query(query, (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json(results);
//   });
// });

// // Create a new task
// app.post('/tasks', (req, res) => {
//   const { name, description, status } = req.body;
//   const query = "INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)";
//   db.query(query, [name, description, status], (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json({ id: result.insertId, name, description, status });
//   });
// });

// // Update an existing task
// app.put('/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const { name, description, status } = req.body;
//   const query = "UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?";
//   db.query(query, [name, description, status, taskId], (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json({ message: "Task updated successfully" });
//   });
// });

// // Delete a task
// app.delete('/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const query = "DELETE FROM tasks WHERE id = ?";
//   db.query(query, [taskId], (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json({ message: "Task deleted successfully" });
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection configuration – update these with your MySQL credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'liverpoolynwa29',  // Ensure this is the correct password for your MySQL root user
  database: 'todo_app',
  authPlugins: {
    mysql_native_password: mysql.authPlugins.mysql_native_password  // Ensures compatibility with mysql_native_password if needed
  }
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('MySQL connected...');
});

// CRUD Endpoints

// Get all tasks
app.get('/tasks', (req, res) => {
  const query = "SELECT * FROM tasks";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Create a new task
app.post('/tasks', (req, res) => {
  const { name, description, status } = req.body;
  const query = "INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)";
  db.query(query, [name, description, status], (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ id: result.insertId, name, description, status });
  });
});

// Update an existing task
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { name, description, status } = req.body;
  const query = "UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?";
  db.query(query, [name, description, status, taskId], (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "Task updated successfully" });
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const query = "DELETE FROM tasks WHERE id = ?";
  db.query(query, [taskId], (err, result) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json({ message: "Task deleted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
