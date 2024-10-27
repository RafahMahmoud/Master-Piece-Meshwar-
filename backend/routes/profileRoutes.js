// const express = require('express');
// const router = express.Router();
// const upload = require('../middlewares/multerConfig');
// const Profile = require('../models/Profile'); // Import Profile model

// // Route to update profile picture
// router.post('/profile/upload', upload.single('profileImage'), async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.user.id);
//     profile.image = req.file.path; // Save the image path
//     await profile.save();
//     res.json({ message: 'Profile image updated', profile });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating profile image' });
//   }
// });

// router.get('/profile', async (req, res) => {
//     try {
//       const profile = await Profile.findById(req.user.id); // `req.user` يأتي من التوكن
//       if (!profile) return res.status(404).json({ message: 'Profile not found' });
//       res.json(profile);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching profile' });
//     }
//   });
//   router.put('/profile', async (req, res) => {
//     const { name, birthday, city } = req.body;
//     try {
//       const profile = await Profile.findById(req.user.id); // `req.user` من التوكن
//       if (!profile) return res.status(404).json({ message: 'Profile not found' });
  
//       profile.name = name || profile.name;
//       profile.birthday = birthday || profile.birthday;
//       profile.city = city || profile.city;
  
//       await profile.save();
//       res.json({ message: 'Profile updated', profile });
//     } catch (error) {
//       res.status(500).json({ message: 'Error updating profile' });
//     }
//   });
  




// const express = require('express');
// const router = express.Router();
// const { getUserProfile, updateUserProfile } = require('../controllers/profileController'); // تأكد من صحة المسار

// // Route للحصول على بيانات المستخدم
// router.get('/user-profile', getUserProfile); // تأكد من أن `getUserProfile` هو دالة معالجة

// // Route لتحديث بيانات المستخدم
// router.put('/update-profile', updateUserProfile); // تأكد من أن `updateUserProfile` هو دالة معالجة

// module.exports = router;

const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const profileController = require('../controllers/profileController');
const upload = require('../middlewares/multerConfig');

router.get('/user-profile', authenticateToken, profileController.getProfile);
router.put('/update-profile', authenticateToken, profileController.updateProfile);
router.post('/profile-picture', authenticateToken, upload.single('profileImage'), profileController.uploadProfilePicture);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../models/users');
// const auth = require('../middlewares/authMiddleware'); 


// router.get('/profile', auth, async (req, res) => {
//   try {
//     const userId = req.user._id; 
//     const user = await User.findById(userId).select('-password'); 
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user); 
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;




// router.put('/profile', auth, async (req, res) => {
//     try {
//       const userId = req.user._id; 
//       const { name, birthday, city } = req.body;
  
//       const user = await User.findByIdAndUpdate(
//         userId,
//         { name, birthday, city }, 
//         { new: true }
//       );
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  
//   module.exports = router;




//  // routes/user.js

// const multer = require('multer');
// const path = require('path');

// // تحديد مكان حفظ الملفات وأنواع الملفات المسموح بها
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/profile-pictures'); // تحديد مجلد التخزين
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`); // اسم الملف
//   },
// });

// // فلترة نوع الملف
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   if (extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// };

// // إعداد multer
// const upload = multer({
//   storage,
//   limits: { fileSize: 1024 * 1024 * 5 }, // الحد الأقصى لحجم الصورة 5MB
//   fileFilter,
// });

// // Route لتحميل الصورة
// router.post('/profile-picture', auth, upload.single('profileImage'), async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { profilePicture: req.file.path }, // تحديث مسار الصورة
//       { new: true }
//     );
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Error uploading image' });
//   }
// });

// module.exports = router;
 