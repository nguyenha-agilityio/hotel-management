import Sidebar from "../sideBar";
import roomIcon from "../../assets/icons/room.svg";
import logoIcon from "../../assets/icons/logo.svg";
import rateIcon from "../../assets/icons/rate.svg";
import search from "../../assets/icons/search.svg";
import Header from "../header";
import "./index.css";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <Sidebar room={roomIcon} logo={logoIcon} rate={rateIcon} />
      <main className="content-container">
        <Header search={search} />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
