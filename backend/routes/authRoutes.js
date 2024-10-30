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



//http://localhost:3003/api/auth/signup
// {
//     "fullName": "rafah",
//     "email": "rafah@gmail.com",
//     "password": "123qwe",
//     "gender": "female",
//     "dateOfBirth": "1998-09-07",
//     "phoneNumber": 1234567890
//   }

//http://localhost:3003/api/auth/login
// {
//     "email": "rafah@gmail.com",
//     "password": "123qwe"
  
//   }

//http://localhost:3003/api/auth/logout

