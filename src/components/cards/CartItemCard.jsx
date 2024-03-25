"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Counter } from "../Counter";

export const CartItemCard = ({ item }) => {
  //state for quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex items-center justify-between font-medium border p-3">
        <Image width={100} src={item.image} />
        <p className=" hover:text-primary transition-300 cursor-pointer">
          {item.name}
        </p>
        <p>${item.price}</p>
        <Counter quantity={quantity} setQuantity={setQuantity} />
        <p>${item.price * quantity}</p>
        <button className="pr-3">
          <IoClose size={25} className="font-bold" />
        </button>
      </div>
    </div>
  );
};
