// const multer = require('multer');
// const path = require('path');

// // Configure storage for images
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
//   }
// });

// // File filter to allow only images
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// // Apply multer with the storage and file filter
// const upload = multer({ 
//   storage: storage, 
//   limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
//   fileFilter: fileFilter 
// });

// module.exports = upload;


const multer = require('multer');
const path = require('path');

// إعداد مكان حفظ الصور واسم الملف
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); // تأكدي من تحديد المسار النسبي لمجلد `uploads`
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // يضيف الوقت لتجنب تكرار الأسماء
  }
});

// السماح فقط بملفات الصور
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // قبول الملفات
  } else {
    cb(null, false); // رفض الملفات غير الصور
  }
};

// تفعيل `multer` باستخدام الإعدادات
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // الحد الأقصى 5 ميجابايت
  fileFilter: fileFilter
});

module.exports = upload;
