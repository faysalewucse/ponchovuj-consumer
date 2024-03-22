import Image from "next/image";
import img from "../../../public/product_1.webp";

export const ProductCard = ({ item }) => {
  return (
    <div className="group flex flex-col gap-y-3 cursor-pointer ">
      <div className=" overflow-hidden ">
        <Image
          className="group-hover:scale-110 transition-300"
          src={img}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center font-semibold gap-2">
        <p className=" group-hover:text-primary transition-300">
          {"Complementary Product-1"}
        </p>
        <p>${"23"}</p>
      </div>
    </div>
  );
};
