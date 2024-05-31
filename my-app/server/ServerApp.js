const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();


//Setting Up Server and Port
const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;

//Parsing 
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// Database connection
const db = mysql.createConnection({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_NAME
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(username);
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (results.length === 0) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else {
      return res.json(results);
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password, first_name, last_name } = req.body;
  const query = 'INSERT INTO users (username, password, first_name, last_name) VALUES (?, ?, ?, ?)';
  db.query(query, [username, password, first_name, last_name], (err, results) => {
    if (err) {
      return res.json({ message: 'User already exist' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Database connected!');
});