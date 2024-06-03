const express = require("express");
const router = express.Router();
const { checkBreachedAccount, getPwnedData } = require("../Controllers/BreachController");

router.post("/api/breachedaccount", checkBreachedAccount);
router.get("/api/breachednumber", getPwnedData);

module.exports = router;
