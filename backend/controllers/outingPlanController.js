const OutingPlan = require('../models/outingPlan');
const Partner = require('../models/partners');
const jwt = require('jsonwebtoken');
const braintree = require('braintree');
require('dotenv').config();

exports.checkPartnerBudget = async (req, res) => {
  try {
    const { 
      city, businessTypes, hotDrink, coldDrink, dessert, 
      indoorActivity, outdoorActivity, meal, budget,
      date, startTime, endTime, numberOfPeople 
    } = req.body;

    const userId = req.user.id;

    // Validate required fields
    if (!city || !businessTypes || !budget || !date || !numberOfPeople) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const allMatchingPartners = await Partner.find({ 
      city, 
      businessType: { $in: businessTypes },
      isDeleted: false,
      isAccepted: true
    });

    if (!allMatchingPartners || allMatchingPartners.length === 0) {
      return res.status(404).json({ message: 'No partners found for the given criteria' });
    }

    const partnersByType = allMatchingPartners.reduce((acc, partner) => {
      if (!acc[partner.businessType]) {
        acc[partner.businessType] = [];
      }
      acc[partner.businessType].push(partner);
      return acc;
    }, {});

    const selectedPartners = Object.entries(partnersByType).map(([type, partners]) => {
      const randomIndex = Math.floor(Math.random() * partners.length);
      return partners[randomIndex];
    });

    let costPerPerson = 0;
    let totalCost = 0; // Define totalCost here
    let details = [];
    let planDetails = {
      user: userId,
      date: new Date(date),
      startTime,
      endTime,
      city,
      budget,
      numberOfPeople,
      partners: selectedPartners.map(p => p._id)
    };

    selectedPartners.forEach(partner => {
      let partnerDetails = {
        businessType: partner.businessType,
        items: []
      };

      if (partner.businessType === 'cafe') {
        if (hotDrink && partner.cafe.hotDrinks.includes(hotDrink)) {
          costPerPerson += partner.cafe.drinkPrice;
          partnerDetails.items.push({ type: 'Hot Drink', item: hotDrink, price: partner.cafe.drinkPrice });
          planDetails.drink = {
            type: 'hot',
            name: hotDrink,
            price: partner.cafe.drinkPrice
          };
        }
        if (coldDrink && partner.cafe.coldDrinks.includes(coldDrink)) {
          costPerPerson += partner.cafe.drinkPrice;
          partnerDetails.items.push({ type: 'Cold Drink', item: coldDrink, price: partner.cafe.drinkPrice });
          planDetails.drink = {
            type: 'cold',
            name: coldDrink,
            price: partner.cafe.drinkPrice
          };
        }
        if (dessert && partner.cafe.dessertTypes.includes(dessert)) {
          costPerPerson += partner.cafe.dessertPrice;
          partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.cafe.dessertPrice });
          planDetails.dessert = {
            name: dessert,
            price: partner.cafe.dessertPrice
          };
        }
      }

      if (partner.businessType === 'sweetShop') {
        if (dessert && partner.sweetShop.dessertTypes.includes(dessert)) {
          costPerPerson += partner.sweetShop.dessertPrice; // Changed from totalCost to costPerPerson
          partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.sweetShop.dessertPrice });
          planDetails.dessert = {
            name: dessert,
            price: partner.sweetShop.dessertPrice
          };
        }
      }

      if (partner.businessType === 'activityShop') {
        if (indoorActivity && partner.activityShop.indoorActivities.includes(indoorActivity)) {
          costPerPerson += partner.activityShop.activityPrice; // Changed from totalCost to costPerPerson
          partnerDetails.items.push({ type: 'Indoor Activity', item: indoorActivity, price: partner.activityShop.activityPrice });
          planDetails.activity = {
            type: 'indoor',
            name: indoorActivity,
            price: partner.activityShop.activityPrice
          };
        }
        if (outdoorActivity && partner.activityShop.outdoorActivities.includes(outdoorActivity)) {
          costPerPerson += partner.activityShop.activityPrice; // Changed from totalCost to costPerPerson
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
          costPerPerson += partner.restaurant.mealPrice; // Changed from totalCost to costPerPerson
          partnerDetails.items.push({ type: 'Meal', item: meal, price: partner.restaurant.mealPrice });
          planDetails.food = {
            cuisineType: meal,
            price: partner.restaurant.mealPrice
          };
        }
      }

      details.push(partnerDetails);
    });

    totalCost = costPerPerson * numberOfPeople;
    const isWithinBudget = totalCost <= budget;
    
    planDetails.totalCost = totalCost;
    planDetails.costPerPerson = costPerPerson;
    planDetails.isWithinBudget = isWithinBudget;

    const outingPlan = new OutingPlan(planDetails);
    await outingPlan.save();

    res.status(200).json({
      isWithinBudget,
      totalCost,
      costPerPerson,
      numberOfPeople,
      details,
      partners: selectedPartners,
      planId: outingPlan._id
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
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
      .populate('user')
      .populate('partners') 
      .sort({ createdAt: -1 });

    res.status(200).json(plans);
  } catch (error) {
    console.error("Error fetching outing plans:", error);
    res.status(500).json({ message: 'Error fetching outing plans', error });
  }
};


// exports.getPreviousOutings = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const today = new Date();
    
//     console.log('Fetching previous outings for user:', userId);
//     console.log('Current date:', today);
    
//     const plans = await OutingPlan.find({
//       user: userId,
//       date: { $lt: today }
//     })
//     .populate('partners')
//     .sort({ date: -1 });
    
//     console.log('Found plans:', plans.length);
    
//     if (plans.length === 0) {
//       return res.status(200).json([]);
//     }
    
//     res.status(200).json(plans);
//   } catch (error) {
//     console.error('Detailed error:', error);
//     res.status(500).json({ 
//       message: 'Error fetching previous outings', 
//       error: error.message,
//       stack: error.stack 
//     });
//   }
// };
exports.getPreviousOutings = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date();
    
    console.log('Fetching previous outings for user:', userId);
    console.log('Current date:', today);
    
    const plans = await OutingPlan.find({
      user: userId,
      date: { $lt: today }
    })
    .populate({
      path: 'partners',
      select: 'companyName', // Include the fields you want
      match: { isDeleted: false } // Only get non-deleted partners
    })
    .sort({ date: -1 });
    
    // Filter out any plans where all partners have been deleted
    const validPlans = plans.filter(plan => plan.partners.length > 0);
    
    console.log('Found valid plans:', validPlans.length);
    
    if (validPlans.length === 0) {
      return res.status(200).json([]);
    }
    
    res.status(200).json(validPlans);
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ 
      message: 'Error fetching previous outings', 
      error: error.message,
      stack: error.stack 
    });
  }
};

exports.getUpcomingOutings = async (req, res) => {
  try {
    const currentDate = new Date();
    const upcomingOutings = await OutingPlan.find({
      user: req.user.id,
      date: { $gt: currentDate },
      status: 'planned'
    }).populate('partners', 'companyName businessType');

    res.json(upcomingOutings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching upcoming outings', error });
  }
};