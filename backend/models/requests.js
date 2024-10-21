const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    budget: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
    activityType: { type: String, enum: ["outdoor", "indoor"], required: true },
    activity: { type: String},
    wantFood: { type: Boolean, required: true },
    cuisineType: { type: String, enum: ["Arabic", "Italian", "Asian", "Mexican", "Turkish"] },
    wantDrink: { type: Boolean, required: true },
    drinkType: {
      type: String,
      enum: ["hot", "cold"]
    },
    drinkChoice: { type: String },
    wantDessert: { type: Boolean, required: true },
    dessertChoice: { type: String, enum: ["donut", "knafeh", "wafel", "crepe", "ice-cream", "kulage"] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
  

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;