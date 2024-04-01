import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export const Sort = () => {
  const [sortValue, setSortValue] = React.useState(new Set([]));
  console.log(sortValue);
  return (
    <div className="w-1/4 ml-auto pb-10">
      <Select
        selectedKeys={sortValue}
        onSelectionChange={setSortValue}
        placeholder="Sort By"
        variant="bordered"
        radius="none"
        classNames={{
          base: "p-0",
          popoverContent: "rounded-none",
        }}
      >
        {sortByOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

const sortByOptions = [
  { label: "Featured", value: "manual" },
  { label: "Best Selling", value: "best-selling" },
  { label: "Alphabetically, A-Z", value: "title-ascending" },
  { label: "Alphabetically, Z-A", value: "title-descending" },
  { label: "Price, low to high", value: "price-ascending" },
  { label: "Price, high to low", value: "price-descending" },
  { label: "Date, new to old", value: "created-descending" },
  { label: "Date, old to new", value: "created-ascending" },
];
