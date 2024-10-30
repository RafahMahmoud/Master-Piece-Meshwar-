const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');
const { authenticateToken } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multerConfig');

router.get('/', postController.getAllPosts);
router.post('/', authenticateToken, upload.single('image'), postController.createPost);
router.put('/:id/like', authenticateToken, postController.likePost);
router.post('/:id/comment', authenticateToken, postController.addComment);
router.post('/:postId/comment/:commentId/reply', authenticateToken, postController.addReply);
router.put('/:id/share', authenticateToken, postController.sharePost);

router.put('/:id', authenticateToken, postController.updatePost);
router.delete('/:id', authenticateToken, postController.softDeletePost);
router.put('/:postId/comments/:commentId', authenticateToken, postController.updateComment);
router.delete('/:postId/comments/:commentId', authenticateToken, postController.softDeleteComment);
router.put('/:postId/comments/:commentId/replies/:replyId', authenticateToken, postController.updateReply);
router.delete('/:postId/comments/:commentId/replies/:replyId', authenticateToken, postController.softDeleteReply);

module.exports = router;