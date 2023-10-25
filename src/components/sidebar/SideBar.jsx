import SideBarItems from "./SidebarItems";
import Dvider from "../dvider/Dvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { open, close, isSidebarOpenStore } from "../../store/sidebar";
import { useDispatch, useSelector } from "react-redux";
import Icons from "../icons/Icons";
import Searchbar from "../searchbar/Searchbar";
export default function sidebar({ classes, items }) {
  const dispatch = useDispatch();
  const closeMobileSidebar = () => {
    dispatch(close());
  };
  return (
    <>
      <AnimatePresence>
        {useSelector(isSidebarOpenStore) && (
          <>
            <motion.div
              className={` bg-slate-100 border overflow-y-scroll z-50 lg:z-0 scrollbar-hide shadow-lg w-1/2  fixed top-0 right-0 lg:hidden    ${classes}`}
              initial={{ x: "100vw" }}
              animate={{ x: "0vw", type: "easeInOut" }}
              exit={{ x: "100vw" }}
              transition={{ease: "linear",}}
            >
              <div className="border   z-0 scrollbar-hide h-screen overflow-y-scroll lg:sticky top-0 w-full">
                <div className="flex justify-between px-5 py-2">
                  <span className="font-bold text-2xl">رسانه مجازی</span>
                  <span onClick={closeMobileSidebar}><Icons iconName="Close" iconClass={`text-red-500 text-lg scale-125 font-bild`} /></span>
                </div>
                <SideBarItems items={items} />
                <Searchbar classes={`md:hidden flex`}/>
                <Dvider classes={"bg-gray-400 my-5"} margin={"px-2"} />
              </div>
            </motion.div>
            <motion.div
              initial={{opacity : 0 }}
              animate={{ opacity : 0.5 }}
              exit={{ opacity : 0}}
              className="fixed top-0 left-0 w-full h-full bg-slate-300 z-30 opacity-60 lg:hidden"
              onClick={closeMobileSidebar}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
      <div
        className={` bg-slate-100 border overflow-y-scroll z-50 lg:z-0 scrollbar-hide shadow-lg  w-full h-screen relative hidden lg:flex ${classes}`}
      >
        <div className="border   z-0 scrollbar-hide  overflow-y-scroll sticky top-0 right-0 w-full">
          <SideBarItems items={items} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-2 ">
            نمایش بیشتر
          </button>
          <Dvider classes={"bg-gray-400 my-5"} margin={"px-2"} />
        </div>
      </div>
    </>
  );
}
