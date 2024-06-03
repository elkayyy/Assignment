const express = require("express");
const router = express.Router();
const { checkBreachedAccount } = require("../Controllers/BreachController");

router.post("/api/breachedaccount", checkBreachedAccount);

module.exports = router;
