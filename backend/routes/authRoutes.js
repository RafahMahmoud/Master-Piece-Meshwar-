const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const { authenticateToken } = require('../middlewares/authMiddleware');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/status', authenticateToken, authController.checkAuthStatus);
router.get('/check-status', authenticateToken , (req, res) => {res.status(200).json({ message: 'User is logged in' });});
router.get('/me', authenticateToken, authController.getMe);
router.get('/users',  authController.getAllUsers);
router.patch('/users/:userId/status', authController.toggleUserStatus);
module.exports = router



