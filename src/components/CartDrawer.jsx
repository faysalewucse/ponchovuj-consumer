import { IoClose } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import { DrawerCartItemCard } from "./cards/DrawerCartItemCard";
import { mockItem } from "@/constant";

const CartDrawer = ({ isOpen, toggleDrawer, setIsOpen }) => {
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
      <DrawerCartItemCard item={mockItem} />
    </Drawer>
  );
};

export default CartDrawer;
