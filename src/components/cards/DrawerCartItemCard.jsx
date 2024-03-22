import Image from "next/image";
import { IoClose } from "react-icons/io5";

export const DrawerCartItemCard = ({ item }) => {
  return (
    <div>
      <div className="relative flex gap-x-3 pt-10">
        <Image width={100} src={item.image} />
        <button className="absolute bg-white rounded-full drop-shadow-lg hover:bg-primary hover:text-white">
          <IoClose />
        </button>
        <div>
          <p className="font-semibold pb-2 text-base hover:text-primary transition-300">
            {item.name}
          </p>
          <p>
            {"Item Count"} x ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};
