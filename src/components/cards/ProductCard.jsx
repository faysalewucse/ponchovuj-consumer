import Image from "next/image";
import img from "@/assets/product_1.webp";
import Link from "next/link";
import { FaRegEye, FaShoppingCart, FaRegHeart } from "react-icons/fa";

export const ProductCard = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-3 cursor-pointer ">
      <div className="relative overflow-hidden ">
        <Image
          className="group-hover:scale-110 transition-300 object-cover"
          src={img}
        />
        <div className="absolute group-hover:top-3/4 top-96 flex justify-center gap-x-3 transition-300 px-9">
          <button className="bg-white text-black hover:text-white hover:bg-primary transition-300 p-4">
            <FaRegEye size={20} />
          </button>
          <button className="bg-white text-black hover:text-white hover:bg-primary transition-300 p-4">
            <FaShoppingCart size={20} />
          </button>
          <button className="bg-white text-black hover:text-white hover:bg-primary transition-300 p-4">
            <FaRegHeart size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center font-semibold gap-2">
        <Link
          href={"/product/1"}
          className=" group-hover:text-primary transition-300"
        >
          {"Complementary Product-1"}
        </Link>
        <p className="font-normal">${"23"}</p>
      </div>
    </div>
  );
};
