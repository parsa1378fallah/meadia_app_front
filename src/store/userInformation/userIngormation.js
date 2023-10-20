import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    userId: "",
    profile : "",
    savedPosts : []
  },
  reducers: {
    setUserInformation: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email,
      state.userId = action.payload.userId;
      state.profile = action.payload.profile;
     
    },
    setUserPrfile : (state , action) => {
      state.profile = action.payload.profile;
    },
    setSavedPosts : (state , action) =>{
       state.savedPosts = action.payload.posts;
    },
    addSavedPosts : (state , action) =>{
      state.savedPosts = [action.payload.post , ...state.savedPosts]
    }
  },
});

export const { setUserInformation , setUserPrfile , setSavedPosts , addSavedPosts } = userSlice.actions;

export const userName = (state) => state.user.userName;
export const userNameStore = (state) => state.user.userName;
export const firstName = (state) => state.user.firstName;
export const lastName = (state) => state.user.lastName;
export const email = (state) => state.user.email;


export const firstNameStore = (state) => state.user.firstName;
export const lastNameStore = (state) => state.user.lastName;
export const userIdStore = (state) => state.user.userId;
export const profileStore = (state) => state.user.profile;
export const savedPostsStore  = (state) => state.user.savedPosts;
export default userSlice.reducer;
