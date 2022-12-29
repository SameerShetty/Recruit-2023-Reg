const express = require("express");
const router = express.Router();
const getResults = require("../controller/resultController");

router.get("/", getResults);

module.exports = router;
