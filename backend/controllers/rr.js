
const Partner = require('../models/partners');

// Controller for checking if the budget matches the summation of chosen items
exports.checkPartnerBudget = async (req, res) => {
    console.log('Request received at /api/check-partner-budget');
    console.log('Received data:', req.body);
  try {
    const { city, businessTypes, hotDrink, coldDrink, dessert, indoorActivity, outdoorActivity, meal, budget } = req.body;
    console.log('Received data:', req.body); 
    // Find partners that match the city and any of the provided business types
    const partners = await Partner.find({ city, businessType: { $in: businessTypes } });

    if (!partners || partners.length === 0) {
      return res.status(404).json({ message: 'No partners found for the given city and business types' });
    }

    // Calculate total cost based on user input
    let totalCost = 0;
    let details = [];

    partners.forEach(partner => {
      let partnerDetails = {
        businessType: partner.businessType,
        items: []
      };

      if (partner.businessType === 'cafe') {
        if (hotDrink && partner.cafe.hotDrinks.includes(hotDrink)) {
          totalCost += partner.cafe.drinkPrice;
          partnerDetails.items.push({ type: 'Hot Drink', item: hotDrink, price: partner.cafe.drinkPrice });
        }

        if (coldDrink && partner.cafe.coldDrinks.includes(coldDrink)) {
          totalCost += partner.cafe.drinkPrice;
          partnerDetails.items.push({ type: 'Cold Drink', item: coldDrink, price: partner.cafe.drinkPrice });
        }

        if (dessert && partner.cafe.dessertTypes.includes(dessert)) {
          totalCost += partner.cafe.dessertPrice;
          partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.cafe.dessertPrice });
        }
      }

      if (partner.businessType === 'sweetShop') {
        if (dessert && partner.sweetShop.dessertTypes.includes(dessert)) {
          totalCost += partner.sweetShop.dessertPrice;
          partnerDetails.items.push({ type: 'Dessert', item: dessert, price: partner.sweetShop.dessertPrice });
        }
      }

      if (partner.businessType === 'activityShop') {
        if (indoorActivity && partner.activityShop.indoorActivities.includes(indoorActivity)) {
          totalCost += partner.activityShop.activityPrice;
          partnerDetails.items.push({ type: 'Indoor Activity', item: indoorActivity, price: partner.activityShop.activityPrice });
        }

        if (outdoorActivity && partner.activityShop.outdoorActivities.includes(outdoorActivity)) {
          totalCost += partner.activityShop.activityPrice;
          partnerDetails.items.push({ type: 'Outdoor Activity', item: outdoorActivity, price: partner.activityShop.activityPrice });
        }
      }

      if (partner.businessType === 'restaurant') {
        if (meal) {
          totalCost += partner.restaurant.mealPrice;
          partnerDetails.items.push({ type: 'Meal', item: meal, price: partner.restaurant.mealPrice });
        }
      }

      details.push(partnerDetails);
    });

    // Check if the total cost matches the budget
    const isWithinBudget = totalCost === budget;

    // Return the response
    res.status(200).json({
      isWithinBudget,
      totalCost,
      details,
      partners
    });
console.log(details);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};