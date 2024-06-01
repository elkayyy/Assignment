const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios');
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


app.post('/api/breachedaccount', async (req, res) => {
  const email = req.body.email;

  try {
      const response = await axios.get(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`, {
          headers: {
              'hibp-api-key': process.env.REACT_APP_API_KEY,
              'user-agent': 'PwnedChecker/1.0 (contact@yourdomain.com)', 
          },
      });

      const additionalInfo = response.data.map(breach => ({
        name: breach.Name,
        title: breach.Title,
        domain: breach.Domain,
        breachDate: breach.BreachDate,
        description: breach.Description,
        logoPath: breach.LogoPath
    }));
 
      res.json(response.data);
  } catch (error) {
      if (error.response && error.response.status === 404) {
          res.status(404).json([]);
      } else {
          console.error('Error fetching breach data:', error);
          res.status(500).json({ message: 'An error occurred while checking breaches.' });
      }
  }
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Database connected!');
});