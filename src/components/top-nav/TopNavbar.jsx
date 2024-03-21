"use client";
import { Dropdown } from "keep-react";
import { BrandMail } from "./BrandMail";
import { Socials } from "./Socials";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";

export const TopNavbar = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between py-3">
        <div className="flex gap-x-7">
          <BrandMail />
          <div className="flex items-center gap-x-2 text-sm">
            <IoLocationOutline color="red" />

            <p>3B, Sector 1, Address, City</p>
          </div>
        </div>
        <div className="flex gap-x-7">
          <Dropdown
            action={
              <button className="flex items-center text-black font-medium text-sm p-0">
                English <FaArrowDownLong color="red" />
              </button>
            }
            actionClassName="p-0 border-none"
          >
            <Dropdown.List>
              <Dropdown.Item>Bangla</Dropdown.Item>
              <Dropdown.Item>Arabic</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
          <Socials />
        </div>
      </div>
    </div>
  );
};
