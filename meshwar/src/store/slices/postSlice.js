import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/posts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/posts', postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const likePost = createAsyncThunk(
    'posts/likePost',
    async (postId, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.put(`/posts/${postId}/like`);
        return { postId, likes: response.data.likes };
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );
  
  export const addComment = createAsyncThunk(
    'posts/addComment',
    async ({ postId, content }, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post(`/posts/${postId}/comments`, { content });
        return { postId, comment: response.data };
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const post = state.posts.find((p) => p._id === action.payload.postId);
        if (post) {
          post.likes = action.payload.likes;
        }
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const post = state.posts.find((p) => p._id === action.payload.postId);
        if (post) {
          post.comments.push(action.payload.comment);
        }
      });
  },
});

export default postSlice.reducer;