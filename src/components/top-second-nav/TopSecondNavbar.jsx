"use client";
import { Dropdown, Input } from "keep-react";
import Brand from "../Brand";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";

export const TopSecondNavbar = () => {
  // state for cart open and close
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto py-5 flex items-center justify-between">
      <Brand />
      <div className="md:flex items-center gap-x-4 hidden">
        <PiPhoneCallLight size={40} color="gray" />
        <p className="flex flex-col font-light">
          Get Support <span className="font-semibold">123-456-789-10</span>
        </p>
      </div>
      <div className="relative flex-1">
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
      {/* TODO: Do the cart toggle by clicking the cart button  */}
      {/* <div className="relative">
        <button onClick={() => setIsCartOpen(true)} className="text-black/65">
          <MdOutlineShoppingCart size={25} />
        </button>
        <div
          className={`absolute h-screen bg-white top-0 shadow-sm ${
            isCartOpen ? "right-0" : "-right-80"
          }`}
        >
          <p>Cart</p>
          <p className="font-bold">Your cart is currently empty.</p>
        </div>
      </div> */}
    </nav>
  );
};
