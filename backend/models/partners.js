const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outdoorActivities = ["Stargazing", "Camping", "Rock Climbing", "Cycling", "Football"];
const indoorActivities = ["Cinema", "Museums", "cooking workshops", "Games", "Art Exhibitions"];
const hotDrinks = ["Tea", "Coffee", "Cappuccino", "Latte"];
const coldDrinks = ["Iced Tea", "Iced Coffee", "Mojito", "Smoothie"];
const dessertTypes = ["donut", "knafeh", "wafel", "crepe", "ice-cream", "kulage"];

const partnerSchema = new Schema({
  city: { type: String, required: true },
  fullName: { type: String, required: true },
  companyName: { type: String, required: true },
  businessEmail: { type: String, required: true, unique: true },
  logoPic: { type: String },
  details: { type: String },
  phoneNumber: { type: Number, required: true },
  contractDuration: { type: Number },
  startOfPartnership: { type: Date },
  profit: { type: Number },
  isAccepted: { type: Boolean, default: false },
  businessType: String,
  cafe: {
      hotDrinks: [String],
      coldDrinks: [String],
      drinkPrice: Number,
      dessertTypes: [String],
      dessertPrice: Number
  },
  sweetShop: {
      dessertTypes: [String],
      dessertPrice: Number
  },
  activityShop: {
      indoorActivities: [String],
      outdoorActivities: [String],
      activityPrice: Number
  },
  restaurant: {
      mealPrice: Number,
    cuisineType: { type: [String] }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Partner = mongoose.model('Partner', partnerSchema, "Partners");

module.exports = Partner;