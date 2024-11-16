// const Partner = require('../models/partners');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     from: 'ayaalrimawi406@gamail.com',
//     pass: 'admt rsfo lxki xrzx'     
//   }
// });

// exports.getAllPartners = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = 4;
//     const skip = (page - 1) * limit;

//     const totalPartners = await Partner.countDocuments({ isDeleted: false });
//     const totalPages = Math.ceil(totalPartners / limit);

//     const partners = await Partner.find({ isDeleted: false })
//       .skip(skip)
//       .limit(limit)
//       .sort({ createdAt: -1 });

//     res.json({
//       partners,
//       pagination: {
//         currentPage: page,
//         totalPages,
//         totalPartners,
//         partnersPerPage: limit
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Add softDeletePartner function
// exports.softDeletePartner = async (req, res) => {
//   try {
//     const partner = await Partner.findByIdAndUpdate(
//       req.params.id,
//       { isDeleted: true },
//       { new: true }
//     );

//     if (!partner) {
//       return res.status(404).json({ message: 'Partner not found' });
//     }

//     // Send email notification about deletion
//     const mailOptions = {
//       from: 'ayaalrimawi406@gmail.com',
//       to: partner.businessEmail,
//       subject: 'Partnership Account Deleted',
//       html: `
//         <h1>Account Deleted</h1>
//         <p>Dear ${partner.fullName},</p>
//         <p>We regret to inform you that your partnership account with Meshwar has been deleted.</p>
//         <p>If you believe this is a mistake, please contact our support team.</p>
//         <p>Best regards,<br>Meshwar Team</p>
//       `
//     };

//     await transporter.sendMail(mailOptions);
//     res.json({ message: 'Partner successfully deleted', partner });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Modify updatePartner to include email notifications
// exports.updatePartner = async (req, res) => {
//   try {
//     const partner = await Partner.findById(req.params.id);
//     if (!partner) return res.status(404).json({ message: 'Partner not found' });

//     // Handle updating specific fields
//     if (req.body.isAccepted !== undefined) {
//       partner.isAccepted = req.body.isAccepted;
      
//       // Send email notification about status change
//       const mailOptions = {
//         from: 'ayaalrimawi406@gmail.com',
//         to: partner.businessEmail,
//         subject: `Partnership Application ${req.body.isAccepted ? 'Accepted' : 'Rejected'}`,
//         html: `
//           <h1>Partnership Application Update</h1>
//           <p>Dear ${partner.fullName},</p>
//           <p>Your partnership application with Meshwar has been ${req.body.isAccepted ? 'accepted' : 'rejected'}.</p>
//           ${req.body.isAccepted ? 
//             `<p>Welcome to the Meshwar family! We look forward to working with you.</p>` : 
//             `<p>We appreciate your interest in partnering with us. If you have any questions, please don't hesitate to contact us.</p>`
//           }
//           <p>Best regards,<br>Meshwar Team</p>
//         `
//       };

//       await transporter.sendMail(mailOptions);
//     }

//     // ... rest of the existing updatePartner code ...

//     const updatedPartner = await partner.save();
//     res.json(updatedPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.createPartner = async (req, res) => {
//   const partnerData = req.body;

//   // Remove empty fields for business types
//   if (!partnerData.cafe || (Object.keys(partnerData.cafe).length === 0)) {
//     delete partnerData.cafe;
//   }
//   if (!partnerData.restaurant || (Object.keys(partnerData.restaurant).length === 0)) {
//     delete partnerData.restaurant;
//   }
//   if (!partnerData.sweetShop || (Object.keys(partnerData.sweetShop).length === 0)) {
//     delete partnerData.sweetShop;
//   }
//   if (!partnerData.activityShop || (Object.keys(partnerData.activityShop).length === 0)) {
//     delete partnerData.activityShop;
//   }

//   const partner = new Partner(partnerData);

//   try {
//     const newPartner = await partner.save();
//     res.status(201).json(newPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updatePartner = async (req, res) => {
//   try {
//     const partner = await Partner.findById(req.params.id);
//     if (!partner) return res.status(404).json({ message: 'Partner not found' });

//     // Handle updating specific fields
//     if (req.body.isAccepted !== undefined) {
//       partner.isAccepted = req.body.isAccepted;
//     }

//     if (req.body.businessType) {
//       partner.businessType = req.body.businessType;
      
//       // Reset all business type fields
//       partner.restaurant = undefined;
//       partner.cafe = undefined;
//       partner.sweetShop = undefined;
//       partner.activityShop = undefined;

//       // Set the fields for the selected business type
//       switch (req.body.businessType) {
//         case 'restaurant':
//           partner.restaurant = {
//             mealPrice: req.body.restaurant.mealPrice,
//             cuisineType: req.body.restaurant.cuisineType
//           };
//           break;
//         case 'cafe':
//           partner.cafe = {
//             hotDrinks: req.body.cafe.hotDrinks,
//             coldDrinks: req.body.cafe.coldDrinks,
//             dessertTypes: req.body.cafe.dessertTypes,
//             drinkPrice: req.body.cafe.drinkPrice,
//             dessertPrice: req.body.cafe.dessertPrice
//           };
//           break;
//         case 'sweetShop':
//           partner.sweetShop = {
//             dessertTypes: req.body.sweetShop.dessertTypes,
//             dessertPrice: req.body.sweetShop.dessertPrice
//           };
//           break;
//         case 'activityShop':
//           partner.activityShop = {
//             indoorActivities: req.body.activityShop.indoorActivities,
//             outdoorActivities: req.body.activityShop.outdoorActivities,
//             activityPrice: req.body.activityShop.activityPrice
//           };
//           break;
//       }
//     }

//     const updatedPartner = await partner.save();
//     res.json(updatedPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // In partnersControllers.js
// exports.uploadPartnerLogo = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const partner = await Partner.findByIdAndUpdate(
//       req.body.partnerId, // Make sure to send partnerId from frontend
//       { logoPic: `uploads/${req.file.filename}` },
//       { new: true }
//     );

//     if (!partner) {
//       return res.status(404).json({ message: 'Partner not found' });
//     }

//     res.json(partner);
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     res.status(500).json({ message: 'Error uploading image', error: error.message });
//   }
// };



// exports.updateCompanyDetails = async (req, res) => {
//   try {
//     const { companyName, businessEmail, phoneNumber, city, details } = req.body;
    
//     const partner = await Partner.findByIdAndUpdate(
//       req.params.id,
//       {
//         companyName,
//         businessEmail,
//         phoneNumber,
//         city,
//         details
//       },
//       { new: true }
//     );

//     if (!partner) {
//       return res.status(404).json({ message: 'Partner not found' });
//     }

//     res.json(partner);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const Partner = require('../models/partners');
const nodemailer = require('nodemailer');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayaalrimawi406@gmail.com',
    pass: 'admt rsfo lxki xrzx' // Replace with your Google App Password
  }
});

// Test email connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('Error with email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Utility function to send emails
async function sendEmail(to, subject, htmlContent) {
  try {
    const mailOptions = {
      from: 'ayaalrimawi406@gmail.com',
      to: to,
      subject: subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Get all partners with pagination
exports.getAllPartners = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    const totalPartners = await Partner.countDocuments({ isDeleted: false });
    const totalPages = Math.ceil(totalPartners / limit);

    const partners = await Partner.find({ isDeleted: false })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      partners,
      pagination: {
        currentPage: page,
        totalPages,
        totalPartners,
        partnersPerPage: limit
      }
    });
  } catch (error) {
    console.error('Error in getAllPartners:', error);
    res.status(500).json({ message: error.message });
  }
};

// Create new partner
exports.createPartner = async (req, res) => {
  const partnerData = req.body;

  // Remove empty business type fields
  if (!partnerData.cafe || (Object.keys(partnerData.cafe).length === 0)) {
    delete partnerData.cafe;
  }
  if (!partnerData.restaurant || (Object.keys(partnerData.restaurant).length === 0)) {
    delete partnerData.restaurant;
  }
  if (!partnerData.sweetShop || (Object.keys(partnerData.sweetShop).length === 0)) {
    delete partnerData.sweetShop;
  }
  if (!partnerData.activityShop || (Object.keys(partnerData.activityShop).length === 0)) {
    delete partnerData.activityShop;
  }

  const partner = new Partner(partnerData);

  try {
    const newPartner = await partner.save();

    // Send welcome email to new partner
    const welcomeEmailHtml = `
      <h1>Welcome to Meshwar!</h1>
      <p>Dear ${newPartner.fullName},</p>
      <p>Thank you for submitting your partnership application with Meshwar.</p>
      <p>We are reviewing your application and will get back to you soon.</p>
      <p>Best regards,<br>Meshwar Team</p>
    `;

    await sendEmail(
      newPartner.businessEmail,
      'Welcome to Meshwar - Partnership Application Received',
      welcomeEmailHtml
    );

    res.status(201).json(newPartner);
  } catch (error) {
    console.error('Error in createPartner:', error);
    res.status(400).json({ message: error.message });
  }
};

// Soft delete partner
exports.softDeletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // Send deletion notification email
    const emailHtml = `
      <h1>Account Deleted</h1>
      <p>Dear ${partner.fullName},</p>
      <p>We regret to inform you that your partnership account with Meshwar has been deleted.</p>
      <p>If you believe this is a mistake, please contact our support team.</p>
      <p>Best regards,<br>Meshwar Team</p>
    `;

    await sendEmail(
      partner.businessEmail,
      'Partnership Account Deleted',
      emailHtml
    );

    res.json({ message: 'Partner successfully deleted', partner });
  } catch (error) {
    console.error('Error in softDeletePartner:', error);
    res.status(500).json({ message: error.message });
  }
};

// Update partner details including accept/reject status
exports.updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // Handle acceptance status change
    if (req.body.isAccepted !== undefined && partner.isAccepted !== req.body.isAccepted) {
      partner.isAccepted = req.body.isAccepted;
      
      // Prepare and send status update email
      const emailHtml = req.body.isAccepted ? `
        <h1>Partnership Application Accepted</h1>
        <p>Dear ${partner.fullName},</p>
        <p>Congratulations! Your partnership application with Meshwar has been accepted.</p>
        <p>Welcome to the Meshwar family! We look forward to a successful partnership together.</p>
        <p>Best regards,<br>Meshwar Team</p>
      ` : `
        <h1>Partnership Application Status Update</h1>
        <p>Dear ${partner.fullName},</p>
        <p>We regret to inform you that your partnership application with Meshwar has been rejected.</p>
        <p>If you have any questions about this decision, please don't hesitate to contact us.</p>
        <p>Best regards,<br>Meshwar Team</p>
      `;

      await sendEmail(
        partner.businessEmail,
        `Partnership Application ${req.body.isAccepted ? 'Accepted' : 'Rejected'}`,
        emailHtml
      );
    }

    // Handle business type updates
    if (req.body.businessType) {
      partner.businessType = req.body.businessType;
      
      // Reset all business type fields
      partner.restaurant = undefined;
      partner.cafe = undefined;
      partner.sweetShop = undefined;
      partner.activityShop = undefined;

      // Set fields for the selected business type
      switch (req.body.businessType) {
        case 'restaurant':
          partner.restaurant = {
            mealPrice: req.body.restaurant?.mealPrice,
            cuisineType: req.body.restaurant?.cuisineType
          };
          break;
        case 'cafe':
          partner.cafe = {
            hotDrinks: req.body.cafe?.hotDrinks,
            coldDrinks: req.body.cafe?.coldDrinks,
            dessertTypes: req.body.cafe?.dessertTypes,
            drinkPrice: req.body.cafe?.drinkPrice,
            dessertPrice: req.body.cafe?.dessertPrice
          };
          break;
        case 'sweetShop':
          partner.sweetShop = {
            dessertTypes: req.body.sweetShop?.dessertTypes,
            dessertPrice: req.body.sweetShop?.dessertPrice
          };
          break;
        case 'activityShop':
          partner.activityShop = {
            indoorActivities: req.body.activityShop?.indoorActivities,
            outdoorActivities: req.body.activityShop?.outdoorActivities,
            activityPrice: req.body.activityShop?.activityPrice
          };
          break;
      }

      // Send business type update email
      const businessUpdateEmailHtml = `
        <h1>Business Details Updated</h1>
        <p>Dear ${partner.fullName},</p>
        <p>Your business details have been successfully updated in our system.</p>
        <p>Business Type: ${partner.businessType}</p>
        <p>If you notice any discrepancies, please contact our support team.</p>
        <p>Best regards,<br>Meshwar Team</p>
      `;

      await sendEmail(
        partner.businessEmail,
        'Business Details Updated',
        businessUpdateEmailHtml
      );
    }

    const updatedPartner = await partner.save();
    res.json(updatedPartner);
  } catch (error) {
    console.error('Error in updatePartner:', error);
    res.status(400).json({ message: error.message });
  }
};

// Upload partner logo
exports.uploadPartnerLogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const partner = await Partner.findByIdAndUpdate(
      req.body.partnerId,
      { logoPic: `uploads/${req.file.filename}` },
      { new: true }
    );

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // Send logo update confirmation email
    const logoUpdateEmailHtml = `
      <h1>Logo Updated</h1>
      <p>Dear ${partner.fullName},</p>
      <p>Your company logo has been successfully updated in our system.</p>
      <p>If you didn't make this change, please contact our support team immediately.</p>
      <p>Best regards,<br>Meshwar Team</p>
    `;

    await sendEmail(
      partner.businessEmail,
      'Company Logo Updated',
      logoUpdateEmailHtml
    );

    res.json(partner);
  } catch (error) {
    console.error('Error in uploadPartnerLogo:', error);
    res.status(500).json({ message: error.message });
  }
};

// Update company details
exports.updateCompanyDetails = async (req, res) => {
  try {
    const { companyName, businessEmail, phoneNumber, city, details } = req.body;
    
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      {
        companyName,
        businessEmail,
        phoneNumber,
        city,
        details
      },
      { new: true }
    );

    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }

    // Send company details update confirmation email
    const companyUpdateEmailHtml = `
      <h1>Company Details Updated</h1>
      <p>Dear ${partner.fullName},</p>
      <p>Your company details have been successfully updated:</p>
      <ul>
        <li>Company Name: ${companyName}</li>
        <li>Business Email: ${businessEmail}</li>
        <li>Phone Number: ${phoneNumber}</li>
        <li>City: ${city}</li>
      </ul>
      <p>If you didn't make these changes, please contact our support team immediately.</p>
      <p>Best regards,<br>Meshwar Team</p>
    `;

    await sendEmail(
      partner.businessEmail,
      'Company Details Updated',
      companyUpdateEmailHtml
    );

    res.json(partner);
  } catch (error) {
    console.error('Error in updateCompanyDetails:', error);
    res.status(500).json({ message: error.message });
  }
};


// const Partner = require('../models/partners');

// exports.getAllPartners = async (req, res) => {
//   try {
//     const partners = await Partner.find();
//     res.json(partners);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createPartner = async (req, res) => {
//   const partnerData = req.body;

//   // إضافة مسار الصورة المرفوعة إذا كانت موجودة
//   if (req.file) {
//     partnerData.logoPic = `/uploads/${req.file.filename}`; // يمكن تعديل المسار حسب الحاجة
//   }

//   // إزالة الحقول الفارغة إذا كانت موجودة
//   if (!partnerData.cafe || Object.keys(partnerData.cafe).length === 0) delete partnerData.cafe;
//   if (!partnerData.restaurant || Object.keys(partnerData.restaurant).length === 0) delete partnerData.restaurant;
//   if (!partnerData.sweetShop || Object.keys(partnerData.sweetShop).length === 0) delete partnerData.sweetShop;
//   if (!partnerData.activityShop || Object.keys(partnerData.activityShop).length === 0) delete partnerData.activityShop;

//   const partner = new Partner(partnerData);

//   try {
//     const newPartner = await partner.save();
//     res.status(201).json(newPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updatePartner = async (req, res) => {
//   try {
//     const partner = await Partner.findById(req.params.id);
//     if (!partner) return res.status(404).json({ message: 'Partner not found' });

//     // إضافة مسار الصورة المرفوعة إذا كانت موجودة
//     if (req.file) {
//       partner.logoPic = `/uploads/${req.file.filename}`; // تحديث مسار الصورة
//     }

//     // تحديث الحقول حسب الطلب
//     if (req.body.isAccepted !== undefined) {
//       partner.isAccepted = req.body.isAccepted;
//     }

//     if (req.body.businessType) {
//       partner.businessType = req.body.businessType;
//       partner.restaurant = undefined;
//       partner.cafe = undefined;
//       partner.sweetShop = undefined;
//       partner.activityShop = undefined;

//       switch (req.body.businessType) {
//         case 'restaurant':
//           partner.restaurant = {
//             mealPrice: req.body.restaurant.mealPrice,
//             cuisineType: req.body.restaurant.cuisineType
//           };
//           break;
//         case 'cafe':
//           partner.cafe = {
//             hotDrinks: req.body.cafe.hotDrinks,
//             coldDrinks: req.body.cafe.coldDrinks,
//             dessertTypes: req.body.cafe.dessertTypes,
//             drinkPrice: req.body.cafe.drinkPrice,
//             dessertPrice: req.body.cafe.dessertPrice
//           };
//           break;
//         case 'sweetShop':
//           partner.sweetShop = {
//             dessertTypes: req.body.sweetShop.dessertTypes,
//             dessertPrice: req.body.sweetShop.dessertPrice
//           };
//           break;
//         case 'activityShop':
//           partner.activityShop = {
//             indoorActivities: req.body.activityShop.indoorActivities,
//             outdoorActivities: req.body.activityShop.outdoorActivities,
//             activityPrice: req.body.activityShop.activityPrice
//           };
//           break;
//       }
//     }

//     const updatedPartner = await partner.save();
//     res.json(updatedPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };














// const Partner = require('../models/partners');
// const upload = require('../middlewares/multerConfig');  // Assuming multer config is in 'config/multer.js'


// exports.getAllPartners = async (req, res) => {
//   try {
//     const partners = await Partner.find();
//     res.json(partners);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// // Route handler to upload logo image and create partner
// exports.createPartner = async (req, res) => {
//   const partnerData = req.body;
  
//   // Check if a logo image is uploaded
//   if (req.file) {
//     partnerData.logoPic = req.file.path;  // Save the file path in the 'logoPic' field
//   }

//   // Remove empty fields for business types
//   if (!partnerData.cafe || (Object.keys(partnerData.cafe).length === 0)) {
//     delete partnerData.cafe;
//   }
//   if (!partnerData.restaurant || (Object.keys(partnerData.restaurant).length === 0)) {
//     delete partnerData.restaurant;
//   }
//   if (!partnerData.sweetShop || (Object.keys(partnerData.sweetShop).length === 0)) {
//     delete partnerData.sweetShop;
//   }
//   if (!partnerData.activityShop || (Object.keys(partnerData.activityShop).length === 0)) {
//     delete partnerData.activityShop;
//   }

//   const partner = new Partner(partnerData);

//   try {
//     const newPartner = await partner.save();
//     res.status(201).json(newPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Route handler to update partner and handle logo update
// exports.updatePartner = async (req, res) => {
//   try {
//     const partner = await Partner.findById(req.params.id);
//     if (!partner) return res.status(404).json({ message: 'Partner not found' });

//     // Handle updating specific fields
//     if (req.body.isAccepted !== undefined) {
//       partner.isAccepted = req.body.isAccepted;
//     }

//     if (req.body.businessType) {
//       partner.businessType = req.body.businessType;
      
//       // Reset all business type fields
//       partner.restaurant = undefined;
//       partner.cafe = undefined;
//       partner.sweetShop = undefined;
//       partner.activityShop = undefined;

//       // Set the fields for the selected business type
//       switch (req.body.businessType) {
//         case 'restaurant':
//           partner.restaurant = {
//             mealPrice: req.body.restaurant.mealPrice,
//             cuisineType: req.body.restaurant.cuisineType
//           };
//           break;
//         case 'cafe':
//           partner.cafe = {
//             hotDrinks: req.body.cafe.hotDrinks,
//             coldDrinks: req.body.cafe.coldDrinks,
//             dessertTypes: req.body.cafe.dessertTypes,
//             drinkPrice: req.body.cafe.drinkPrice,
//             dessertPrice: req.body.cafe.dessertPrice
//           };
//           break;
//         case 'sweetShop':
//           partner.sweetShop = {
//             dessertTypes: req.body.sweetShop.dessertTypes,
//             dessertPrice: req.body.sweetShop.dessertPrice
//           };
//           break;
//         case 'activityShop':
//           partner.activityShop = {
//             indoorActivities: req.body.activityShop.indoorActivities,
//             outdoorActivities: req.body.activityShop.outdoorActivities,
//             activityPrice: req.body.activityShop.activityPrice
//           };
//           break;
//       }
//     }

//     // If a new logo is uploaded, update the logoPic field
//     if (req.file) {
//       partner.logoPic = req.file.path;
//     }

//     const updatedPartner = await partner.save();
//     res.json(updatedPartner);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
