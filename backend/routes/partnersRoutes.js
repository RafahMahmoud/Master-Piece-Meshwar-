// const express = require('express');
// const router = express.Router();
// const partnerController = require('../controllers/partnersControllers');

// router.get('/', partnerController.getAllPartners);
// router.post('/', partnerController.createPartner);
// router.put('/:id', partnerController.updatePartnerAcceptance);

// module.exports = router;



const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnersControllers');

router.get('/', partnerController.getAllPartners);
router.post('/', partnerController.createPartner);
router.patch('/:id', partnerController.updatePartner);

module.exports = router;