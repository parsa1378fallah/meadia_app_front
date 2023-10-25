import { createSlice } from "@reduxjs/toolkit";
export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    userId: "",
    profile: "",
    posts: [],
    isFollowing: false,
  },
  reducers: {
    setUserProfileInformation: (state, action) => {
      state.userName = action.payload.user.userName;
      state.firstName = action.payload.user.firstName;
      state.lastName = action.payload.user.lastName;
      (state.email = action.payload.user.email),
        (state.userId = action.payload.user._id);
      state.profile = action.payload.user.profile;
      (state.posts = action.payload.user.userPosts),
        (state.isFollowing = action.payload.isFollowing);
    },
    setUserProfilePostsWhenUserIsINProfilePage: (state, action) => {
      state.posts = [action.payload.post, ...state.posts];
    },
    deleteUserProfilePostsWhenUserIsINProfilePage: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.postId
      );
    },
    setUserProfileFollow(state, action) {
      state.isFollowing = true;
    },
    setUserProfileUnfollow(state, action) {
      state.isFollowing = false;
    },
    addCommentToPtofilePosts(state, action) {
      state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          post.comments = [...post.comments, action.payload.comment];
          return { ...post };
        }
      });
    },
    editCurrentInProfilePostStore(state , action){
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

export const {
  setUserProfileInformation,
  setUserProfilePostsWhenUserIsINProfilePage,
  deleteUserProfilePostsWhenUserIsINProfilePage,
  setUserProfileFollow,
  setUserProfileUnfollow,
  addCommentToPtofilePosts,
  editCurrentInProfilePostStore
} = userProfileSlice.actions;

export const userNameProfileStore = (state) => state.userProfile.userName;
export const firstNameProfileStore = (state) => state.userProfile.firstName;
export const lastNameProfileStore = (state) => state.userProfile.lastName;
export const emailProfileStore = (state) => state.userProfile.email;
export const userIdProfileStore = (state) => state.userProfile.userId;
export const profilePhotoStore = (state) => state.userProfile.profile;
export const postsProfileStore = (state) => state.userProfile.posts;
export const isFollowingProfileStore = (state) => state.userProfile.isFollowing;

export const authorOfProfilePostsStore = (state) => {
  state.userProfile;
};

export default userProfileSlice.reducer;
