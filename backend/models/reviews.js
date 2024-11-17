// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' , required: true},
//   isDeleted: { type: Boolean, default: false } ,
//   rating: { type: Number, min: 1, max: 5, required: true },
//   comment: { type: String },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const Review = mongoose.model('Review', reviewSchema);
// module.exports = Review;



const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  outingPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OutingPlan',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);