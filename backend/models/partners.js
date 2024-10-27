// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const partnerSchema = new Schema({
//   fullName: { type: String, required: true },
//   companyName: { type: String, required: true },
//   businessEmail: { type: String, required: true, unique: true },
//   logoPic: { type: String },
//   details: { type: String },
//   phoneNumber: { type: Number, required: true },
//   contractDuration: { type: Number },
//   startOfPartnership: { type: Date },
//   profit: { type: Number },
//   isAccepted: { type: Boolean, default: false },
//   businessType: { type: String, enum: ['restaurant', 'cafe', 'sweetShop', 'activityShop'] },
//   // Fields for different business types
//   restaurant: {
//     mealPrice: { type: Number },
//     cuisineType: { type: [String] }  // Changed to array of strings
//   },
//   cafe: {
//     drinkPrice: { type: Number },
//     dessertPrice: { type: Number },
//     drinkTypes: [String],
//     dessertTypes: [String]
//   },
//   sweetShop: {
//     dessertPrice: { type: Number }
//   },
//   activityShop: {
//     activityType: { type: String },
//     activityPrice: { type: Number }
//   },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const Partner = mongoose.model('Partners', partnerSchema, "Partners");
// module.exports = Partner;







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
  city: String,
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
      mealPrice: Number
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Partner = mongoose.model('Partners', partnerSchema, "Partners");
module.exports = Partner;









