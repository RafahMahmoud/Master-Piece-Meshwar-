const Preference = require("../models/preferences");

exports.create = async (req, res) => {
  try {
    console.log("Request body received:", req.body);

    const { userId, preferences } = req.body;

    // Validate required fields
    if (!userId || !preferences) {
      return res
        .status(400)
        .json({ message: "Missing userId or preferences." });
    }

    const { food, activities, drinks, budget, availability, specialInterests } =
      preferences;

    // Validate the structure of activities
    if (!activities || !activities.outdoorActivities) {
      return res.status(400).json({
        message: "Activities not provided or missing outdoorActivities.",
      });
    }

    const preference = new Preference({
      userId, // هنا نستخدم userId في مستوى أعلى
      preferences: {
        food: {
          cuisineTypes: food.cuisineTypes,
        },
        activities: {
          outdoorActivities: activities.outdoorActivities,
          indoorActivities: activities.indoorActivities,
          sportsActivities: activities.sportsActivities,
          culturalActivities: activities.culturalActivities,
        },
        drinks: {
          hot: drinks.hot,
          cold: drinks.cold,
        },
        budget: {
          tripBudget: budget.tripBudget,
          currency: budget.currency,
        },
        availability: {
          weekdays: availability.weekdays,
          weekends: availability.weekends,
          preferredTimes: availability.preferredTimes,
        },
        specialInterests: specialInterests || [],
      },
    });

    const savedPreference = await preference.save();
    res.status(201).json(savedPreference);
  } catch (error) {
    console.error("Error processing request:", error);
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};