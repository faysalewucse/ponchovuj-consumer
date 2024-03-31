"use client";
import { Input } from "keep-react";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import "react-modern-drawer/dist/index.css";
import CartDrawer from "@/components/CartDrawer";
import Brand from "../Brand";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export const TopSecondNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="z-0 max-w-7xl mx-auto p-5 flex items-center justify-between">
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
        <Dropdown classNames={{ content: "rounded-none" }}>
          <DropdownTrigger>
            <Button variant="flat" className="bg-transparent">
              <FiUser size={30} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="dropdown-actions" variant="flat">
            {dropdownItems.map((item) => (
              <DropdownItem
                key={item.label}
                href={item.href}
                className="rounded-none"
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <div className="flex items-center gap-5">
          <div className="relative">
            <Badge
              content={"7"}
              shape="circle"
              className="bg-primary text-white"
              placement="top-right"
            >
              <HiOutlineShoppingBag
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl cursor-pointer"
              />
            </Badge>
          </div>

          <p className="font-bold text-primary text-lg">৳ 3900.0</p>
        </div>
      </div>

      <CartDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

const dropdownItems = [
  { label: "My Account", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Compare", href: "/compare" },
  { label: "Search", href: "/search" },
  { label: "Login", href: "/login" },
];
