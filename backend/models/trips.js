const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
  review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
  isDeleted: { type: Boolean, default: false } ,
  details: { type: [String],required: true },
  location: { type: [String] },
  statedTime:{type: Date,required: true},
  endTime:{type: Date,required: true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;