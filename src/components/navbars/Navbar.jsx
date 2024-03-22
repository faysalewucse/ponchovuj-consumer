import React from "react";
import { TopNavbar } from "./top-nav/TopNavbar";
import { TopSecondNavbar } from "./top-second-nav/TopSecondNavbar";
import MainNavbar from "./MainNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="border-b hidden md:block">
        <TopNavbar />
      </div>
      <TopSecondNavbar />
      <MainNavbar />
    </div>
  );
};

export default Navbar;
