const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    city: { type: String, required: true },
    cuisineType: { type: String, enum: ["Arabic", "Italian", "Asian", "Mexican", "Turkish"], required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
