const mongoose = require("mongoose");

const PreferenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
  preferences: {
    food: {
      cuisineTypes: { type: [String], required: true }, 
    },
    activities: {
      outdoorActivities: { type: [String], required: true },
      indoorActivities: { type: [String] },
      sportsActivities: { type: [String] },
      culturalActivities: { type: [String] },
    },
    drinks: {
      hot: { type: [String] },
      cold: { type: [String] },
    },
    budget: {
      tripBudget: { type: String, required: true },
      currency: { type: String, required: true },
    },
    availability: {
      weekdays: { type: [String] },
      weekends: { type: Boolean, required: true },
      preferredTimes: { type: [String] },
    },
    specialInterests: { type: [String] },
  },
});

module.exports = mongoose.model("Preference", PreferenceSchema);