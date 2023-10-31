import React from "react";
import { Logo } from "..";
import { NavLink } from "react-router-dom";

const NavbarManage = () => {
  return (
    <div className="h-[136px] px-[15%] text-white">
      <div className="h-[50%] border-b border-gray-400 flex items-center justify-between">
        <Logo />
        <span>Help</span>
      </div>
      <div className="h-[50%] flex items-center justify-between">
        <nav className="flex gap-8">
          <NavLink to={"/manage"}>Home</NavLink>
          <NavLink to={"/manage"}>Create</NavLink>
          <NavLink to={"/manage"}>Manage</NavLink>
          <NavLink to={"/manage"}>Booking</NavLink>
          <NavLink to={"/manage"}>Performance</NavLink>
        </nav>
        <p>
          <button className="px-4 py-2 text-white bg-blue-800 rounded-lg">Log out</button>
        </p>
      </div>
    </div>
  );
};

export default NavbarManage;
