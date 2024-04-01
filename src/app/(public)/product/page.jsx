"use client";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProductFilters } from "@/components/product/ProductFilters";
import { Sort } from "@/components/product/Sort";
import Container from "@/components/shared/Container";

export default function page() {
  return (
    <main className="p-10">
      <Container className="flex gap-10">
        <div className="">
          <ProductFilters />
        </div>
        <div className="flex-1">
          <Sort />
          <div className="grid grid-cols-4 gap-3">
            <ProductCard />
          </div>
        </div>
      </Container>
    </main>
  );
}
