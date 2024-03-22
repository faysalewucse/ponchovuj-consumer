"use client";
import Image from "next/image";
import { Input } from "keep-react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const CartItemCard = ({ item }) => {
  //state for quantity
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex items-center justify-between font-medium border p-3">
        <Image width={150} src={item.Image} />
        <p className=" hover:text-primary transition-300 cursor-pointer">
          {item.name}
        </p>
        <p>${item.price}</p>
        <div className="flex items-center">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="border p-[7px] text-xl font-semibold"
          >
            -
          </button>
          <Input
            type="text"
            defaultValue={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ borderRadius: 0, width: "20%", fontWeight: "bold" }}
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border p-[7px] text-xl font-semibold"
          >
            +
          </button>
        </div>
        <p>${item.price * quantity}</p>
        <button className="pr-3">
          <IoClose size={25} className="font-bold" />
        </button>
      </div>
    </div>
  );
};
