const Group = require('../models/groups');
const User = require('../models/users');

// exports.createGroup = async (req, res) => {
//   try {
//     const { name, description, members } = req.body;
//     const creator = req.user._id; // Assuming you have authentication middleware

//     const newGroup = new Group({
//       name,
//       description,
//       creator,
//       members
//     //   groupMembers: [creator, ...members]
//     });

//     await newGroup.save();

//     // Update users' group array
//     // await User.updateMany(
//     //   { _id: { $in: [creator, ...members] } },
//     //   { $push: { group: { groupId: newGroup._id } } }
//     // );

//     res.status(201).json({ message: 'Group created successfully', group: newGroup });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating group', error: error.message });
//   }
// };
import Cookies from 'js-cookie';

exports.createGroup = async () => {
  try {
    const token = Cookies.get('token'); // الحصول على الـ token من الـ cookies
    const creatorId = Cookies.get('userId'); // الحصول على معرف المستخدم من الـ cookies

    await axios.post(
      'http://localhost:3003/api/groups/create',
      {
        name: newGroupName,
        description: newGroupDescription,
        members: newGroupMembers.split(',').map(id => id.trim()),
        creator: creatorId // إضافة معرف المستخدم كـ creator
      },
      {
        headers: {
          Authorization: `Bearer ${token}` // تمرير الـ token في الـ headers
        }
      }
    );

    setShowCreateGroupModal(false);
    fetchGroups();
    setNewGroupName('');
    setNewGroupDescription('');
    setNewGroupMembers('');
  } catch (error) {
    console.error('Error creating group:', error);
  }
};


exports.getGroups = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have authentication middleware
    const groups = await Group.find({ groupMembers: userId, isDeleted: false })
      .populate('creator', 'fullName')
      .populate('groupMembers', 'fullName');
    
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching groups', error: error.message });
  }
};