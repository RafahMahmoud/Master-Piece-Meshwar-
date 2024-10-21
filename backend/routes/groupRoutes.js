const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const  { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/create', authenticateToken, groupController.createGroup);
router.get('/', authenticateToken, groupController.getGroups);

module.exports = router;