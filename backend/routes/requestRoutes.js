const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const requestController = require('../controllers/requestController');

router.post('/requests', authenticateToken, requestController.createRequest);

module.exports = router;