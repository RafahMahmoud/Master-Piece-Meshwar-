// require('dotenv').config();
// const express = require("express");
// const cors = require("cors");
// const cookieParser = require('cookie-parser');
// const port = 3003;
// const app = express();
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
// const postRoutes = require('./routes/postRoutes')
// const partnerRoutes = require('./routes/partnersRoutes');
// const requestRoutes = require('./routes/requestRoutes');
// const profileRoutes = require('./routes/profileRoutes');
// const partRoutes = require('./routes/outingPlan');

// const connectDB = require('./config/db');

// connectDB(); 
// app.use(cookieParser());
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:5173', 
//   credentials: true,
//   methods: ['GET', 'POST','PATCH', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// app.use(bodyParser.json());

// app.get('/api/users/search', async (req, res) => {
//   const { term } = req.query;
//   try {
//     const users = await User.find({
//       $or: [
//         { fullName: { $regex: term, $options: 'i' } },
//         { email: { $regex: term, $options: 'i' } }
//       ]
//     }).limit(10);
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error searching users', error: error.message });
//   }
// });
// app.use("/api/auth", authRoutes);
// app.use("/api/info", profileRoutes);
// app.use('/api', requestRoutes);
// app.use('/api/partners', partnerRoutes);
// app.use('/api/partners', partRoutes);
// app.use('/api/posts', postRoutes);


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3003;
const app = express();

// Routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const partnerRoutes = require('./routes/partnersRoutes');
const requestRoutes = require('./routes/requestRoutes');
const profileRoutes = require('./routes/profileRoutes');
const partRoutes = require('./routes/outingPlan');

// اتصال بقاعدة البيانات
const connectDB = require('./config/db');
connectDB();

// إعدادات الوسطى
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// توفير مجلد `uploads` كملفات ثابتة للوصول إلى الصور المرفوعة
app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// تضمين نموذج `User` لاستخدامه في البحث
const User = require('./models/users');

// مسار البحث عن المستخدمين
app.get('/api/users/search', async (req, res) => {
  const { term } = req.query;
  try {
    const users = await User.find({
      $or: [
        { fullName: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } }
      ]
    }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error: error.message });
  }
});

// ربط المسارات المختلفة
app.use("/api/auth", authRoutes);
app.use("/api/info", profileRoutes);
app.use('/api', requestRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/partners', partRoutes);
app.use('/api/posts', postRoutes);

// تشغيل الخادم
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
