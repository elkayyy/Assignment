const express = require("express");
const router = express.Router();
const { login, register, validateToken } = require("../Controllers/AuthController");

router.post("/login", login);
router.post("/register", register);
router.post("/validateToken", validateToken)

module.exports = router;
