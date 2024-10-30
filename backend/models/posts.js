const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  replies: [replySchema],
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// const postSchema = new Schema({
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   content: { type: String, required: true },
//   image: { type: String },
//   likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//   comments: [commentSchema],
//   shares: { type: Number, default: 0 },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });
const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  image: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema],
  shares: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Post', postSchema);