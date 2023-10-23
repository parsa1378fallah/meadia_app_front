import Icons from "../icons/Icons";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { access, denied } from "../../store/login/login";
import { useNavigate } from "react-router-dom";
import {
  userNameStore,
  lastName,
  email,
  firstName,
  userIdStore,
  profileStore,
} from "../../store/userInformation/userIngormation";
import { open, close, isSidebarOpenStore } from "../../store/sidebar";
import { useState, useEffect , useRef } from "react";
const baseProfileUrl = import.meta.env.VITE_Image_Base_URL;
export default function topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(userNameStore);
  const [showProfileItems, setProfileItems] = useState(false);
  const profile = useSelector(profileStore);
  const profileItemsElement = useRef(null);
  const toggleshowProfileItems = () => {
    setProfileItems((current) => !current);
  };
  const logOut = () => {
    localStorage.removeItem("social_medai_key");
    dispatch(denied());
  };

  const isSidebarOpen = useSelector(isSidebarOpenStore);
  const opentSidebarInMobileSize = () => {
    isSidebarOpen ? dispatch(close()) : dispatch(open());
  };
  useEffect(()=>{
    const hideProfileElements = (e)=>{
      if(!profileItemsElement.current) return ; 
      if(!profileItemsElement.current.contains(e.target))
      {}
    }
  },[])
  return (
    <div className="topbar w-full h-14 bg-sky-700 flex justify-between items-center px-4 m-auto">
      <div className="topbarRight flex  gap-4 sm:gap-8 items-center">
        <span className="logo text-white text-ms md:text-xl  font-bold whitespace-nowrap hidden lg:flex">
          رسانه مجازی
        </span>
        <span
          className="logo text-white text-ms md:text-xl  font-bold whitespace-nowrap flex lg:hidden"
          onClick={opentSidebarInMobileSize}
        >
          <Icons iconName="Menu" />
        </span>
        <div className="topbarLinks text-white flex gap-3  ">
          <span className="text-xs sm:text-sm">
            <Link to="/">صفحه اصلی</Link>
          </span>
          <span className="text-xs sm:text-sm">
            <Link to={`/profile/${userName}`}>پروفایل</Link>
          </span>
        </div>
      </div>
      <div className="toobarCenter relative  hidden md:flex">
        <Searchbar classes={`min-w-[330px] max-w-[400]`} />
        <div className="absolute top-1/2 right-3 -translate-y-1/2">
          <Icons iconName="Search" />
        </div>
      </div>
      <div className="topbarLeft flex items-center ">
        <div className=" gap-4 col-span-2 flex items-end sm:items-center  mr-auto">
          <div className="topbarIcons hidden sm:flex justify-center items-center gap-4 mr-auto">
            <Icons iconName="Person" badgeText="1" iconClass={"text-white"} />
            <Icons iconName="Chat" badgeText="2" iconClass={"text-white"} />
            <Icons
              iconName="Notifications"
              badgeText="3"
              iconClass={"text-white"}
            />
          </div>
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full mr-auto imageProfile"
              src={`${baseProfileUrl}${profile}`}
              onClick={toggleshowProfileItems}
            />
            {showProfileItems ? (
              <div
                className="profileItems flex flex-col absolute w-32 bg-white top-full translate-x-2/3 translate-y-1  rounded-lg shadow-xl overflow-hidden z-50"
                onClick={toggleshowProfileItems}
                ref={profileItemsElement}
              >
                <div
                  className="profileItem p-4 text-xs hover:bg-slate-100 duration-200"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  داشبورد
                </div>
                <div
                  className="profileItems p-4 text-xs hover:bg-slate-100 duration-200"
                  onClick={logOut}
                >
                  خروج
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
