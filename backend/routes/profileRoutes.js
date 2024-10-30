const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const profileController = require('../controllers/profileController');
const upload = require('../middlewares/multerConfig');

router.get('/user-profile', authenticateToken, profileController.getProfile);
router.put('/update-profile', authenticateToken, profileController.updateProfile);
router.post('/profile-picture', authenticateToken, upload.single('profileImage'), profileController.uploadProfilePicture);

module.exports = router;

