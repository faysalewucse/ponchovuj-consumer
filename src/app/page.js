import { ProductCard } from "@/components/cards/ProductCard";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-10 m-10">
        <ProductCard />
      </div>
    </main>
  );
}
