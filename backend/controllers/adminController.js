const Admin = require('../models/admins');
const jwt = require('jsonwebtoken');


const adminController = {

  addAdmin: async (req, res) => {
    try {
      const { username, email, password } = req.body;

     
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'جميع الحقول مطلوبة.' });
      }

  
      const admin = new Admin({
        username,
        email,
        password,
      });

 
      const savedAdmin = await admin.save();
      res.status(201).json({ message: 'تمت إضافة المسؤول بنجاح.', admin: savedAdmin });
    } catch (error) {
      console.error('Error adding admin:', error);
      res.status(500).json({ message: 'حدث خطأ داخلي.' });
    }
  },


  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'البريد الإلكتروني وكلمة المرور مطلوبان.' });
      }


      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: 'المسؤول غير موجود.' });
      }


      if (password !== admin.password) {
        return res.status(401).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيح.' });
      }


      const token = jwt.sign({ id: admin._id, email: admin.email }, 'your_jwt_secret_key', {
        expiresIn: '1h',
      });

      res.status(200).json({ message: 'تم تسجيل الدخول بنجاح.', token });
    } catch (error) {
      console.error('Error during admin login:', error);
      res.status(500).json({ message: 'حدث خطأ داخلي.' });
    }
  },
};

module.exports = adminController;