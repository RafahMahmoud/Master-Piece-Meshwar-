const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const reviewController = require('../controllers/reviewController');

router.post('/', authenticateToken, reviewController.addReview);
router.get('/:outingPlanId', authenticateToken, reviewController.getOutingReviews);
router.put('/:reviewId', authenticateToken, reviewController.updateReview);
router.delete('/:reviewId', authenticateToken, reviewController.softDeleteReview);
router.get('/', reviewController.getAllReviews);
module.exports = router;