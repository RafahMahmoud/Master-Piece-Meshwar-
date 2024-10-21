const Request = require('../models/requests');

exports.createRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const requestData = { ...req.body, userId };

    // Remove drinkType if wantDrink is false
    if (!requestData.wantDrink) {
      delete requestData.drinkType;
      delete requestData.drinkChoice; // Remove drinkChoice if drinkType is not needed
    }

    // Remove cuisineType if wantFood is false
    if (!requestData.wantFood) {
      delete requestData.cuisineType;
    }

    // Remove dessertChoice if wantDessert is false
    if (!requestData.wantDessert) {
      delete requestData.dessertChoice;
    }

    const newRequest = new Request(requestData);
    await newRequest.save();
    res.status(201).json({ message: 'Request created successfully', request: newRequest });
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ message: 'Error creating request', error: error.message });
  }
};
// const Partner = require('../models/partners'); // تأكد من استيراد نموذج Partner

// // في دالة إنشاء الطلب (createRequest)
// exports.createRequest = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const requestData = { ...req.body, userId };
  
//       // Remove drinkType if wantDrink is false
//       if (!requestData.wantDrink) {
//         delete requestData.drinkType;
//         delete requestData.drinkChoice; // Remove drinkChoice if drinkType is not needed
//       }
  
//       // Remove cuisineType if wantFood is false
//       if (!requestData.wantFood) {
//         delete requestData.cuisineType;
//       }
  
//       // Remove dessertChoice if wantDessert is false
//       if (!requestData.wantDessert) {
//         delete requestData.dessertChoice;
//       }
  
//       // البحث عن الأنشطة
//       const activities = await Partner.find({
//         city: requestData.location,
//         type: "activity",
//         activityName: requestData.activity
//       });
//       console.log('Activities:', activities);
  
//       // البحث عن المطاعم
//       let restaurant;
//       if (requestData.wantFood) {
//         restaurant = await Partner.findOne({
//           city: requestData.location,
//           type: "restaurant",
//           cuisineType: requestData.cuisineType
//         });
//       }
//       console.log('Restaurant:', restaurant);
  
//       // تحقق من إذا كان هناك حزمة مطابقة
//       if (activities.length === 0 && !restaurant) {
//         return res.status(404).json({ message: 'No matching package found!' });
//       }
  
//       // حساب التكلفة الإجمالية
//       const totalCost = (activities.reduce((sum, activity) => sum + activity.cost, 0) + (restaurant ? restaurant.cost : 0));
  
//       // تحقق من كون التكلفة الإجمالية في حدود الميزانية
//       if (totalCost > requestData.budget) {
//         return res.status(400).json({ message: 'Total cost exceeds your budget!' });
//       }
  
//       // إذا كانت هناك أنشطة ومطعم، قم بإرجاع المعلومات
//       return res.status(200).json({
//         message: 'Package found!',
//         activities,
//         restaurant,
//         totalCost
//       });
//     } catch (error) {
//       console.error('Error creating request:', error); // إضافة سجلات الخطأ
//       res.status(500).json({ message: 'Error creating request', error: error.message });
//     }
//   };
  