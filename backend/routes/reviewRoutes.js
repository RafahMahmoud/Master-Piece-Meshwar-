const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const reviewController = require('../controllers/reviewController');

router.post('/', authenticateToken, reviewController.addReview);
router.get('/:outingPlanId', authenticateToken, reviewController.getOutingReviews);

module.exports = router;