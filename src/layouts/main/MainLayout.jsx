import { Outlet, Link } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar.jsx";
const sidebarItems = [
    { icon: "PostAdd", value: "پست ها" ,  path : '/posts' },
    { icon: "Chat", value: "گفتگو ها" },
    { icon: "PlayCircleFilled", value: "ویدئو ها" },
    { icon: "Groups", value: "گروه ها" },
    { icon: "WorkOutline", value: "مشاغل" },
    { icon: "Event", value: "رویداد ها" },
    { icon: "School", value: "دوره ها" },
  ];
const Layout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex">
        <SideBar items={sidebarItems} classes={'lg:basis-1/4'}/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
