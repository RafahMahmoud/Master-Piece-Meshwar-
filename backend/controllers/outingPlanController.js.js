
// const Partner = require('../models/partners');

// // Controller for checking if the budget matches the summation of chosen items
// exports.checkPartnerBudget = async (req, res) => {
//     console.log('Request received at /api/check-partner-budget');
//     console.log('Received data:', req.body);
//   try {
//     const { city, businessTypes, hotDrink, coldDrink, dessert, indoorActivity, outdoorActivity, meal, budget } = req.body;
//     console.log('Received data:', req.body); 
//     // Find partners that match the city and any of the provided business types
//     const partners = await Partner.find({ city, businessType: { $in: businessTypes } });

//     if (!partners || partners.length === 0) {
//       return res.status(404).json({ message: 'No partners found for the given city and business types' });
//     }

//     // Calculate total cost based on user input
//     let totalCost = 0;
//     let details = [];

//     partners.forEach(partner => {
//       let partnerDetails = {
//         businessType: partner.businessType,
//         items: []
//       };

//       if (partner.businessType === 'cafe') {
//         if (hotDrink && partner.cafe.hotDrinks.includes(hotDrink)) {
//           totalCost += partner.cafe.drinkPrice;
//           partnerDetails.items.push({ type: 'Hot Drink', item: hotDrink, price: partner.cafe.drinkPrice });
//         }

//         if (coldDrink && partner.cafe.coldDrinks.includes(coldDrink)) {
//           totalCost += partner.cafe.drinkPrice;
//           partnerDetails.items.push({ type: 'Cold Drink', item: coldDrink, price: partner.cafe.drinkPrice });
//         }

//         if (dessert && partner.cafe.dessertTypes.includes(dessert)) {
//           totalCost += partner.cafe.dessertPrice;
//           partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.cafe.dessertPrice });
//         }
//       }

//       if (partner.businessType === 'sweetShop') {
//         if (dessert && partner.sweetShop.dessertTypes.includes(dessert)) {
//           totalCost += partner.sweetShop.dessertPrice;
//           partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.sweetShop.dessertPrice });
//         }
//       }

//       if (partner.businessType === 'activityShop') {
//         if (indoorActivity && partner.activityShop.indoorActivities.includes(indoorActivity)) {
//           totalCost += partner.activityShop.activityPrice;
//           partnerDetails.items.push({ type: 'Indoor Activity', item: indoorActivity, price: partner.activityShop.activityPrice });
//         }

//         if (outdoorActivity && partner.activityShop.outdoorActivities.includes(outdoorActivity)) {
//           totalCost += partner.activityShop.activityPrice;
//           partnerDetails.items.push({ type: 'Outdoor Activity', item: outdoorActivity, price: partner.activityShop.activityPrice });
//         }
//       }

//       if (partner.businessType === 'restaurant') {
//         if (meal) {
//           totalCost += partner.restaurant.mealPrice;
//           partnerDetails.items.push({ type: 'Meal', item: meal, price: partner.restaurant.mealPrice });
//         }
//       }

//       details.push(partnerDetails);
//     });

//     // Check if the total cost matches the budget
//     const isWithinBudget = totalCost <= budget;

//     // Return the response
//     res.status(200).json({
//       isWithinBudget,
//       totalCost,
//       details,
//       partners
//     });
// console.log(details);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// };










// const OutingPlan = require('../models/outingPlan');
// const Partner = require('../models/partners');

// exports.checkPartnerBudget = async (req, res) => {
//   try {
//     const { 
//       city, businessTypes, hotDrink, coldDrink, dessert, 
//       indoorActivity, outdoorActivity, meal, budget,
//       date, startTime, endTime, userId 
//     } = req.body;

//     const partners = await Partner.find({ city, businessType: { $in: businessTypes } });
//     if (!partners || partners.length === 0) {
//       return res.status(404).json({ message: 'No partners found for the given city and business types' });
//     }

//     let totalCost = 0;
//     let details = [];
//     let planDetails = {
//       user: userId,
//       date: new Date(date),
//       startTime,
//       endTime,
//       city,
//       budget,
//       partners: partners.map(p => p._id)
//     };

//     partners.forEach(partner => {
//       let partnerDetails = {
//         businessType: partner.businessType,
//         items: []
//       };

//       if (partner.businessType === 'cafe') {
//         if (hotDrink && partner.cafe.hotDrinks.includes(hotDrink)) {
//           totalCost += partner.cafe.drinkPrice;
//           partnerDetails.items.push({ type: 'Hot Drink', item: hotDrink, price: partner.cafe.drinkPrice });
//           planDetails.drink = {
//             type: 'hot',
//             name: hotDrink,
//             price: partner.cafe.drinkPrice
//           };
//         }
//         if (coldDrink && partner.cafe.coldDrinks.includes(coldDrink)) {
//           totalCost += partner.cafe.drinkPrice;
//           partnerDetails.items.push({ type: 'Cold Drink', item: coldDrink, price: partner.cafe.drinkPrice });
//           planDetails.drink = {
//             type: 'cold',
//             name: coldDrink,
//             price: partner.cafe.drinkPrice
//           };
//         }
//         if (dessert && partner.cafe.dessertTypes.includes(dessert)) {
//           totalCost += partner.cafe.dessertPrice;
//           partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.cafe.dessertPrice });
//           planDetails.dessert = {
//             name: dessert,
//             price: partner.cafe.dessertPrice
//           };
//         }
//       }

//       // Similar logic for other business types...
//       if (partner.businessType === 'sweetShop') {
//         if (dessert && partner.sweetShop.dessertTypes.includes(dessert)) {
//           totalCost += partner.sweetShop.dessertPrice;
//           partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.sweetShop.dessertPrice });
//           planDetails.dessert = {
//             name: dessert,
//             price: partner.sweetShop.dessertPrice
//           };
//         }
//       }

//       if (partner.businessType === 'activityShop') {
//         if (indoorActivity && partner.activityShop.indoorActivities.includes(indoorActivity)) {
//           totalCost += partner.activityShop.activityPrice;
//           partnerDetails.items.push({ type: 'Indoor Activity', item: indoorActivity, price: partner.activityShop.activityPrice });
//           planDetails.activity = {
//             type: 'indoor',
//             name: indoorActivity,
//             price: partner.activityShop.activityPrice
//           };
//         }
//         if (outdoorActivity && partner.activityShop.outdoorActivities.includes(outdoorActivity)) {
//           totalCost += partner.activityShop.activityPrice;
//           partnerDetails.items.push({ type: 'Outdoor Activity', item: outdoorActivity, price: partner.activityShop.activityPrice });
//           planDetails.activity = {
//             type: 'outdoor',
//             name: outdoorActivity,
//             price: partner.activityShop.activityPrice
//           };
//         }
//       }

//       if (partner.businessType === 'restaurant') {
//         if (meal) {
//           totalCost += partner.restaurant.mealPrice;
//           partnerDetails.items.push({ type: 'Meal', item: meal, price: partner.restaurant.mealPrice });
//           planDetails.food = {
//             cuisineType: meal,
//             price: partner.restaurant.mealPrice
//           };
//         }
//       }

//       details.push(partnerDetails);
//     });

//     const isWithinBudget = totalCost <= budget;
//     planDetails.totalCost = totalCost;
//     planDetails.isWithinBudget = isWithinBudget;

//     // Save the outing plan
//     const outingPlan = new OutingPlan(planDetails);
//     await outingPlan.save();

//     res.status(200).json({
//       isWithinBudget,
//       totalCost,
//       details,
//       partners,
//       planId: outingPlan._id
//     });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// // Get user's outing plans
// exports.getUserOutingPlans = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const plans = await OutingPlan.find({ user: userId })
//       .populate('partners')
//       .sort({ createdAt: -1 });
    
//     res.status(200).json(plans);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching outing plans', error });
//   }
// };

// // Update outing plan status
// exports.updatePlanStatus = async (req, res) => {
//   try {
//     const { planId, status } = req.body;
//     const plan = await OutingPlan.findByIdAndUpdate(
//       planId,
//       { status },
//       { new: true }
//     );
    
//     res.status(200).json(plan);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating plan status', error });
//   }
// };








// const OutingPlan = require('../models/outingPlan');
// const Partner = require('../models/partners');
// const jwt = require('jsonwebtoken');

// // تحقق من الميزانية وتحديد الشركاء
// exports.checkPartnerBudget = async (req, res) => {
//   try {
//     const { 
//       city, businessTypes, hotDrink, coldDrink, dessert, 
//       indoorActivity, outdoorActivity, meal, budget,
//       date, startTime, endTime 
//     } = req.body;

//     const userId = req.user.id; // userId تم استخراجه من التوكن بواسطة middleware

//     const partners = await Partner.find({ city, businessType: { $in: businessTypes } });
//     if (!partners || partners.length === 0) {
//       return res.status(404).json({ message: 'No partners found for the given city and business types' });
//     }

//     let totalCost = 0;
//     let details = [];
//     let planDetails = {
//       user: userId,
//       date: new Date(date),
//       startTime,
//       endTime,
//       city,
//       budget,
//       partners: partners.map(p => p._id)
//     };

//     partners.forEach(partner => {
//       let partnerDetails = {
//         businessType: partner.businessType,
//         items: []
//       };

//       if (partner.businessType === 'cafe') {
//         if (hotDrink && partner.cafe.hotDrinks.includes(hotDrink)) {
//           totalCost += partner.cafe.drinkPrice;
//           partnerDetails.items.push({ type: 'Hot Drink', item: hotDrink, price: partner.cafe.drinkPrice });
//           planDetails.drink = {
//             type: 'hot',
//             name: hotDrink,
//             price: partner.cafe.drinkPrice
//           };
//         }
//         if (coldDrink && partner.cafe.coldDrinks.includes(coldDrink)) {
//           totalCost += partner.cafe.drinkPrice;
//           partnerDetails.items.push({ type: 'Cold Drink', item: coldDrink, price: partner.cafe.drinkPrice });
//           planDetails.drink = {
//             type: 'cold',
//             name: coldDrink,
//             price: partner.cafe.drinkPrice
//           };
//         }
//         if (dessert && partner.cafe.dessertTypes.includes(dessert)) {
//           totalCost += partner.cafe.dessertPrice;
//           partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.cafe.dessertPrice });
//           planDetails.dessert = {
//             name: dessert,
//             price: partner.cafe.dessertPrice
//           };
//         }
//       }

//       // Logic for other business types
//       if (partner.businessType === 'sweetShop') {
//         if (dessert && partner.sweetShop.dessertTypes.includes(dessert)) {
//           totalCost += partner.sweetShop.dessertPrice;
//           partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.sweetShop.dessertPrice });
//           planDetails.dessert = {
//             name: dessert,
//             price: partner.sweetShop.dessertPrice
//           };
//         }
//       }

//       if (partner.businessType === 'activityShop') {
//         if (indoorActivity && partner.activityShop.indoorActivities.includes(indoorActivity)) {
//           totalCost += partner.activityShop.activityPrice;
//           partnerDetails.items.push({ type: 'Indoor Activity', item: indoorActivity, price: partner.activityShop.activityPrice });
//           planDetails.activity = {
//             type: 'indoor',
//             name: indoorActivity,
//             price: partner.activityShop.activityPrice
//           };
//         }
//         if (outdoorActivity && partner.activityShop.outdoorActivities.includes(outdoorActivity)) {
//           totalCost += partner.activityShop.activityPrice;
//           partnerDetails.items.push({ type: 'Outdoor Activity', item: outdoorActivity, price: partner.activityShop.activityPrice });
//           planDetails.activity = {
//             type: 'outdoor',
//             name: outdoorActivity,
//             price: partner.activityShop.activityPrice
//           };
//         }
//       }

//       if (partner.businessType === 'restaurant') {
//         if (meal) {
//           totalCost += partner.restaurant.mealPrice;
//           partnerDetails.items.push({ type: 'Meal', item: meal, price: partner.restaurant.mealPrice });
//           planDetails.food = {
//             cuisineType: meal,
//             price: partner.restaurant.mealPrice
//           };
//         }
//       }

//       details.push(partnerDetails);
//     });

//     const isWithinBudget = totalCost <= budget;
//     planDetails.totalCost = totalCost;
//     planDetails.isWithinBudget = isWithinBudget;

//     // Save the outing plan
//     const outingPlan = new OutingPlan(planDetails);
//     await outingPlan.save();

//     res.status(200).json({
//       isWithinBudget,
//       totalCost,
//       details,
//       partners,
//       planId: outingPlan._id
//     });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// // جلب خطط المستخدم للخروج
// exports.getUserOutingPlans = async (req, res) => {
//   try {
//     const userId = req.user.id; // userId تم استخراجه من التوكن بواسطة middleware
//     const plans = await OutingPlan.find({ user: userId })
//       .populate('partners')
//       .sort({ createdAt: -1 });
    
//     res.status(200).json(plans);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching outing plans', error });
//   }
// };

// // تحديث حالة خطة الخروج
// exports.updatePlanStatus = async (req, res) => {
//   try {
//     const { planId, status } = req.body;
//     const plan = await OutingPlan.findByIdAndUpdate(
//       planId,
//       { status },
//       { new: true }
//     );
    
//     res.status(200).json(plan);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating plan status', error });
//   }
// };







const OutingPlan = require('../models/outingPlan');
const Partner = require('../models/partners');
const jwt = require('jsonwebtoken');
const braintree = require('braintree');
require('dotenv').config();
// تحقق من الميزانية وتحديد الشركاء
exports.checkPartnerBudget = async (req, res) => {
  try {
    const { 
      city, businessTypes, hotDrink, coldDrink, dessert, 
      indoorActivity, outdoorActivity, meal, budget,
      date, startTime, endTime 
    } = req.body;

    const userId = req.user.id; // userId تم استخراجه من التوكن بواسطة middleware

    const partners = await Partner.find({ city, businessType: { $in: businessTypes } });
    if (!partners || partners.length === 0) {
      return res.status(404).json({ message: 'No partners found for the given city and business types' });
    }

    let totalCost = 0;
    let details = [];
    let planDetails = {
      user: userId,
      date: new Date(date),
      startTime,
      endTime,
      city,
      budget,
      partners: partners.map(p => p._id)
    };

    partners.forEach(partner => {
      let partnerDetails = {
        businessType: partner.businessType,
        items: []
      };

      if (partner.businessType === 'cafe') {
        if (hotDrink && partner.cafe.hotDrinks.includes(hotDrink)) {
          totalCost += partner.cafe.drinkPrice;
          partnerDetails.items.push({ type: 'Hot Drink', item: hotDrink, price: partner.cafe.drinkPrice });
          planDetails.drink = {
            type: 'hot',
            name: hotDrink,
            price: partner.cafe.drinkPrice
          };
        }
        if (coldDrink && partner.cafe.coldDrinks.includes(coldDrink)) {
          totalCost += partner.cafe.drinkPrice;
          partnerDetails.items.push({ type: 'Cold Drink', item: coldDrink, price: partner.cafe.drinkPrice });
          planDetails.drink = {
            type: 'cold',
            name: coldDrink,
            price: partner.cafe.drinkPrice
          };
        }
        if (dessert && partner.cafe.dessertTypes.includes(dessert)) {
          totalCost += partner.cafe.dessertPrice;
          partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.cafe.dessertPrice });
          planDetails.dessert = {
            name: dessert,
            price: partner.cafe.dessertPrice
          };
        }
      }

      // Logic for other business types
      if (partner.businessType === 'sweetShop') {
        if (dessert && partner.sweetShop.dessertTypes.includes(dessert)) {
          totalCost += partner.sweetShop.dessertPrice;
          partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.sweetShop.dessertPrice });
          planDetails.dessert = {
            name: dessert,
            price: partner.sweetShop.dessertPrice
          };
        }
      }

      if (partner.businessType === 'activityShop') {
        if (indoorActivity && partner.activityShop.indoorActivities.includes(indoorActivity)) {
          totalCost += partner.activityShop.activityPrice;
          partnerDetails.items.push({ type: 'Indoor Activity', item: indoorActivity, price: partner.activityShop.activityPrice });
          planDetails.activity = {
            type: 'indoor',
            name: indoorActivity,
            price: partner.activityShop.activityPrice
          };
        }
        if (outdoorActivity && partner.activityShop.outdoorActivities.includes(outdoorActivity)) {
          totalCost += partner.activityShop.activityPrice;
          partnerDetails.items.push({ type: 'Outdoor Activity', item: outdoorActivity, price: partner.activityShop.activityPrice });
          planDetails.activity = {
            type: 'outdoor',
            name: outdoorActivity,
            price: partner.activityShop.activityPrice
          };
        }
      }

      if (partner.businessType === 'restaurant') {
        if (meal) {
          totalCost += partner.restaurant.mealPrice;
          partnerDetails.items.push({ type: 'Meal', item: meal, price: partner.restaurant.mealPrice });
          planDetails.food = {
            cuisineType: meal,
            price: partner.restaurant.mealPrice
          };
        }
      }

      details.push(partnerDetails);
    });

    const isWithinBudget = totalCost <= budget;
    planDetails.totalCost = totalCost;
    planDetails.isWithinBudget = isWithinBudget;

    // Save the outing plan
    const outingPlan = new OutingPlan(planDetails);
    await outingPlan.save();

    res.status(200).json({
      isWithinBudget,
      totalCost,
      details,
      partners,
      planId: outingPlan._id
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// جلب خطط المستخدم للخروج
exports.getUserOutingPlans = async (req, res) => {
  try {
    const userId = req.user.id; // userId تم استخراجه من التوكن بواسطة middleware
    const plans = await OutingPlan.find({ user: userId })
      .populate('partners')
      .sort({ createdAt: -1 });
    
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching outing plans', error });
  }
};

// تحديث حالة خطة الخروج
exports.updatePlanStatus = async (req, res) => {
  try {
    const { planId, status } = req.body;
    const plan = await OutingPlan.findByIdAndUpdate(
      planId,
      { status },
      { new: true }
    );
    
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: 'Error updating plan status', error });
  }
};


const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

exports.generateClientToken = async (req, res) => {
  try {
    const clientToken = await gateway.clientToken.generate({});
    res.json({ clientToken: clientToken.clientToken });
  } catch (error) {
    console.error('Error generating client token:', error);
    res.status(500).json({ error: 'Could not generate token' });
  }
};

exports.processPayment = async (req, res) => {
  try {
    const { paymentMethodNonce, amount, planId } = req.body;

    const result = await gateway.transaction.sale({
      amount: amount.toString(),
      paymentMethodNonce,
      options: {
        submitForSettlement: true
      }
    });

    if (result.success) {
      // Update the outing plan with payment details
      await OutingPlan.findByIdAndUpdate(
        planId,
        {
          transactionId: result.transaction.id,
          paymentAmount: amount,
          paymentDate: new Date()
        },
        { new: true }
      );

      res.json({
        success: true,
        transaction: result.transaction
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment failed',
        errors: result.errors
      });
    }
  } catch (error) {
    console.error('Payment processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Payment processing failed'
    });
  }
};

exports.getAllOutingPlans = async (req, res) => {
  try {
    const plans = await OutingPlan.find()
      .populate('partners') // Populate partners if needed
      .populate('user')      // Optionally populate user data
      .sort({ createdAt: -1 });

    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching outing plans', error });
  }
};