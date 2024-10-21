const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/rr');

// Route for checking the partner services within a budget
router.post('/check-partner-budget', partnerController.checkPartnerBudget);

module.exports = router;