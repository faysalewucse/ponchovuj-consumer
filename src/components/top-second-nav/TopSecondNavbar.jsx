"use client";
import { Dropdown, Input } from "keep-react";
import Brand from "../Brand";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Cart } from "../Cart";

export const TopSecondNavbar = () => {
  return (
    <nav className="max-w-6xl mx-auto py-7 flex items-center md:justify-between justify-around md:gap-x-9">
      <Brand />
      <div className="md:flex items-center gap-x-4 hidden">
        <PiPhoneCallLight size={40} color="gray" />
        <p className="flex flex-col font-light">
          Get Support <span className="font-semibold">123-456-789-10</span>
        </p>
      </div>
      <div className="relative flex-grow hidden md:block">
        <Input
          placeholder="Search Our Store"
          type="text"
          style={{ borderRadius: 0 }}
        />
        <button className="absolute top-1/4 right-3">
          <IoIosSearch size={25} className="text-transparent/60" />
        </button>
      </div>
      <div>
        <Dropdown
          action={
            <button className="text-black/65">
              <FaRegUser size={22} />
            </button>
          }
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
      </div>
      <Cart />
      <button className="md:hidden">
        <HiOutlineBars3 size={25} />
      </button>
    </nav>
  );
};
