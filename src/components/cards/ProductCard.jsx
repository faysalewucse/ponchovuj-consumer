import Image from "next/image";
import img from "@/assets/product_1.webp";
import Link from "next/link";

export const ProductCard = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-3 cursor-pointer ">
      <div className=" overflow-hidden ">
        <Image
          className="group-hover:scale-110 transition-300 object-cover"
          src={img}
        />
      </div>
      <div className="flex flex-col items-center font-semibold gap-2">
        <Link
          href={"/product/1"}
          className=" group-hover:text-primary transition-300"
        >
          {"Complementary Product-1"}
        </Link>
        <p>${"23"}</p>
      </div>
    </div>
  );
};