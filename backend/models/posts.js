// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const postSchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   isDeleted: { type: Boolean, default: false } ,
//   report: { type: Number, default: 0 },
//   like: { type: Number, default: 0 },
//   photos: { type: [String] },
//   description: { type: [String] },
//   location: { type: [String] },
//   reportedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] ,
//   likededBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] ,
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const Post = mongoose.model('Post', postSchema);
// module.exports = Post;





const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  replies: [replySchema],
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  image: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema],
  shares: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);