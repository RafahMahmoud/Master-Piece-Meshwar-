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









// const multer = require('multer');
// const path = require('path');

// // إعداد مكان حفظ الصور واسم الملف
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../uploads')); // مسار مجلد الصور
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // اسم ملف فريد لتجنب التكرار
//   }
// });

// // السماح فقط بملفات الصور
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// // تفعيل multer باستخدام الإعدادات
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 * 5 }, // الحد الأقصى لحجم الملف 5 ميجابايت
//   fileFilter: fileFilter
// });

// module.exports = upload;









// const multer = require('multer');
// const path = require('path');

// // Storage configuration for multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../uploads')); // Save images to 'uploads' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Unique filename using timestamp
//   }
// });

// // Filter to allow only jpeg/png images
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true); // Accept the file
//   } else {
//     cb(null, false); // Reject the file
//   }
// };

// // Multer configuration with size limit and file filter
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 * 5 }, // Max file size: 5 MB
//   fileFilter: fileFilter
// });

// module.exports = upload;
