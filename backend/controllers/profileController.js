const User = require('../models/users');

// الحصول على بيانات المستخدم
exports.getProfile = async (req, res) => {
    try {
      const userId = req.user.id;  // ربما هنا الخطأ إذا لم يصل الـ `user` كما هو متوقع.
      console.log("User ID from token:", userId); // تتبع الـ `userId`
      
      const user = await User.findById(userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error in getProfile:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { fullName, email,gender,dateOfBirth,phoneNumber } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { fullName, email,gender,dateOfBirth,phoneNumber },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.uploadProfilePicture = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findByIdAndUpdate(
      userId,
      { profilePic: `uploads/${req.file.filename}` }, // حفظ مسار الصورة
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user); // إرسال بيانات المستخدم مع الصورة
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image' });
  }
};
