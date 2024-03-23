import { BiSolidCategory } from "react-icons/bi";
import Container from "@/components/shared/Container";
import { ProductCard } from "@/components/cards/ProductCard";
import { mockItem } from "@/constant";

export default function Home() {
  return (
    <main className="p-10">
      <Container className="flex gap-10">
        <div>
          <div className="flex items-center gap-2 bg-dark1 text-white p-3">
            <BiSolidCategory />
            <h1 className="">All Categories</h1>
          </div>
          <div className="border p-2">
            <CategoryTree categories={categories} />
          </div>
        </div>
        <div className="grid grid-cols-4 flex-1">
          <ProductCard item={mockItem} />
        </div>
      </Container>
    </main>
  );
}

const Category = ({ category }) => {
  return (
    <ul>
      <li className="p-2">{category.name}</li>
      {category.subcategories &&
        category.subcategories.map((subcategory) => (
          <Category key={subcategory.name} category={subcategory} />
        ))}
    </ul>
  );
};

// Main component to render the category tree
const CategoryTree = ({ categories }) => {
  return (
    <div>
      {Object.values(categories).map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
};

// Sample categories object
const categories = {
  glasses: {
    name: "Glasses",
    subcategories: [
      {
        name: "Sunglasses",
        subcategories: [
          { name: "Men" },
          { name: "Women" },
          { name: "Kids" },
          { name: "Seniors (Old)" },
        ],
      },
      {
        name: "Prescription Glasses",
        subcategories: [
          { name: "Men" },
          { name: "Women" },
          { name: "Kids" },
          { name: "Seniors (Old)" },
        ],
      },
    ],
  },
};
