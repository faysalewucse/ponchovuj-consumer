import { IoClose } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import { DrawerCartItemCard } from "./cards/DrawerCartItemCard";
import img from "@/assets/product_1.webp";

const CartDrawer = ({ isOpen, toggleDrawer, setIsOpen }) => {
  const item = { name: "Cart Item", image: img, price: 45 };
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="p-10"
      style={{
        width: "430px",
      }}
    >
      {/* Cart Drawer Header */}
      <div className="flex justify-between pb-5 border-b">
        <p className="font-semibold text-lg">Cart</p>
        <button onClick={() => setIsOpen(false)}>
          <IoClose size={25} />
        </button>
      </div>

      {/* Cart Drawer Items */}
      <DrawerCartItemCard item={item} />
    </Drawer>
  );
};

export default CartDrawer;
