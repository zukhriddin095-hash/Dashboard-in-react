import React from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaProductHunt, FaUsers, FaUserSecret } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-gray-100 text-gray-900 h-screen p-2 md:p-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-2xl font-bold hidden md:block mt-4 text-center font-mono">
        CWY shop
      </h1>
      <ul className="flex flex-col items-center gap-3 md:items-start  mt-5 text-xl">
        <li
          onClick={() => navigate("/")}
          className={`flex items-center py-3 px-4 rounded space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
            location.pathname === "/" ? "bg-blue-500 text-white" : ""
          }`}
        >
          <RiDashboardHorizontalLine />
          <span className="hidden md:inline">Dashboard</span>
        </li>

        <li
          onClick={() => navigate("/users")}
          className={`flex items-center py-3 px-4 rounded space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
            location.pathname === "/users" ? "bg-blue-500 text-white" : ""
          }`}
        >
          <FaUserSecret />
          <span className="hidden md:inline">Users</span>
        </li>

        <li
          onClick={() => navigate("/products")}
          className={`flex items-center py-3 px-4 rounded space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
            location.pathname === "/products" ? "bg-blue-500 text-white" : ""
          }`}
        >
          <FaProductHunt />
          <span className="hidden md:inline">Products</span>
        </li>

        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
          <IoSettings />
          <span className="hidden md:inline">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
