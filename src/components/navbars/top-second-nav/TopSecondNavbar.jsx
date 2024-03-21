"use client";
import { Dropdown, Input } from "keep-react";
import Brand from "../../Brand";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaUserAltSolid } from "react-icons/lia";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export const TopSecondNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="z-0 max-w-6xl mx-auto p-5 flex items-center justify-between">
      <Brand />
      <div className="lg:flex items-center gap-x-2 hidden">
        <PiPhoneCallLight className="text-4xl text-" />
        <p className="flex flex-col font-light text-sm">
          Get Support <span className="font-semibold">123-456-789-10</span>
        </p>
      </div>
      <div className="relative w-1/2">
        <Input
          placeholder="Search Our Store"
          type="text"
          className="rounded"
          style={{ borderRadius: 0 }}
        />
        <button className="absolute top-1/4 right-3">
          <IoIosSearch size={25} className="text-transparent/60" />
        </button>
      </div>
      <div className="flex gap-8 items-center">
        <Dropdown
          placement="bottom-end"
          action={<LiaUserAltSolid className="text-4xl text-black" />}
          actionClassName="p-0 border-none"
        >
          <Dropdown.List>
            <Dropdown.Item>My Account</Dropdown.Item>
            <Dropdown.Item>Wishlist</Dropdown.Item>
            <Dropdown.Item>Compare</Dropdown.Item>
            <Dropdown.Item>Search</Dropdown.Item>
            <Dropdown.Item>Login</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
        <div className="relative">
          <HiOutlineShoppingBag
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl cursor-pointer"
          />

          <div className="absolute -top-2 -right-2 bg-primary text-white flex items-center justify-center rounded-full w-5 h-5 text-sm">
            {7}
          </div>
        </div>

        <p className="font-bold text-primary text-lg">৳ 3900.0</p>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="p-10"
        style={{
          width: "500px",
        }}
      >
        <div>TODO: Cart Design</div>
      </Drawer>
    </nav>
  );
};
