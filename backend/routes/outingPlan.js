// const express = require('express');
// const router = express.Router();
// const partnerController = require('../controllers/outingPlanController.js.js');

// // Route for checking the partner services within a budget
// router.post('/check-partner-budget', partnerController.checkPartnerBudget);

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const outingPlanController = require('../controllers/outingPlanController.js');

// router.post('/check-partner-budget', outingPlanController.checkPartnerBudget);
// router.get('/user/:userId', outingPlanController.getUserOutingPlans);
// router.put('/update-status', outingPlanController.updatePlanStatus);

// module.exports = router;




const express = require('express');
const router = express.Router();
const outingPlanController = require('../controllers/outingPlanController.js');
const { authenticateToken } = require('../middlewares/authMiddleware.js');

// Route to check partner budget, uses token for user identification
router.post('/check-partner-budget', authenticateToken, outingPlanController.checkPartnerBudget);

// Route to get user outing plans, user id is obtained from token
router.get('/user', authenticateToken, outingPlanController.getUserOutingPlans);

// Route to update outing plan status, requires authentication
router.put('/update-status', authenticateToken, outingPlanController.updatePlanStatus);

module.exports = router;
