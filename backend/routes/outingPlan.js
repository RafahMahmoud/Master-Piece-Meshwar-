const express = require('express');
const router = express.Router();
const outingPlanController = require('../controllers/outingPlanController.js');
const { authenticateToken } = require('../middlewares/authMiddleware.js');


router.post('/check-partner-budget', authenticateToken, outingPlanController.checkPartnerBudget);
router.get('/user', authenticateToken, outingPlanController.getUserOutingPlans);
router.put('/update-status', authenticateToken, outingPlanController.updatePlanStatus);
router.get('/generate-client-token', authenticateToken, outingPlanController.generateClientToken);
router.post('/process-payment', authenticateToken, outingPlanController.processPayment);
router.get('/all', outingPlanController.getAllOutingPlans);
router.get('/previous-outings', authenticateToken, outingPlanController.getPreviousOutings);
router.get('/upcoming-outings', authenticateToken, outingPlanController.getUpcomingOutings);
module.exports = router;