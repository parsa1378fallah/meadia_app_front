import { createSlice } from "@reduxjs/toolkit";
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setNewPost: (state, action) => {
      state.posts = [action.payload.post, ...state.posts];
    },
    deletePostStore(state, action) {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.postId
      );
    },
    addCommentToCurrentPost(state , action){
      state.posts.map((post)=>{
        if(post._id === action.payload.postId){
          post.comments=[...post.comments , action.payload.comment];
          return {...post};
        }
        
      })
    },
    editCurrentPostStore(state , action){
      state.posts.map((post)=>{
        if(post._id === action.payload.postId)
        {
          post.title = action.payload.title ; 
          post.description = action.payload.description;
        }
        return {...post};
      })
    }
  },
});

export const { setPosts, setNewPost, deletePostStore , addCommentToCurrentPost , editCurrentPostStore } = postsSlice.actions;

export const postsStore = (state) => state.posts.posts;

export default postsSlice.reducer;
