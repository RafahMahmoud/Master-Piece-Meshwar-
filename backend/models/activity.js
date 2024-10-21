const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    city: { type: String, required: true },
    type: { type: String, enum: ["outdoor", "indoor"], required: true },
    name: { type: String, required: true },
    cost: { type: Number, required: true },
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
