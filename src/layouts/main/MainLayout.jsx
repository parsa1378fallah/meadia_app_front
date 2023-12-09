import { Outlet } from "react-router-dom";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar.jsx";
import { sidebarItems } from "../../../data/data";
const Layout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex">
        <SideBar items={sidebarItems} classes={"lg:basis-1/4"} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
