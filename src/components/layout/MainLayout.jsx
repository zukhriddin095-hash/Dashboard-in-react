import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
