import { CartItemCard } from "@/components/cards/CartItemCard";
import { mockItem } from "@/constant";

const CartPage = () => {
  return (
    <div>
      <CartItemCard item={mockItem} />
    </div>
  );
};

export default CartPage;
