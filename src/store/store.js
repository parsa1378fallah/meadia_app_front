import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter";
import userReducer from "./userInformation/userIngormation";
import loginReducer from "./login/login.js";
import postsReducer from "./posts/posts.js"
import  userProfileReducer  from "./profileUserInformation";
import sidebarReducer from "./sidebar"
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
    posts : postsReducer , 
    userProfile : userProfileReducer ,
    sidebar : sidebarReducer
  },
});
