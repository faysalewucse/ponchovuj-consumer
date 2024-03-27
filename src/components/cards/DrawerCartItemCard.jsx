import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Counter } from "../Counter";
import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export const DrawerCartItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      {/* TODO: make this div dynamic. */}
      <div className="relative flex gap-x-3 py-10">
        <Image width={100} src={item.image} />
        <button className="absolute top-8 -left-2 bg-white rounded-full drop-shadow-lg hover:bg-primary hover:text-white p-[2px]">
          <IoClose size={20} fontWeight={100} />
        </button>
        <div className="space-y-2">
          <p className="font-semibold text-base hover:text-primary transition-300">
            {item.name}
          </p>
          <p>
            {quantity} x ${item.price}
          </p>
          <Counter quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between font-semibold text-lg py-4">
        <p>Subtotal:</p>
        <p className="text-primary">$ {quantity * item.price}</p>
      </div>
      <hr />
      <div className="flex  gap-10 pt-4">
        <PrimaryButton label={"View Cart"} extraClass={"rounded-none py-7"} />
        <PrimaryButton label={"Checkout"} extraClass={"rounded-none py-7"} />
      </div>
    </div>
  );
};
