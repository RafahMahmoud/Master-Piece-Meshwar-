const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String },
  bio: { type: String },
  gender: { type: String, enum: ['male', 'female'], required: true },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { type: Number},
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  socialLinks: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String }
  },
  requestId: {type: mongoose.Schema.Types.ObjectId,ref: 'Requests'},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);





  // Posts: [{
  //   postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  // }],
  // likedPosts: [{
  //   postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  //   addedAt: { type: Date, default: Date.now }
  // }],
  // group: [{
  //   groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }
  // }],
  // trip: [{
  //   tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }
  // }],
  // review: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],