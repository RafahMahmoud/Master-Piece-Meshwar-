// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const groupSchema = new Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   isDeleted: { type: Boolean, default: false } ,
//   groupMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] ,
//   trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }] ,
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const Group = mongoose.model('Group', groupSchema);
// module.exports = Group;





const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  groupMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;