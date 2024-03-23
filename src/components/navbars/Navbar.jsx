import React from "react";
import { TopNavbar } from "./top-nav/TopNavbar";
import MainNavbar from "./MainNavbar";
import { TopSecondNavbar } from "./TopSecondNavbar";

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
