const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const authRoutes = require("./Routes/AuthRoutes");
const breachRoutes = require("./Routes/BreachRoutes");

app.use(authRoutes);
app.use(breachRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});