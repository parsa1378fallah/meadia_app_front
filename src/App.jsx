import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import MainLayout from "./layouts/main/MainLayout.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Posts from "./pages/posts/posts.jsx"
import ProtectedAuthRoutes from "./protectedRoutes/protectedAuthRoutes"
import ProtectedMainRoutes from "./protectedRoutes/protectedMainRoutes.jsx";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import GetLoginDataHook from "./hooks/getLoginData/GetLoginDataHook.jsx";
import getPostsDataHook from "./hooks/getPostsData/GetPostsHook.jsx";
import { useEffect, useState } from "react";

function App() {
  GetLoginDataHook();
  getPostsDataHook();
  return (
    <div className="relative">
      <Routes>
        <Route element={<ProtectedMainRoutes />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="profile/:userName" element={<Profile />} />
            <Route path="posts" element={<Posts />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route element={<ProtectedAuthRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
