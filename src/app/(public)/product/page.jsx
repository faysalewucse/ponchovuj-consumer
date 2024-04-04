"use client";
import { TitleWithDescription } from "@/components/TitleWithDescription";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProductFilters } from "@/components/product/ProductFilters";
import { ProductPagination } from "@/components/product/ProductPagination";
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
          <ProductPagination />
        </div>
      </Container>
      <TitleWithDescription
        title={"Featured Collection"}
        description={"There are many variations of passages"}
      />
    </main>
  );
}
