// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts, createPost } from '../../store/slices/postSlice';
// import { Heart, MessageCircle, Share2, Send } from 'lucide-react';

// const Community = () => {
//   const dispatch = useDispatch();
//   const { posts, loading } = useSelector((state) => state.posts);
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   const [newPostContent, setNewPostContent] = useState('');

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleSubmitPost = () => {
//     if (newPostContent.trim()) {
//       dispatch(createPost({ content: newPostContent }));
//       setNewPostContent('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-2xl mx-auto px-4">
//         {isAuthenticated && (
//           <div className="bg-white rounded-lg shadow p-6 mb-8">
//             <div className="flex items-start space-x-4">
//               <img
//                 src={user.profilePic || "/api/placeholder/40/40"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <textarea
//                   value={newPostContent}
//                   onChange={(e) => setNewPostContent(e.target.value)}
//                   placeholder="What's on your mind?"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//                   rows="3"
//                 />
//                 <button
//                   onClick={handleSubmitPost}
//                   className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
//                 >
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {loading ? (
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {posts.map((post) => (
//               <div key={post._id} className="bg-white rounded-lg shadow">
//                 <div className="p-4">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <img
//                       src={post.user.profilePic || "/api/placeholder/40/40"}
//                       alt={post.user.fullName}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <h3 className="font-semibold">{post.user.fullName}</h3>
//                       <p className="text-sm text-gray-500">
//                         {new Date(post.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-800 mb-4">{post.content}</p>
                  
//                   {post.image && (
//                     <img
//                       src={post.image}
//                       alt="Post content"
//                       className="rounded-lg mb-4 w-full"
//                     />
//                   )}
                  
//                   <div className="flex items-center justify-between pt-4 border-t">
//                     <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
//                       <Heart className={`h-5 w-5 ${post.likes.includes(user?.id) ? 'fill-red-500 text-red-500' : ''}`} />
//                       <span>{post.likes.length}</span>
//                     </button>
                    
//                     <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
//                       <MessageCircle className="h-5 w-5" />
//                       <span>{post.comments.length}</span>
//                     </button>
                    
//                     <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
//                       <Share2 className="h-5 w-5" />
//                       <span>{post.shares}</span>
//                     </button>
//                   </div>
//                 </div>

//                 {post.comments.length > 0 && (
//                   <div className="bg-gray-50 p-4 border-t">
//                     {post.comments.map((comment) => (
//                       <div key={comment._id} className="mb-4">
//                         <div className="flex items-start space-x-3">
//                           <img
//                             src={comment.user.profilePic || "/api/placeholder/32/32"}
//                             alt={comment.user.fullName}
//                             className="w-8 h-8 rounded-full"
//                           />
//                           <div className="flex-1">
//                             <div className="bg-gray-100 rounded-lg p-3">
//                               <h4 className="font-semibold">{comment.user.fullName}</h4>
//                               <p className="text-gray-800">{comment.content}</p>
//                             </div>
//                             <div className="mt-2 ml-2 text-sm text-gray-500">
//                               <button className="hover:text-teal-500">Reply</button>
//                               <span className="mx-2">·</span>
//                               <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isAuthenticated && (
//                   <div className="p-4 border-t">
//                     <div className="flex items-center space-x-3">
//                       <img
//                         src={user.profilePic || "/api/placeholder/32/32"}
//                         alt="Your profile"
//                         className="w-8 h-8 rounded-full"
//                       />
//                       <div className="flex-1 flex items-center space-x-2">
//                         <input
//                           type="text"
//                           placeholder="Write a comment..."
//                           className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//                         />
//                         <button className="p-2 text-teal-500 hover:bg-teal-50 rounded-full transition-colors">
//                           <Send className="h-5 w-5" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Community;








// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts, createPost, likePost, addComment } from '../../store/slices/postSlice';
// import { Heart, MessageCircle, Share2, Send } from 'lucide-react';

// const Community = () => {
//   const dispatch = useDispatch();
//   const { posts, loading } = useSelector((state) => state.posts);
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   const [newPostContent, setNewPostContent] = useState('');
//   const [commentContent, setCommentContent] = useState('');

//   // Fetch all posts when the component mounts
//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   // Function to handle new post submission
//   const handleSubmitPost = () => {
//     if (newPostContent.trim()) {
//       dispatch(createPost({ content: newPostContent }));
//       setNewPostContent('');
//     }
//   };

//   // Function to handle liking a post
//   const handleLikePost = (postId) => {
//     dispatch(likePost(postId));
//   };

//   // Function to handle adding a comment to a post
//   const handleAddComment = (postId) => {
//     if (commentContent.trim()) {
//       dispatch(addComment({ postId, content: commentContent }));
//       setCommentContent('');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-2xl mx-auto px-4">
        
//         {/* New post form */}
//         {isAuthenticated && (
//           <div className="bg-white rounded-lg shadow p-6 mb-8">
//             <div className="flex items-start space-x-4">
//               <img
//                 src={user.profilePic || "/api/placeholder/40/40"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <textarea
//                   value={newPostContent}
//                   onChange={(e) => setNewPostContent(e.target.value)}
//                   placeholder="What's on your mind?"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//                   rows="3"
//                 />
//                 <button
//                   onClick={handleSubmitPost}
//                   className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
//                 >
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Loading spinner */}
//         {loading ? (
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
//           </div>
//         ) : (
//           <div className="space-y-6">
            
//             {/* Render each post */}
//             {posts.map((post) => (
//               <div key={post._id} className="bg-white rounded-lg shadow">
//                 <div className="p-4">
                  
//                   {/* Post Header */}
//                   <div className="flex items-center space-x-3 mb-4">
//                     <img
//                       src={post.user.profilePic || "/api/placeholder/40/40"}
//                       alt={post.user.fullName}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <h3 className="font-semibold">{post.user.fullName}</h3>
//                       <p className="text-sm text-gray-500">
//                         {new Date(post.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Post Content */}
//                   <p className="text-gray-800 mb-4">{post.content}</p>
                  
//                   {/* Post Image */}
//                   {post.image && (
//                     <img
//                       src={post.image}
//                       alt="Post content"
//                       className="rounded-lg mb-4 w-full"
//                     />
//                   )}
                  
//                   {/* Post Actions */}
//                   <div className="flex items-center justify-between pt-4 border-t">
//                     {/* Like Button */}
//                     <button 
//                       onClick={() => handleLikePost(post._id)}
//                       className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
//                     >
//                       <Heart className={`h-5 w-5 ${post.likes.includes(user?.id) ? 'fill-red-500 text-red-500' : ''}`} />
//                       <span>{post.likes.length}</span>
//                     </button>
                    
//                     {/* Comment Button */}
//                     <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
//                       <MessageCircle className="h-5 w-5" />
//                       <span>{post.comments.length}</span>
//                     </button>
                    
//                     {/* Share Button */}
//                     <button className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors">
//                       <Share2 className="h-5 w-5" />
//                       <span>{post.shares}</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Render Comments */}
//                 {post.comments.length > 0 && (
//                   <div className="bg-gray-50 p-4 border-t">
//                     {post.comments.map((comment) => (
//                       <div key={comment._id} className="mb-4">
//                         <div className="flex items-start space-x-3">
//                           <img
//                             src={comment.user.profilePic || "/api/placeholder/32/32"}
//                             alt={comment.user.fullName}
//                             className="w-8 h-8 rounded-full"
//                           />
//                           <div className="flex-1">
//                             <div className="bg-gray-100 rounded-lg p-3">
//                               <h4 className="font-semibold">{comment.user.fullName}</h4>
//                               <p className="text-gray-800">{comment.content}</p>
//                             </div>
//                             <div className="mt-2 ml-2 text-sm text-gray-500">
//                               <button className="hover:text-teal-500">Reply</button>
//                               <span className="mx-2">·</span>
//                               <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Add Comment Form */}
//                 {isAuthenticated && (
//                   <div className="p-4 border-t">
//                     <div className="flex items-center space-x-3">
//                       <img
//                         src={user.profilePic || "/api/placeholder/32/32"}
//                         alt="Your profile"
//                         className="w-8 h-8 rounded-full"
//                       />
//                       <div className="flex-1 flex items-center space-x-2">
//                         <input
//                           type="text"
//                           value={commentContent}
//                           onChange={(e) => setCommentContent(e.target.value)}
//                           placeholder="Write a comment..."
//                           className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//                         />
//                         <button
//                           onClick={() => handleAddComment(post._id)}
//                           className="p-2 text-teal-500 hover:bg-teal-50 rounded-full transition-colors"
//                         >
//                           <Send className="h-5 w-5" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Community;





// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../../axiosConfig';
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer';
// import { Heart, MessageCircle, Share2, Send } from 'lucide-react';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   WhatsappIcon,
// } from 'react-share';

// const Community = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [newPostContent, setNewPostContent] = useState('');
//   const [showCommentBox, setShowCommentBox] = useState({});
//   const [commentContent, setCommentContent] = useState({});
//   const [showShareModal, setShowShareModal] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);

//   // تحقق من وجود المستخدم عند تحميل الصفحة
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axiosInstance.get('/auth/me'); // اضيفي هذا الراوت في الباك اند
//         setCurrentUser(response.data);
//       } catch (error) {
//         console.error('Auth error:', error);
//       }
//     };
//     checkAuth();
//   }, []);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       const response = await axiosInstance.get('/posts');
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmitPost = async (e) => {
//     e.preventDefault();
//     if (!newPostContent.trim()) return;
    
//     try {
//       const response = await axiosInstance.post('/posts', { 
//         content: newPostContent 
//       });
//       setPosts(prevPosts => [response.data, ...prevPosts]);
//       setNewPostContent('');
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   const handleLikePost = async (postId) => {
//     try {
//       const response = await axiosInstance.put(`/posts/${postId}/like`);
//       setPosts(prevPosts => 
//         prevPosts.map(post => 
//           post._id === postId ? { ...post, likes: response.data.likes } : post
//         )
//       );
//     } catch (error) {
//       console.error('Error liking post:', error);
//     }
//   };

//   const toggleCommentBox = (postId) => {
//     setShowCommentBox(prev => ({
//       ...prev,
//       [postId]: !prev[postId]
//     }));
//   };

//   const handleAddComment = async (postId) => {
//     if (!commentContent[postId]?.trim()) return;

//     try {
//       const response = await axiosInstance.post(`/posts/${postId}/comment`, {
//         content: commentContent[postId]
//       });
      
//       setPosts(prevPosts => 
//         prevPosts.map(post => 
//           post._id === postId 
//             ? { ...post, comments: [...post.comments, response.data] }
//             : post
//         )
//       );
//       setCommentContent(prev => ({ ...prev, [postId]: '' }));
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };

//   // Share Modal Component
//   const ShareModal = ({ postId, onClose }) => {
//     const shareUrl = `${window.location.origin}/post/${postId}`;
    
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white rounded-lg p-6 w-80">
//           <h3 className="text-lg font-semibold mb-4">Share this post</h3>
//           <div className="flex justify-around mb-4">
//             <FacebookShareButton url={shareUrl}>
//               <FacebookIcon size={40} round />
//             </FacebookShareButton>
//             <TwitterShareButton url={shareUrl}>
//               <TwitterIcon size={40} round />
//             </TwitterShareButton>
//             <WhatsappShareButton url={shareUrl}>
//               <WhatsappIcon size={40} round />
//             </WhatsappShareButton>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 ">
//       <NavBar/>
//       <div className="max-w-2xl mx-auto px-4 pt-8">
//         {currentUser && (
//           <div className="bg-white rounded-lg shadow p-6 mb-8">
//             <div className="flex items-start space-x-4">
//               <img
//                 src={currentUser.profilePic || "/api/placeholder/40/40"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="flex-1">
//                 <textarea
//                   value={newPostContent}
//                   onChange={(e) => setNewPostContent(e.target.value)}
//                   placeholder="What's on your mind?"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//                   rows="3"
//                 />
//                 <button
//                   onClick={handleSubmitPost}
//                   className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
//                 >
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {loading ? (
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {posts.map((post) => (
//               <div key={post._id} className="bg-white rounded-lg shadow">
//                 <div className="p-4">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <img
//                       src={post.user.profilePic || "/api/placeholder/40/40"}
//                       alt={post.user.fullName}
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <h3 className="font-semibold">{post.user.fullName}</h3>
//                       <p className="text-sm text-gray-500">
//                         {new Date(post.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-800 mb-4">{post.content}</p>
                  
//                   {post.image && (
//                     <img
//                       src={post.image}
//                       alt="Post content"
//                       className="rounded-lg mb-4 w-full"
//                     />
//                   )}
                  
//                   <div className="flex items-center justify-between pt-4 border-t">
//                     <button 
//                       onClick={() => handleLikePost(post._id)}
//                       className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
//                     >
//                       <Heart className={`h-5 w-5 ${post.likes.includes(currentUser?._id) ? 'fill-red-500 text-red-500' : ''}`} />
//                       <span>{post.likes.length}</span>
//                     </button>
                    
//                     <button
//                       onClick={() => toggleCommentBox(post._id)}
//                       className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors"
//                     >
//                       <MessageCircle className="h-5 w-5" />
//                       <span>{post.comments.length}</span>
//                     </button>
                    
//                     <button 
//                       onClick={() => setShowShareModal(post._id)}
//                       className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors"
//                     >
//                       <Share2 className="h-5 w-5" />
//                       <span>{post.shares}</span>
//                     </button>
//                   </div>
//                 </div>

//                 {showCommentBox[post._id] && (
//                   <>
//                     {post.comments.length > 0 && (
//                       <div className="bg-gray-50 p-4 border-t">
//                         {post.comments.map((comment) => (
//                           <div key={comment._id} className="mb-4">
//                             <div className="flex items-start space-x-3">
//                               <img
//                                 src={comment.user.profilePic || "/api/placeholder/32/32"}
//                                 alt={comment.user.fullName}
//                                 className="w-8 h-8 rounded-full"
//                               />
//                               <div className="flex-1">
//                                 <div className="bg-gray-100 rounded-lg p-3">
//                                   <h4 className="font-semibold">{comment.user.fullName}</h4>
//                                   <p className="text-gray-800">{comment.content}</p>
//                                 </div>
//                                 <div className="mt-2 ml-2 text-sm text-gray-500">
//                                   <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {currentUser && (
//                       <div className="p-4 border-t">
//                         <div className="flex items-center space-x-3">
//                           <img
//                             src={currentUser.profilePic || "/api/placeholder/32/32"}
//                             alt="Your profile"
//                             className="w-8 h-8 rounded-full"
//                           />
//                           <div className="flex-1 flex items-center space-x-2">
//                             <input
//                               type="text"
//                               value={commentContent[post._id] || ''}
//                               onChange={(e) => setCommentContent(prev => ({
//                                 ...prev,
//                                 [post._id]: e.target.value
//                               }))}
//                               placeholder="Write a comment..."
//                               className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
//                             />
//                             <button
//                               onClick={() => handleAddComment(post._id)}
//                               className="p-2 text-teal-500 hover:bg-teal-50 rounded-full transition-colors"
//                             >
//                               <Send className="h-5 w-5" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {showShareModal && (
//           <ShareModal
//             postId={showShareModal}
//             onClose={() => setShowShareModal(null)}
//           />
//         )}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Community;





// Frontend - Community.jsx
import React, { useEffect, useState, useRef } from 'react';
import axiosInstance from '../../axiosConfig';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Heart, MessageCircle, Share2, Send, Image, Reply } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState({});
  const [commentContent, setCommentContent] = useState({});
  const [showShareModal, setShowShareModal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [showReplyBox, setShowReplyBox] = useState({});
  const [replyContent, setReplyContent] = useState({});
  const imageInputRef = useRef(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get('/auth/me');
        setCurrentUser(response.data);
      } catch (error) {
        console.error('Auth error:', error);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get('/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(file);
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (!newPostContent.trim() && !postImage) return;
    
    try {
      const formData = new FormData();
      formData.append('content', newPostContent);
      if (postImage) {
        formData.append('image', postImage);
      }
      
      const response = await axiosInstance.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setPosts(prevPosts => [response.data, ...prevPosts]);
      setNewPostContent('');
      setPostImage(null);
      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const response = await axiosInstance.put(`/posts/${postId}/like`);
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post._id === postId ? { ...post, likes: response.data.likes } : post
        )
      );
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const toggleCommentBox = (postId) => {
    setShowCommentBox(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleReplyBox = (commentId) => {
    setShowReplyBox(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const handleAddComment = async (postId) => {
    if (!commentContent[postId]?.trim()) return;

    try {
      const response = await axiosInstance.post(`/posts/${postId}/comment`, {
        content: commentContent[postId]
      });
      
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post._id === postId 
            ? { ...post, comments: [...post.comments, response.data] }
            : post
        )
      );
      setCommentContent(prev => ({ ...prev, [postId]: '' }));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleAddReply = async (postId, commentId) => {
    if (!replyContent[commentId]?.trim()) return;

    try {
      const response = await axiosInstance.post(`/posts/${postId}/comment/${commentId}/reply`, {
        content: replyContent[commentId]
      });
      
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post._id === postId 
            ? {
                ...post,
                comments: post.comments.map(comment =>
                  comment._id === commentId
                    ? { ...comment, replies: [...comment.replies, response.data] }
                    : comment
                )
              }
            : post
        )
      );
      setReplyContent(prev => ({ ...prev, [commentId]: '' }));
      setShowReplyBox(prev => ({ ...prev, [commentId]: false }));
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  

  const ShareModal = ({ postId, onClose }) => {
    const shareUrl = `${window.location.origin}/post/${postId}`;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-80">
          <h3 className="text-lg font-semibold mb-4">Share this post</h3>
          <div className="flex justify-around mb-4">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
        
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const handleSharePost = async (postId) => {
    try {
      const response = await axiosInstance.put(`/posts/${postId}/share`);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, shares: response.data.shares } : post
        )
      );
    } catch (error) {
      console.error('Error sharing post:', error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="max-w-2xl mx-auto px-4 pt-8">
        {currentUser && (
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex items-start space-x-4">
              <img
              src={`http://localhost:3003/${currentUser.profilePic}`|| "/api/placeholder/40/40"} 
               
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Share your experience..."
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  rows="3"
                />
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      ref={imageInputRef}
                    />
                    <button
                      onClick={() => imageInputRef.current?.click()}
                      className="flex items-center space-x-2 text-gray-500 hover:text-teal-500"
                    >
                      <Image className="h-5 w-5" />
                      <span>Add Image</span>
                    </button>
                    {postImage && (
                      <span className="text-sm text-gray-500">
                        {postImage.name}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleSubmitPost}
                    className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post._id} className="bg-white rounded-lg shadow">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
            
                    <img
                    
                      src={`http://localhost:3003/${post.user.profilePic}`} 
                      alt={post.user.fullName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{post.user.fullName}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-800 mb-4">{post.content}</p>
                  
                  {post.image && (
                    <img
            
                  
                     src={`http://localhost:3003${post.image}`}

                      alt="Post content"
                      className="rounded-lg mb-4 w-full object-cover max-h-96"
                    />
                  )}
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className='flex gap-4'>
                    <button 
                      onClick={() => handleLikePost(post._id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Heart className={`h-5 w-5 ${post.likes.includes(currentUser?._id) ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{post.likes.length}</span>
                    </button>
                    
                    <button
                      onClick={() => toggleCommentBox(post._id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments.length}</span>
                    </button>
                    </div>
                    
                    <button 
                       onClick={() => {
                         setShowShareModal(post._id);
                         handleSharePost(post._id); // Call to update share count
                      }}
                      className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors"
                    >
                      <Share2 className="h-5 w-5" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>

                {showCommentBox[post._id] && (
                  <>
                    {post.comments.length > 0 && (
                      <div className="bg-gray-50 p-4 border-t">
                        {post.comments.map((comment) => (
                          <div key={comment._id} className="mb-4">
                            <div className="flex items-start space-x-3">
                              <img
                          
                             src={`http://localhost:3003/${comment.user.profilePic}`|| "/api/placeholder/32/32"} 
                                alt={comment.user.fullName}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="bg-gray-100 rounded-lg p-3">
                                  <h4 className="font-semibold">{comment.user.fullName}</h4>
                                  <p className="text-gray-800">{comment.content}</p>
                                </div>
                                <div className="mt-2 ml-2 flex items-center space-x-4 text-sm text-gray-500">
                                  <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                                  <button
                                    onClick={() => toggleReplyBox(comment._id)}
                                    className="flex items-center space-x-1 hover:text-teal-500"
                                  >
                                    <Reply className="h-4 w-4" />
                                    <span>Reply</span>
                                  </button>
                                </div>

                                {/* Replies */}
                                {comment.replies && comment.replies.length > 0 && (
                                  <div className="ml-8 mt-2 space-y-2">
                                    {comment.replies.map((reply) => (
                                      <div key={reply._id} className="flex items-start space-x-2">
                                        <img
                                        src={`http://localhost:3003/${reply.user.profilePic}`|| "/api/placeholder/24/24"} 
                                          alt={reply.user.fullName}
                                          className="w-6 h-6 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                          <div className="bg-gray-100 rounded-lg p-2">
                                            <h5 className="font-semibold text-sm">{reply.user.fullName}</h5>
                                            <p className="text-sm text-gray-800">{reply.content}</p>
                                          </div>
                                          <span className="text-xs text-gray-500 ml-2">
                                            {new Date(reply.createdAt).toLocaleDateString()}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Reply Box */}
                                {showReplyBox[comment._id] && (
                                  <div className="ml-8 mt-2">
                                    <div className="flex items-center space-x-2">
                                      <img
                                      src={`http://localhost:3003/${currentUser?.profilePic|| "/api/placeholder/24/24"}`} 
                                        alt="Your profile"
                                        className="w-6 h-6 rounded-full object-cover"
                                      />
                                      <input
                                        type="text"
                                        value={replyContent[comment._id] || ''}
                                        onChange={(e) => setReplyContent(prev => ({
                                          ...prev,
                                          [comment._id]: e.target.value
                                        }))}
                                        placeholder="Write a reply..."
                                        className="flex-1 p-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                      />
                                      <button
                                        onClick={() => handleAddReply(post._id, comment._id)}
                                        className="p-2 text-teal-500 hover:bg-teal-50 rounded-full transition-colors"
                                      >
                                        <Send className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentUser && (
                      <div className="p-4 border-t">
                        <div className="flex items-center space-x-3">
                          <img
                          src={`http://localhost:3003/${currentUser.profilePic}`|| "/api/placeholder/32/32"} 
                            alt="Your profile"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1 flex items-center space-x-2">
                            <input
                              // Frontend - Community.jsx (continued)
                              type="text"
                              value={commentContent[post._id] || ''}
                              onChange={(e) => setCommentContent(prev => ({
                                ...prev,
                                [post._id]: e.target.value
                              }))}
                              placeholder="Write a comment..."
                              className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                            <button
                              onClick={() => handleAddComment(post._id)}
                              className="p-2 text-teal-500 hover:bg-teal-50 rounded-full transition-colors"
                            >
                              <Send className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {showShareModal && (
          <ShareModal
            postId={showShareModal}
            onClose={() => setShowShareModal(null)}
          />
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Community;
