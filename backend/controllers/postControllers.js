// const Post = require('../models/posts');

// exports.getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate('user', 'fullName profilePic')
//       .populate('comments.user', 'fullName profilePic')
//       .populate('comments.replies.user', 'fullName profilePic')
//       .sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createPost = async (req, res) => {
//   try {
//     const { content, image } = req.body;
//     const post = new Post({
//       user: req.user.id,
//       content,
//       image
//     });
//     await post.save();
//     const populatedPost = await Post.findById(post._id)
//       .populate('user', 'fullName profilePic');
//     res.status(201).json(populatedPost);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.likePost = async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       if (!post.likes.includes(req.user.id)) {
//         post.likes.push(req.user.id);
//       } else {
//         post.likes = post.likes.filter((id) => id.toString() !== req.user.id);
//       }
//       await post.save();
//       res.json({ likes: post.likes });
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   };

// exports.addComment = async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       const comment = {
//         user: req.user.id,
//         content: req.body.content,
//         createdAt: new Date(),
//       };
//       post.comments.push(comment);
//       await post.save();
      
//       const populatedComment = await post.populate({
//         path: 'comments.user',
//         select: 'fullName profilePic',
//       }).execPopulate();
  
//       res.status(201).json(populatedComment.comments.slice(-1)[0]);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   };
  

const Post = require('../models/posts');
const upload = require('../middlewares/multerConfig');

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    let image = null;
    
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }
    
    const post = new Post({
      user: req.user.id,
      content,
      image
    });
    
    await post.save();
    
    const populatedPost = await Post.findById(post._id)
      .populate('user', 'fullName profilePic')
      .populate('comments.user', 'fullName profilePic')
      .populate('comments.replies.user', 'fullName profilePic');
      
    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const comment = {
      user: req.user.id,
      content: req.body.content,
      replies: [],
      createdAt: new Date()
    };
    
    post.comments.push(comment);
    await post.save();
    
    const populatedPost = await Post.findById(post._id)
      .populate('comments.user', 'fullName profilePic')
      .populate('comments.replies.user', 'fullName profilePic');
    
    const newComment = populatedPost.comments[populatedPost.comments.length - 1];
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addReply = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const comment = post.comments.id(req.params.commentId);
    
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    
    const reply = {
      user: req.user.id,
      content: req.body.content,
      createdAt: new Date()
    };
    
    comment.replies.push(reply);
    await post.save();
    
    const populatedPost = await Post.findById(post._id)
      .populate('comments.replies.user', 'fullName profilePic');
    
    const updatedComment = populatedPost.comments.id(req.params.commentId);
    const newReply = updatedComment.replies[updatedComment.replies.length - 1];
    
    res.status(201).json(newReply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.user.id)) {
      post.likes.push(req.user.id);
    } else {
      post.likes = post.likes.filter((id) => id.toString() !== req.user.id);
    }
    await post.save();
    res.json({ likes: post.likes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.sharePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Increment the shares count
    post.shares += 1;
    await post.save();

    res.status(200).json({ shares: post.shares });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', 'fullName profilePic')
      .populate('comments.user', 'fullName profilePic')
      .populate('comments.replies.user', 'fullName profilePic')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};