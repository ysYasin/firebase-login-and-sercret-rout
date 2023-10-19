import React from "react";
import Nave from "../Home/Nave";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nave></Nave>
      <Outlet />
    </div>
  );
};

export default Layout;
