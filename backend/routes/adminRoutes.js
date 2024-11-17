const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/loginadmin', adminController.login);
router.post('/addadmin', adminController.addAdmin);

module.exports = router;