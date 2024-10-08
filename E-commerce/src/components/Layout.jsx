import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar className={" bg-white sticky top-0"}/>
      <Outlet />
      {/* <h1 className="bg-gray-300 h-16 text-center ">This is Footer</h1> */}
    </>
  );
}

export default Layout;
