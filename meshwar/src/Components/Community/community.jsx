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
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';

// Add these new components at the top of your Community component
const OptionsDropdown = ({ isOpen, onEdit, onDelete, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border">
      <div className="py-1">
        <button
          onClick={onEdit}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
        >
          <Edit2 className="h-4 w-4 mr-2" />
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

const EditModal = ({ content, onSave, onClose }) => {
  const [editedContent, setEditedContent] = useState(content);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-4">Edit Content</h3>
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          rows="4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedContent)}
            className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
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
  const [showOptions, setShowOptions] = useState({ type: null, id: null });
  const [showEditModal, setShowEditModal] = useState({ type: null, id: null, content: '' });
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
  const handleEdit = async (type, id, content) => {
    setShowEditModal({ type, id, content });
    setShowOptions({ type: null, id: null });
  };

  const handleDelete = async (type, id, postId = null, commentId = null) => {
    try {
      let endpoint = '';
      if (type === 'post') {
        endpoint = `/posts/${id}`;
      } else if (type === 'comment') {
        endpoint = `/posts/${postId}/comments/${id}`;
      } else if (type === 'reply') {
        endpoint = `/posts/${postId}/comments/${commentId}/replies/${id}`;
      }

      await axiosInstance.delete(endpoint);
      
      // Update UI based on deletion
      if (type === 'post') {
        setPosts(posts.filter(post => post._id !== id));
      } else if (type === 'comment') {
        setPosts(posts.map(post => {
          if (post._id === postId) {
            return {
              ...post,
              comments: post.comments.filter(comment => comment._id !== id)
            };
          }
          return post;
        }));
      } else if (type === 'reply') {
        setPosts(posts.map(post => {
          if (post._id === postId) {
            return {
              ...post,
              comments: post.comments.map(comment => {
                if (comment._id === commentId) {
                  return {
                    ...comment,
                    replies: comment.replies.filter(reply => reply._id !== id)
                  };
                }
                return comment;
              })
            };
          }
          return post;
        }));
      }
    } catch (error) {
      console.error('Error deleting content:', error);
    }
    setShowOptions({ type: null, id: null });
  };

  const handleSaveEdit = async (newContent) => {
    try {
      const { type, id } = showEditModal;
      let endpoint = '';
      let postId = null;
      let commentId = null;

      if (type === 'post') {
        endpoint = `/posts/${id}`;
        postId = id;
      } else if (type === 'comment') {
        const post = posts.find(p => p.comments.some(c => c._id === id));
        endpoint = `/posts/${post._id}/comments/${id}`;
        postId = post._id;
        commentId = id;
      } else if (type === 'reply') {
        const post = posts.find(p => 
          p.comments.some(c => c.replies.some(r => r._id === id))
        );
        const comment = post.comments.find(c => 
          c.replies.some(r => r._id === id)
        );
        endpoint = `/posts/${post._id}/comments/${comment._id}/replies/${id}`;
        postId = post._id;
        commentId = comment._id;
      }

      const response = await axiosInstance.put(endpoint, { content: newContent });

      // Update UI based on edit
      if (type === 'post') {
        setPosts(posts.map(post => 
          post._id === id ? { ...post, content: newContent } : post
        ));
      } else if (type === 'comment') {
        setPosts(posts.map(post => {
          if (post._id === postId) {
            return {
              ...post,
              comments: post.comments.map(comment =>
                comment._id === id ? { ...comment, content: newContent } : comment
              )
            };
          }
          return post;
        }));
      } else if (type === 'reply') {
        setPosts(posts.map(post => {
          if (post._id === postId) {
            return {
              ...post,
              comments: post.comments.map(comment => {
                if (comment._id === commentId) {
                  return {
                    ...comment,
                    replies: comment.replies.map(reply =>
                      reply._id === id ? { ...reply, content: newContent } : reply
                    )
                  };
                }
                return comment;
              })
            };
          }
          return post;
        }));
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
    setShowEditModal({ type: null, id: null, content: '' });
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
                  <div className="flex justify-between items-center space-x-3 mb-4">
                    <div className='flex gap-4'>
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
                    {currentUser && currentUser._id === post.user._id && (
      <div className="relative">
        <button
          onClick={() => setShowOptions({ type: 'post', id: post._id })}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </button>
        <OptionsDropdown
          isOpen={showOptions.type === 'post' && showOptions.id === post._id}
          onEdit={() => handleEdit('post', post._id, post.content)}
          onDelete={() => handleDelete('post', post._id)}
          onClose={() => setShowOptions({ type: null, id: null })}
        />
      </div>
    )}
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
                         handleSharePost(post._id); 
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
                                <div className='flex justify-between'>
                                  <h4 className="font-semibold">{comment.user.fullName}</h4>
                                  {currentUser && currentUser._id === comment.user._id && (
            <div className="relative">
               <button
                onClick={() => setShowOptions({ type: 'comment', id: comment._id })}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="h-4 w-4 text-gray-500" />
              </button>
              <OptionsDropdown
                isOpen={showOptions.type === 'comment' && showOptions.id === comment._id}
                onEdit={() => handleEdit('comment', comment._id, comment.content)}
                onDelete={() => handleDelete('comment', comment._id, post._id)}
                onClose={() => setShowOptions({ type: null, id: null })}
              />
            </div>
          )}
          </div>
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
                                            <div className='flex justify-between'>
                                            <h5 className="font-semibold text-sm">{reply.user.fullName}</h5>
                                            {currentUser && currentUser._id === reply.user._id && (
            <div className="relative">
              <button
                onClick={() => setShowOptions({ type: 'reply', id: reply._id })}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="h-4 w-4 text-gray-500" />
              </button>
              <OptionsDropdown
                isOpen={showOptions.type === 'reply' && showOptions.id === reply._id}
                onEdit={() => handleEdit('reply', reply._id, reply.content)}
                onDelete={() => handleDelete('reply', reply._id, post._id, comment._id)}
                onClose={() => setShowOptions({ type: null, id: null })}
              />
            </div>
          )}
          </div>
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
         {showEditModal.type && (
    <EditModal
      content={showEditModal.content}
      onSave={handleSaveEdit}
      onClose={() => setShowEditModal({ type: null, id: null, content: '' })}
    />
  )}
      </div>
      <Footer/>
    </div>
  );
};

export default Community;









