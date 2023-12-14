import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/home/Home.jsx"));
const Profile = lazy(() => import("./pages/profile/Profile.jsx"));
const Login = lazy(() => import("./pages/login/Login.jsx"));
const Register = lazy(() => import("./pages/register/Register.jsx"));
const MainLayout = lazy(() => import("./layouts/main/MainLayout.jsx"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.jsx"));
const Posts = lazy(() => import("./pages/posts/posts.jsx"));
const ProtectedAuthRoutes = lazy(() =>
  import("./protectedRoutes/protectedAuthRoutes")
);
const ProtectedMainRoutes = lazy(() =>
  import("./protectedRoutes/protectedMainRoutes.jsx")
);
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GetLoginDataHook from "./hooks/getLoginData/GetLoginDataHook.jsx";
import Loading from "./components/loading/loading.jsx";
function App() {
  GetLoginDataHook();
  return (
    <div className="relative">
      <Suspense
        fallback={
          <Loading
            type="loading"
            size={150}
            color={"#455689"}
            classes={"w-full h-screen flex items-center justify-center"}
          />
        }
      >
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
      </Suspense>
    </div>
  );
}

export default App;
