"use client";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import img from "@/assets/product_1.webp";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const AddedToCartModal = ({ isModalOpen, setModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50 transition-300"
          onClick={handleOutsideClick}
        >
          <div className="relative bg-white p-5 transition-300">
            <button className="absolute top-1 right-0 p-2" onClick={closeModal}>
              <IoClose size={25} />
            </button>
            <div className="flex items-center gap-5">
              <Image src={img} alt="product_1" width={130} />

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">V. AR/3D Product</h2>
                <p className="flex items-center gap-1">
                  <span className="bg-green-400 rounded-full text-white">
                    <MdDone />
                  </span>{" "}
                  <span>Successfully added to your Cart</span>
                </p>
                <div className="flex gap-x-4">
                  <Link
                    href={"/cart"}
                    className="bg-primary text-white font-medium px-4 py-2"
                  >
                    View Cart
                  </Link>
                  <Link
                    href={"/"}
                    className="bg-black text-white font-medium px-4 py-2"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
