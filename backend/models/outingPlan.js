// const mongoose = require('mongoose');

// const outingPlanSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   startTime: String,
//   endTime: String,
//   city: String,
//   budget: Number,
//   totalCost: Number,
//   isWithinBudget: Boolean,
//   activity: {
//     type: {
//       type: String,
//       enum: ['indoor', 'outdoor']
//     },
//     name: String,
//     price: Number
//   },
//   food: {
//     cuisineType: String,
//     price: Number
//   },
//   drink: {
//     type: {
//       type: String,
//       enum: ['hot', 'cold']
//     },
//     name: String,
//     price: Number
//   },
//   dessert: {
//     name: String,
//     price: Number
//   },
//   partners: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Partner'
//   }],
//   status: {
//     type: String,
//     enum: ['planned', 'completed', 'cancelled'],
//     default: 'planned'
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('OutingPlan', outingPlanSchema);






const mongoose = require('mongoose');

const outingPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  totalCost: {
    type: Number,
    required: true
  },
  isWithinBudget: {
    type: Boolean,
    required: true
  },
  activity: {
    type: {
      type: String,
      enum: ['indoor', 'outdoor']
    },
    name: String,
    price: Number
  },
  partners: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Partner'
  }],
  status: {
    type: String,
    enum: ['planned', 'completed', 'cancelled'],
    default: 'planned'
  },
  // Add payment fields
  transactionId: String,
  paymentAmount: Number,
  paymentDate: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('OutingPlan', outingPlanSchema);