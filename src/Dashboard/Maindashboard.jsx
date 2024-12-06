import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import iconSidebar from "../components/iconSidebar"
// import iconSidebar from "../components/Sidebar";
const MainDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col h-screen bg-black dark:bg-white text-white dark:text-blac">
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0  flex-1 overflow-y-hidden z-30 bg-black dark:bg-white ">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex flex-1 p-0 pt-16 bg-black dark:bg-[#f0fff0] ">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-screen  z-50  transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:translate-x-0 pl-0 w-[100px] md:w-[60px]  md:hover:w-[200px] lg:w-[62px] lg:hover:w-[200px] xl:w-[70px]  xl:hover:w-[250px] `}
        >
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-0  overflow-y-auto bg-black dark:bg-white ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainDashboard;
