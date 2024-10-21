const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    city: { type: String, required: true },
    type: { type: String, enum: ['indoor', 'outdoor'], required: true },
    activity: {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      partnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner', required: true } // Add partnerId
    },
    restaurant: {
      name: { type: String, required: true },
      cuisineType: { type: String, required: true },
      averagePrice: { type: Number, required: true },
      partnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner', required: true } // Add partnerId
    }
  });

const Package = mongoose.model('Package', packageSchema);
module.exports = Package;