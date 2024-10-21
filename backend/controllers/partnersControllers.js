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
//             drinkPrice: req.body.cafe.drinkPrice,
//             dessertPrice: req.body.cafe.dessertPrice,
//             drinkTypes: req.body.cafe.drinkTypes,
//             dessertTypes: req.body.cafe.dessertTypes
//           };
//           break;
//         case 'sweetShop':
//           partner.sweetShop = {
//             dessertPrice: req.body.sweetShop.dessertPrice
//           };
//           break;
//         case 'activityShop':
//           partner.activityShop = {
//             activityType: req.body.activityShop.activityType,
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






const Partner = require('../models/partners');

exports.getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPartner = async (req, res) => {
  const partnerData = req.body;

  // Remove empty fields for business types
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
    res.status(201).json(newPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ message: 'Partner not found' });

    // Handle updating specific fields
    if (req.body.isAccepted !== undefined) {
      partner.isAccepted = req.body.isAccepted;
    }

    if (req.body.businessType) {
      partner.businessType = req.body.businessType;
      
      // Reset all business type fields
      partner.restaurant = undefined;
      partner.cafe = undefined;
      partner.sweetShop = undefined;
      partner.activityShop = undefined;

      // Set the fields for the selected business type
      switch (req.body.businessType) {
        case 'restaurant':
          partner.restaurant = {
            mealPrice: req.body.restaurant.mealPrice,
            cuisineType: req.body.restaurant.cuisineType
          };
          break;
        case 'cafe':
          partner.cafe = {
            hotDrinks: req.body.cafe.hotDrinks,
            coldDrinks: req.body.cafe.coldDrinks,
            dessertTypes: req.body.cafe.dessertTypes,
            drinkPrice: req.body.cafe.drinkPrice,
            dessertPrice: req.body.cafe.dessertPrice
          };
          break;
        case 'sweetShop':
          partner.sweetShop = {
            dessertTypes: req.body.sweetShop.dessertTypes,
            dessertPrice: req.body.sweetShop.dessertPrice
          };
          break;
        case 'activityShop':
          partner.activityShop = {
            indoorActivities: req.body.activityShop.indoorActivities,
            outdoorActivities: req.body.activityShop.outdoorActivities,
            activityPrice: req.body.activityShop.activityPrice
          };
          break;
      }
    }

    const updatedPartner = await partner.save();
    res.json(updatedPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};