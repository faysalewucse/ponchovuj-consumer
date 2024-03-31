"use client";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProductFilters } from "@/components/product/ProductFilters";
import Container from "@/components/shared/Container";

export default function page() {
  return (
    <main className="p-10">
      <Container className="flex gap-10">
        <div className="px-10">
          <ProductFilters />
        </div>
        <div className="grid grid-cols-4 gap-3 flex-1">
          <ProductCard />
        </div>
      </Container>
    </main>
  );
}
