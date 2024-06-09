const db = require("../db/Config/Db" );
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("../db/node_modules/dotenv/lib/main").config();

const login = (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).send("Server error");
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      const user = results[0];
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
      const token = jwt.sign(
        { id: user.id },
        process.env.REACT_APP_JWT_SECRET,
        { expiresIn: 60 }
      );
      return res.json({ token: token });
    }
  });
};

const register = (req, res) => {
  const { username, password, first_name, last_name } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const query =
    "INSERT INTO users (username, password, first_name, last_name) VALUES (?, ?, ?, ?)";

  db.query(
    query,
    [username, hashedPassword, first_name, last_name],
    (err, results) => {
      if (err) {
        return res.json({ message: "User already exists" });
      } else {
        res.status(201).json({ message: "User registered successfully" });
      }
    }
  );
};

const validateToken = (req, res) => {
  const authHeader = req.headers["authorization"];
  
  if (!authHeader) return res.json({ valid: false });

  const token = authHeader.split(" ")[1];
  if (!token) return res.json({ valid: false });

  jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, user) => {
    if (err) return res.json({ valid: false });
    res.json({ valid: true });
  });
};

module.exports = { login, register, validateToken };
