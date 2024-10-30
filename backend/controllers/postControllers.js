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


exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post || post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    post.content = req.body.content;
    await post.save();
    
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.softDeletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post || post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    post.isDeleted = true;
    await post.save();
    
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const comment = post.comments.id(req.params.commentId);
    
    if (!comment || comment.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    comment.content = req.body.content;
    await post.save();
    
    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.softDeleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const comment = post.comments.id(req.params.commentId);
    
    if (!comment || comment.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    comment.isDeleted = true;
    await post.save();
    
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Similar functions for replies...
exports.updateReply = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const comment = post.comments.id(req.params.commentId);
    const reply = comment.replies.id(req.params.replyId);
    
    if (!reply || reply.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    reply.content = req.body.content;
    await post.save();
    
    res.json(reply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.softDeleteReply = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const comment = post.comments.id(req.params.commentId);
    const reply = comment.replies.id(req.params.replyId);
    
    if (!reply || reply.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    reply.isDeleted = true;
    await post.save();
    
    res.json({ message: 'Reply deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



