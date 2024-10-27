// const express = require('express');
// const router = express.Router();
// const postController = require('../controllers/postControllers');
// const { authenticateToken } = require('../middlewares/authMiddleware');

// router.get('/', postController.getAllPosts);
// router.post('/', authenticateToken, postController.createPost);
// router.put('/:id/like', authenticateToken, postController.likePost);
// router.post('/:id/comment', authenticateToken, postController.addComment);

// module.exports = router;



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

module.exports = router;