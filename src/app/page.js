import { CartItemCard } from "@/components/cards/CartItemCard";
import { ProductCard } from "@/components/cards/ProductCard";
import MainNavbar from "@/components/navbars/MainNavbar";
import { TopNavbar } from "@/components/navbars/top-nav/TopNavbar";
import { TopSecondNavbar } from "@/components/navbars/top-second-nav/TopSecondNavbar";

export default function Home() {
  return (
    <main>
      <div className="border-b hidden md:block">
        <TopNavbar />
      </div>
      <TopSecondNavbar />
      <MainNavbar />

      <div className="grid grid-cols-4 gap-10 m-10">
        <ProductCard />
      </div>
    </main>
  );
}
