"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

export const Cart = () => {
  // state for cart open and close
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    // Add event listener when cart opens
    if (isCartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove event listener when cart closes
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCartOpen]);

  return (
    <div
      onClick={() => setIsCartOpen(true)}
      className="flex items-center gap-x-5 hover:text-red-400 cursor-pointer transition-colors duration-300"
    >
      <button className="text-black/65 relative -z-10">
        <MdOutlineShoppingCart size={25} />
        <span className="font-medium text-sm absolute -top-2 md:-right-2 -right-3 md:bg-red-400 md:text-white rounded-full px-[4px]">
          0
        </span>
      </button>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 transition-all duration-300" />
      )}
      <div
        ref={cartRef}
        className={`fixed h-screen bg-white text-black top-0 drop-shadow-lg  md:px-14 px-10 py-10 transition-all duration-300 ${
          isCartOpen ? "right-0" : "-right-96"
        }`}
      >
        <p className="flex items-center justify-between border-b pb-5">
          Cart{" "}
          <span onClick={() => setIsCartOpen(false)} className="cursor-pointer">
            <IoClose size={25} />
          </span>
        </p>
        <p className="font-bold pt-5">Your cart is currently empty.</p>
      </div>
      <div className=" hidden md:block">
        <p className="font-semibold">Your Cart</p>
        <p className="text-red-400 font-medium mt-0">$0.00</p>
      </div>
    </div>
  );
};
