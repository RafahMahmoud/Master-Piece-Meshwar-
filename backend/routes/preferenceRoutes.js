const express = require("express");
const router = express.Router();
const PreferenceController = require("../controllers/preferenceController");

router.post("/", PreferenceController.create);

module.exports = router;