import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import img from "@/assets/product_1.webp";
import Link from "next/link";

export const WishlistCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="relative overflow-hidden ">
        <Image className=" object-cover" src={img} />
      </div>
      <div className="flex flex-col items-center font-semibold gap-2">
        <Link href={"/product/1"}>{"Complementary Product-1"}</Link>
        <p className="font-normal">${"23"}</p>
        <div className="flex gap-x-3 mt-2">
          <PrimaryButton label={"Add to cart"} extraClass={"rounded-none"} />
          <PrimaryButton
            label={"Delete"}
            extraClass={"rounded-none bg-black px-2"}
          />
        </div>
      </div>
    </div>
  );
};
