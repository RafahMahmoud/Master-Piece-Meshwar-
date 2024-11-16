const express = require('express');
const router = express.Router();
const partnerController = require('../controllers/partnersControllers');
const upload = require('../middlewares/multerConfig');


router.get('/', partnerController.getAllPartners);
router.post('/', partnerController.createPartner);
router.patch('/:id', partnerController.updatePartner);
router.post('/partner-logo',upload.single('logoPic'), partnerController.uploadPartnerLogo);
router.patch('/:id/company-details', partnerController.updateCompanyDetails);
module.exports = router;




// const express = require('express');
// const router = express.Router();
// const partnerController = require('../controllers/partnersControllers');
// const upload = require('../middlewares/multerConfig'); // استدعاء إعدادات multer

// router.get('/', partnerController.getAllPartners);
// router.post('/', upload.single('logoPic'), partnerController.createPartner);
// router.patch('/:id', upload.single('logoPic'), partnerController.updatePartner);

// module.exports = router;

